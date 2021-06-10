<template>
    <div>
      <note-content :note="note"></note-content>
    </div>
</template>

<script>
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  name: 'Note',
  props: {
    note: {
      type: Object,
    }
  },
  computed: {
  }
})
</script>