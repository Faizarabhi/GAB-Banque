const express = require('express');
const {create, update, readMany, readOne, remove} = require('../controllers')
let router = express.Router();

router.post('/', create);
router.get('/', readMany);
router.get('/:_id', readOne);
router.put('/:_id', update);
router.delete('/:_id', remove);

module.exports  = router