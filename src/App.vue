<template>
  <div id="app">
    <Header />
    <AlbumsInfos />
  </div>
</template>

<script>
import Header from './components/Header'
import AlbumsInfos from './components/AlbumsInfos'

export default {
  name: 'App',
  components: {
    Header,
    AlbumsInfos
  }
}
</script>
