const firstWord = prompt('Inserire la prima parola');
const secondWord = prompt('Inserire la seconda parola');

console.log(firstWord, secondWord);

const firstWordLength = firstWord.length;
const secondWordLength = secondWord.length;

let result;
if(firstWordLength < secondWordLength){
  result = `${firstWord}, ${secondWord}`;
}else if(secondWordLength < firstWordLength){
  result = `${secondWord}, ${firstWord}`;
}else{
  result = `Le parole hanno stessa lunghezza ${firstWord}, ${secondWord}`;
}

console.log(result);