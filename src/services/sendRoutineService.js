import axios from 'axios'

export class SendRoutineService {
    
    async executeSendRoutine (){
        try {
            const apiData = await this.searchDataDB()
            console.log("Número de Disparos: ", apiData.length)
            if(!apiData){
                return
            } else {
                for (const item of apiData){
                    await this.send(item.name, item.videoLink, item.cellphone)
                    await this.update(item.id)
                }
                await this.send("Daniel", `Número de Disparos: ${apiData.length}`, "83999415087")
                return 
            }

          } catch (err) {
            console.log(err)
            throw new Error()
          }
    }


    async searchDataDB () {
        try {
            const response = await axios.get(`http://145.14.134.34:3021/api/external/users`)
            if (!response){
                return []
            } else {
                return response?.data?.users
            }
            
          } catch (err) {
            console.log(err)
            throw new Error()
          }
    }

    async send (name, videoLink, phone) {
        const link = videoLink.replace(" ", "")
        try {await axios.post('https://api.zenvia.com/v2/channels/whatsapp/messages', {
                from: `558398679409`,
                to: `55${phone}`,
                contents: [
                    {
                        type: 'template',
                        templateId: `989a319d-e069-44bd-8252-e7adfca41378`,
                        fields: {
                            name: `${name}`,
                            videoLink: `${link}`
                        }
                    }
                ]
            }, {
                headers: {
                    'X-API-TOKEN': `onmngqVKP0U9KNbsiE3yY-Z86A7b6U4w5CXy`,
                    'Content-Type': 'application/json',
                },
            });
        } catch (err) {
            console.log(err)
            throw new Error()
        }
    }

    async update (id){
        try {
            await axios.put(`http://145.14.134.34:3021/api/external/users/status/${id}`)
            return 
        } catch (err) {
            console.log(err)
            throw new Error()
        }
    }
}