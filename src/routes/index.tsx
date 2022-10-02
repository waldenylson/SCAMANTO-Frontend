import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import Route from './Route';

import SignIn from '../pages/Auth/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Routes>
    <Route path="/" element={SignIn} />

    <Route path="/dashboard" element={Dashboard} authenticatedRoute />
    {/* <Route path="/dashboard" component={Dashboard} /> */}
  </Routes>
);

export default Routes;
