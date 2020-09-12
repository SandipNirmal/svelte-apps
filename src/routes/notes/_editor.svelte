<script>
  import { writable } from 'svelte/store';
  import Preview from './_preview.svelte';

  const content = writable(`# Svelte Apps
Repository for application examples built using [Svelte](https://svelte.dev) and it's web framework [Sapper](https://sapper.svelte.dev). Sapper is used as a framework here which is being used to manage things like routing.

### Applications

1. Notes App
2. Todo App
3. Weather App
4. Quizz App
5. Pomodoro App
6. Movies & TV Shows App
7. Profile App (Like Github/Twitter) 
`);
  let isPreview = false;
</script>

<div class="flex flex-col h-screen">
  <div>
    <button on:click={() => (isPreview = !isPreview)}>
      {#if isPreview}
        <svg
          aria-hidden="true"
          data-icon="pencil-alt"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="w-4 h-4"><path
            fill="currentColor"
            d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
            class="" />Edit</svg>
      {:else}
        <svg
          aria-hidden="true"
          data-icon="eye"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="w-4 h-4"><path
            fill="currentColor"
            d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
            class="" />
          Preview
        </svg>
      {/if}
    </button>
  </div>

  {#if !isPreview}
    <textarea
      class="border border-gray-200 py-2 px-4 h-screen cursor-text"
      on:input={(e) => {
        $content = e.target.value;
      }}
      bind:value={$content} />
  {:else}
    <Preview content={$content} />
  {/if}
</div>
