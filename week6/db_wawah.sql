CREATE TABLE public.kategori_barang
(	id SERIAL PRIMARY KEY,
    nama_kategori VARCHAR(255) NOT NULL
);

CREATE TABLE public.barang (
    id SERIAL PRIMARY KEY,
    nama_barang VARCHAR(255) NOT NULL,
    harga_barang DECIMAL(10, 2) NOT NULL,
    stok INT NOT NULL,
    keterangan TEXT,
    id_kategori INT REFERENCES kategori_barang(id)
);

SELECT * FROM kategori_barang;

INSERT INTO kategori_barang (nama_kategori)
VALUES ('Mainan Anak-anak'),
       ('Mainan Edukatif'),
       ('Mainan Elektronik'),
	   ('Mainan Anak Laki-laki'),
	   ('Mainan Anak Perempuan'),
	   ('Mainan Balita'),
	   ('Mainan Aktivitas Luar');

//Mengubah nama kategori dengan ID 1 menjadi "Mainan Anak"
UPDATE kategori_barang
SET nama_kategori = 'Mainan Anak'
WHERE id = 1;

//Mengubah nama kategori dengan ID 2 menjadi "Mainan Edukasi"
UPDATE kategori_barang
SET nama_kategori = 'Mainan Edukasi'
WHERE id = 2;

select * from barang;

INSERT INTO barang (nama_barang, harga_barang, stok, keterangan, id_kategori)
VALUES ('Mainan Robot', 150000, 10, 'Robot interaktif untuk anak-anak', 2);
INSERT INTO barang (nama_barang, harga_barang, stok, keterangan, id_kategori) 
VALUES 
    ('Hot Wheels Diecast Car', 120000, 100, 'Diecast car skala 1:64', 2),
    ('Puzzle 1000 Potongan', 75000, 40, 'Puzzle gambar alam dengan 1000 potongan', 3),
    ('RC Helicopter', 230000, 25, 'RC helicopter dengan remote control', 2),
    ('Board Game Settlers of Catan', 175000, 20, 'Board game strategi', 3),
    ('Teddy Bear Brown', 95000, 60, 'Boneka beruang warna coklat', 3),
    ('LEGO City Police Station', 132000, 10, 'Set Lego Polisi dengan stasiun polisi', 2),
    ('Barbie Ken Doll', 50000, 30, 'Boneka Ken untuk bermain Barbie', 3),
    ('Funko Pop! Harry Potter', 65000, 50, 'Figurine Funko Pop Harry Potter', 2),
    ('Jigsaw Puzzle Disney Princess', 200000, 15, 'Puzzle Disney Princess 500 potongan', 3),
    ('Remote Control Monster Truck', 250000, 12, 'RC monster truck skala besar', 2);

//Mengubah keterangan barang dengan ID 7 menjadi "Boneka Ken dengan pakaian berwarna biru":	
UPDATE barang 
SET keterangan = 'Boneka Ken dengan pakaian berwarna biru' 
WHERE id = 7;

//Mengurangi stok barang dengan ID 5 sebanyak 5 unit
UPDATE barang 
SET stok = stok - 5 
WHERE id = 5;

//Mengubah ID kategori barang dengan ID 2 menjadi 3
UPDATE barang 
SET id_kategori = 3 
WHERE id = 2;

//Mengubah nama barang dengan ID 3 menjadi "Robot Mainan"
UPDATE barang 
SET nama_barang = 'Robot Mainan' 
WHERE id = 3;

select * from barang;
