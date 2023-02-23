const CarroService = require('../services/CarroService');

module.exports = {
  buscarTodos: async (req, res) => {
    let json = {error: '', results: []}

    const carros = await CarroService.buscarTodosCarros();

    for(let i in carros){
      json.results.push({
        codigo: carros[i].codigo,
        descricao: carros[i].modelo
      });
    }

    res.json(json)
  }
}