import React from 'react'
import styled from 'styled-components'
import { DimanicText, TextDimri } from '../../../constants/styled.components.constants'
import { theme } from '../../../constants/theme.constants'

type Props = {
  title?: string
  subTitle?: string
}
function InnerContent({ title, subTitle }: Props) {
  return (
    <>
      <Content>
        <TextDimri>{title}</TextDimri>
        <DimanicText> {subTitle}</DimanicText>
      </Content>
    </>
  )
}

export default InnerContent

const Content = styled('div')({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    width: '45%'
  }
})
