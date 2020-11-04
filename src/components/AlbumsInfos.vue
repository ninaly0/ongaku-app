<template>
    <div class="container w-4/5 m-auto mt-8">
        <ul v-if="releases.length > 0" class="pl-4 border-t border-green-500">
            <li v-for="release in releases" :key="release.id">
                {{release.name}}
                <ul class="ml-4">
                    <li v-for="artist in release.artists" :key="artist.id">
                        {{artist.name}}
                    </li>
                </ul>
                <ul class="ml-8">
                    <li v-for="cover in release.images" :key="cover.url">
                        {{cover.url}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    
    <!-- <div v-if="isLoading" class="w-full bg-black text-white">
            <p class="p-10 text-xl">les musiques sont en train de charger</p>
        </div> -->
</template>

<script>
export default {
    created(){

        this.loadReleases()

    },
    data(){
        return{
            releases: [],
            // isLoading: false

        }
    },
    beforeCreate(){

    },
    methods: {
        loadReleases(){
            // this.isLoading = true;

            fetch("https://api.spotify.com/v1/browse/new-releases", {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer BQC9FCmDp_AWDr2z1-KWocSR5-WiJRhRU3eG9d8DKIWJB_7O4q9rW9AiIzI7x52uc5quG3hAzYO-bOjVr5xdXLyhw5ZFFiBFyjjVV3QZn78JJO8XcdIosx0zaw2QHX8r9h_a3VYaupFSZGx7fUQYFD0-sw',     
                }
            })
            .then(response => response.json())
            .then( (data) => {

                this.releases = data.albums.items
                // this.isLoading = false
            })
        }
    },
    beforeMount(){

    },
    mounted(){

    },
}

</script>