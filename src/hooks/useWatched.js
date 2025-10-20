import { useQuery } from "@tanstack/vue-query";
import { endpoints } from "../api/endpoints";
import { computed, unref } from "vue";

async function fetchWatched(filters = {}) {
  const params = new URLSearchParams();

  if (filters.movie !== undefined) params.set("movie", String(filters.movie));
  if (filters.series !== undefined)
    params.set("series", String(filters.series));
  if (filters.genre) params.set("genre", filters.genre);
  if (filters.watchedYear)
    params.set("watchedYear", String(filters.watchedYear));
  if (filters.search) params.set("search", filters.search);
  if (filters.page) params.set("page", String(filters.page));
  if (filters.limit) params.set("limit", String(filters.limit));
  if (filters.isFavorite) params.set("isFavorite", Boolean(filters.isFavorite));

  const url = `${endpoints.watched}${params.toString() ? `?${params.toString()}` : ""}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch watched items");
  return res.json();
}

export function useWatched(filtersRef) {
  return useQuery({
    queryKey: computed(() => ["watched", unref(filtersRef)]),
    queryFn: () => fetchWatched(unref(filtersRef)),
    keepPreviousData: true,
    staleTime: 1000 * 30,
  });
}
