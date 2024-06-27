import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import axiosApi from './axios-api'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home/Home'
import Add from './containers/Add/Add'
import Contacts from './containers/Contacts/Contacts'
import About from './containers/About/About'
import { useEffect, useState } from 'react'

const App=()=> {


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-xxl d-flex gap-2">
        <span className="navbar-brand m-auto">My Blog</span>
        <div className="collapse navbar-collapse d-flex">
          <ul className="navbar-nav flex-row flex-wrap m-auto gap-5">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/new-post">Add</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Routes>
      <Route path="/new-post" element={(
        <Add/>
      )}/>
      <Route path="/contacts" element={(
        <Contacts/>
      )}/>
      <Route path="/about" element={(
        <About/>
      )}/>
      <Route path="/" element={(
        <Home/>
      )}/>
      <Route path="*" element={<h1 className='m-5 text-center'>Not Found!</h1>}/>
    </Routes>
  
    <div className="bg-dark py-3" style={{position: 'fixed', width: "100%", bottom: '0',}}>
      <div className="container-xxl d-flex gap-2">
        <span className="text-light">My Blog</span>
        <span className='ms-auto text-light'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>
          +77777777777
        </span>
      </div>
    </div>
    </>
  )
}

export default App
