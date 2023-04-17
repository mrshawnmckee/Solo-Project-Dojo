const projectRoute = require('../routes/project.routes')
const Mando = require('../models/project.models')


//Think im good here

const addMando = (req, res) => {
    Mando.create(req.body)
    .then((newMando) => {
        res.json(newMando)
    }).catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
}

const getAllMando = (req, res) => {
    Mando.find({})
        .then((allMando) => {
            res.json(allMando)
        }).catch((err) => {
            console.log(err)
            res.status(400).json(err)
        })
}

const getOneMando = (req, res) => {
    Mando.findOne({_id: req.params.id})
    .then((oneMando) => {
        res.json(oneMando)
    }).catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
}

const editMando = (req, res) => {
    Mando.findByIdAndUpdate({_id:req.params.id}, req.body, {
        new:true,
        runValidators:true
    })
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
}

const deleteMando = (req, res) => {
    Mando.deleteOne({_id:req.params.id})
    .then((deleteMando) => {
        res.json(deleteMando)
    }).catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })
}

module.exports = {
    addMando,
    getAllMando,
    getOneMando,
    editMando,
    deleteMando
}
