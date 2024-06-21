function rollDice() {
    const numOfDice = document.getElementById('numberOfDice').value;
    const diceResult = document.getElementById('result');
    const diceImage = document.getElementById('diceImage');
    const results = [];
    const images = [];
    
    for(let i=0; i<numOfDice; i++) {
        const result = Math.floor(Math.random() * 6) + 1;
        results.push(result);
        images.push(`<img src="../Images/${result}.png" alt="Empty Dice">`)
    }
    console.log(results);
    console.log(images);

    diceImage.innerHTML = images.join('  ');


}
  
  
document.getElementById('roll-btn').addEventListener('click', function() {

    rollDice();
    
});
