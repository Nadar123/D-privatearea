import React from 'react'
/*components*/
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
/*styles*/
import { FooterLink } from '../../../constants/styled.components.constants'
import { Email, Loctaion, Phone, Service } from '../../../constants/icons.constants'

function Conactus() {
  return (
    <>
      <Box>
        <Typography variant='h4'>צור קשר</Typography>

        <List>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://ir.dimri.co.il'>
              <Loctaion /> ירושלים 1, נתיבות
            </FooterLink>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://ir.dimri.co.il'>
              <Service /> *2457
            </FooterLink>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://ir.dimri.co.il'>
              <Phone /> 08-9939000
            </FooterLink>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://ir.dimri.co.il'>
              <Email /> yh@dimri.co.il{' '}
            </FooterLink>
          </ListItem>
        </List>
      </Box>
    </>
  )
}

export default Conactus
