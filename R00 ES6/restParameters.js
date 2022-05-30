//1
function logger(a,b,...params){
    console.log(params);
}

logger(1,2,3,4,5);

//2
function logger({name, price,...rest}){
    console.log(name);
    console.log(price);
    console.log(rest);
}

logger({
    name: 'javascript',
    price: 1000,
    description: 'javascript course'
});

//3
function logger([name, price,...rest]){
    console.log(name);
    console.log(price);
    console.log(rest);
}

logger([1,2,3,4,5,6,7,8,9]);