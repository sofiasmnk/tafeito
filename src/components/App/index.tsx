import React from 'react';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<div>Container</div>} />
        <Route path="login" element={<div>Login</div>} />
      </Routes>
    </div>
  );
}

export default App;