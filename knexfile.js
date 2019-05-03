module.exports = {
    development: {
        client: 'sqlite3',
        useNullasDefault: true,
        connection: {
            filename: '/data/nameOfYourDatabase.db3'
        },
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        }
    }
};