<template>
    <div id="content-panel">
        <h1>{{ note.title }}</h1>
        <div class="note-info mb-6">
          <span class="note-created mr-4">登録：{{ note.createdAt | format-date }}</span>
          <span class="note-updated mr-4">更新：{{ note.updatedAt | format-date }}</span>
          <span class="note-author">by {{ note.author }}</span>          
        </div> 
        <div v-html="$md.render(note.text)"></div>
   </div>
</template>

<script>
export default ({
  name: 'NoteContent',
  props: {
    note: {
      type: Object,
    } 
  },
})
</script>