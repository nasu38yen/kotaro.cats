<template>
    <div id="content-panel">
        <h1 class="note-title mb-4">{{ note.title }}</h1>
        <div class="note-body mb-6" v-html="$md.render(note.text)"></div>
        <div class="note-info">
          <span class="note-created mr-4">登録：{{ note.createdAt | format-date }}</span>
          <span class="note-updated mr-4">更新：{{ note.updatedAt | format-date }}</span>
          <span class="note-author">by {{ note.author }}</span>          
        </div>
   </div>
</template>

<script>
export default ({
  name: 'NoteContent',
  props: {
    note: {} 
  },
})
</script>