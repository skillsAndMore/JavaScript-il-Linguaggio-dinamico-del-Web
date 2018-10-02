/*
	In questo file tutto il codice non e' stato commentato e alla prina esecuzione mostrera' molte popup.
	Durante la pratica si consiglia di commentare o rimuovere le porzioni non interessanti.
*/

// Chiedo all'utente di inserire un valore
prompt("Qual è il tuo nome?");

// Mostro il valore inserito dall'utente che salvo nella variabile nome
var nome = prompt("Qual è il tuo nome?");
console.log("Il nome del visitatore è: " + nome);

// Stampo la tabbellina del 2, metodo lungo e senza logica di programmazione
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
console.log(14);
console.log(16);
console.log(18);
console.log(20);

// Stampo la tabellina del 2 sfruttando il ciclo for
for (var i = 0; i <= 20; i = i + 2) {
	console.log(i);
}

// Stampo la tabellina del 2 sfruttando il ciclo while
var i = 0;
while (i <= 20) {
	console.log(i);
	i = i + 2;
}

// Continuo a chiedere il nome al visitatore fintanto che non risponde Andrea
var name = prompt("Qual è il tuo nome?");

while (name != "Andrea") {
	name = prompt("Qual è il tuo nome?");
}
