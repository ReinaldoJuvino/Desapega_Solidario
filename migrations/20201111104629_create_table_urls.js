
exports.up = function(knex) {
    return knex.schema.createTable('urls', table => {
        table.increments('id').primary();
        table.string('url').notNull().unique();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('urls');
};
