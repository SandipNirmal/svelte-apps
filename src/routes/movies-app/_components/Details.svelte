<script>
  import { fly } from 'svelte/transition';

  import { mediaStore } from './../media';
  export let mediaId = '';
  export let mediaType = 'movie';

  let media = $mediaStore.id
    ? $mediaStore
    : {
        adult: false,
        backdrop_path: '/zzWGRw277MNoCs3zhyG3YmYQsXv.jpg',
        genre_ids: [28, 12, 18, 14, 10752],
        id: 337401,
        media_type: 'movie',
        original_language: 'en',
        original_title: 'Mulan',
        overview:
          'When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.',
        popularity: 1457.551,
        poster_path: '/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg',
        release_date: '2020-09-10',
        title: 'Mulan',
        video: false,
        vote_average: 7.5,
        vote_count: 1707,
      };

  const imageUrl = media.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${media.backdrop_path}`
    : 'No Image';
</script>

<style>
  .poster {
    height: 50vh;
  }
</style>

<article in:fly={{ y: 200, duration: 500 }} out:fly={{ y: 200, duration: 300 }}>
  <div
    class="poster relative w-screen bg-cover bg-gray-700 h-56"
    style="background-image: url({imageUrl})" />

  <div class="max-w-screen-xl w-full p-4 md:px-8 prose text-white mx-auto">
    <h2 class="border-none" style="color: #fff; margin-bottom: 0">
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
  </div>
</article>
