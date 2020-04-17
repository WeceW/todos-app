import { TodoProps, TodoPatchProps } from "../types/todos";

export const TODOS = {};

export const TODO = {
  API_REQUEST_ALL: "TODO_API_REQUEST_ALL",
  API_SUCCESS_ALL: "TODO_API_SUCCESS_ALL",
  // API_FAILURE_ALL: "TODO_API_FAILURE_ALL",
  API_REQUEST_ONE: "TODO_API_REQUEST_ONE",
  API_SUCCESS_ONE: "TODO_API_SUCCESS_ONE",
  // API_FAILURE_ONE: "TODO_API_FAILURE_ONE",
  API_REQUEST_CREATE: "TODO_API_REQUEST_CREATE",
  // API_SUCCESS_CREATE: "TODO_API_SUCCESS_CREATE",
  // API_FAILURE_CREATE: "TODO_API_FAILURE_CREATE",
  API_REQUEST_UPDATE: "TODO_API_REQUEST_UPDATE",
  // API_SUCCESS_UPDATE: "TODO_API_SUCCESS_UPDATE",
  // API_FAILURE_UPDATE: "TODO_API_FAILURE_UPDATE",
  API_REQUEST_PATCH: "TODO_API_REQUEST_PATCH",
  // API_SUCCESS_PATCH: "TODO_API_SUCCESS_PATCH",
  // API_FAILURE_PATCH: "TODO_API_FAILURE_PATCH",
  API_REQUEST_DELETE: "TODO_API_REQUEST_DELETE",
  // API_SUCCESS_DELETE: "TODO_API_SUCCESS_DELETE",
  // API_FAILURE_DELETE: "TODO_API_FAILURE_DELETE",
};

export const SET_TODO_UPDATE = "SET_TODO_UPDATE";
export const RESET_TODO = "RESET_TODO";
export const RESET_TODOS = "RESET_TODOS";

export const getTodos = () => ({
  type: TODO.API_REQUEST_ALL,
});

export const setTodos = (todos: TodoProps[]) => ({
  type: TODO.API_SUCCESS_ALL,
  payload: { todos },
});

export const getTodo = (id: number) => ({
  type: TODO.API_REQUEST_ONE,
  payload: { id },
});

export const setTodo = (todo: TodoProps) => ({
  type: TODO.API_SUCCESS_ONE,
  payload: { todo },
});

export const newTodo = (todo: TodoProps) => ({
  type: TODO.API_REQUEST_CREATE,
  payload: { todo },
});

export const deleteTodo = (id: number) => ({
  type: TODO.API_REQUEST_DELETE,
  payload: { id },
});

export const updateTodo = (id: number, todo: TodoProps) => ({
  type: TODO.API_REQUEST_UPDATE,
  payload: { id, todo },
});

export const patchTodo = (id: number, todo: TodoPatchProps) => ({
  type: TODO.API_REQUEST_PATCH,
  payload: { id, todo },
});

export const setTodoUpdate = (todo: TodoProps) => ({
  type: SET_TODO_UPDATE,
  payload: { todo },
});

export const resetTodos = () => ({
  type: RESET_TODOS,
});

export const resetTodo = () => ({
  type: RESET_TODO,
});

export default {
  getTodos,
  setTodos,
  getTodo,
  setTodo,
  newTodo,
  updateTodo,
  patchTodo,
  deleteTodo,
  setTodoUpdate,
  resetTodos,
  resetTodo,
};
