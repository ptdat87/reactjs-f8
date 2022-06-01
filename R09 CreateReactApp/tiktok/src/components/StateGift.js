import { useState } from 'react'

const gifts = [
  'CPU i9',
  'Ram 32GB', 
  'Keyboard'
]

function StateGift() {
  const [gift,setGift] = useState()

  const randomGift = ()=>{
    const index = Math.floor(Math.random()*gifts.length)
    setGift(gifts[index]);
  }
  //UI
  return (
    <div style={{padding:32}}>
     <h1>{gift || 'Not have any gift yet'}</h1>
     <button onClick={randomGift}>Get gift</button>
    </div>
  );
}

export default StateGift;
