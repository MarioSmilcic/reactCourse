import React from 'react';
import '../items.style.css';
import { useOrderCartStore } from '../../../stores/orders/order.store';

const Item = ({ item }) => {
  const { addItemToOrderCart } = useOrderCartStore();
  return (
    <div className="item">
      <img src={item.image} alt={item.title} />
      <div className="item_description">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <button onClick={() => addItemToOrderCart(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Item;
