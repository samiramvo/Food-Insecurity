<template>
    <div>
        <Header></Header>

        <div class="min-h-screen flex flex-col md:flex-row py-20 ">

            <div class="container md:w-1/2  relative"> <!-- Première image (visible au départ) -->
                <img src="@/assets/technologies-agricoles-pour-culture-plantes-concept-recherche-scientifique-cree-technologie-generative-ai_74760-2092.avif"
                    alt="Contactez-nous" class=" h-full absolute transition-opacity duration-1000 rounded-md ease-in-out"
                    :class="{ 'opacity-100': showFirstImage, 'opacity-0': !showFirstImage }">

                <!-- Deuxième image (apparaîtra progressivement) -->
                <img src="@/assets/growing-tree-on-the-converging-point-of-acomputer-circuit-board-nature-with-digital-convergence-and_183983-919.avif"
                    alt="Contactez-nous" class=" h-full absolute  transition-opacity duration-1000 rounded-md ease-in-out"
                    :class="{ 'opacity-100': !showFirstImage, 'opacity-0': showFirstImage }">


            </div>
            <!-- Formulaire de contact -->
            <div class="bg-white py-8 md:w-1/2">
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl font-semibold text-center mb-6 text-colorgreen">Contactez-nous</h2>
                    <!-- Formulaire ici -->
                    <form class="max-w-md mx-auto">
                        <!-- Champs de formulaire -->
                        <div class="mb-4">
                            <label for="name" class="block text-gray-600 mb-2">Nom</label>
                            <input type="text" id="name" name="name"
                                class="w-full border-gray-300 rounded-lg p-2 bg-gray-50 focus:outline-none focus:border-blue-500"
                                placeholder="Votre nom">
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-gray-600 mb-2">Email</label>
                            <input type="email" id="email" name="email"
                                class="w-full border-gray-300 rounded-lg p-2 bg-gray-50 focus:outline-none focus:border-blue-500"
                                placeholder="Votre email">
                        </div>
                        <div class="mb-4">
                            <label for="message" class="block text-gray-600  mb-2">Message</label>
                            <textarea id="message" name="message" rows="4"
                                class="w-full border-gray-300 rounded-lg p-2 bg-gray-50 focus:outline-none focus:border-blue-500"
                                placeholder="Votre message"></textarea>
                        </div>
                        <div class="text-center">
                            <button type="submit"
                                class=" bg-yellow-400  w-150 h-40 text-white rounded-full font-bold hover:bg-yellow-500">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
export default {
    name: "Contact",
    components: {
        Header,
        Footer
    },
    data() {
        return {
            mobileNavOpen: false,
            showFirstImage: true
        };
    },
    methods: {
        toggleMobileNav() {
            this.mobileNavOpen = !this.mobileNavOpen;
        },
    },
    mounted() {
        // Démarrez le carrousel (alternez les images) avec une temporisation
        setInterval(() => {
            this.showFirstImage = !this.showFirstImage;
        }, 5000); // Changez d'image toutes les 5 secondes (ajustez la durée selon vos besoins)
    }
};
</script>
<style scoped></style>

