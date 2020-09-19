<script>
  export let title = '';
  export let description = '';
  export let image = '';
  export let media_type = 'movie';
  export let ratings = 5;
</script>

<div
  class="w-32 h-48 bg-gray-600 relative bg-cover"
  style="background-image: url({image})">
  <div class="absolute p-1 bg-gray-600 bottom-0">
    <h5 class="text-sm font-medium">{title}</h5>
  </div>
</div>
