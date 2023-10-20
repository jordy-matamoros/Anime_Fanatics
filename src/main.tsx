import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './Pages/Home/404/NotFound.tsx'
import { AnimeDetail } from './components/AnimeDetail/AnimeDetail.tsx'

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/dashboard/:id',
    element: <AnimeDetail />,
    errorElement: <NotFound />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
