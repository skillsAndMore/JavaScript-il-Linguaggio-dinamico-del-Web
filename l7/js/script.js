/*
	In questo file tutto il codice non e' stato commentato e alla prina esecuzione mostrera' molte popup.
	Durante la pratica si consiglia di commentare o rimuovere le porzioni non interessanti.
*/

// Tutto in JavaScript e' un oggetto, comprese le stringe
var obj = "Questa stringa è un oggetto",
	length = obj.length;
// Stampo la lunghezza della stringa grazie alla proprieta' length
console.log(length);

// Cerco dei caratteri in una stringa con il metodo indexOf()
var index = obj.indexOf("a");
// Cerco la seconda occorrenza del carattere "a" incrementando l'indice passato come secondo parametro del metodo
var index2 = obj.indexOf("a", index + 1);
// Se un carattere non e' presente all'interno della stringa il metodo indexOf() restituisce -1
var indexErrato = obj.indexOf("x");

console.log(index);
console.log(index2);

// Il metodo lastIndexOf() cerca un carattere in una stringa partendo dalla destra
var indexInvertito = obj.lastIndexOf("a");
// Per trovare iol carattere successivo devo decrementare l'indice passato come secondo parametro
var indexInvertito2 = obj.lastIndexOf("a", indexInvertito - 1);

console.log(indexInvertito);
console.log(indexInvertito2);

// Ottengo una sottostringa partendo da una stringa di partenza con il metodo substr()
var substr = obj.substr(0, 6);

console.log(substr); //Stampa "Questa"
console.log(obj); //Stampa "Questa stringa è un oggetto"

// Sostituisco un set di caratteri all'interno di una stringa con il metodo replace()
var replace = obj.replace("oggetto", "valore");

console.log(replace);

// Trasformo in maiuscolo o minuscolo una stringa con i metodi toUpperCase() e toLowerCase()
var maiuscole = obj.toUpperCase(),
	minuscole = obj.toLowerCase();

console.log(maiuscole);
console.log(minuscole);
