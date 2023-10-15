<Header></Header>
<template>
    <div class="relative">
        <Header></Header>
        <div class="relative">
            <img src="@/assets/agriculture-chine.jpg" alt="" class="w-full h-450">
            <div class="absolute inset-0">
                <div class="mt-24">
                    <h1 class="font-bold text-5xl text-center text-white  animate-bounce">BioGuardian</h1>
                    <h2 class="mt-10 text-white font-semibold text-lg mb-4 text-center animate-pulse">Protégez votre
                        récolte,
                        nourrissez
                        le
                        monde,
                        sans
                        compromettre la
                        terre.</h2>
                </div>
            </div>

        </div>
        <div>
            <h1 class="font-bold text-3xl text-center mt-10 mb-6 text-colorgreen">Pourquoi Choisir BioGuardian ?</h1>
            <div class="flex justify-center items-center  flex-col md:flex-row p-10">

                <img src="@/assets/AdobeStock_368293717-1200x526.jpeg" class=" rounded-lg w-1/2 h-350" alt="">

                <div class=" pl-10">
                    <p class="text-center font-semibold text-lg mt-2 mb-2">Gestion Écologique :</p>
                    <div class=" leading-loose">
                        <p>
                            Réduction de l'Impact Environnemental : BioGuardian permet aux agriculteurs de minimiser
                            leur
                            impact
                            sur
                            l'environnement en réduisant l'utilisation de pesticides chimiques dangereux pour la faune,
                            la
                            flore
                            et
                            les écosystèmes.
                        </p>
                        <p class="mt-4">
                            Protection de la Biodiversité : En favorisant des pratiques agricoles plus respectueuses de
                            la
                            biodiversité, BioGuardian contribue à préserver les populations d'insectes utiles et
                            d'animaux
                            sauvages.
                        </p>
                        <div class=" mt-4">
                            <router-link :to="{ name: 'GestionEcologique' }">
                                <button
                                    class=" bg-yellow-400  w-150 h-40 text-white rounded-full font-bold hover:bg-yellow-500">
                                    Voir plus
                                </button>
                            </router-link>
                        </div>
                    </div>


                </div>

            </div>
            <div class="flex justify-center items-center  flex-col md:flex-row p-10">

                <div class=" pr-10">
                    <p class="text-center font-semibold text-lg mb-2"> Alternatives Sûres :</p>
                    <div class=" leading-loose">
                        <p>
                            Réduction des Risques pour la Santé : En identifiant des alternatives plus sûres aux pesticides
                            traditionnels, BioGuardian contribue à la protection de la santé des agriculteurs et des
                            consommateurs.


                        </p>
                        <p class="mt-4">
                            Durabilité à Long Terme : Les alternatives respectueuses de l'environnement encouragées par
                            BioGuardian contribuent à la durabilité à long terme de l'agriculture.
                        </p>
                        <div class=" mt-4">
                            <router-link :to="{ name: 'alternative' }">
                                <button
                                    class=" bg-yellow-400  w-150 h-40 text-white rounded-full font-bold hover:bg-yellow-500">
                                    Voir plus
                                </button>
                            </router-link>
                        </div>
                    </div>


                </div>
                <img src="@/assets/125194_376609.jpg" class="rounded-lg w-1/2 h-350" alt="">
            </div>


            <div class="flex justify-center items-center  flex-col md:flex-row p-10">
                <img src="@/assets/pesticides-augmentation-france.webp" class=" rounded-lg w-1/2 h-350" alt="">

                <div class=" pl-10">
                    <p class="text-center font-semibold text-lg mt-2 mb-2">Base de Données Complète :</p>
                    <div class=" leading-loose">
                        <p>


                            Connaissance Approfondie des Pesticides : Les agriculteurs ont accès à une base de données
                            complète
                            de pesticides, y compris leurs propriétés, effets sur la santé et l'environnement, ce qui
                            leur
                            permet de faire des choix informés.


                        </p>
                        <p class="mt-4">
                            Sélection Précise : Les agriculteurs peuvent choisir le pesticide le plus approprié en
                            fonction
                            de
                            leur culture spécifique, de la gravité de l'infestation et des réglementations locales.
                        </p>
                        <div class=" mt-4">
                            <router-link :to="{ name: 'BaseComplete' }">
                                <button
                                    class=" bg-yellow-400  w-150 h-40 text-white rounded-full font-bold hover:bg-yellow-500">
                                    Voir plus
                                </button>
                            </router-link>
                        </div>
                    </div>


                </div>

            </div>
            <div class="flex justify-center items-center  flex-col md:flex-row p-10">

                <div class=" pl-10">
                    <p class="text-center font-semibold text-lg mt-2 mb-2"> Conseils de Gestion Intégrée des Ravageurs :</p>
                    <div class=" leading-loose">
                        <p>
                            Approche Holistique : BioGuardian offre une approche holistique de la gestion des ravageurs en
                            proposant des méthodes biologiques, physiques et chimiques adaptées à chaque situation.

                        </p>
                        <p class="mt-4">
                            Optimisation des Rendements : Les conseils de GIR permettent aux agriculteurs d'optimiser leurs
                            rendements en minimisant les pertes dues aux ravageurs.
                        </p>
                        <div class=" mt-4">
                            <router-link :to="{ name: 'ConseilsGIR' }">
                                <button
                                    class=" bg-yellow-400  w-150 h-40 text-white rounded-full font-bold hover:bg-yellow-500">
                                    Voir plus
                                </button>
                            </router-link>
                        </div>
                    </div>


                </div>
                <img src="@/assets/femme-plante-legumes_36074-790.avif" class=" rounded-lg w-1/2 h-350" alt="">
            </div>
        </div>
        <div class=" py-8">
            <div class="container mx-auto">
                <div class="relative">
                    <img src="@/assets/shutterstock_711980332.jpg" class=" w-full h-400" alt="">
                    <div class="absolute inset-0 ">
                        <h2 class="font-bold text-3xl text-center mt-10 mb-2 text-white ">Témoignages de Clients</h2>

                        <!-- Grille pour les témoignages -->
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-95 p-8">
                            <!-- Témoignage 1 -->
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <p class="mb-4">"BioGuardian a révolutionné notre ferme. Grâce à leurs conseils
                                    et à
                                    leur base de données complète, nous avons pu réduire notre utilisation de pesticides
                                    tout en
                                    augmentant nos rendements. Une solution exceptionnelle pour l'agriculture durable."</p>
                                <p class=" font-semibold">Jean Dupont</p>
                                <p>Fermier depuis 15 ans</p>
                            </div>

                            <!-- Témoignage 2 -->
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <p class=" mb-4">"Nous avons adopté BioGuardian il y a un an, et les résultats
                                    sont
                                    incroyables. Notre récolte de cette saison est la meilleure que nous ayons jamais eue,
                                    et
                                    nous
                                    avons réduit nos coûts de pesticides de moitié. Un excellent investissement."</p>
                                <p class="font-semibold">Marie Tremblay</p>
                                <p>Agricultrice depuis 20 ans</p>
                            </div>

                            <!-- Témoignage 3 -->
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <p class=" mb-4">"BioGuardian nous a aidés à passer à une agriculture plus
                                    respectueuse
                                    de l'environnement. Nous sommes fiers de cultiver des produits de qualité sans nuire à
                                    la
                                    planète. Merci pour cette solution exceptionnelle."</p>
                                <p class=" font-semibold">Pierre Lavoie</p>
                                <p>Propriétaire d'une exploitation familiale</p>
                            </div>
                        </div>
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
    name: "Acceuil",
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

