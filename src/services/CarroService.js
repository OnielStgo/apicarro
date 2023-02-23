const db = require('../db');

module.exports = {
  buscarTodosCarros: () => {
    return new Promise((aceito, rejeitado) => {
      db.query('SELECT * FROM carros', (error, results) => {
        if(error) {throw error; return;}
        aceito(results);
      });
    });
  }
};
