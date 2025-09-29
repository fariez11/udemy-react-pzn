import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Register from './components/guest/register'
import Login from './components/guest/login'
import GuestPage from './components/layout/guestLayout'
import DashboardLayout from './components/layout/dashboardLayout'
import Contact from './components/dashboard/contact'
import Profile from './components/dashboard/profile'
import Logout from './components/dashboard/logout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GuestPage/>}>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="contact" element={<Contact /> } />
          <Route path="profile" element={<Profile /> } />
          <Route path="logout" element={<Logout /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
