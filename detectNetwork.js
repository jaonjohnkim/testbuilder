// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  if (
    (cardNumber.slice(0,2) === '38' ||
    cardNumber.slice(0,2) === '39') &&
    cardNumber.length === 14
  ) {
    return 'Diner\'s Club';
  } else if (
    (cardNumber.slice(0,2) === '34' ||
    cardNumber.slice(0,2) === '37') &&
    cardNumber.length === 15
  ) {
    return 'American Express';
  } else if (
    (cardNumber.slice(0,4) === '4903' ||
    cardNumber.slice(0,4) === '4905' ||
    cardNumber.slice(0,4) === '4911' ||
    cardNumber.slice(0,4) === '4936' ||
    cardNumber.slice(0,6) === '564182' ||
    cardNumber.slice(0,6) === '633110' ||
    cardNumber.slice(0,4) === '6333' ||
    cardNumber.slice(0,4) === '6759') &&
    (cardNumber.length === 16 ||
    cardNumber.length === 18 ||
    cardNumber.length === 19)
  ) {
    return 'Switch';
  } else if (
    cardNumber.slice(0,1) === '4' &&
    (cardNumber.length === 13 ||
    cardNumber.length === 16 ||
    cardNumber.length === 19)
  ) {
    return 'Visa';
  } else if (
    (cardNumber.slice(0,2) >= 51 &&
    cardNumber.slice(0,2) <= 55) &&
    cardNumber.length === 16
  ) {
    return 'MasterCard';
  } else if (
    (cardNumber.slice(0,4) === '6011' ||
    (cardNumber.slice(0,3) >= 644 && cardNumber.slice(0,3) <= 649) ||
    cardNumber.slice(0,2) == '65') &&
    (cardNumber.length === 16 || cardNumber.length === 19)
  ) {
    return 'Discover';
  } else if (
    (cardNumber.slice(0,4) === '5018' ||
    cardNumber.slice(0,4) === '5020' ||
    cardNumber.slice(0,4) === '5038' ||
    cardNumber.slice(0,4) === '6304') &&
    (cardNumber.length >= 12 && cardNumber.length <= 19)
  ) {
    return 'Maestro';
  } else if (
    ((cardNumber.slice(0,6) >= 622126 && cardNumber.slice(0,6) <= 622925) ||
    (cardNumber.slice(0,3) >= 624 && cardNumber.slice(0,3) <= 626) ||
    (cardNumber.slice(0,4) >= 6282 && cardNumber.slice(0,4) <= 6288)) &&
    (cardNumber.length >= 16 && cardNumber.length <= 19)
  ) {
    return 'China UnionPay';
  }
};
