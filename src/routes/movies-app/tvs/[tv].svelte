<script context="module">
  export async function preload({ params }) {
    const showId = params.tv;

    return {
      showId,
    };
  }
</script>

<script>
  import Details from './../_components/Details.svelte';
  export let showId = '';
</script>

<Details mediaId={showId} mediaType="tv" />
