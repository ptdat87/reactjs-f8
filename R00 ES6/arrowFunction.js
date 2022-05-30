const logger = log =>
{
    console.log(log);
}

const logger2 = function(log)
{
    console.log(log);
}

//Arrow function
const sum = (a,b) => {
    return a+b
};

const sum2 = (a,b) => 
a
+
b 
console.log(sum2(1,5))

const sum3 = (a,b) =>   
({
    a: a,
    b: b,
    kq: a+b
})
console.log(sum3(1,5))

//sum 4 will return error, because use brace that need keyword "return"
// const sum4 = (a,b) => {
//     a: a,
//     b: b,
//     kq: a+b
// }
// console.log(sum4(1,5))


const course = {
    name: 'javascript basic',
    getName: ()=> ({this: this, name: this.name}) //context - can not show this name, this empty
}
console.log(course.getName())

//END
console.log('end')