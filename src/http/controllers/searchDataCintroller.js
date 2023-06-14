import { SearchDataService } from "../../services/searchDataService.js";

export async function searchData (req, res) {
    const {phone} = req.params
    
    try{
        const searchDataService = new SearchDataService()
        const response = await searchDataService.search(phone)

        return res.status(200).json({isRegister: true, response})
        
    } catch (err) {
        console.log(err.message)
        if(err instanceof SearchCellphoneError){
            return res.status(404).json({isRegister: false})
        }
        return res.status(500).json({isRegister: false})
    }
}