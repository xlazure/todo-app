import { supabase } from './api'


// export const readData = supabase;


export async function readData() {
const { data: todo, error } = await supabase
  .from('todo')
  .select('*')
if (error) {
console.error(error)
}
return todo
}