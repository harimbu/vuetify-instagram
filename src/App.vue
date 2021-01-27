<template>
  <v-app>
    <v-navigation-drawer app width="640" permanent>
      <Navigation :navItem="navItem" />
      <Profile :userItem="userItem" />
    </v-navigation-drawer>

    <v-app-bar app flat height="80" color="white">
      <v-layout align-center class="mx-6">
        <v-text-field flat solo-inverted filled prepend-inner-icon="mdi-magnify" rounded dense hide-details label="Search..."></v-text-field>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn icon color="success">
          <v-badge bordered overlap dot left color="error">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
        <v-menu offset-y open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="success" v-bind="attrs" v-on="on"><v-icon>mdi-menu</v-icon></v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in navItem.items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-layout>
    </v-app-bar>

    <v-main>
      <v-divider></v-divider>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation'
import Profile from '@/components/Profile'
export default {
  components: { Navigation, Profile },
  data() {
    return {
      navItem: {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png',
        avatar:
          'https://images.unsplash.com/photo-1578910985276-6cd1a7bc6dd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80',
        items: [
          {
            action: 'mdi-home',
            title: 'Feed'
          },
          {
            action: 'mdi-magnify',
            active: true,
            items: [{ title: 'Tranding Tags' }, { title: 'Top Posts' }, { title: 'People' }],
            title: 'Explore'
          },
          {
            action: 'mdi-bell',
            title: 'Notification'
          },
          {
            action: 'mdi-camera',
            title: 'Direct'
          },
          {
            action: 'mdi-chart-arc',
            title: 'Stats'
          }
        ]
      },
      userItem: {
        photo:
          'https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=621&q=80',
        userPhoto: [
          'https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          'https://images.unsplash.com/photo-1608277565122-b8443a713f41?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          'https://images.unsplash.com/photo-1578505574290-68739d054931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          'https://images.unsplash.com/photo-1591727884968-cc11135a19b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=655&q=80',
          'https://images.unsplash.com/photo-1580019598984-ae6ef6a9ff7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=651&q=80'
        ]
      }
    }
  }
}
</script>
<style lang="scss">
.fa_user {
  margin-top: 10px;
  div {
    display: inline-block;
    width: 38px;
    height: 56px;
    margin-right: 10px;
    border-radius: 6px;
    overflow: hidden;
  }

  img {
    width: 100%;
  }
}

.sub_text {
  font-size: 13px;
  color: grey;
  font-weight: 300;
  line-height: 1.6;
  margin-top: 10px;
  letter-spacing: 0.4px;
}
</style>
