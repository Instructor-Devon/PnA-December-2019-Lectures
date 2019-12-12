// find sum of array
// number: 5 => 5+4+3+2+1
function sigma(number) {
    if(number === 1) {
        return 1;
    }
    return number + sigma(number-1);
}

var result = sigma(5);
console.log(result);