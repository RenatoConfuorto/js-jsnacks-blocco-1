const oddNumbers = [];
const limit = 6;

for(let i = 0; i < limit; i++){
  let number = parseInt(prompt(`inserisci un numero (${i + 1}/6)`));

  while(isNaN(number)){
    number = parseInt(prompt(`inserisci un numero (${i + 1}/6)`));
  }
  console.log(number, i, number % 2 === 0);

  if(number % 2 === 1){
    oddNumbers.push(number);
  }

}

console.log(oddNumbers);