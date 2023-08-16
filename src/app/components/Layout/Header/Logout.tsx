import React, { useState } from 'react'
import { ROUTES } from '../../../constants/routes.constants'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks'
import { Link, useNavigate } from 'react-router-dom'
/*components*/
import { LogooutIcon, Profile, ProfileHover } from '../../../constants/icons.constants'
import { logout } from '../../../state/features/user.feature'
/*styles*/
import { styled } from '@mui/material'
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'
import { EmailTitle, FlexStartWrapper, SubMenu, UserText } from '../../../constants/styled.components.constants'

function Logout() {
  const user = useAppSelector((state) => state.user.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [isVisible, setIsVisible] = useState<any>({
    english: false,
    hebrew: true
  })
  const [hover, setHover] = useState(false)

  const handleLogOut = () => {
    dispatch(logout())
    navigate(`${ROUTES.ROOT}`)
  }

  const ShowUser = () => user && <UserText className='logout-hover'>{user?.info?.username}</UserText>

  return (
    <LogOut>
      <NavbarLinkWrap>
        <BaselineInnerWrapper>
          <NavbarLink onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover ? <ProfileHover /> : <Profile />}

            <SubMenu className='subMenu'>
              <header>
                <ShowUser />
                <EmailTitle>{user?.info?.email}</EmailTitle>
              </header>
              <main>
                {/* <FlexBetweenWrapper
                  style={{
                    background: '#eee',
                    padding: '1rem',
                    margin: '1rem 0 0 0'
                  }}
                >
                 <>
                    <LanguagesButon
                      style={{ backgroundColor: isVisible.hebrew ? 'white' : '#eee' }}
                      onClick={() => setIsVisible({ hebrew: true, english: false })}
                    >
                      עברית{' '}
                    </LanguagesButon>

                    <LanguagesButon
                      style={{ backgroundColor: isVisible.english ? 'white' : '#eee' }}
                      onClick={() => setIsVisible({ english: true, hebrew: false })}
                    >
                      English
                    </LanguagesButon>
                  </> 
                </FlexBetweenWrapper>*/}
                {/* <FlexBetweenWrapper>
                   <InnerWrapper>
                    <Notification />
                    <Text>התראות למייל</Text>
                  </InnerWrapper> 
                  <React.Fragment>
                    <input
                      onChange={onSendNotification}
                      type='checkbox'
                      name='onCheck'
                      value=''
                      className='checkbox-logoutcomponent'
                    />
                  </React.Fragment> 
                </FlexBetweenWrapper> */}
                <FlexStartWrapper>
                  <Profile />
                  <Link to={ROUTES.PROFILE}>
                    <Text> פרופיל </Text>
                  </Link>
                </FlexStartWrapper>
                <FlexStartWrapper onClick={handleLogOut}>
                  <LogooutIcon />
                  <Text> יציאה מהמערכת</Text>
                </FlexStartWrapper>
              </main>
            </SubMenu>
          </NavbarLink>
        </BaselineInnerWrapper>
      </NavbarLinkWrap>
    </LogOut>
  )
}

export default Logout

const NavbarLink = styled('div')({
  position: 'relative',
  border: '1px solid transparent',
  fontSize: '24px',
  fontWeight: '300',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.47',
  letterSpacing: 'normal',
  textAlign: 'right',
  color: Colors.black,
  padding: '0 5px',
  cursor: 'pointer',
  '&:hover': {
    // border: '1px solid #83d0d6',
    // borderRadius: '50%',
    '& .subMenu': {
      display: 'block',
      zIndex: '9'
    }
  },
  [theme.breakpoints.down('xl')]: {}
})
const BaselineInnerWrapper = styled('div')({
  display: 'flex',
  alignItems: 'baseline',
  padding: '0'
})
const LogOut = styled('div')({
  margin: '0rem 0.5rem'
})
const NavbarLinkWrap = styled('div')({
  '& a': {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center'
    //padding: '1rem 1rem 0 1rem'
  }
})
const InnerWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer'
})
const Text = styled('p')({
  fontSize: '22px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.47',
  letterSpacing: 'normal',
  textAlign: 'center',
  color: Colors.footerFontText,
  padding: '0 10px',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: Colors.activeLink
  }
})
const LanguagesButon = styled('div')({
  backgroundColor: 'white',
  padding: '10px 22px',
  borderRadius: '8px',
  boxShadow: '0 4px 24px -4px rgba(71, 59, 51, 0.18)',
  border: 'none',
  '&:hover': {
    boxShadow: '0px 4px 24px 0px rgb(0, 0, 0, 0.18)'
  }
})
