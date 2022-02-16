<template>
    <div class="col-12 col-md-6 col-xl-4">
        <div class="card position-relative">
            <div class="overlay"></div>
            <img v-if="path" :src="`https://image.tmdb.org/t/p/w342${path}`" :alt="caption"> 
            <img v-else :src="require('../assets/img/poster_placeholder.png')" alt="nessuna locandina">
            <div class="info position-absolute top-0">
                <div class="title text-center">{{caption}}</div>
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
                <div class="cast mt-3">
                    <p>CAST</p>
                    <Cast :type-show="typeShow" :id="id"/>
                </div>
                <div class="genre mt-3">
                    <p>GENERE</p>
                    <ul>
                         <Genre v-for="genre in genre_ids" :key="genre" :type-show="typeShow" :genre="genre" />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cast from './Cast.vue'
import Genre from './Genre.vue'

export default {
    name:'Card',
    props:['caption','originalCaption','originalLanguage','voteAverage','isLanguage','path','id','typeShow','genre_ids'],
    methods:
    {
       
    },
    components:
    {
        Cast,
        Genre,
    }
}
</script>

<style lang="scss" scoped>

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
        padding: 15px;
        font-size: 0.8rem;
        display: none;
        .lang
        {
            img{
                width: 70px;
                height: 35px;
            }
        }
        .title
        {
            font-size: 1.3rem;
        }

    }

}


</style>