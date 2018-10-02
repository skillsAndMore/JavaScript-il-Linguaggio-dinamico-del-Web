// Dichiarazione variabili con operazioni
var somma = 1 + 3, // 4
	sottrazione = somma - 2, // 2
	moltiplicazione = somma * 2, // 8
	divisione = moltiplicazione / 4; // 2

// Mostro i risultati delle operazioni precedenti
alert(somma);
alert(sottrazione);
alert(moltiplicazione);
alert(divisione);

// Calcolo area cerchio
var piGreco = 3.141592653589793,
	raggio = 2;

function calcolaArea(r) {
	return Math.pow(r, 2) * piGreco;
}

var area = calcolaArea(raggio);

console.log(area);

// Mostro valore area in alert
function mostroArea(a) {
	alert(Math.round(a * 3));
}

mostroArea(area);
