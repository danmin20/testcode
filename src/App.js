import React from 'react';
import Profile from './components/Profile';
import Counter from './components/Counter';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div>
      <Profile username="danmin" name="이정민" />
      <Counter />
      <TodoApp />
    </div>
  );
}

export default App;