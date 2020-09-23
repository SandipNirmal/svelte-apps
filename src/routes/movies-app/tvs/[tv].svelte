<script context="module">
  export async function preload({ params }) {
    const showId = params.tv;

    return {
      showId,
    };
  }
</script>

<script>
  export let showId = '';
</script>

<div>TV Show: {showId}</div>
