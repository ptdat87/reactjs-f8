import { useEffect, useLayoutEffect, useState } from "react";

// useEffect (use default)
// //1.Update state
// 2.Update DOM(mutated)
// 3.Render UI again
// 4.Call "cleanup function" if deps is changed 
// 5.Call useEffect callback 

// useLayoutEffect (only need)
// //1.Update state
// 2.Update DOM(mutated)
// 3.Call "cleanup function" if deps is changed (sync)
// 4.Call useEffect callback (sync)
// 5.Render UI again


function UseLayoutEffect() {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     if(count>3)
    //     setCount(0)
    // },[count])

    useLayoutEffect(() => {
        if(count>3)
        setCount(0)
    },[count])

    const handleRun = () =>{
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>)
};

export default UseLayoutEffect;