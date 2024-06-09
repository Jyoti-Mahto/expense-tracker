import { client } from "../../utils/db/config.js"
import { generateUUID } from "../../utils/utility.js"
import { validateBody } from "../../utils/validate.js"

const addDataToDb = async (data) => {
    try {
        const userId = generateUUID()
        client.query('INSERT INTO public."userDetails" (user_name, password, email_id, contact_number, user_id) VALUES ($1, $2, $3, $4, $5)',
            [data.userName, data.password, data.emailId, data.contactNumber, userId])
        return true
    }
    catch(err){
        console.log(err)
    }
    
}
export async function createUser(req, res) {
   try{
    const payload = req.body
    validateBody(payload)
    const response = await addDataToDb(payload)
    if(response) {
        return res.send("User created successfully")
    }
   }
   catch(err){
    res.status(400).json({ error: JSON.parse(err.message) })
   }
    
}