<template>
  <b-container class="container">
    <b-row cols="1" cols-lg="2" class="row">
      <b-col class="col">
        <div class="content">
          <h1>Your Pet is Part of Our Family</h1>
          <p>
            Let us treat your pet like our own family with best service and
            special package.
          </p>
          <b-button pill variant="danger" @click="redirectToIndex"
            >Get Started</b-button
          >
        </div>
      </b-col>
      <b-col class="col">
        <b-img src="/hero.png" rounded="circle" alt="Circle image"></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    redirectToIndex() {
      this.$router.push("/ListBreed");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.row {
  align-items: center;
}

.col {
  text-align: center;
}

.content {
  max-width: 400px;
  margin: auto;
}
</style>
