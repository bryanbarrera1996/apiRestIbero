const Client = require('./model')

const createClient = (req, res) => {
  const newClient = new Client(req.body)
  newClient.save((error, clientSaved) => {
    if (error) {
      console.error('Error saving client ', error)
      res.status(500).send(error)
    } else {
      res.send(clientSaved)
    }
  })
}


const getClient = (req, res) => {
  //console.log("Entro al get clientes");
  Client.findById(req.params.id, (error, client) => {
    if (error) {
      res.status(500).send(error)
    } else if (client) {
      console.log(client);
      let response = client;
      console.log(response);
      res.send(response)
    } else {
      res.status(404).send({})
    }
  })
}

const updateClient = (req, res) => {
  Client.updateOne({ _id: req.params.id }, req.body, (error, result) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send(result)
    }
  })
}

const deleteClient = (req, res) => {
  Client.findByIdAndDelete(req.params.id, (error, result) => {
    if (error) {
      res.status(500).send(error)
    } else {
      // console.log(result);
      // res.send(result)
      res.send('Cliente eliminado correctamente!')
    }
  })
}


module.exports = { createClient, getClient, updateClient, deleteClient }
