import React from 'react'
import { Link } from 'react-router-dom'
/*components*/
import Logo from '../../../assets/Logo/Logo.png'
import styled from 'styled-components'
/*icons*/
import { WhatsApp, Facebook, Instagram } from '../../../constants/icons.constants'
/*styles*/
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'

function NavBarBeforeLogin() {
  return (
    <NavBeforeLogin>
      <LogoWrapper>
        <Link to='/'>
          <LogoImage src={Logo} alt='logo-site-dimri' />
        </Link>
      </LogoWrapper>
      <SocialWrapper>
        <SocialLink href=''>
          {' '}
          <WhatsApp />
        </SocialLink>
        <SocialLink href='https://www.facebook.com/Y.H.DIMRI/'>
          {' '}
          <Facebook />
        </SocialLink>
        <SocialLink href='https://www.instagram.com/y.h.dimri/'>
          {' '}
          <Instagram />
        </SocialLink>
      </SocialWrapper>
    </NavBeforeLogin>
  )
}

export default NavBarBeforeLogin

const NavBeforeLogin = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center'
  }
})
const SocialWrapper = styled('div')({
  display: 'flex',
  alignitems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})
const SocialLink = styled('a')({
  padding: '0 3px',
  cursor: 'pointer',
  '& svg path': {
    '&:hover': {
      fill: Colors.secondary
    }
  }
})
const LogoWrapper = styled('div')({
  width: '112px',
  height: '40px'
})

const LogoImage = styled('img')({
  width: '100%',
  height: 'auto'
})
