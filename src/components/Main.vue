<template>
    <main>
        <h3>FILMS</h3>
        <Card 
        v-for="{title,original_title,original_language,vote_average,poster_path,id} in listFilms" 
        :key="id" 
        :caption = "title"
        :original-caption="original_title"
        :original-language="original_language"
        :vote-average="vote_average"
        :is-language = "isLanguage(original_language)"
        :path = "poster_path"
        />
        <h3>SERIES</h3>
        <Card 
        v-for="{name,original_name,original_language,vote_average,poster_path,id} in listSeries" 
        :key="id" 
        :caption = "name"
        :original-caption="original_name"
        :original-language="original_language"
        :vote-average="vote_average"
        :is-language = "isLanguage(original_language)"
        :path = "poster_path"
        />
        
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