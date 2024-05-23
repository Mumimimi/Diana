import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import LoadingPage from 'src/pages/LoadingPage'

import { Router } from './routes'

import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ToastContainer />
      <RouterProvider router={Router}></RouterProvider>
    </Suspense>
  )
}

export default App
