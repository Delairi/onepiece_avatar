import { useDispatch } from "react-redux";
import { BASE_URL } from "../Urls";

export default async function AddFavorite(data) {
    const response = await fetch(`${BASE_URL}/api/v1/movies/favorite`,{
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