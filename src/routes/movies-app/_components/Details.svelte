<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  import Badge from './Badge.svelte';
  import Spinner from './Spinner.svelte';
  // import Cast from './Cast.svelte';
  import { API_KEY } from '../config';

  import { mediaStore } from './../media';
  export let mediaId = '';
  export let mediaType = 'movie';

  let media = $mediaStore.id ? $mediaStore : {};

  onMount(async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${API_KEY}`
    );

    media = await res.json();

    if (!res.ok) {
      console.log('Error');
    }
  });
</script>

<style>
  .poster {
    height: 40vh;
  }
</style>

<article in:fly={{ y: 200, duration: 500 }} out:fly={{ y: 200, duration: 300 }}>
  <div
    class="poster relative w-screen bg-cover bg-gray-700 h-56"
    style="background-image: url({`https://image.tmdb.org/t/p/w780${media.backdrop_path}`})" />

  {#if media.title || media.name}
    <div class="max-w-screen-lg w-full p-4 md:px-8 prose text-white mx-auto">
      <section>
        <Badge>{mediaType.toUpperCase()}</Badge>
        <h2 class="border-none" style="color: #fff; margin: 0">
          {media.title || media.name}
        </h2>
        <div class="flex flex-wrap">
          <div class="flex items-center text-sm pr-4">
            <span class="font-light text-gray-200">Released:</span>
            <h6 class="font-medium pl-1">
              {media.release_date || media.first_air_date}
            </h6>
          </div>

          <div class="flex items-center text-sm pr-4">
            <span class="font-light text-gray-200">Ratings:</span>
            <h6 class="font-medium pl-1">{media.vote_average}/10</h6>
          </div>
        </div>

        <p class="mt-4 text-gray-100 text-sm">{media.overview}</p>
      </section>

      <!-- <section>
      <h4 class="text-xl font-medium" style="color: white">Cast</h4>
      <div class="flex flex-wrap">
        {#each casts as { name, character, profile_path }}
          <Cast
            {name}
            {character}
            profileImage="https://image.tmdb.org/t/p/w45{profile_path}" />
        {/each}
      </div>
    </section> -->
    </div>
  {:else}
    <div class="h-40 flex items-center justify-center">
      <Spinner />
    </div>
  {/if}
</article>
