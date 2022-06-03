import { memo } from "react";


function ContentMemo(props) {
    console.log('render child')
    return (<div>
        <h1>You input value: {props.count}</h1>
    </div>)
};

export default memo(ContentMemo);