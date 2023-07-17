
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Products from './pages/Products'
import Home from './pages/Home';
import { Route, Routes,Navigate } from "react-router-dom";
import Page404 from './pages/Page404';
import NavigationBar from './Components/NavigationBar';
import Footerbar from './Components/Footerbar';
import Category from './pages/Category'
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import Signup from './pages/Signup';
import Cart from './pages/Cart';

export default function App() {

  let userLogin = localStorage.getItem('userLogin');

  const [user, setUser] = useState(userLogin)

  return (
    <>

      <NavigationBar />
 

      {
        user == 'true' ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/products/categories" element={<Category />} />
            <Route path="/products/category/:categoryName" element={<CategoryPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        ) :
            (
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductPage />} />
              <Route path="/products/categories" element={<Category />} />
              <Route path="/products/category/:categoryName" element={<CategoryPage />} />
              <Route path="/cart" element={<Home />} />
              <Route path="*" element={<Page404 />} />
              </Routes>
            )
      }


      <Footerbar />
    </>
  )
}