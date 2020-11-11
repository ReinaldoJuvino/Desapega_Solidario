
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      // Inserts seed entries
      return knex('status').insert([
        {id: 1, name: 'Disponível'},
        {id: 2, name: 'Congelado'},
        {id: 3, name: 'Doado'}
      ]);
    });
};
