<template>
    <header class="bg-gray-800 text-white py-4 p-8">
        <div class="container mx-auto flex justify-between items-center">
            <div class="text-xl font-semibold">BioGuardian</div>
            <!-- Bouton de menu mobile avec icône -->
            <button class="md:hidden text-yellow-400 hover:text-white" @click="toggleMobileNav">
                <font-awesome-icon icon="coffee" />
            </button>
            <!-- Liste déroulante en version mobile -->
            <select v-if="mobileNavOpen" class="md:hidden bg-gray-800 text-white py-2" @change="navigateMobile">
                <router-link :to="{ name: 'Accueil' }">
                    <a href="#" class="text-white hover:text-yellow-400 mr-4">Accueil</a>
                </router-link>
                <router-link :to="{ name: 'Services' }">
                    <a href="#" class="text-white hover:text-yellow-400 mr-4">Services</a>
                </router-link>
                <router-link :to="{ name: 'Propos' }">
                    <a href="#" class="text-white hover:text-yellow-400 mr-4">À Propos</a>
                </router-link>
                <router-link :to="{ name: 'Contact' }">
                    <a href="#" class="text-white hover:text-yellow-400 mr-4">Contact</a>
                </router-link>
            </select>
            <!-- Navigation principale -->
            <nav :class="{ 'hidden': !mobileNavOpen }" class="md:flex space-x-4">

                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <router-link :to="{ name: 'Accueil' }">
                        <a href="#" class="text-white hover:text-yellow-400 mr-4">Accueil</a>
                    </router-link>
                    <router-link :to="{ name: 'Services' }">
                        <a href="#" class="text-white hover:text-yellow-400 mr-4">Services</a>
                    </router-link>
                    <router-link :to="{ name: 'Propos' }">
                        <a href="#" class="text-white hover:text-yellow-400 mr-4">À Propos</a>
                    </router-link>
                    <router-link :to="{ name: 'Contact' }">
                        <a href="#" class="text-white hover:text-yellow-400 mr-4">Contact</a>
                    </router-link>
                </div>
            </nav>
        </div>
    </header>
</template>
  
<script>

export default {
    name: "Header",
    data() {
        return {
            mobileNavOpen: false,
        };
    },
    methods: {
        toggleMobileNav() {
            this.mobileNavOpen = !this.mobileNavOpen;
        },
        navigateMobile(event) {
            // Rediriger l'utilisateur vers la page sélectionnée
            const selectedPage = event.target.value;
            if (selectedPage !== '#') {
                window.location.href = selectedPage;
            }
        },
    },
};
</script>
  
<style scoped></style>