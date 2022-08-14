
// Generat a rendom number
let randomNumber = Math.floor(Math.random() * 100);

// User input value access
let answer1 = document.querySelector('.guess1');
let answer2 = document.querySelector('.guess2');
let answer3 = document.querySelector('.guess3');

// Guess will substract every wrong answer
let guess =10;

// This array start for a guessnumber
var guessNumber = [];

// create a function 
function guessvalue(){
    let user_input = document.querySelector('#inputNumber').value;

    if (user_input< 1 || user_input>100){
        alert('Please enter a number between 1 and 100');
    }
    else{
        guessNumber.push(user_input);
        guess-=1;
        if (user_input > randomNumber){
            answer1.innerHTML = "Please enter a smaller number";
            answer2.innerHTML = "Number of guess :"+  guess;
            answer3.innerHTML = "Guessed  number are "+guessNumber;
            if(guess ==0){
                document.querySelector('.btn').
                disabled=true;
            }
        }
        else if(user_input < randomNumber){
            answer1.innerHTML = "Please enter a large number";
            answer2.innerHTML = "Number of guess : "+ guess;
            answer3.innerHTML = "Guessed  number are "+ guessNumber;
            if(guess ==0){
                document.querySelector('.btn').
                disabled=true;
            }
           }
           else if(user_input == randomNumber){
            answer1.innerHTML = "Good job guessing number "+ randomNumber;
            if(guess ==0){
                document.querySelector('.btn').
                disabled=true;
            }
           }
    }
}