import Item from "./components/Item";
import { items } from "../../data/items";
import "./items.style.css";

const Items = () => {
  return (
    <div className="item_list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;
