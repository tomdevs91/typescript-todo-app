import * as readlineSync from 'readline-sync';
import { TodoApp } from './TodoApp';

class TodoCLI {
  private todoApp: TodoApp;

  constructor() {
    this.todoApp = new TodoApp();
  }

  start(): void {
    console.log('🚀 Welcome to TypeScript Todo App!');
    console.log('Type "help" to see available commands\n');

    while (true) {
      try {
        const input = readlineSync.question('> ').trim();
        
        if (!input) continue;
        
        if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
          console.log('👋 Goodbye!');
          break;
        }

        this.processCommand(input);
      } catch (error) {
        console.error(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }
  }

  private processCommand(input: string): void {
    const [command, ...args] = input.split(' ');
    const argument = args.join(' ');

    switch (command.toLowerCase()) {
      case 'help':
        this.showHelp();
        break;
      
      case 'add':
        if (!argument) {
          console.log('❌ Please provide todo text. Usage: add <todo text>');
          return;
        }
        this.todoApp.addTodo(argument);
        break;
      
      case 'list':
        const filter = args[0] as 'all' | 'active' | 'completed' | undefined;
        this.todoApp.displayTodos(filter || 'all');
        break;
      
      case 'complete':
      case 'toggle':
        const toggleId = parseInt(args[0]);
        if (isNaN(toggleId)) {
          console.log('❌ Please provide a valid todo ID. Usage: toggle <id>');
          return;
        }
        this.todoApp.toggleTodo(toggleId);
        break;
      
      case 'remove':
      case 'delete':
        const removeId = parseInt(args[0]);
        if (isNaN(removeId)) {
          console.log('❌ Please provide a valid todo ID. Usage: remove <id>');
          return;
        }
        this.todoApp.removeTodo(removeId);
        break;
      
      case 'stats':
        this.showStats();
        break;
      
      case 'clear':
        console.clear();
        break;
      
      default:
        console.log(`❌ Unknown command: ${command}. Type "help" for available commands.`);
    }
  }

  private showHelp(): void {
    console.log('\n📖 Available commands:');
    console.log('  add <text>          - Add a new todo');
    console.log('  list [all|active|completed] - List todos (default: all)');
    console.log('  toggle <id>         - Toggle todo completion status');
    console.log('  remove <id>         - Remove a todo');
    console.log('  stats               - Show todo statistics');
    console.log('  clear               - Clear the screen');
    console.log('  help                - Show this help message');
    console.log('  exit/quit           - Exit the application\n');
  }

  private showStats(): void {
    const stats = this.todoApp.getStats();
    console.log('\n📊 Statistics:');
    console.log(`  Total todos: ${stats.total}`);
    console.log(`  Active todos: ${stats.active}`);
    console.log(`  Completed todos: ${stats.completed}`);
    
    if (stats.total > 0) {
      const completionRate = Math.round((stats.completed / stats.total) * 100);
      console.log(`  Completion rate: ${completionRate}%`);
    }
  }
}

// Start the application
if (require.main === module) {
  const cli = new TodoCLI();
  cli.start();
}