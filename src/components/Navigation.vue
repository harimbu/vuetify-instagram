<template lang="">
  <v-navigation-drawer fixed permanent width="320" class="px-7">
    <v-list class="mt-1">
      <v-list-item class="d-flex align-center">
        <v-list-item-icon>
          <v-icon small>mdi-instagram</v-icon>
        </v-list-item-icon>
        <v-card width="110" flat link>
          <v-img :src="navItem.logo" />
        </v-card>
      </v-list-item>
    </v-list>
    <v-card flat class="mt-16 pt-8">
      <div class="d-flex justify-center" color="primary">
        <v-avatar class="avatar" size="80">
          <v-img :src="navItem.avatar" />
        </v-avatar>
      </div>
      <v-card-title class="justify-center">
        <div class="text-center ">
          <p class="subtitle-2 mb-0">Lady Gaga</p>
          <p class="caption grey--text">New York, USA</p>
        </div>
      </v-card-title>
    </v-card>

    <v-divider class="ma-4"></v-divider>

    <v-container class="d-flex flex-row justify-space-between text-center">
      <v-flex>
        <div class="subtitle-2">784</div>
        <div class="caption grey--text">POSTS</div>
      </v-flex>
      <v-flex>
        <div class="subtitle-2">784</div>
        <div class="caption grey--text">POSTS</div>
      </v-flex>
      <v-flex>
        <div class="subtitle-2">784</div>
        <div class="caption grey--text">POSTS</div>
      </v-flex>
    </v-container>

    <v-divider class="ma-4"></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in navItem.items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-container class="d-flex justify-space-between">
      <v-btn color="grey lighten-4 grey--text text--lighten-1" height="60" width="100" depressed><v-icon>mdi-cog</v-icon></v-btn>
      <v-btn color="grey lighten-4 grey--text text--lighten-1" height="60" width="100" depressed><v-icon>mdi-account-multiple</v-icon></v-btn>
    </v-container>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: ['navItem']
}
</script>

<style lang="scss"></style>
