import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
  };
  return (
    <div>
      <div>{inputValue}</div>
      <button
        type="button"
        onClick={() => {
          setInputValue("Phrase");
        }}
      >
        click
      </button>
      <input type="text" value={inputValue} onChange={onInputChange} />
    </div>
  );
};
export default Home;
