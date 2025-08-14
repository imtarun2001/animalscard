import { animalsData } from './Data'
import { useEffect, useState } from 'react'
import Cards from './components/Cards';
import { FaFilter } from "react-icons/fa6";
import { TbSortDescendingLetters, TbSortAscendingLetters, TbSortDescendingNumbers, TbSortAscendingNumbers } from "react-icons/tb";
import { SiAnimalplanet } from "react-icons/si";
import { IoEarthSharp } from "react-icons/io5";
import toast from 'react-hot-toast';

function App() {

  const [animals,setAnimals] = useState(animalsData);
  const [idSortedInAscending,setIdSortedByAscending] = useState(false);
  const [nameSortedInAscending,setNameSortedByAscending] = useState(false);


  const idHandler = () => {
    if(idSortedInAscending) {
      setAnimals([...animals].sort((a,b) => b.id - a.id));
      setIdSortedByAscending(false);
      toast.success('Animals sorted in descending by ID');
    }
    else {
      setAnimals([...animals].sort((a,b) => a.id - b.id));
      setIdSortedByAscending(true);
      toast.success('Animals sorted in ascending by ID')
    }
  }

  const nameHandler = () => {
    if(nameSortedInAscending) {
      setAnimals([...animals].sort((a,b) => b.name.localeCompare(a.name)));
      setNameSortedByAscending(false);
      toast.success('Animals sorted in descending by Name');
    }
    else {
      setAnimals([...animals].sort((a,b) => a.name.localeCompare(b.name)));
      setNameSortedByAscending(true);
      toast.success('Animals sorted in ascending by Name');
    }
  }

  const removeHandler = (id) => {
    setAnimals(animals.filter(animal => animal.id !== id));
  }
  const refreshHandler = () => {
    setAnimals(animalsData);
  }

  useEffect(() => {
    idHandler();
  },[]);


  return (
    <div className='flex flex-col justify-start items-center gap-4 bg-black h-screen w-screen pt-2'>
      <div className='text-5xl text-white font-bold py-2 px-12'><div className='inline-block animate-spin text-blue-500'><IoEarthSharp/></div>AN<div className='inline-block animate-bounce text-blue-600'>I</div>MALS<div className='inline-block text-green-400'><SiAnimalplanet/></div></div>

      <div className='w-[45%] flex justify-between items-center'>

        <button onClick={nameHandler} className='bg-violet-500 animate-pulse rounded-[10px] p-2 cursor-pointer'>
          <div className='flex justify-center items-center'><FaFilter/>&nbsp;<p>Names</p>&nbsp; {nameSortedInAscending ? <TbSortDescendingLetters className='text-lg'/> : <TbSortAscendingLetters className='text-lg'/>}</div>
        </button>

        <button onClick={idHandler} className='bg-fuchsia-400 animate-pulse rounded-[10px] p-2 cursor-pointer'>
          <div className='flex justify-center items-center'><FaFilter/>&nbsp;<p>ID</p>&nbsp; {idSortedInAscending ? <TbSortDescendingNumbers className='text-lg'/> : <TbSortAscendingNumbers className='text-lg'/>}</div>
        </button>

      </div>


      <Cards animals={animals} setAnimals={setAnimals} animalsData={animalsData} removeHandler={removeHandler} refreshHandler={refreshHandler}></Cards>
    </div>
  )
}

export default App
