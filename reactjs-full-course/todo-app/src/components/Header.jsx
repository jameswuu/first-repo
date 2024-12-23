export function Header(props) {
    const { todos } = props
    const TodoLength = todos.length

    const isTasksPural = todos.length != 1
    const tasks = isTasksPural ? "tasks" : "task"

    return (
        <header>
            <h1 className="text-gradient">You have {TodoLength} open {tasks}.</h1>
        </header>
    )
    
}