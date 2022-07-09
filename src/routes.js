const express = require('express')
const router = express.Router()

const AnnotationController = require('./controllers/AnnotationController')

router.post('/annotations', AnnotationController.create)
router.get('/annotations', AnnotationController.read)
router.delete('/annotations/:id', AnnotationController.delete)


module.exports = router;