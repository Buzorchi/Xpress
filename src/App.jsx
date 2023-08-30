import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import React from 'react';
import './index.css'
//  import Header from './Components/Header'
import Signup from './Components/signup';
import Signin from './Components/Signin';
import Dashboard from "./Components/Dashboard";
import BasicDemo from "./Components/table";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path= "/" element={<Signup />}/>
      <Route path= "/signin" element={<Signin />}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      {/* <Route path="/modal" element={<Modal/>}/> */}
    </>
    
));

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App