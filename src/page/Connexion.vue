<template>
    <div>
        <div class="flex flex-col md:flex-row ">
            <ImageComponent></ImageComponent>
            <div class="w-full md:w-1/2 p-4 md:mt-10">
                <h2 class="text-3xl font-bold mb-4 text-center text-custom-green ">Connexion</h2>
                <p class="mt-6 text-center mb-6">Bienvenue sur BioGuardian. Nous somme heureux de vous revoir</p>
                <div class="p-10">
                    <form action="#" method="POST">
                        <div class="mb-6">
                            <label for="email" class="block text-gray-700 font-medium">Adresse Email</label>
                            <input type="email" id="email" name="email" class="mt-2 custom-input w-full" required>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block text-gray-700 font-medium">Mot de Passe</label>

                            <input type="password" id="password" name="password" class=" mt-2 custom-input w-full" required>
                        </div>
                        <p class="mt-4 text-sm text-right text-custom-green  mb-10">Mot de passe oublié?</p>

                        <div class=" flex items-center justify-center">
                            <router-link :to="{ name: 'Accueil' }">
                                <button type="submit"
                                    class="w-150 py-2 p-6 text-center bg-colorgreen font-bold  text-white rounded-full focus:outline-none">
                                    Connexion</button>
                            </router-link>
                        </div>

                    </form>
                </div>

                <div class="flex items-center justify-center">
                    <div class="flex mr-10 border p-2 border-gray-300 rounded ">
                        <img class="w-8 h-8 mr-5" src="@/assets/bi_facebook.png" alt="">
                        <p class="text-sm font-semibold mt-1">Connexion avec Facebook</p>
                    </div>
                    <div class="flex border p-2 border-gray-300 rounded w-250 ">
                        <img class="w-8 h-8 mr-5" src="@/assets/flat-color-icons_google.png" alt="">
                        <p class="text-sm font-semibold mt-1 ">Connexion avec Google</p>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
import ImageComponent from '../components/Image_Component.vue';
export default {
    name: "ConnexionPage",
    components: {
        ImageComponent
    }
}
</script>
<style scoped>
.custom-input {
    border: none;
    border-bottom: 2px solid #cccccceb;
    outline: none;
}

.custom-input:focus {
    border-bottom-color: #0D986A;
}
</style>