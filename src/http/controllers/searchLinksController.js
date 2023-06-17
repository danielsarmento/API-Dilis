import { SearchLinksDB } from "../../services/searchLinksService.js";

export async function searchLinks (req, res) {
    const {telefone} = req.params;
    try {
        const searchLinks = new SearchLinksDB()
        const data = await searchLinks.searchLinksDB(telefone)
        if(data.links.length < 1){
            res.status(200).json({isRegister: false, data:[]})
        } else {
            res.status(200).json({isRegister: true, data})
        }

    } catch (err) {
        console.log(err)
        return res.status(500).end()
    }
}