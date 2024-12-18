import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from '../routes/publicRoute';
import Login from '../pages/Login/index';
import ProtectedRoute from '../routes/protectedRoute';
import Dashboard from '../pages/Dashboard/index';
import Location from '../pages/Location/index';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<PublicRoute />}>
            <Route index element={<Login/>}/>
        </Route>
        <Route path='/' element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/location' element={<Location />}/>
        </Route>
    </Routes>
  )
}
