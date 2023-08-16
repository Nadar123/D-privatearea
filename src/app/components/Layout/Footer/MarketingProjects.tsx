import React from 'react'
/*components*/
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
/*styles*/
import { Colors } from '../../../constants/styles.constants'
import { FooterLink } from '../../../constants/styled.components.constants'

function MarketingProjects() {
  return (
    <>
      <Box>
        <Typography variant='h4'>פרוייקטים בשיווק </Typography>

        <List>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://www.dimri.co.il/projects/%d7%9b%d7%a8%d7%9e%d7%99-%d7%92%d7%aa-%d7%91%d7%95%d7%98%d7%99%d7%a7/'>
              {' '}
              כרמי גת בוטיק
            </FooterLink>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://www.dimri.co.il/projects/%d7%a2%d7%99%d7%a8-%d7%94%d7%99%d7%99%d7%9f/'>
              {' '}
              עיר היין באשקלון
            </FooterLink>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://www.dimri.co.il/projects/%d7%9e%d7%a8%d7%99%d7%a0%d7%94-%d7%90%d7%a9%d7%a7%d7%9c%d7%95%d7%9f-yama/'>
              {' '}
              דמרי ימה – מרינה אשקלון
            </FooterLink>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://www.dimri.co.il/projects/yama-%d7%a2%d7%99%d7%a8-%d7%99%d7%9e%d7%99%d7%9d/'>
              {' '}
              דמרי ימה – עיר ימים{' '}
            </FooterLink>
          </ListItem>

          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://www.dimri.co.il/projects/%d7%a8%d7%9e%d7%95%d7%aa-%d7%99%d7%95%d7%a8%d7%9d/'>
              רמות יורם – נתיבות{' '}
            </FooterLink>
          </ListItem>
          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink href='https://www.dimri.co.il/projects/%d7%a7%d7%a8%d7%99%d7%99%d7%aa-%d7%91%d7%99%d7%90%d7%9c%d7%99%d7%a7/'>
              אפק קרית ביאליק{' '}
            </FooterLink>
          </ListItem>

          <ListItem sx={{ padding: '5px 0' }}>
            <FooterLink
              href='https://ir.dimri.co.il'
              style={{
                textDecoration: 'none',
                fontSize: 22,
                color: Colors.footerFontText,
                borderBottom: `2px solid ${Colors.footerFontText}`
              }}
            >
              לכל הפרוייקטים{' '}
            </FooterLink>
          </ListItem>
        </List>
      </Box>
    </>
  )
}

export default MarketingProjects
