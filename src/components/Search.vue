<template>
    <div>
        <input type="text" placeholder="Cerca qualsiasi film" v-model="search" @keyup.enter="valueSearch">
        <button type="button" @click="valueSearch">Cerca</button>
    </div>
</template>

<script>
export default {
    name:'search',
     data()
    {
        return{
             search:''
        }
    },
     methods:{
        valueSearch()
        {
            this.$emit('value-search',this.search);
        }
    },
    
}
</script>

<style lang="scss" scoped>

</style>