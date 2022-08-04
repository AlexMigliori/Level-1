var fizzbuzz = [];

for (let i = 0; i < 100; i++) {
    if (i%3===0&&i%5===0) {
        fizzbuzz.push("FizzBuzz")
    }else if(i%3===0){
        fizzbuzz.push("Fizz");
    }else if (i%5===0){
        fizzbuzz.push("Buzz");
    }else{
        fizzbuzz.push(String(i));
    }
}

console.log(fizzbuzz)