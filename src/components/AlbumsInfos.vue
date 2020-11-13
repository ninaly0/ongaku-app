
<template>
    <div class="container w-4/5 m-auto mt-8">

        <ul v-if="releases.length > 0">
            <template v-for="release in releases">
                <li v-if="release.album_type === 'album'" :key="release.id" class="flex justify-between p-4 text-2xl border-t border-green-500">
                    <div class="flex flex-col justify-between">

                        <div class="max-w-md">
                            <div class="album_name">
                                {{release.name}} 
                            </div>
                            <ul class="artist_name text-base">
                                
                                <!-- Si plusieurs artistes, ajouter une virgule, les uns à la suite des autres -->
                                <li v-for="artist in release.artists" :key="artist.id">
                                    Artist: {{artist.name}}
                                </li>
                            </ul>
                        </div>
                        
                        <div class="flex btn_infos">
                            <button class="p-2 mr-5 bg-green-800 hover:bg-green-900 text-white text-base outline-none rounded">
                                <a :href="release.external_urls.spotify" target="_blank">Listen</a>
                            </button>
                            <button class="p-2 text-green-800 hover:text-white hover:bg-green-800 text-base bg-transparent border border-green-800 outline-none rounded">
                                Learn More
                            </button>
                        </div>

                    </div>
                
                    <div class="w-200p rounded flex-none">
                        <img class="rounded" :src="release.images[1].url" alt="cover album">
                    </div>

                </li>

            </template>

            
        </ul>

    </div>

<!-- <div v-if="isLoading" class="w-full bg-black text-white">
        <p class="p-10 text-xl">les musiques sont en train de charger</p>
    </div> -->
</template>

<script>
    export default {
        name: 'AlbumsInfos',

        created(){
            this.loadReleases()
        },

        data(){
            return{
                releases: [],
                count : 0
                // isLoading: false
            }
        },
        methods: {
            loadReleases(){
                // this.isLoading = true;
                //on va chercher l'URL de l'api
                fetch("https://api.spotify.com/v1/browse/new-releases", {
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer BQAHemi50ppBtMjZt7ygXyLOtTQ1yF3pURu0GGwe60d04731vYpLAOLD8iCYXogO_wC6MtIOIOnszRK-OkqnAviI8nPjKxLq9AF7mSiEyB4t8AMvvdIO7P-t5M4lDbBYGEmKNNcytPB_dm7_2EE1zBi0IQ',     
                    }
                })
                    // on appelle response qui va le transformer en JSON
                    .then(response => response.json())
                    // on va accéder à la data
                    .then( (data) => {
                        this.releases = data.albums.items
                        // this.isLoading = false
                        console.log(data)
                    
                    })
                    .catch(() => {
                        console.log('catch')
                    });
                    
                    
                },
            }
        }

</script>



