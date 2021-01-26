<template lang="">
  <v-sheet style="margin-left:320px" width="320" class="px-10">
    <v-list>
      <v-list-item-icon><v-icon small class="mr-3">mdi-arrow-left</v-icon><span class="subtitle-2">back to people</span></v-list-item-icon>
    </v-list>

    <v-list class="mt-5">
      <v-list-item-content>
        <v-img :src="userItem.photo" height="290" class="rounded-lg mb-5"></v-img>
        <v-list-item-title class="title align-center">
          <span>Karry Woodson</span>
          <v-btn icon color="red"><v-icon>mdi-check-decagram</v-icon></v-btn>
        </v-list-item-title>
        <div class="d-flex caption font-weight-bold mb-5">
          <div class="mr-5">899 photos</div>
          <div>16k followers</div>
        </div>
        <div class="sub_text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet illo unde neque quod repellat nihil id, dolores vero reprehenderit molestias dolor?
          Incidunt
        </div>
      </v-list-item-content>

      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">Favorite Tags </v-list-item-title>
        <div class="sub_text">
          Lorem, ipsum, dolor, sit, amet, consectetur, adipisicing, elit, sit, amet
        </div>
      </v-list-item-content>

      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">Activity</v-list-item-title>
        <div class="sub_text">
          Professional Photographer
        </div>
      </v-list-item-content>

      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">Location</v-list-item-title>
        <div class="sub_text">Paris, France</div>
      </v-list-item-content>

      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">Favorite Profiles</v-list-item-title>
        <div class="fa_user">
          <div v-for="(item, id) in userItem.userPhoto" :key="id"><v-img :src="item"></v-img></div>
        </div>
      </v-list-item-content>
    </v-list>
  </v-sheet>
</template>
<script>
export default {
  props: ['userItem']
}
</script>
