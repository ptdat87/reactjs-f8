import {useState } from "react"
import ContentMemo from "./ContentMemo"


function HocMemo() {
    const [count, setCount] = useState(0)
    const increase = ()=> {
        setCount(count + 1)
    }

    return (
        <div style={{padding: 20}}>
            <ContentMemo count={1}></ContentMemo>
            <h1>{count}</h1>
            <button onClick={increase}> Click increase</button>
        </div>
    )
};

export default HocMemo;