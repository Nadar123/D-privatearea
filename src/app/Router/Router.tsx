import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { PrivateRoute } from '../components/PrivateRoute/privateRoute.component'
/*components*/
import DashboardPage from '../pages/dashboard.page'
import Home from '../pages/Home'
import Login from '../components/Login/login.components'
import DashboardDocument from '../components/Dashboard/DashboardDocument.component'
import NewChatOnLine from '../components/Chat/ChatOnLine/ChatOnLine'
import PostToRead from '../components/Dashboard/PostProjects/PostToRead/PostToRead'
import Profile from '../components/Profile/Profile.component'

export default function Router() {
  const isAuth = localStorage.getItem('userToken')

  const router = createBrowserRouter([
    { path: '*', element: <h2 style={{ textAlign: 'center', padding: '4rem' }}>404 Page not found</h2> },
    {
      path: '/',
      element: <Home />,
      children: [
        { path: 'login', element: <Login /> },
        { index: true, element: <Navigate to={{ pathname: isAuth ? 'dashboard' : 'login' }} /> },
        {
          path: 'dashboard',
          element: (
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          ),
          children: [
            {
              index: true,
              element: (
                <PrivateRoute>
                  <DashboardDocument />
                </PrivateRoute>
              )
            },
            {
              path: 'onlinechat',
              element: (
                <PrivateRoute>
                  <NewChatOnLine />
                </PrivateRoute>
              )
            },
            {
              path: 'profile',
              element: (
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              )
            },
            {
              path: 'singlepost',
              element: (
                <PrivateRoute>
                  <PostToRead />
                </PrivateRoute>
              )
            }
          ]
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
