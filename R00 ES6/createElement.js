const h1 = document.querySelector('#heading');
console.log(h1);
console.dir(h1);
//Create new element
const root =  document.getElementById('root');
const h2 =  document.createElement('h2');
h2.innerText = 'This is javasript';
h2.id = 'h2';
h2.className = 'class2 text';
h2.style = 'color: red; font-size: 15px';
Object.assign(
    h2.style,{
        color: 'green',
        backgroundColor : '#333'
    }
)

root.appendChild(h2);