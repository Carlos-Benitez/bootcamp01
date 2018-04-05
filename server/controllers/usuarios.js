//import { log } from 'util';

Usuario = require('../models').Usuario;
// Falta crear el modelo Ciudad, luego de eso descomentar las lineas correspondientes
//Ciudad = require('../models').Ciudad;

module.exports = {
    //Get a list of all usuarios using model.findAll()
    index(req, res) {
        Usuario.findAll({
            //include: Ciudad
        })
        .then(function(usuarios) {
            res.status(200).json(usuarios);
            console.log(usuarios);
        })
        .catch(function(error) {
            //console.log(error);
            res.status(500).json(error);
        });
    },
    //Get an evento by the unique ID using model.findById()
    show(req, res) {
        Usuario.findById(req.params.id, {
           //include: Ciudad 
        })
        .then(function(usuario) {
           // console.log(usuario);           
           res.status(200).json(usuario);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    },
    //Create a new evento using model.create()
    create(req, res) {
        Usuario.create(req.body)
        .then(function(usuario) {
           // console.log(usuario);
            res.status(200).json(usuario);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    },
    //Edit an existing evento details using model.update()
    update(req, res) {
        Usuario.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(function(usuario) {
            res.status(200).json(usuario);
            //console.log(usuario);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    },
    //Delete an existing evento by the unique ID using model.destroy()
    delete(req, res) {
        Usuario.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(usuario) {
           res.status(200).json(usuario);
           // console.log(usuario);
        })
        .catch(function(error) {
            res.status(500).json(error);
        });
    }
};
