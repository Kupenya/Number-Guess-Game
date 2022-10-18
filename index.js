// A function to generate random numbers between 1 and given parameter

const randomRange = z => {
    return Math.floor(Math.random() * z) + 1;
  }
  
  //Ask for username and greet
  let playerName = prompt('What should I call you?: ');
  console.log('Welcome to Guess a number game ' + playerName + '!\n');
  
  // set the values of the function parameter, level and the answer for first loop
  let y = 2, level = 1, points = 0, response = randomRange(y);
  
  // collect user guess
  // console.log(response)
  let input = prompt(`Range is 1 to ${y}. Make a guess: `);
  
  // loop to run continuously until the player input is wrong
  while(true){
    if(parseInt(input) !== response){
      console.log(`Oya sope otilo. You guessed wrong.\nYou finished at Level ${level} with ${points} point(s). Thanks for playing!`);
      break;
    }
    else{
      console.log('Great guess! Oya on to the next.\n');
      y++;
      level++;
      points++;
      response = randomRange(y);
      // console.log(answer)
      input = prompt(`Range is 1 to ${y}. Make a guess: `);    
    }
  }
  
  
  
  
  
  