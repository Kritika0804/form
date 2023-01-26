import React, { useState } from 'react'
import data from '../data.json';
import Type1 from './Type1';
function Main() {

  const[CurrQues,setCurrQues]=useState(0);

  return (
    <>
      <div>
          {
            data.map( Data => {
              return(
                <div className='main'>
                  {Data.question_text}
                  
                </div>
              )
            })
          }

      </div>
    </>
  )
}

export default Main
