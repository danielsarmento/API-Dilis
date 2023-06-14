import axios from 'axios'

export class SearchDataService {
    
    async search (phone){
        try {
            const cellphone = phone.slice(2)
            const response = await axios.get(`http://145.14.134.34:3021/api/external/users/cellphone/${cellphone}`)
            return response.data.user
        } catch (err) {
            if(err.response.status === 404){
                throw new Error()
            }
        }
    }

}