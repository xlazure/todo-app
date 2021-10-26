import { supabase } from './api'

export async function insertRow(title, desc, setReminder, date) {
    console.log("INSERT: ",title, desc, setReminder, date)
    const { data, error } = await supabase
        .from('todo')
        .insert([
            {
                todo_title: title,
                todo_desc: desc === '' ? null : desc,
                setReminder: setReminder,
                date_reminder: setReminder === false ? null : date,
            },
        ])

    console.log('ok')
    if (error) {
    console.error(error)
    }
}
