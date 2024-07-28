import { asyncHandler } from "../utils/asyncHandler.js";


// asyncHandler is function is higher order function
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Ok"
    })
}) 


export {registerUser} 

