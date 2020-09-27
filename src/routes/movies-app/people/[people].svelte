<script context="module">
  export async function preload({ params }) {
    const personId = params.people;

    return {
      personId,
    };
  }
</script>

<script>
  export let personId = '';
</script>

<div>Person: {personId}</div>
