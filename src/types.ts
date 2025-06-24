export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoManager {
  addTodo(text: string): void;
  removeTodo(id: number): void;
  toggleTodo(id: number): void;
  listTodos(): Todo[];
  getActiveTodos(): Todo[];
  getCompletedTodos(): Todo[];
}