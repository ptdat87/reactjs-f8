//1. with array
var array = ['javascript', 'react', 'angular'];
var [a, , c, d] = array;
console.log(a, 'b is ignore', c, d)

//2.With object
console.log('2.With object')
var course = {
    name: 'javascript',
    price: 1000,
    image: 'iamge-url',
    children: {
        name: 'css'
    }
}

var {name: parentName, children: {name: childName},description = 'default description',... rest} = course;
console.log(parentName)
console.log(childName)
console.log(description)
console.log(rest)