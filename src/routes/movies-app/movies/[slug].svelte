<script context="module">
  export async function preload({ params }) {
    const movieId = params.slug;

    return {
      movieId,
    };
  }
</script>

<script>
  export let movieId = '';
</script>

<div>Movie {movieId}</div>
