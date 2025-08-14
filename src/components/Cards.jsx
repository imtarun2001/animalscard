import Card from './Card'

function Cards({animals,removeHandler,refreshHandler}) {

    if(animals.length === 0) {
        return (
            <div className='flex flex-col items-center justify-center gap-4 bg-gray-800 text-white p-2 min-w-screen h-screen'>
                <div className='text-emerald-500 font-bold text-2xl'>No Animals Left <div className='inline-block text-red-500'>‼️</div></div>
                <button onClick={refreshHandler} className='outline-3 outline-emerald-400 bg-black text-emerald-500 font-semibold rounded-[10px] py-2 px-6 cursor-pointer hover:bg-white hover:text-black hover:outline-pink-500  transition duration-300'>Refresh</button>
            </div>
        )
    }

  return (
    <div className='flex flex-row flex-wrap justify-evenly items-center gap-10 bg-black py-10 min-w-screen h-screen overflow-y-scroll'>
      {
        animals.map((animal) => {
            return <Card key={animal.id} animal={animal} removeHandler={removeHandler}></Card>
        })
      }
    </div>
  )
}

export default Cards
