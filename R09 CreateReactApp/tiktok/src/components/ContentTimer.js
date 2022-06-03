import { useEffect, useState } from "react";


function ContentTime() {
    const [countDown, setCountDown] = useState(180)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown(prev => prev - 1)
            console.log('countDown')
        }, 1000)

        return() => clearInterval(timerId)
    }, [])



    return (<div>
        <h1>{countDown}</h1>
    </div>)
};

export default ContentTime;