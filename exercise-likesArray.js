/* Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the examples:


[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 */

function namesListGenerator() {
    var names = [];
    var input = "";
    while (input != "e") {
        input = prompt("Give a name or press e for exit:");
        names.push(input);

    }
    names.pop();
    console.log(names);
    console.log(names.length);
    if (names.length == 0) {
        console.log("No one likes this")
    }
    else if (names.length == 1) {
        console.log(`${names[0]} likes this`)
    }
    else if (names.length == 2) {
        console.log(`${names[0]} and ${names[1]} like this`)
    }
    else if (names.length == 3) {
        console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`)
    }
    else {
        console.log(`${names[0]} and ${names[1]} and ${names.length - 2} others like this`)
    }

}

namesListGenerator();