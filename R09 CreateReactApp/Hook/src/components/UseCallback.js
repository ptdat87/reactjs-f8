import {useCallback, useState } from "react"
import ContentUseCallback from "./ContentUseCallback"


function UseCallback() {
    const [count, setCount] = useState(0)
    const handleIncrease = useCallback (()=> {
        setCount(prevCount => prevCount + 1)
    },[])
  

    return (
        <div style={{padding: 20}}>
            <ContentUseCallback onIncrease={handleIncrease}></ContentUseCallback>
            <h1>{count}</h1>
        </div>
    )
};

export default UseCallback;