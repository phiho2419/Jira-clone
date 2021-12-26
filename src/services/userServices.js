import axios from "axios";
import { DOMAIN } from "../utils/constant";

class UserService {
    constructor() {
        
    }

    callApiLogin = (signinData) => {
        return axios({
            url: `${DOMAIN}/api/Users/signin`,
            method: 'POST',
            data: signinData
        })
    }
    callApiSignup = (signupData) => {
        return axios({
            url: `${DOMAIN}/api/Users/signup`,
            method: 'POST',
            data: signupData
        })
    }
}

export const userService = new UserService();