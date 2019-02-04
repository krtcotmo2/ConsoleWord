let Letter = require("./Letter.js");

function Word(val){
     this.theWord = val;
     this.letters = [];

     this.setWord = function(){
          for(let d=0; d<this.theWord.length; d++){
               let aLetter = new Letter(this.theWord.charAt(d));
               if(aLetter.val == " " || aLetter.val.toLowerCase() == "r"|| aLetter.val.toLowerCase() == "e"|| aLetter.val.toLowerCase() == "t"|| aLetter.val.toLowerCase() == "p" ){
                    aLetter.found = true;
               }
               this.letters.push(aLetter);
          }
     }
     

     this.printWord = function(){
          let str = "";
          for(let d=0; d< this.letters.length; d++){
               if(this.letters[d].found){
                    str = str + " " +this.letters[d].val;
               }else{
                    str = str + " _";
               }
          }
          console.log(str);
     }
}

module.exports = Word;