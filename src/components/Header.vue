<template>
    <header>
       <Search @value-search = "valueSearch" />
    </header>
</template>

<script>
import Search from './Search.vue'

export default {
    name:'Header',
    methods:{
        valueSearch(search)
        {
            this.$emit('value-search',search);
        }
    },
    data()
    {
        return{
            
        }
    },
    components:
    {
        Search,
    },
}
</script>

<style lang="scss" scoped>

</style>