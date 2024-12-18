import React from 'react';
import Topbar from '../pages/Topbar/index'
import { Outlet } from 'react-router-dom';

export default function protectedRoute() {
  return (
    <div className='container'>
        <div className='row'>
            <Topbar />
            <Outlet />
        </div>
    </div>
  )
}
