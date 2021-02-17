require('dotenv').config();

module.exports = {
  templates: {
    Index: '/hello-gridsome-prismic',
  },
  plugins: [
    {
      use: '@ilrock/gridsome-source-prismic',
      options: {
        prismic_url: 'https://vue-prismic-tutorial.cdn.prismic.io/api/v2',
        prismic_token:
          'MC5ZQ3ZrcWhJQUFDQUFhTjA5.77-9Ce-_vUN377-977-977-9UCTvv71Y77-9I0Xvv73vv73vv71477-9RhIR77-9c0cS77-9RFplEQ',
        collection_prefix: 'Prismic',
      },
    },
  ],
};
