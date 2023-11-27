import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => todos.filter((todo) => todo.id != id));
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
