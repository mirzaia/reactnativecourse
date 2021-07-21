// di callback.js
function readBooks(time, book, callback ) {
    console.log(`saya membaca ${book.name}`)
    variabel = setTimeout(function(){
        let sisaWaktu = 0
        if(time > book.timeSpent) {
            sisaWaktu = time - book.timeSpent
            console.log(`saya sudah membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
            callback(sisaWaktu) //menjalankan function callback
        } else {
            console.log('waktu saya habis')
            callback(time)
        }   
    }, book.timeSpent)

    clearTimeout(variabel)

}
 
module.exports = readBooks 

/*Soal No. 1 (Callback Baca Buku)
Kita mempunyai tumpukan buku untuk dibaca. Setiap buku memiliki waktu yang dibutuhkan untuk menghabiskan buku tersebut. 
Sudah disediakan function readBooks yang menerima tiga parameter: waktu, buku yang dibaca, dan sebuah callback. 

Masih satu folder dengan file callback.js, buatlah sebuah file dengan nama index.js lalu tuliskan code seperti berikut. 
Salin code berikut ke dalam sebuah file bernama callback.js .

lanjutkan code pada index.js untuk memanggil function readBooks. Buku yang akan dihabiskan adalah buku-buku di dalam array books. 
Pertama function readBooks menerima input waktu yang dimiliki yaitu 10000 ms (10 detik) dan books pada indeks ke-0. 
Setelah mendapatkan callback sisa waktu yang dikirim lewat callback, sisa waktu tersebut dipakai untuk membaca buku pada indeks ke-1. 
Begitu seterusnya sampai waktu habis atau semua buku sudah terbaca. Untuk melihat output, jalankan file index.js dengan node js :

 $ node index.js*/