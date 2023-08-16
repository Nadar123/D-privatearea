import React from 'react'
import { UseResizeWindow } from '../../../hooks/UseResizeWindow'
import { useAppSelector } from '../../../hooks/redux.hooks'
/*components*/
import { Box, Grid, styled } from '@mui/material'
import FinishingMaterials from './FinishingMaterials/FinishingMaterials.component'
import TenantsChanges from './TenantsChanges/TenantsChanges.component'
import MobileAccordion from '../../UI/MobileAccordion/MobileAccordion'
/*styles*/
import { theme } from '../../../constants/theme.constants'
import { Colors } from '../../../constants/styles.constants'

function MyApartment() {
  const { width, breakpoint } = UseResizeWindow()

  const finishingMaterialsData = useAppSelector((state) => state.finishingMaterials.FinishingMaterialsData)
  return (
    <>
      {width > breakpoint ? (
        <MainWrapper id='myApartment'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexGrow: 1,
              width: '100%',
              [theme.breakpoints.down('md')]: {
                display: 'block'
              }
            }}
          >
            <Grid
              item
              xs={6}
              md={12}
              sx={{
                padding: '0 0 0 1rem',
                [theme.breakpoints.down('md')]: {
                  padding: '0'
                }
              }}
            >
              <FinishingMaterials />
            </Grid>
            <Grid item xs={12} md={12}>
              <TenantsChanges />
            </Grid>
          </Box>
        </MainWrapper>
      ) : (
        <MobileWrapper>
          <>
            <MobileAccordion title={'חומרי גמר'} extraData={finishingMaterialsData?.notChosenMaterials.length}>
              <FinishingMaterials />
            </MobileAccordion>
          </>
          <>
            <MobileAccordion title={'שינויי דיירים'}>
              <TenantsChanges />
            </MobileAccordion>
          </>
        </MobileWrapper>
      )}
    </>
  )
}

export default MyApartment

const MainWrapper = styled('div')({
  margin: '0 2rem',
  padding: '4rem 0 2rem 0',
  borderBottom: `2px solid ${Colors.lightBrownSecond}`,
  [theme.breakpoints.down('xl')]: {
    margin: '0 1rem'
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
