import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
import React from 'react';
import useInput from './useInput';

const TodoApp: React.FC = () => {
  const {
    todos,
    todoInput,
    columns,
    addTodo,
    setTodoInput,
    deleteButtonRenderer,
  } = useInput();

  return (
    <div>
      <h1 className="flex justify-center mb-5 font-bold text-2xl">Todo App</h1>
      <div className="flex justify-center mb-5">
        <input
          type="text"
          value={todoInput}
          className="border border-black px-4 py-2 rounded-md mr-4 w-full"
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Enter Todo"
        />
        <button
          className="bg-gray-300 inline-block px-4 py-2 rounded-md w-1/3 hover:bg-gray-200"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <div className="ag-theme-quartz w-[38rem] h-[25rem]">
        <AgGridReact
          rowData={todos}
          columnDefs={columns}
          components={{ deleteButtonRenderer }}
        />
      </div>
    </div>
  );
};

export default TodoApp;
