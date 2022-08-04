const readline = require("readline-sync");
const actionTaken = [];
let answer = '';
let name = '';
let success = false;

    name = readline.question("What is your name? ");
function getInput(){
    answer = readline.keyIn("do you want to (p)ut hand in hole, (f)ind the key, or (o)pen the door? ");
}
function  decideConsequences(){
    let endAction = getEndActionArr();
    actionTaken.push(answer);

    if(answer == 'p'){
        finish();
    }else if(answer == 'o'){
        if(endAction == 'f'){
            console.log(name +' is free!');
            success = true;
            process.exit(0);
        }else if(endAction == 'o' || endAction == false){
            console.log(' The door appears to be locked.');
        }
    }else if(answer == 'f'){
        if(endAction == 'o'|| endAction == false){
            console.log(name + ' has found a key, perhaps it opens the locked door.');
        }else if(endAction == 'f'){
            console.log(name + ' has found another key');
        }else if(endAction == false){
            console.log(name + ' has found the key');
        }
    }
    
}

function getEndActionArr(){
    let newArr = [...actionTaken].reverse()[0];
    if(newArr == undefined){
        return false;
    }else{
        return newArr;
    }
}

function finish(){
    console.log(name +' has died, try again');
    process.exit(0);
}

while(success == false){
    getInput();
    decideConsequences();
}
