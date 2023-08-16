import React, { useEffect, useState } from 'react'
import { generateOtp } from '../../../state/features/user.feature'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks'
/*components*/
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
/*styles*/
import { Colors } from '../../../constants/styles.constants'
import {
  ButtonWrapper,
  CodeStepText,
  CodeStepWrapper,
  FloatingLabel,
  FloatingLabelWrapper,
  FormSmsFirstStep,
  Input,
  ErrorMsg
} from '../../../constants/styled.components.constants'
import { login } from '../../../state/features/global.features'
import Loader from '../../UI/Loader/Loader'

function smsStep({ phone, setPhone, setCurrentStep }: any) {
  const [errorState, setErrorState] = useState<string | undefined>('')
  const { loading, error } = useAppSelector((state) => state?.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setErrorState('')
  }, [phone])

  const handleKeyPress = (event: any) => {
    const keyCode = event.keyCode || event.which
    const keyValue = String.fromCharCode(keyCode)
    const regex = /^[0-9]*$/

    if (!regex.test(keyValue)) {
      event.preventDefault()
      setErrorState('שדה זה עבור מספרים בלבד')
    }
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // if (phone.length <= 10 && /^\d*$/.test(phone)) {
    //   setErrorState('נא להכניס מספר טלפון תקין')
    // }
    if (phone?.trim().length === 0 || phone?.trim().length < 10 || phone?.trim().length > 10) {
      setErrorState('נא להכניס מספר טלפון תקין')
    } else {
      try {
        await dispatch(generateOtp(phone)).unwrap()
        setCurrentStep('VerifyOptCode')
      } catch (error) {
        setErrorState('מספר הטלפון לא קיים במערכת')
        console.log(error)
      }
    }
  }

  return (
    <>
      <CodeStepWrapper>
        <CodeStepText>הכניסה למערכת הינה באמצעות קוד חד פעמי שישלח למספר הטלפון הנייד איתו נרשמת</CodeStepText>
        <Box>
          {loading && <Loader />}

          {errorState && <p>{errorState}</p>}

          <FormSmsFirstStep onSubmit={onSubmit} noValidate autoComplete='on'>
            <FloatingLabelWrapper>
              <Input
                className={errorState ? 'error' : ''}
                type='tel'
                placeholder=' '
                name='phone'
                pattern='[0-9]{9,10}'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete='on'
                onKeyPress={handleKeyPress}
              />
              <ErrorMsg>{errorState}</ErrorMsg>
              <FloatingLabel className={errorState ? 'error' : ''}> מספר טלפון נייד</FloatingLabel>
            </FloatingLabelWrapper>
            <ButtonWrapper>
              <Button
                style={{
                  width: 170,
                  background: Colors.secondary,
                  color: Colors.white,
                  fontSize: 25,
                  fontWeight: 600,
                  padding: '2px 14px'
                }}
                type='submit'
                disabled={!phone}
              >
                שילחו לי קוד ב-sms
              </Button>
            </ButtonWrapper>
          </FormSmsFirstStep>
        </Box>
      </CodeStepWrapper>
    </>
  )
}
export default smsStep
