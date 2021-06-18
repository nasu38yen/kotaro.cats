<template>
  <v-container class="note-container">
    <v-row justify="center" >
      <v-col>
          <div v-if="editable">
            <v-btn nuxt to="edit">編集</v-btn>
            <v-btn nuxt to="new">新規</v-btn>
          </div>
          <note-content :note="note"></note-content>
          <div>
            <v-btn @click="toPrior" :disabled='!prior'>前の記事</v-btn>
            <v-btn @click="toNext" :disabled='!next'>次の記事</v-btn>            
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
      const response = await this.$axios.get('/nextnoteid/kotaro/' + this.note._ts)
      const note = response.data
      return note
    },
    async getPrior () {
      if (!this.note) return null
      const response = await this.$axios.get('/priornoteid/kotaro/' + this.note._ts)
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
