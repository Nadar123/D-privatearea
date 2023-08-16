import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: ['Almoni', 'sans-serif'].join(',')
  },
  breakpoints: {
    values: {
      xs: 500,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
})
