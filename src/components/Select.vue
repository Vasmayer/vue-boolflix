<template>
    <select class="form-select" v-model="selected" @change="$emit('on-selected',selected)" >
        <option value="" selected>Seleziona il Genere</option>
        <option v-for="listGenre in listGenres" :key="listGenre.id" :value="listGenre.id">{{listGenre.name}}</option>
    </select>
</template>

<script>
import axios from 'axios';

export default {
    name:'Select',
    computed:
    {
       
    },
    data()
    {
        return{

            listGenres:[],
            selected:'',
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
     this.call();
    },
    methods:
    {
         
        call()
        {
            axios.get(`https://api.themoviedb.org/3/genre/movie/list`,this.options).then(res => {
                this.listGenres.push(...res.data.genres);
                axios.get(`https://api.themoviedb.org/3/genre/tv/list`,this.options).then(res => {
                this.listGenres.push(...res.data.genres);   

                this.listGenres = this.listGenres.filter((item, index, array) => 
                array.findIndex(t => 
                t.id === item.id && t.name === item.name) === index);   
                });
    
            });
        },
       
    }
}
</script>
<style lang="scss" scoped>

</style>