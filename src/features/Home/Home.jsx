import React from "react";
// import "./App.css";
import Button from "./components/Button";
import { useClicksStore } from "../../stores/clicks/clicks.store";

const Home = () => {
  const {
    clicks,
    incrementNumberOfClicks,
    resetClicksCount,
    decrementNumberOfClicks,
  } = useClicksStore();

  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
        quam.TextAdded
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam omnis
        voluptas similique, eveniet optio corrupti iure provident porro adipisci
        dicta.
      </p>
      <Button decrement={decrementNumberOfClicks} />
    </div>
  );
};

export default Home;
