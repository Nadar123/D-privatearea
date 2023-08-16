import React from 'react'
/*components*/
import Footer from '../Layout/Footer/Footer.component'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Hero from '../../assets/images/home.jpg'
import PrivateArea from './privateArea'
/*styles*/
import { theme } from '../../constants/theme.constants'
import { styled } from '@mui/material'
import { Colors } from '../../constants/styles.constants'

function login() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ width: '100%', marginRight: 'auto' }}>
        <Grid
          container
          spacing={3}
          style={{
            width: '100%',
            display: 'block'
          }}
        >
          <Grid item xs={12} md={12}>
            <HeroWrapper>
              <HeroImage src={Hero} alt='cover image' />
              <PrivateArea />
            </HeroWrapper>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}

export default login
const HeroWrapper = styled('div')({
  width: '85%',
  marginRight: 'auto',
  padding: '0 0 10rem 0',
  [theme.breakpoints.down('xl')]: {
    width: '83%'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '0 1rem'
  }
})
const HeroImage = styled('img')({
  width: '94%',
  marginLeft: 'auto',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})
