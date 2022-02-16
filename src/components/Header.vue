<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand text-danger" href="#">BOOLFIX</a>
                <div class="d-flex justify-content-around flex-grow-1">
                     <Select />
                     <Search @value-search = "valueSearch" />          
                </div>
            </div>
        </nav>

      
    </header>
</template>

<script>
import Search from './Search.vue'
import Select from './Select.vue'

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
        Select
    },
}
</script>

<style lang="scss" scoped>

</style>