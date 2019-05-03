module.exports = {
    development: {
        client: 'sqlite3',
        useNullasDefault: true,
        connection: {
            filename: '/data/projectTracler.db3'
        },
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        }
    }
};