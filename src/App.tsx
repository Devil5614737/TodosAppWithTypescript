import { useEffect, useState } from "react";
import { TodoInput } from "./components/TodoInput";
import { Todos } from "./components/Todos";
import { TodoI } from "./interfaces/TodoI";

function App() {
  const [todos, setTodos] = useState<TodoI[]>(getTodosFromLS()
  );
                    
  function getTodosFromLS(){
    const data = localStorage.getItem('todos');
    if(data){
      return JSON.parse(data)
    }
    else{
      return []
    }
  }



  
  // additing todo to todos array
  const handleAddTodo = (title: string) => {
    const todo = {
      id: Math.floor(Math.random() * 99999999),
      title,
    };
    if (title) {
      setTodos([...todos, todo]);
    }
  };

  // removing todo from todos array
  const handleDelete = (id: number) => {
    const removeTodo = todos.filter((todo) => todo.id !== id);
    setTodos(removeTodo);
    localStorage.setItem("todos", JSON.stringify(removeTodo));
  };


  // editing todo
  const handleEditing = (id: number, title: string) => {
    setTodos(
      todos &&
        todos.map((todo) =>
          todo.id === id
            ? { ...todo, editing: !todo.editing, title }
            : {
                ...todo,
                editing: false,
                todo,
              }
        )
    );
  };

  // use localstorage to persist the data after reloading
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="max-w-[100vw] min-h-[100vh] bg-[#F8FAFC] p-6 ">
      <h1 className="font-bold text-5xl text-center my-5">Todos App</h1>
      <section className="grid  my-28  md:max-w-[54rem] md:m-auto md:my-[10rem]">
        <TodoInput handleAddTodo={handleAddTodo} />
        <div className=" my-10">
          <ul>
            {todos.map((todo: TodoI) => [
              <Todos
                key={todo.id}
                title={todo.title}
                id={todo.id}
                handleDelete={handleDelete}
                handleEditing={handleEditing}
                editing={todo.editing}
              />,
            ])}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
