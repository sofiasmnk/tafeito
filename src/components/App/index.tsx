import React from 'react';
import { Routes, Route } from "react-router-dom";

import Login from '../../screens/Login';
import Tasks from '../../screens/Tasks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Container</div>} />
        <Route path="login" element={<Login />} />
        <Route path="tarefas" element={<Tasks />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </div>
  );
}

export default App;