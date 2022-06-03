import { memo } from "react";


function ContentUseCallback({onIncrease}) {
    console.log('render child')
    return (<div>
        <button onClick={onIncrease}>Click me</button>
    </div>)
};

export default memo(ContentUseCallback);