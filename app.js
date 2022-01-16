function countCurrency(amount, pref) {
    var notes = [ 500,100, 50, 20, 10, 5, 1];
    var noteCounter = [0, 0, 0, 0, 0, 0, 0];
    var counterObj = {}
    var prefIndex   = notes.indexOf(pref);
    // Calculate  Prefered Curreny Note
    for(let j = 1; j <= amount; j++){
        if (amount >= notes[prefIndex]  && noteCounter[prefIndex] < 200) {
             amount                 = amount -  notes[prefIndex];
             noteCounter[prefIndex] = noteCounter[prefIndex] + 1;
          }    
   }
  // Calculate Other Currency Note
   for (var i = 0; i < notes.length; i++) {
      if (amount >= notes[i] && noteCounter[i] <= 200 && i != prefIndex) {
          noteCounter[i] = Math.floor(amount / notes[i]);
          amount = amount - noteCounter[i] * notes[i];
       }
       counterObj[notes[i]] = noteCounter[i];
    }
     return counterObj;
  }

  let userAmmount   = Number(prompt("Enter Ammount from 100 to 100000"))
  let Pref = Number(prompt("Enter you note  Preference"));
//  console.log('amm ',isNaN(userAmmount));
  if( isNaN(userAmmount) == false && isNaN(Pref) == false){
      if(userAmmount >= 100 && userAmmount <= 100000){
        console.log( countCurrency(userAmmount, Pref));
        
      }
      else{
          alert("Enter Amount Only in the range of 100-100000");
      }
  }
  else{
      alert("Amount or Preference is not in Numbers");
  }
