// function calc(borrowing,bonus,period,ir) {
// 	const test_value = document.getElementById('test').value = Math.floor(((borrowing - bonus)*10000) * (ir/100) / 12 *((1 +(ir/100) / 12) ** period *12)) / (((1 + (ir/100) / 12) ** (period *12)) - 1).toLocaleString();
// }

function PMT() {
	//parseFloat関数は文字列を数値に変換する関数
	var pv = parseFloat(document.loan.pv.value);
	var ir = parseFloat(document.loan.ir.value);
	var np = parseFloat(document.loan.np.value);
//「floor関数」は小数点以下の値を切り捨てた結果を返します。
//「pow関数」は1番目の引数を、2番目の引数で累乗した値を返します。
//「toLocaleString関数」で整数部分を3桁毎に区切り文字を挿入した形式で文字列に変換した結果を返します。（ロケールに応じたNumberクラスのオブジェクトの文字列表現を返します。）
return Math.floor((pv *10000 * (ir / 100 / 12) * (Math.pow(1 + (ir / 100 / 12), np))) / (Math.pow(1 + (ir / 100 / 12), np) -1)).toLocaleString();
}