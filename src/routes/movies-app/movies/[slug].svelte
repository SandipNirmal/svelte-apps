<script context="module">
  export async function preload({ params }) {
    const movieId = params.slug;

    return {
      movieId,
    };
  }
</script>

<script>
  import Details from './../_components/Details.svelte'

  export let movieId = '';
</script>

<Details mediaId={movieId} mediaType='movie' />
