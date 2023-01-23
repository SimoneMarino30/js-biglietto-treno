// TRACCIA
//
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - Il prezzo del biglietto è definito in base ai km(0.21 € al km).
// - Va applicato uno sconto del 20 % per i minorenni.
// - Va applicato uno sconto del 40 % per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// PASSAGGI:
//
// CHIEDERE ALL' UTENTE QUANTI KM VUOLE PERCORRERE
//      MOLTIPLICARE I KM PER 0.21€
// CHIEDERE ALL'UTENTE L'ETA'
// SE
//   L'UTENTE HA MENO DI 18 ANNI
//      APPLICO UNO SCONTO DEL 20%
//SE
//    L'UTENTE HA PIù DI 59 ANNI
//       APPLICO UNO SCONTO DEL 40%
// ALTRIMENTI
//  NON APPLICO NESSUNO SCONTO
//
// CALCOLARE IL PREZZO DEL BIGLIETTO FINALE


// ESERCIZIO

// CHIEDERE ALL' UTENTE QUANTI KM VUOLE PERCORRERE
let kilometri = parseInt(prompt('Quanti kilometri vuoi percorrere?'))

// MOLTIPLICARE I KM PER 0.21€
let price = parseFloat(kilometri * 0.21)
let price_fixed = price.toFixed(2);

// CHIEDERE ALL'UTENTE L'ETA'
let eta = prompt('Quanti anni hai?')

// SE L'UTENTE HA MENO DI 18 ANNI
const minorenne = (eta < 18)
const meno18_discount = ((price * 20) / 100)
const meno18_price = (price - meno18_discount)

// ARROTONDAMENTO 2 CIFRE DECIMALI MENO DI 18 ANNI
let meno18_fixed = meno18_price.toFixed(2);

// SE L'UTENTE HA PIU' DI 59 ANNI
const maggiorenne = eta > 59
const piu60_discount = ((price * 40) / 100);
let piu60_price = (price - piu60_discount);

// ARROTONDAMENTO 2 CIFRE DECIMALI PIU DI 60 ANNI
let piu60_fixed = piu60_price.toFixed(2);

// STAMPA IN PAGINA
if (minorenne == true) {
    alert('Abbiamo applicato uno sconto del 20%,\nIl tuo biglietto costa € ' + meno18_fixed)
}
else if (maggiorenne == true) {
    alert('Abbiamo applicato uno sconto del 40%,\nIl tuo biglietto costa € ' + piu60_fixed)
}
else {
    alert('Il biglietto costa € ' + price_fixed);
}





// // Kilometraggio dell'utente
// let kilometri = prompt('Quanti kilometri vuoi percorrere?')
// // Prezzo per kilometro
// let price = (kilometri * 0.21)
// console.log(price);

// // Età dell'utente
// let età = prompt('Quanti anni hai?')
// console.log(età);

// // Sconto in base
// if (età < 18) {
//     alert(Math)

// }

// // alert = 'Grazie, il prezzo del biglietto è' + price;