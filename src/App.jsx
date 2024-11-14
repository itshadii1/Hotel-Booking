import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Homepage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
  );
}

export default App;
