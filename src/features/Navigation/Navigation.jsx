import { Link } from "react-router-dom";
import "./Navigation.css";
import CartIcon from "../Items/components/CartIcon";

const Navigation = () => {
  return (
    <nav
      className="navigation"
      // style={{
      //   position: "fixed",
      //   top: "0",
      //   display: "flex",
      //   gap: "10px",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   width: "100%",

      //   backgroundColor: "gray",
      //   textAlign: "center",
      //   padding: "20px",
      // }}
    >
      {/* <Link to={{ pathname: "/" }}>Home</Link>
      <Link to={{ pathname: "/page1" }}>First Page</Link>
      <Link to={{ pathname: "/page2" }}>Second Page</Link> */}
      <div className="links">
        <Link to={{ pathname: "/" }}>Home</Link>
        <Link to={{ pathname: "/about" }}>About</Link>
        <Link to={{ pathname: "/work" }}>Work</Link>
        <Link to={{ pathname: "/posts" }}>Posts</Link>
        <Link to={{ pathname: "/users" }}>Users</Link>
        <Link to={{ pathname: "/tasks" }}>Tasks</Link>
        <Link to={{ pathname: "/clicks" }}>Clicks</Link>
        <Link to={{ pathname: "/cart" }}>Cart</Link>
        <Link to={{ pathname: "/items" }}>Items</Link>
      </div>
      <CartIcon />
    </nav>
  );
};

export default Navigation;
