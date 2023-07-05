<template>
    <b-navbar toggleable="lg" type="dark" variant="danger" fixed class="fixed-top">
      <b-container>
        <b-navbar-brand to="/">
          <b-img src="/logo.png" rounded="circle" alt="Circle image"></b-img> Toko Anjing
        </b-navbar-brand>
        <b-navbar-toggle target="navbarNav"></b-navbar-toggle>
        <b-collapse id="navbarNav" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Beranda</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </template>
  
  <script>
  export default {
    // Komponen Navbar
  };
  </script>
  
  <style>
  /* Gaya kustom untuk navbar tetap */
  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }
  </style>
  