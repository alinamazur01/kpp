const Router = require('express-promise-router').default;

const controller = require('../controllers/ui-todo.controller');

const router = Router();

router.get('/', controller.findAll);
router.get('/:id/show', controller.findOne);
router.get('/create', controller.create);
router.get('/:id/edit', controller.update);

module.exports = router;
