<template>
  <v-container class="note-container">
    <v-row justify="center" >
      <v-col>
          <note-form :note="note"></note-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Hashids from "hashids";

export default ({
    data: () => ({
      note: {}
    }),

    async mounted () {
        this.note = {
            id: "", title: "", text: "", author: "", blogid: "kotaro"
        }
        const response = await this.$axios.get('/notecount/kotaro')
        const noteCount = response.data
        const uid = this.getUID(noteCount)
        this.note.id = uid
    },

    methods: {
      getUID (number) {          
          var hashids = new Hashids('blue rose', 8);
          const uid = hashids.encode(number)
          return uid
      }
    },  
})
</script>
