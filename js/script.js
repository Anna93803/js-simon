
// Dopo 30 secondi, nascondere i numeri.
// L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// Visualizzare in pagina (html) 5 numeri casuali.
// recupero dall'html l'id per poter stampare a schermo poi i numeri
const numeriHtml = document.getElementById("numeri");
const timer = document.getElementById("timer");
// creo un array che continene i 5 numeri generati casualmente
const numeriCasuali = [];

// faccio un ciclo for per generate i 5 numeri e li punshi nell'array vuoto
for(let i = 0; i < 5; i++) {

   let generatoreNumeri = Math.floor(Math.random() * 100 + 1);
    numeriCasuali.push(generatoreNumeri);

    console.log(generatoreNumeri);
}
console.log(numeriCasuali);

numeriHtml.innerHTML = numeriCasuali.join(" - ");


// Avviare un timer di 30 secondi
let secondiRimanenti = 30;

let contoRovescia = setTimeout( function() {

    secondiRimanenti --;
    timer.innerHTML = "00" + ":" + secondiRimanenti;

    if(secondiRimanenti === 0) {
        clearInterval(contoRovescia)
        numeriHtml.classList.add("d-none");
    }

    console.log(secondiRimanenti);

}, 3000);

// console.log(contoRovescia);