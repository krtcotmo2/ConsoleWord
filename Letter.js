function Letter(val){
     this.val = val;
     this.found=false;
     
     this.getFound = function(){
          return this.found;
     }
     this.setFound = function(bool){
          this.found = bool;
     }
}

module.exports = Letter