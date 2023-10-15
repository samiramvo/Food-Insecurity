<template>
    <Header></Header>
    <div class="px-8 py-6">
        <h1 class="text-3xl font-bold text-center mb-8 text-colorgreen">Connaissance Approfondie des Pesticides</h1>
        <p class="mb-4">Les agriculteurs ont accès à une base de données complète de pesticides, y compris leurs propriétés,
            effets sur
            la santé et l'environnement, ce qui leur permet de faire des choix informés.</p>
        <!-- Tableau des Pesticides -->
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white border rounded-lg shadow-lg">
                <thead>
                    <tr class="text-left bg-colorgreen text-white">
                        <th class="py-2 px-4">Nom du Pesticide</th>
                        <th class="py-2 px-4">Propriétés</th>
                        <th class="py-2 px-4">Effets sur la Santé</th>
                        <th class="py-2 px-4">Effets sur l'Environnement</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Lignes de données des pesticides -->
                    <tr v-for="(pesticide, index) in pesticides" :key="index" class="border-b hover:bg-gray-100">
                        <td class="py-2 px-4">{{ pesticide.nom }}</td>
                        <td class="py-2 px-4">{{ pesticide.proprietes }}</td>
                        <td class="py-2 px-4">{{ pesticide.effetsSante }}</td>
                        <td class="py-2 px-4">{{ pesticide.effetsEnvironnement }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
    <Footer></Footer>
</template>
  
<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
export default {
    name: "BaseComplete",
    components: {
        Header,
        Footer
    },
    data() {
        return {
            pesticides: [
                {
                    nom: "Cypermethrin",
                    categorie: "Insecticide",
                    proprietes: "Insecticide pyréthroïde.",
                    effetsSante: "Faible toxicité pour les humains, irritations cutanées possibles en cas d'exposition excessive.",
                    effetsEnvironnement: "Impact environnemental possible, notamment sur les écosystèmes aquatiques.",
                },
                {
                    nom: "Esfenvalerate",
                    categorie: "Insecticide",
                    proprietes: "Insecticide de la famille des pyréthrinoïdes.",
                    effetsSante: "Faible toxicité pour les humains, mais des irritations cutanées et oculaires peuvent survenir en cas d'exposition excessive.",
                    effetsEnvironnement: "Impact environnemental possible, notamment sur les abeilles et les poissons.",
                },
                {
                    nom: "Ipconazole",
                    categorie: "Fongicide",
                    proprietes: "Fongicide pour l'agriculture.",
                    effetsSante: "Non toxique pour les humains, mais peut être toxique pour les poissons s'il est déversé dans les eaux.",
                    effetsEnvironnement: "Impact environnemental possible, notamment sur les organismes aquatiques.",
                },
                {
                    nom: "Pendimethalin",
                    categorie: "Herbicide",
                    proprietes: "Herbicide pré-levée et post-levée.",
                    effetsSante: "Non toxique pour les humains, mais peut être toxique pour les poissons s'il atteint les eaux.",
                    effetsEnvironnement: "Impact environnemental possible, notamment sur les poissons.",
                },
                {
                    nom: "Pirimicarb",
                    categorie: "Insecticide",
                    proprietes: "Insecticide systémique.",
                    effetsSante: "Peut être nocif pour les abeilles et d'autres insectes bénéfiques, irritations cutanées possibles en cas d'exposition excessive.",
                    effetsEnvironnement: "Impact environnemental possible, notamment sur les populations d'abeilles et les écosystèmes.",
                },
                {
                    nom: "Tebuconazole",
                    categorie: "Fongicide",
                    proprietes: "Fongicide systémique.",
                    effetsSante: "Non toxique pour les humains, mais peut être toxique pour les poissons s'il atteint les eaux.",
                    effetsEnvironnement: "Impact environnemental possible, notamment sur les organismes aquatiques.",
                },
                {
                    nom: "Chlorpyrifos",
                    categorie: "Insecticide",
                    proprietes: "Insecticide organophosphoré.",
                    effetsSante: "Toxicité modérée pour les humains, peut causer des problèmes neurologiques et de développement chez les enfants en cas d'exposition.",
                    effetsEnvironnement: "Impact environnemental potentiel, peut affecter les oiseaux et les poissons.",
                },
                {
                    nom: "Glyphosate",
                    categorie: "Herbicide",
                    proprietes: "Herbicide non sélectif.",
                    effetsSante: "Controversé pour ses effets possibles sur la santé humaine, en particulier le potentiel cancérigène.",
                    effetsEnvironnement: "Impact environnemental possible, notamment sur la biodiversité.",
                },
                {
                    nom: "Bacillus thuringiensis",
                    categorie: "Insecticide biologique",
                    proprietes: "Bactérie utilisée comme insecticide biologique.",
                    effetsSante: "Généralement non toxique pour les humains, utilisé en agriculture biologique.",
                    effetsEnvironnement: "Impact environnemental réduit, cible spécifiquement les insectes nuisibles.",
                },
                // Ajoutez d'autres pesticides ici
            ],
        };
    },
};
</script>
  
<style>
/* Ajoutez des styles CSS personnalisés ici si nécessaire */
</style>
  