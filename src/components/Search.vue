<template>
 <div class="d-flex justify-content-end">
        <input class="form-control me-2" placeholder="Cerca..." v-model="search" @keyup.enter="valueSearch">
        <button class="btn btn-outline-success" type="button" @click="valueSearch">Cerca</button>
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