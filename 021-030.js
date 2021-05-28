// JS祭 021-030

// Q021 nまでの和//////
// ある2以上の整数nが与えられます．
// 1からnまでの和を出力するgetSum()関数を作成してください．
console.log("// Q021--nまでの和//////");
function getSum(n) {
	return [...Array(n)].map((_, i) => i + 1).reduce((sum, element) => sum + element, 0);
}

// 配列名.reduce(コールバック関数(合計値の保管用, 要素の値), 初期値)

// アロー関数の書き方
// let 変数名 = function (引数1, 引数2, ...) {
// 実行される処理;
//   ...
// return 戻り値; };
// ↓↓↓
// let 変数名 = (引数1, 引数2, ...) => {
// 実行される処理;
//   ...
// return 戻り値; };

console.log(getSum(10));    // 55
console.log(getSum(99));    // 4950



// Q022 数字の桁数//////
// ある10進数の正の整数nが与えられます．
// nが何桁かを数字で出力するgetNumberOfDigits()関数を作成してください．
console.log("// Q022--数字の桁数//////");
function getNumberOfDigits(n) {
	return String(n).length;
}

// 数字を文字列に変換して長さを数える

console.log(getNumberOfDigits(100));    // 3
console.log(getNumberOfDigits(114514));    // 6



// Q023 サイコロの裏面//////
// 一般的な6面サイコロの目を表す整数nに対し，
// その裏側にある目を出力するgetBackSide()関数を作成してください．
console.log("// Q023--サイコロの裏面//////");
function getBackSide(n) {
	return 7 - n;
}

console.log(getBackSide(1));    // 6
console.log(getBackSide(3));    // 4



// Q024 単位の変換/////
// ある正の整数nが入力されます．
// n分から秒へ変換するconvertToSeconds()関数を作成してください．
console.log("// Q024--単位の変換//////");
function convertToSeconds(n) {
	return n * 60;
}

console.log(convertToSeconds(16));    // 960
console.log(convertToSeconds(3));    // 180



// Q025 充電時間//////
// 1分間で1 % の充電が可能なスマートフォンの充電器があります．
// 現在のスマートフォンのバッテリーの残量n % からこの充電器で100 % まで
// 充電するのに何分かかるかを求めるgetTimeUntilFull()関数を作成してください．
console.log("// Q025--充電時間//////");
function getTimeUntilFull(n) {
	return 100 - n;
}

console.log(getTimeUntilFull(70));    // 30
console.log(getTimeUntilFull(25));    // 75



// Q026 頭文字//////
// あなたは半角アルファベットの苗字と名前からそれぞれ1文字目を取りイニシャルを作ることにしました．
// 半角スペース区切りで苗字と名前が入力されるので，1文字目を取り "."(半角ドット)で区切った文字列を
// 出力するgetInitialFromName()関数を作成してください．
console.log("// Q026--頭文字///////");
function getInitialFromName(s) {
	const sName = s.split(" ");
	return sName[0].slice(0, 1) + "." + sName[1].slice(0, 1);
}

// .slice(開始位置, 終了位置) sliceは断片
// .splice(開始位置[, 削除カウント[, 追加要素1[, 追加要素2, ...]]]) spliceは繋ぎ合わせる

console.log(getInitialFromName('Dio Brando'));    // D.B
console.log(getInitialFromName('Pannacotta Fugo'));    // P.F
console.log(getInitialFromName('Gyro Zeppeli'));    // G.Z



// Q027 どれにしようかな//////
// あなたはレストランで何を注文しようか迷っています．
// しかしあまり時間がないので「どれにしようかな天の神様の言うとおり」で决めてしまいましょう．
// メニューの数nを入力し，選ばれた1からnまでの数の一つを出力するchoiceOfGod()関数を作成してください．
// 選ばれるメニューはこの文字数 21 を迷っているメニューの数で割れば求められます．
// ただし余りが 0 となるときはそのメニューの中で最後のものが選ばれることに注意しましょう．
console.log("// Q027--どれにしようかな///////");
function choiceOfGod(n) {
	if (21 % n == 0) {
		return n;
	} else {
		return 21 % n;
	};
}

console.log(choiceOfGod(4));    // 1
console.log(choiceOfGod(3));    // 3



// Q028 日付のデータ//////
// スペース区切りで西暦y，月m，日dが入力されます．
// /区切りで文字列として出力するformatYMD()関数を作成してください．
// ただし，西暦は4桁，月と日は2桁で出力しましょう．
console.log("// Q028--日付のデータ//////");
function formatYMD(s) {
	const ymd = (s.split(" "));
	return ('0000' + ymd[0]).slice(-4) + "/" +
		('00' + ymd[1]).slice(-2) + "/" +
		('00' + ymd[2]).slice(-2);
}

console.log(formatYMD('2021 1 1'));    // 2021/01/01
console.log(formatYMD('2020 10 10'));    // 2020/10/10
console.log(formatYMD('794 11 29'));    // 0794/11/29



// Q029 アットマーク//////
// 半角小文字アルファベットで構成された文字列sが入力されます．
// 文字列sの中に含まれるatという文字列を全て@(アットマークに) 置換して出力する
// convertAtToAtMark()関数を作成してください．
console.log("// Q029--アットマーク//////");
function convertAtToAtMark(s) {
	return s.replace(/at/g, "@");
}

console.log(convertAtToAtMark('gsatcodeatquantity'));    // gs@code@quantity
console.log(convertAtToAtMark('atatatjojoatatat'));    // @@@jojo@@@



// Q030 花粉症でつらい//////
// あなたは花粉症でティッシュを毎日使っては買いに行くのを繰り返していましたが，
// 必要なティッシュ箱の数を計算し一気に注文しようと考えました．
// ティッシュ1箱が空になるまでの期間をm日，残りの花粉症の季節をn日が入力されるので，
// 花粉症の季節が終わるまでに必要なティッシュ箱の数を求めるgetNeedBox()関数を作成してください．
console.log("// Q030--花粉症でつらい//////");
function getNeedBox(m, n) {
	return Math.ceil(n / m);
}

console.log(getNeedBox(7, 30));    // 5
console.log(getNeedBox(3, 100));    // 34
console.log(getNeedBox(7, 5));    // 1

