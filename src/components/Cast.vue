<template>
    <ul>
        <li v-for="cast in listCast.slice(0, 5)" :key="cast.cast_id">{{cast.name}}</li>
    </ul>
</template>

<script>

import axios from 'axios';

export default {
    name:'Cast',
    props:['typeShow','id'],
    computed:
    {
        
    },
    data()
    {
        return{
            listCast:[],
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
        castCall()
        {
            axios.get(`https://api.themoviedb.org/3/${this.typeShow}/${this.id}/credits`,this.options).then(res => {
                this.listCast = res.data.cast;
            });
        },
    },
    mounted(){
        this.castCall();
    }
}
</script>
<style lang="scss" scoped>

</style>

