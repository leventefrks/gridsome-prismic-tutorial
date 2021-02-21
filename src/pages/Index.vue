<template>
  <Layout>
    <g-image :src="logoUrl" width="200" height="200" />
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <span>{{ date }} </span>
    <div v-html="text" />
  </Layout>
</template>
<script>
export default {
  computed: {
    data() {
      return this.$page.allPrismicPost.edges[0].node.data;
    },

    title() {
      return this.data.title;
    },

    text() {
      return this.data.text;
    },

    subtitle() {
      return this.data.subtitle;
    },

    logoUrl() {
      return this.data.logo.url;
    },

    logoWidth() {
      this.data.logo.dimensions.width;
    },

    logoHeight() {
      this.data.logo.dimensions.height;
    },

    date() {
      return this.data.date;
    },
  },
};
</script>

<style scoped></style>
<page-query>
query {
allPrismicPost {
    edges {
      node {
        data {
          logo {
            url
            dimensions{
              width,
              height
            }
          }
          title,
          subtitle
          text,
        	date
        }
      }
    }
  }
}
</page-query>
