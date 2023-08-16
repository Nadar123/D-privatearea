import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function Loader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  )
}

export default Loader
