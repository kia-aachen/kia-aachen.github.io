Website KIA
=================================================================================

.. contents:: **Daftar Isi**

Alamat Web
---------------------------------------------------------------------------------

Alamat web KIA adalah:

::

        https://aachen-kia.de


Kenapa Menggunakan Ruby/Jekyll
---------------------------------------------------------------------------------

Ide dasarnya adalah membuat website dari kumpulan Markdown file. Markdown adalah
sebuah tool untuk mengkonversi text ke HTML. Markdown pertama kalinya dibuat
oleh `John Gruber`_. Syntax Markdown ini sederhana sehingga bisa dengan mudah
diikuti oleh orang awam sekalipun. Markdown dapat dibuka oleh text editor pada
umumnya. Misalnya Notepad, Visual studio code, dan Vim. 

Selanjutnya markdown file ini dikonversi menjadinya html oleh `Jekyll`_. Jekyll
tidak memerlukan database sehingga sebenarnya lebih sederhana. Selain itu
design web bisa dibuat sesuai dengan keinginan user. Website KIA ini didesain
dengan menggunakan `Bootstrap`_. 


.. _`John Gruber`: https://daringfireball.net/projects/markdown/
.. _`Jekyll`: https://jekyllrb.com/
.. _`Bootstrap`: https://getbootstrap.com/

Markdown 
---------------------------------------------------------------------------------

Markdown adalah *simple mark-up language*. Syntax dasarnya dapat dibaca di `cheatsheet`_. 

.. _`cheatsheet`: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

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

Web-dev-kia adalah repo untuk editing web misalnya pengaturan template dan konten web. 

- kia-aachen.github.io

Repo kia-aachen.github.io merupakan hasil compile oleh jekyll yang berupa html. Di
lokal folder, repo kia-aachen.github.io adalah folder ``_site``.

Untuk menjalakan web pertama kalinya:

1. Cone terlebih dahulu ``web-dev-kia`` dari akun github kia. 
2. Kemudian bukalah command prompt/git bash pada folder ``web-dev-kia`` dan jalankan: 

::

        jekyll serve

3. Hasil compile akan muncul di folder ``_site``. Folder ini diignore (lihat
   .gitignore) di repo ``web-dev-kia`` karena akan dijadikan git repo.  Folder
   ``_site`` ini selanjutnya dijadikan git repo dengan cara:

::

        $ git init
        $ git remote add origin git@github.com:kia-aachen/kia-aachen.github.io.git

Agar post terbaru dapat muncul di website, maka data di repo _site harus dipush
ke remote. Cara push data adalah:

::

        $ git add .
        $ git commit -m "isi pesan"
        $ git push origin master

Catatan:

Sebelum mem-push data atau update data, terlebih dahulu pull data di folder
``web-dev-kia`` agar data tidak konflik. Cara pull data adalah:

::

        $ git pull origin master

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


Setiap tulisan yang berupa post harus memiliki tag. Tag yang sudah dibuat untuk
website KIA ini adalah:

- Ta'lim Muslim
- Ta'lim Muslimah
- Lifehacks

Catatan:

- Untuk post di Ta'lim = pilih post-talim
- Selain itu pilih post


Referensi:

- `Jekyll: posts`_

.. _`Ruby+Devkit`: https://rubyinstaller.org/downloads/
.. _`Jekyll: posts`: https://jekyllrb.com/docs/posts/

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
- tentangAachen.md
- tentangKIA.md

Contoh format markdown file-nya adalah:

::

        ---
        layout: default
        ---

        #### Gallery

        **Logo KIA**

        ![](img/logo.jpeg)


Referensi:

- `Jekyll: pages`_


.. _`Jekyll: pages`: https://jekyllrb.com/docs/pages/



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


Insert Gambar
---------------------------------------------------------------------------------

Ada 2 tempat penyimpanan gambar yang bergantung pada jenis tulisan. 

- post

::

        /assets/img/

- pages

::

        /pages/img

Kemudian gambar bisa disisipkan di dalam teks dengan cara:

::

        ![](/assets/img/logo.jpeg)

Tetapi syntax markdown di atas memiliki limitasi, yaitu ukuran gambar tidak
dapat diatur. Agar gambar bisa diatur, syntaxnya bisa mengikuti syntax html,
yaitu:

::

        <img src="/assets/img/des2019.jpeg" width="500">

Syntax di atas merupakan syntax dasar. Agar gambar juga bisa responsive sehingga
bisa dibuka di layar dengan ukuran yang berbeda-beda. Maka bisa mengikuti syntax
bootstrap sebagai berikut:

::

        <div class="col-sm-10">
                <figure>
                        <img src="/assets/img/des2019.jpeg" class="img-fluid img-thumbnail">
                </figure>
        </div>

Insert PDF
---------------------------------------------------------------------------------

PDF file disimpan di:

::

        /assets/pdf

Misalnya sebuah pdf file yang bernama contoh.pdf disimpan di folder
``/assets/pdf``. PDF tersebut dapat di-insert ke dalam teks sehingga bisa
didownload oleh pembaca. Cara insert-nya adalah:

::

        [download pdf di sini](/assets/pdf/contoh.pdf)

Dokumentasi Website KIA
---------------------------------------------------------------------------------

Dokumentasi KIA disimpan di README.rst. README.rst akan secara otomatis dirender
oleh github.com. Namun, untuk keperluan pembacaan secara lokal, user bisa
menggunakan text editor yang bernama `ReText`_. ReText bisa juga untuk
menampilkan Markdown file. Alternatif pembacaan lain adalah dengan mengkonversi
README.rst ke html dan pdf dengan cara:

::

        $ make all

Untuk menjalankan command make di atas, user harus menginstall 

- `Make`_
- `rst2html dan rst2pdf`_

Konversi ini bukan merupakan hal yang harus dilakukan dikarenakan pada dasarnya
README.rst dapat dirender oleh github. 

.. _`ReText`: https://github.com/retext-project/retext
.. _`Make`: https://github.com/yohanfs/Makefile
.. _`rst2html dan rst2pdf`: https://github.com/yohanfs/rst

Contributors
---------------------------------------------------------------------------------

- Yohan Fajar Sidik
- Muthia Aulawiyah
