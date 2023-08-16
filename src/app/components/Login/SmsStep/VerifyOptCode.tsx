import React, { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks'
/*components*/
import Button from '@mui/material/Button'
/*styles*/
import { styled } from '@mui/material'
import { Colors } from '../../../constants/styles.constants'
import { ErrorMsg } from '../../../constants/styled.components.constants'
import { generateOtp, validateOtp } from '../../../state/features/user.feature'
import { ROUTES } from '../../../constants/routes.constants'
import { useNavigate } from 'react-router-dom'

export type Props = {
  value: string
  valueLength: number
  onChange: (value: string) => void
  setCurrentStep: any
  insideNewUser: any
  phone: any
  email: any
  setOtp: any
  otp: string
}

const RE_DIGIT = new RegExp(/^\d+$/)

function VerifyOptCode({ email, phone, insideNewUser, setCurrentStep, otp, valueLength, onChange }: Props) {
  const [approveTerms, setApproveTerms] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { error, verification, otpValidated } = useAppSelector((state) => state.user)

  const hasError = error.error

  useEffect(() => {
    if (otpValidated) {
      if (insideNewUser) {
        setCurrentStep('signUp')
      } else {
        navigate(`${ROUTES.DASHBOARD}/#progressStages`)
      }
    }
  }, [otpValidated])

  const valueItems = useMemo(() => {
    const valueArray = otp.split('')
    const items: Array<string> = []

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i]

      if (RE_DIGIT.test(char)) {
        items.push(char)
      } else {
        items.push('')
      }
    }

    return items
  }, [otp, valueLength])

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling = target.nextElementSibling as HTMLInputElement | null

    if (nextElementSibling) {
      nextElementSibling.focus()
    }
  }
  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling = target.previousElementSibling as HTMLInputElement | null

    if (previousElementSibling) {
      previousElementSibling.focus()
    }
  }
  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const target = event.target
    let targetValue = target.value.trim()
    const isTargetValueDigit = RE_DIGIT.test(targetValue)

    if (!isTargetValueDigit && targetValue !== '') {
      return
    }
    targetValue = isTargetValueDigit ? targetValue : ' '

    const targetValueLength = targetValue.length

    if (targetValueLength === 1) {
      const newValue = otp.substring(0, index) + targetValue + otp.substring(index + 1)

      onChange(newValue)

      if (!isTargetValueDigit) {
        return
      }

      focusToNextInput(target)
    } else if (targetValueLength === valueLength) {
      onChange(targetValue)

      target.blur()
    }
  }
  const inputOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const targetValue = target.value

    if (event.key !== 'Backspace' || target.value !== '') {
      return
    }

    target.setSelectionRange(0, targetValue.length)

    focusToPrevInput(target)
  }

  const inputOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const { key } = event
    const target = event.target as HTMLInputElement

    if (key === 'ArrowRight' || key === 'ArrowDown') {
      event.preventDefault()
      focusToNextInput(target)
      return
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      event.preventDefault()
      focusToPrevInput(target)
      return
    }
  }
  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const code = otp
    dispatch(
      validateOtp({
        otp: code,
        verification,
        contractId: undefined
      })
    )
  }

  const handleSendCodeAgain = () => {
    if (phone) {
      dispatch(generateOtp(phone))
    } else {
      dispatch(generateOtp(email))
    }
  }

  const handleCheckboxChange = () => {
    setApproveTerms(!approveTerms)
  }
  const isDisabled = () => {
    return !approveTerms
  }

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <OtpGroup>
          {valueItems.map((digit, index) => (
            <Input
              key={index}
              type='text'
              className={hasError ? 'error otp-input' : 'otp-input'}
              inputMode='numeric'
              autoComplete='one-time-code'
              pattern='\d{1}'
              maxLength={valueLength}
              value={digit}
              onChange={(event) => inputOnChange(event, index)}
              onKeyDown={inputOnKeyDown}
              onFocus={inputOnFocus}
            />
          ))}
        </OtpGroup>
        {hasError && <ErrorMsg style={{ textAlign: 'center' }}>הקוד שהזנת שגוי. נסו שוב</ErrorMsg>}
        <CheckboxWrapper>
          <input type='checkbox' onChange={handleCheckboxChange} />
          <CheckBoxText>
            קראתי והבנתי את{' '}
            <a href='https://www.dimri.co.il/%d7%aa%d7%a0%d7%90%d7%99-%d7%a9%d7%99%d7%9e%d7%95%d7%a9/' target='_blank'>
              תנאי השימוש
            </a>{' '}
            והסודיות
          </CheckBoxText>
        </CheckboxWrapper>
        {!approveTerms ? <p>הבנתי וקראתי את תנאי השימוש</p> : ''}
        <ButtonWrapper>
          <Button
            type='submit'
            disabled={isDisabled()}
            className={approveTerms ? 'enabled' : 'disabled'}
            style={{
              width: '170px',
              background: Colors.secondary,
              color: Colors.white,
              fontSize: 25,
              fontWeight: 600,
              padding: '2px 14px',
              margin: '0 0 1rem 0'
            }}
          >
            כניסה{' '}
          </Button>
        </ButtonWrapper>
      </form>
      <ResetNewCode onClick={handleSendCodeAgain}>שלחו לי קוד חדש</ResetNewCode>
    </>
  )
}
export default VerifyOptCode

const CheckboxWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'inherit',
  padding: '',
  '&:input': {
    padding: '0 1rem'
  }
})
const Input = styled('input')({
  width: '48px',
  height: '60px',
  background: 'transparent',
  border: `1px solid ${Colors.lightBrown}`,
  borderRadius: 3,
  fontSize: '22px',
  textAlign: 'center',
  padding: '10px',
  color: Colors.black,
  '&:invalid': {
    boxShadow: 'none'
  },
  '&:focus': {
    outline: 'none',
    border: '2px solid rgb(30, 129, 222)',
    background: Colors.white,
    color: Colors.black
  },
  '&.error': {
    borderColor: 'red'
  }
})
const CheckBoxText = styled('p')({
  padding: '1rem 6px'
})
const ResetNewCode = styled('p')({
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'center',
  color: Colors.footerFontText,
  textDecoration: 'none',
  cursor: 'pointer',
  margin: '-6px 0 6px 0',
  '&:hover': {
    textDecoration: 'underline'
  }
})

const OtpGroup = styled('div')({
  direction: 'initial',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  columnGap: '1rem',
  padding: '1rem'
})
const ButtonWrapper = styled('div')({
  '& .disabled.MuiButton-textSizeMedium ': {
    background: `${Colors.gray} !important`,
    opacity: 0.6
  },
  '& .enabled.MuiButton-textSizeMedium ': {
    background: Colors.secondary,
    opacity: 1
  }
})
