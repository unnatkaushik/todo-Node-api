import Todos from "../schemas/todo.schema.js";
import asyncHandler from "../utils/asyncHandler.js";

export const todoCreate = asyncHandler(async (req, res) => {
  const { task, priority, status } = req.body;
  const todo = await Todos.create({
    task,
    priority,
    status,
  });

  if (!todo) {
    res.status(400).json({
      message: "No todo created",
      success: false,
    });
    return;
  }
  res.status(200).json({
    message: "Todo created successfully",
    success: false,
  });
});
export const todoAll = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (id) {
    var todo = await Todos.findOne({ _id: new Object(id) });
  } else {
    var todo = await Todos.find();
  }
  if (!todo) {
    res.status(400).json({
      message: "No todo created",
      success: false,
    });
    return;
  }
  res.status(200).json({
    message: "Todo created successfully",
    success: false,
    todo,
  });
});

export const todoDelete = asyncHandler(async (req, res) => {
  const { id } = req.params;

  var todo = await Todos.findByIdAndDelete(id);

  if (!todo) {
    res.status(400).json({
      message: "No todo created",
      success: false,
    });
    return;
  }
  res.status(200).json({
    message: "Todo created successfully",
    success: false,
    todo,
  });
});

export const todoUpdate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { task, priority, status } = req.body;

  var todo = await Todos.findByIdAndUpdate(
    id,
    {
      task,
      priority,
      status,
    },
    { runValidators: true, new: true }
  );

  if (!todo) {
    res.status(400).json({
      message: "No todo created",
      success: false,
    });
    return;
  }
  res.status(200).json({
    message: "Todo created successfully",
    success: false,
    todo,
  });
});
