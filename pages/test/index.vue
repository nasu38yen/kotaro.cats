<template>
  <v-container class="note-container">
    <v-row>
      <v-col>
        <div>{{$store.state.counter}}</div>
        <button @click="increment">INC</button>
        <button @click="inc10">INC10</button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import axios from "axios";

export default {
  data: () => ({
    message: '',
  }),

  mounted: async function () {
    //console.log('aaaaaa')
    this.inc10()
    const userInfo = await this.getUserInfo()
    this.setUserInfo(userInfo)
    if (userInfo) {
      console.log("login: " + userInfo.userId)
    }
  },

  methods: {
    ...mapActions({
      inc10: 'inc10',
    }),
    ...mapMutations(['setUserInfo']), 

    async getUserInfo () {
      const res = await axios.get("/.auth/me");
      return res.data.clientPrincipal;
    },

    async callApi () {
      try {
        const res = await this.$axios.get("/messagae");
        this.message = res.data.text;
        console.log(message);
      } catch (error) {
        console.error(error);
      }
    },
    increment () {
      this.$store.commit('increment')
    }
  }
}
</script>

<style>
</style>
