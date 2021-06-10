<template>
    <div id="content-panel">
        <h1>{{ note.title }}</h1>
        <div class="note-info">
          <span class="note-updated">更新：{{ note.updatedAt | format-date }}</span>
          <span class="note-auther">by {{ note.author }}</span>          
        </div> 
        <div v-html="$md.render(note.text)"></div>
   </div>
</template>

<script>
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'NoteContent',
  props: {
    note: {
      type: Object,
    } 
  },
})
</script>