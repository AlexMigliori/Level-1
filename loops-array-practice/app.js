/*var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for (let i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === 'computer'){
        console.log(officeItems[i]);
    }
}
*/
var seeMovie = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  
  for (let i = 0; i < seeMovie.length; i++) {
    if (seeMovie[i].age >= 18) {
        console.log(seeMovie[i].name + " is old enough!")
    } else{
        console.log(seeMovie[i].name + " is not old enough")
    }
    
  }