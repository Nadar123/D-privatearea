import React from 'react'
import { Box, Grid, styled } from '@mui/material'
import Contract from './Contract/contract.component'
import Guarantees from './Guarantees/Guarantees.component'
import OtherDocuments from './OtherDocuments/OtherDocuments'
import MobileAccordion from '../../UI/MobileAccordion/MobileAccordion'
import { UseResizeWindow } from '../../../hooks/UseResizeWindow'
import { Info } from '../../../constants/icons.constants'
import { theme } from '../../../constants/theme.constants'

const Documents = () => {
  const { width, breakpoint } = UseResizeWindow()

  return (
    <>
      {width > breakpoint ? (
        <MainWrapper id='documents'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              [theme.breakpoints.down('md')]: {
                display: 'block'
              }
            }}
          >
            <Grid style={{ padding: '0 0 0 1rem' }} xs={6} md={6} item>
              <Contract />
            </Grid>
            <Grid style={{ padding: '0 1rem 0 0' }} xs={6} md={6} item>
              <Guarantees />
              <OtherDocuments />
            </Grid>
          </Box>
        </MainWrapper>
      ) : (
        <MobileWrapper>
          <>
            <MobileAccordion title={'חוזה'}>
              <Contract />
            </MobileAccordion>
          </>
          <>
            <MobileAccordion title={'ערבויות'}>
              <Guarantees />
            </MobileAccordion>
          </>
          <>
            <MobileAccordion title={'מסמכים נוספים'}>
              <OtherDocuments />
            </MobileAccordion>
          </>
        </MobileWrapper>
      )}
    </>
  )
}

export default Documents
const MainWrapper = styled('div')({
  padding: '4rem 2rem 14rem 2rem',
  [theme.breakpoints.down('xl')]: {
    padding: '4rem 1rem 0 1rem'
  }
})

const MobileWrapper = styled('div')({
  [theme.breakpoints.down('md')]: {
    display: 'block',
    '& .MuiPaper-root-jrVkwW ': {
      margin: '0 7px'
    },
    '&.MuiAccordionDetails-root-iJwHzO': {
      padding: '0px 5px 16px'
    },
    '& h2.mobile-view': {
      display: 'none'
    },
    '& .MuiAccordionDetails-root-iJwHzO': {
      padding: '10px'
    }
  }
})
