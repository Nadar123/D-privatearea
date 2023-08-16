import React from 'react'
/*components*/
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

/*styles*/
import { FooterLink } from '../../../constants/styled.components.constants'

function TenantPrice() {
  return (
    <>
      <Box>
        <Typography variant='h4'> מחיר למשתכן</Typography>
        <List>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://dimristg.wpengine.com/%d7%94%d7%aa%d7%97%d7%93%d7%a9%d7%95%d7%aa-%d7%a2%d7%99%d7%a8%d7%95%d7%a0%d7%99%d7%aa/'>
              {' '}
              התחדשות עירונית{' '}
            </FooterLink>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://dimrimishtaken.co.il/'> נדלן מניב </FooterLink>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://dimristg.wpengine.com/%d7%a4%d7%a8%d7%95%d7%99%d7%99%d7%a7%d7%98%d7%99%d7%9d-%d7%a9%d7%94%d7%a1%d7%aa%d7%99%d7%99%d7%9e%d7%95/'>
              {' '}
              פרוייקטים שהסתיימו
            </FooterLink>
          </ListItem>
        </List>
      </Box>
    </>
  )
}

export default TenantPrice
