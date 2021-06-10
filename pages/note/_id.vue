<template>
  <v-container>
    <v-row justify="center" >
      <v-col class="col-note">
          <note :note="note"></note>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default ({
  data: () => ({
  }),
  async asyncData({ params}) {
        const getUrl = '/api/note/' + params.id
        const response = await axios.get(getUrl)
        const note = response.data
        return { note }
  },
})
</script>
