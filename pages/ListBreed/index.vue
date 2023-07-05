<template>
  <div>
    <Navbar />

    <div v-if="selectedBreed === 'shiba'">
      <DogImageCarousel :breed="selectedBreed" />
    </div>
    <div v-if="selectedBreed === 'terrier'">
      <DogImageSlides :breed="selectedBreed" />
    </div>
    <b-container>
      <div>
        <DogBreedList @select-breed="setSelectedBreed" />
      </div>
      <div>
        <DogSubBreedModal v-if="selectedBreed" :breed="selectedBreed" />
      </div>
    </b-container>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import DogBreedList from "~/components/DogBreedList.vue";
import DogSubBreedModal from "~/components/DogSubBreedModal.vue";
import DogImageCarousel from "~/components/DogImageCarousel.vue";
import DogImageSlides from "~/components/DogImageSlides.vue";

export default {
  components: {
    Navbar,
    DogBreedList,
    DogSubBreedModal,
    DogImageCarousel,
    DogImageSlides,
  },
  data() {
    return {
      selectedBreed: "",
    };
  },
  methods: {
    setSelectedBreed(breed) {
      this.selectedBreed = breed;
    },
  },
};
</script>

<style scoped>
.default {
  cursor: default;
}
</style>
