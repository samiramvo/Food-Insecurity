<template>
    <div>
        <Header></Header>
        <div class="bg-gray-100">
            <div class="container">
                <div class="relative">
                    <img src="@/assets/125194_376609-imageonline.co-merged.png" alt="" class="w-full h-350">
                    <div class="absolute inset-0">
                        <h1 class="font-bold text-4xl text-center text-white  animate-bounce mt-36 ">À Propos de BioGuardian
                        </h1>
                        <!-- Section sur la Vision -->
                    </div>
                </div>
                <div class="container flex flex-col md:flex-row">
                    <div>
                        <section class="mb-12 px-10 pt-10">
                            <h2 class="text-xl font-semibold mb-4 text-colorgreen">Notre Vision</h2>
                            <p class="text-gray-700">
                                Chez BioGuardian, notre vision est de créer un monde où l'agriculture est durable,
                                respectueuse
                                de
                                l'environnement et capable de nourrir la population mondiale de manière saine et équilibrée.
                                Nous
                                croyons
                                que la technologie peut jouer un rôle clé dans la réalisation de cette vision en développant
                                des
                                solutions
                                agricoles innovantes et respectueuses de la nature.
                            </p>
                        </section>

                        <!-- Section sur la Mission -->
                        <section class="mb-12 pb-10 px-10">
                            <h2 class="text-xl font-semibold mb-4 text-colorgreen">Notre Mission</h2>
                            <p class="text-gray-700">
                                Notre mission chez BioGuardian est de fournir aux agriculteurs du monde entier les outils,
                                les
                                connaissances et le soutien nécessaires pour adopter des pratiques agricoles durables. Nous
                                nous
                                engageons
                                à développer des produits et des services qui réduisent l'utilisation de pesticides nocifs,
                                préservent la
                                biodiversité et améliorent la qualité des cultures. En travaillant main dans la main avec
                                les
                                agriculteurs,
                                nous visons à promouvoir une agriculture intelligente, respectueuse de l'environnement et
                                économiquement
                                viable.
                            </p>
                        </section>

                    </div>

                </div>

                <!-- Autres informations sur l'entreprise -->
                <!-- Vous pouvez ajouter ici d'autres informations sur l'entreprise, son histoire, ses valeurs, etc. -->

            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
export default {
    name: "Propos",
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

