function rollDice() {
    const numOfDice = document.getElementById('numberOfDice').value;
    const diceResult = document.getElementById('result');
    const diceImage = document.getElementById('diceImage');
    const results = [];
    const images = [];
    
    for(let i=0; i<numOfDice; i++) {
        const result = Math.floor(Math.random() * 6) + 1;
        results.push(result);
        images.push
    }
    console.log(results);

    diceResult = results;
       
    if(result == 1) {
        diceImage.scr = "";
    }
    else if(result == 2 ) {
        diceImage.scr = "";
    }
    else if(result == 3 ) {
        diceImage.scr = "";
    }
    else if(result == 4 ) {
        diceImage.scr = "";
    }
    else if(result == 5 ) {
        diceImage.scr = "";
    }
    else if(result == 6 ) {
        diceImage.scr = "";
    }

}
  
  
document.getElementById('roll-btn').addEventListener('click', function() {

    rollDice();
    
    
    
    
    
    
    
    
    
});
