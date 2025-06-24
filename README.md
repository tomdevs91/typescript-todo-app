# TypeScript Todo App

A simple command-line todo application built with TypeScript.

## Features

- ✅ Add new todos
- 📋 List todos (all, active, or completed)
- 🔄 Toggle todo completion status
- 🗑️ Remove todos
- 📊 View statistics
- 💻 Interactive CLI interface

## Installation

1. Clone the repository:
```bash
git clone https://github.com/tomdevs91/typescript-todo-app.git
cd typescript-todo-app
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development mode (with ts-node):
```bash
npm run dev
```

### Build and run:
```bash
npm run build
npm start
```

### Watch mode (auto-compile on changes):
```bash
npm run watch
```

## Commands

Once the application is running, you can use these commands:

- `add <text>` - Add a new todo
- `list [all|active|completed]` - List todos
- `toggle <id>` - Toggle todo completion status
- `remove <id>` - Remove a todo
- `stats` - Show todo statistics
- `clear` - Clear the screen
- `help` - Show help message
- `exit` or `quit` - Exit the application

## Example Usage

```
> add Buy groceries
✅ Added todo: "Buy groceries"

> add Learn TypeScript
✅ Added todo: "Learn TypeScript"

> list
📋 All Todos:
  ⭕ [1] Buy groceries (6/24/2025)
  ⭕ [2] Learn TypeScript (6/24/2025)

Total: 2 todos

> toggle 1
🔄 Marked todo "Buy groceries" as completed

> stats
📊 Statistics:
  Total todos: 2
  Active todos: 1
  Completed todos: 1
  Completion rate: 50%
```

## Project Structure

```
src/
├── types.ts      # TypeScript interfaces and types
├── TodoApp.ts    # Main todo application logic
└── index.ts      # CLI interface and entry point
```

## Technologies Used

- TypeScript
- Node.js
- readline-sync (for CLI input)

## License

MIT