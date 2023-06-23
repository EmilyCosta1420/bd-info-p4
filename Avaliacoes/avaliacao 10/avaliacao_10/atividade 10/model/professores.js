const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  },
  useNullAsDefault: true
});

const Professores = {
  getAll: async () => {
    return db('professores');
  },

  getById: async (id) => {
    return db('professores').where({ id }).first();
  },

  create: async (professor) => {
    return db('professores').insert(professores);
  },

  update: async (id, professor) => {
    return db('professores').where({ id }).update(professor);
  },

  delete: async (id) => {
    return db('professores').where({ id }).del();
  }
};

module.exports = Professores;
