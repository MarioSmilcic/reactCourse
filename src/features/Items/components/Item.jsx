import React from "react";
import "../items.style.css";
import { useOrderCartStore } from "../../../stores/orders/order.store";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";

//   <Button onClick={handleClick}>Open Snackbar</Button>
// <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//   <Alert
//     onClose={handleClose}
//     severity="success"
//     variant="filled"
//     sx={{ width: '100%' }}
//   >
//     This is a success Alert inside a Snackbar!
//   </Alert>
// </Snackbar>

const Item = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (item) => {
    addItemToOrderCart(item);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const { addItemToOrderCart } = useOrderCartStore();
  return (
    <div className="item">
      <img src={item.image} alt={item.title} />
      <div className="item_description">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <button onClick={() => handleClick(item)}>Add to cart</button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Narudzba uspjesna
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Item;
