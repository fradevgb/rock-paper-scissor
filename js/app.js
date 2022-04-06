(() => {
  const handsBtn = document.querySelectorAll('.hand');
  const newGame = document.querySelector('.newGame');
  
  const handOptions = {
    "rock": '/assets/images/Rock.png',
    "paper": '/assets/images/Paper.png',
    "scissors": '/assets/images/Scissors.png',
  };
  
  let SCORE = 0;
  let numAttemps = 0;
  
  handsBtn.forEach((hand) => {
    hand.addEventListener('click', (e) => {
      let userHand = e.currentTarget.classList[1];
      pickUserHand(userHand);
      numAttemps++;
      console.log('number of attemps',numAttemps);
    });
  });
  
  const pickUserHand = (hand) => {
    let hands = document.querySelector('.hands');
    hands.style.display = 'none';
  
    let contest = document.querySelector('.contest');
    contest.style.display = 'flex';
  
    // set the user pick
    document.getElementById('userPickImage').src = handOptions[hand];
    let cpHand = pickComterHand();
    referee(hand, cpHand)
  };
  
  const pickComterHand = () => {
    let hands = ['rock', 'paper', 'scissors'];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];
  
    document.getElementById('computerPickImage').src = handOptions[cpHand];
    return cpHand;
  };
  
  const referee = (userHand, cpHand) => {
    if (userHand == 'paper' && cpHand == 'scissors') {
      setDecision('YOU LOSE!');
    }
    if (userHand == 'paper' && cpHand == 'rock') {
      setDecision('YOU WIN!');
      setScore(SCORE + 1);
    }
    if (userHand == 'paper' && cpHand == 'paper') {
      setDecision("It's a tie!");
    }
    if (userHand == 'rock' && cpHand == 'scissors') {
      setDecision('YOU WIN!');
      setScore(SCORE + 1);
    }
    if (userHand == 'rock' && cpHand == 'paper') {
      setDecision('YOU LOSE!');
    }
    if (userHand == 'rock' && cpHand == 'rock') {
      setDecision("It's a tie!");
    }
    if (userHand == 'scissors' && cpHand == 'scissors') {
      setDecision("It's a tie!");
    }
    if (userHand == 'scissors' && cpHand == 'rock') {
      setDecision('YOU LOSE!');
    }
    if (userHand == 'scissors' && cpHand == 'paper') {
      setDecision('YOU WIN!');
      setScore(SCORE + 1);
    }
  };
  
  newGame.addEventListener('click', () => {
    restartGame();
  });
  
  const restartGame = () => {
    let hands = document.querySelector('.hands');
    hands.style.display = 'flex';
  
    let contest = document.querySelector('.contest');
    contest.style.display = 'none';
  };
  
  const setDecision = (decision) => {
    document.querySelector('.decision h2').innerText = decision;
  };
  
  const setScore = (score) => {
    SCORE = score;
    document.querySelector('.score h1').innerText = score;
  };
  
})();
