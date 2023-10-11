/* homework Wawah Sri Sunenti, FSWD5B, PLB */
//variabel yang diperlukan ialah
var suhu = 69;
var jenisKendaraan = "motor";
var ccMobil = 1543;

// pengimplementasian Logika
var hasil = "";

if (suhu >= -100 && suhu <= 0) {
  hasil = "Air berada dalam bentuk beku";
} else if (suhu >= 1 && suhu <= 100) {
  hasil = "Air berada dalam bentuk cair";
} else if (suhu >= 101 && suhu <= 500) {
  hasil = "Air berada dalam bentuk uap";
} else {
  hasil = "Suhu air tidak terdefinisi";
}

if (jenisKendaraan === "plat kuning" || jenisKendaraan === "motor") {
  hasil += ", BBM subsidi";
} else if (ccMobil < 1500) {
  hasil += ", PERTAMAX";
} else {
  hasil += ", PERTAMAX Turbo";
}

console.log(hasil);
