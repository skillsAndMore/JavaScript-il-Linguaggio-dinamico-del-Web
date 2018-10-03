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
	var el = document.querySelector("#box");
	var cambioBackground = function() {
		var color = this.style.backgroundColor;
		if (color != "blue") {
			this.style.backgroundColor = "blue";
		} else {
			this.style.backgroundColor = "red";
		}
	};

	el.addEventListener("click", cambioBackground);
})();

// Cambio il colore di sfondo di #box dopo un lasso di tempo con setTimeout()
(function() {
	var cambioBackground = function() {
		var el = document.querySelector("#box");
		el.style.backgroundColor = "blue";
	};

	setTimeout(cambioBackground, 3000);
})();

// Eseguo piu' volte la stessa funzione con piu' richiami di setTimeout() con delle ripetizioni
(function() {
	var durata = 3000,
		ripetizione = function() {
			console.log("Eseguito setTimeout().");

			//Richiamo setTimeout()
			setTimeout(ripetizione, durata);
		};

	//Imposto un intervallo
	setTimeout(ripetizione, durata);
})();

// Limito l'esecuzione ripetuta di setTimeout() creando una variabile di controllo
(function() {
	var durata = 1000,
		i = 0,
		ripetizione = function() {
			console.log("Eseguito setTimeout() " + (i + 1) + " volte.");
			i++;

			if (i < 10) {
				//Richiamo setTimeout()
				setTimeout(ripetizione, durata);
			}
		};

	//Imposto un intervallo
	setTimeout(ripetizione, durata);
})();

// Creo delle ripetizioni con codice piu' semplice con setInterval()
(function() {
	var durata = 1000,
		ripetizione = function() {
			console.log("Eseguito setInterval()");
		};

	//Imposto un intervallo
	setInterval(ripetizione, durata);
})();

// Interrompo la ripetizione di setInterval() con clearInterval()
(function() {
	var durata = 1000,
		ripetizione = function() {
			console.log("Eseguito setInterval()");
			clearInterval(intervallo);
		};

	//Imposto un intervallo
	var intervallo = setInterval(ripetizione, durata);
})();

// Interrompo la ripetizione di setInterval() dopo un determinato numero di volte
(function() {
	var durata = 1000,
		i = 0,
		ripetizione = function() {
			console.log("Eseguito setInterval()");
			i++;

			if (i > 9) {
				clearInterval(intervallo);
			}
		};

	//Imposto un intervallo
	var intervallo = setInterval(ripetizione, durata);
})();

// Animo l'elemento HTML selezionato
(function() {
	var vel = 10, //Imposto Velocita'
		spostaElemento = function() {
			var el = document.querySelector("#box"),
				left = el.offsetLeft, //Distanza Sinistra
				spostamento = 3;

			el.style.left = left + spostamento + "px";

			if (left > 399) {
				clearInterval(intervallo);
			}
		};

	//Imposto un intervallo
	var intervallo = setInterval(spostaElemento, vel);
})();
