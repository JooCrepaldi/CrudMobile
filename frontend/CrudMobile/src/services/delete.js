export default async function deletePeople( name, id, API_URL ) {
    await fetch(`${API_URL}/people/${id}`, {
        method: 'DELETE'
    })

    console.log(id, name)
}