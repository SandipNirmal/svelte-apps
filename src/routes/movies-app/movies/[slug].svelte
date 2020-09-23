<script context="module">
  export async function preload({ params }) {
    const movieId = params.slug;

    return {
      movieId,
    };
  }
</script>

<script>
  import { mediaStore } from './../media';

  export let movieId = '';

  $: console.log($mediaStore);
</script>

<div>Movie {movieId}</div>
