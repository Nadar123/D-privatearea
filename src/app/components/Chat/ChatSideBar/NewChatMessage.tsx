import React from 'react'
import { ItemList, TextDimriBold } from '../../../constants/styled.components.constants'
import { ItemText } from './ChatSideBar'

type Props = {
  onNewMessage: any
  selectedSubCategory: {} | any
  date: any
}

function NewChatMessage({ onNewMessage, date, selectedSubCategory }: Props) {
  return (
    <ItemList className='firstMsg' onClick={onNewMessage}>
      <div className='inner'>
        <TextDimriBold>{selectedSubCategory ? selectedSubCategory?.text : ' פנייה חדשה'}</TextDimriBold>
        <ItemText className='appeal-num'></ItemText>
        <ItemText className='pad-12'>{selectedSubCategory ? 'פתוח' : 'טיוטה'}</ItemText>
      </div>
      <ItemText>{date}</ItemText>
    </ItemList>
  )
}

export default NewChatMessage
