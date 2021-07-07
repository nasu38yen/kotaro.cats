<template>
  <v-list :color="color">
    <v-list-item v-for="note in notes" :key="note.id" link :to="`/note/${note.id}`">
      <v-list-item-content>
        <v-list-item-title>{{ note.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ note.createdAt | format-date }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default ({
  name: 'NoteList',
  props: {
    notes: [],
    color: ""
  },
})
</script>