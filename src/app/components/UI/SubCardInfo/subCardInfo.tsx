import React from 'react'
/*styles*/
import { styled } from '@mui/material'
import { Colors } from '../../../constants/styles.constants'

type Props = {
  title: string
  icon: JSX.Element
  children: JSX.Element
}
function SubCardInfo({ title, icon, children }: Props) {
  return (
    <CardWrapper>
      <CardHeader>
        <CardHeaderInner>
          {icon}
          <CardTitle>{title}</CardTitle>
        </CardHeaderInner>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </CardWrapper>
  )
}

export default SubCardInfo

const CardWrapper = styled('div')({})
const CardHeader = styled('div')({
  backgroundColor: Colors.lighterBrown,
  color: Colors.white,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '4px 13px 4px 13px'
})
const CardHeaderInner = styled('div')({
  display: 'flex',
  alignItems: 'center'
})
const CardBody = styled('div')({
  padding: '0'
})
const CardTitle = styled('h5')({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '30px',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.black,
  padding: '0 6px 0 0px'
})
