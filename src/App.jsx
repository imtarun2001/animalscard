import { useState } from 'react';
import { animalsData } from './AnimalsData';
import Title from './components/Title';
import CardHolder from './components/CardHolder';
import './App.css';

function App() {

  const [animals,setAnimals] = useState(animalsData);

  function removeHandler(id) {
    const newAnimals = animals.filter( animal => animal.id !== id);
    setAnimals(newAnimals);
  }

  return (
    <div className='app'>
      <Title></Title>
      <CardHolder animals={animals} removeHandler={removeHandler} setAnimals={setAnimals} animalsData={animalsData}></CardHolder>
    </div>
  )
}

export default App
