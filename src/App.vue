<template>
  <div>
    <Header @value-search = "setSearch" />
    <Main :list-films="listFilms"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

import axios from 'axios';

export default {
  name: 'App',
  data()
  {
    return{
      search:'',
      uriCall:'https://api.themoviedb.org/3/search/movie',
      listFilms:[],
      options:{
        params:
        {
          api_key:'ed02f30b87f7a4430cd020829fefad6e',
          query: '',
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
    filmsCall(query)
    {
      this.options.params.query = query;
      axios.get(this.uriCall,this.options).then(res => {

        this.listFilms = res.data.results;
      });
    },
    setSearch(search)
    {
      this.search  = search;
      this.filmsCall(this.search);
    }

  },
  mounted()
  {
    
  },
  components: {
   Header,
   Main,
  }
}
</script>

<style lang="scss">


</style>
