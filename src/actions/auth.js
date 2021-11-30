import {types} from "../types/Types"
export const googlelogin = (id, username) =>{
    return {
       type: types.login,
        payload:{
            username, 
            id,
        }
        
    };
}