<template>
    <header>
        <input type="text" placeholder="Cerca qualsiasi film" v-model="search" @keyup.enter="valueSearch">
        <button type="button" @click="valueSearch">Cerca</button>
    </header>
</template>

<script>
export default {
    name:'Header',
    methods:{
        valueSearch()
        {
            this.$emit('value-search',this.search);
        }
    },
    data()
    {
        return{
            search:'',
        }
    }
}
</script>

<style lang="scss" scoped>

</style>