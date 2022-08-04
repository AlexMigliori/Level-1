//largest num array

const largeNum = array => {
    let largest = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]
        }
        
    }
    console.log(largest)
}

largeNum([3, 5, 2, 8, 1]);

// function that takes arrays of words and characters and returns each word

const lettersWithStrings = (arry, character) =>{
    let result = [];
    for (let i = 0; i < arry.length; i++) {
        if (arry[i].includes (character)) {
            result.push(arry[i])
        }
        
    }
    console.log(result)
}

lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") 

// write a function that asks if num1 and num2 is divisible by num2

const divisible = (num1, num2) => {
    console.log(num1%num2 === 0);
}

divisible(4, 2)
divisible(15, 4)
divisible(9, 3)