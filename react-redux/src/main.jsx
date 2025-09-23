import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import Counter from './counter/counter.jsx'
import CounterDouble from './counter/counterDouble.jsx'
import { CounterSlice } from './counter/counterSlice.jsx'
import { todoListSlice } from './todoList/todoListSlice.jsx'
import ListTodo from './todoList/listTodo.jsx'
import AddTodo from './todoList/addTodo.jsx'
import UpdateTodo from './todoList/updateTodo.jsx'

const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    todoList: todoListSlice.reducer
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
          <Route path={"/todo-list"} element={<ListTodo />} />
          <Route path={"/todo-list/add"} element={<AddTodo />} />
          <Route path={"/todo-list/edit/:id"} element={<UpdateTodo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
