<template>
    <div>
        <SearchBar @search="performSearch" />
        <AlternativeList :alternatives="searchResults" />
    </div>
</template>
  
<script>
export default {
    name: 'alternative',
    data() {
        return {
            searchResults: [] // Stockez les résultats de la recherche ici
        };
    },
    methods: {
        performSearch(query) {
            // Effectuez la recherche en fonction du critère (query) et mettez à jour searchResults
            // Vous pouvez appeler une API ou utiliser des données locales
            // Mettez à jour this.searchResults avec les résultats de la recherche
        }
    }
};
</script>
  