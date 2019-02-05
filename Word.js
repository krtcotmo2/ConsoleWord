let Letter = require("./Letter.js");

function Word(val){
     this.theWord = val;
     this.letters = [];
     this.solved = false;
     this.foundLetter = false;

     this.setWord = function(){
          this.letters = [];
          for(let d=0; d<this.theWord.length; d++){
               let aLetter = new Letter(this.theWord.charAt(d));
               if(aLetter.val == " "){
                    aLetter.found = true;
               }
               this.letters.push(aLetter);
          }
     }

     this.printWord = function(){
          let str = "";
          this.letters.forEach(o => {
               if(o.found){
                    str = str + " " +o.val;
               }else{
                    str = str + " _";
               }
          })
          console.log("The password is:\n");
          console.log(str);
          console.log("\n");
     }

     this.checkLetter = function(arg){
          this.foundLetter = false;
          this.letters.forEach( o => {  
              if( o.val.toLowerCase() === arg.toLowerCase()){
                    o.found = true;
                    this.foundLetter = true;
              }
          });
          this.solved = this.letters.filter( o => {
               return o.found == false;
          }).length == 0;
     }
}

module.exports = Word;