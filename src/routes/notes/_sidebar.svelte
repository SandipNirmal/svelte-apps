<script>
  import { fly } from 'svelte/transition';

  export let toggleSidebar = () => {};
  export let notesList = [];
  export let selectedNote = 0;
  export let setSelected = () => {};

  function getTimeDiffFromNow(time) {
    const now = Date.now();
    const diffInSecs = (now - time) / 1000;

    if (diffInSecs < 60) {
      return `${Math.ceil(diffInSecs)} seconds ago`;
    } else if (diffInSecs > 60 && diffInSecs < 3600) {
      return `${Math.floor(diffInSecs / 60)} mins ago`;
    } else if (diffInSecs > 3600 && diffInSecs < 24 * 3600) {
      return `${Math.floor(diffInSecs / 3600)} hours ago`;
    } else {
      const date = new Date(time);
      return `${date.getDay()}, ${date.getDate()} ${date.getFullMonth()} ${date.getFullYear()}`;
    }
  }

  function selectNote(i) {
    setSelected(i);

    // For smaller devices close the sidebar on selection
    const mq = window.matchMedia('(max-width: 600px)');
    if (mq.matches) {
      toggleSidebar();
    }
  }
</script>

<style>
  .sidebar {
    width: 240px;
  }

  .sidebar ul li {
    width: 200px;
  }

  @media (max-width: 480px) {
    .sidebar {
      position: fixed;
      width: 100%;
      height: 100%;
    }

    .sidebar ul li {
      width: auto;
    }
  }
</style>

<article
  class="flex flex-col sidebar shadow-lg bg-gray-100 z-10"
  transition:fly={{ x: -320, opacity: 1 }}>
  <div
    class="flex justify-between items-center sticky top-0 px-4 py-2 z-20 mb-2">
    <h2 class="font-semibold text-2xl px-2">Notes</h2>
    <button class="px-1" on:click={toggleSidebar}>
      <svg
        aria-hidden="true"
        focusable="false"
        data-icon="times"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512"
        class="w-4 h-5"><path
          fill="currentColor"
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          class="" /></svg>
    </button>
  </div>

  <ul class="overflow-y-auto flex-1 bg-gray-100 px-4 py-2">
    {#each notesList as { title, updatedAt }, i}
      <li
        class="p-2 hover:bg-gray-200 cursor-pointer border-b"
        class:bg-gray-200={i === selectedNote}
        on:click={() => selectNote(i)}>
        <h4 class="font-medium text-sm">{title}</h4>
        <span
          class="text-gray-600 text-xs">{getTimeDiffFromNow(updatedAt)}</span>
      </li>
    {/each}
  </ul>
</article>
