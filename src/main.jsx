import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import {Layout, Home, About, Contact, Github,githubInfo, User} from './index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Home/>} />
      <Route path='About' element = {<About/>} />
      <Route path='Contact' element = {<Contact/>} />
      <Route path='user/:id' element = {<User/>} />
      <Route 
        loader = {githubInfo}
        path='Github'
        element = {<Github/>}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
