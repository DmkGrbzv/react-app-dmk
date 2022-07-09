import React from 'react'
import Login from '../pages/Login';
import { Route, Routes } from "react-router-dom";
import {publicRoutes,privateRoutes} from '../router/index'
import { useContext } from 'react';
import { AuthContext } from '../context';
export default function AppRouter() {
  const {isAuth} = useContext(AuthContext); 
  console.log(publicRoutes);
  return (
      <Routes>
        {isAuth
          ?
            privateRoutes.map(route=>
              <Route path={route.path} element={route.element} key={route.path} exact={route.exact}></Route>
            )
          :
            publicRoutes.map(route=>
              <Route path={route.path} element={route.element} key={route.path} exact={route.exact}></Route>
            )
        }
        <Route path="/*" element={<Login />} />
      </Routes>
  )
}
