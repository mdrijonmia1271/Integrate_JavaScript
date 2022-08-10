function callback(name, age, task){
    console.log("Hello ", name);
    console.log("Your age = ",age);
    task();
}
function washHand(){
    console.log('wash hands bofore eating');
}
function takeShower(){
    console.log('take Shower bofore eating');
}
callback('rijon', 23, washHand);
callback('mohosin', 56, takeShower);