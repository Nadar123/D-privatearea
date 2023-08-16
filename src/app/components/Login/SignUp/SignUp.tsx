import React, { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks'
import { signupWithPassword } from '../../../state/features/user.feature'
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

function SignUp({ setCurrentStep }: any) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState({
    emailError: '',
    passwordError: '',
    confirmPasswordError: ''
  })
  const userSign = useAppSelector((state) => state.user)
  const loading = useAppSelector((state) => state.user.loading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setError({
      emailError: '',
      passwordError: '',
      confirmPasswordError: ''
    })
  }, [formData])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // eslint-disable-next-line functional/no-let
    let errorFlag = false
    if (formData.password.trim().length === 0 || formData.password.trim().length < 6) {
      errorFlag = true
      setError((current) => {
        return { ...current, passwordError: 'סיסמא שגויה. נסו שוב' }
      })
    }
    if (formData.password !== formData.confirmPassword) {
      errorFlag = true
      setError((current) => {
        return { ...current, confirmPasswordError: 'סיסמאות לא זהות. נסו שוב' }
      })
    }
    if (!errorFlag) {
      dispatch(signupWithPassword(formData))
      setCurrentStep('loginWithEmailAndPassword')
    }
  }

  return (
    <>
      <CodeStepWrapper>
        <CodeStepText> יצירת סיסמה להתחברות ראשונה</CodeStepText>
        <Box>
          {loading && 'Loading...'}
          <FormSmsFirstStep onSubmit={onSubmit} noValidate autoComplete='off'>
            <FloatingLabelWrapper>
              <Input
                type='email'
                id='email'
                placeholder=' '
                name='email'
                value={userSign.user?.info?.email}
                onChange={onChange}
                autoComplete='on'
              />

              <FloatingLabel> כתובת דוא”ל </FloatingLabel>
            </FloatingLabelWrapper>
            <FloatingLabelWrapper>
              <Input
                type='password'
                className={error.passwordError ? 'error' : ''}
                placeholder=' '
                name='password'
                value={formData.password}
                onChange={onChange}
              />
              <ErrorMsg>{error.passwordError}</ErrorMsg>
              <FloatingLabel> סיסמא</FloatingLabel>
            </FloatingLabelWrapper>
            <FloatingLabelWrapper>
              <Input
                type='password'
                className={error.confirmPasswordError ? 'error' : ''}
                placeholder=' '
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={onChange}
              />
              <ErrorMsg>{error.confirmPasswordError}</ErrorMsg>
              <FloatingLabel> אימות סיסמה</FloatingLabel>
            </FloatingLabelWrapper>

            <ButtonWrapper>
              <Button
                style={{
                  width: '170px',
                  background: Colors.secondary,
                  color: Colors.white,
                  fontSize: 25,
                  fontWeight: 600,
                  padding: '2px 14px'
                }}
                type='submit'
              >
                הרשמה{' '}
              </Button>
            </ButtonWrapper>
          </FormSmsFirstStep>
        </Box>
      </CodeStepWrapper>
    </>
  )
}

export default SignUp
