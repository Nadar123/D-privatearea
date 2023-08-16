import { Stack, LinearProgress } from '@mui/material'
import React from 'react'

function VerticalLoader() {
  return (
    <Stack className='main-loader' spacing={2}>
      <LinearProgress sx={{ width: '35%', margin: '8rem auto 0 auto', color: 'grey.500' }} color='success' />
    </Stack>
  )
}

export default VerticalLoader
