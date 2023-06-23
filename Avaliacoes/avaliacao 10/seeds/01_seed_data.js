_exports.seed = function(knex) {

    // Deletes ALL existing entries
    return knex('tb_alunos').del()
      .then(function () {
        // Inserts seed entries
        return knex('tb_alunos').insert([
          { nome: 'Andrey', email: 'andrey@example.com' },
          { nome: 'Maria', email: 'maria@example.com' },
        ]);
      })
      .then(function () {
        return knex('tb_professores').del()
          .then(function () {
            return knex('professores').insert([
              { nome: 'Alysson', email: 'alysson@example.com' },
              { nome: 'Cecícila', email: 'cecilia@example.com' },
            ]);
          });
      })
      .then(function () {
        return knex('tb_disciplinas').del()
          .then(function () {
            return knex('tb_disciplinas').insert([
              { nome: 'Métodos e ferramentas para desenvolvimento de software', professor_id: 1 },
              { nome: 'Português', professor_id: 2 },
            ]);
          });
      });
  };
  