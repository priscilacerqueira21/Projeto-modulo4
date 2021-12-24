const Editora = require("../models/Editora")
const Editora_DAO = require('../DAO/editora-DAO')
const bdNovo = require('../infra/sqlite-db');
const ConfirmaID = require("../models/valida_id") 
 module.exports = (app) => {
  const editora_Dao = new Editora_DAO(bdNovo);
    app.get('/editora', async (req, res) => {
      
        try {
          const respLivro = await editora_Dao.select_editora();
          res.status(200).json(respLivro)
      } catch (error) {
          res.status(404).json({ error })
      }
      
     
    })
    app.get('/editora/:id', async (req, res) => {
      
      try {
        const id = req.params.id
        console.log(id)
        const respLivro = await editora_Dao.select_editora_id(id);
        res.status(200).json(respLivro)
    } catch (error) {
        res.status(404).json({ error })
    }
    
   
  })
  app.post('/editora', async (req, res) => {
    const body = req.body
    try {

        const novoEditora = new Editora(body.ID-EDITORA, body.CNPJ, body.NOME, body.ENDEREÇO, body.EMAIL)
        const respNovoEditora = await editora_Dao.insert_editora(novoEditora);
        res.status(200).json(respNovoEditora)
    } catch (error) {
        res.status(404).json({ error })
    }

})
app.put('/editora/:id', async (req, res) => {
  const id = req.params.id
  const body = req.body
  try {

    const respEditora = await editora_Dao.select_editora_id(id);
      const confirmaId = new ConfirmaID(respEditora.editora.length)
      if (confirmaId.id === -1) {
        res.send("Item não encontrado")
      } else {
      const novoEditora = new Editora(body.ID-EDITORA, body.CNPJ, body.NOME, body.ENDEREÇO, body.EMAIL)
      const respNovoEditora = await editora_Dao.update_editora(id, novoEditora);
      res.status(200).json(respNovoEditora)
      }
  } catch (error) {
      res.status(404).json({ error })
  }

})
app.delete('/excluir/:id', async (req, res) => {
  const id = req.params.id
  try {
    const respEditora = await editora_Dao.select_editora_id(id);
    const confirmaId = new ConfirmaID(respEditora.editora.length)
    if (confirmaId.id === -1) {
      res.send("Item não encontrado")
    } else {
      const respNovoEditora = await Editora_Dao.delete_editora(id);
      res.status(200).json(respNovoEditora)
    }
  } catch (error) {
      res.status(404).json({ error })
  }

})

  }