function scuberGreetingForFeet(distance){
  let messageDistance;
    if (distance <= 400) {
      messageDistance = 'This one is on me!';

    }else if (distance > 2000 && distance < 2500) {
      messageDistance = 'I will gladly take your thirty bucks.';
    }else if (distance > 2500) {
      messageDistance = 'No can do.';
    }
    return messageDistance;

  
  }

function ternaryCheckCity(city){
  const message = city === 'NYC' ? 'Ok, sounds good.': "No go.";
  return message;


}

function switchOnCharmFromTip(tipResponse){
 switch (tipResponse) {
  case 'generous':
    return 'Thank you so much.'
  case 'not as generous':
    return 'Thank you.'
  default:
    return 'Bye.'
}
}
