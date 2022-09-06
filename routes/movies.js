const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/movies')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, moviesController.getMovies)

router.post('/addMovie', moviesController.addMovie)

router.post('/addMovie/addToList', moviesController.addToList)

router.put('/watched', moviesController.watched)

router.put('/unwatched', moviesController.unwatched)

router.delete('/deleteMovie', moviesController.deleteMovie)

module.exports = router
 
