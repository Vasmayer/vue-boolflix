<template>
  <div>
    <Header @value-search = "setSearch" @value-select = "selectedValue"/>
    <Main :list-films="listFilteredFilms" :list-series="listFilteredSeries"/>
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
      uriCallMovie:'https://api.themoviedb.org/3/search/movie',
      uriCallSeries:'https://api.themoviedb.org/3/search/tv',
      listFilms:[],
      listSeries:[],
      listFilteredFilms:[],
      listFilteredSeries:[],
      options:{
        params:
        {
          api_key:'ed02f30b87f7a4430cd020829fefad6e',
          query: '',
          language:'it-IT'
        }
      },
    }
  },
  computed:
  {
      
  },
  methods:
  {
    selectedValue(value)
    {
      if(value)
      {
        this.listFilteredFilms = this.listFilms.filter(show => show.genre_ids.includes(value));
        this.listFilteredSeries = this.listSeries.filter(show => show.genre_ids.includes(value)); 
      }
    },
    filmsCall(query)
    {
      this.options.params.query = query;
      axios.get(this.uriCallMovie,this.options).then(res => {

        this.listFilms = res.data.results;
        this.listFilteredFilms = res.data.results;
        
      });
    },
    seriesCall(query)
    {
      this.options.params.query = query;
      axios.get(this.uriCallSeries,this.options).then(res => {

        this.listSeries = res.data.results;
        this.listFilteredSeries = res.data.results;
      });
    },
    setSearch(search)
    {
      this.search  = search;
      this.filmsCall(this.search);
      this.seriesCall(this.search);
    },
    

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

@import 'assets/scss/index.scss'

</style>
