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

// const numNeighbors = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbors === 1) {
//     console.log('Only 1 border')
// }
// else if (numNeighbors > 1) {
//     console.log('More than 1 border')
// }
// else if (numNeighbors === 0) {
//     console.log('No borders')
// };

if (language === "English" && population < 50e6 && isIsland === false) {
    console.log("You should live in Greece!")
}
else { console.log("Greece does not meet your criteria...") }

switch (language) {
    case 'mandarin':
        console.log('MOST number of native speakers!')
        break;

    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;

    case 'english':
        console.log('3rd place')
        break;

    case 'hindi':
        console.log('Number 4')
        break;

    case 'arabic':
        console.log('5th most spoken language')
        break;

    default: console.log('Great language too!');
};


console.log(`Greece's population is ${population > avrPopulation ? "above" : "below"} average.`)

function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million population and it's capital is ${capitalCity}`
    return description
};

console.log(describeCountry('Greece', 10, "Athens"));

console.log(describeCountry("Portugal", 11, "Lisbon"));

console.log(describeCountry("Finland", 6, "Helsinki"));
