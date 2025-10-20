<template>
  <div>
    <div class="">
      <button
        class="px-2 py-1 text-gray-800"
        :class="
          isSelected ? 'bg-gray-50 rounded-lg border border-gray-200' : ''
        "
      >
        <span class="flex">
          {{ title }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "isSelected"]);
</script>

<style lang="scss" scoped></style>
