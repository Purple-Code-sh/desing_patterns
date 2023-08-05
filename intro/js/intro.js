function sum(a, b){
    return console.log(a+b);
}

const fsum = sum;

let res = fsum(2,5)

function operation(fn,a,b){
    return fn(a,b)
}

operation(sum,3,8);