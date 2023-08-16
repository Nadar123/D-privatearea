import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../constants/routes.constants'
import { getSilentLogin, isEmail, login } from '../../../state/features/user.feature'
/*components*/
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
/*styles*/
import { Colors } from '../../../constants/styles.constants'
import {
  ButtonWrapper,
  CodeStepWrapper,
  FloatingLabel,
  FloatingLabelWrapper,
  FormSmsFirstStep,
  Input,
  ErrorMsg,
  FormEnterWrapperInner,
  CheckBoxWrapper,
  CheckBoxInput,
  CheckBoxText,
  PasswordWrapper
} from '../../../constants/styled.components.constants'
import styled from 'styled-components'

function LoginWithEmailAndPassword({ setNewUser }: any) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({
    emailError: '',
    passwordError: ''
  })
  const { contractId, loading, projectId } = useAppSelector((state) => state.user)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setError({
      emailError: '',
      passwordError: ''
    })
  }, [formData])

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    let errorFlag = false

    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      errorFlag = true
      setError((current) => {
        return { ...current, emailError: 'כתובת הדוא״ל שגויה. נסו שוב' }
      })
    }
    if (formData.password.trim().length === 0 || formData.password.trim().length < 6) {
      errorFlag = true
      setError((current) => {
        return { ...current, passwordError: 'סיסמא שגויה. נסו שוב' }
      })
    }
    if (!errorFlag) {
      await dispatch(login(formData))
      navigate(ROUTES.DASHBOARD)
    }
  }

  const onUserRemember = () => {
    dispatch(
      getSilentLogin({
        contractId: contractId || localStorage.getItem('contractId'),
        verification: undefined,
        otp: undefined
      })
    )
  }

  return (
    <>
      <CodeStepWrapper>
        <CodeStepText> כניסה למערכת באמצעות שם משתמש וסיסמה</CodeStepText>
        <Box>
          {loading && 'Loading...'}
          <FormSmsFirstStep onSubmit={onSubmit} noValidate autoComplete='on'>
            <FloatingLabelWrapper>
              <Input
                type='email'
                className={error.emailError ? 'error' : ''}
                id='email'
                placeholder=' '
                name='email'
                value={formData.email}
                onChange={onChange}
                autoComplete='on'
              />
              <ErrorMsg>{error.emailError}</ErrorMsg>
              <FloatingLabel>שם משתמש</FloatingLabel>
            </FloatingLabelWrapper>
            <FloatingLabelWrapper>
              <Input
                type='password'
                className={error.passwordError ? 'error' : ''}
                placeholder=' '
                name='password'
                value={formData.password}
                onChange={onChange}
                autoComplete='on'
              />
              <ErrorMsg className='here'>{error.passwordError}</ErrorMsg>
              <FloatingLabel> סיסמא</FloatingLabel>
            </FloatingLabelWrapper>
            <CheckBoxWrapper>
              <CheckBoxInput id='' type='checkbox' name='onCheck' value='' onChange={onUserRemember} />
              <CheckBoxText>זיכרו אותי</CheckBoxText>
            </CheckBoxWrapper>
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
                כניסה{' '}
              </Button>
            </ButtonWrapper>
          </FormSmsFirstStep>
          <PasswordWrapper>
            <ForgotPassword onClick={setNewUser}>שכחת סיסמה?</ForgotPassword>
            <FormEnterWrapperInner>
              <p>
                <FirstTimeText> פעם ראשונה?</FirstTimeText>
                <CreatePassword onClick={setNewUser}>יצירת סיסמה</CreatePassword>
              </p>
            </FormEnterWrapperInner>
          </PasswordWrapper>
        </Box>
      </CodeStepWrapper>
    </>
  )
}

export default LoginWithEmailAndPassword

const ForgotPassword = styled('p')({
  fontSize: '16px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.lightBlack,
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
})
const FirstTimeText = styled('span')({
  fontSize: '16px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.lightBlack,
  padding: '0 4px'
})
const CreatePassword = styled('span')({
  fontSize: '16px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.lightBlack,
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
})
const CodeStepText = styled('h5')({
  display: 'block',
  fontSize: '18px',
  fontWeight: '300',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'center',
  color: Colors.black,
  padding: '0px 0 10px 0'
})
