import AddTodoForm from "./components/add-todo-form"
import { TodoProvider } from "./store/todo-context"

export default function App() {
  return (
   <TodoProvider>
     <div className="flex flex-col items-center min-h-full max-w-xl mx-auto p-10 gap-10">
        <h1 className="text-3xl font-bold underline">Todo App</h1>
        <AddTodoForm />
     </div>
   </TodoProvider>
  )
}