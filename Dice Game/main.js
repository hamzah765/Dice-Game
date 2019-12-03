const role1 = document.querySelector('.r')
const role2 = document.querySelector('.r2')
const newgame = document.querySelector('.ng')

let player2sc = document.querySelector('.s2')
let player1sc = document.querySelector('.s1')
let diceimage = document.querySelector('.dic2i')
let diceimage2 = document.querySelector('.dic2ii')
let score1 = 0;
let score2 = 0;
let randomRoll = 0;
let randomRoll2 = 0;
let winner = 0;

role1.addEventListener("click", () => {
    randomRoll += Math.floor(Math.random()*6)+1
    diceimage.src = "images/dice-" + randomRoll + ".png"
    score1 += randomRoll
    reset()
  player1sc.textContent =  "Player 1s score is" + " " + score1
  if(score1 > 20){
      winner += 1
      winner2()
  }
})
    //reset()
    //if(score1 > 20)
    
    

 role2.addEventListener("click", () => {
      randomRoll2 += Math.floor(Math.random()*6)+1
      diceimage2.src = "images/dice-" + randomRoll2 + ".png"
      score2 += randomRoll2
      reset2()
      player2sc.textContent = "Player 2s score is" + " " + score2
      if(score2 > 20){
        winner += 2
        winner2()
    }
   
 })

     
 newgame.addEventListener("click", () => {
    score1 = 0;
    score2 = 0;
    winner = 0;
    player1sc.textContent = 'Player 1s score is 0'
    player2sc.textContent = 'Player 2s score is 0'
    diceimage.src = "images/dice-1.png"
    diceimage2.src = "images/dice-1.png"
  
 })
 const winner2 = () => {
     
     score1=0
     score2=0
     player1sc.textContent = `Player ${winner}` + " " + "is the winner!!!"
     player2sc.textContent =`Player ${winner}` + " " + "is the winner!!!"

 }

const reset = () => {
randomRoll = 0;
} 

const reset2 = () => {
    randomRoll2= 0;

}
