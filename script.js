document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('play-btn');
    const userSelectionButtons = document.querySelectorAll('.user-selection button');
    const resultText = document.getElementById('result-text');
  
    // Array of possible choices
    const choices = ['rock', 'paper', 'scissors'];

    //variable to store user and computer score
    let userScore = 0;
    let computerScore = 0;

    // Function to generate random computer choice
    function generateComputerChoice() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    // Function to compare user and computer choices and determine the winner
    function determineWinner(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
       
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        userScore++;
        
      } else {
        computerScore++;
        
      }
    }
  
    // Function to handle user selection
    function handleUserSelection(e) {
      const userChoice = e.target.id;
      document.getElementById('user-choice').src=`assets/images/${userChoice}.png`
      const computerChoice = generateComputerChoice();
      document.getElementById('computer-choice').src=`assets/images/${computerChoice}.png`
      determineWinner(userChoice, computerChoice);
     if(userScore === 5){
        alert('You Win');
        userScore = 0;
        computerScore = 0;
      }
      else if(computerScore === 5){
        alert('You Lose');
        userScore = 0;
        computerScore = 0;
      }
      
      resultText.textContent = `Your Score ${userScore}. Computer Score ${computerScore}`;
    }
  
    // Function to reset the result
    function resetResult() {
      resultText.textContent = '';
    }
  
    // Attach event listeners
    userSelectionButtons.forEach(function(button) {
      button.addEventListener('click', handleUserSelection);
    });
  
    playBtn.addEventListener('click', resetResult);
  });
  