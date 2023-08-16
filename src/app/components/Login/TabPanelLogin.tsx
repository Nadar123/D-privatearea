import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../constants/styles.constants'
import { theme } from '../../constants/theme.constants'
/*components*/
import LoginWithEmailAndPassword from './EmailLogin/loginWithEmailAndPassword'

function TabPanelLogin({ insideNewUser, setNewUser }: any) {
  return (
    <>
      <SubTitle> חווית הבנייה שלך מתחילה עכשיו!</SubTitle>
      <LoginWithEmailAndPassword insideNewUser={insideNewUser} setNewUser={setNewUser} />
    </>
  )
}

export default TabPanelLogin
export const SubTitle = styled('h3')({
  fontSize: '45px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  color: Colors.black,
  marginBlockStart: '0em',
  marginBlockEnd: '0em',
  [theme.breakpoints.down('xl')]: {
    fontSize: '35px'
  }
})
