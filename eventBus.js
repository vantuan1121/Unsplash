import { reactive } from "vue";

export const eventBus = reactive({
  searchQuery: "",
  setSearchQuery(query) {
    this.searchQuery = query;
  },
});
