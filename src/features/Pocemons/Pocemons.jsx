import Pocemon from "./components/Pocemon";
import { usePocemonsStore } from "../../stores/pocemons/pocemons.store";
import "./pocemons.style.css";
import { useState } from "react";

const Pocemons = () => {
  const { pocemons, showMorePocemons } = usePocemonsStore();

  //   const [showPocemons, setShowPocemons] = useState(4);
  //   const showMorePocemons = () => {
  //     setShowPocemons((prevPocemons) => prevPocemons + 4);
  //   };

  return (
    <div>
      <div className="pocemons">
        {/* {pocemons.slice(0, showPocemons).map((pocemon) => ( */}
        {pocemons.map((pocemon) => (
          <Pocemon
            key={pocemon.id}
            image={pocemon.image}
            no={pocemon.no}
            name={pocemon.name}
            type={pocemon.type}
            type1={pocemon.type1}
          />
        ))}
      </div>

      {pocemons.length < 5 && (
        <button className="pocemon_button" onClick={showMorePocemons}>
          Load more Pocemon
        </button>
      )}
    </div>
  );
};

export default Pocemons;
