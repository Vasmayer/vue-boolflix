<template>
    <main class="container">
        <div class="row g-5">

                <h3 v-if="listFilms.length">FILMS</h3>
                <Card 
                v-for="{title,original_title,original_language,vote_average,poster_path,id,genre_ids} in listFilms" 
                :key="id" 
                :caption = "title"
                :original-caption="original_title"
                :original-language="original_language"
                :vote-average="fifthStars(vote_average)"
                :is-language = "isLanguage(original_language)"
                :path = "poster_path"
                :id="id"
                type-show='movie'
                :genre_ids="genre_ids"
                />
                <h3 v-if="listSeries.length">SERIES</h3>
                <Card 
                v-for="{name,original_name,original_language,vote_average,poster_path,id,genre_ids} in listSeries" 
                :key="id" 
                :caption = "name"
                :original-caption="original_name"
                :original-language="original_language"
                :vote-average="fifthStars(vote_average)"
                :is-language = "isLanguage(original_language)"
                :path = "poster_path"
                :id="id"
                type-show="tv"
                :genre_ids="genre_ids"
                />
        </div>
        
    </main>
</template>

<script>
import Card from './Card.vue'

export default {
    name:'Main',
    props:['listFilms','listSeries'],
    data()
    {
        return{
             languages:['de','en','fr','it','ja','ko','pt','ru','zhs','zht']
        }
    },
    methods:
    {
        isLanguage(lang)
        {
            return this.languages.includes(lang); 
        },
        fifthStars(vote)
        {
            return Math.ceil(vote/2)
        }
    },
    components:
    {
        Card,
    }
}
</script>

<style lang="scss" scoped>

</style>