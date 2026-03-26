# Dokumentasi Presentasi: AplikasiPegawai

## 1. Pendahuluan
**AplikasiPegawai** adalah sebuah aplikasi web sederhana yang difungsikan sebagai sistem manajemen data pegawai. Aplikasi ini dibangun untuk mendemonstrasikan implementasi operasi dasar *Create, Read, Update, Delete* (CRUD) secara terintegrasi antara sistem *frontend* (antarmuka pengguna) dan *backend* (server).

## 2. Teknologi yang Digunakan
Aplikasi ini dikembangkan menggunakan *stack* teknologi modern untuk memastikan aplikasi berjalan dengan cepat, interaktif, dan responsif:

*   **Node.js (Backend)**: Berperan sebagai server aplikasi dan penyedia API (*Application Programming Interface*). Node.js menggunakan *framework* Express.js untuk menangani setiap permintaan data (seperti menyimpan atau menghapus data) dari *frontend*.
*   **Database In-Memory**: Data pegawai disimpan sementara di dalam memori saat server berjalan, menjadikannya sangat ringan untuk keperluan demonstrasi tanpa harus mengonfigurasi perangkat lunak database tambahan seperti MySQL.
*   **Bootstrap 5 (Frontend - Desain UI)**: Digunakan untuk mendesain tata letak halaman yang modern, rapi, dan **responsif** (otomatis menyesuaikan diri baik saat dibuka di komputer desktop maupun di layar kecil ponsel pintar).
*   **jQuery & AJAX**: Pustaka JavaScript ringan yang memungkinkan aplikasi berinteraksi dengan server di latar belakang (tanpa perlu memuat ulang seluruh halaman saat menyimpan atau menghapus data).
*   **jQuery DataTables**: *Plugin* canggih dari jQuery yang mengubah tabel HTML biasa menjadi tabel interaktif yang mendukung pencarian, pengurutan, penomoran halaman otomatis, dan menampilkan data langsung melalui format JSON.

## 3. Fitur Utama (CRUD)
Aplikasi ini memiliki 3 halaman utama yang memfasilitasi 4 operasi inti dari sistem data (CRUD):

*   **Beranda (`index.html`)**: Halaman ucapan selamat datang yang berisi navigasi utama.
*   **Tabel Data (`table.html`) - (READ & DELETE)**: Menampilkan seluruh data pegawai ke dalam tabel DataTables yang canggih secara responsif. Data diambil dari server Node.js dalam format **JSON**. Pengguna juga dapat menekan tombol **Hapus** pada baris untuk langsung menghapus data.
*   **Formulir Pegawai (`form.html`) - (CREATE & UPDATE)**: Halaman yang berisi formulir dinamis untuk menambah data pegawai baru. Formulir ini secara cerdas digunakan ulang; jika ditekan melalui tombol "Edit" pada tabel, form ini otomatis mengambil data yang sudah ada untuk diperbarui (di-edit).

## 4. Alur Kerja Aplikasi (Cara Kerja)
1.  **Menampilkan Data**: Saat pengguna masuk ke halaman **Tabel Data**, *frontend* (DataTables) segera mengirim *request* HTTP (GET) otomatis ke server (`/api/employees`). Node.js merespons dengan mengirim koleksi data pegawai dalam bentuk JSON. DataTables kemudian menyusun JSON tersebut menjadi tabel yang cantik.
2.  **Menambah/Mengedit Data**: Pengguna mengisi form pada halaman **Tambah Baru**. Saat disubmit, kode jQuery mengambil data form dan mengirimkannya utuh dalam paket JSON ke server melalui AJAX (POST untuk menambah, PUT untuk mengedit). Server mencatatnya di memori, dan mengembalikan status berhasil, mengarahkan pengguna kembali ke tabel.
3.  **Menghapus Data**: Menekan tombol hapus akan memicu *prompt* kepastian *browser*. Jika disetujui, perintah DELETE dikirim ke server.

## 5. Kesimpulan
AplikasiPegawai membuktikan bahwa memadukan Node.js di sisi server dengan antarmuka dinamis modern seperti Bootstrap, AJAX, dan jQuery DataTables mampu menghasilkan aplikasi web satu pengalaman penuh (*fullstack*) yang cepat, ringan, estetik, dan responsif di segala perangkat genggam.
