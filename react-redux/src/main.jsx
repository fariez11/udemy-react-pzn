import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice.jsx'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './counter.jsx'
import CounterDouble from './counterDouble.jsx'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/counter"} element={
          <>
            <Counter />         
            <CounterDouble />         
          </>
        } />
      </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>
)
