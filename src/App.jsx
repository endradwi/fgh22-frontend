import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Home from './pages/Home.jsx';
import Regis from './pages/Register.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Regis />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
function App() {

  return (
    <>
    <RouterProvider router={router} />;
    </>
  )
}

export default App
