<template>
    <div class="col-4">
        <div class="card position-relative">
            <div class="overlay"></div>
            <img v-if="path" :src="`https://image.tmdb.org/t/p/w342${path}`" :alt="caption"> 
            <img v-else :src="require('../assets/img/poster_placeholder.png')" alt="nessuna locandina">
            <div class="info position-absolute top-0 start-50 translate-middle-x text-center">
                <div class="title">{{caption}}</div>
            </div>
        <!-- </div>
            
            <li>Titolo Originale:{{originalCaption}}</li>
            <li>Lingua: 
                <img v-if="isLanguage" 
                     :src="require(`../assets/img/${originalLanguage}.png`)" 
                     :alt="originalLanguage"> 
                <span v-else>{{originalLanguage}}</span>     
            </li>
            <li>Voto:{{voteAverage}}
                
                <span v-for="index in 5" :key="index">
                    <i v-if="index <= voteAverage" class="fa-solid fa-star"></i>
                    <i v-else class="far fa-star"></i>
                </span>

                  
            </li>
        
            <li>
                <img v-if="path" :src="`https://image.tmdb.org/t/p/w342${path}`" :alt="caption"> 
                <img v-else :src="require('../assets/img/poster_placeholder.png')" alt="nessuna locandina">            </li>-->
        </div> 
    </div>
</template>

<script>
export default {
    name:'Card',
    props:['caption','originalCaption','originalLanguage','voteAverage','isLanguage','path'],
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/index.scss';
.card
{  
    cursor: pointer;
    .overlay
    {
        background-color: rgba(#000,0.8);
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right: 0;
        display: none;
    }
    &:hover
    {
        
    }
    .info
    {
        color: white;
        padding: 10px;
        .title
        {
            font-size: 1.4rem;
        }
    }
    img:hover.overlay
    {
        display: block;
    }
}


</style>