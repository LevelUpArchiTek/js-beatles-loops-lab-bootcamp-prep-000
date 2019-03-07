// add solution here
function theBeatlesPlay(musician, instrument){
  var musician_instrument = []
  for( var i = 0, i < musician.length, i++ ){
    musician_instrument[i] = musician[i] + " plays " + instrument[i]
  }
  return musician_instrument
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i = 0
  While (facts[i]){
    facts[i] = fact[i] + "!!!"
  }
  return facts
}

