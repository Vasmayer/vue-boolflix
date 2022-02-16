<template>
    <div>
        <li>{{listGenres[listGenres.findIndex(object => {return object.id === genre})].name}}</li>
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
            listGenres:[],
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
    methods:
    {
        callGenres()
        {
                axios.get(`https://api.themoviedb.org/3/genre/${this.typeShow}/list`,this.options).then(res => {
                this.listGenres = res.data.genres;
                });
        }
    },
    mounted()
    {
        this.callGenres()
    }
}
</script>

<style lang="scss">

</style>