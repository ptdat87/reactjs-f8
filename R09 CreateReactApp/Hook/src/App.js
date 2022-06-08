import "./App.css";
import { Fragment, useState } from "react";
import StateBasic from "./components/StateBasic";
import StateGift from "./components/StateGift";
import StateTwoWayBinding from "./components/StateTwoWayBinding";
import ToDoList from "./components/ToDoList";
import UseEffect from "./components/UseEffect";
import UseEffectReviewAvatar from "./components/UseEffectReviewAvatar";
import UseEffectFakeChat from "./components/UseEffectFakeChat";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseRef from "./components/UseRef";
import HocMemo from "./components/HocMemo";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import UseReducerTodo from "./components/UseReducerTodo";
import UseContext from "./components/UseContext/useContext";
import { ThemeProvider } from "./components/UseContext/ThemeContext";
import UseImperativeHandle from "./videos/UseImperativeHandle";
import AppRouter from "./components/Router/AppRouter";
import AppCssModule from "./components/CSSModule/AppCssModule";

function App() {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      {/* <StateBasic/> */}
      {/* <StateGift/> */}
      {/* <StateTwoWayBinding/> */}
      {/* <ToDoList/> */}
      {/* <UseEffect/> */}
      <button onClick={() => setShow(!show)}>Toggle</button>
      {/* {show && <UseEffectReviewAvatar/>} */}
      {/* {show && <UseEffectFakeChat/>} */}
      {/* {show && <UseLayoutEffect />} */}
      {/* {show && <UseRef />} */}
      {/* {show && <HocMemo />} */}
      {/* {show && <UseCallback/>} */}
      {/* {show && <UseMemo/>} */}
      {/* {show&&<UseReducer/>} */}
      {/* {show && <UseReducerTodo />} */}
      {/* {show && <ThemeProvider><UseContext /></ThemeProvider>} */}
      {/* {show && <UseImperativeHandle />} */}
      {/* {show && <AppRouter />} */}
      {show && <AppCssModule />}
    </Fragment>
  );
}

export default App;
