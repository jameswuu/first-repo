import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos } = props

    const tab = "Completed"
    const filterTodoList = tab === "All" ?
        todos:
        tab === "Completed" ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    return (
        <>
            {filterTodoList.map((todo, todoIndex)=>{
                return (
                    <TodoCard 
                        key={todoIndex} 
                        todoIndex={todoIndex} 
                        todo={todo} />
                )
            })}
        </>
    )
}