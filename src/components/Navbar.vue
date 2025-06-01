<template>
    <div class="m-4 flex justify-between items-center">
        <RouterLink to="/" class="font-semibold text-lg text-lg lg:text-2xl">
            Akshay Surendran
        </RouterLink>

        <div class="flex">
            <RouterLink class="mx-1 lg:mx-4 text-sm lg:text-lg hover:underline"
                :class="$route.name === 'home' ? 'font-semibold' : ''" to="/">Home
            </RouterLink>

<!--             <RouterLink class="mx-1 lg:mx-4 text-sm lg:text-lg hover:underline"
                :class="$route.name === 'cine' ? 'font-semibold' : ''" to="/what-ive-watched">What I've Watched
            </RouterLink> -->
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>