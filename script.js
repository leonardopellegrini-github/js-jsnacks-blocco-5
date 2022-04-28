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
    lunghezza: 7
  },
  {
    varieta: 3,
    peso: 6,
    lunghezza: 7
  },
  {
    varieta: 3,
    peso: 9,
    lunghezza: 7
  },
  {
    varieta: 3,
    peso: 11,
    lunghezza: 7
  },
  {
    varieta: 3,
    peso: 5,
    lunghezza: 7
  },
  {
    varieta: 3,
    peso: 4,
    lunghezza: 7
  },
  {
    varieta: 3,
    peso: 6,
    lunghezza: 7
  },
  {
    varieta: 3,
    peso: 9,
    lunghezza: 7
  },
  {
    varieta: 3,
    peso: 11,
    lunghezza: 7
  },

];

calcoloPeso(oggetti);

function calcoloPeso(calc){
  
  let somma = 0;

  for (const key in calc){
    somma += calc[key].lunghezza;
  }
document.getElementById('quantezucchine').innerHTML = somma;
}

