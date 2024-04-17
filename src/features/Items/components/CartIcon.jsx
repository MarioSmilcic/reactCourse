import "../items.style.css";
import { useNavigate } from "react-router-dom";
import { useClicksStore } from "../../../stores/clicks/clicks.store";

const CartIcon = () => {
  const { clicks } = useClicksStore();

  const router = useNavigate();
  const handleClickCart = () => {
    router("/orders");
  };

  return (
    <div className="cart_icon" onClick={() => handleClickCart()}>
      <span>{clicks}</span>
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/free-shopping-cart-1433158-1211836.png?f=webp&w=512"
        alt="Cart Icon"
      />
    </div>
  );
};

export default CartIcon;
