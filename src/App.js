import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import DetailUser from './components/DetailUser';
import EditUser from './components/EditUser';
import HomeUsers from './components/HomeUsers';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeUsers />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
          <Route path="detail/:id" element={<DetailUser />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
