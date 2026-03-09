export default async function createPeople( name, email, origin, API_URL) {
    const newPerson = { name, email, origin } //primeiro passa como obj json para depois fazer um string

    fetch(`${API_URL}/people`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPerson)
    })

    console.log(newPerson)
}