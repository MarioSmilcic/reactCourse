import { useCartStore } from "../../../stores/cart/cart";
import { useClicksStore } from "../../../stores/clicks/clicks.store";
import "../items.style.css";
import { useNavigate } from "react-router-dom";

const ItemsInCart = () => {
  const { cart, resetCart, removeItemFromCart } = useCartStore();
  const { decrementNumberOfClicks, resetClicksCount } = useClicksStore();

  const navigate = useNavigate();
  const handleOrderClick = () => {
    navigate("/items");
  };

  const emptyCart = "No items in cart";

  const totalSum = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const items = (
    <div className="items_in_cart">
      {cart.map((item) => (
        <div key={Math.random()} className="item_in_cart">
          <img src={item.image} alt={item.title} className="articleImg" />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <img
            className="recycle"
            src="https://cdn-icons-png.flaticon.com/128/11041/11041893.png"
            alt="recycle"
            onClick={() =>
              removeItemFromCart(item.id) & decrementNumberOfClicks()
            }
          />
        </div>
      ))}
      <div>
        <h3>Total price for all items: {totalSum.toFixed(2)}</h3>
        <div className="buttons">
          <button
            className="order_button"
            onClick={() =>
              resetCart() & resetClicksCount() & handleOrderClick()
            }
          >
            Order
          </button>
          <button
            className="clear_cart"
            onClick={() => {
              resetCart() & resetClicksCount();
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div>{cart.length === 0 ? emptyCart : items}</div>
    </div>
  );
};

export default ItemsInCart;

{
  /* {cart.length === 0
          ? emptyCart
          : cart.map((item) => (
              <div key={Math.random()} className="item_in_cart">
                <img src={item.image} alt={item.title} className="articleImg" />
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <img
                  className="recycle"
                  src="https://cdn-icons-png.flaticon.com/128/11041/11041893.png"
                  alt="recycle"
                  onClick={() =>
                    removeItemFromCart(item.id) & decrementNumberOfClicks()
                  }
                />
              </div>
            ))}
      </div>
      <div>
        <h3>Total price for all items: </h3>
        <div className="buttons">
          <button className="order_button">Order</button>
          <button className="clear_cart">Clear Cart</button>
        </div> */
}
