let Word = require("./Word");
let inquirer = require("inquirer");
let theWord, numLeft;
let wordList = ["emphatically", "covetous", "palpable", "intimation", "indignant", "derive", "impropriety", "homage", "destitute", "facetious", "proffer", "tacitly", "melancholy", "inexplicable", "incredulous", "waggish", "specter", "infernal", "deference", "indict", "susceptible", "forbearance", "incoherent", "repose", "resolution", "recumbent", "fluctuate", "intention", "conducive surmount", "retentive", "despondent", "laden", "expend", "condescension", "terrestrial", "tumult", "deft", "corroborate render", "avarice", "displace", "relentless", "comely", "subside"];

let setWord = function(){
     console.log("Vocabulary taken from Charles Dickens 'A Christmas Carol'")
     let ind = Math.floor(Math.random()*wordList.length);
     theWord = new Word(wordList[ind]);
     numLeft = 4
     theWord.setWord();
     askQuestion();
}

let askQuestion = function(){
     theWord.printWord();
     inquirer.prompt([{
          name: "letterPicked",
          message: "Please type a letter: "
     }]).then(function(ans){
          theWord.checkLetter(ans.letterPicked);
          if(!theWord.solved){
               if(!theWord.foundLetter && numLeft > 0){
                    numLeft--;
                    console.log(`${ans.letterPicked} in not in the password. You have ${numLeft} miss(es) remaining.`)
               }else if(!theWord.foundLetter && numLeft == 0){
                    console.log(`${ans.letterPicked} in not in the password. You lost.\nThe password was ${theWord.theWord}`)
                    playAgain();
                    return;
               }
               askQuestion();
          }else{
               console.log("You Won!")
               theWord.printWord();
               playAgain();
          }
     }).catch(function(err){
          console.log(err);
     });
}

let playAgain = function(){
     inquirer.prompt([{
          name: "again",
          type: "confirm",
          message: "Would you like to play again? "
     }]).then(function(ans){
          if(ans.again){
               setWord();
          }
     }).catch(function(err){
          console.log(err);
     });
}

setWord();