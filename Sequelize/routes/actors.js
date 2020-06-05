const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');

router.get('/', actorsController.index)
router.get('/details/:id', actorsController.detail)
router.get('/new',actorsController.new)
router.get('/recommended',actorsController.reco)
router.post('/search',actorsController.searchPost)


module.exports = router;