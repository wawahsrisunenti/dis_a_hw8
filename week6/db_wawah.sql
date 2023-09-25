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
