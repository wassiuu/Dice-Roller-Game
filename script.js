


function rollDice(){
  const numofDice = document.getElementById("diceCount").value;
  const diceResult = document.getElementById("diceresult");
  const diceImages = document.getElementById("diceimages");
  const values = [];
  const images = [];

  for(let i= 0; i<numofDice;i++){
    const value = Math.floor(Math.random()*6)+1;
    values.push(value);
    images.push(`<img src="dice faces/${value}.png" width=150 height=auto alt="dice ${value}">`);
  }
  diceResult.textContent = `Dices: ${values.join(", ")}`;
  diceImages.innerHTML = images.join(" ");
}