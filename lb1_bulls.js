const readlineSync = require('readline-sync');
const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

const randomInteger = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

const generateSequenceFromArray = (array = [], limit) => {
    const sequance = [];
  
    while (limit > sequance.length) {
      const index = randomInteger(0, array.length - 1);
      const removed = array.splice(index, 1)[0];
      sequance.push(removed);
    }
  
    return sequance;
  };

const secret = generateSequenceFromArray(numbers, 4);
console.log('Guess the number');
let attempts = 0;

const getBullsAndCows = (secret = [], guess = []) => {
    const secretEntries = Object.entries(secret);
    let bulls = 0;
    let cows = 0;
  
    for (const [indexOfSecret, element] of secretEntries) {
      const indexOfGuess = guess.indexOf(element);
      const isBull = indexOfGuess == indexOfSecret;
      const isCows = indexOfGuess !== -1 && !isBull;
  
      bulls += isBull ? 1 : 0;
      cows += isCows ? 1 : 0;
    }
  
    return { bulls, cows };
  };

  const limit = 4;

  while (true) {
    const answer = readlineSync.question('Attempt ');
    const result = answer.split('').map(Number);

    const { bulls, cows } = getBullsAndCows(secret, result);

    console.log(`Bulls: ${bulls}; Cows: ${cows}`);

    attempts += 1;

    if (bulls === limit) {
      console.log(`Right sequence! Attempts: ${attempts}`);
      break;
    }
  } 
