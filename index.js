// add solution here
function theBeatlesPlay(musicians, instruments){
  var musician_instrument = []
  for( var i = 0; i < musicians.length; i++ ){
    // musician_instrument[i] = musician[i] + " plays " + instrument[i]
    musician_instrument[i] = musicians[i] + " plays " + instruments[i]
  }
  return musician_instrument
}

// const facts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ];
function johnLennonFacts(){
  facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];
  var newFacts = [];
  var i = 0;
  While (i<facts.length){
    // facts[i] = fact[i] + "!!!"
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}
