import React, { useEffect, useState } from 'react'
import { generateOtp, isEmail } from '../../../state/features/user.feature'
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
import Loader from '../../UI/Loader/Loader'

function EmailFirstStep({ email, setEmail, setCurrentStep }: any) {
  const [errorState, setErrorState] = useState<string | undefined>('')
  const { loading, error } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  console.log(error.error)

  useEffect(() => {
    setErrorState('')
  }, [email])

  const handleBlur = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!regex.test(email)) {
      setErrorState('נא להזין אימייל חוקי')
    }
  }

  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()

  //   const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  //   if (!pattern.test(email)) {
  //     setErrorState('כתובת הדוא״ל שגויה. נסו שוב')
  //     return
  //   }
  //   // else if (error.error === false) {
  //   //   setErrorState('מייל לא קיים במערכת')
  //   // }
  //   else {
  //     dispatch(generateOtp(email))
  //     setCurrentStep('VerifyOptCode')
  //   }
  // }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.preventDefault()

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!pattern.test(email)) {
      setErrorState('כתובת הדוא״ל שגויה. נסו שוב')
      return
    } else {
      try {
        await dispatch(generateOtp(email)).unwrap()
        setCurrentStep('VerifyOptCode')
      } catch (error) {
        setErrorState('אימייל לא קיים במערכת')
        console.log(error)
      }
    }
  }
  return (
    <CodeStepWrapper>
      <CodeStepText> הכניסה למערכת הינה באמצעות קוד חד פעמי שישלח לכתובת הדוא”ל איתה נרשמת</CodeStepText>
      <Box>
        {loading && <Loader />}
        {errorState && <p>{errorState}</p>}
        <FormSmsFirstStep onSubmit={onSubmit} noValidate autoComplete='off'>
          <FloatingLabelWrapper>
            <Input
              className={errorState ? 'error' : ''}
              type='email'
              placeholder=' '
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlur}
            />
            <ErrorMsg>{errorState}</ErrorMsg>
            <FloatingLabel className={errorState ? 'error' : ''}>כתובת דוא”ל</FloatingLabel>
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
            >
              שילחו לי קוד בדוא״ל{' '}
            </Button>
          </ButtonWrapper>
        </FormSmsFirstStep>
      </Box>
    </CodeStepWrapper>
  )
}

export default EmailFirstStep
