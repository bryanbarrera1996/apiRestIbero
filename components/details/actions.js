const Details = require('./model')

const createDetail = (req, res) => {
  const newDetails = new Details(req.body)
  newDetails.save((error, detailSaved) => {
    if (error) {
      console.error('Error saving book detail  ', error)
      res.status(500).send(error)
    } else {
      res.send(detailSaved)
    }
  })
}


const getDetail = (req, res) => {
    Details.findById(req.params.id, (error, detail) => {
    if (error) {
      res.status(500).send(error)
    } else if (detail) {
      res.send(detail)
    } else {
      res.status(404).send({})
    }
  })
}

const updateDetail = (req, res) => {
    console.log("Entro al update");
    Details.updateOne({ _id: req.params.id }, req.body, (error, result) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send(result)
    }
  })
}

const deleteDetail = (req, res) => {
    Details.findByIdAndDelete(req.params.id, (error, result) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.send('Detalle del libro eliminado correctamente!')
    }
  })
}


module.exports = { createDetail, getDetail, updateDetail, deleteDetail }
