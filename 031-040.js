// JS祭 031-040

// Q031 本棚選び//////
console.log("// Q031--本棚選び//////");
function canStoreBooks(s) {
	const bk = s.split(" ");
	if (bk[0] <= bk[1] * bk[2]) { return "OK" } else { return "NG" };
}

console.log(canStoreBooks('400 5 85'));    // OK
console.log(canStoreBooks('500 4 70'));    // NG


// Q032 試合の回数//////
console.log("// Q032--試合の回数//////");
function calculateNumberOfGames(n) {
	return (n * (n - 1)) / 2;
}

console.log(calculateNumberOfGames(4));    // 6
console.log(calculateNumberOfGames(10));    // 45


// Q033 連休の天気//////
console.log("// Q033--連休の天気//////");
function daysOfGoOut(s) {

}

console.log(daysOfGoOut('13 0 15 30 89 100 30'));    // 5
console.log(daysOfGoOut('0 14 18 22 0 2 4'));    // 7
console.log(daysOfGoOut('99 99 99 99 99 99 99'));    // 0


// Q034 正三角形かどうか/////
console.log("// Q034--正三角形かどうか//////");
function isEquilateralTriangle(s) {

}

console.log(isEquilateralTriangle('10 10 10'));    // yes
console.log(isEquilateralTriangle('3 4 5'));    // No


// Q035 天気の表示//////
console.log("// Q035--天気の表示//////");
function showWeather(n) {

}

console.log(showWeather(31));    // cloudy
console.log(showWeather(2));    // sunny
console.log(showWeather(71));    // rainy


// Q036 はじめまして//////
console.log("// Q036--はじめまして///////");
function greet(s1, s2) {

}

console.log(greet('Stroheim', 'M'));    // Hi, Mr.Stroheim
console.log(greet('Trish', 'F'));    // Hi, Ms.Trish


// Q037 通知票//////
console.log("// Q037--通知票///////");
function convertNumberToAlphabet(s) {

}

console.log(convertNumberToAlphabet('53342'));    // ACCBD
console.log(convertNumberToAlphabet('22222'));    // DDDDD
console.log(convertNumberToAlphabet('51111'));    // AEEEE


// Q038 不思議なタマゴ//////
console.log("// Q038--不思議なタマゴ//////");
function getNumberOfSteps(s) {

}

console.log(getNumberOfSteps('1 2 5'));    // 5
console.log(getNumberOfSteps('2 5 5'));    // 5
console.log(getNumberOfSteps('1 2 1'));    // 2


// Q039 台風の間隔//////
console.log("// Q039--台風の間隔//////");
function getInterval(s) {

}

console.log(getInterval('5 8 19 25 31'));    // 3 11 6 6
console.log(getInterval('2 3 7 9 28'));    // 1 4 2 19


// Q040 ◯◯の秋//////
console.log("// Q040--◯◯の秋//////");
function getAutumn(s) {

}

console.log(getAutumn('codenoaki'));    // code
console.log(getAutumn('dokusyo'));    // dokusyo
console.log(getAutumn('javascriptnoaki'));    // javascript
