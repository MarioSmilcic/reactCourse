import React from 'react';
import { items } from '../../data/items';
import Item from './components/Item';
import './items.style.css';

const Items = () => {
  return (
    <div className="items_list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;
