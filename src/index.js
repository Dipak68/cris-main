import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import UserList from './Components/UserList';
import Signup from './Components/Signup';
import Login from './Components/Login';
import CaneraList from './Components/CameraList';
import Profile from './Components/Profile';
import Home from './Components/Home';
import AddCamera from './Components/AddCamera';
import Demo from './Components/Demo'

const router = createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/userlist",
        element:<UserList/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/cameralist',
        element:<CaneraList/>
      },
      {
        path:'/profile',
        element:<Profile/>
      },
      {
        path:'/addcamera',
        element:<AddCamera/>

      },
      {
        path:'/demo',
        element:<Demo/>
      }
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
