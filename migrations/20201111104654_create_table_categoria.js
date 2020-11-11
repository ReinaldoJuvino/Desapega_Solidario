
exports.up = function(knex) {
    return knex.schema.createTable('categoria', table => {
        table.increments('id').primary();
        table.string('nome',50).notNull().unique();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('categoria');
};
