import { useEffect, useState } from "react";

function Content(){
    const [title,setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        //document.title = title;
        console.log('step2.Mounted')

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts =>{
            setPosts(posts);
        })

    },[])

    
    return (<div>
        <input
        value={title}
        onChange ={(e)=>setTitle(e.target.value)}
        />
        {console.log('step1.render')}
    </div>)
};

export default Content;