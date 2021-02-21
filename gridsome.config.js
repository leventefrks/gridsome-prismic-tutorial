require('dotenv').config();

module.exports = {
  plugins: [
    {
      use: '@ilrock/gridsome-source-prismic',
      options: {
        prismic_url: 'https://prismic-121.cdn.prismic.io/api/v2',
        prismic_token:
          'MC5ZREtpOEJJQUFDSUFoanQ2.DgDvv71DMHIZHO-_ve-_vRjvv71a77-977-977-977-9PVfvv73vv71677-977-9aO-_ve-_ve-_ve-_ve-_vSbvv70',
        collection_prefix: 'Prismic',
      },
    },
  ],
};
