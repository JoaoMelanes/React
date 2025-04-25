import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// criando router
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

// router page
import Contact from './routes/Contact.jsx'
import Home from './routes/Home.jsx'
import Product from './routes/Product.jsx'

// config error
import ErrorPage from './routes/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    // componente base
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"contact",
        element: <Contact />,
      },
      // Rota dinamica
      {
        path:"products/:id",
        element: <Product />,
      }
    ]
  },
  // {
  //   path:"contact",
  //   element: <Contact />,
  //   errorElement: <ErrorPage />
  // }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
