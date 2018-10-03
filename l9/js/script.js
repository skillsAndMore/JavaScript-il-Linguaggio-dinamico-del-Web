/*
	In questo file tutto il codice non e' stato commentato e alla prina esecuzione mostrera' molte popup.
	Durante la pratica si consiglia di commentare o rimuovere le porzioni non interessanti.
*/

//Dichiaro la funzione
// var fun = function() {
//codice
// };

//Eseguo la funzione
// fun();

// ATTENZIONE: i video presentano una sintassi diversa ma la seguente e' quella corretta
// Creazione di una IIFE (Immediately Invoked Function Expression). Doc: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function() {
	// Corpo funzione
})();

// Creazione esempio con evento onclick
(function() {
	var el = document.querySelectorAll("button");

	for (var i = 0, len = el.length; i < len; i++) {
		// Questo primo evento non funzionera' perche' onclick non permette di avere piu' funzioni collegate
		el[i].onclick = function() {
			var nomeClasse = this.innerHTML.toLowerCase();
			document.body.className = nomeClasse;
		};

		el[i].onclick = function() {
			alert("Complimenti!");
		};
	}
})();

// Creazione esempio con addEventListener
(function() {
	var el = document.querySelectorAll("button");

	var clickBottone = function() {
		var nomeClasse = this.innerHTML.toLowerCase();
		document.body.className = nomeClasse;
	};

	for (var i = 0, len = el.length; i < len; i++) {
		el[i].addEventListener("click", clickBottone);
		el[i].addEventListener("click", function() {
			alert("Congratulazioni");
		});
	}
})();
