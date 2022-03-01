import axios from "axios"

const api = 'https://crypto-pulse.p.rapidapi.com/news'

export const getData = {
    news: async () => {
        return (
            await axios.get(api, {
                headers: {
                    'x-rapidapi-host': 'crypto-pulse.p.rapidapi.com',
                    'x-rapidapi-key': 'e4c7ebbbccmsh805be7141926048p16637ejsnea9d3188f6ed'
                }
            }).catch(error => console.log(error))
        )
    }
}