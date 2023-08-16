import React, { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ItemList, ListMassage, TextDimriBold } from '../../../constants/styled.components.constants'
import ChatSideBar, { ItemText } from './ChatSideBar'
import NewChatMessage from './NewChatMessage'
import Loader from '../../UI/Loader/Loader'
import { useChatMessages } from '../../../hooks/useAddMessage/useChatMessages'
import _ from 'lodash'

type Props = {
  allQuestionsData?: any
  newRequestState?: any
  selectedSubCategory?: string | undefined
  loading?: any
}

function ChatList({ loading, allQuestionsData, newRequestState, selectedSubCategory }: Props) {
  const { setMessages, setCallID, setStatusID } = useChatMessages()
  const current = new Date()
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`

  const [searchParams, setSearchParams] = useSearchParams()
  const isNewRequest = searchParams.get('new') === '1'

  const [sortMsg, setSortMsg] = useState([])
  const [sorted, setSorted] = useState(false)
  const [sortOrder, setSortOrder] = useState('desc')
  const [selectedStatus, setSelectedStatus] = useState(-3)

  useEffect(() => {
    const services = allQuestionsData || []
    if (services.length === 0 || isNewRequest) {
      return
    }
    const firstMessages = allQuestionsData[0].ActivityCalls
    setMessages(firstMessages)
    setCallID(allQuestionsData[0].callID)
    setStatusID(allQuestionsData[0].statusID)
  }, [allQuestionsData])

  const onExisitsMessageItemClicked = (item: any) => {
    const messages = item.ActivityCalls
    searchParams.delete('new')
    setSearchParams(searchParams)
    setCallID(item.callID)
    setStatusID(item.statusID)
    setMessages(messages)
  }

  const onNewMessage = () => {
    setMessages(newRequestState)
  }

  const chatList = useMemo(() => {
    let data = allQuestionsData || []
    return data
      .filter((item: any) => item.statusID === selectedStatus)
      .sort((a: any, b: any) => {
        if (sortOrder === 'asc') {
          return new Date(a.createDate).getTime() - new Date(b.createDate).getTime()
        } else {
          return new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
        }
      })
  }, [allQuestionsData, selectedStatus, sortOrder])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <ChatSideBar
        setSelectedStatus={setSelectedStatus}
        selectedStatus={selectedStatus}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        allQuestionsData={chatList}
      />

      <ListMassage className={isNewRequest ? 'remove msg-scroll' : 'msg-scroll'}>
        {isNewRequest && (
          <NewChatMessage onNewMessage={onNewMessage} selectedSubCategory={selectedSubCategory} date={date} />
        )}

        {chatList.length > 0 ? (
          chatList.map((item: any, index: any) => (
            <React.Fragment key={index}>
              <ItemList
                className={index === 0 ? 'firstMsg remove-bg' : !isNewRequest ? 'on' : ''}
                onClick={() => onExisitsMessageItemClicked(item)}
              >
                <div className='inner'>
                  <TextDimriBold>
                    {item.subject} <span className='orange-dot'></span>
                  </TextDimriBold>
                  <ItemText className='appeal-num'>מספר פנייה {item.callID}</ItemText>
                  <ItemText className='pad-12'>
                    {item.statusID === -2 ? 'בטיפול' : item.statusID === -1 ? 'סגור' : 'פתוח'}
                  </ItemText>
                </div>
                <ItemText>{new Date(item.createDate).toLocaleDateString()}</ItemText>
              </ItemList>
            </React.Fragment>
          ))
        ) : (
          <p
            style={{
              padding: '2rem',
              textAlign: 'center',
              fontSize: '30px'
            }}
          >
            אין הודעות{' '}
          </p>
        )}
      </ListMassage>
    </>
  )
}

export default ChatList
