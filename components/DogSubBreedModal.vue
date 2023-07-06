<template>
  <div>
    <h2 class="cursor-default">Sub Ras {{ breed }}</h2>
    <div class="loading" v-if="isLoading">
      <b-spinner label="Memuat..." variant="primary"></b-spinner>
    </div>
    <div v-else>
      <div v-if="subBreeds.length > 0">
        <b-list-group>
          <b-list-group-item
            v-for="subBreed in subBreeds"
            :key="subBreed"
            @click="openModal(subBreed)"
            class="cursor-pointer"
          >
            {{ subBreed }}
          </b-list-group-item>
        </b-list-group>
      </div>
      <div v-else class="cursor-default" style="margin-bottom:20px">
        Tidak ada data sub ras untuk {{ breed }}.
      </div>
    </div>

    <b-modal v-if="selectedSubBreed" v-model="showModal" @hidden="resetModal">
      <template v-slot:default>
        <div class="d-flex align-items-center">
          <img
            :src="subBreedImages[selectedSubBreed]"
            :alt="selectedSubBreed"
            class="mr-2"
            style="max-height: 124px"
          />
          <p class="cursor-default">{{ selectedSubBreed }}</p>
        </div>
      </template>
    </b-modal>

    <div v-if="isLoading && countdown > 0" class="countdown">
      Memuat dalam {{ countdown }} detik...
    </div>
  </div>
</template>

<script>
import { fetchSubBreeds } from "./api";
export default {
  props: {
    breed: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      subBreeds: [],
      subBreedImages: {},
      isLoading: true,
      selectedSubBreed: null,
      showModal: false,
      countdown: 10,
    };
  },
  mounted() {
    this.startCountdown();
    this.fetchSubBreedsWithDelay();
  },
  watch: {
    breed: function (newBreed) {
      this.resetCountdown();
      this.startCountdown();
      this.fetchSubBreedsWithDelay();
    },
  },
  methods: {
    fetchSubBreedsWithDelay() {
      setTimeout(() => {
        this.fetchSubBreeds();
      }, 10000);
    },
    fetchSubBreeds() {
      this.isLoading = true;

      fetchSubBreeds(this.breed)
        .then((response) => {
          this.subBreeds = response.data.message;
          this.fetchSubBreedImages();
          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error);
          this.isLoading = false;
        });
    },
    fetchSubBreedImages() {
      const promises = this.subBreeds.map((subBreed) =>
        this.$axios
          .get(
            `https://dog.ceo/api/breed/${this.breed}/${subBreed}/images/random`
          )
          .then((response) => {
            this.$set(this.subBreedImages, subBreed, response.data.message);
          })
      );
      Promise.all(promises)
        .then(() => {
          thisisLoading = false;
        })
        .catch((error) => {
          console.error(error);
          this.isLoading = false;
        });
    },
    openModal(subBreed) {
      this.selectedSubBreed = subBreed;
      this.showModal = true;
    },
    resetModal() {
      this.selectedSubBreed = null;
      this.showModal = false;
    },
    startCountdown() {
      this.countdown = 10;
      const timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(timer);
        }
      }, 1000);
    },
    resetCountdown() {
      this.countdown = 0;
    },
  },
};
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-default {
  cursor: default;
}
.countdown {
  text-align: center;
  margin-top: 10px;
}
</style>
