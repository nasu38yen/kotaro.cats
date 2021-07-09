<template>
  <v-app>
    <v-app-bar clipped-left fixed app>
      <v-container class="note-container py-0 fill-height">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title @click="$router.push('/')" style="cursor: pointer">虎太郎の世界</v-toolbar-title>
          <v-spacer></v-spacer>
          <!--
          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list link>
              <v-list-item to="/note/recentries"><v-list-item-title>最近の記事</v-list-item-title></v-list-item>
              <v-list-item to="/note/last"><v-list-item-title>最新の記事</v-list-item-title></v-list-item>
            </v-list>
          </v-menu>
          <v-btn class="mr-2" nuxt to="/note/recentries">最近の記事</v-btn>
          <v-btn nuxt to="/note/last">最新の記事</v-btn>
          -->
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary clipped>
      <v-list nav>
        <v-list-item-group  v-model="group">
            <v-list-item to="/note/recentries"><v-list-item-title>最近の記事</v-list-item-title></v-list-item>
            <v-list-item to="/note/last"><v-list-item-title>最新の記事</v-list-item-title></v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
