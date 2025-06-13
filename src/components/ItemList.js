// src/components/ItemList.js
import React, { useEffect } from 'react';
import { useItems } from '../context/ItemContext';

const ItemList = () => {
  const { items, loading, fetchItems } = useItems();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  if (loading) {
    return <div className="loading">Carregando itens...</div>;
  }

  return (
    <div className="list-container">
      <h2>Itens Cadastrados</h2>
      {items.length === 0 ? (
        <p>Nenhum item cadastrado</p>
      ) : (
        <ul className="item-list">
          {items.map((item) => (
            <li key={item.id} className="item-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;