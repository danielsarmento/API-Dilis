import axios from 'axios'

export class SendManualService {

    async executeSendManual (data){
        try {
            for (const item of data){
                await this.send(item.name, item.videoLink, item.cellphone)
            }
            return 

          } catch (err) {
            console.log(err)
            throw new Error()
          }
    }
    
    async send (name, videoLink, phone) {
        //const link = videoLink.replace(" ", "")
          try {
              /*await axios.post('https://api.zenvia.com/v2/channels/whatsapp/messages', {
                from: `558398679409`,
                to: `55${phone}`,
                contents: [
                    {
                        type: 'template',
                        templateId: `6d5d5264-764d-4df2-86dc-d47ca8a45e51`,
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
            });*/
            await axios.post('https://api.zenvia.com/v2/flow-batches', {
            flowId: `b4656ce4-07ab-41c5-9329-3c0203b8664f`,
            name: 'Fluxo Ativo - Dilis São João',
            content: {
                    fields: [
                        [
                        `${phone}`
                        ]
                    ],
                    fieldNames: [
                        "whatsapp"
                    ]
            }
        }, {
            headers: {
                'X-API-TOKEN': `onmngqVKP0U9KNbsiE3yY-Z86A7b6U4w5CXy`,
                'Content-Type': 'application/json',
            },
        });
        console.log(`Disparado para: ${name}`)
        } catch (err) {
            console.log(err)
            throw new Error()
        }
    }

}
