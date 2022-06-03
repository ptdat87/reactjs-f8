import './App.css';
import { Fragment, useState } from 'react'
import StateBasic from './components/StateBasic'
import StateGift from './components/StateGift'
import StateTwoWayBinding from './components/StateTwoWayBinding'
import ToDoList from './components/ToDoList';
import UseEffect from './components/UseEffect';
import UseEffectReviewAvatar from './components/UseEffectReviewAvatar';
import UseEffectFakeChat from './components/UseEffectFakeChat';
import UseLayoutEffect from './components/UseLayoutEffect';
import UseRef from './components/UseRef';
import HocMemo from './components/HocMemo';
import UseCallback from './components/UseCallback';
import UseMemo from './components/UseMemo';
import UseReducer from './components/UseReducer';
import UseReducerTodo from './components/UseReducerTodo';


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
      {/* {show && <UseEffectReviewAvatar/>} */}
      {/* {show && <UseEffectFakeChat/>} */}
      {/* {show && <UseLayoutEffect />} */}
      {/* {show && <UseRef />} */}
      {/* {show && <HocMemo />} */}
      {/* {show && <UseCallback/>} */}
      {/* {show && <UseMemo/>} */}
      {/* {show&&<UseReducer/>} */}
      {show && <UseReducerTodo/>}
    </Fragment>
  );
}

export default App;