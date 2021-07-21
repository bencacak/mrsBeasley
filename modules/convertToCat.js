

// !converttocat command

const convertToCat = input => {      
      
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let convertedText = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        if (input[i] === 'a') {
          convertedText.push('meow');
        } else if (input[i] === 'e') {
          convertedText.push('meow meow');
        } else if (input[i] === 'i') {
          convertedText.push('hiss');
        } else if (input[i] === 'o') {
          convertedText.push('mow');
        } else if (input[i] === 'u') {
          convertedText.push('mew');
        } else {
          convertedText.push('growl');
        };
      };
    }; //ends j loop        
  }; //ends i loop
  return convertedText.join(' ');     
}; //ends c

module.exports.convertToCat = convertToCat;
