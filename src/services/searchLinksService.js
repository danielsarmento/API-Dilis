import axios from 'axios'

export class SearchLinksDB {

    async searchLinksDB (cellphone) {
        const telefone = cellphone.slice(2)
        const links = []
        let nome;
        try {
            const response = await axios.get(`http://145.14.134.34:3021/api/external/users?status=all`)
            if (!response){
                return []
            } else {
                const data = response?.data?.users
                data.map((obj) => {
                    if(obj.cellphone === telefone){
                        links.push(obj.videoLink)
                        nome = obj.name
                    }
                })
                return {nome, links}
            }
            
        } catch (err) {
            console.log(err)
            throw new Error()
        }
    }
}