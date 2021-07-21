/*Petunjuk :
 
Untuk mengumpulkan quiz essay akan digunakan gitlab sebagai pegumpulannya
Kerjakan soalnya lalu submit folder dan beri nama QuizWeek1 di dalam folder tersebut berisi tentang quiz.js
Gunakan directory IMRN0720 yang sama saat membuat tugas dan jangan lupa tandai trainner @Achhilmy di akun gitlab
Submit jawaban quiz week 1 yang essay ke sanbercode.com
Selamat belajar dan semoga sukses
===============happy coding ===================


// Balik String (10 poin)
 
Soal 1
 
 Diketahui sebuah function balikString yang menerima satu buah parameter berupa tipe data string.
 Function balikString akan mengembalikan sebuah string baru yang merupakan string kebalikan dari parameter yang diberikan.
contoh: balikString("Javascript") akan me-return string "tpircsavaJ", balikString("satu") akan me-return string "utas", dst.
 
 NB: TIDAK DIPERBOLEHKAN menggunakan built-in function Javascript seperti .split(), .join(), .reverse() .
Hanya boleh gunakan looping.
 
// TEST CASES BalikString
console.log(balikString("abcde")) // edcba
console.log(balikString("rusak")) // kasur
console.log(balikString("racecar")) // racecar
console.log(balikString("haji")) // ijah*/
 
 function balikString(str) {
    
    var StringBaru = "";
 
    for (var i = str.length - 1; i >= 0; i--){ 
        StringBaru += str[i]; 
    }
    return StringBaru; 
}
 

balikString("abcde"); // edcba
balikString("rusak"); // kasur
balikString("racecar"); // racecar
balikString("haji"); // ijah

 
/*Palindrome (10 poin)
 
Buatlah sebuah function dengan nama palindrome() yang menerima sebuah parameter berupa String.
Function tersebut mengecek apakah string tersebut merupakan sebuah palindrome atau bukan.
Palindrome yaitu sebuah kata atau kalimat yang jika dibalik akan memberikan kata atau kalimat yang sama.
Function akan me-return tipe data boolean:  true jika string merupakan palindrome, dan false jika string bukan palindrome.
 
NB: TIDAK DIPERBOLEHKAN menggunakan built-in function Javascript seperti .split(), .join(), .reverse() .
Hanya boleh gunakan looping.
 
// TEST CASES Palindrome
console.log(palindrome("kasur rusak")) // true
console.log(palindrome("haji ijah")) // true
console.log(palindrome("nabasan")) // false
console.log(palindrome("nababan")) // true
console.log(palindrome("jakarta")) // false*/
 
 
function palindrome(palin) {

 var re = /[^A-Za-z0-9]/g; 
 palin = palin.toLowerCase().replace(re, '');


 var len = palin.length; 
 
 for (var v = 0; v < len/2; v++) {
   if (palin[v] !== palin[len - 1 - v]) { 
       return false; 
   }
 }
 return true; 
}

palindrome("kasur rusak");
palindrome("haji ijah");
palindrome("nabasan");
palindrome("nababan");
palindrome("jakarta");
 
/*Bandingkan Angka (15 poin)
 
Buatlah sebuah function dengan nama bandingkan() yang menerima sebuah parameter berupa number
dan bilangan asli (positif). Jika salah satu atau kedua paramater merupakan bilangan negatif
maka function akan mereturn -1. Function tersebut membandingkan kedua parameter
dan mereturn angka yang lebih besar di antara keduanya. Jika kedua parameter sama besar
maka function akan mereturn nilai -1.
 
 
// TEST CASES Bandingkan Angka
console.log(bandingkan(10, 15)); // 15
console.log(bandingkan(12, 12)); // -1
console.log(bandingkan(-1, 10)); // -1
console.log(bandingkan(112, 121));// 121
console.log(bandingkan(1)); // 1
console.log(bandingkan()); // -1
console.log(bandingkan("15", "18")) // 18*/


function bandingkan(angka1, angka2) {

var multiply = angka1 * angka2;
var final = Math.abs(multiply);
var kalomin = -1;
var terbesar = Math.max(angka1, angka2);

if (final < 0) {
	console.log(kalomin);
}
else if (final > 0) {
	console.log(terbesar);
}
}

bandingkan(10, 15); // 15
bandingkan(12, 12); // -1
bandingkan(-1, 10); // -1
bandingkan(112, 121);// 121
bandingkan(1); // 1
bandingkan(); // -1
bandingkan("15", "18"); // 18*/
 
/*Descending Ten (15 poin)
 
Function DescendingTen adalah kebalikan dari function AscendingTen.
Output yang diharapkan adalah deretan angka dimulai dari angka parameter hingga 10 angka di bawahnya.
Function akan mengembalikan nilai -1 jika tidak ada parameter yang diberikan.
 
contoh:
console.log(DescendingTen(10)) akan menampilkan 10 9 8 7 6 5 4 3 2 1
console.log(DescendingTen(20)) akan menampilkan 20 19 18 17 16 15 14 13 12 11
 
Hint: Deretan angka yang menjadi output adalah dalam tipe data String, bukan Number.
 
// TEST CASES Descending Ten
console.log(DescendingTen(100)) // 100 99 98 97 96 95 94 93 92 91
console.log(DescendingTen(10)) // 10 9 8 7 6 5 4 3 2 1
console.log(DescendingTen()) // -1*/

function DescendingTen(input){

	var hasilll = '';
	var blmdiinput = -1;
	var perbandingan = Boolean(input);
	var minsepuluh = input - 10;

	for (var n = input; n >= minsepuluh; n--) {
		if (perbandingan == false) {
		console.log(blmdiinput);

	}
		return hasilll;
		console.log(hasilll);
	}
	

}

DescendingTen(100); // 100 99 98 97 96 95 94 93 92 91
DescendingTen(10); // 10 9 8 7 6 5 4 3 2 1
DescendingTen(); // -1*/




