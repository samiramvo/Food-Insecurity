<template>
    <div>
        <footer class="bg-gray-800 text-white py-4">
            <div class="container mx-auto text-center md:w-1/2 lg:w-1/3">

                <div class="mt-4">
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
                <p class="text-lg font-semibold mt-3">&copy; 2023 BioGuardian. Tous droits réservés.</p>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name: "Footer"
}

</script>
<style scoped></style>