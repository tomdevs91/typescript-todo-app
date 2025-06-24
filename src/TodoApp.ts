import { Todo, TodoManager } from './types';

export class TodoApp implements TodoManager {
  private todos: Todo[] = [];
  private nextId: number = 1;

  addTodo(text: string): void {
    if (!text.trim()) {
      throw new Error('Todo text cannot be empty');
    }

    const todo: Todo = {
      id: this.nextId++,
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    };

    this.todos.push(todo);
    console.log(`✅ Added todo: "${todo.text}"`);
  }

  removeTodo(id: number): void {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index === -1) {
      throw new Error(`Todo with id ${id} not found`);
    }

    const removedTodo = this.todos.splice(index, 1)[0];
    console.log(`🗑️  Removed todo: "${removedTodo.text}"`);
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }

    todo.completed = !todo.completed;
    const status = todo.completed ? 'completed' : 'active';
    console.log(`🔄 Marked todo "${todo.text}" as ${status}`);
  }

  listTodos(): Todo[] {
    return [...this.todos];
  }

  getActiveTodos(): Todo[] {
    return this.todos.filter(todo => !todo.completed);
  }

  getCompletedTodos(): Todo[] {
    return this.todos.filter(todo => todo.completed);
  }

  displayTodos(filter: 'all' | 'active' | 'completed' = 'all'): void {
    let todosToShow: Todo[];
    
    switch (filter) {
      case 'active':
        todosToShow = this.getActiveTodos();
        console.log('\n📋 Active Todos:');
        break;
      case 'completed':
        todosToShow = this.getCompletedTodos();
        console.log('\n✅ Completed Todos:');
        break;
      default:
        todosToShow = this.listTodos();
        console.log('\n📋 All Todos:');
    }

    if (todosToShow.length === 0) {
      console.log('  No todos found.');
      return;
    }

    todosToShow.forEach(todo => {
      const status = todo.completed ? '✅' : '⭕';
      const date = todo.createdAt.toLocaleDateString();
      console.log(`  ${status} [${todo.id}] ${todo.text} (${date})`);
    });

    console.log(`\nTotal: ${todosToShow.length} todos`);
  }

  getStats(): { total: number; active: number; completed: number } {
    return {
      total: this.todos.length,
      active: this.getActiveTodos().length,
      completed: this.getCompletedTodos().length
    };
  }
}