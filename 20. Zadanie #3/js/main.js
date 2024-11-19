const passLength = 10;

// WYMOGI:
// Bardzo dobre hasło ma > 10 znaków.
// Dobre hasło ma 5-10 znaków.
// Słabe hasło ma < 5 znaków.

// Instrukcja warunkowa (IF, ELSE IF oraz ELSE)
if (passLength > 10) {
	console.log("Masz bardzo dobre hasło!");
} else if(passLength >= 5 && passLength <= 10){
	console.log("Masz dobre hasło");
} else {
	console.log("Masz słabe hasło...");
}
console.log("------------");

// Tablica
const numbers = [1, 2, 3, 4, 5, 6];

// Pętla FOR
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}
console.log("------------");

// Funkcja
function test(x, y, z) {
	console.log(x + y * z);
}

test(1, 2, 3);
console.log("------------");

// Instrukcja warunkowa (IF oraz ELSE)
if (numbers.length > 5) {
	console.log("TRUE");
} else {
	console.log("FALSE");
}