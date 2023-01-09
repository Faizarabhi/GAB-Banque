const express = require('express');
const models = require('../models')
module.exports = (Collection) => {

  // ======
  // Create
  // ======
  const create = (req, res) => {
    // if Collection User hashe mdps res.body.mdps = hash(res.body.mdps)
    const newEntry = req.body;
    console.log(req.body,`data`)
    Collection.create(newEntry, (e,newEntry) => {
      if(e) {
        console.log('error',);
        res.sendStatus(500);
      } else {
        res.send(newEntry);
      }
    });
  };
  // Login avec Jwt

  // =========
  // Read many
  // =========
  const readMany = (req, res) => {
    let query = res.locals.query || {};
  
    Collection.find(query, (e,result) => {
      if(e) {
        res.status(500).send(e);
        console.log(e.message);
      } else {
        res.send(result);
      }
    });
  };

  // ========
  // Read one
  // ========
  const readOne = (req, res) => {
    const { _id } = req.params;
  
    Collection.findById(_id, (e,result) => {
      if(e) {
        res.status(500).send(e);
        console.log(e.message);
      } else {
        res.send(result);
      }
    });
  };
  
  // ======
  // Update
  // ======
  const update = (req, res) => {
    const changedEntry = req.body;
    Collection.update({ _id: req.params._id }, { $set: changedEntry }, (e) => {
      if (e)
        res.sendStatus(500);
      else
        res.sendStatus(200);
    });
  };
  
  // ======
  // Remove
  // ======
  const remove = (req, res) => {
    Collection.remove({ _id: req.params._id }, (e) => {
      if (e)
      res.status(500).send(e);
      else
        res.sendStatus(200);
    });
  };

  // ======
  // Routes
  // ======

  let router = express.Router();

  // router.post('/', auth, login);
  router.post('/', create);
  router.get('/', readMany);
  router.get('/:_id', readOne);
  router.put('/:_id', update);
  router.delete('/:_id', remove);

  return router;
}