import React from 'react'
import { styled } from '@mui/material'
import { Colors } from '../../../../constants/styles.constants'
import PdfIcons from '../../../../assets/icons/pdf.icons'
import { DimanicText, ItemDate, ItemInnerWrapper } from '../../../../constants/styled.components.constants'
interface IMsgItemProps {
  title: string
  date: string
}

const MsgItem = ({ title, date }: IMsgItemProps) => {
  return (
    <>
      <ItemContent>
        <ItemInnerWrapper>
          <DimanicText>
            {title}
            <ItemDate>{date}</ItemDate>
          </DimanicText>

          <IconWrapper>
            <PdfIcons />
          </IconWrapper>
        </ItemInnerWrapper>
      </ItemContent>
    </>
  )
}

export default MsgItem

const ItemContent = styled('li')({
  minHeight: '75px',
  listStyle: 'none',
  padding: '10px 0 0 0',
  borderBottom: `1px solid ${Colors.lightBrown}`,
  '&:last-child': {
    borderBottom: 'none'
  }
})

const IconWrapper = styled('div')({
  width: '19px',
  height: '22px',
  cursor: 'pointer'
})
