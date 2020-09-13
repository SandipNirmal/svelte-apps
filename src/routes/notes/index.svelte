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
    const content = { id: Date.now(), title: 'New Note', content: '' };
    notes = createNote(content);
  };

  const updateNote = (id, content) => {};

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
</style>

<div class="flex h-screen">
  {#if sidebarOpen}
    <Sidebar {toggleSidebar} {notesList} {setSelected} {selectedNote} />
  {/if}

  <div class="editor flex-1">
    {#if notesList.length}
      <Editor {toggleSidebar} note={currentNote} />
    {:else}
      <div class="flex items-center justify-center w-full h-full">
        <div class="prose text-center">
          <button
            on:click={addNewNote}
            class="py-1 px-2 border bg-green-600 border-green-700 text-white
              outline-none hover:shadow-md">+ Add Note</button>
          <p class="desc">No note found, create a note.</p>
        </div>
      </div>
    {/if}
  </div>
</div>
