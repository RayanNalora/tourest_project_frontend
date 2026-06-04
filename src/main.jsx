import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Auth from './Auth'
import HomePage from './pages/1.HomePage'
import About from './pages/2.AboutPage'
import ServicePage from './pages/3.ServicePage'
import AboutPage from './pages/2.AboutPage'
import ContactPage from './pages/4.ContactPage'
import SignUpPage from './pages/5.SignUpPage'
import TripDetails from './pages/6.TripDetails'
import LoginPage from './pages/7.LoginPage'


const routes = createBrowserRouter([
  {
    path:'/',
    element:<Auth/> ,
    children:[
      {
        path:'' ,
        element:<HomePage/>
      },
      {
        path:'/about' ,
        element:<AboutPage/>
      },
      {
        path:'/service' ,
        element:<ServicePage/>
      },
      {
        path:'/content' ,
        element:<ContactPage/>
      },
      {
        path:'/signup' ,
        element:<SignUpPage/>
      },
      {
        path:'/login' ,
        element:<LoginPage/>
      },
      {
        path:'/tripdetails/:id' ,
        element:<TripDetails/>
      },
    ]
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
