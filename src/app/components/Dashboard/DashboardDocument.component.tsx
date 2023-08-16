import React from 'react'
/*compoenents*/
import { Grid } from '@mui/material'
import Payments from './Payments/Payments.component'
import PostProjects from './PostProjects/PostProjects.components'
import Appeal from './Appeal/Appeal.component'
import Documents from './Documents/Documents.component'
import MyApartment from './MyApartment/MyApartment.component'
import ProgressStages from './ProgressStages/ProgressStages.component'
/*styles*/
import { theme } from '../../constants/theme.constants'

function DashboardContent() {
  return (
    <Grid
      item
      sx={{
        width: '100%',
        margin: '2rem auto 0 auto',
        [theme.breakpoints.down('md')]: {
          padding: '5rem 0 0 0',
          display: 'block'
        }
      }}
      container
      spacing={3}
    >
      <Grid
        className='asasa'
        item
        xs={12}
        sx={{
          [theme.breakpoints.down('xl')]: {
            padding: '0 10px'
          },
          [theme.breakpoints.down('md')]: {
            width: '100%',
            padding: 0,
            paddingLeft: '0 !important'
          }
        }}
      >
        <ProgressStages />
      </Grid>
      <Grid sx={{ padding: '0' }} item xs={12}>
        <MyApartment />
      </Grid>
      <Grid item xs={12}>
        <Appeal />
      </Grid>
      <Grid item xs={12}>
        <Payments />
      </Grid>
      <Grid item xs={12}>
        <Documents />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          [theme.breakpoints.down('md')]: {
            width: '90%',
            margin: 'auto',
            padding: 0,
            paddingLeft: '0 !important'
          }
        }}
      >
        {/* <PostProjects /> */}
      </Grid>
    </Grid>
  )
}

export default DashboardContent
