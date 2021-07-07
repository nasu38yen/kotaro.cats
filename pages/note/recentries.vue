<template>
  <v-container class="note-container">
    <v-row justify="center" >
      <v-col>
          <v-list>
              <v-list-item v-for="note in notes" :key="note.id" link :to="`/note/${note.id}`">
                  <v-list-item-content>
                      <v-list-item-title>{{ note.title }}</v-list-item-title>
                      <v-list-item-subtitle>{{ note.createdAt | format-date }}</v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
          </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Hashids from "hashids";

export default ({
    data: () => ({
    }),

    async asyncData({ params, $axios}) {
        const response = await $axios.get('/note_recentries/kotaro')
        const notes = response.data
        return { notes }
    },

    async mounted () {
    },

    methods: {
    },  
})
</script>
