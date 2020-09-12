<script>
import marked from 'marked';
export let content = '## No Content';

$: markup = marked(content);
</script>

<p class="prose">
  {@html markup}
</p>