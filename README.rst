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

Pada dasarnya tidak banyak berbeda dengan menulis seperti biasanya dikarenakan
memang syntax markdown yang sederhana. Berikut ini contoh syntax yang akan
sering digunakan di website:

- Header

::

        # H1
        ## H2
        ### H3

- Lists

::

        1. contoh nomor 1
        2. contoh nomor 2

- Links

::

        [link ke website KIA](https://aachen-kia.de)

- Images

::

        ![](/assets/img/contoh.png){: .img-fluid .img-thumbnail}

Apabila syntax yang dikehendaki tidak bisa dilakukan oleh Markdown, maka bisa
langsung menggunakan html. 


.. _`cheatsheet`: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

Menjalankan Website Pertama Kalinya
---------------------------------------------------------------------------------

Untuk menjalankan website ini, hal yang harus dipersiapkan adalah:

- akun github masing-masing admin
- install jekyll

Akun github yang digunakan adalah akun github masing-masing admin. Akun github
tersebut harus diinvite sebagai *collaborators* oleh akun github KIA
(kia-aachen).  

Jekyll diperlukan untuk mengkonversi markdown ke html dan juga sebagai local
server. 


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

Run Local
*********************************************************************************

Terdapat 2 buah repo di github kia untuk pengelolaan website ini, yaitu:
        
- web-dev-kia

Web-dev-kia adalah repo untuk editing web misalnya pengaturan template dan konten web. 

- kia-aachen.github.io

Repo kia-aachen.github.io merupakan hasil compile oleh jekyll yang berupa html. Di
lokal folder, repo kia-aachen.github.io adalah folder ``_site``.

Untuk menjalakan web pertama kalinya:

1. Clone terlebih dahulu ``web-dev-kia`` dari akun github kia. 
2. Kemudian bukalah command prompt/git bash pada folder ``web-dev-kia`` dan jalankan: 

::

        jekyll serve

3. Hasil compile akan muncul di folder ``_site``. Folder ini diignore (lihat
   .gitignore) di repo ``web-dev-kia`` karena akan dijadikan git repo.  Folder
   ``_site`` ini selanjutnya dijadikan git repo dengan cara:

::

        $ git init
        $ git remote add origin git@github.com:kia-aachen/kia-aachen.github.io.git


Untuk melihat website bisa menuju ke browser dengan alamat:

::

        localhost:4000 

atau

::

        http://127.0.0.1:4000/

Post
---------------------------------------------------------------------------------

Membuat Post
*********************************************************************************

Ada 2 jenis konten yang bisa diupdate pada website ini, yaitu ``post`` dan
``pages``.  Jenis ``post`` adalah konten yang berseri dalam artian konten jenis
ini tidak hanya satu kali. Misalnya konten talim yang muncul secara berkala
misalnya bulanan.  Konten post juga memiliki tag/kategori.  Sedangkan jenis
``pages`` adalah konten yang muncul 1 kali saja dan biasanya digunakan di menu
navigasi. Pada bagian ini, akan dibahas cara membuat postingan dengan kategori
``post``.

Untuk melakukan post, buatlah file markdown yang disimpan di folder _post.
File markdown tersebut harus disimpan dengan format:

::

        YYYY-MM-DD-short-title.md

Contoh isi file markdown adalah:

::

        ---
        layout: post
        title: Ta'lim Muslimah Kesatu
        author: Nadia
        tag: Talim-Muslimah
        ---

        Tulislah konten web di sini. 

        ![](/assets/img/logo.jpeg){: .img-fluid .img-thumbnail}


Setiap tulisan yang berupa post harus memiliki tag. Tag yang sudah dibuat untuk
website KIA ini adalah:

- Talim-Muslim
- Talim-Muslimah
- Pengajian-Gabungan
- Grillen
- Seminar
- Tips

Membuat Kategori/Tag Baru untuk Post
*********************************************************************************

Tag digunakan untuk mengkategorikan post. Penamaan tag tidak boleh memiliki
spasi. Tag bisa dibuat bebas sesuai dengan kebutuhan. Tetapi halaman web untuk
menampilkan semua post dalam tag tersebut harus dibuat.  

Cara buat halaman tag adalah dengan membuat markdown file dengan nama yang sama
dengan tag-nya. Misalnya tag Talim-Muslim.md untuk tag Talim-Muslim. Format
markdown file-nya adalah:

::

        ---
        layout: tagpage
        tag: Talim-Muslim
        ---

File tersebut disimpan di folder:

::

        /tags


Git Perintah
*********************************************************************************

Langkah-langkah untuk update website ke github:

- Pull data ke ``web-dev-kia`` dan ``_site``

::

        $ git pull origin master

- Simpan tulisan di ``_post`` 
- Run ``jekyll serve``
- Cek Local Server untuk melihat perubahan 

::

        http://127.0.0.1:4000/

- Push data ``_site`` dan ``web-dev-kia`` ke remote

Caranya, navigasikan ke folder yang dituju, misalnya ``_site``, kemudian buka
git bash:

::

        $ git add .
        $ git commit -m "isi pesan"
        $ git push origin master
		
Referensi:

- `Jekyll: posts`_

.. _`Ruby+Devkit`: https://rubyinstaller.org/downloads/
.. _`Jekyll: posts`: https://jekyllrb.com/docs/posts/

Pages
---------------------------------------------------------------------------------

Membuat Page
*********************************************************************************

Tulisan yang berupa ``pages`` disimpan di dalam folder ``pages``. Pada website
KIA ini, pages-nya terdiri dari:

- gallery.md
- kalender.md
- strukturOrganisasi.md
- tentangAachen.md
- tentangKIA.md

Untuk membuat page yang baru, buatlah page dengan format berikut:

::

        ---
        layout: page
        title: Tentang Aachen
        ---

        Isilah konten di sini!




Referensi:

- `Jekyll: pages`_


.. _`Jekyll: pages`: https://jekyllrb.com/docs/pages/

Update Navigasi
*********************************************************************************

Page dapat dimasukkan ke navigasi dengan mengupdate ``_data/nav.yml``:

::

        navigation_dropdown:
            - title: About
              sub:
                - page: Tentang KIA
                  url: /pages/tentangKIA.html
                - page: Tentang Aachen
                  url: /pages/tentangAachen.html
                - page: Struktur Organisasi
                  url: /pages/strukturOrganisasi.html
            - title: Program Kerja
              sub:
                - page: Ta'lim Muslim
                  url: /pages/talim-muslim.html
                - page: Ta'lim Muslimah
                  url: /pages/talim-muslimah.html

        navigation_single:
            - page: Gallery
              url: /pages/gallery.html
            - page: Kalender KIA
              url: /pages/kalender.html


Ada dua jenis navigasi yaitu navigasi yang memiliki sub menu dan yang tidak
memiliki sub menu. Navigasi yang memiliki sub menu dapat diupdate pada bagian
navigation_dropdown sedangkan yang tidak memiliki sub menu pada bagian
navigation_single. 

Informasi yang harus dimasukkan adalah nama page dan urlnya. 

Homepage
---------------------------------------------------------------------------------

Homepage berisi info kegiatan yang dapat diupdate dengan membuat post di:

::

        /_posts/info

Format Markdown file-nya adalah:

::

        ---
        layout: post-gbr
        title: "Talim Bulanan KIA Muslimah"
        author: Admin
        tag: Info
        img: /assets/img/posters/talimmuslimah-sep.png
        ---

        tulislah konten di sini!


Gallery
---------------------------------------------------------------------------------

Semua gambar disimpan di:

::

        /assets/img/gallery

Gambar di page gallery dapat diupdate dengan cara mengupdate informasi pada
file:

::

        /_data/gallery.yml

Contoh gallery.yml:

::

        list_gambar:
            - caption: Logo KIA 1
              url: /assets/img/gallery/logo1.jpeg
            - caption: Logo KIA 2
              url: /assets/img/gallery/logo2.jpeg

Hasil update dapat dibuka pada menu Gallery. 


Insert Gambar
---------------------------------------------------------------------------------

Gambar untuk post/pages disimpan di  

::

        /assets/img/


Kemudian gambar bisa disisipkan di dalam teks dengan cara:

::

        ![](/assets/img/logo.jpeg){: .img-fluid .img-thumbnail}

Catatan:

Kurangilah size dari gambar menjadi maksimal 1 MB. Size gambar bisa dikurangi dengan menggunakan aplikasi paint di Windows 10. 

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

*Mark-up language* yang digunakan untuk menulis dokumentasi ini adalah
`reStructuredText`_. 

Edit di Lokal
*********************************************************************************

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

Edit di Remote
*********************************************************************************

Buka repo web-dev-kia, kemudian editlah file yang bernama README.rst. 

.. _`ReText`: https://github.com/retext-project/retext
.. _`Make`: https://github.com/yohanfs/Makefile
.. _`rst2html dan rst2pdf`: https://github.com/yohanfs/rst
.. _`reStructuredText`: https://github.com/yohanfs/rst

Perkembangan Selanjutnya
---------------------------------------------------------------------------------

Perlu menyiapkan banyak konten yang berkaitan dengan:

- program kerja
- rangkuman kegiatan pengajian

Sebagai perbandingan, bisa melihat ke website keluarga islam di kota lain di
Jerman, misalnya:

- `Pengajian Hamburg`_
- `Pengajian Ruhr`_


.. _`Pengajian Hamburg`: https://iicev-hamburg.de/
.. _`Pengajian Ruhr`: https://imrr-ev.de/ 

Website KIA versi Lama
---------------------------------------------------------------------------------

Pengurus sebelumnya sebenarnya telah membuat website, tetapi tidak bisa
dilanjutkan oleh pengurus berikutnya dikarenakan tidak ada dokumentasi perihal
website tersebut. Berikut ini adalah website yang ditemukan oleh google:

- `muslimahkia.blogspot.com`_
- `keluargaislamaachen.wordpress.com`_


Contributors
---------------------------------------------------------------------------------

- Yohan Fajar Sidik
- Muthia Aulawiyah



.. Referensi


.. _`muslimahkia.blogspot.com`: https://muslimahkia.blogspot.com/
.. _`keluargaislamaachen.wordpress.com`: https://keluargaislamaachen.wordpress.com/
