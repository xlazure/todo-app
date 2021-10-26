import { supabase } from './api'

export async function deleteTask(id) {
    
    const { data, error } = await supabase
    .from('todo')
    .delete()
    .eq('id', id)

    if (error) {
    console.error(error)
    }
}