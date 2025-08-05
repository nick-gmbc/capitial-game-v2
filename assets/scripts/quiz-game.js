let capitals = new Array(10);
capitals[0] = "London";
capitals[1] = "Paris";
capitals[2] = "Berlin";
capitals[3] = "Riga";
capitals[4] = "Prague";
capitals[5] = "Madrid";
capitals[6] = "Lisbon";
capitals[7] = "Budapest";
capitals[8] = "Moscow";
capitals[9] = "Brussels";

let countries = new Array(10);
countries[0] = "UK";
countries[1] = "France";
countries[2] = "Germany";
countries[3] = "Latvia";
countries[4] = "Czech Republic";
countries[5] = "Spain";
countries[6] = "Portugal";
countries[7] = "Hungary";
countries[8] = "Russia";
countries[9] = "Belgium";

let distractors = capitals.slice();
distractors.push("Oslo");
distractors.push("Stockholm");
distractors.push("Tallin");
distractors.push("Warsaw");
distractors.push("Copenhegen");

let usedCapitals = [];

function randomBetween(upper) {
    return Math.trunc(Math.random() * (upper + 1));
}

function generateQuestionAndAnswers() {
    // Returns question (Country), answer and distractors
}

function generateCountryAndCapital() {
    // Returns country and correct capital
    // Deletes capital and country so they are not used again
    let countryNumber = randomBetween(countries.length - 1);
    let country = countries[countryNumber];
    let capital = capitals[countryNumber];
    console.log(country, capital);
}

function generateDistractors(correctCapital) {
    // Returns three cities that are not the correct capital
}