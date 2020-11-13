<template>
  <div id="app">
    <div class="header flex justify-between p-6 items-center">    
        <div class="text-4xl text-green-800 font-bold">
          <a href="" @click.prevent="changePage('Accueil')">Ongaku</a>
        </div>
        <nav class="navbar mr-8 text-green-600">
            <ul class="flex">
                <li class="mr-8" > <!-- New albums -->
                  <a class="link" href="" v-on:click.prevent="changePage('new-albums')">
                    New albums
                  </a>
                </li>
                <li class="mr-8"> <!-- New singles -->
                  <a class="link" href="" v-on:click.prevent="changePage('new-singles')">
                    New Singles
                  </a>
                </li>
                <li class="mr-8" > <!-- Library -->
                  <a class="link" href="" v-on:click.prevent="changePage('library')">
                    Library
                  </a>
                </li>
                <li> <!-- Playlist -->
                  <a class="link" href="" v-on:click.prevent="changePage('playlist')">
                    Playlist
                  </a>
                </li>
            </ul>
        </nav>
    </div>
    <AlbumsInfos v-if="page === '/new-albums'" />
  </div>
</template>

<script>
import AlbumsInfos from './components/AlbumsInfos'

export default {
  name: 'App',
  components: {
    AlbumsInfos
  },
  data(){
    return {
      page: location.pathname,
    }
  },
  methods: {
    changePage(page){
      history.pushState("", "", `/${page}`)
      this.page = `/${page}`;
    }
  },
  created(){
    window.addEventListener('popstate', e => {
      console.log('popstate', e)
      this.page = location.pathname
    })
  }
  /*mounted() {
    var links = document.querySelectorAll('.link');
    console.log(links);
    links.forEach(l => {
      let link = l.id;
      l.addEventListener('click', (e) => {
        e.preventDefault();
        history.pushState("", "", `/${link}`)
        this.page = `/${link}`;
      })
    })

    window.addEventListener('popstate', e => {
      console.log('popstate', e)
      this.page = location.pathname
    })
  }*/
}

</script>

<style>
body {
  background-color: #F7FAFC;
}
</style>
