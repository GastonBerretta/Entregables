const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
 
router.get('/', moviesController.index)
router.get('/details/:id', moviesController.detail)
router.get('/new',moviesController.new)
router.get('/recommended',moviesController.reco)
router.post('/search',moviesController.searchPost)




module.exports = router;