import "../pocemons.style.css";

const Pocemon = ({ image, no, name, type, type1 }) => {
  let color;

  switch (type) {
    case "Water":
      color = "pocemon_type__water";
      break;
    case "Bug":
      color = "pocemon_type__bug";
      break;
    case "Electric":
      color = "pocemon_type__electric";
      break;
    case "Normal":
      color = "pocemon_type__normal";
      break;
    case "Fire":
      color = "pocemon_type__fire";
      break;
  }

  return (
    <div className="pocemon">
      <img src={image} alt="name" />
      <div className="pocemon_info">
        <p>#{no}</p>
        <h2 className="pocemon_name">{name}</h2>
        <div className="pocemon_type__group">
          <h4 className={color}>{type}</h4>
          {type1 && <h4 className="pocemon_type__flying">{type1}</h4>}
        </div>
      </div>
    </div>
  );
};

export default Pocemon;
