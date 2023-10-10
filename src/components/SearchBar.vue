<template>
    <div>
        <input v-model="searchQuery" placeholder="Rechercher un ravageur ou une culture">
        <button @click="search">Rechercher</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            searchQuery: ""
        };
    },
    methods: {
        search() {
            // Appeler une méthode pour effectuer la recherche avec le critère sélectionné
            this.$emit("search", this.searchQuery);
        }
    }
};
</script>
  