import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './Nav/Nav';
import { Home } from './pages/Home/Home';
import { Request } from './pages/Request/Request';
import { NewReq } from './pages/NewReq/NewReq';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request/:id" element={<Request />} />
        <Route path="/new-request" element={<NewReq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
