// JS祭 011-020

// Q011 カウントダウン//////
console.log("// Q011--カウントダウン//////");
function countDown(n) {
	return [...new Array(n).keys()].map(x => (x + 1)).reverse().join('🍺');
}

console.log(countDown(3));     // 3 2 1
console.log(countDown(10));    // 10 9 8 7 6 5 4 3 2 1


// Q012 N文字目まで出力//////
console.log("// Q012--N文字目まで出力//////");
function getOneToN(s, n) {
	return s.split('').splice(0, n).join('');
}

console.log(getOneToN('aabbccdd', 5));    // aabbc
console.log(getOneToN('gsacademyfukuoka', 9));    // gsacademy


// Q013 最大と最小//////
console.log("// Q013--最大と最小//////");
function getMaxAndMin(s) {
	const mam = Array.from(s.split(/\s+/));
	return Math.max(...mam) + ' ' + Math.min(...mam);
}

console.log(getMaxAndMin('9 12 3 6 10'));    // 12 3
console.log(getMaxAndMin('1 1 2 2 3'));    // 3 1
console.log(getMaxAndMin('5 9 -1 10 2'));    // 10 -1


// Q014 文字列からN番目/////
console.log("// Q014--文字列からN番目//////");
function getNthChar(s, n) {
	return s.split('').splice(n - 1, 1).join('');
}

console.log(getNthChar('gsacademy', 3));    // a
console.log(getNthChar('abcdefg', 5));    // e
console.log(getNthChar('qwertyu', 1));    // q


// Q015 文字列の一致//////
console.log("// Q015--文字列の一致//////");
function isEqual(s, t) {
	if (s === t) {
		return 'Yes'
	} else { return 'No' };
}

console.log(isEqual('gsacademy', 'gsacademy'));    // Yes
console.log(isEqual('JavaScript', 'ジャバスク'));    // No
console.log(isEqual('aaaaa', 'aaaaaa'));    // No


// Q016 Aの個数//////
console.log("// Q016--Aの個数///////");
function getNumberOfA(s) {
	return (s.match(/A/g) || []).length;
}

console.log(getNumberOfA('GSACADEMY'));    // 2
console.log(getNumberOfA('aAaAaA'));    // 3
console.log(getNumberOfA('JavaScript'));    // 0


// Q017 表面積の計算//////
console.log("// Q017--表面積の計算///////");
function getSurfaceArea(a) {
	return a ** 2 * 6;
}

console.log(getSurfaceArea(4));    // 96
console.log(getSurfaceArea(1));    // 6


// Q018 三角形の内角の和//////
console.log("// Q018--三角形の内角の和//////");
function getAngle(a, b) {
	return 180 - a - b;
}

console.log(getAngle(30, 90));    // 60
console.log(getAngle(45, 45));    // 90


// Q019 数字の出力//////
console.log("// Q019--数字の出力//////");
function zeroPadding3(n) {
	return ('000' + n).slice(-3);
}

console.log(zeroPadding3(98));    // 098
console.log(zeroPadding3(2));    // 002


// Q020 一週間の予定//////
console.log("// Q020--一週間の予定//////");
function getPaidHolidays(s) {
	return (s.match(/no/g) || []).length;
}

console.log(getPaidHolidays('yes yes yes yes no no yes'));    // 2
console.log(getPaidHolidays('yes no no no no no yes'));    // 5
