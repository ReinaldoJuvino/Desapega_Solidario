exports.up = function(knex) {
    return knex.schema.createTable('status', table => {
        table.increments('id').primary();
        table.string('name',50).notNull().unique();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('status');
};
