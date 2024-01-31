import rs from "readline-sync";

let guess = "";
let randomNumbersArr = [];
let bulls = 0;
let cows = 0;
let count = 0;
let countGames = 1;
let oneMoreGame;
let chooseLevel;
let attempts = 0;
const noMatchesArr = ["You have no matches", "Nope...any match", "Sorry, any match"];
//start
const askName = rs.question(`Hi! What is your name? \n`) || "Player";
console.log(`${askName}, let's play in "Bulls  and Cows"! Try to guess my secret code, which consists of four unique numbers`);
// create array with numbers
while (randomNumbersArr.length !== 4) {
  let randomDigit = Math.floor(Math.random() * 9) + 1;
  if (!randomNumbersArr.includes(randomDigit)) {
    randomNumbersArr.push(randomDigit);
  }
}
let randomNumberStr = randomNumbersArr.join("");
// console.log(randomNumbersArr);
//choose a level
function chooseTheLevel() {
  chooseLevel = +rs.question(
    `Please choose a level: if you want to play on hard level (certain numbers of attempts), press 1. If you want to play on easy level (unlimited number of attempts), press 2: \n`
  );
  do {
    if (chooseLevel === 1) {
      count = +rs.question(`Please enter the number of attempts: `);
      doTheGame();
    } else if (chooseLevel === 2) {
      doTheGame();
    } else {
      chooseLevel = +rs.question(`Invalid input!
      Please choose a level: if you want to play on hard level (certain numbers of attempts), press 1. If you want to play on easy level (unlimited number of attempts), press 2: \n`);
    }
  } while (chooseLevel !== 1 && chooseLevel !== 2);
}
chooseTheLevel();
//function doTheGame
function doTheGame() {
  do {
    guess = rs.question("Please, enter your numbers, type 0 to quit \n");
    if (guess==="0"){
      break;
    }
    if (isNaN(guess) || guess.length !== 4) {
      do {
        guess = rs.question(`Something wrong. You must enter four digits: \n`);
      } while (isNaN(guess) || guess.length !== 4);
    }
    for (let i = 0; i < guess.length; i++) {
      if (i !== guess.indexOf(guess[i])) {
        do {
          guess = rs.question(`Oops... your digits should be unique. Try again: \n`);
        } while (i !== guess.indexOf(guess[i]));
      }
    }
    if (chooseLevel === 2) {
      attempts++;
      count++
      findMatchNoLimits(randomNumberStr, guess);
    } else if (chooseLevel === 1) {
      attempts++;
      count--;
      findMatch(randomNumberStr, guess);
    }
  } while (guess !== randomNumberStr && count > 0);
  if (guess === randomNumberStr) {
    console.log(`Congratulation! You won! `);
  } else {
    console.log(`Unfortunately, you didn't succeed. Better luck next time!`);
  }
  anotherGame();
}
//function findMatch
function findMatch(randomNumberStr, guess) {
  bulls = 0;
  cows = 0;
  // countGames++;
  let random = Math.floor(Math.random() * noMatchesArr.length);
  for (let i = 0; i < 4; i++) {
    if (randomNumberStr.charAt(i) === guess.charAt(i)) {
      bulls++;
    } else if (guess.includes(randomNumberStr.charAt(i))) {
      cows++;
    }
  }
  if (bulls > 0 || cows > 0) {
    console.log(`You have ${cows} cows and ${bulls} bulls. You have ${count} chance(s) left`);
  } else {
    console.log(`${noMatchesArr[random]}. You have ${count} chance(s) left`);
  }
}
// function findMatchNoLimits
function findMatchNoLimits(randomNumberStr, guess) {
  bulls = 0;
  cows = 0;
  // countGames++;
  let random = Math.floor(Math.random() * noMatchesArr.length);
  for (let i = 0; i < 4; i++) {
    if (randomNumberStr.charAt(i) === guess.charAt(i)) {
      bulls++;
    } else if (guess.includes(randomNumberStr.charAt(i))) {
      cows++;
    }
  }
  if (bulls > 0 || cows > 0) {
    console.log(`You have ${cows} cows and ${bulls} bulls.`);
  } else {
    console.log(`${noMatchesArr[random]}.`);
  }
}


function anotherGame() {
  do {
    oneMoreGame = rs.question(`Hey, ${askName}, do you want one more game?(y/n): \n`);
    if (oneMoreGame === "y") {
      countGames++;
      chooseTheLevel();
    } else if (oneMoreGame === "n") {
      console.log(`Thank you for the game! You played ${countGames} times and you had ${attempts} attempts`);
    } else {
      console.log(`Please enter "y" to continue game or "n" - to quit`);
      anotherGame();
    }
  } while (oneMoreGame !== "n");
}
