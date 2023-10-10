<template>
    <div class="relative bg-white">
        <img src="@/assets/carte-pesticides.jpg" alt="Image" class="w-screen h-screen">
        <div class="absolute inset-0">
            <img src="@/assets/RectangleNoir.png" alt="" class="w-screen h-screen opacity-50">
            <div class="absolute top-12 ">
                <h1 class="font-bold text-5xl text-center text-white mb-24 animate-bounce">BioGuardian</h1>
                <h2 class="text-white font-bold text-2xl mb-4 text-center">Protégez votre récolte, nourrissez le monde,
                    sans
                    compromettre la
                    terre.</h2>
                <div class="flex justify-center items-center ">
                    <div class="text-white w-2/3 text-center">
                        BioGuardian est votre guide pour une agriculture sans compromis. Accédez à une liste d'alternatives
                        biologiques aux pesticides, suivez les meilleures pratiques de gestion intégrée des ravageurs et
                        cultivez des récoltes saines pour une alimentation mondiale durable.
                    </div>
                </div>

                <div class=" mt-16 text-center">
                    <router-link :to="{ name: 'ConnexionPage' }">
                        <button
                            class="px-5  h-14 bg-white opacity-60 rounded-md hover:bg-colorgreen hover:opacity-80 text-sm ">
                            <div class="font-bold text-black group-hover:text-white">
                                Devenir un agriculteur responsable
                            </div>
                        </button>

                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "EntreApp",

}

</script>
<style scoped></style>