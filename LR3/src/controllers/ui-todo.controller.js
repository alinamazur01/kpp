const todoService = require('../services/todo.server');

exports.findAll = async (req, res) => {
	const todos = await todoService.findAll();

	res.render('pages/index', { todos, title: 'Todos', template: './todos/index' });
};

exports.findOne = async (req, res) => {
	const id = req.params.id;

	const todo = await todoService.findOne(id);

	res.render('pages/index', { todo, title: 'Show todo', template: './todos/show' });
};

exports.create = async (req, res) => {
	res.render('pages/index', { title: 'Create todo', template: './todos/create' });
};

exports.update = async (req, res) => {
	const id = req.params.id;

	const todo = await todoService.findOne(id);

	res.render('pages/index', { todo, title: 'Edit todo', template: './todos/edit' });
};
