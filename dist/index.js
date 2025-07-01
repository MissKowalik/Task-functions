"use strict";
// 1. Skapa en enkel funktion
// Skapa en namngiven funktion sayHello som:
// Inte tar några parametrar
// Skriver ut Hej från min funktion! till konsolen
function sayHello() {
    console.log("Hej från min funktion!");
}
sayHello();
// 2. Funktion med parametrar
// Skapa en funktion calculateRectangleArea som:
// Tar två parametrar: width och height av typen number
// Beräknar arean och skriver ut den till konsolen
function calculateRectangleArea(width, height) {
    const area = width * height;
    console.log(area);
}
calculateRectangleArea(8, 5);
// or as arrow function:
const calculateRectangleArea2 = (width, height) => width * height;
console.log(calculateRectangleArea2(3, 6));
// 3. Funktion med returvärde
// Skriv en funktion getGreeting som:
// Tar en string-parameter name
// Returnerar en hälsningssträng, t.ex. "Välkommen, [namn]!"
function getGreeting(name) {
    return `Välkommen ${name}!`;
}
console.log(getGreeting("Linda"));
// 4. Arrow-funktion
// Skriv en arrow-funktion doubleNumber som:
// Tar en parameter av typen number
// Returnerar det dubbla värdet
const doubleNumber = (num) => num * 2;
console.log(doubleNumber(5));
// 5. Använd inbyggd funktion
// Använd Math.round() för att:
// Avrunda ett decimaltal till närmaste heltal
// Skriva ut resultatet
function roundNumber(num) {
    return Math.round(num);
}
console.log(roundNumber(3.34));
// 6. Kombinera koncept
// Skriv en funktion processNumbers som:
// Tar en array av number som parameter
// Loopar igenom arrayen och skriver:
// Jämnt tal: [tal] om det är jämnt
// Ojämnt tal: [tal] om det är ojämnt
function processNumbers(numArray) {
    for (const num of numArray) {
        if (num % 2 === 0) {
            console.log(`Jämnt tal: ${num}`);
        }
        else {
            console.log(`Ojämnt tal: ${num}`);
        }
    }
}
processNumbers([5, 7, 6, 3, 2]);
//# sourceMappingURL=index.js.map