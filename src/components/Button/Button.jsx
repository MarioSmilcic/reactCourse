const Button = ({ buttonText, handleButtonClick, color }) => {
  return (
    <button style={{ background: color }} onClick={handleButtonClick}>
      {buttonText}
    </button>
  );
};

export default Button;
