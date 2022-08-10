
function evenAndOdd(names){
    var all_arrry = [];
    for(var i = 0; i <names.length; i++){
        var element = names[i];
        if(element%2 == 0 ){
           console.log(element);
        }
        else{
            console.log(element);
        }
        all_arrry.push(element);
    }
    return all_arrry;
}
var nam = [12, 14, 6, 3, 5, 7, 9, 11,];
var result =  evenAndOdd(nam);
console.log(result);