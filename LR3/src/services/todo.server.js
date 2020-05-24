const Todo = require('../shemas/todo.shema');

const mapToTodo = (model = {}) => {
	return {
		id: model._id,
		description: model.description,
		completed: model.completed,
		createdAt: model.createdAt,
		updatedAt: model.updatedAt,
	};
};

exports.findAll = async () => {
	const todoModels = await Todo.find();

	return todoModels.map(mapToTodo);
};

exports.findOne = async (id) => {
	const todoModel = await Todo.findOne({ _id: id });

	return mapToTodo(todoModel);
};

exports.create = async (createTodoDto) => {
	const todoModel = await Todo.create(createTodoDto);

	return mapToTodo(todoModel);
};

exports.update = async (id, updateTodoDto) => {

    console.log(updateTodoDto);

	const todoModel = await Todo.findByIdAndUpdate(id, updateTodoDto, { new: true });

	return mapToTodo(todoModel);
};

exports.delete = async (id) => {
	await Todo.findByIdAndRemove(id);
};
