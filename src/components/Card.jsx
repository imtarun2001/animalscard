import { useState } from 'react'
import { MdDelete } from "react-icons/md";

function Card({animal,removeHandler}) {

    const [readmore,setReadmore] = useState(false);

  return (
    <div className='flex flex-col justify-between items-center gap-5 w-80 bg-gray-200 py-5 px-2 rounded-[7px] outline-2 outline-fuchsia-500 transform-3d hover:scale-105 hover:bg-black hover:text-white transition duration-700 mb-2.5 cursor-pointer'>
      <div className='font-extrabold'>
        {
            animal.id+'.'+animal.name
        }
        <sub>[
            {
                animal.specie
            }
        ]</sub>
      </div>
        <img src={animal.image} alt=""/>
      <div className='h-50% overflow-y-scroll'>
        {
            readmore ? <p className='text-justify'>{animal.description.substr(0,300)}...<span onClick={() => setReadmore(false)} className='font-semibold text-orange-600'>show less</span></p> : <p className='text-justify'>{animal.description.substr(0,100)}...<span onClick={() => setReadmore(true)} className='font-semibold text-orange-600'>read more</span></p>
        }
      </div>
      <button onClick={() => removeHandler(animal.id)} className='outline-3 text-black outline-blue-600 rounded-[10px] px-15 bg-cover bg-center text-5xl' style={{backgroundImage: "url('https://st.depositphotos.com/3114403/54084/v/450/depositphotos_540845108-stock-illustration-vector-illustration-cute-animal-paw.jpg')"}}><MdDelete/></button>
    </div>
  )
}

export default Card
