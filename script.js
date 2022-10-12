const country = 'Greece';
const continent = 'Europe'
let population = 10e6;
const isIsland = false;
const language = 'Greek';
console.log(`Country: ${country}`);
console.log(`Continent: ${continent}`);
console.log(`Your country is an island: ${isIsland}`);
console.log(`Language: ${language}`);
console.log(`${country} is in ${continent} and its ${population} people speak ${language}.`);
const avrPopulation = 33e6;
if (population > avrPopulation) {
    console.log("Greece's population is above average")
}
else { console.log(`Greece's population is ${avrPopulation - population} people above average`) }

const numNeighbors = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbors === 1) {
    console.log('Only 1 border')
}
else if (numNeighbors > 1) {
    console.log('More than 1 border')
}
else if (numNeighbors === 0) {
    console.log('No borders')
};