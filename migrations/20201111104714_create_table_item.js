exports.up = function(knex) {
    return knex.schema.createTable('item', table => {
        table.increments('id').primary();
        table.string('titulo',50).notNull().unique();
        table.string('descricao',500).notNull();
        table.integer('id_categoria').references('id').inTable('categoria');
        table.integer('id_url').references('id').inTable('urls');
        table.integer('id_status').references('id').inTable('status');
        table.integer('id_doador').references('id').inTable('users');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('item');
};
