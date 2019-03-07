// add solution here
function theBeatlesPlay(musician, instrument){
  var musician_instrument = []
  for( var i = 0, i < musician.length, i++ ){
    musician_instrument[i] = musician[i] + " plays " + instrument[i]
  }
  return musician_instrument
}
