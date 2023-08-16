import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../constants/theme.constants'
import { DimanicText, ItemText } from '../../../constants/styled.components.constants'

type Props = {
  title?: string
  statisubTitle?: string
}

function InnerWrapperCard({ title, statisubTitle }: Props) {
  return (
    <React.Fragment>
      <InnerWrapCard>
        <ItemText> {title}</ItemText>
        <DimanicText>{statisubTitle}</DimanicText>
      </InnerWrapCard>
    </React.Fragment>
  )
}

export default InnerWrapperCard
export const InnerWrapCard = styled('div')({
  width: '49%',
  [theme.breakpoints.down('md')]: {
    padding: '0'
  }
})
