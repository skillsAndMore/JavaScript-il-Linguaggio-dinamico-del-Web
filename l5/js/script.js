text = "Ciao Mama!";
num = 18;

// Controllo il tipo di valore contenuto nelle variabili
console.log(typeof text); //Restituisce "string"
console.log(typeof num); //Restituisce "number"

// Creo un alert se il tipo di valore contenuto in text e' una stringa
if (typeof text == "string") alert(text + " e' una stringa.");

var raggio = 2;

// Creo una funzione che mi triplica l'area di un cerchio
function triplaArea(r) {
	var tripla;
	// Controllo che il valore passato sia di tipo numerico
	if (typeof r == "number") {
		var area = Math.pow(r, 2) * Math.PI;
		var tripla = area * 3;
	} else {
		// Se non e' numerico mostro un alert
		alert("Non hai inserito un valore numerico, correggi e aggiorna.");
	}

	return tripla;
}

console.log(triplaArea(raggio));

var num = 3;

// Creo una funzione che mi indica se il numero passato e' pari o dispari
function conosciNum(n) {
	// Controllo che sia un valore di tipo numerico
	if (typeof n == "number") {
		//   controllo il modulo se il numero e' pari
		if (n % 2 == 0) {
			alert("Il numero passato è pari.");
		} else if (n % 2 != 0) {
			// In alternativa controllo se e' dispari
			alert("Il numero passato è dispari.");
		}
	} else {
		// Se il parametro passato non e' di valore numerico mostro un alert
		alert("Non mi hai passato alcun numero.");
	}
}

conosciNum(num);
