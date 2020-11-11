
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categoria').del()
    .then(function () {
      // Inserts seed entries
      return knex('categoria').insert([
        {id: 1, nome: 'Vestiário'},
        {id: 2, nome: 'Eletrodoméstico'},
        {id: 3, nome: 'Doméstico'},
        {id: 4, nome: 'Brinquedo'},
        {id: 5, nome: 'Outro'}
      ]);
    });
};
