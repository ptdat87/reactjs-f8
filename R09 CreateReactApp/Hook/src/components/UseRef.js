import { useEffect, useLayoutEffect, useRef, useState } from "react"
// Lưu các giá trị qua một tham chiếu bên ngoài
// Funcion component

// let timeId //Will not error

function UseRef() {
    const [count, setCount] = useState(60)
    // let timeId //Will error
    const timeId = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect();
        console.dir(rect)
    })

    const handleStart = () => {
        timeId.current = setInterval(() => {
            console.log('Interval')
            setCount(prevCount => prevCount - 1)
        }, 1000)
        console.log('Start ', timeId.current)
    }
    const handleStop = () => {
        clearInterval(timeId.current)
        console.log('Stop ', timeId.current)
    }

    console.log(count, prevCount.current)
    return (
        <div style={{ padding: 20 }}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>)
};

export default UseRef;