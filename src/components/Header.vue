<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                 <a class="navbar-brand text-danger" href="#">BOOLFIX</a>
                <div class="d-flex">
                     <Search @value-search = "valueSearch" />
                </div>
            </div>
        </nav>

      
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