<template>
  <div style="margin-top: 130px">
    <h2 class="cursor-default">Ras Anjing</h2>
    <div>
      <b-input-group class="mb-3">
        <b-form-input v-model="filter" placeholder="Masukkan nama ras"></b-form-input>
        <b-input-group-append>
          <b-button size="sm" @click="filterBreeds" variant="danger">Filter</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>

    <div class="loading" v-if="isLoading">
      <b-spinner
        class="mx-auto"
        label="Memuat..."
        variant="primary"
      ></b-spinner>
    </div>
    <b-row v-else cols="1" cols-sm="2" cols-md="4" cols-lg="5">
      <b-col
        v-for="(breed, index) in paginatedBreeds"
        :key="index"
        @click="showSubBreeds(breed)"
      >
        <b-card class="card">
          <b-card-text class="cursor-pointer">{{ breed }}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-pagination
      v-if="!isLoading && totalPages > 1"
      :total-rows="filteredBreeds.length"
      :per-page="perPage"
      v-model="currentPage"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
import { fetchAllBreeds } from "./api";

export default {
  data() {
    return {
      breeds: [],
      filteredBreeds: [],
      isLoading: true,
      currentPage: 1,
      perPage: 15,
      filter: "",
    };
  },
  computed: {
    paginatedBreeds() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.filteredBreeds.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.filteredBreeds.length / this.perPage);
    },
  },
  mounted() {
    this.fetchBreeds();
  },
  methods: {
    fetchBreeds() {
      setTimeout(() => {
        fetchAllBreeds()
          .then((response) => {
            this.breeds = Object.keys(response.data.message);
            this.filteredBreeds = this.breeds;
            this.isLoading = false;
          })
          .catch((error) => {
            console.error(error);
            this.isLoading = false;
          });
      }, 5000);
    },
    showSubBreeds(breed) {
      this.$emit("select-breed", breed);
    },
    filterBreeds() {
      if (this.filter.trim() === "") {
        this.filteredBreeds = this.breeds;
      } else {
        const filterValue = this.filter.toLowerCase();
        this.filteredBreeds = this.breeds.filter((breed) =>
          breed.toLowerCase().includes(filterValue)
        );
      }
      this.currentPage = 1;
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-default {
  cursor: default;
}
</style>
