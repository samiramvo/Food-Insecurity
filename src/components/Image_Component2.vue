<template>
    <div class="md:w-1/2 h-600 relative">
        <img src="@/assets/agriculture-urbaine.jpg" alt="Image" class="w-full h-full">
        <div class="absolute inset-0">
            <img src="@/assets/RectangleNoir.png" alt="" class="w-full h-full opacity-50">
            <div class="absolute top-14 p-12 ">
                <h1 class="text-white  font-extrabold text-3xl mt-10">BioGuardian</h1>
                <p class="text-white text-lg mt-10">
                    Découvrez des alternatives respectueuses de l'environnement et recevez des conseils pratiques pour gérer
                    les ravageurs tout en préservant la planète.
                </p>
                <div class="flex text-xm mt-24">
                    <p class="text-white">
                        Déja Inscrit?
                    </p>
                    <router-link :to="{ name: 'ConnexionPage' }">
                        <p class="text-custom-green font-bold ml-2">Connectez vous</p>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ImageComponent2',
};
</script>
  
<style scoped>
.bg-custombg {
    background-color: #f0f0f0;
}
</style>
  