/*
	In questo file tutto il codice non e' stato commentato e alla prina esecuzione mostrera' molte popup.
	Durante la pratica si consiglia di commentare o rimuovere le porzioni non interessanti.
*/

// Divesti metodi per selezionare un elemento HTML
document.getElementById("tit"); // Seleziono con id
document.getElementsByClassName("pari"); // Seleziono con classe
document.getElementsByTagName("p"); // Seleziono con nome elemento

// Creazione di un array
var arr = new Array();

// Due modi per creare array
var standard = new Array("Andrea", "Eugenio", "Daniele");
var letterale = ["Andrea", "Eugenio", "Daniele"];

// Accedere a un valore contenuto in un array tramite il suo indice
console.log(letterale[1]); // Stampa "Eugenio"

// Per scoprire tutti i valori contenuti in un array e' utile usare un ciclo for
var el = document.getElementsByTagName("li");

for (var i = 0; i < el.length; i++) {
	console.log(el[i].innerHTML);
}

// Con la proprieta' innerHTML posso anche modificare un elemento HTML
var listItem = document.getElementsByTagName("li");

for (var i = 0; i < listItem.length; i++) {
	listItem[i].innerHTML = listItem[i].innerHTML + " ( indice: " + i + " )";
}

// Nuovi metodi permettono di usare i selettori CSS
var singoloEl = document.querySelector("p");
var multipliEl = document.querySelectorAll("li");

// Ciclo all'interno di un array di elementi con querySelectorAll()
var listItemEven = document.querySelectorAll(" ul li:nth-child(even) ");

for (var i = 0; i < listItemEven.length; i++) {
	console.log(listItemEven[i].innerHTML);
}
