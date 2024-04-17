import "../items.style.css";
import { useCartStore } from "../../../stores/cart/cart";

import { useClicksStore } from "../../../stores/clicks/clicks.store";

const Item = ({ item }) => {
  const { addItemToCart } = useCartStore();
  const { incrementNumberOfClicks } = useClicksStore();

  return (
    <div className="item">
      <img src={item.image} alt={item.title} />
      <div className="item_description">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={() => addItemToCart(item) & incrementNumberOfClicks()}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
