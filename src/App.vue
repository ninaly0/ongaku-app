<template>
  <div id="app">
    <div class="header flex justify-between p-6 items-center">    
        <h1 class="text-4xl text-green-800 font-bold">Ongaku</h1>
        <nav class="navbar mr-8 text-green-600">
            <ul class="flex">
                <li class="mr-8"> <!-- New albums -->
                    <a href="#">New albums</a>
                </li>
                <li class="mr-8"> <!-- New singles -->
                    <a href="#">New Singles</a>
                </li>
                <li class="mr-8"> <!-- Library -->
                    <a href="#">Library</a>
                </li>
                <li> <!-- Playlist -->
                    <a href="#">Playlist</a>
                </li>
            </ul>
        </nav>
    </div>
    <AlbumsInfos />
  </div>
</template>

<script>
import AlbumsInfos from './components/AlbumsInfos'

export default {
  name: 'App',
  components: {
    AlbumsInfos
  }
}
</script>

<style>
body {
  background-color: #F7FAFC;
}
</style>
