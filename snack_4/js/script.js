//chiedere un numero all'utente
let number = parseInt(prompt('Inserire un numero a 4 cifre'));
//controllare che l'utente abbia inserito un numero
while(isNaN(number)){
  number = parseInt(prompt('Inserire un numero a 4 cifre'));
}
//convertire il numero in stringa
number = number.toString();
//creare un array con le singole cifre
number = number.split("");
//controllare che siano 4 cifre e nel caso richiedere il numero
while(number.length != 4){
  number = prompt('Inserire un numero a 4 cifre');
  number = number.toString();
  number = number.split("");
}
//convertire gli elementi dell'array in numeri e sommare le cifre
let somma = 0;
for(let i = 0; i < number.length; i++){
  let currentNumber = parseInt(number[i]);
  somma += currentNumber;
}

console.log(somma);