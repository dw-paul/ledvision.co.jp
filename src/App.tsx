import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComingSoon } from './pages/ComingSoon';
import { LPPage } from './pages/LPPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/lp" element={<LPPage />} />
      </Routes>
    </BrowserRouter>
  );
}