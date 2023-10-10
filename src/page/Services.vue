<template>
    <div>
        <Header></Header>
        <div class="bg-[#f0f3f7]">
            <div class="container mx-auto text-center">
                <div class="relative">
                    <img src="@/assets/fao_24971_0140-imageonline.co-merged.jpg" alt="" class="w-full h-350">
                    <div class="absolute inset-0">
                        <h2 class="font-bold text-4xl text-center text-white  animate-bounce mt-36">Nos Services</h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-16 cursor-pointer">
                        <!-- Service 1: Gestion Écologique -->
                        <router-link :to="{ name: 'GestionEcologique' }">
                            <div
                                class="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                                <div class="text-2xl mb-4">
                                    <i class="fas fa-leaf text-colorgreen"></i>
                                </div>
                                <h3 class="text-xl font-semibold mb-2 text-colorgreen">Gestion Écologique</h3>
                                <p class="text-gray-600">Nous proposons une gestion écologique des pesticides pour minimiser
                                    l'impact sur l'environnement.</p>
                            </div>
                        </router-link>


                        <!-- Service 2: Base de Données Complète -->
                        <div
                            class="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                            <div class="text-2xl mb-4">
                                <i class="fas fa-database text-colorgreen"></i>
                            </div>
                            <h3 class="text-xl font-semibold mb-2 text-colorgreen">Base de Données Complète</h3>
                            <p class="text-gray-600">Accédez à une base de données complète de pesticides, y compris leurs
                                propriétés, effets et doses recommandées.</p>
                        </div>

                        <!-- Service 3: Alternatives Sûres -->
                        <div
                            class="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                            <div class="text-2xl mb-4">
                                <i class="fas fa-leaf text-colorgreen"></i>
                            </div>
                            <h3 class="text-xl font-semibold mb-2 text-colorgreen">Alternatives Sûres</h3>
                            <p class="text-gray-600">Trouvez des alternatives plus sûres et respectueuses de l'environnement
                                aux pesticides traditionnels.</p>
                        </div>

                        <!-- Service 4: Conseils de Gestion Intégrée des Ravageurs -->
                        <router-link :to="{ name: 'ConseilsGIR' }">
                            <div
                                class="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
                                <div class="text-2xl mb-4">
                                    <i class="fas fa-bug text-colorgreen"></i>
                                </div>
                                <h3 class="text-xl font-semibold mb-2 text-colorgreen">Conseils de Gestion Intégrée des
                                    Ravageurs</h3>
                                <p class="text-gray-600">Obtenez des conseils pratiques sur la gestion intégrée des
                                    ravageurs
                                    pour minimiser l'utilisation de pesticides.</p>
                            </div>
                        </router-link>
                    </div>
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
    name: "Services",
    components: {
        Header,
        Footer
    },
    data() {
        return {
            mobileNavOpen: false,
        };
    },
    methods: {
        toggleMobileNav() {
            this.mobileNavOpen = !this.mobileNavOpen;
        },
    },
};
</script>
<style scoped></style>

