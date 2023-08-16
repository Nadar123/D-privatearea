import React from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes.constants'

interface IPrivateRoute {
  children: JSX.Element
}

export const PrivateRoute: React.FC<IPrivateRoute> = ({ children }) => {
  const isAuth = localStorage.getItem('userToken')

  if (isAuth) {
    return children
  }
  return <Navigate to={{ pathname: ROUTES.ROOT }} />
}
