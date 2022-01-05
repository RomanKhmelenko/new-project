const Input = ({ handleChange, inputValue }) => {

  return (
    <div>
      <input onChange={handleChange} value={inputValue} />
    </div>
  );
};

export default Input;