<template>
    <div>
        <div class="flex flex-col md:flex-row ">
            <ImageComponent2></ImageComponent2>
            <div class="w-full md:w-1/2 p-4 md:mt-10">
                <h2 class="text-3xl font-bold mb-4 text-center text-custom-green ">Inscription</h2>
                <p class="mt-6 text-center mb-6">Bienvenue sur BioGuardian. Nous somme heureux de vous revoir</p>
                <div class="p-10">
                    <form action="#" method="POST">
                        <div class="mb-6">
                            <label for="email" class="block text-gray-700 font-medium">Adresse Email</label>
                            <input type="email" id="email" name="email" placeholder="Entrer email"
                                class="mt-2 custom-input w-full" required>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block text-gray-700 font-medium">Mot de Passe</label>

                            <input type="password" id="password" name="password" placeholder="Entrer mot de passe"
                                class=" mt-2 custom-input w-full" required>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block text-gray-700 font-medium">Confirmer Mot de Passe</label>

                            <input type="password" id="password" name="password" placeholder="Entrer mot de passe"
                                class=" mt-2 custom-input w-full" required>
                        </div>
                        <div class=" mt-14 flex items-center justify-center">
                            <router-link :to="{ name: 'ConnexionPage' }">
                                <button type="submit"
                                    class="w-150 py-2 p-6 text-center bg-colorgreen font-bold  text-white rounded-full focus:outline-none">
                                    Inscription</button>
                            </router-link>
                        </div>

                    </form>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
import ImageComponent2 from '../components/Image_Component2.vue';
export default {
    name: "InscriptionPage",
    components: {
        ImageComponent2
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