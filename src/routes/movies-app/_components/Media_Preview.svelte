<script>
  import Spinner from './Spinner.svelte';

  export let media = {};
  export let loading = false;

  let {
    title = '',
    name = '',
    vote_average: ratings = 0,
    backdrop_path = '',
    media_type = 'movie',
    overview: description = '',
    adult = false,
    id = '',
  } = media;

  let image = '';

  $: {
    ({
      title = '',
      name = '',
      vote_average: ratings = 0,
      backdrop_path = '',
      media_type = 'movie',
      overview: description = '',
      adult = false,
      id = '',
    } = media);
    image = `https://image.tmdb.org/t/p/w780${backdrop_path}`;
  }
</script>

<style>
  .media {
    height: calc(61vh - 48px);
    transition: all 0.5s;
    margin: 0 auto;
  }

  .details {
    /* transition: all 0.5s; */
    background: linear-gradient(to right, #0c111b 40%, transparent);
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

{#if loading}
  <div class="media flex items-center justify-center">
    <Spinner />
  </div>
{:else}
  <a href="./movies-app/{media_type}s/{id}" on:mouseenter>
    <div
      class="media relative w-screen max-w-screen-xl bg-cover bg-gray-700
        cursor-pointer text-sm"
      style="background-image: url({image})">
      <div
        class="details absolute text-white h-full w-3/5 md:w-1/2 left-0 top-0
          p-4 pr-0 md:p-12">
        <div class="flex items-center text-xs">
          <span class="meta padding-xs">{media_type}</span>
          {#if adult}<span class="meta padding-xs">18+</span>{/if}
          <div>
            <span class="bg-yellow-500 padding-xs text-black">{ratings}</span> /
            10
          </div>
        </div>

        <h5 class="mt-2 text-2xl font-medium">{title || name}</h5>
        <p class="mt-2 text-gray-300 pr-5 text-opacity-75">{description}</p>
      </div>
    </div>
  </a>
{/if}
