<template>
  <v-container class="pa-10">
    <div class="gallery mb-16 pb-16">
      <div class="title mb-10 px-3">
        <h3>Featured Stories</h3>
        <v-select class="select" :items="items" label="All Time" dense hide-details solo-inverted rounded filled flat></v-select>
      </div>
      <v-row>
        <v-col v-for="photo in featured" :key="photo.id" class="d-flex child-flex" xl="2" lg="3" sm="4">
          <v-img :src="photo.urls.thumb" :lazy-src="photo.urls.thumb" :aspect-ratio="1 / 1.5" class="grey lighten-2">
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
        <v-col v-for="photo in photos" :key="photo.id" class="d-flex child-flex" xl="2" lg="3" sm="4">
          <v-img :src="photo.urls.thumb" :lazy-src="photo.urls.thumb" :aspect-ratio="1 / 1.5" class="grey lighten-2">
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
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    featured: [],
    photos: []
  }),
  created() {
    this.getFeatured('colorful')
    this.getPhotos('cat')

    this.$eventBus.$on('getPhoto', payload => {
      this.getPhotos(payload)
    })
  },

  methods: {
    getFeatured(query) {
      this.$unsplash.search
        .getPhotos({ query: query, orientation: 'portrait', page: 1, perPage: 6 })
        .then(result => {
          this.featured = result.response.results
        })
        .catch(() => {
          console.log('something went wrong!')
        })
    },
    getPhotos(query) {
      this.$unsplash.search
        .getPhotos({ query: query, orientation: 'portrait', page: 1, perPage: 12 })
        .then(result => {
          this.photos = result.response.results
        })
        .catch(() => {
          console.log('something went wrong!')
        })
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
