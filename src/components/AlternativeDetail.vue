<template>
    <div>
        <h2>{{ alternative.name }}</h2>
        <p>Efficacité : {{ alternative.efficacy }}</p>
        <p>Utilisation : {{ alternative.usage }}</p>
        <p>Impact : {{ alternative.impact }}</p>
        <!-- Ajoutez d'autres informations sur l'alternative ici -->
    </div>
</template>
  
<script>
export default {
    name: 'AlternativeDetail',
    props: {
        alternative: Object // Les détails de l'alternative seront passés en tant que propriété
    }
};
</script>
  