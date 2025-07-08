import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import ProductCard from '../components/ProductCard'
import ProductCardSetup from '../components/ProductCardSetup'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/products/bestseller' element={<ProductCardSetup/>}/>

    </Routes>
  )
}

export default AppRoutes