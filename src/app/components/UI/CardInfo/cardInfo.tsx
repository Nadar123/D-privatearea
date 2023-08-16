import * as React from 'react'
/*style*/
import { styled } from '@mui/material'
import { Colors } from '../../../constants/styles.constants'
import { DimanicText } from '../../../constants/styled.components.constants'
import { theme } from '../../../constants/theme.constants'

type Props = {
  title?: string
  staticText?: string
  children?: JSX.Element
  onClick?: () => void
  className?: any
}

const cardInfo = ({ className, onClick, staticText, title, children }: Props) => {
  const subTitleOnClick = () => {
    onClick && onClick()
  }
  return (
    <>
      <CardWrapper className={className} onClick={subTitleOnClick}>
        <CardHeader>
          <>
            <DimanicText>{staticText} </DimanicText>
            <DimanicText>{title} </DimanicText>
          </>
        </CardHeader>
        <CardBody className='children-cardBody space-between'>{children}</CardBody>
      </CardWrapper>
    </>
  )
}

export default cardInfo

const CardWrapper = styled('div')({
  backgroundColor: Colors.softBrown,
  padding: '16px',
  borderRadius: '8px',
  margin: '0 0 4px 0',
  direction: 'rtl',
  '&.payments': {
    padding: '32px',
    backgroundColor: Colors.lightBlueBG,
    [theme.breakpoints.down('lg')]: {
      padding: '16px'
    }
  },
  '&.flex-wrapper': {
    justifyContent: 'space-between'
  },
  [theme.breakpoints.down('md')]: {}
})
const CardHeader = styled('div')({
  display: 'flex',
  direction: 'rtl',
  flexDirection: 'inherit',
  '& .cardHeader-padd': {
    padding: '0 0 0 0px'
  },
  '&.flex-option-wrap': {
    flexDirection: 'column-reverse'
  }
})
const CardBody = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap'
  },
  '&.space-between': {
    justifyContent: 'space-between'
  }
  // '&.profile': {
  //   display: 'block'
  // }
})
