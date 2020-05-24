const Router = require('express-promise-router').default;

const uiTodosRouter = require('./ui-todo.route');
const todosRouter = require('./todo.route');

const router = Router();

router.use('/api/todos', todosRouter);
router.use('/', uiTodosRouter);

module.exports = router;
