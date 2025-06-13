// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ItemProvider } from './context/ItemContext';
import Navbar from './components/Navbar';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  return (
    <ItemProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<ItemForm />} />
              <Route path="/list" element={<ItemList />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ItemProvider>
  );
}

export default App;