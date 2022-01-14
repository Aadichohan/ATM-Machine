var amount = Number( prompt('enter amount'));

let notes = [500, 100, 50, 20, 10, 5, 1];
let fiveHundred = 0;
let noteCount = {};
 console.log('amount pre ', amount  );
for (let i = 0; i < amount; i++) {
    for (let j = 0; j < notes.length; j++) {
      
        if(amount > notes[0] && fiveHundred <= 200){
            fiveHundred ++;
            amount = amount - notes[0];
            console.log('value', amount  );
        }
        
    }
    
    
}
console.log('fiveHundred', fiveHundred  );
 console.log('amount', amount  );