import React from "react";
import "../items.style.css";
import { useNavigate } from "react-router-dom";
import { useOrderCartStore } from "../../../stores/orders/order.store";

const ItemsInCart = () => {
  const router = useNavigate();
  const {
    orders,
    removeItemFromOrderCart,
    clearOrderCart,
    addItemToOrderCart,
    incrementItemQuantity,
    decrementItemQuantity,
  } = useOrderCartStore();

  const total = orders.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    // Here you can implement the logic to send the order to the backend
    // and clear the cart
    clearOrderCart();
    router("/items");
  };

  const itemTotalPrice = (item) => {
    const totalItemPrice = item.price * item.quantity;
    return totalItemPrice.toFixed(2);
  };

  return (
    <div>
      {orders.length ? (
        <>
          <h1>Items in Cart</h1>
          <div className="items_cart">
            {orders.map((item) => (
              <div key={item.id} className="item_in_cart">
                <img className="item_image" src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <div className="quantity">
                  <p>${itemTotalPrice(item)}</p>
                  <div className="quantity_more">
                    <span
                      className="quantity_function"
                      onClick={() => decrementItemQuantity(item)}
                    >
                      -
                    </span>
                    <span>{item.quantity}</span>
                    <span
                      className="quantity_function"
                      onClick={() => addItemToOrderCart(item)}
                    >
                      +
                    </span>
                  </div>
                </div>
                <img
                  onClick={() => removeItemFromOrderCart(item.id)}
                  className="trash_bin"
                  src="https://cdn-icons-png.freepik.com/256/2706/2706980.png"
                  alt="Trash Bin Icon"
                />
              </div>
            ))}
            <p className="total_price">
              Total price for all items: ${total.toFixed(2)}
            </p>
            <button className="order_button" onClick={() => handleOrder()}>
              Order
            </button>
          </div>
        </>
      ) : (
        <h2>No items in cart</h2>
      )}
    </div>
  );
};

export default ItemsInCart;
