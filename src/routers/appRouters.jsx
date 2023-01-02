import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/home'
import Page1 from '../components/page1'
import Page2 from '../components/page2'
import Layout from '../layout/layout'
function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:search' element={<Home />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2/:id' element={<Page2 />} />
          <Route path='/*' element={<h1 className='text-center mt-6'>Page Not Found! (Try Again..)</h1>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouters