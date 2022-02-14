<template>
    <main>
        <ul>
            <li v-for="{title,original_title,original_language,vote_average,id} in listFilms" :key="id">
                Titolo: {{title}}<br>
                Titolo Originale:{{original_title}}<br>
                <!-- Lingua: <img :src="require(`../assets/img/${original_language}.png`)" :alt="original_language"> <br> -->
                Voto:{{vote_average}}<br>
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    name:'Main',
    props:['listFilms']
}
</script>

<style lang="scss" scoped>

</style>