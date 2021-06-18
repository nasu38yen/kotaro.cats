<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app  >
      <v-container class="note-container py-0 fill-height">
          <v-toolbar-title @click="$router.push('/')">虎太郎の世界</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn nuxt to="/note/last">日記</v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <v-container class="note-container py-0 fill-height">
        <span class="copylight">&copy; {{ new Date().getFullYear() }}</span>
        <a href="http://peace2.jp">スタジオピース</a>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style>
div.note-container {
  max-width: 900px;
}
.note-container img{
  max-width: 100%;
}
.logo {
  cursor: pointer;
}
.theme--dark.v-app-bar.v-toolbar.v-sheet {
    background-color: #253c50;
}
.copylight {
  margin-right: 10px;
}

</style>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
    }
  },
  methods: {
  }
}
</script>
