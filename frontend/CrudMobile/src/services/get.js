export default async function getPeople(API_URL) {
    try {
        const res = await fetch(`${API_URL}:3000/people`)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
        return []
    }
}