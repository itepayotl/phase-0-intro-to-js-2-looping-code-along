for (let age= 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}
const messageNames = [];

function writeCards(names, value) {
  for (let i = 0; i < names.length; i ++) {
    messageNames.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
  }
  return messageNames
}
function countDown(count) {
  while (count > -1){
    console.log(count--)}
  }
  let newCount = [4]
  function newCountDown() { while (newCount > -1) {
console.log(newCount--)}
return newCount
  }