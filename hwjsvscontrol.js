/* this is homework 4 by Wawah Sri Sunenti in week 4 js & version control*/
/* untuk mempersingkat waktu, dalam pembuatan 100 angka random saya menggunakan 
sebuah fungsi dimana Kode di atas membuat array dengan 100 nilai acak, membaginya 
menjadi array genap dan ganjil, dan kemudian menghitung min, max, total, dan rata-rata 
dari masing-masing array serta membandingkannya.*/


// Fungsi untuk menghasilkan angka acak antara 1 dan 50
    function bikinAngkaAcakYak() {
        return Math.floor(Math.random() * 50) + 1;
    }

// Membuat array dengan 100 nilai acak
    let randomArray = [];
        for (let i = 0; i < 100; i++) {
        randomArray.push(bikinAngkaAcakYak());
    }

// Membagi array menjadi array genap dan ganjil
    let evenArray = [];
    let oddArray = [];
        for (let i = 0; i < randomArray.length; i++) {
            if (i % 2 === 0) {
            evenArray.push(randomArray[i]);
            } else {
            oddArray.push(randomArray[i]);
        }
    }

// Fungsi untuk menghitung nilai minimum
    function findMin(arr) {
        let min = arr[0];
            for (let i = 1; i < arr.length; i++) {
             if (arr[i] < min) {
                min = arr[i];
                }
            }
        return min;
    }

// Fungsi untuk menghitung nilai maksimum
    function findMax(arr) {
        let max = arr[0];
            for (let i = 1; i < arr.length; i++) {
                 if (arr[i] > max) {
        max = arr[i];
    }
  }
  return max;
}

// Fungsi untuk menghitung total
    function calculateTotal(arr) {
      let total = 0;
        for (let i = 0; i < arr.length; i++) {
          total += arr[i];
        }
      return total;
    }

// Fungsi untuk menghitung rata-rata
    function calculateAverage(arr) {
  let total = calculateTotal(arr);
  return total / arr.length;
    }

// Menghitung min, max, total, dan rata-rata untuk array genap dan ganjil
    let minEven = findMin(evenArray);
    let maxEven = findMax(evenArray);
    let totalEven = calculateTotal(evenArray);
    let averageEven = calculateAverage(evenArray);

    let minOdd = findMin(oddArray);
    let maxOdd = findMax(oddArray);
    let totalOdd = calculateTotal(oddArray);
    let averageOdd = calculateAverage(oddArray);

// Menampilkan hasil
    console.log("Array dengan jumlah index 100:", randomArray);
    console.log("Array genap dengan jumlah index 50:", evenArray);
    console.log("Array ganjil dengan jumlah index 50:", oddArray);

    console.log("Min, Max, Total, Rata-rata pada array genap:");
    console.log("Min:", minEven);
    console.log("Max:", maxEven);
    console.log("Total:", totalEven);
    console.log("Rata-rata:", averageEven);

    console.log("Min, Max, Total, Rata-rata pada array ganjil:");
    console.log("Min:", minOdd);
    console.log("Max:", maxOdd);
    console.log("Total:", totalOdd);
    console.log("Rata-rata:", averageOdd);

// Membandingkan nilai min, max, total, dan rata-rata
  if (minEven > minOdd) {
    console.log("Min lebih besar pada array genap");
  } else if (minOdd > minEven) {
    console.log("Min lebih besar pada array ganjil");
  } else {
    console.log("Min memiliki nilai sama pada array genap dan ganjil");
  }

  if (maxEven > maxOdd) {
    console.log("Max lebih besar pada array genap");
  } else if (maxOdd > maxEven) {
    console.log("Max lebih besar pada array ganjil");
  } else {
    console.log("Max memiliki nilai sama pada array genap dan ganjil");
  }

  if (totalEven > totalOdd) {
    console.log("Total lebih besar pada array genap");
  } else if (totalOdd > totalEven) {
    console.log("Total lebih besar pada array ganjil");
  } else {
    console.log("Total memiliki nilai sama pada array genap dan ganjil");
  }

  if (averageEven > averageOdd) {
    console.log("Rata-rata lebih besar pada array genap");
  } else if (averageOdd > averageEven) {
    console.log("Rata-rata lebih besar pada array ganjil");
  } else {
    console.log("Rata-rata memiliki nilai sama pada array genap dan ganjil");
  }
