import MoviesService from "../services/Movies.service.js"
import PreferencesService from "../services/Preferences.service.js"
import RandomNumber from "../utils/RandomNumber.js"
const MoviesController = () => {
    return {

        getMovies: async (req, res) => {

            const random = RandomNumber()
            const cookie = req.cookies['cookieAvatar']
            
            if (!cookie) {
                const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
                const data = {
                    value: random,
                    expires,
                    lastView: [],
                }
                await PreferencesService().saveCookie(data)
                res.cookie('cookieAvatar', random, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production' ? true : false,
                    expires,
                    sameSite: process.env.SAME_SITE || 'lax',
                })

            }
            const getMovies = await MoviesService().getMovies()
            return getMovies

        },
        filterMovies: async (req, res) => {

            const query = req.params.query
            
            const filterMovies = await MoviesService().filterMovies(query)
            return filterMovies

        },
        lastViewMovies: async (req, res) => {

            const cookie = req.cookies['cookieAvatar']
            const getCookie = await PreferencesService().searchCookie(cookie)
            return getCookie

        },
        postMovie: async (req, res) => {


            const cookie = req.cookies['cookieAvatar']
            if (!cookie) throw new Error('No cookie')
            const getCookie = await PreferencesService().searchCookie(cookie)
            const exist = getCookie.lastView.find(last => last.title === req.body.title);
            
            if(exist) return getCookie
            if (getCookie.lastView.length >= 3) getCookie.lastView.pop()
            const data = {
                ...getCookie,
                lastView: [
                    {
                        mal_id: req.body.mal_id,
                        title: req.body.title,
                        image: req.body.images.webp.image_url
                    },
                    ...getCookie.lastView,
                ]
            }
            const postMovie = await PreferencesService().updateCookie(getCookie.value, data)
            return postMovie

        }

    }

}

export default MoviesController