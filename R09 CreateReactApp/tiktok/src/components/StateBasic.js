import { useState } from 'react'

const orders = [100, 200, 300]

function StateBasic() {
  //1.Counter
  const total = orders => {
    console.log('recal total (long task)')
    return orders.reduce((total, cur) => total + cur)
  }
  const [counter, setCounter] = useState(() => total(orders))
  const handerCounter = () => {
    //Case 1
    setCounter(counter + 1)
    setCounter(counter + 1) //test, but it will increse one times
    setCounter(counter + 1) //test, but it will increse one times
    //Case 2
    // setCounter(prevState => prevState + 1)  //test
    // setCounter(prevState => prevState + 1)  //test
    // setCounter(prevState => prevState + 1)  //test
  }
  console.log('re-render')

  //2.Info
  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 18,
    address: 'HCM'
  })
  const handleUpdateInfo = () =>{
    setInfo(prev =>{
      //logic code
      return{
        ...prev,
        'bio': 'like game'
      }
    })
  }

  //UI
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handerCounter}>Increse</button>
      {/**/} <hr />
      <h2>{JSON.stringify(info)}</h2>
      <button onClick={handleUpdateInfo}>Update info</button>
    </div>
  );
}

export default StateBasic;
