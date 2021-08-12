// !spell command
let output = [];
const spell = input => {
      
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '#', '?', '!', '*']
   
  
  for (let i = 0; i < input.length; i++) { 
    for (let j = 0; j < letters.length; j++){
      if (input[i] === letters[j]) {
        switch (letters[j]) {
          case 'a':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'b':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'c':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'd':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'e':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'f':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'g':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'h':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'i':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'j':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'k':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'l':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'm':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'n':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'o':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'p':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'q':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'r':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 's':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 't':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'u':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'v':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'w':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'x':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'y':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case 'z':
            output.push(`:regional_indicator_${letters[j]}:`)
            break;
          case ' ':
            output.push(`${letters[j]}`)
            break;
          case '0':
            output.push(`:zero:`)
            break;
          case '1':
            output.push(`:one:`)
            break;
          case '2':
            output.push(`:two:`)
            break;
          case '3':
            output.push(`:three:`)
            break;
          case '4':
            output.push(`:four:`)
            break;
          case '5':
            output.push(`:five:`)
            break;
          case '6':
            output.push(`:six:`)
            break;
          case '7':
            output.push(`:seven:`)
            break;
          case '8':
            output.push(`:eight:`)
            break;
          case '9':
            output.push(`:nine:`)
            break;
          case '#':
            output.push(`:hash:`)
            break;
          case '?':
            output.push(`:grey_question:`)
            break;
          case '!':
            output.push(`:grey_exclamation:`)
            break;
          case '*':
            output.push(`:eight_spoked_asterisk:`)
            break;
          default: output.push('');
        };
      };
    };
  };
  
};

const clearOutput = () => {
  output.splice(0, output.length);
};

module.exports.spell = spell;
module.exports.output = output;
module.exports.clearOutput = clearOutput;
