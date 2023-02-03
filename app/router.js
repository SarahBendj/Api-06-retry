const Router = require('express').Router
const listController = require('./controllers/listController')
const cardController = require('./controllers/cardController')
const tagController = require('./controllers/tagController')
const router = new Router

//*GET
router.get('/lists', listController.getLists)
router.get('/lists/:id', listController.getListById)
//*POST
router.post('/lists' , listController.addList)
//*PUT
router.put('/lists/:id' , listController.updateList)
//*DELETE
router.delete('/lists/:id', listController.deleteList)

//*****************************CARD */


//*GET
router.get('/cards', cardController.getCards)
router.get('/cards/:id', cardController.getCardById)
//*POST
router.post('/cards' , cardController.addCard)
//router.post('/cards:id/tags' , cardController.addTagToCard)
//*PUT
router.put('/cards/:id' , cardController.updateCard)
//*DELETE
router.delete('/cards/:id', cardController.deleteCard)
//router.delete('/cards/:id/tags', cardController.deleteTagFromCard)

//*****************************TAG */

//*GET
router.get('/tags', tagController.getTags)
router.get('/tags/:id', tagController.getTagById)
//*POST
router.post('/tags' , tagController.addTag)
//*PUT
router.put('/tags/:id' , tagController.updateTag)
//*DELETE
router.delete('/tags/:id', tagController.deleteTag)


module.exports = router