<template>
    <div>
        <ul>
            <li>Titolo: {{caption}}</li>
            <li>Titolo Originale:{{originalCaption}}</li>
            <li>Lingua: 
                <img v-if="isLanguage" 
                     :src="require(`../assets/img/${originalLanguage}.png`)" 
                     :alt="originalLanguage"> 
                <span v-else>{{originalLanguage}}</span>     
            </li>
            <li>Voto:{{voteAverage}}
                <i class="fa-solid fa-star"></i>
            </li>
        
            <li>
                <img v-if="path" :src="`https://image.tmdb.org/t/p/w342${path}`" :alt="caption"> 
                <img v-else :src="require('../assets/img/poster_placeholder.png')" alt="nessuna locandina">            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Card',
    props:['caption','originalCaption','originalLanguage','voteAverage','isLanguage','path'],
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/index.scss'


</style>