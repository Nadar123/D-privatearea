import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { Colors } from '../../../../constants/styles.constants'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../constants/routes.constants'

type Props = {
  onBlockerproceed(): any | undefined
  onBlockerReset(): any | undefined
}

function ModalChat({ onBlockerReset, onBlockerproceed }: Props) {
  const navigate = useNavigate()
  const [test, setTest] = useState(false)

  const handleReturnToChat = () => {
    onBlockerReset()
  }

  const handleDeleteChat = () => {
    onBlockerproceed()
    navigate({ pathname: ROUTES.DASHBOARD })
  }

  return (
    <>
      <ChatModal>
        <BodyModal>
          <ModalTitle>מחיקת טיוטה</ModalTitle>
          <ModalText> עבר זמן מאז שפתחת את הפניה החדשה האם ברצונך להמשיך?</ModalText>
          <SpaceWrapperAround>
            <Button variant='outlined' onClick={handleReturnToChat}>
              {' '}
              לא, חזור לצא׳ט
            </Button>
            <Button variant='outlined' onClick={handleDeleteChat}>
              {' '}
              כן, למחוק את הפניה
            </Button>
          </SpaceWrapperAround>
        </BodyModal>
      </ChatModal>
    </>
  )
}

export default ModalChat

const ChatModal = styled('div')({
  position: 'fixed',
  width: '100%',
  background: '#2c3e5080',
  height: '100%',
  zIndex: '999'
})
const BodyModal = styled('div')({
  background: Colors.white,
  padding: '2rem',
  width: '375px',
  height: '226px',
  position: 'absolute',
  top: '10rem',
  right: 0,
  left: 0,
  margin: 'auto',
  borderRadius: '10px',
  textAlign: 'center'
})
const ModalTitle = styled('h2')({
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '35px',
  lineHeight: '51px',
  textAlign: 'center'
})
const ModalText = styled('p')({
  fontStyle: 'normal',
  fontWeight: '300',
  fontSize: '20px',
  lineHeight: '29px',
  textAlign: 'center',
  color: Colors.brown,
  width: '70%',
  margin: 'auto',
  padding: '0 0 1rem 0'
})
const SpaceWrapperAround = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  '& .MuiButtonBase-root-JvZdr': {
    color: Colors.brown,
    fontSize: '18px',
    padding: '6px 6px',
    minWidth: '140px',
    borderRadius: '8px'
  }
})
