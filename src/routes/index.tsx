import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import { RoutesPath } from 'src/routes/routes'
import Layout from 'src/pages/Layout'

const ErrorPage = lazy(() => import('src/pages/ErrorPage'))
const Theme_1 = lazy(() => import('src/pages/Theme_1'))
const Theme_3 = lazy(() => import('src/pages/Theme_3'))
const Theme_6 = lazy(() => import('src/pages/Theme_6'))
const Theme_9 = lazy(() => import('src/pages/Theme_9'))

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: RoutesPath.THEME_1,
        element: <Theme_1 />,
      },
      {
        path: RoutesPath.THEME_3,
        element: <Theme_3 />,
      },
      {
        path: RoutesPath.THEME_6,
        element: <Theme_6 />,
      },
      {
        path: RoutesPath.THEME_9,
        element: <Theme_9 />,
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
])
