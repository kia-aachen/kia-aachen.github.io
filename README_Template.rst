README Website Template
=================================================================================

.. contents:: **Daftar Isi**

Reference
---------------------------------------------------------------------------------

- `Jekyll variables`_
- `Liquid template language`_
- `YAML in the context of Jekyll`_

Halaman Post
---------------------------------------------------------------------------------

::

        <h4 class="my-4">{{ page.title}}</h4>

          {% for tag in page.tags %}
            {% capture tag_name %}{{ tag }}{% endcapture %}
            Kategori:  <a href="/tags/{{ tag_name }}"><code class="highligher-rouge"><nobr>{{ tag_name | replace:"-"," "}}</nobr></code>&nbsp;</a>
          {% endfor %}

        <p>{{ page.date | date_to_long_string }} - oleh {{ page.author }}</p>

        <hr>

        {{ content }}

        <hr>
        <br>

        <div class="PageNavigation">
            {% if page.previous.url %}
                <a class="prev" href="{{page.previous.url}}">&laquo; {{page.previous.title}}</a>
            {% endif %}
                &ensp;
            {% if page.next.url %}
                <a class="next" href="{{page.next.url}}">{{page.next.title}} &raquo;</a>
            {% endif %}
        </div>



Post Terbaru
---------------------------------------------------------------------------------

::

        <h4 class="my-4">Post Terbaru</h4>
        <hr>

        <ul class="nav flex-column">
        {% for post in site.posts limit:4%}
          <li class="nav-item">
                <small>{{ post.date | date: "%d %B %Y" }}</small> <br> <a href="{{ post.url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
        </ul>

Kategori
---------------------------------------------------------------------------------

::

        <h4 class="my-4">Kategori</h4>
        <hr>

        <ul class="nav flex-column">
        {% for tag in site.tags %}
          {% assign t = tag | first %}
          {% assign posts = tag | last %}
          <li class="nav-item">
                <a href="/tags/{{t}}"> {{t | replace: "-"," "}}  ({{ posts | size }}) </a>
          </li>
        {% endfor %}
        </ul>

Halaman Tag Page
---------------------------------------------------------------------------------

::

        <h4 class="my-4">{{ page.tag | replace:"-"," "}}</h4>

        <ul class="nav flex-column">
        {% for post in site.tags[page.tag] %}
          <li class="nav-item">
            <small>{{ post.date | date: "%d %B %Y" }}</small> <br> <a href="{{ post.url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
        </ul>


Navigasi
---------------------------------------------------------------------------------

::

        <nav class="navbar navbar-expand-lg navbar-dark bg-success">
            <!--<a class="navbar-brand" href="#">{{ site.title }}</a> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                </li>		 
                        
                         {% for item in site.data.nav.navigation_dropdown%}
                         <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  {{item.title}}
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {% for entry in item.sub %}
                                  <a class="dropdown-item" href="{{entry.url}}">{{entry.page}}</a>
                                {% endfor %}
                                </div>
                         </li>
                         {% endfor %}
                         
                        {% for item in site.data.nav.navigation_single %}	
                         <li class="nav-item active">
                  <a class="nav-link" href="{{item.url}}">{{item.page}}<span class="sr-only">(current)</span></a>
                </li>	
                        {% endfor %}
                         
              </ul>
            </div>
        </nav>

Data navigasi disimpan di ``/_data/nav.yml``.

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


.. Referensi


.. _`Jekyll variables`: https://jekyllrb.com/docs/variables/
.. _`Liquid template language`: https://shopify.github.io/liquid/
.. _`YAML in the context of Jekyll`: https://idratherbewriting.com/documentation-theme-jekyll/mydoc_yaml_tutorial
