//Game value

let min = 1,
    max = 10,
    winningNum = 5,
    guessesLeft = 3;

//UI Elements 

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


//Assign UI min and max 
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener('click',function(){

    let guess = parseInt(guessInput.value);
  
    //Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red'); 
        }
    else{
    //Check if won    
    if(guess === winningNum){
        //Game over - won
       gameOver(true,`${winningNum} is correct, YOU WIN!`); 
    } 
    else{
      //Reduce guessesLeft count
      guessesLeft  -= 1;

      if(guessesLeft === 0)
      {
          //Game over - lost
       gameOver(false,`You lost, the number was ${winningNum}`); 
      }
      else{

        //clear guessField
        guessInput.value = '';
        //Show trys left, game continues
      setMessage(`Ooops, You have ${guessesLeft} tries left`, 'red'); 

      }
    }
  }
});

function setMessage(msg,color){
    message.textContent = msg;
    message.style.color = color;
}

function gameOver(won,msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    //Disable input text
    guessInput.disabled = true;

    //Change border color
    guessInput.style.borderColor = color;

    //CHnage text color
    guessInput.style.textColor = color;

    //Set msg
    setMessage(msg,color)

}