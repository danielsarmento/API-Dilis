import { RegisterService } from "../../services/registerServices.js";

export async function sendManual (req, res) {
    try{
        const registerService = new RegisterService()

        await registerService.send("Daniel", "www.google.com", "83999415087")
        
        return res.status(200).json({message: "Messages sent successfully!"})
        
    } catch (err) {
        console.log(err.message)
        return res.status(500).end()
    }
}