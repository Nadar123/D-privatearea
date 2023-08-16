import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
/*components*/
import NavBarBeforeLogin from './NavBarBeforeLogin'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'
import Location from './Location'
import Logout from './Logout'
/*logo*/
import Logo from '../../../assets/Logo/DimriLogo.png'
import { Notification } from '../../../constants/icons.constants'
/*styles*/
import { styled } from '@mui/material'
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'
import { ROUTES } from '../../../constants/routes.constants'

function NavBar() {
  const { hash } = useLocation()
  const isAuth = localStorage.getItem('userToken')!!
  const isActive = (iHash: any) => hash === iHash

  const links = ['#progressStages', '#myApartment', '#appeal', '#payments', '#documents']
  const linkText = ['מצב התקדמות', 'הדירה שלי', 'פניות', 'תשלומים', 'מסמכים שלי']
  return (
    <MainHeader>
      <Box>
        <Grid
          container
          spacing={0}
          className='grid-nav'
          sx={{
            [theme.breakpoints.down('md')]: {
              justifyContent: 'center',
              padding: '0.5rem 0'
            }
          }}
        >
          <Grid
            sx={{
              [theme.breakpoints.down('md')]: {
                width: '100%'
              }
            }}
            item
            xs={12}
            md={12}
          >
            {isAuth ? (
              <>
                <NavMainWrapper>
                  <MainHeaderInner>
                    <LogoWrapper>
                      <Link style={{ width: '100%', display: 'block', height: '57px' }} to='/'>
                        <LogoImage src={Logo} alt='logo-site-dimri' />
                      </Link>
                    </LogoWrapper>
                    <Nav>
                      <NavMainList>
                        {linkText.map((item, index) => (
                          <li key={index}>
                            <HashLink
                              smooth
                              to={`${ROUTES.DASHBOARD}${links[index]}`}
                              style={
                                isActive(`${links[index]}`) || isActive(`${links[index]}`)
                                  ? {
                                      background: Colors.lightBlue,
                                      color: Colors.white,
                                      padding: '4px 16px',
                                      borderRadius: 20
                                    }
                                  : {}
                              }
                            >
                              {item}
                            </HashLink>
                          </li>
                        ))}
                      </NavMainList>
                    </Nav>
                  </MainHeaderInner>
                  <LeftListNav>
                    <LocationDeckTopView>
                      <Location />
                    </LocationDeckTopView>
                    <LineSeparator></LineSeparator>
                    <SvgWrapper>
                      {/* <div className='icon-wrapper' style={{ margin: '6px 0 0 0' }}>
                        <Notification />
                      </div> */}
                      <IconWrapper>
                        {' '}
                        <Logout />{' '}
                      </IconWrapper>
                    </SvgWrapper>
                  </LeftListNav>
                </NavMainWrapper>
              </>
            ) : (
              <>
                <NavBarBeforeLogin />
              </>
            )}
          </Grid>
        </Grid>
      </Box>
      <LocationMobileView>
        <Location />
      </LocationMobileView>
    </MainHeader>
  )
}

export default NavBar

const MainHeader = styled('header')({
  backgroundColor: Colors.white,
  padding: '1rem 1rem 0.5rem 1rem',
  margin: '0 auto',
  borderBottom: `1px solid ${Colors.gray}`,
  position: 'fixed',
  width: '100%',
  height: '80px',
  zIndex: '999',
  top: 0,
  left: 0,
  right: 0,
  '& .grid-nav': {
    justifyContent: 'center'
  },
  [theme.breakpoints.down('md')]: {
    padding: '0',
    height: 'auto'
  }
})
const MainHeaderInner = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    width: '50vw'
  }
})
const LogoWrapper = styled('div')({
  height: 'auto',
  [theme.breakpoints.down('md')]: {
    padding: '0 16px'
  }
})
const LogoImage = styled('img')({
  width: '100%',
  height: 'auto',
  [theme.breakpoints.down('md')]: {
    transform: 'scale(0.7)'
  }
})
const NavMainWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center'
  }
})
const NavMainList = styled('ul')({
  display: 'flex',
  padding: '14px 3rem',
  listStyle: 'none',
  '& li a': {
    color: Colors.textColor,
    padding: '0 1rem',
    textDecoration: 'none',
    fontSize: '22px',
    lineHeight: '28px',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    [theme.breakpoints.down('lg')]: {
      padding: '4px 8px'
    }
  }
})
const Nav = styled('nav')({
  position: 'relative',
  display: 'block',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})
const LeftListNav = styled('div')({
  display: 'flex',
  alignItems: 'center'
})
const SvgWrapper = styled('div')({
  padding: '8px 8px 0 0',
  display: 'flex',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    padding: '8px 0 0 0'
  }
})
const LineSeparator = styled('div')({
  width: '1px',
  height: '30px',
  background: Colors.activeLink,
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})
const LocationMobileView = styled('div')({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
})
const LocationDeckTopView = styled('div')({
  display: 'block',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})
const IconWrapper = styled('div')({
  position: 'relative',
  display: 'block'
})
