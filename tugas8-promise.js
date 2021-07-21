// di file promise.js
function readBooksPromise (time, book) {
  console.log(`saya mulai membaca ${book.name}`)
  return new Promise( function (resolve, reject){
    setTimeout(function(){
      let sisaWaktu = time - book.timeSpent
      if(sisaWaktu >= 0 ){
          console.log(`saya sudah selesai membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
          resolve(sisaWaktu)
      } else {
          console.log(`saya sudah tidak punya waktu untuk baca ${book.name}`)
          reject(sisaWaktu)
      }
    }, book.timeSpent)
  })
}
 
module.exports = readBooksPromise

/*Soal No. 2 (Promise Baca Buku)
Setelah no.1 berhasil, implementasikan function readBooks yang menggunakan callback di atas namun sekarang menggunakan Promise. 
Buatlah sebuah file dengan nama promise.js. Tulislah sebuah function dengan nama readBooksPromise yang me-return sebuah promise 
seperti berikut:

Masih di folder yang sama dengan promise.js, buatlah sebuah file dengan nama index2.js. Tuliskan code sebagai berikut.

Lakukan hal yang sama dengan soal no.1, habiskan waktu selama 10000 ms (10 detik) untuk membaca semua buku dalam array books.!

Jika sudah selesai dikerjakan, silahkan push hasil pekerjaan Anda ke repository Gitlab masing-masing 
(gunakan repository project yang sama yang digunakan pada Tugas 1). Jangan lupa submit link commit Anda ke sanbercode.com.*/

