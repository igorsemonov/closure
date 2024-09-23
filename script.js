
function getSum() {
    let n = 0;
    return function(num) {
        n += num;
        return n;
    }
};
 let sumFunc = getSum();

console.log(sumFunc(5));
console.log(sumFunc(10));
console.log(sumFunc(15));
console.log(sumFunc(20));
console.log(sumFunc(5));