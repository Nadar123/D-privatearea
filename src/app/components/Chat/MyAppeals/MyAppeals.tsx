import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../constants/routes.constants'
import { Plus, ButtonText, FlexWrapperTop, TextDimri, Arrow } from '../../../constants/styled.components.constants'
import { Button, styled } from '@mui/material'
/*styles*/
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'
import { useChatMessages } from '../../../hooks/useAddMessage/useChatMessages'

type Props = {
  newRequestState?: any
  setVisibleForm?: any
}

function MyAppeals({ setVisibleForm, newRequestState }: Props) {
  const { setMessages } = useChatMessages()
  const [clickedOnce, setClickedOnce] = useState(false)

  const navigate = useNavigate()

  const toNewAppealChat = () => {
    if (!clickedOnce) {
      navigate({
        pathname: ROUTES.NEWCHAT,
        search: '?new=1'
      })
      setVisibleForm(false)
      setMessages(newRequestState)
      setClickedOnce(true)
    } else {
      window.location.href = '/dashboard/onlinechat?new=1'
    }
  }

  return (
    <MainWrapper>
      <InnerFlex>
        <Link to={`${ROUTES.DASHBOARD}`}>
          <TextDimri>איזור אישי</TextDimri>
        </Link>

        <Arrow> {'>'} </Arrow>
        <InnerText>הפניות שלי</InnerText>
      </InnerFlex>
      <FlexWrapperTop>
        <Button variant='outlined'>
          <Plus>+</Plus>
          <ButtonText></ButtonText>
          <a onClick={toNewAppealChat}> פנייה חדשה</a>
        </Button>
      </FlexWrapperTop>
    </MainWrapper>
  )
}

export default MyAppeals

const MainWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '0 10px'
  }
})

const InnerFlex = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: ' 0 0 1.5rem 0',
  [theme.breakpoints.down('md')]: {
    padding: '0'
  }
})

const InnerText = styled('div')({
  fontSize: '18px',
  fontWeight: '600',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.black,
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px'
  }
})
