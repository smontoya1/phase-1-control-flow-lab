function scuberGreetingForFeet(someValue){
  let response;
  if (someValue <= 400) {
    response = 'This one is on me!'
  } else if (someValue > 400 && someValue < 2000) {
    response = 'That will be twenty bucks.'
  } else if (someValue >= 2000 && someValue <= 2500) {
    response = 'I will gladly take your thirty bucks.'
  } else if (someValue > 2500) {
    response = 'No can do.'
  }
  return response;
}

function ternaryCheckCity(someCity) {
  let response;
  if (someCity === 'NYC') {
    response = 'Ok, sounds good.'
  } else {
    response = 'No go.'
  }
  return response;
}

function switchOnCharmFromTip(someTip){
  let response;
  if (someTip === 'generous') {
    response = 'Thank you so much.'
  } else if (someTip === 'not as generous') {
    response = 'Thank you.'
  } else {
    response = 'Bye.'
  }
  return response;
}