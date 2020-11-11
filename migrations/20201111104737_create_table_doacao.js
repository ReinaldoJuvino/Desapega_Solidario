exports.up = function(knex) {
    return knex.schema.createTable('doacao', table => {
        table.increments('id').primary();
        table.string('data',50).notNull();
        table.integer('id_donatario').references('id').inTable('users');
        table.integer('id_item').references('id').inTable('item');
        table.integer('id_doador').references('id').inTable('users');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('doacao');
};
