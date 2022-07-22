function scuberGreetingForFeet(someNumber){
  // Write your code here!
  let greeting
  if (someNumber <= 400){
    greeting = `This one is on me!`
  }
  else if (someNumber <= 2000){
    greeting = `That will be twenty bucks.`
  }
  else if (someNumber > 2000 && someNumber <= 2500) {
    greeting = `I will gladly take your thirty bucks.`
  }
  else if (someNumber > 2500) {
    greeting =`No can do.`
  }
  return greeting
}

function ternaryCheckCity(city){
  // Write your code here!
  const response = city === `NYC` ? `Ok, sounds good.` : `No go.`
  return response
}

function switchOnCharmFromTip(amount){
  // Write your code here!
  let tipNote
  switch (amount) {
    case `generous`:
      tipNote = `Thank you so much.`;
      break;
    case `not as generous`:
      tipNote = `Thank you.`;
      break;
    default:
      tipNote = `Bye.`;
      break;
  }
  return tipNote
}