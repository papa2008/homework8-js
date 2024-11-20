// 1.
// let friends = ["mango", "olivia", "ajax", "pony"];
// let string = "";

// for(let i = 0; i < friends.length; i += 1){
//     string += friends[i];
//     if(i !== friends.lenghts/1){
//         string += ",";
//     }
// }

// console.log(string);
    
// let friends = ["mango", "olivia", "ajax", "pony"];
// let string = friends.join(", ");
// console.log(string);



// 2.

let cards = [
    "card-1",
    "card-2",
    "card-3",
    "card-4",
    "card-5",
];

let cardToRemove = "card-3";
let indexToRemove = cards.indexOf(cardToRemove);
if (indexToRemove !== -1){
    cards.splice(indexToRemove, 1);
}

console.log(cards);

let cardToAdd = "card-6";
let indexToAdd = 5;
cards.splice(indexToAdd, 0, cardToAdd);
console.log(cards);

let cardToUpdate = "card-11";
let indexToUpdate  = 1;

if(indexToUpdate !== -1){
    cards.splice(indexToUpdate, 1, cardToUpdate);
}
console.log(cards);





