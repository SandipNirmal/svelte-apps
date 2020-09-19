<script>
  import {onMount, createEventDispatcher } from "svelte";
  
  const dispatch = createEventDispatcher();

  let quillEditor;
  export let placeholder = "Compose...";
  export let toggleSidebar = () => {};
  export let addNewNote = () => {};
  export let note = { content: 'No Content' };

  const createNewNote = () => {
    addNewNote();
  };

  onMount(async () => {
    import("quill/dist/quill.snow.css");
    const quillModule = await import("quill/dist/quill");
    const Quill = quillModule.default;

    quillEditor = new Quill("#editor-container", {
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
          ["bold", "italic", "underline", "strike"], // toggled buttons
          ["blockquote", "code-block"],

          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }], // superscript/subscript
          // [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          // [{ direction: "rtl" }], // text direction

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          // [{ font: [] }],
          [{ align: [] }],

          ["clean"] // remove formatting button
        ]
      },
      placeholder,
      theme: "snow" // or 'bubble'
    });

    quillEditor.on("text-change", function() {
      dispatch("text-change", {
        note: {
          ...note,
          content: quillEditor.root.innerHTML,
          title: quillEditor.getText(0, 12)
        }
      });
    });
  });
</script>

<style>
  :global(#editor-container > .ql-editor) {
    padding: 0;
  }
</style>

<div class="flex flex-col h-screen">
  <div class="flex justify-between py-2 px-2 bg-gray-300 header">
    <button on:click={toggleSidebar} class="px-2">
      <svg
        aria-hidden="true"
        focusable="false"
        data-icon="bars"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="w-5 h-5"><path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" /></svg>
    </button>

    <div class="flex">
      <button class="flex items-center py-1 px-2 mr-1" on:click={createNewNote}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-icon="plus"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-4 h-4 mr-2"><path
            fill="currentColor"
            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg>
        New
      </button>
    </div>
  </div>
  <div class="prose py-2 pb-8 h-screen cursor-text outline-none foucs:border-none" id="editor-container">
    {@html note.content}
  </div>
</div>
