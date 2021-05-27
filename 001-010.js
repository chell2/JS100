// JS祭 001-010

// Q001 数の比較//////
console.log("// Q001--数の比較//////");
function compareNumbers(a, b) {
	if (a > b) {
		return a;
	} else if (a < b) {
		return b;
	} else if (a = b) {  //=1つは代入、この場合は==2つの方がよさそう
		return "eq";
	};
};

console.log(compareNumbers(2, 5));    // 5
console.log(compareNumbers(10, 9));   // 10
console.log(compareNumbers(2, 2));    // eq


// Q002 単位の計算//////
console.log("// Q002--単位の計算//////");
function convertToMm(n, s) {
	if (s = "km") {
		x = n * 1000 * 100 * 10;
	} else if (s = "m") {
		x = n * 100 * 10;
	} else if (s = "cm") {
		x = n * 10            //このあたりの==とか;の要不要も注意
	};
	return x;
};

console.log(convertToMm(1, 'km'));    // 1000000
console.log(convertToMm(54, 'km'));   // 54000000
console.log(convertToMm(2, 'cm'));    // 20

// "なんでも配列にしまいたくなる女"さちさんの解答例
// function convertToMm(n, s) {
// 	var ss = ['km', 'm', 'cm', 'mm'];
// 	var mm = [1000000, 1000, 10, 1];
// 	var th = ss.indexOf(s);
// 	return n * mm[th];
// }


// Q003 奇数か偶数か//////
console.log("// Q003--奇数か偶数か//////");
function oddOrEven(n) {
	if ((n % 2) == 0) {
		return "even";
	} else if ((n % 2) > 0) {  //elseだけでもよかった！
		return "odd";
	};
};

console.log(oddOrEven(4));    // even
console.log(oddOrEven(5));    // odd
console.log(oddOrEven(2));    // even


// Q004 西暦の計算//////
console.log("// Q004--西暦の計算//////");
function calculateYears(a, b) {
	return (b - a);
};

console.log(calculateYears(1990, 2014));    // 24
console.log(calculateYears(1999, 2000));    // 1
console.log(calculateYears(794, 1192));    // 398


// Q005 何番目？//////
console.log("// Q005--何番目？//////");
function judgeTh(c) {
	const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const arr = Array.from(str);   //ここで配列の形にしなくても結果は同じだった。
	return (arr.indexOf(c) + 1);
};

console.log(judgeTh('C'));    // 3
console.log(judgeTh('X'));


// Q006 絶対値//////
console.log("// Q006--絶対値//////");
function getAbs(n) {
	return (Math.abs(n));
};

console.log(getAbs(-10));    // 10
console.log(getAbs(15));     // 15
console.log(getAbs(0));      // 0


// Q007 割り算//////
console.log("// Q007--割り算//////");
function getQuotientAndSurplus(m, n) {
	const M = Math.floor(m / n);
	const N = m % n;
	return M + "🍺" + N;
}

console.log(getQuotientAndSurplus(10, 3));    // 3 1
console.log(getQuotientAndSurplus(12, 14));    // 0 12


// Q008 小文字を大文字に//////
console.log("// Q008--小文字を大文字に//////");
function convertToUppercase(s) {
	return s.toUpperCase();
}

console.log(convertToUppercase('gsacademy'));    // GSACADEMY
console.log(convertToUppercase('abcdefghijklmnopqrstuvwxyz'));    // ABCDEFGHIJKLMNOPQRSTUVWXYZ


// Q009 掛け算のリスト//////
console.log("// Q009--掛け算のリスト//////");
function createList(n) {
	nums = [];
	for (i = 1; i < 10; i++) {
		nums.push(i);
	};
	var kakezan = nums.map(function (value) {
		return value * n;
	});
	return (kakezan.join('🍺'));
}

console.log(createList(2));    // 2 4 6 8 10 12 14 16 18
console.log(createList(3));    // 3 6 9 12 15 18 21 24 27
console.log(createList(5));    // 5 10 15 20 25 30 35 40 45

// たろう先生の解答例
// function createList(n) {
// 	return [...new Array(9).keys()].map(x => (x + 1) * n).join(' ');
// }


// Q010 等差数列//////
console.log("// Q010--等差数列//////");
function createSequence(m, n) {
	const beer = ([...Array(10)].map((_, i) => i)).map(x => x * n + m);
	return (beer.join('🍺'));
}

console.log(createSequence(3, 3));    // 3 6 9 12 15 18 21 24 27 30
console.log(createSequence(5, 10));    // 5 15 25 35 45 55 65 75 85 95
console.log(createSequence(1, 3));    // 1 4 7 10 13 16 19 22 25 28
