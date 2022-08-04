//for loop 0-9
for (let i = 0; i < 10; i++) {
    //console.log(i)
    
}

//for loop 9-0
for (let i = 10 - 1; i >= 0; i--) {
    //console.log(i)
    
}

//print array of fruits
let fruit = ["banana", "orange", "apple", "kiwi"]

for (let i = 0; i < fruit.length; i++) {
    //console.log(fruit[i]);
    
}

//for loop push numbers to array
var numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(i);
   
    
}
//console.log(numbers)

//for loop even numbers
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      // console.log(i)
    }
    
}

//for loop every other fruit
let newFruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (let i = 0; i < newFruit.length; i += 2) {
    //console.log(newFruit[i]);
    
}

let peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations

  //for loop people names
  for (let i = 0; i < peopleArray.length; i++) {
    //console.log(peopleArray[i].name);
    
  }

  //for loop names into array occupations to array

  var namePeople = []
  var occuPeople = []

  for (let i = 0; i < peopleArray.length; i++) {
    namePeople.push(peopleArray[i].name);
     
  }
  //console.log(namePeople)

  //for loop occupations into array
  for (let i = 0; i < peopleArray.length; i++) {
    occuPeople.push(peopleArray[i].occupation);
     
  }
  //console.log(occuPeople)


  var newNames = []
  var newOccupations = []

  //for loop every other name to array
  for (let i = 0; i < peopleArray.length; i += 2) {
    newNames.push(peopleArray[i].name);
    
    
}
//console.log(newNames);

//for loop every other occupation
for (let i = 1; i < peopleArray.length; i += 2) {
    newOccupations.push(peopleArray[i].occupation);
    
    
}
//console.log(newOccupations);