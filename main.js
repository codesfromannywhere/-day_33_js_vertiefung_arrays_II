console.log("läuft");

// lev1_1: forEach()

// const drinksList = document.querySelector('p')
// const myDrinks = ["Apfelsaft",  "Coca-Cola", "Fanta" , "Orangensaft", "Pepsi", "RedBull", "Sprite", "Traubensaft"]

// myDrinks.forEach((item) => {
//     drinksList.innerHTML += `${item}`+ "<br>"
//     console.log(item);
// });



// lev1_2: map()

// let getraenke = [
//     "Coca-Cola",
//     "Apfelsaft",
//     "Pepsi",
//     "Traubensaft",
//     "Sprite",
//     "Orangensaft",
//     "Red Bull Energy Drink",
//     "Fanta"]

// console.log(getraenke);


// const upperDrinks = getraenke.map((drink) => {
//     // console.log(drink.toUpperCase());
//     return drink.toUpperCase();
// })

// console.log(upperDrinks);



// lev1_3: map()

const multiply = () =>  { 

let array = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5,
    30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

let newNum = array.map((num) => num * 2)

let sortNum = newNum.sort((a, b) => a - b);
return sortNum;
}

console.log(multiply());



// lev1_4: map()

const temperature = () => {
    let tempF = [0, 32, 45, 50, 75, 80, 99, 120];
    // console.log(tempF);
    let tempC = tempF.map((temp) => ((temp-32)/1.8000).toFixed())
    return tempC
}
console.log(temperature());



// lev1_5: map()


let checkNum = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31,100, 6, 5,30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78]; 
console.log(checkNum);

let checkIt = checkNum.map((num2) => {
    if (num2 % 3 == 0) {
        return num2 +100;
    } else {
        return num2
    } 
});

console.log(checkIt);




