const todoService = require('../services/todo.server');

exports.findAll = async (req, res) => {
	const data = await todoService.findAll();

	res.json({ data });
};

exports.findOne = async (req, res) => {
	const id = req.params.id;

	const data = await todoService.findOne(id);

	res.json({ data });
};

exports.create = async (req, res) => {
	const createTodoDto = req.body;

	const data = await todoService.create(createTodoDto);

	res.json({ data });
};

exports.update = async (req, res) => {
	const id = req.params.id;
    const updateTodoDto = req.body;
    console.log(req.body)

	const data = await todoService.update(id, updateTodoDto);

	res.json({ data });
};

exports.delete = async (req, res) => {
	const id = req.params.id;

	await todoService.delete(id);

	res.end();
};
