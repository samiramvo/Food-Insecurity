<template>
    <ul>
        <li v-for="alternative in alternatives" :key="alternative.id">
            <router-link :to="'/alternatives/' + alternative.id">{{ alternative.name }}</router-link>
        </li>
    </ul>
</template>
  
<script>

export default {
    props: {
        alternatives: Array // Les alternatives seront passées en tant que propriété
    }
};
</script>
  