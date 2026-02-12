import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComingSoon } from './pages/ComingSoon';
import { LPPage } from './pages/LPPage';
import { Thanks } from './pages/Thanks';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/lp" element={<LPPage />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}