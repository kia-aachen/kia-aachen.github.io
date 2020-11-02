Website KIA
=================================================================================

.. contents:: **Daftar Isi**

Menjalankan Website
---------------------------------------------------------------------------------

Install Jekyll
*********************************************************************************

Langkah-langkah untuk menginstall Jekyll:

- Download dan Install `Ruby+Devkit`_.
- Run ridk install kemudian tekan tombol Finish. 
  Selanjutnya akan muncul menu yang berisi 3 pilihan. 
  Pilih saja pilihan no 1 dan kemudian tekan Enter.
- Buka command prompt windows:
        - Install Jekyll dengan command berikut: gem install jekyll bundler.
        - Cek apakah jekyll sudah terinstall di komputer anda dengan command berikut: jekyll -v.

Run local
*********************************************************************************

Terdapat 2 buah repo di github kia untuk pengelolaan website ini, yaitu:
        
- web-dev-kia
- kia-aachen.github.io

Web-dev-kia adalah repo untuk editing web misalnya pengaturan template dan konten web. 
Sedangkan folder kia-aachen.github.io merupakan hasil compile oleh jekyll yang berupa html. 

Untuk menjalakan web yang pertama kalinya, clone terlebih dahulu web-dev-kia dari akun github kia. 
Kemudian bukalah command prompt dan jalankan: 

::

        jekyll serve

Hasil compile akan muncul di folder _site. Folder ini diignore (lihat .gitignore) di repo web-dev-kia. 
Folder _site ini selanjutnya dijadikan git repo dengan cara:

::

        $ git init
        $ git remote add origin git@github.com:kia-aachen/kia-aachen.github.io.git

Agar post terbaru dapat muncul di website, maka data di repo _site harus dipush ke remote. 

Catatan: 

Sebelum pull data ke repo _site, hapuslah semua data di folder tersebut. 
Hal ini untuk menghindari konflik data. Setelah itu generate lagi data. 

Post
---------------------------------------------------------------------------------

Tag List

1. Ta'lim Muslim
2. Ta'lim Muslimah
2. Lifehacks
3. Seminar
4. Halal

Untuk Post

1. Untuk post di Ta'lim = pilih post-talim
2. Selain itu pilih post

.. _`Ruby+Devkit`: https://rubyinstaller.org/downloads/
