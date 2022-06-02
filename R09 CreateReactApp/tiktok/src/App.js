import './App.css';
import { Fragment, useState } from 'react'
import StateBasic from './components/StateBasic'
import StateGift from './components/StateGift'
import StateTwoWayBinding from './components/StateTwoWayBinding'
import ToDoList from './components/ToDoList';
import UseEffect from './components/UseEffect';
import UseEffectReviewAvatar from './components/UseEffectReviewAvatar';


const orders = [100, 200, 300]

function App() {
  const [show, setShow] = useState(false)

  return (
    <Fragment>
    {/* <StateBasic/> */}
    {/* <StateGift/> */}
    {/* <StateTwoWayBinding/> */}
    {/* <ToDoList/> */}
    {/* <UseEffect/> */}
    <button onClick={() => setShow(!show)}>toggle</button>
    {show && <UseEffectReviewAvatar/>}
    </Fragment>
  );
}

export default App;
