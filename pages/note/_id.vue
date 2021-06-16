<template>
  <v-container class="note-container">
    <v-row justify="center" >
      <v-col>
          <note-content :note="note"></note-content>
          <div v-if="editable">
            <v-btn nuxt to="edit">編集</v-btn>
            <v-btn nuxt to="new">新規</v-btn>
          </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default ({
  data: () => ({
    id: ''
  }),

  async asyncData({ params, $axios}) {
    let id = params.id
    if (!id || id === "last") {
      const response = await $axios.get('/lastnote/kotaro')
      const note = response.data
      return { note }
    } else {
      const response = await $axios.get('/note/kotaro/' + id)
      const note = response.data
      return { note }
    }
  },

  mounted () {
    this.setNote(this.note)
  },

  computed: {
    ...mapState({userInfo: 'userInfo'}),

    editable: function () {
      return this.userInfo
    }
  },

  methods: {
    ...mapMutations('note', ['setNote']), 
  },  
})
</script>

<style>
</style>
