<template>
  <v-container class="pa-10">
    <div class="gallery mb-16 pb-16">
      <div class="title mb-10 px-3">
        <h3>Featured Stories</h3>
        <v-select class="select" :items="items" label="All Time" dense hide-details solo-inverted rounded filled flat></v-select>
      </div>
      <v-row>
        <v-col v-for="n in 6" :key="n" class="d-flex child-flex" xl="2" lg="3" sm="4">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            :aspect-ratio="1 / 1.5"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>

    <div class="gallery">
      <div class="title mb-10 px-3">
        <h3>Photo Feed</h3>
        <v-select class="select" :items="items" label="For 2020" dense hide-details solo-inverted rounded filled flat></v-select>
      </div>
      <v-row>
        <v-col v-for="n in 12" :key="n" class="d-flex child-flex" xl="3" lg="4" sm="6">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            :aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  }
}
</script>
<style lang="scss">
.title {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  h3 {
    width: 90%;
    font-size: 26px;
  }
}

.select label {
  font-size: 12px;
}

.gallery {
  .v-responsive {
    border-radius: 12px;
  }
  .col {
    padding: 20px;
  }
}
</style>
