import { useState } from "react";
import AnimalShow from "./AnimalShow";

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  function getRandomAnimal() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="App">
      <header className="App-header"></header>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
