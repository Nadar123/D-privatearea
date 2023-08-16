import React from 'react'
import { Colors } from '../../../../constants/styles.constants'
import { theme } from '../../../../constants/theme.constants'
import { useAppSelector } from '../../../../hooks/redux.hooks'
import { ItemText } from '../../ChatSideBar/ChatSideBar'
import styled from 'styled-components'

type Props = {
  title?: string
  text?: string
  timestamp?: Date | any
  owner?: string
  subject?: string
  Notes?: string
  CntctDate?: string
  item?: string
}

function ChatCard({ item, Notes, subject, title, text, timestamp, owner }: Props) {
  console.log('item', item)

  return (
    <>
      <ChatSingle className={owner === 'user' ? 'user-chat' : 'chat show-box'}>
        {title && <ItemText className='name'>{title}</ItemText>}
        <ChatSingleInnerWrapper>
          <ItemWrapper> {text}</ItemWrapper>
          <p>{subject}</p>
          <ItemText className='timemsg'>
            <>
              {owner ? (
                <>{new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</>
              ) : (
                <>{new Date(timestamp).toLocaleDateString()}</>
              )}
            </>
          </ItemText>
        </ChatSingleInnerWrapper>
      </ChatSingle>
    </>
  )
}

export default ChatCard

const ChatSingle = styled('div')({
  minHeight: '62px',
  width: '50%',
  margin: '2rem',
  padding: '12px 16px 4px',
  borderRadius: '24px',
  background: Colors.lightBlueTwo,
  '&.user-chat': {
    background: Colors.white,
    margin: '10px auto 1rem 5%'
  },
  [theme.breakpoints.down('md')]: {
    width: '90%',
    margin: '1rem'
  }
})
const ChatSingleInnerWrapper = styled('div')({
  // display: 'flex',
  // justifyContent: 'space-between'
})

const ItemWrapper = styled('div')({
  fontSize: '14px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.darkBrown,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '&.timemsg': {
    direction: 'ltr',
    padding: '5px 0'
  },
  '& svg': {
    borderRadius: '50%'
  },

  [theme.breakpoints.down('md')]: {
    textAlign: 'right'
  }
})
