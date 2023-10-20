import { client } from "../Redis.js";

const PreferencesService = () => {
    return {

        saveCookie: async (data) => {
            const saveCookie = await client.json.set(`cookieAvatar:${data.value}`,'$', data )
            return saveCookie
        },
        searchCookie: async (value) => {
            const searchCookie = await client.json.get(`cookieAvatar:${value}`)
            return searchCookie
        },
        updateCookie: async (value,data) => {

            
            const updateCookie = await client.json.set(`cookieAvatar:${value}`,'$', data )
            return updateCookie
        },

    }
}

export default PreferencesService;