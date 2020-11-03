Website KIA
=================================================================================

.. contents:: **Daftar Isi**

Kenapa Menggunakan Ruby/Jekyll
---------------------------------------------------------------------------------

Ide dasarnya adalah membuat website dari kumpulan Markdown file. Syntax markdown
file ini sederhana. Selanjutnya markdown file ini dikonversi menjadinya html
oleh Jekyll. 

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

Sebelum mem-push data, terlebih dahulu pull data agar data tidak konflik. 

Post
---------------------------------------------------------------------------------

Ada 2 jenis konten yang bisa diupdate pada website ini, yaitu ``post`` dan
``pages``.  Jenis ``post`` adalah konten yang berseri dalam artian konten jenis
ini tidak hanya satu kali. Misalnya konten talim yang muncul secara berkala
misalnya bulanan.  Konten post juga memiliki tag/kategori.  Sedangkan jenis
``pages`` adalah konten yang muncul 1 kali saja. Pada bagian ini, akan dibahas
cara membuat postingan dengan katetori ``post``.

Untuk melakukan post, buatlah file markdown yang disimpan di folder _post.
File markdown tersebut harus disimpan dengan format:

::

        YYYY-MM-DD-short-title.md

Contoh isi file markdown adalah:

::

        ---
        layout: post-talim
        title: Ta'lim Muslimah Kesatu
        author: Nadia
        tag: "Ta'lim Muslimah"
        ---

        Tulislah konten web di sini. 

        ![](/assets/img/logo.jpeg)

Apabila postingannya memiliki gambar, maka bisa gambar disimpan di folder:

::

        /assets/img/

Kemudian gambar bisa disisipkan di dalam teks dengan cara:

::

        ![](/assets/img/logo.jpeg)

Setiap tulisan yang berupa post harus memiliki tag. Tag yang sudah dibuat untuk
website KIA ini adalah:

- Ta'lim Muslim
- Ta'lim Muslimah
- Lifehacks

Catatan:

- Untuk post di Ta'lim = pilih post-talim
- Selain itu pilih post

.. _`Ruby+Devkit`: https://rubyinstaller.org/downloads/

Pages
---------------------------------------------------------------------------------

Tulisan yang berupa ``pages`` disimpan di dalam folder ``pages``. Pada website
KIA ini, pages-nya terdiri dari:

- gallery.md
- grillen.md
- kalender.md
- pengajianGabungan.md
- seminar.md
- strukturOrganisasi.md
- tentangAachen
- tentangKIA

Contoh format markdown file-nya adalah:

::

        ---
        layout: default
        ---

        #### Gallery

        **Logo KIA**

        ![](img/logo.jpeg)

Gambar untuk tulisan berupa ``pages`` disimpan di folder ``/pages/img``. Cara
untuk menyisipkan gambar ke dalam teks adalah:

::

        ![](img/logo.jpeg)

Homepage
---------------------------------------------------------------------------------

Homepage disimpan di dalam file index.md. Format filenya adalah:

::

        ---
        layout: default
        title: Home
        ---

        **Kegiatan Selanjutnya**

        <img src="/assets/img/des2019.jpeg" width="500">

Gambar disisipkan sama seperti dengan pages. File gambar juga disimpan di folder
``assets/img``. Gambar juga disimpan dengan:

::

        ![](/assets/img/gambar.jpeg)

Tetapi syntax markdown di atas memiliki limitasi, yaitu ukuran gambar tidak
dapat diatur. Agar gambar bisa diatur, syntaxnya bisa mengikuti syntax html,
yaitu:

::

        <img src="/assets/img/des2019.jpeg" width="500">

Markdown 
---------------------------------------------------------------------------------

Markdown adalah *simple mark-up language*. Syntax dasarnya dapat dibaca di `cheatsheet`_

.. _`cheatsheet`: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet> 

