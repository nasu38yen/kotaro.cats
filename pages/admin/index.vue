<template>
 <div class="container">
  <h1>Admin Page!!</h1>
  <div>
    <button id="api" @click="callApi">Call API</button>
    <div>
      Message From Api: <strong>{{ message }}</strong>
    </div>
  </div>
 </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    message: ''
  }),
  methods: {
    async callApi () {
      try {
        const res = await axios.get("/api/user");
        this.message = res.data.text;
        console.log(message);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>