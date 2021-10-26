import { useState } from 'react'
import { insertRow } from '../../supabase/insert'
const Panel = ({children}) => children

export default function TodoPanel() {

    const [todoTitle, setTodoTitle] = useState("");
    const [todoDesc, setTodoDesc] = useState("");
    const [Reminder, setReminder] = useState(false);
    const [dataReminder, setDataReminder] = useState("");

    function resetForm() {
        setTodoTitle('')
        setTodoDesc('')
        setDataReminder('')
        setReminder(false)
    }
    return(
        <Panel>
            <form onSubmit={(e) => {
                e.target.reset();
                resetForm();
                e.preventDefault()
            }}>
                <input type="text" placeholder="Task" onChange={ (e)=> setTodoTitle(e.target.value)} required/>
                <input type="text" placeholder="Desc - optional" onChange={ (e)=> setTodoDesc(e.target.value)}/>
                <input type="date"
                    onChange={(e) =>
                    setDataReminder(e.target.value)
                    }
                    disabled={!Reminder}
                    required
                />
                <label>
                    <input type="checkbox" onClick={() => setReminder(!Reminder)}/>
                    Reminder:
                    {Reminder ?
                        <span style={{ "color": 'skyblue' }}>active</span>
                        :
                        <span style={{ "color": 'orange' }}>inactive</span>
                    }
                </label>
                <button
                    type="submit"
                    onClick={() => {
                        if (todoTitle !== "" && Reminder === true) {
                            if (dataReminder !=="") {
                                insertRow(todoTitle, todoDesc, Reminder, dataReminder)
                            }
                        }
                        else if (todoTitle !== "") {
                            insertRow(todoTitle, todoDesc, Reminder, dataReminder)
                        }
                    }}
                >Add</button>
            </form>
        </Panel>
    )
}