const Router = require('express-promise-router').default;

const controller = require('../controllers/todo.controller');

const { validateBodyByShema } = require('../middleware/validation.middleware');

const createTodoValidationShema = require('../validation/todo/create.shema');
const updateTodoValidationShema = require('../validation/todo/update.shema');

const router = Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.post('/', validateBodyByShema(createTodoValidationShema), controller.create);
router.put('/:id', validateBodyByShema(updateTodoValidationShema), controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
