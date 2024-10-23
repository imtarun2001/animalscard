import React from 'react';
import './CardHolder.css';
import Animal from './Animal';

function CardHolder({animals,removeHandler,setAnimals,animalsData}) {

    if(animals.length===0) {
        return (
            <div className='cardholders'>
                <h2>No Animals Left</h2>
                <button className='rfs' onClick={() => {setAnimals(animalsData)}}>REFRESH🔃</button>
            </div>
        )
    }

  return (
    <div className='cardholder'>
        {
            animals.map( (animal) => {
                return <Animal key={animal.id} {...animal} removeHandler={removeHandler}></Animal>
            })
        }
    </div>
  )
}

export default CardHolder