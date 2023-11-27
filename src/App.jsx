import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';
import { useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === '') return;

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);

    setNewItem('');
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
      <TodoForm
        newItem={newItem}
        handleSubmit={handleSubmit}
        setNewItem={setNewItem}
      />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
