import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Slide from './Slide';
import Dashboard from './Dashboard/Dashboard';
import Teacher from './Dashboard/Teacher/Teacher';
import Student from './Dashboard/Student/Student';
import Fee from './Dashboard/Fee/Fee'

const Routing = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Slide />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="teacher" />} /> 
          <Route path="teacher" element={<Teacher />} />
          <Route path="student" element={<Student />} />
          <Route path="fee" element={<Fee />} />
        </Route>
        <Route path="teacher" element={<Teacher />} />
        <Route path="student" element={<Student />} />
        <Route path="fees" element={<Fee />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default Routing;
