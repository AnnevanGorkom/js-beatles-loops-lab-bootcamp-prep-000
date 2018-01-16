function theBeatlesPlay(musician, instrument) {
  var array = []
  for (var i = 0; i < musician.length; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  var i = 0
  do {
    array.push("I love the Beatles!")
    i + number
  } while (i < 15)
  return array
}
