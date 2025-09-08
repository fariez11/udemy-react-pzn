import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Customer from './pages/Customer.jsx'
import Seller from './pages/Seller.jsx'
import Product from './pages/Product.jsx'
import Data from './pages/Data.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/data'>
          <Route index element={<Data />} />
          <Route path='products' element={<Product />} />
          <Route path='customers' element={<Customer />} />
          <Route path='sellers' element={<Seller />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
