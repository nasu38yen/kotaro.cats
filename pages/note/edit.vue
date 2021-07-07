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
import { mapState } from "vuex";

export default ({
    data: () => ({
      note: {}
    }),

    mounted () {
        this.note = JSON.parse(JSON.stringify(this.storeNote)) 
    },

    computed: {
        ...mapState('note', { storeNote: 'note'})
    },
})
</script>
