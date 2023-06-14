import { SendRoutineService } from "../../services/sendRoutineService.js";

export async function sendRoutine (req, res) {
    try{
        const sendRoutineService = new SendRoutineService()

        await sendRoutineService.executeSendRoutine()
        
        return res.status(200).json({message: "Messages sent successfully!"})
        
    } catch (err) {
        console.log(err.message)
        return res.status(500).end()
    }
}