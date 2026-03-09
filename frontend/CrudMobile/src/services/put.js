export default async function updatePeople( name, email, origin, API_URL, id) {
    const updatedPerson = { name, email, origin } //primeiro passa como obj json para depois fazer um string

    fetch(`${API_URL}/people/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPerson)
    })

    console.log(updatedPerson)
}