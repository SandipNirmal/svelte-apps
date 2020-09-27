<script>
  import Nav from './_components/Nav.svelte';
</script>

<style>
  .movie-app {
    background-color: #0c111b;
  }
</style>

<svelte:head>
  <style>
    html {
      background: #0c111b;
    }
  </style>
</svelte:head>

<div class="movie-app w-screen h-full text-white">
  <Nav />
  <slot />
</div>
