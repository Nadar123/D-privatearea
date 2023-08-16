import React, { useState } from 'react'
/*components*/
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabPanelOtp from './TabPanelOtp'
import TabPanelLogin from './TabPanelLogin'
/*icons*/
import { CodeMsg, LoginAvatar, UserPassword } from '../../constants/icons.constants'
/*styles*/
import { LoginTitle } from '../../constants/styled.components.constants'
import { theme } from '../../constants/theme.constants'
interface ITabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: ITabPanelProps) {
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
            padding: '0px 24px 0px 24px',
            [theme.breakpoints.down('md')]: {
              padding: '0px'
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

function tabsButtons() {
  const [value, setValue] = useState(0)
  const [insideNewUser, setInsideNewUser] = useState(false)

  const setNewUser = () => {
    setValue(0)
    setInsideNewUser(true)
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '100%' }}>
      <LoginAvatar />
      <LoginTitle>כניסה לאיזור האישי</LoginTitle>
      <TabPanel value={value} index={0}>
        <TabPanelOtp insideNewUser={insideNewUser} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabPanelLogin setNewUser={setNewUser} insideNewUser={insideNewUser} />
      </TabPanel>

      <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
        <Tabs
          className='tabs-main'
          value={value}
          indicatorColor={'transparent'}
          onChange={handleChange}
          aria-label='tabs'
        >
          <Tab
            sx={{ backgroundColor: '#e0e1db', padding: '5px 16px' }}
            label={
              <>
                <CodeMsg />
                <p>קוד בהודעה</p>
              </>
            }
            {...a11yProps(0)}
          />
          <Tab
            sx={{ backgroundColor: '#e0e1db', padding: '5px 16px' }}
            label={
              <>
                <UserPassword />
                <p>משתמש וסיסמה</p>
              </>
            }
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
    </Box>
  )
}

export default tabsButtons
