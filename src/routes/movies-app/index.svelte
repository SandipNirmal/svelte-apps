<script>
  import Nav from './_nav.svelte';
  import Card from '../../components/MovieCard.svelte';

  import { trending } from './data';
</script>

<!--<style>
  .movie-app {
    background-color: #f8f8f8;
  }
</style>-->

<div class="movie-app w-screen h-screen">
  <Nav />

  <article
    class="p-4 my-8 w-full flex flex-wrap justify-center sm:justify-start">
    {#each trending as { title, name, vote_average, poster_path, media_type }}
      <Card
        title={title || name}
        ratings={vote_average}
        {media_type}
        image="https://image.tmdb.org/t/p/w500/{poster_path}" />
    {/each}

    <!-- <div>Carousal</div>
    <div>Tabs</div>
    <div>Content</div> -->
  </article>
</div>
