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
  },

  buscarUm: async (req, res) => {
    let json = {error: '', results: {}};

    let codigo = req.params.codigo;
    let carro = await CarroService.buscarUm(codigo);

    if (carro) {
      json.results = carro;
    }

    res.json(json);
  },

  inserir: async (req, res) => {
    let json = {error: '', results: {}}

    let modelo = req.body.modelo;
    let placa = req.body.placa;

    if(modelo && placa){
      let CarroCodigo = await CarroService.inserir(modelo, placa);
      json.results = {
        codigo: CarroCodigo,
        modelo,
        placa
      }
    } else {
      json.error = 'Todos os campos são obrigatôrios'
    }

    res.json(json);

  },

  alterar: async (req, res) => {
    let json = {error: '', results: {}};

    let codigo = req.params.codigo;
    let modelo = req.body.modelo;
    let placa = req.body.placa;

    if (codigo && modelo && placa) {
      console.log('hola')
      await CarroService.alterar(codigo, modelo, placa);

      json.results = {
        codigo,
        modelo,
        placa
      };
    } else {
        console.log(codigo, modelo, placa)
        json.error = 'Todos os campos são obrigatôrios';
    }

    res.json(json)
  }
}