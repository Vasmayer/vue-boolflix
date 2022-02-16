<template>
    <select class="form-select">
        <option selected>Seleziona il Genere</option>
        <option v-for="listGenre in listGenres" :key="listGenre.id" value="listGenre.id">{{listGenre.name}}</option>
    </select>
</template>

<script>
import axios from 'axios';

export default {
    name:'Select',
    data()
    {
        return{

            listGenres:[],
             options:{
                params:
                {
                    api_key:'ed02f30b87f7a4430cd020829fefad6e',
                    language:'it-IT'
                }
             }
        }
    },
    mounted()
    {
        
     /*  const genresTv = this.callGenres('tv');
      const genresMovie = this.callGenres('movie');

      this.listGenres = [...genresTv,...genresMovie]; */
    },
    methods:
    {
        callGenres(typeShow)
        {
            axios.get(`https://api.themoviedb.org/3/genre/${typeShow}/list`,this.options).then(res => {
            this.listGenres =  res.data.genres;
            });
        },
    }
}
</script>
<style lang="scss" scoped>

</style>