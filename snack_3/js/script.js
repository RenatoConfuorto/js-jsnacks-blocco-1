const limite = 10;
let somma = 0;
let media;

for(let i = 1; i <= limite; i++){
  somma += i;
  console.log(somma, i);
}

console.log(`La somma è ${somma}`);
media = somma / limite;
console.log(`La media è ${media}`);