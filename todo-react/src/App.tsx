import React, {useState} from 'react';
import { TodoList } from './TodoList'
import { AddTodoForm } from './AddTodoForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button, Card, Alert } from 'react-bootstrap';




const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write App',
    complete: true,
  },
];




function App() {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;

    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false};
    setTodos([...todos, newTodo]);
  };

  return (
    // 1. Wrap everything in a Container for proper spacing
    <Container className="mt-5">
      
      {/* 2. Add a Navbar for a professional header */}
      <Navbar bg="primary" variant="dark" className="mb-4 rounded">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            My React Todo App
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 3. Add a Card to group the Todo content */}
      <Card className="shadow-sm">
        <Card.Header className="bg-light fw-bold">
          Task List
        </Card.Header>
        <Card.Body>
          
          {/* 4. Add Todo Form with Bootstrap styling */}
          <div className="mb-4">
            <AddTodoForm addTodo={addTodo} />
          </div>

          {/* 5. Todo List with Bootstrap List Group styling */}
          <div>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
          </div>

          {/* 6. Optional: Add a Bootstrap Alert for empty state or info */}
          {todos.length === 0 && (
            <Alert variant="info" className="mt-3">
              No todos yet! Add one above.
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App
