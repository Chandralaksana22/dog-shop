<template>
  <div style="margin-top: 90px">
    <b-carousel :interval="3000" controls indicators>
      <b-carousel-slide
        v-for="image in images"
        :key="image"
        :img-src="image"
        style="height: 550px; object-fit: contain"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>
  
<script>
import { fetchImages } from "./api.js";

export default {
  props: ["breed"],
  data() {
    return {
      images: [],
    };
  },
  mounted() {
    this.fetchImages();
  },
  methods: {
    fetchImages() {
      fetchImages(this.breed)
        .then((images) => {
          this.images = images;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
  