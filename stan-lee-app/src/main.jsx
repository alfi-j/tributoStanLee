import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage';
import CreationsPage from './pages/CreationsPage';
import SpiderManPage from './pages/SpiderManPage';
import CameosPage from './pages/CameosPage';
import GalleryPage from './pages/GalleryPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="creations" element={<CreationsPage />} />
          <Route path="spiderman" element={<SpiderManPage />} />
          <Route path="cameos" element={<CameosPage />} />
          <Route path="gallery" element={<GalleryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
