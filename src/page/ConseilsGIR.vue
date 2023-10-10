<template>
    <Header></Header>
    <div class="py-10 px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-8 text-colorgreen">Conseils de Gestion Intégrée des Ravageurs (GIR)
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 pb-10">
            <div v-for="(conseil, index) in conseilsGIR" :key="index"
                class="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer">
                <h3 class="text-xl font-semibold mb-4">{{ conseil.titre }}</h3>
                <p class="text-gray-700">{{ conseil.description }}</p>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

  
<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
export default {
    name: 'ConseilsGIR',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            conseilsGIR: [
                {
                    titre: 'Utilisation de pièges à insectes',
                    description: 'Les pièges à insectes sont une méthode de surveillance efficace pour détecter les ravageurs. Placez des pièges à différents endroits de votre culture pour surveiller leur présence et leur nombre.',
                    image: '@/assets/AdobeStock_368293717-1200x526.jpeg'
                },
                {
                    titre: 'Rotation des cultures',
                    description: 'La rotation des cultures aide à réduire la pression des ravageurs sur une culture spécifique. Évitez de cultiver la même plante au même endroit chaque année, car cela favorise la multiplication des ravageurs.',
                    image: '@/assets/AdobeStock_368293717-1200x526.jpeg'
                },
                {
                    titre: 'Utilisation de prédateurs naturels',
                    description: 'Certains insectes prédateurs, tels que les coccinelles et les guêpes parasitoïdes, sont des alliés précieux dans la lutte contre les ravageurs. Encouragez leur présence en favorisant la biodiversité dans votre environnement.',
                    image: '@/assets/AdobeStock_368293717-1200x526.jpeg'
                },
                {
                    titre: 'Choix de variétés résistantes',
                    description: 'Sélectionnez des variétés de plantes qui sont naturellement résistantes aux ravageurs. Ces variétés peuvent nécessiter moins de traitements chimiques pour les protéger.',
                    image: '@/assets/AdobeStock_368293717-1200x526.jpeg'
                },
                {
                    titre: 'Rotation des cultures',
                    description: 'La rotation des cultures aide à réduire la pression des ravageurs sur une culture spécifique. Évitez de cultiver la même plante au même endroit chaque année, car cela favorise la multiplication des ravageurs.',
                    image: '@/assets/AdobeStock_368293717-1200x526.jpeg'
                },
                {
                    titre: 'Utilisation de prédateurs naturels',
                    description: 'Certains insectes prédateurs, tels que les coccinelles et les guêpes parasitoïdes, sont des alliés précieux dans la lutte contre les ravageurs. Encouragez leur présence en favorisant la biodiversité dans votre environnement.',
                    image: '@/assets/AdobeStock_368293717-1200x526.jpeg'
                },
                {
                    titre: 'Choix de variétés résistantes',
                    description: 'Sélectionnez des variétés de plantes qui sont naturellement résistantes aux ravageurs. Ces variétés peuvent nécessiter moins de traitements chimiques pour les protéger.',
                    image: '@/assets/AdobeStock_368293717-1200x526.jpeg'
                },
                {
                    titre: 'Surveillance régulière des cultures',
                    description: 'Effectuez une surveillance régulière de vos cultures pour détecter rapidement les signes de ravageurs. Plus tôt vous les identifiez, plus facilement vous pourrez prendre des mesures de contrôle.',
                    image: '@/assets/AdobeStock_368293717-1200x526.jpeg'
                },
                {
                    titre: 'Introduction de plantes compagnes',
                    description: 'Certaines plantes compagnes peuvent aider à repousser les ravageurs. Introduisez-les dans votre culture pour créer un environnement moins favorable aux nuisibles.',
                    image: '@/assets/AdobeStock_368293717-1200x526.jpeg'
                },
                {
                    titre: 'Utilisation de nématodes bénéfiques',
                    description: 'Les nématodes bénéfiques sont des organismes microscopiques qui s\'attaquent aux larves de ravageurs.Vous pouvez les utiliser de manière ciblée pour contrôler certains parasites du sol.',
                    image: '@/assets/AdobeStock_368293717-1200x526.jpeg'
                },
                {
                    titre: 'Limitation des pesticides',
                    description: 'Réduisez au minimum l\'utilisation de pesticides.Utilisez - les uniquement en dernier recours lorsque d\'autres méthodes de contrôle ne sont pas suffisantes.',
                    image: '@/assets/AdobeStock_368293717-1200x526.jpeg'
                },
                {
                    titre: 'Encourager la biodiversité',
                    description: 'Favorisez la biodiversité sur votre exploitation en créant des habitats pour les prédateurs naturels des ravageurs, tels que des nichoirs à oiseaux ou des hôtels à insectes.',
                    image: '@/assets/AdobeStock_368293717-1200x526.jpeg'
                },
                // Ajoutez d'autres conseils GIR
            ],
            conseilDetail: [
                { visible: false },
                { visible: false },
                { visible: false },
                { visible: false },
                { visible: false },
                { visible: false },
                { visible: false },
                { visible: false },
                { visible: false },
                { visible: false },
                { visible: false },
                { visible: false },
                // ...
            ]
        };
    }
};
</script>
  
<style scoped>
.hover\:shadow-xl:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform: translate(0, -2px);
}
</style>
  