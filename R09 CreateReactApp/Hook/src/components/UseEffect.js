import { useState } from 'react'
import Content from './Content';
import ContentTime from './ContentTimer';

function UseEffect() {
  const [show, setShow] = useState(false)
  //UI
  return (
    <div>
      <button onClick={() => setShow(!show)}>toggle</button>
      {/* {show && <Content />} */}
      {show && <ContentTime/>}
    </div>

  );
}

export default UseEffect;
