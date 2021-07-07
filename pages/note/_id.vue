<template>
  <v-container class="note-container">
    <v-row justify="center" >
      <v-col>
        <div v-if="editable">
          <v-btn nuxt to="edit">編集</v-btn>
          <v-btn nuxt to="new">新規</v-btn>
        </div>
        <note-content :note="note"></note-content>
        <div class="mt-4">
          <v-btn @click="toPrior" :disabled='!prior'>前の記事</v-btn>
          <v-btn @click="toNext" :disabled='!next'>次の記事</v-btn>            
        </div>
        <div class="mt-4">
          <h4>関連記事</h4>
          <note-list v-if="parent" :notes="[parent]" color="blue-grey darken-4"></note-list>
          <note-list v-if="children && (children.length > 0)" :notes="children"></note-list>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default ({
  data: () => ({
    id: '',
    next: {},
    prior: {}
  }),

  async asyncData({ params, $axios}) {
    let id = params.id
    let response
    let note
    let children
    let parent

    if (!id || id === "last") {
      response = await $axios.get('/lastnote/kotaro')
      note = response.data
    } else {
      response = await $axios.get('/note/kotaro/' + id)
      note = response.data
    }
    
    // parent
    if (note && note.parentId) {
      response = await $axios.get('/note/kotaro/' + note.parentId)
      parent = response.data
    }
    
    // children
    if (note) {
      response = await $axios.get('/note_children/kotaro/' + id)
      children = response.data
    }

    return { note, parent, children }
  },

  mounted: async function () {
    this.setNote(this.note)

    this.next = await this.getNext()
    this.prior = await this.getPrior()
  },

  computed: {
    ...mapState({userInfo: 'userInfo'}),

    editable: function () {
      return this.userInfo
    }
  },

  methods: {
    ...mapMutations('note', ['setNote']), 

    async getNext () {
      if (!this.note) return null
      const response = await this.$axios.get('/nextnoteid/kotaro', {
        params: {
          createdAt: this.note.createdAt
        }        
      })
      const note = response.data
      return note
    },
    async getPrior () {
      if (!this.note) return null
      const response = await this.$axios.get('/priornoteid/kotaro', {
        params: {
          createdAt: this.note.createdAt
        }        
      })
      const note = response.data
      return note
    },

    toPrior () {
      if (!this.prior) return
      this.$router.push('/note/' + this.prior.id)
      return
    },
    toNext () {
      if (!this.next) return
      this.$router.push('/note/' + this.next.id)
      return
    }    
  },  
})
</script>

<style>
</style>
