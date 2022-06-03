import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Fake event comments
function emitComment(id){
  setInterval(()=> {
    const content =`Comment content ${ Math.random()} of lession ${id}`;
    // console.log(content);
    window.dispatchEvent(
      new CustomEvent(`lession-${id}`, {
        detail: content
      })
    )
  },2000)
}
emitComment(1)
emitComment(2)
emitComment(3)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <App />
  /* </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
