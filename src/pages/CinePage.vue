<template>
  <div class="mt-24 mx-4 lg:mt-22 lg:mx-4">
    <div class="flex justify-between">
      <!-- View Options -->
      <div class="py-4 flex items-center">
        <div class="flex items-center gap-x-3">
          <FilterItem title="Grid" :is-selected="true" />
          <FilterItem title="Table" />
        </div>
      </div>

      <div class="flex justify-end gap-x-14">
        <!-- Genre Filters -->
        <div class="py-4 flex items-center w-3/4 overflow-x-auto">
          <p class="text-lg font-medium mr-6">Genre</p>
          <div class="flex items-center gap-x-3">
            <FilterItem title="Action" />
            <FilterItem title="Action" />
            <FilterItem title="Action" />
            <FilterItem title="Action" />
            <FilterItem title="Action" />
            <FilterItem title="Adventure" :is-selected="true" />
          </div>
        </div>

        <!-- Type Filters -->
        <div class="py-4 flex items-center">
          <p class="text-lg font-medium mr-6">Type</p>
          <div class="flex items-center gap-x-3">
            <FilterItem title="Movie" :is-selected="true" />
            <FilterItem title="Series" />
          </div>
        </div>
      </div>
    </div>

    <!-- Table View -->
    <div class="mt-8 overflow-x-auto">
      <table class="table-auto w-full">
        <thead class="bg-gray-50 border border-gray-100">
          <tr>
            <th class="text-start px-4 py-2">#</th>
            <th class="text-start px-4 py-2">Name</th>
            <th class="text-start px-4 py-2">Language</th>
            <th class="text-start px-4 py-2">Genre</th>
            <th class="text-start px-4 py-2">Year</th>
            <th class="text-start px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <!-- <tr v-for="user in users" :key="user.id"> -->
            <td class="border-b-2 border-gray-50 px-4 py-2">1</td>
            <td class="border-b-2 border-gray-50 px-4 py-2">Fight Club (1999)</td>
            <td class="border-b-2 border-gray-50 px-4 py-2">English</td>
            <td class="border-b-2 border-gray-50 px-4 py-2">Action, Thriller</td>
            <td class="border-b-2 border-gray-50 px-4 py-2">1999</td>
            <td class="border-b-2 border-gray-50 px-4 py-2">Movie</td>
          </tr>
          <tr>
          <!-- <tr v-for="user in users" :key="user.id"> -->
            <td class="border-b-2 border-gray-50 px-4 py-2">2</td>
            <td class="border-b-2 border-gray-50 px-4 py-2">Fight Club (1999)</td>
            <td class="border-b-2 border-gray-50 px-4 py-2">English</td>
            <td class="border-b-2 border-gray-50 px-4 py-2">Action, Thriller</td>
            <td class="border-b-2 border-gray-50 px-4 py-2">1999</td>
            <td class="border-b-2 border-gray-50 px-4 py-2">Movie</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import FilterItem from "../components/FilterItem.vue";

export default {
  components: {
    FilterItem,
  },
};
</script>

<style lang="scss" scoped></style>
