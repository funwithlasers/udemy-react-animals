import { useState } from "react";

function AddAnimal() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <p>count: {count}</p>
    </div>
  );
}

export default AddAnimal;
