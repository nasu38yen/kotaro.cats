<template>
  <v-container class="note-container">
    <v-row justify="center" >
      <v-col>
        <note-list :notes="notes"></note-list>
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
