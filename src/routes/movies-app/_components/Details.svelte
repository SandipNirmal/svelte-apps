<script>
  import { fly } from 'svelte/transition';

  import Badge from './Badge.svelte';
  import Cast from './Cast.svelte';

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

  const casts = [
    {
      cast_id: 493,
      character: 'Tony Stark / Iron Man',
      credit_id: '5e85cd735294e700134abf26',
      gender: 2,
      id: 3223,
      name: 'Robert Downey Jr.',
      order: 0,
      profile_path: '/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg',
    },
    {
      cast_id: 494,
      character: 'Steve Rogers / Captain America',
      credit_id: '5e85cd84691cd50018593984',
      gender: 2,
      id: 16828,
      name: 'Chris Evans',
      order: 1,
      profile_path: '/bOH7QqvC9FShVMzWH2wBTtb2iwX.jpg',
    },
    {
      cast_id: 594,
      character: 'Bruce Banner / Hulk',
      credit_id: '5e85e1ab0c3ec800135aabd6',
      gender: 2,
      id: 103,
      name: 'Mark Ruffalo',
      order: 2,
      profile_path: '/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg',
    },
    {
      cast_id: 496,
      character: 'Thor Odinson',
      credit_id: '5e85ce145294e700154ac43f',
      gender: 2,
      id: 74568,
      name: 'Chris Hemsworth',
      order: 3,
      profile_path: '/oSGVmWhn4WT4TI4PCiQrpym6LfW.jpg',
    },
    {
      cast_id: 497,
      character: 'Natasha Romanoff / Black Widow',
      credit_id: '5e85ce255aba320018e7595e',
      gender: 1,
      id: 1245,
      name: 'Scarlett Johansson',
      order: 4,
      profile_path: '/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg',
    },
    {
      cast_id: 498,
      character: 'Clint Barton / Hawkeye',
      credit_id: '5e85ce35e38bd80016adac1a',
      gender: 2,
      id: 17604,
      name: 'Jeremy Renner',
      order: 5,
      profile_path: '/ycFVAVMliCCf0zXsKWNLBG3YxzK.jpg',
    },
    {
      cast_id: 499,
      character: 'James Rhodes / War Machine',
      credit_id: '5e85ce4598f1f10014ab1a9e',
      gender: 2,
      id: 1896,
      name: 'Don Cheadle',
      order: 6,
      profile_path: '/b1EVJWdFn7a75qVYJgwO87W2TJU.jpg',
    },
    {
      cast_id: 500,
      character: 'Scott Lang / Ant-Man',
      credit_id: '5e85ce543344c6001340eb29',
      gender: 2,
      id: 22226,
      name: 'Paul Rudd',
      order: 7,
      profile_path: '/8eTtJ7XVXY0BnEeUaSiTAraTIXd.jpg',
    },
    {
      cast_id: 501,
      character: "T'Challa / Black Panther",
      credit_id: '5e85ce67691cd5001259536b',
      gender: 2,
      id: 172069,
      name: 'Chadwick Boseman',
      order: 8,
      profile_path: '/1lz1wLOuPFSRIratMz0SxD3tkJ.jpg',
    },
    {
      cast_id: 502,
      character: 'Stephen Strange / Doctor Strange',
      credit_id: '5e85ce7998f1f10016aaec05',
      gender: 2,
      id: 71580,
      name: 'Benedict Cumberbatch',
      order: 9,
      profile_path: '/wz3MRiMmoz6b5X3oSzMRC9nLxY1.jpg',
    },
    {
      cast_id: 503,
      character: 'Carol Danvers / Captain Marvel',
      credit_id: '5e85ce895aba320016e702d9',
      gender: 1,
      id: 60073,
      name: 'Brie Larson',
      order: 10,
      profile_path: '/qknxdyQDprLTZPx7PCN3F6y9W86.jpg',
    },
    {
      cast_id: 504,
      character: 'Peter Parker / Spider-Man',
      credit_id: '5e85ce995aba320018e759f1',
      gender: 2,
      id: 1136406,
      name: 'Tom Holland',
      order: 11,
      profile_path: '/ip7aXVH8s6wXv8cY6KI14OZgCI8.jpg',
    },
    {
      cast_id: 505,
      character: 'Nebula',
      credit_id: '5e85cecae38bd80016adaced',
      gender: 1,
      id: 543261,
      name: 'Karen Gillan',
      order: 12,
      profile_path: '/52kqB0Bei1TaTBx2rABrijVhhTG.jpg',
    },
    {
      cast_id: 506,
      character: 'Gamora',
      credit_id: '5e85ced55aba320018e75a3f',
      gender: 1,
      id: 8691,
      name: 'Zoe Saldana',
      order: 13,
      profile_path: '/vQBwmsSOAd0JDaEcZ5p43J9xzsY.jpg',
    },
    {
      cast_id: 507,
      character: 'Hope Van Dyne / Wasp',
      credit_id: '5e85cef05aba320018e75a72',
      gender: 1,
      id: 19034,
      name: 'Evangeline Lilly',
      order: 14,
      profile_path: '/knNYgtmT2G5qDpjttzYkKUXqwUC.jpg',
    },
    {
      cast_id: 508,
      character: 'Valkyrie',
      credit_id: '5e85cf3bda10f00018ee29fb',
      gender: 1,
      id: 62561,
      name: 'Tessa Thompson',
      order: 15,
      profile_path: '/fycqdiiM6dsNSbnONBVVQ57ILV1.jpg',
    },
    {
      cast_id: 509,
      character: 'Frigga',
      credit_id: '5e85cf4f691cd50018593c58',
      gender: 1,
      id: 14343,
      name: 'Rene Russo',
      order: 16,
      profile_path: '/bA6GrFuTk9xWYxGOJCLjjdmdAeW.jpg',
    },
    {
      cast_id: 510,
      character: 'Wanda Maximoff / Scarlet Witch',
      credit_id: '5e85cf5f5294e700114ad3d5',
      gender: 1,
      id: 550843,
      name: 'Elizabeth Olsen',
      order: 17,
      profile_path: '/wIU675y4dofIDVuhaNWPizJNtep.jpg',
    },
    {
      cast_id: 511,
      character: 'Sam Wilson / Falcon',
      credit_id: '5e85cf73e38bd80011ad790c',
      gender: 2,
      id: 53650,
      name: 'Anthony Mackie',
      order: 18,
      profile_path: '/kfTwOYr3iUucmYz8kPjhYy07G2Z.jpg',
    },
    {
      cast_id: 512,
      character: 'Bucky Barnes / Winter Soldier',
      credit_id: '5e85cf96691cd50018593cab',
      gender: 2,
      id: 60898,
      name: 'Sebastian Stan',
      order: 19,
      profile_path: '/g0iWJKxhseovpNKTh7cAIqkNCGW.jpg',
    },
    {
      cast_id: 513,
      character: 'Loki',
      credit_id: '5e85cfa498f1f10014ab1cb6',
      gender: 2,
      id: 91606,
      name: 'Tom Hiddleston',
      order: 20,
      profile_path: '/mclHxMm8aPlCPKptP67257F5GPo.jpg',
    },
  ];
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

    <section>
      <h4 class="text-xl font-medium" style="color: white">Cast</h4>

      <div class="flex flex-wrap">
        {#each casts as { name, character, profile_path }}
          <Cast
            {name}
            {character}
            profileImage="https://image.tmdb.org/t/p/w45{profile_path}" />
        {/each}
      </div>
    </section>
  </div>
</article>
