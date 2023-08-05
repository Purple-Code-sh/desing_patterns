function sum(a, b){
    return console.log(a+b);
}

const fsum = sum;

let res = fsum(2,5)

function operation(fn,a,b){
    return fn(a,b)
}

operation(sum,3,8);

const someArray = [1,2,3,4,8];
const total = someArray.reduce((def,actual)=>{
    return def + actual
},0)
console.log("someArray total:", total);

