<template>
    <main>
        <ul>
            <li v-for="{title,original_title,original_language,vote_average,id} in listFilms" :key="id">
                Titolo: {{title}}<br>
                Titolo Originale:{{original_title}}<br>
                Lingua: 
                <img v-if="isLanguage(original_language)" :src="require(`../assets/img/${original_language}.png`)" :alt="original_language"> <br>
                Voto:{{vote_average}}<br>
            </li>
             <li v-for="{name,original_name,original_language,vote_average,id} in listSeries" :key="id">
                Titolo: {{name}}<br>
                Titolo Originale:{{original_name}}<br>
                Lingua: 
                <img v-if="isLanguage(original_language)" :src="require(`../assets/img/${original_language}.png`)" :alt="original_language"> <br>
                Voto:{{vote_average}}<br>
            </li>
        </ul>
    </main>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>

</style>