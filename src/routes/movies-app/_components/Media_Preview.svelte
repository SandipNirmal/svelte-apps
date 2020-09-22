<script>
  export let title = '';
  export let description = '';
  export let image = '';
  export let media_type = 'movie';
  export let ratings = 5;
  export let adult = false;
</script>

<style>
  .media {
    height: calc(61vh - 48px);
    transition: all 0.5s;
  }

  .details {
    /* transition: all 0.5s; */
    background: linear-gradient(to right, #000 40%, transparent);
    overflow-y: hidden;
  }

  .meta {
    font-size: 10px;
    border-radius: 2px;
    border: 1px solid #fff;
    text-transform: uppercase;
    margin-right: 16px;
  }
  .padding-xs {
    padding: 1px 2px;
  }
</style>

<div
  class="media relative w-screen bg-cover bg-gray-700 cursor-pointer text-sm"
  style="background-image: url({image})">
  <div
    class="details absolute text-white h-full w-3/5 md:w-1/2 left-0 top-0 p-4
      pr-0 md:p-12">
    <div class="flex items-center text-xs">
      <span class="meta padding-xs">{media_type}</span>
      {#if adult}<span class="meta padding-xs">18+</span>{/if}
      <div>
        <span class="bg-yellow-500 padding-xs text-black">{ratings}</span> / 10
      </div>
    </div>

    <h5 class="mt-2 text-2xl font-medium">{title}</h5>
    <p class="mt-2 text-gray-300 pr-5 text-opacity-75">{description}</p>
  </div>
</div>
