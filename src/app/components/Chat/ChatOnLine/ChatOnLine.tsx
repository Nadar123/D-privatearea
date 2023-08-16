import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { unstable_useBlocker as useBlocker } from 'react-router-dom'

import { useAppSelector } from '../../../hooks/redux.hooks'
import { useSearchParams } from 'react-router-dom'
import { useChatScroll } from '../../../hooks/useChatScroll/useChatScroll'
import { useChatMessages } from '../../../hooks/useAddMessage/useChatMessages'
import { useGetTimeMessage } from '../../../hooks/useGetTimeMessage/useGetTimeMessage'

import { Grid, styled } from '@mui/material'
import MyAppeals from '../MyAppeals/MyAppeals'
import Chatbackground from '../../../assets/images/Chatbackground.png'
import Category from './Category/Category'
import MessageBeforeSending from './Category/MessageBeforeSending/MessageBeforeSending'
import FormInput from '../FormInput/FormInput'
import ChatList from '../ChatSideBar/ChatList'
import ChatCard from './ChatCard/ChatCard'
import Loader from '../../UI/Loader/Loader'

import { DimanicText, ResponseTitle, SmallText, TitleFlexWrap } from '../../../constants/styled.components.constants'
import { theme } from '../../../constants/theme.constants'
import { Colors } from '../../../constants/styles.constants'
import ModalChat from './ModalChat/ModalChat'

type InitialStateType = {
  title: string | any
  text: JSX.Element | any
  owner: number | string | any
  timestamp: number | any
}[]

