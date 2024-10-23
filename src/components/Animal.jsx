import React, { useState } from 'react';
import './Animal.css';

function Animal({id,name,species,description,image,removeHandler}) {

    const [readmore,setReadmore] = useState(false);
    const [like,setLike] = useState(false);

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    function likeHandler() {
        setLike(!like);
    }

  return (
    <div className='animal'>
        <div className='name'>
            <h3><u>{id}. {name}</u> <sub>( {species} )</sub></h3>
        </div>
        <div className='image'>
            <img src={image} alt="" height="150px"/>
        </div>
        <div className='description'>
            <div>
                {
                    readmore ? `${description}....` : `${description.slice(0,135)}....`
                }
                <span onClick={readmoreHandler}>
                    {
                        readmore ? 'show less' : 'read more'
                    }
                </span>
            </div>
        </div>
        <div className='btn'>
            <button onClick={ () => { removeHandler(id) } }>❌</button>
            <button onClick={likeHandler}>{like ? '💗' : '❤️'}</button>
        </div>
    </div>
  )
}

export default Animal