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
