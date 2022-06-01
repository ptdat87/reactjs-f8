import './App.css';
import { Fragment, useState } from 'react'
import StateBasic from './components/StateBasic'
import StateGift from './components/StateGift'
import StateTwoWayBinding from './components/StateTwoWayBinding'
import ToDoList from './components/ToDoList';
import UseEffect from './components/UseEffect';


const orders = [100, 200, 300]

function App() {
  return (
    <Fragment>
    {/* <StateBasic/> */}
    {/* <StateGift/> */}
    {/* <StateTwoWayBinding/> */}
    {/* <ToDoList/> */}
    <UseEffect/>
    </Fragment>
  );
}

export default App;
