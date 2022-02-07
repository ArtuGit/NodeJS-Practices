module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c2c81b7eada3d5f7fe59fc6b486f4d8a'),
  },
});
