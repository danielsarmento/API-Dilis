import axios from 'axios'

export class RegisterService {
    
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
            throw new Error()
        }
    }

}