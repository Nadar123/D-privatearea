import React from 'react'
/*styles*/
import { styled } from '@mui/material'
import { Colors } from '../../../constants/styles.constants'
import { DimanicText, ItemText } from '../../../constants/styled.components.constants'
import { theme } from '../../../constants/theme.constants'

type Props = {
  title?: string
  subTitle?: string
}

function InnerAccordion({ title, subTitle }: Props) {
  return (
    <InnerItemWrapper>
      <ItemText>{title}</ItemText>
      <DimanicText>{subTitle}</DimanicText>
    </InnerItemWrapper>
  )
}

export default InnerAccordion
const InnerItemWrapper = styled('div')({
  minWidth: '150px',
  [theme.breakpoints.down('md')]: {
    minWidth: '115px'
  }
})
