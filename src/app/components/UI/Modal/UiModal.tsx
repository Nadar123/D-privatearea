import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import styled from 'styled-components'
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'

type Props = {
  BubbleText?: string
  children?: JSX.Element
  onClick?: () => void
  icon?: JSX.Element
  open?: boolean
  handleClose?: any
  className?: any
}

const style = {
  position: 'absolute',
  top: '66%',
  left: '31%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
  [theme.breakpoints.down('md')]: {
    left: '103px'
  }
}

function UiModal({ className, open, handleClose, BubbleText, icon, onClick, children }: Props) {
  const OnClickModal = () => {
    onClick && onClick()
  }

  return (
    <ModalMainContainer onClick={OnClickModal} className={className}>
      <Fade in={open}>
        <Box sx={style} className='modal-main-wrap'>
          <ModalBubbleWrapper>
            {icon}
            <ModalText>{BubbleText}</ModalText>
          </ModalBubbleWrapper>
          <div className='inner-wrap'>
            <CloseIconWrapper onClick={handleClose}>&#9747;</CloseIconWrapper>
            <div style={{ cursor: 'pointer' }}>{children}</div>
          </div>
        </Box>
      </Fade>
    </ModalMainContainer>
  )
}

export default UiModal

const ModalMainContainer = styled('div')({
  '& .modal-main-wrap': {
    borderRadius: '10px',
    padding: '1rem',
    zIndex: '9'
  }
})
const ModalBubbleWrapper = styled('div')({
  width: '118px',
  height: '110px',
  position: 'absolute',
  top: '-45px',
  left: '0',
  right: '0',
  margin: 'auto'
})
const ModalText = styled('div')({
  position: 'absolute',
  top: '21px',
  left: '0',
  right: '0rem',
  margin: 'auto',
  textAlign: 'center',
  fontSize: '22px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.lightBrown
})
const CloseIconWrapper = styled('div')({
  position: 'absolute',
  top: '11px',
  left: '11px',
  cursor: 'pointer',
  fontSize: '12px',
  background: Colors.lightBlueBG,
  padding: '2px 5px 0 5px',
  textAlign: 'center',
  '&:hover': {
    background: Colors.white
  }
})
