import { RegisterService } from "../../services/registerServices.js";

export async function sendManual (req, res) {
    const { data } = req.body
    console.log(data)
    try{
        const registerService = new RegisterService()

        await registerService.executeSendManual(data)
        
        return res.status(200).json({message: "Messages sent successfully!"})
        
    } catch (err) {
        console.log(err.message)
        return res.status(500).end()
    }
}