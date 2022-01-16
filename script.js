class Atm{
 constructor (amount, prefNote) {
  this.amount = amount;
  this.prefNote = prefNote;
 }

 CalcCurency = () => {
    var notes = [ 500,100, 50, 20, 10, 5, 1];
    var noteCounter = [0, 0, 0, 0, 0, 0, 0];
    var counterObj = {}
    var prefIndex   = notes.indexOf(this.prefNote);
    // Calculate  Prefered Curreny Note
    for(let j = 1; j <= this.amount; j++){
        if (this.amount >= notes[prefIndex]  && noteCounter[prefIndex] < 200) {
            this.amount                 = this.amount -  notes[prefIndex];
             noteCounter[prefIndex] = noteCounter[prefIndex] + 1;
          }    
   }
  // Calculate Other Currency Note
   for (var i = 0; i < notes.length; i++) {
      if (this.amount >= notes[i] && noteCounter[i] <= 200 && i != prefIndex) {
          noteCounter[i] = Math.floor(this.amount / notes[i]);
          this.amount = this.amount - noteCounter[i] * notes[i];
       }
       counterObj[notes[i]] = noteCounter[i];
    }
     return counterObj;
  }
}

function calcDistrubution(){

    //   let userAmmount   = Number(prompt("Enter Ammount from 100 to 100000"))
    //   let Pref = Number(prompt("Enter you note  Preference"));
      
      let userAmount   = Number(document.getElementById('amount').value)
      let Pref         = Number(document.getElementById('preferedNote').value)

  if( isNaN(userAmount) == false && isNaN(Pref) == false){
      if(userAmount >= 100 && userAmount <= 100000){
// alert();
        const  atm = new Atm(userAmount, Pref);
         distribute = atm.CalcCurency();
        tbl(distribute);
        console.log(distribute);
      }
      else{
          alert("Enter Amount Only in the range of 100-100000");
      }
  }
  else{
        alert("Amount or Preference is not in Numbers");
  }
}

function tbl(object) {
    var table = document.getElementById("result").getElementsByTagName('tbody')[0];
    table.innerHTML = "";
    let i = 1;
    for(let obj in object){
        // table.removeChild(0);
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(1);
        cell1.style="text-align:center;font-weight: bolder;";
        cell2.style="text-align:center;font-weight: bolder;";
        cell3.style="text-align:center;font-weight: bolder;";
        console.log('obj ',object[obj]);
        cell1.innerHTML = i;
        cell2.innerHTML = object[obj];
        cell3.innerHTML = obj;
        i++;
    }
  }
  