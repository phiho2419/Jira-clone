import axios from "axios";

class UserService {
    constructor() {
        
    }

    callApiSignIn = (signinData) => {
        return axios({
            url: 'http://casestudy.cyberlearn.vn/api/Users/signin',
            method: 'POST',
            data: signinData
        })
    }
    callApiSignup = (signupData) => {
        return axios({
            url: 'http://casestudy.cyberlearn.vn/api/Users/signup',
            method: 'POST',
            data: signupData
        })
    }
}

export const userService = new UserService();