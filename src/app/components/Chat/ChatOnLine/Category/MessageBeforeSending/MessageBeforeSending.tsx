import React, { useState } from 'react'
import axios from 'axios'
import { useAppSelector } from '../../../../../hooks/redux.hooks'
import { List, ListItem, ListItemText } from '@mui/material'
/*style*/
import styled from 'styled-components'
import { Colors } from '../../../../../constants/styles.constants'
import { SmallText } from '../../../../../constants/styled.components.constants'
import Loader from '../../../../UI/Loader/Loader'
import { SERVER_URLS, API_ENDPOINTS } from '../../../../../constants/api.constant'
import { useChatMessages } from '../../../../../hooks/useAddMessage/useChatMessages'

type Props = {
  setVisibleForm?: any
  setAnswerButton?: any
  selectedCategory: any
  selectedSubCategory?: any
  formData?: string | null
  onBlockerReset(): any | undefined
}

function MessageBeforeSending({
  selectedCategory,
  selectedSubCategory,
  setVisibleForm,
  setAnswerButton,
  onBlockerReset,

  formData
}: Props) {
  const { updateMessageText, messages, callID } = useChatMessages()
  const { contractId, projectId } = useAppSelector((state: { user: any }) => state.user)
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState<{}>({})
  const [load, setLoad] = useState('')
  const [selectedOption, setSelectedOption] = useState(false)
  const token = useAppSelector((state) => state.user.user?.info.token)

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const handleClick = async (index: any) => {
    if (callID) {
      const messageData = {
        subDescription: selectedSubCategory?.text || '',
        note: formData,
        projectId: projectId,
        contractId: contractId,
        serviceCallID: callID
      }
      try {
        const { data } = await axios.post(`https://api.dimriapps.com/user/sendActivity`, messageData, config)
        setMessage(data.data)
        setShowMessage(true)
        setAnswerButton(true)
        onBlockerReset()
      } catch (err) {
        console.log(err)
      }
    } else {
      if (index === 0) {
        setVisibleForm(true)
        updateMessageText(messages.length - 1, 'מה תרצה להוסיף')
      } else if (index === 1) {
        setSelectedOption(!selectedOption)
        setLoad('ההודעה נשלחה אנא המתן מספר שניות לקבלת מספר פנייה  :)')

        const messageData = {
          sugCode: selectedCategory.id,
          subCode: selectedSubCategory?.subCode || selectedCategory.subCode,
          subDescription: selectedSubCategory?.text || selectedCategory.subDescription,
          note: formData,
          empCode: selectedSubCategory?.empCode || selectedCategory.empCode,
          projectId: projectId,
          contractId: contractId
        }
        try {
          //const { data } = await axios.post(SERVER_URLS.API_ENDPOINTS.SEND_QUESTION, messageData, config)
          const { data } = await axios.post(`https://api.dimriapps.com/user/sendQuestion`, messageData, config)
          setMessage(data.data.ServiceCallID)
          setShowMessage(true)
          setAnswerButton(true)
          //ADD:: CHECK WHY
          onBlockerReset()
        } catch (err) {
          console.log(err)
        }
      }
    }
  }

  return (
    <React.Fragment>
      {!showMessage ? (
        <>
          <MainWrapper className='show-box-1'>
            <>
              {!load ? (
                <>
                  <p>מעולה!🤓 משהו נוסף?</p>
                  <List sx={style} component='nav' aria-label='mailbox 2 folders'>
                    <ListItem button>
                      <ListItemText onClick={() => handleClick(0)} primary='כן, אני רוצה להרחיב' />
                    </ListItem>
                    <ListItem button>
                      <ListItemText onClick={() => handleClick(1)} primary='לא, אפשר להתחיל לטפל בפניה' />
                    </ListItem>
                  </List>
                </>
              ) : (
                <p>{load}</p>
              )}
            </>
          </MainWrapper>
        </>
      ) : (
        <MainWrapper className='show-box'>
          <SmallText> תודה על פנייתך,</SmallText>
          {message ? (
            <>
              <SmallText>פנייה מס’ {message} הועברה לטיפול</SmallText>
            </>
          ) : (
            <>
              <p> פנייה הועברה לטיפול בהצלחה</p>
            </>
          )}
        </MainWrapper>
      )}
    </React.Fragment>
  )
}

export default MessageBeforeSending
const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper'
}

const MainWrapper = styled('div')({
  '&.chatstep': {
    bottom: '6rem'
  },
  '& nav': {
    background: 'none',
    padding: '0',
    '& .MuiListItem-padding.MuiListItem-button': {
      direction: 'rtl',
      textAlign: 'right',
      background: '#fff',
      borderRadius: '10px',
      margin: '4px 0'
    },
    '& hr': {
      display: 'none'
    },
    '& .hDTrgE': {
      paddingTop: '3px',
      paddingBottom: '3px'
    }
  },
  '& .MuiButtonBase-root-JvZdr': {
    background: Colors.white,
    borderRadius: '10px',
    textAlign: 'right',
    minHeight: '40px',
    height: '40px'
  }
})
