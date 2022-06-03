import { useEffect, useState } from "react";

const lessions = [
    { id: 1, name: "What is react and why you should use it?" },
    { id: 2, name: "What is SPA/MPA" },
    { id: 3, name: "Arround function" }
]

function UseEffectFakeChat() {
    const [lessionId, setLessionId] = useState(1)
    const [detail, setDetail] = useState('')

    const handleComment = (e) => {
        setDetail(e.detail)
        // console.log(e)
    }

    useEffect(() => {
        window.addEventListener(`lession-${lessionId}`, handleComment)

        return () => {
            window.removeEventListener(`lession-${lessionId}`, handleComment)
        }
    }, [lessionId])

    return (
        <div>
            <ul>
                {lessions.map(lession => (
                    <li
                        key={lession.id}
                        style={{
                            color: lessionId === lession.id ?
                                'red' : '#333'
                        }}
                        onClick={() => setLessionId(lession.id)}
                    >
                        {lession.name}
                    </li>
                ))}
            </ul>

            <h2>{detail}</h2>
        </div>
    )
};

export default UseEffectFakeChat;