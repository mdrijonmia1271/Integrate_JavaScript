function addNumer(num1, num2){
    var sum = 0;
    for(let i=0; i<arguments.length; i++){
        const num = arguments[i];
        console.log(num);
        sum = sum+num;
    }
    return sum ;
}

var result = addNumer(5,10,2,3,4,5);
console.log("The sum is = "+result+".");