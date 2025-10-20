<template>
  <div class="mt-24 mx-4 lg:mt-22 lg:mx-4">
    <!-- Filters Section (responsive) -->
    <div class="flex flex-col md:flex-row justify-between gap-y-4 md:gap-y-0">
      <!-- View Options -->
      <div class="py-4 flex items-center">
        <div class="flex items-center gap-x-3">
          <FilterItem
            title="Grid"
            :is-selected="viewMode === 'grid'"
            @click="viewMode = 'grid'"
          />
          <FilterItem
            title="Table"
            :is-selected="viewMode === 'table'"
            @click="viewMode = 'table'"
          />
        </div>
      </div>

      <!-- Filters Group -->
      <div
        class="flex flex-col sm:flex-row flex-wrap justify-end gap-4 md:gap-x-14"
      >
        <!-- Genre Select -->
        <div class="py-2 flex items-center">
          <label class="font-medium mr-2 whitespace-nowrap" for="genre-select"
            >Genre</label
          >
          <select
            id="genre-select"
            v-model="selectedGenre"
            class="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto"
          >
            <option value="">All</option>
            <option
              v-for="genre in availableGenres"
              :key="genre"
              :value="genre"
            >
              {{ genre }}
            </option>
          </select>
        </div>

        <!-- Watched Year Select -->
        <div class="py-2 flex items-center">
          <label
            class="font-medium mr-2 whitespace-nowrap"
            for="watched-year-select"
            >Watched Year</label
          >
          <select
            id="watched-year-select"
            v-model="selectedWatchedYear"
            class="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto"
          >
            <option value="">All</option>
            <option
              v-for="year in availableWatchedYears"
              :key="year"
              :value="year"
            >
              {{ year }}
            </option>
          </select>
        </div>

        <!-- Type Filters -->
        <div class="py-2 flex items-center flex-wrap gap-x-3">
          <p class="font-medium mr-2 whitespace-nowrap">Type</p>
          <FilterItem
            title="Movie"
            :is-selected="selectedType === 'movie'"
            @click="selectedType = 'movie'"
          />
          <FilterItem
            title="Series"
            :is-selected="selectedType === 'series'"
            @click="selectedType = 'series'"
          />
          <FilterItem
            title="All"
            :is-selected="selectedType === null"
            @click="selectedType = null"
          />
        </div>

        <!-- Favorite Filter -->
        <div class="py-2 flex items-center flex-wrap gap-x-3">
          <p class="font-medium mr-2 whitespace-nowrap">Favorite</p>
          <FilterItem
            title="Only Favorites"
            :is-selected="selectedFavorite === true"
            @click="selectedFavorite = true"
          />
          <FilterItem
            title="All"
            :is-selected="selectedFavorite === null"
            @click="selectedFavorite = null"
          />
        </div>
      </div>
    </div>

    <!-- Loading & Error States -->
    <div v-if="isLoading" class="mt-8">Loading watched...</div>
    <div v-else-if="isError" class="mt-8 text-red-500">
      Failed to load watched.
    </div>

    <!-- Table View -->
    <div v-if="viewMode === 'table'" class="mt-8 overflow-x-auto">
      <table class="table-auto w-full">
        <thead class="bg-gray-50 border border-gray-100">
          <tr>
            <th class="text-start px-4 py-2">#</th>
            <th class="text-start px-4 py-2 pl-10">Name</th>
            <th class="text-start px-4 py-2">Genre</th>
            <th class="text-start px-4 py-2">Released</th>
            <th class="text-start px-4 py-2">Watched</th>
            <th class="text-start px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in watchedData?.data || []" :key="item.id">
            <td class="px-4 py-2">
              {{ (currentPage - 1) * limit + index + 1 }}
            </td>
            <td
              :class="`border-b-2 border-gray-50 px-4 py-2 ${!item.isFavorite ? 'pl-10' : ''}`"
            >
              <a
                :href="`https://www.themoviedb.org/${item.movie ? 'movie' : 'tv'}/${item.id}`"
                target="_blank"
                rel="noopener"
                class="hover:border-b-2 border-dotted"
              >
                <span>{{ item.isFavorite ? "🖤" : "" }}</span>
                {{ item.title }}
              </a>
            </td>
            <td class="border-b-2 border-gray-50 px-4 py-2">
              {{ item.genres?.join(", ") || "N/A" }}
            </td>
            <td class="border-b-2 border-gray-50 px-4 py-2">
              {{ item.releasedYear }}
            </td>
            <td class="border-b-2 border-gray-50 px-4 py-2">
              {{ item.watchedYear }}
            </td>
            <td class="border-b-2 border-gray-50 px-4 py-2">
              {{ item.movie ? "Movie" : item.series ? "Series" : "N/A" }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Grid View -->
    <div
      v-else-if="viewMode === 'grid'"
      class="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="item in watchedData?.data || []"
        :key="item.id"
        class="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
      >
        <a
          :href="`https://www.themoviedb.org/${item.movie ? 'movie' : 'tv'}/${item.id}`"
          target="_blank"
          rel="noopener noreferrer"
          class="block"
        >
          <div class="relative">
            <img
              v-if="item.poster"
              :src="`https://image.tmdb.org/t/p/w342${item.poster}`"
              :alt="`${item.title} poster`"
              class="w-full h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div
              v-else
              class="w-full h-64 md:h-72 bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
            >
              <span class="text-gray-500 dark:text-gray-400">No poster</span>
            </div>

            <!-- Favorite badge -->
            <div
              v-if="item.isFavorite"
              class="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </a>

        <div class="p-4 flex-1 flex flex-col">
          <h2
            class="text-lg font-bold text-gray-900 dark:text-white line-clamp-1 mb-1"
          >
            {{ item.title }}
          </h2>

          <p class="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-1">
            {{ item.genres?.join(", ") || "—" }}
          </p>

          <div
            class="mt-auto space-y-1 text-xs text-gray-500 dark:text-gray-400"
          >
            <div class="flex justify-between">
              <span>Watched:</span>
              <span class="font-medium">{{ item.watchedYear || "—" }}</span>
            </div>
            <div class="flex justify-between">
              <span>Released:</span>
              <span class="font-medium">{{ item.releasedYear || "—" }}</span>
            </div>
            <div class="flex justify-between">
              <span>Type:</span>
              <span class="font-medium capitalize">
                {{ item.movie ? "Movie" : item.series ? "Series" : "—" }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div
      v-if="!isLoading && watchedData"
      class="mt-6 flex justify-between items-center"
    >
      <button
        :disabled="currentPage <= 1"
        @click="currentPage--"
        class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>

      <span class="text-gray-600"> {{ currentPage }} / {{ totalPages }} </span>

      <button
        :disabled="currentPage >= totalPages"
        @click="currentPage++"
        class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import FilterItem from "../components/FilterItem.vue";
import { useWatched } from "../hooks/useWatched";

const currentPage = ref(1);

// UI State
const viewMode = ref("table");
const selectedType = ref(null);
const selectedGenre = ref(null);
const selectedWatchedYear = ref(null);
const selectedFavorite = ref(null);

const limit = 20;

const filters = computed(() => {
  const f = {
    page: currentPage.value,
    limit,
  };

  if (selectedType.value === "movie") {
    f.movie = true;
    f.series = false;
  } else if (selectedType.value === "series") {
    f.movie = false;
    f.series = true;
  }

  if (selectedGenre.value) {
    f.genre = selectedGenre.value;
  }

  if (selectedWatchedYear.value) {
    f.watchedYear = selectedWatchedYear.value;
  }

  if (selectedFavorite.value === true) {
    f.isFavorite = true;
  }
  return f;
});

const { data: watchedData, isLoading, isError } = useWatched(filters);

const totalPages = computed(() => {
  return watchedData.value?.totalPages ?? 1;
});

const availableWatchedYears = computed(() => {
  const currentYear = new Date().getFullYear();
  const startYear = 2020;
  const years = [];

  for (let year = currentYear; year >= startYear; year--) {
    years.push(year);
  }
  return years;
});

watch(
  [selectedType, selectedGenre, selectedWatchedYear, selectedFavorite],
  () => {
    currentPage.value = 1;
  },
);

const availableGenres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "TV Movie",
  "Thriller",
  "War",
  "Western",
  "Action & Adventure",
  "Kids",
  "News",
  "Reality",
  "Sci-Fi & Fantasy",
  "Soap",
  "Talk",
  "War & Politics",
].sort();
</script>
