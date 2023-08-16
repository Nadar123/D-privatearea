import React from 'react'
/*components*/
import CompanyProfile from './CompanyProfile'
import MarketingProjects from './MarketingProjects'
import YieldingRealEstate from './YieldingRealEstate'
import TenantPrice from './TenantPrice'
import Conactus from './Conactus'
import Box from '@mui/material/Box'
import { Grid } from '@mui/material'
/*styles*/
import { styled } from '@mui/material'
import { Colors } from '../../../constants/styles.constants'
import { theme } from '../../../constants/theme.constants'

function Footer() {
  return (
    <FooterWrppaer>
      <Box>
        <Grid className='qwer' container spacing={3} style={{}}>
          <Grid item xs={12} md={2}>
            <CompanyProfile />
          </Grid>
          <Grid item xs={12} md={2}>
            <MarketingProjects />
          </Grid>
          <Grid item xs={12} md={2}>
            <YieldingRealEstate />
          </Grid>
          <Grid item xs={12} md={2}>
            <TenantPrice />
          </Grid>
          <Grid item xs={12} md={2}>
            <Conactus />
          </Grid>
        </Grid>
      </Box>
    </FooterWrppaer>
  )
}

export default Footer

const FooterWrppaer = styled('footer')({
  borderTop: `2px solid ${Colors.borderFooter}`,
  padding: '45px 0 0rem 0',
  '& .MuiGrid-root': {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 1rem',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  }
})
