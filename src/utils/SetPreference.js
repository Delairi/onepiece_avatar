import { BASE_URL } from "../Urls";

export default async function SetPreference(data) {

    const response = await fetch(`${BASE_URL}/api/v1/movies/last_view`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })
    const result = await response.json()
    return result

}