import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import PreWeddingOffers from './PreWeddingOffers.jsx'
import SongShootOffers from './SongShootOffers.jsx'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/prewedding-offers" element={<PreWeddingOffers />} />
        <Route path="/songshoot-offers" element={<SongShootOffers />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
