var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    let result = []
    for (i = 0; i < people.length; i++) {
        result.push(people[i] + ':')

        for (j = 0; j < alphabet.length; j++) {
            var newAlpha = alphabet.split("")
            let upperAlpha = newAlpha.map(e => {
                return e.toUpperCase();
            });
            result.push(upperAlpha[j])
            
        }
    }
    return result
    
}


console.log(forception(people, alphabet))


