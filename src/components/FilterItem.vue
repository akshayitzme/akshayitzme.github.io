<template>
    <div>
        <div class="">
            <button class="px-2 py-1 inline-flex text-gray-800"
                :class="isSelected ? 'bg-gray-50 rounded-lg border border-gray-200' : ''">
                {{ title }}
            </button>
        </div>
    </div>
</template>

<script setup>
defineProps(['title', 'isSelected'])
</script>

<style lang="scss" scoped></style>