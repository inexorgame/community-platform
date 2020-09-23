module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'community-platform'),
        username: env('DATABASE_USERNAME', 'inexor'),
        password: env('DATABASE_PASSWORD', 'alokij4uINE389X0rrawr300'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
