const express = require('express')
const router = express.Router()

const AnnotationController = require('./controllers/AnnotationController')
const ContentController = require('./controllers/ContentController')
const PriorityController = require('./controllers/PriorityController')

//Annotations
router.post('/annotations', AnnotationController.create)
router.get('/annotations', AnnotationController.read)
router.delete('/annotations/:id', AnnotationController.delete)

//Priority
router.get('/priorities', PriorityController.read)
router.post('/priorities/:id', PriorityController.update)

//Content
router.post('/contents/:id', ContentController.update)

module.exports = router;