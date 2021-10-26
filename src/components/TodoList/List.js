import { deleteTask } from '../../supabase/delete'

export default function TodoList(props) {
    return (
        <div className="taskContainer">
            {
                props.TodoData?.map(task => {
                    return (
                        <div
                            className="task"
                            key={task.id}
                        >
                            {task.todo_title ? <p><span>Task:</span> {task.todo_title}</p> : ''}
                            {task.todo_desc ? <p><span>Desc:</span> {task.todo_desc}</p> : ''}
                            {task.date_reminder ? <p><span>Reminder:</span> {task.date_reminder}</p> : ''}
                            
                            <button onClick={()=>deleteTask(task.id)}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}