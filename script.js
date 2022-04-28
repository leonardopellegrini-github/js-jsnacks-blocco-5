/*

Jsnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

*/

const oggetto = {
  varieta: 3,
  peso: 8,
  lunghezza: 7
};

const oggetti = [

  {
    varieta: 3,
    peso: 5,
    lunghezza: 7
  },
  {
    varieta: 3,
    peso: 4,
    lunghezza: 9
  },
  {
    varieta: 3,
    peso: 6,
    lunghezza: 30
  },
  {
    varieta: 3,
    peso: 9,
    lunghezza: 13
  },
  {
    varieta: 3,
    peso: 11,
    lunghezza: 10
  },
  {
    varieta: 3,
    peso: 5,
    lunghezza: 14
  },
  {
    varieta: 3,
    peso: 4,
    lunghezza: 16
  },
  {
    varieta: 3,
    peso: 6,
    lunghezza: 20
  },
  {
    varieta: 3,
    peso: 9,
    lunghezza: 23
  },
  {
    varieta: 3,
    peso: 11,
    lunghezza: 6
  },

];

calcoloPeso(oggetti);

function calcoloPeso(calc){
  
  let somma = 0;

  for (const key in calc){
    somma += calc[key].peso;
  }
document.getElementById('jsnack1').innerHTML = somma;
}

/*

Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

*/

dividiLunghezza(oggetti);

function dividiLunghezza(lung){

  let magg = 0;
  let min = 0;

  for (const key in lung) {

    if ( lung[key].lunghezza > 15){
      magg += lung[key].lunghezza;
    } else{
      min += lung[key].lunghezza;
    }
    
  }
  document.getElementById('maggiori15').innerHTML = magg;
  document.getElementById('minori15').innerHTML = min;

}