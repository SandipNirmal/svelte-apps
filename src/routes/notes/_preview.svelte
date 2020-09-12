<script>
  import marked from 'marked';
  export let content = '## No Content';

  $: markup = marked(content);
</script>

<style>
  :global(.prose a) {
    color: #3182ce;
  }
</style>

<article class="prose max-h-screen overflow-y-scroll px-6">
  {@html markup}
</article>
