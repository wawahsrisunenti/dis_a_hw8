// soal1.js

const geometry = require('./modGeometry');

const sisiPersegi = 5;
console.log(`Luas Persegi dengan sisi ${sisiPersegi} adalah ${geometry.hitungLuasPersegi(sisiPersegi)}`);
console.log(`Keliling Persegi dengan sisi ${sisiPersegi} adalah ${geometry.hitungKelilingPersegi(sisiPersegi)}`);

const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 4;
console.log(`Luas Persegi Panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang} adalah ${geometry.hitungLuasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
console.log(`Keliling Persegi Panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang} adalah ${geometry.hitungKelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
