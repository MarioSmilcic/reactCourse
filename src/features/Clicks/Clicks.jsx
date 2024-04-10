import { useClicksStore } from "../../stores/clicks/clicks.store";
import Click from "./components/Click";
import { useState } from "react";

const Clicks = () => {
  const [numberToAdd, setNumberToAdd] = useState(0);

  const {
    clicks,
    incrementNumberOfClicks,
    resetClicksCount,
    addMultiNumberToClicks,
  } = useClicksStore();

  const addNumberToGlobal = (clicks) => {
    clicks + numberToAdd;
  };

  return (
    <div>
      <h2>Clicks</h2>
      <button onClick={() => incrementNumberOfClicks()}>Add Click</button>
      <button onClick={() => resetClicksCount()}>Reset clicks</button>
      <button onClick={() => setNumberToAdd(numberToAdd + 1)}>
        Number to add
      </button>
      <h2>Number to add: {numberToAdd}</h2>
      <Click numberOfClicks={clicks} />

      <button onClick={() => addMultiNumberToClicks(numberToAdd)}>
        Add number to global store clicks
      </button>
    </div>
  );
};

export default Clicks;
