// TUGAS CONDITIONAL

// SOAL 1 - IF ELSE
var soal1 = 'SOAL 1 - IF ELSE';
var namapemain = 'Derrick';
var peran = '';
var linebreak = ' ';

console.log(linebreak);
console.log(soal1);
if (namapemain == '' & peran == '') {
	console.log('Nama dan peran harus diisi!')
}
else if (namapemain == 'Derrick' & peran == '') {
	console.log('Halo' + ' ' + namapemain + ',' + ' ' + 'Pilih peranmu untuk memulai game!')
}
else if (namapemain == 'Susan' & peran == 'Penyihir') {
	console.log('Selamat datang di Dunia Werewolf,' + ' ' + namapemain)
	console.log('Halo penyihir' + ' ' + namapemain + ',' + 'kamu dapat melihat siapa yang menjadi werewolf!')
}
else if (namapemain == 'Julia' & peran == 'Guard') {
	console.log('Selamat datang di Dunia Werewolf,' + ' ' + namapemain)
	console.log('Halo Guard' + ' ' + namapemain + ',' + 'kamu akan membantu melindungi temanmu dari serangan werewolf.')
}
else if (namapemain == 'Joko' & peran == 'Werewolf') {
	console.log('Selamat datang di Dunia Werewolf,' + ' ' + namapemain)
	console.log('Halo Werewolf' + ' ' + namapemain + ',' + 'kamu akan makan mangsa tiap malam!')
}
console.log(linebreak);

// SOAL 2 - SWITCH CASE
var soal2 = 'SOAL 2 - SWITCH CASE';
var tanggal = 21;
var bulan = 5;
var tahun = 1945;

console.log(soal2);
if (tanggal >= 31) {
	console.log('Tanggal tidak valid')
}
else if (bulan >= 12){
	console.log('Bulan tidak valid')
}
else if (tahun <= 0) {
	console.log('Tahun tidak valid')
}
else if (tanggal == '') {
	console.log('Tanggal tidak boleh kosong')
}
else if (bulan == ''){
	console.log('Bulan tidak boleh kosong')
}
else if (tahun == '') {
	console.log('Tahun tidak boleh kosong')
}
else {
	console.log(tanggal);
	switch(bulan){
	case 1: {console.log('Januari'); break;}
	case 2: {console.log('Februari'); break;}
	case 3: {console.log('Maret'); break;}
	case 4: {console.log('April'); break;}
	case 5: {console.log('Mei'); break;}
	case 6: {console.log('Juni'); break;}
	case 7: {console.log('Juli'); break;}
	case 8: {console.log('Agustus'); break;}
	case 9: {console.log('September'); break;}
	case 10: {console.log('Oktober'); break;}
	case 11: {console.log('November'); break;}
	case 12: {console.log('Desember'); break;}
	default: {console.log('tanggal tidak valid'); break}}
	console.log(tahun);

}
console.log(linebreak);




