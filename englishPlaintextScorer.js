let characterScores = {
  a: 8,
  b: 1,
  c: 3,
  d: 4,
  e: 12,
  f: 2,
  g: 2,
  h: 6,
  i: 7,
  j: 0,
  k: 1,
  l: 4,
  m: 2,
  n: 7,
  o: 8,
  p: 2,
  q: 0,
  r: 6,
  s: 6,
  t: 9,
  u: 3,
  v: 1,
  w: 2,
  x: 0,
  y: 2,
  z: 0,
  ' ': 13
}


function englishPlainTextScorer(text) {
  let score = text.split('').reduce((score, character) => score + characterScores[character], 0);

  // for each character in `text`
  //   add to score if character is score worthy
  return score;
}

module.exports = englishPlainTextScorer;

// console.log(englishPlainTextScorer('alfkajhdlkajhsflkajsdhfl'))
// console.log(englishPlainTextScorer('something that is real'))
