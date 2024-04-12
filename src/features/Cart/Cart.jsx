import { useCartStore } from "../../stores/cart/cart";
import { useClicksStore } from "../../stores/clicks/clicks.store";
import "./Cart.css";

const Cart = () => {
  const { cart, resetCart, removeItemFromCart } = useCartStore();
  const { clicks, resetClicksCount, decrementNumberOfClicks } =
    useClicksStore();

  return (
    <div>
      <div className="cartState">
        <h2>Cart Items: {clicks}</h2>
        <button onClick={() => resetCart() & resetClicksCount()}>
          Reset Cart
        </button>
      </div>
      <div>
        {cart.map((cart) => (
          <div key={cart.id} className="cart">
            <h4>{cart.title}</h4>
            <p>Post id: {cart.postId}</p>
            <button
              onClick={() =>
                removeItemFromCart(cart.id) & decrementNumberOfClicks()
              }
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cart;
