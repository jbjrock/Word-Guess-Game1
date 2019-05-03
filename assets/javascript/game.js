// start hangman game! 

// list of different team nicknames for hangman game.
var word = ['cavaliers', 'spartans', 'jayhawks', 'cardinals', 'wildcats', 'tarheels', 'bluedevils', 'buckeyes', 'tigers', 'crimsontide', 'bulldogs', 'gators', 'trojans', 'seminoles', 'hurricanes'];

//Choose word randomly
var randNum = Math.floor(Math.random() * word.length);
var choosenWord = word[randNum];
var rightGuess = [];
var wrongGuess = [];
var underScore = [];
console.log(choosenWord);
//Dom manipulation
domunderScore = document.getElementsByClassName('underScore');
domrighGuess = document.getElementsByClassName('rightGuess');
//Create underscores based on length of word
generateunderScore = () => {
    for (i = 0; i <choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateunderScore());

//Get users guess
document.addEventListener('keypress', (event) => {
    keyword = String.fromCharCode(event.keyCode);
    //if Users guess is right
    if(choosenWord.indexof(keyword) > -1){
       //add to right words array
       rightGuess.push(keyword);
       //replace underscore with right letter
       underScore[choosenWord.indexof(keyword)] = keyword;
underScore[0].innerHTML = underScore.join('');
       //checks to see if user word matches guesses
       if(underScore.join('') == choosenWord){
alert('You Win');
       }
    }

    else {
        wrongGuess.push(keyword);
    }
    

});