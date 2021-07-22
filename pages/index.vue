<template>
  <v-container class="note-container">
    <v-row justify="center" >
      <v-col>
          <note-content :note="note"></note-content>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import axios from "axios";

export default {
  data: () => ({
  }),

  async asyncData({$axios}) {
    const response = await $axios.get('/note/kotaro/V08Br87w')
    const note = response.data
    return { note }
  },

  mounted: async function () {
    const userInfo = await this.getUserInfo()
    this.setUserInfo(userInfo)
    if (userInfo) {
      console.log("userId: " + userInfo.userId)
      console.log("userDetails: " + userInfo.userDetails)
    }
  },

  methods: {
    ...mapActions({
    }),
    ...mapMutations(['setUserInfo']), 

    async getUserInfo () {
      const res = await axios.get("/.auth/me");
      return res.data.clientPrincipal;
    },
  }
}
</script>

<style>
</style>
