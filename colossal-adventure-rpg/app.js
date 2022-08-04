/*const name = readline.question("Greetings! Welcome to 1985, Can you survive till the end? Let's get started! What is your name? ");

const start = readline.keyIn( name + " wakes up in the woods at night, they need to get out. Let's start by (w)alking: ")

let player = {
    hp: 100, 
    alive: true,
    backPack: []
  }

function mobs (name, hp, item){
    this.name = name
    this.hp = hp
    this.ran = true
    this.item = item
    this.defaultHP = hp
}

let zombie = new mobs ("zombie", 50, "stick");
let spider = new mobs ("spider", 10, "shoes");
let wolf = new mobs ("wolf", 100, "flashlight");


while (player.alive) {

  let options = ["(w)alk", "(q)uit", "(p)rint"]
  options.forEach(a => console.log(a))
  let input = readline.keyIn(name + " has " +player.hp + "hp. What should we do first? ")

  if (input === "p"){
      console.log(player)
      readline.question("Press enter to return to your adventure!")
  }
  if (input === "w") walk(player)

  if (input === "q") quit(player)


  function walk(randomMob = Math.floor(Math.random() * 3)) {
      let randomNum = Math.floor(Math.random() * 3)
      console.log(randomNum)
  
  if (randomNum === 0) {
      readline.question("You walk forward and the cost is clear, we are one step closer. Press enter to continue")    
    }
    if (randomNum === 1) {
        readline.question(name +" steps forward and breaks a stick, causing them to squeel, hopefully nothing heard that. Press enter to continue")    
    }
    if (randomNum === 2) {
        
      let randomMob = Math.floor(Math.random() *3)
      console.log(randomMob)

      function fightMob(randomMob){
        if(randomMob === 0){
            randomMob = fight(zombie, player, 40, 10, randomMob);
        }
        if(randomMob === 1){
            randomMob = fight(spider, player, 8, 2, randomMob);
        }
        if(randomMob === 2){
            randomMob = fight(wolf, player, 80, 20, randomMob);
        }
        return randomMob !== 3
      }
      if (!fightMob(randomMob)) {
          if (!fightMob(0)){
            readline.question("Congratulations" +name+ "!  ")
            player.alive = false 
          }
          }
    }
    if (player.hp <= 0){
        endAdv (player)
    }
  }
}

function fightNum (badMob, goodGuy, high, low){

    let options = ["(a)ttack", "(q)uit", "(r)un away"]
    options.forEach(a => console.log(a))
    let input = readline.keyIn("What would you like to do?")

    if (input === "a") {
        console.log("a")
        attackDmg (high, low, badMob)
    }
    if (input === "r") {
        let runAway = Math.floor(Math.random() *2);
    }
    if (runAway === 0) {
        badMob.ran = false
        readline.question(name+ " managed to run away, Enter to continue")
    }
    if (runAway === 1) {
        readline.question(name+ " did not escape, Enter to continue")
        
    }
}

if (input === "q") {
    quit(goodGuy, badMob)
    
}

function attackDmg (high, low, attacked){
    let attNum = Math.floor(Math.random() * (high - low + 1)) + low;
    attacked.hp = attacked.hp - attNum
}

function deadMob (badMob, goodGuy){
    if (badMob.hp <= 0) {
        badMob.alive = false
        goodGuy.hp += badMob.defaultHP
        readline.question(name+ " killed" +badMob.name+ "Nice! Enter to continue")
        goodGuy.backPack.push(badMob.item)
    }
    if (goodGuy.hp <= 0) {
        badMob.alive = false
        finish
        
    }
}

function finish (goodGuy){
    readline.question(name+ " is dead, enter to end game")
    goodGuy.alive = false
}

function quit (goodGuy, badMob){
    goodGuy.alive = false
    badMob.ran = false
    readline.question("You have left the game, enter to continue")
}

function fight (badMob, player, badHighNum, badLowNum, nextNum){
    if (badMob.alive === false) {
        nextNum++
        
    }
    if (badMob.alive === true) {
        badMob.ran = true
        readline.question("Its a " +badMob.name+ "Enter to continue")

        while (badMob.alive && badMob.ran) {
            console.log(name+ "has " +player.hp+  "hp")
            console.log("The " +badMob.name+ "has " +badMob.hp+ "hp")


            fightNum (badMob, player, 80, 20)

            if (badMob.ran) {
                attackDmg (badHighNum, badLowNum, player)
            }

            finish(badMob, player)
        }
        
    }
    return nextNum
}
*/

  const readline = require("readline-sync");

  const name = readline.question("Greetings! Welcome to 1985, Can you survive till the end? Let's get started! What is your name? ");
  console.log("HEY " + name + " to walk use W")

  //player
  let player = {
  hp: 100, 
  alive: true,
  backPack: []
  }
  function mobs (name, hp, item) {
  this.hp = hp
  this.originalhp = hp
  this.alive = true
  this.ran = true
  this.name = name
  this.item = item
  }

  let zombie = new mobs ("zombie", 50, "stick");
  let spider = new mobs ("spider", 10, "shoes");
  let wolf = new mobs ("wolf", 100, "flashlight");

  //main function 
  while (player.alive) { // name
    
  let actions = ['[w]alk', '[p]rint', '[q]uit']
  actions.forEach(a=>console.log(a))
  let input = readline.keyIn (name + " has " +player.hp + "hp. What should we do first?")

  // const addhp = ()

  if (input === 'w') walk(player)
  if (input === 'p') {
    console.log(player)
    readline.question('enter to go back')
  }
  if (input === 'q') quit(player, NaN)


  function walk(randomMob = Math.floor(Math.random() * 3)) {
    let randomNum = Math.floor(Math.random() * 4)
    console.log(randomNum)
    // console.log(player.backPack)

  if (randomNum === 0) {//walking
      readline.question("You walk forward and the cost is clear, we are one step closer. Press enter to continue")
    }
    
    if (randomNum === 1) {//walking
      readline.question(name +" steps forward and breaks a stick, causing them to squeal, hopefully nothing heard that. Press enter to continue")
    }
    
    if (randomNum === 2) {//walking
      readline.question("Your shoe fell off "+name+". enter to continue")
    }
    
    if (randomNum === 3) {//walking 
      
      let randomMob = Math.floor(Math.random() * 3) 
      console.log(randomMob)

      function enemyBattles(randomMob) {
        //stegosaurus
        if (randomMob === 0) {
          randomMob = encounter(zombie, player, 80, 20, randomMob);
        }

        //skeleton
        if (randomMob === 1) {
          randomMob = encounter(wolf, player, 41, 19, randomMob)
        } 

        //endermite
        if (randomMob === 2) {
          randomMob = encounter(spider, player, 20, 1, randomMob)
        }

      
        return randomMob !== 3
      }
      if (!enemyBattles(randomMob)) {
        if (!enemyBattles(0)) {
        readline.question("Congratulations " +name+ "! The game is over, you win. ")
        player.alive = false
      }
      }

      
    }
    if (player.hp <= 0) {
        endGame (player)
    } 
  }
  } 


  //game functions 
  function fight (badMob,goodGuy, high, low) {

  let actions = ['[a]ttak', '[r]un away','[q]uit']
  actions.forEach(a=>console.log(a))
  let input = readline.keyIn("What would you like to do?")


  if (input === 'a') {
    console.log('a')
    attackDmg (high ,low ,badMob)
  }

  if (input === 'r') {
    //badMob.ran = false
    let runAway = Math.floor(Math.random() * 2);
    
    if (runAway === 0) {
      badMob.ran = false
      readline.question(name+ " managed to run away, Enter to continue")
    }
    if (runAway === 1) {
      readline.question(name+ " did not escape, Enter to continue")
    }
  }

  if (input === 'q') {
    quit (goodGuy, badMob)
  }
  }



  function attackDmg (high, low, attacked) {
  let attakNum = Math.floor(Math.random() * (high - low + 1) ) + low;
  attacked.hp = attacked.hp - attakNum
  // player.hp = 12
  }

  function youDead (badMob, goodGuy) {
  if (badMob.hp <= 0) {
    badMob.alive = false
    goodGuy.hp += badMob.originalhp
    readline.question(name+ " killed " +badMob.name+ " Nice! Enter to continue")
    goodGuy.backPack.push(badMob.item)
  }
  if (goodGuy.hp <= 0) { 
    badMob.alive = false
    endGame
  }
  }

  function endGame(goodGuy) {
  readline.question(name+ " is dead, enter to end game")
  goodGuy.alive = false
  }

  function quit (goodGuy, badMob) {
  goodGuy.alive = false
  badMob.ran = false
  readline.question(name+" you have left the game. enter to contune")
  }

  function encounter(badMob, player, badHighNum, badLowNum, nextNum) {
  // console.log(badMob)
  if (badMob.alive === false) {
    nextNum++
  }

  if (badMob.alive === true) {

    badMob.ran = true
    
    readline.question("Its a " +badMob.name+ ", Enter to continue")
    
    
    while (badMob.alive && badMob.ran) {
      console.log(name+ " has " +player.hp+  "hp")
      console.log("The " +badMob.name+ " has " +badMob.hp+ "hp")
      // startFight(badMob, player)

      fight (badMob ,player, 70, 20)
      // console.log(badMob.hp)
      if (badMob.ran){
        attackDmg (badHighNum, badLowNum, player)
      }
      // console.log(player.hp)
      youDead (badMob, player)
    }
  }
  return nextNum
  }
