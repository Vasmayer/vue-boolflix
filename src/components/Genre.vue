<template>
    <div>
        <li>{{listGenre}}</li>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'Genre',
    props:['genre','typeShow'],
    data()
    {
        return{
           
            listGenre:[],
            options:
            {
                params:
                {
                    api_key:'ed02f30b87f7a4430cd020829fefad6e',
                    language:'it-IT'
                }
            }
        }
    },
    computed:
    {
       
    },
    methods:
    {
        genresFilmCall()
        {
            axios.get(`https://api.themoviedb.org/3/genre/${this.typeShow}/list`,this.options).then(res => {
               
               const data = res.data.genres;
               this.listGenre = data[data.findIndex(object => {return object.id === this.genre})].name;
            
            });
        },
    },
    mounted()
    {
        this.genresFilmCall();
    }
    
}
</script>

<style lang="scss">

</style>