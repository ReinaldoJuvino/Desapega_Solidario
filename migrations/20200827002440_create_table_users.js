exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('nome',50).notNull().unique();
        table.string('telefone',20).notNull();
        table.string('email',50).notNull().unique();
        table.string('senha').notNull();
        table.string('logradouro',50);
        table.string('numero',10);
        table.string('bairro',50);
        table.string('complemento',50);
        table.string('cep',10);
        table.string('cidade',50);
        table.string('estado',2);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
