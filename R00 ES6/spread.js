var array1 = ['Javascript', 'PHP', 'Ruby'];
var array2 = ['ReactJS', 'Angular'];
var array3 = [...array2, ...array1];
console.log(array3)

//2
var object1 = {
    name: 'javascript',
    author: 'A1'
}
var object2 = {
    price: 2000,
    author: 'A2' //Lastest key will be used (override)
}
var object3 = {
    ...object1,
    ...object2
}
console.log(object3)

//3
var array = ['javascript', 'react', 'php']
function logger(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log('course', rest[i])
    }
}
logger(...array);
logger(array);