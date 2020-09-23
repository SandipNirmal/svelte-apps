<script>
  export let title = '';
  // export let description = '';
  export let image = '';
  export let media_type = 'movie';
  export let ratings = 5;
</script>

<style>
  div.card-wrapper {
    width: 140px;
    max-width: 140px;
  }

  .card {
    transition: all 0.3s;
    transform: scale3d(1, 1, 1);
  }

  .card:hover,
  .card:focus {
    cursor: pointer;
    z-index: 4;
    /* box-shadow: 0 20px 25px 5px rgba(255, 255, 255, 0.1),
      0 10px 10px 5px rgba(255, 255, 255, 0.09); */
    transform: scale3d(1.3, 1.3, 1.3) perspective(800px);
  }

  .media_type {
    font-size: 10px;
    padding: 1px 4px;
    font-weight: 600;
  }
</style>

<div class="card-wrapper flex flex-col items-center my-4 mx-0 sm:m-4">
  <div
    class="card w-32 h-48 bg-gray-700 bg-cover shadow-md rounded-md"
    style="background-image: url({image})" />

  <div class="text-xs w-full">
    <div class="pt-4 px-1">
      <h5 class="font-medium text-white">{title}</h5>
    </div>
    <div class="flex justify-between px-1 py-1">
      <span
        class="media_type bg-teal-300 uppercase rounded-sm text-gray-700">{media_type}</span>
      <span class="font-medium text-gray-500">{ratings}/10</span>
    </div>
  </div>
</div>
