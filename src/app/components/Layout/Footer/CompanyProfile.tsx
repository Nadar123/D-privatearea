import React from 'react'
/*components*/
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

/*styles*/
import { Colors } from '../../../constants/styles.constants'
import { FooterLink } from '../../../constants/styled.components.constants'

function CompanyProfile() {
  return (
    <>
      <Box>
        <Typography variant='h4'>פרופיל חברה</Typography>
        <List>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://ir.dimri.co.il'> קשרי משקיעים </FooterLink>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://www.dimri.co.il/%d7%90%d7%97%d7%a8%d7%99%d7%95%d7%aa-%d7%aa%d7%90%d7%92%d7%99%d7%93%d7%99%d7%aa/'>
              {' '}
              אחריות תאגידים
            </FooterLink>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://www.dimri.co.il/%d7%94%d7%aa%d7%97%d7%93%d7%a9%d7%95%d7%aa-%d7%a2%d7%99%d7%a8%d7%95%d7%a0%d7%99%d7%aa/'>
              {' '}
              התחדשות עירונית{' '}
            </FooterLink>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://www.dimri.co.il/%d7%9e%d7%a4%d7%aa-%d7%90%d7%aa%d7%a8-2/'> מפת אתר</FooterLink>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink
              href='https://www.dimri.co.il/jobs/'
              style={{
                textDecoration: 'none',
                fontSize: 22,
                color: Colors.footerFontText,
                borderBottom: `2px solid ${Colors.footerFontText}`
              }}
            >
              {' '}
              קריירה
            </FooterLink>
          </ListItem>
        </List>
      </Box>
    </>
  )
}

export default CompanyProfile
