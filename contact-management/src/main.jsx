import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Register from './components/guest/register'
import GuestPage from './components/layout/guestLayout'
import Login from './components/guest/login'
import Logout from './components/dashboard/logout'
import DashboardLayout from './components/layout/dashboardLayout'
import Dashboard from './components/dashboard/dashboard'
import Profile from './components/dashboard/profile'
import CreateContact from './components/contact/createContact'
import Contact from './components/contact/contact'
import EditContract from './components/contact/editContact'
import DetailContact from './components/contact/detailContact'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route element={<GuestPage />}>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="user">
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
        </Route>

        <Route path='contact'>
          <Route index element={<Contact />} />
          <Route path='create' element={<CreateContact />} />
          <Route path='edit/:id' element={<EditContract />} />
          <Route path='detail/:id' element={<DetailContact />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  // </StrictMode>
)
