import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Register from './components/user/register'
import Login from './components/user/login'
import GuestPage from './components/layout/guestPage'
import DashboardLayout from './components/layout/dashboardPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GuestPage/>}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/dahsboard" element={<DashboardLayout/>}>
          <Route path='contact' element={<div> Contact Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
