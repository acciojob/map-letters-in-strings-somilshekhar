function mapLetters(word) {
  const result = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    
    if (result[letter]) {
      result[letter].push(i);
    } else {
      result[letter] = [i];
    }
  }

  return result;
}
