import React, { useState } from 'react'
/*components*/
import EmailFirstStep from './EmailLogin/EmailFirstStep'
import SmsStep from './SmsStep/smsStep'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
/*styles*/
import { Colors } from '../../constants/styles.constants'
import { theme } from '../../constants/theme.constants'
interface ITAbPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: ITAbPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            padding: '0px 24px 70px 24px',
            [theme.breakpoints.down('md')]: {
              padding: '0px 7px 40px 7px'
            }
          }}
        >
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const LoginStepOne = ({ phone, setPhone, email, setEmail, setCurrentStep }: any) => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='tabs'
          TabIndicatorProps={{ style: { background: Colors.black } }}
        >
          <Tab
            sx={{ fontSize: 30, fontWeight: 400, color: Colors.black, padding: '2px 1rem' }}
            label='קוד ב-SMS'
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontSize: 30, fontWeight: 400, color: Colors.black, padding: '2px 1rem' }}
            label='קוד ב-דוא״ל'
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SmsStep phone={phone} setPhone={setPhone} setCurrentStep={setCurrentStep} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EmailFirstStep email={email} setEmail={setEmail} setCurrentStep={setCurrentStep} />
      </TabPanel>
    </>
  )
}

export default LoginStepOne
