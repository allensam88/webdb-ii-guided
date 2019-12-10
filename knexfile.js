// Update with your config settings.

module.exports = {
    // teaches knex to connect to the development database
    development: {
        client: 'sqlite3',
        useNullAsDefault: true, // only needed when using SQLite3
        connection: {
            filename: './data/produce.db3' // where is the database file for development?  find file path here
        },
        migrations: {
            directory: './data/migrations' // will be created automatically, if it's not explicitly written
        },
        seeds: {
            directory: './data/seeds' // will be created automatically, if it's not explicitly written
        }
    }
};
