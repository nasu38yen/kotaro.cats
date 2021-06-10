<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <!-- <v-toolbar-title v-text="title" /> -->      
      <img :src="require('@/assets/logo1.png')" alt="logo" height="54px" @click="$router.push('/')" class="logo" />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span class="copylight">&copy; {{ new Date().getFullYear() }}</span>
      <a href="http://peace2.jp">スタジオピース</a>
    </v-footer>
  </v-app>
</template>

<style>
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
  }
}
</script>
