import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/system'

import './index.css'
import App from './app/App'
import { store } from './app/state/store'
import { theme } from './app/constants/theme.constants'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // FYI: StrictMode in dev env inits components with hooks twice (https://github.com/facebook/react/issues/15074#issuecomment-471197572)
  <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> */}

      <ThemeProvider theme={theme}>
        <div dir='rtl'>
          <App />
        </div>
      </ThemeProvider>

      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>
)
