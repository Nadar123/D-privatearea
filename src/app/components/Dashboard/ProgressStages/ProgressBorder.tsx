import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'
import _ from 'lodash'

type Props = {
  currentStep?: any
}
function ProgressBorder({ currentStep }: Props) {
  return (
    <BorderBoxWrapper>
      <BorderBox style={{ width: `${currentStep}%` }} className={currentStep ? 'current' : ''}>
        {' '}
        {_.isNumber(currentStep) ? (
          <StepText className={currentStep < 15 ? '' : ''}>{currentStep}%</StepText>
        ) : _.isBoolean(currentStep) == true ? (
          <StepText>100%</StepText>
        ) : (
          ''
        )}
      </BorderBox>
    </BorderBoxWrapper>
  )
}

export default ProgressBorder

const BorderBoxWrapper = styled('div')({
  height: '14px',
  backgroundColor: Colors.grayBg,
  borderRadius: '10px',
  [theme.breakpoints.down('md')]: {}
})

const BorderBox = styled('section')({
  position: 'relative',
  height: '100%',
  borderRadius: '10px 10px 10px 10px',
  '&.current': {
    backgroundColor: Colors.orengeText,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})
const StepText = styled('div')({
  textAlign: 'right',
  position: 'absolute',
  top: '0px',
  left: '0',
  color: Colors.white,
  right: '8px',
  fontSize: '14px',
  lineHeight: '16px',
  fontWeight: '300',
  letterSpacing: '1px'
})
