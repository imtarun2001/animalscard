import { animalsData } from './Data'
import { useState } from 'react'
import Cards from './components/Cards';
import { FaFilter } from "react-icons/fa6";
import { TbSortDescendingLetters } from "react-icons/tb";
import { TbSortAscendingLetters } from "react-icons/tb";
import { TbSortDescendingNumbers } from "react-icons/tb";
import { TbSortAscendingNumbers } from "react-icons/tb";
import { SiAnimalplanet } from "react-icons/si";
import { IoEarthSharp } from "react-icons/io5";
import toast from 'react-hot-toast';

function App() {

  const [animals,setAnimals] = useState(animalsData);

  function removeHandler(id) {
    setAnimals(animals.filter(animal => animal.id !== id));
    toast.success('Animal removed successfully');
  };

  const [namesAscending,setNamesAscending] = useState(false);

  function sortAtoZ() {
    let sortedFromAtoZ = [...animals].sort((a,b) => a.name.localeCompare(b.name));
    setAnimals(sortedFromAtoZ);
    toast.success('Animals sorted in ascending order by names');
  };

  function sortZtoA() {
    let sortedFromZtoA = [...animals].sort((a,b) => b.name.localeCompare(a.name));
    setAnimals(sortedFromZtoA);
    toast.success('Animals sorted in descending order by names');
  };

  function sortAnimalsByNames() {
    setNamesAscending(!namesAscending);
    namesAscending ? sortZtoA() : sortAtoZ()
  };

  const [idAscending,setIdAscending] = useState(true);

  function sortIdAscending() {
    const newAnimals = [...animals].sort((a,b) => a.id-b.id);
    setAnimals(newAnimals);
    toast.success(`Animals sorted in ascending order by id`);
  };
  
  function sortIdDescending() {
    const newAnimals = [...animals].sort((a,b) => b.id-a.id);
    setAnimals(newAnimals);
    toast.success(`Animals sorted in descending order by id`);
  };

  function sortById() {
    setIdAscending(!idAscending);
    idAscending ? sortIdDescending() : sortIdAscending();
  }

  function refreshHandler() {
    setAnimals(animalsData);
    toast.success('Page refreshed successfully');
  }

  return (
    <div className='flex flex-col justify-start items-center gap-4 bg-black h-screen w-screen pt-2'>
      <div className='text-5xl text-white font-bold py-2 px-12'><div className='inline-block animate-spin text-blue-500'><IoEarthSharp/></div>AN<div className='inline-block animate-bounce text-blue-600'>I</div>MALS<div className='inline-block text-green-400'><SiAnimalplanet/></div></div>

      <div className='w-[45%] flex justify-between items-center'>


      <button onClick={sortAnimalsByNames} className='bg-violet-500 animate-pulse rounded-[10px] p-2 cursor-pointer'>
        {
          namesAscending ? <div className='flex justify-center items-center'><FaFilter/>&nbsp;<p>Names</p>&nbsp;<TbSortDescendingLetters className='text-lg'/></div> : <div className='flex justify-center items-center'><FaFilter/>&nbsp;<p>Names</p>&nbsp;<TbSortAscendingLetters className='text-lg'/></div>
        }
      </button>
      <button onClick={sortById} className='bg-fuchsia-400 animate-pulse rounded-[10px] p-2 cursor-pointer'>
        {
          namesAscending ? <div className='flex justify-center items-center'><FaFilter/>&nbsp;<p>ID</p>&nbsp;<TbSortDescendingNumbers className='text-lg'/></div> : <div className='flex justify-center items-center'><FaFilter/>&nbsp;<p>ID</p>&nbsp;<TbSortAscendingNumbers className='text-lg'/></div>
        }
      </button>


      </div>


      <Cards animals={animals} setAnimals={setAnimals} animalsData={animalsData} removeHandler={removeHandler} refreshHandler={refreshHandler}></Cards>
    </div>
  )
}

export default App
