// src/context/ItemContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

const ItemContext = createContext();

export const useItems = () => useContext(ItemContext);

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await api.get('/items');
      setItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar itens:', error);
      setLoading(false);
    }
  };

  const addItem = async (item) => {
    try {
      const response = await api.post('/items', item);
      setItems([...items, response.data]);
      return { success: true };
    } catch (error) {
      console.error('Erro ao adicionar item:', error);
      return { success: false, error };
    }
  };

  return (
    <ItemContext.Provider value={{ items, loading, addItem, fetchItems }}>
      {children}
    </ItemContext.Provider>
  );
};