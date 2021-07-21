<template>
  <v-container class="note-container">
    <v-row>
      <v-col>
        <button @click="postMessage">POST Message</button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    sale: {
        keiDate: "2021-7-14 15:26",
        customer: {
            id: "dmg-5637",
            tokName: "橋本商会",
            phone: "0765-99-9999"
        },
        totalPrice: 2400,        
        details: [
            { 
                no: 1,
                product: {
                    code: "IMS-GTDG",
                    name: "散水ホース",
                    price: 200,
                    unit: "個"
                },
                quantity: 2,
                amount: 400,
            },
            { 
                no: 2,
                product: {
                    code: "ASX-200-CTP",
                    name: "雨の日はうちにいて",
                    price: 2000,
                    unit: "式"
                },
                quantity: 1,
                amount: 2000,
            },
        ]
    },
  }),

  mounted: async function () {
  },

  methods: {
    async postMessage () {
        const url = '/message'
        await this.$axios.post(url, this.sale)
        this.$router.push('/')
    },
  }
}
</script>

<style>
</style>