const ChatOnLine = () => {
  const { allQuestionsData, questionData, loading } = useAppSelector((state) => state.user) || []
  const user = useAppSelector((state) => state.user?.user?.info?.username)
  const { addMessage, updateMessageText, messages, setMessages, setCallID, callID, statusID, setStatusID } =
    useChatMessages()

  const { contractId, projectId } = useAppSelector((state: { user: any }) => state.user)

  const ref = useChatScroll()
  const timeStatement = useGetTimeMessage()
  const [searchParams, setSearchParams] = useSearchParams()

  //const isNewRequest = searchParams.get('new') === '1'
  // const [isBlock, setIsBlock] = useState<boolean>(false)
  // const blocker = useBlocker(isNewRequest)

  const isNewRequest = searchParams.get('new') === '1'
  const [isBlock, setIsBlock] = useState<boolean>(isNewRequest)
  const blocker = useBlocker(isBlock)
  const [openModal, setOpenModal] = useState(false)

  const [formData, setFormData] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [selectedSubCategory, setSelectedSubCategory] = useState<any>()
  const [selectedCategory, setSelectedCategory] = useState<any>()
  const [visibleForm, setVisibleForm] = useState(false)
  const [answerButton, setAnswerButton] = useState(false)

  const token = useAppSelector((state) => state.user.user?.info.token)

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const questionDataTitle = useMemo(() => {
    if (callID) {
      return allQuestionsData.find((call: any) => call.callID === callID)?.subject
    }

    return !isNewRequest
      ? allQuestionsData?.length && allQuestionsData[0].subject
      : selectedSubCategory
      ? selectedSubCategory?.text
      : ' פנייה חדשה'
  }, [allQuestionsData, isNewRequest, selectedSubCategory, callID])

  function getChatStatus(allQuestionsData: any, statusID: any) {
    if (allQuestionsData?.length) {
      switch (allQuestionsData[0].statusID) {
        case -3:
          return 'פתוח'
        case -2:
          return 'סגור'
        case -1:
          return 'בטיפול'
        default:
          return ''
      }
    }
    return ''
  }

  const messageChatStatus = useMemo(() => {
    return getChatStatus(allQuestionsData, statusID)
  }, [allQuestionsData, isNewRequest, statusID])

  const handleStepWithoutSubCategory = ({ text }: any) => {
    addMessage({
      // title: `${text}`,
      text: `בחרת ${text}. כתב/י כעת את נושא הפניה`,
      owner: 'chat',
      timestamp: Date.now()
    })
  }

  const onCategoryClick = ({ id, text, subCode, empCode, subDescription, items }: any) => {
    setSelectedCategory({ id, text, subCode, empCode, subDescription })

    updateMessageText(0, 'איך נוכל לעזור לך?')
    if (items.length === 0) {
      handleStepWithoutSubCategory({ text })
      setVisibleForm(true)
    } else {
      addMessage({
        title: `${text}`,
        text: (
          <ChatListInner>
            <SmallText>{`בחרת לפנות אלינו לגבי ${text} 👍 בחרֿֿֿ/י כעת תת נושא`}</SmallText>
            <Category
              categoryList={questionData}
              onSubCategoryClick={onSubCategoryClick}
              selectedSubCategory={selectedSubCategory}
              selectedCategory={id}
              onCategoryClick={onCategoryClick}
            />
          </ChatListInner>
        ),
        owner: 'chat',
        timestamp: Date.now()
      })
    }
  }

  const onSubCategoryClick = (item: any) => {
    const { text } = item
    setSelectedSubCategory(item)
    updateMessageText(
      1,
      `בחרת לפנות אלינו בנושא  ${text} 👍 
        בחר/י כעת תת נושא`
    )
    handleStepWithoutSubCategory({ text })
    setVisibleForm(true)
  }

  const newRequestState: InitialStateType = [
    {
      title: `היי ${user}, ${timeStatement} 👋`,
      text: (
        <ChatListInner>
          <SmallText>איך נוכל לעזור לך?</SmallText>
          <Category
            categoryList={questionData}
            onSubCategoryClick={onSubCategoryClick}
            selectedSubCategory={selectedSubCategory}
            selectedCategory={selectedCategory?.id}
            onCategoryClick={onCategoryClick}
          />
        </ChatListInner>
      ),
      owner: 'chat',
      timestamp: Date.now()
    }
  ]

  useEffect(() => {
    if (isNewRequest) {
      setMessages(newRequestState)
      setCallID(null)
    }
  }, [isNewRequest, questionData])

  const handleInputData = (message: any) => {
    if (message.trim() === '') {
      setError('שדה זה חייב להכיל תווים/הודעה')
      setTimeout(() => {
        setError('')
      }, 3000)
    } else {
      if (formData.length) {
        setFormData(formData + ' ' + message)
      } else {
        setFormData(message)
      }
    }
  }

  const handleMessageCalledActivity = async () => {
    const messageData = {
      subDescription: selectedSubCategory?.text || '',
      note: formData,
      projectId: projectId,
      contractId: contractId,
      serviceCallID: callID
    }

    try {
      await axios.post(`https://api.dimriapps.com/user/sendActivity`, messageData, config)

      addMessage({
        title: `בהמשך לפנייה ${callID} הודעתך נשלחה בהצלחה`,
        owner: 'chat',
        timestamp: Date.now()
      })
      setFormData('')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!formData.length) return
    addMessage({
      title: `${user}`,
      text: formData,
      owner: 'user',
      timestamp: Date.now()
    })

    if (callID) {
      handleMessageCalledActivity()
    } else {
      setTimeout(() => {
        addMessage({
          title: `${selectedSubCategory?.text || selectedCategory?.text}`,
          text: (
            <ChatListInner>
              <MessageBeforeSending
                onBlockerReset={() => {
                  setIsBlock(false)
                }}
                formData={formData}
                selectedCategory={selectedCategory}
                selectedSubCategory={selectedSubCategory}
                setAnswerButton={setAnswerButton}
                setVisibleForm={setVisibleForm}
              />
            </ChatListInner>
          ),
          owner: 'chat',
          timestamp: Date.now()
        })
      }, 1200)
    }
    setError('')
    setTimeout(() => setVisibleForm(true), 1200)
  }, [formData])

  if (loading) {
    return <Loader />
  }

  useEffect(() => {
    if (blocker.state === 'blocked') {
      setOpenModal(true)
    }
  }, [isNewRequest, blocker])

  useEffect(() => {
    setIsBlock(isNewRequest)
  }, [isNewRequest])

  return (
    <>
      {openModal ? (
        <ModalChat
          onBlockerReset={() => {
            blocker.reset?.()
            setOpenModal(false)
          }}
          onBlockerproceed={() => {
            blocker.proceed?.()
            setOpenModal(false)
          }}
        />
      ) : (
        ''
      )}

      <Grid
        item
        sx={{
          width: '100%',
          margin: '6rem 0 0 0',
          padding: '0 2rem',
          [theme.breakpoints.down('md')]: {
            padding: '1rem 0 0 0',
            margin: '7rem 0 0 0 !important',
            display: 'block'
          },
          [theme.breakpoints.down('xl')]: {
            margin: '5rem 0 0 0'
          }
        }}
        container
        spacing={3}
      >
        <MyAppeals newRequestState={newRequestState} setVisibleForm={setVisibleForm} />
        <Grid
          className='qwewwwaer'
          container
          spacing={2}
          sx={{
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column-reverse',
              width: '95%',
              margin: 'auto'
            }
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              [theme.breakpoints.down('md')]: {
                paddingBottom: '1rem'
              }
            }}
            style={{
              paddingTop: '0'
            }}
          >
            <ChatList
              newRequestState={newRequestState}
              selectedSubCategory={selectedSubCategory}
              allQuestionsData={allQuestionsData}
              loading={loading}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            style={{
              paddingTop: '0'
            }}
          >
            <TitleFlexWrap>
              <DimanicText className='padd-2'>{questionDataTitle}</DimanicText>
              {!isNewRequest && <ResponseTitle>{messageChatStatus} </ResponseTitle>}
            </TitleFlexWrap>
            <ChatBackground>
              <div
                className='sreen-chat'
                ref={ref}
                style={{
                  width: '100%',
                  overflow: 'scroll',
                  scrollbarWidth: 'none'
                }}
              >
                {messages &&
                  messages.map((item: any, index: any) => (
                    <React.Fragment key={index}>
                      <ChatCard
                        item={item}
                        subject={item?.subject}
                        title={item?.title}
                        owner={item?.owner}
                        text={item?.text}
                        timestamp={item?.timestamp}
                      />
                    </React.Fragment>
                  ))}
              </div>
              {(visibleForm || callID) && <FormInput error={error} handleInputData={handleInputData} />}
            </ChatBackground>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ChatOnLine

const TodayBubble = styled('div')({
  background: Colors.lightBrownSecond,
  display: 'inline-block',
  padding: '0px 10px',
  borderRadius: '12px',
  height: '22px',
  width: '45px',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
  fontSize: '14px',
  fontWeight: '400',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal'
})
const ChatListInner = styled('div')({
  width: '70%'
})
const ChatBackground = styled('div')({
  position: 'relative',
  backgroundImage: `url(${Chatbackground})`,
  width: '100%',
  height: '75vh',
  overflow: 'auto',
  overflowY: 'auto',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  flexDirection: 'column'
})
