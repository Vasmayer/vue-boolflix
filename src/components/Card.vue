<template>
    <div class="col-4">
        <div class="card position-relative">
            <div class="overlay"></div>
            <img v-if="path" :src="`https://image.tmdb.org/t/p/w342${path}`" :alt="caption"> 
            <img v-else :src="require('../assets/img/poster_placeholder.png')" alt="nessuna locandina">
            <div class="info position-absolute top-0 start-50 translate-middle-x text-center">
                <div class="title">{{caption}}</div>
                <div class="lang mt-3">
                    <img v-if="isLanguage" 
                     :src="require(`../assets/img/${originalLanguage}.png`)" 
                     :alt="originalLanguage"> 
                    <span v-else>{{originalLanguage}}</span>
                </div>
                <div class="mt-3 original-title">
                    {{originalCaption}}
                </div>
                <div class="mt-3 vote">
                    {{voteAverage}}     
                    <span v-for="index in 5" :key="index">
                      <i v-if="index <= voteAverage" class="fa-solid fa-star"></i>
                      <i v-else class="far fa-star"></i>
                   </span>
                </div>
            </div>
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
    &:hover .overlay, &:hover .info
    {
        display: block;
    }
    .info
    {
        color: white;
        padding: 10px;
        font-size: 1.4rem;
        display: none;
        .lang
        {
            img{
                width: 70px;
                height: 35px;
            }
        }

    }

}


</style>