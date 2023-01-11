const express = require('express');
const models = require('../models');
var morgan = require('morgan');
const { Admin, Account } = require('../models');
const bcrypt = require('bcryptjs')
// import jwt from "jsonwebtoken";
// const generateToken = (id) => {
//   return jwt.sign({ id }, "abc123", {
//     expiresIn: '3h',
//   })
// }
module.exports = (Collection) => {
  
  // ======
  // Create
  // ======
 
  const create = async (req, res) => {
    let user = async ()=>{
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash( req.body.password, salt);
      req.body.password = hashedPassword
      console.log(req.body.password,'hashhhhhhh') 
      Create()
    }
    const newEntry =  req.body;
    const Create = ()=>{
      Collection.create(newEntry, (e,newEntry) => {
        if(e) {
          console.log('error',e);
          res.sendStatus(500);
        } else {
          console.log('succes')
          res.send(newEntry);
        }
      });
    }
    Collection == models.User ?  user() : models.Admin ? models.Account ? await Create() : console.log('we don\'t ready for super admin'): 'yes';
  };
  

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
  // generate jwt for admin and for user
  const readOne = async(req, res) => {

    const findUser = async()=>{
      Collection == models.User ?  login() : models.Admin ? login() : models.Account ?  findAcc() : console.log('we don\'t ready for super admin');
      const login =async ()=>{
      const email = req.body.email
      const password = req.body.password
    const user = await Collection.findOne({ email })
    user && (await bcrypt.compare(password, user.password)) ? console.log('loged') : console.log('nooooo')
   }
   (req.body.email && req.body.password) ? await findUser() : console.log('nooo')
  }
  const { _id } = req.params;
  const findAcc = ()=>{
  
    Collection.findById(_id, (e,result) => {
      if(e) {
        res.status(500).send(e);
        console.log(e.message);
      } else {
        res.send(result);
      }
    });
  }
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