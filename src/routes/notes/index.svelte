<script>
  import Sidebar from './_sidebar.svelte';
  import Editor from './_editor.svelte';

  const storage_key = 'notes';
  let sidebarOpen = false;
  let selectedNote = 0;
  let notes = {};
  let currentNote = {};
  let notesList = [];

  const toggleSidebar = () => (sidebarOpen = !sidebarOpen);
  const setSelected = (index) => (selectedNote = index);

  let getNotes = () => {};
  let createNote = () => {};
  let getNote = () => {};

  if (process.browser) {
    // return all notes
    getNotes = () => {
      return JSON.parse(localStorage.getItem(storage_key) || '{}');
    };

    // add new note
    createNote = (content) => {
      const { id } = content;
      const notes = getNotes();

      notes[id] = { ...content, createdAt: Date.now(), updatedAt: Date.now() };
      localStorage.setItem(storage_key, JSON.stringify(notes));
      return getNotes();
    };

    getNote = (id) => {
      const notes = getNotes();
      return notes[id] || {};
    };
  }

  notes = getNotes() || {};

  const addNewNote = () => {
    const content = {
      id: Date.now(),
      title: 'New Note',
      content: `# New Note
 Add Something...`,
    };
    notes = createNote(content);
  };

  const updateNote = (id, content) => {
    const currentNotes = getNotes();
    currentNotes[id] = { ...content, updatedAt: Date.now() };
    localStorage.setItem(storage_key, JSON.stringify(currentNotes));
    notes = getNotes();
  };

  const deleteNote = (id) => {
    const currentNotes = getNotes();
    delete currentNotes[id];
    localStorage.setItem(storage_key, JSON.stringify(currentNotes));
    notes = getNotes();
  };

  $: notesList = Object.keys(notes)
    .map((note) => notes[note])
    .sort((a, b) => b.updatedAt - a.updatedAt);
  $: currentNote = notesList[selectedNote] || {};
</script>

<style>
  button {
    border-radius: 20px;
  }

  .prose p.desc {
    margin-top: 8px;
  }

  .info {
    position: fixed;
    bottom: 72px;
    right: 16px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
  }
</style>

<svelte:head>
  <meta name="description" content="Notes Apps | Built with Svelte" />
  <title>Notes App</title>
</svelte:head>

<div class="flex h-screen">
  {#if sidebarOpen}
    <Sidebar
      {toggleSidebar}
      {notesList}
      {setSelected}
      {selectedNote}
      {deleteNote} />
  {/if}

  <div class="editor flex-1">
    {#if notesList.length}
      <Editor {toggleSidebar} note={currentNote} {updateNote} {addNewNote} />
    {:else}
      <div class="flex items-center justify-center w-full h-full">
        <div class="prose text-center">
          <button
            on:click={addNewNote}
            class="py-1 px-2 border bg-green-700 text-white outline-none
              hover:shadow-md">+ Add Note</button>
          <p class="desc">No Note Found, Create One.</p>
        </div>
      </div>
    {/if}
  </div>

  <div class="info bg-gray-300 shadow-md hover:shadow-xl">
    <a
      href="https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet"
      class="px-2"
      target="_blank"
      title="Markdown Cheatsheet">
      <svg
        aria-hidden="true"
        focusable="false"
        data-icon="info"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192 512"
        class="w-6 h-6"><path
          fill="currentColor"
          d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"
          class="" /></svg>
    </a>
  </div>
</div>
