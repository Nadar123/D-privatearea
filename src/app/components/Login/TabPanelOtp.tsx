import React, { useState } from 'react'
/*components*/
import LoginStepOne from './LoginStepOne'
import LoginWithEmailAndPassword from './EmailLogin/loginWithEmailAndPassword'
import SignUp from './SignUp/SignUp'
import VerifyOptCode from './SmsStep/VerifyOptCode'
import TermsOfUse from './TermsOfUse'
/*styles*/
import { FormEnterWrapperInner, SubTitle } from '../../constants/styled.components.constants'

function TabPanelOtp({ insideNewUser }: any) {
  const [phone, setPhone] = useState<string | undefined>('')
  const [email, setEmail] = useState<string | undefined>('')
  const [currentStep, setCurrentStep] = React.useState('login')
  const [otp, setOtp] = useState('')
  const onChange = (value: string) => setOtp(value)

  const steps: any = {
    login: {
      title: 'חווית הבנייה שלך מתחילה עכשיו!',
      text: '',
      component: (
        <LoginStepOne
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          setCurrentStep={setCurrentStep}
        />
      )
    },
    VerifyOptCode: {
      title: phone ? 'הקוד שקיבלת ב-SMS' : 'הקוד שקיבלת במייל',
      text: phone
        ? `שלחנו לך קוד חד פעמי לנייד שמסתיים ${phone.substring(phone.length - 4)}- לפעמים לוקח מספר שניות לקבלה`
        : `שלחנו לך קוד חד פעמי למייל  - ${email} -  לוקח מספר שניות לקבלת הקוד`,
      component: (
        <VerifyOptCode
          otp={otp}
          setOtp={setOtp}
          valueLength={6}
          onChange={onChange}
          email={email}
          phone={phone}
          insideNewUser={insideNewUser}
          setCurrentStep={setCurrentStep}
        />
      )
    },
    termsOfUse: {
      title: 'תנאי שימוש וסודיות',
      component: <TermsOfUse />
    },
    signUp: {
      title: 'חווית הבנייה שלך מתחילה עכשיו!',
      text: '',
      component: <SignUp setCurrentStep={setCurrentStep} />
    },
    loginWithEmailAndPassword: {
      title: 'חווית הבנייה שלך מתחילה עכשיו!',
      text: '',
      component: <LoginWithEmailAndPassword setCurrentStep={setCurrentStep} />
    }
  }

  return (
    <>
      <FormEnterWrapperInner>
        <SubTitle>{steps[currentStep].title}</SubTitle>
        <p>{steps[currentStep].text}</p>
        {steps[currentStep].component}
      </FormEnterWrapperInner>
    </>
  )
}

export default TabPanelOtp
