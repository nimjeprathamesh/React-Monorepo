import { useState } from 'react';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export default function useInput() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoInput, setTodoInput] = useState<string>('');

  function addTodo() {
    if (todoInput.trim() !== '') {
      const newTodo: Todo = {
        id: todos.length + 1,
        task: todoInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTodoInput('');
    }
  }

  function toggleTodo(id: number) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }

  function deleteTodo(id: number) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function deleteButtonRenderer(props: any) {
    return (
      <button
        className="bg-gray-300 px-4 hover:bg-gray-400"
        onClick={() => deleteTodo(props.data.id)}
      >
        Delete
      </button>
    );
  }

  const columns: any[] = [
    { headerName: 'Task', field: 'task' },
    {
      headerName: 'Completed',
      field: 'completed',
      filter: true,
      cellRendererFramework: ({ value, data }: any) => (
        <input
          type="checkbox"
          checked={value}
          onChange={() => toggleTodo(data.id)}
        />
      ),
    },
    {
      headerName: 'Actions',
      cellRenderer: 'deleteButtonRenderer',
    },
  ];

  return {
    todos,
    todoInput,
    columns,
    addTodo,
    setTodoInput,
    deleteButtonRenderer,
  };
}
