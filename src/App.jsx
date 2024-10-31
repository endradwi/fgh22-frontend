import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Home from './pages/Home.jsx';
import Regis from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import HomePage from './pages/Home2.jsx';
import Detail from './pages/Detail.jsx';
import OrderPage from './pages/OrderPage.jsx';
import Payment from './pages/Payment.jsx';

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
  {
    path: '/homepage',
    element: <HomePage />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
  {
    path: '/orderpage',
    element: <OrderPage />,
  },
  {
    path: '/payment',
    element: <Payment />,
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
