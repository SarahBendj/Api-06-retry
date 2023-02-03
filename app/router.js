const Router = require('express').Router
const listController = require('./controllers/listController')
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

module.exports = router