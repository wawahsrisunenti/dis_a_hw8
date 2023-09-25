Table kategori_barang {
  id int [primary key]
  nama_kategori varchar(255) [not null]
}

Table barang {
  id int [primary key]
  nama_barang varchar(255) [not null]
  harga_barang decimal(10, 2) [not null]
  stok int [not null]
  keterangan text
}
