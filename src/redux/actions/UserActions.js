import axios from 'axios'
import { call } from 'redux-saga/effects'



export function* callApiSignup(action) {

    const result = yield call(() => {
        return axios({
            url: 'http://casestudy.cyberlearn.vn/api/Users/signup',
            method: 'POST',
            data: action.newUser
        })
    })
    alert("Register success !");
    action.historyProps.push('/signin')
    // console.log(result);
}

export function* callApiSignin(action) {

    const result = yield call(() => {
        return axios({
            url: 'http://casestudy.cyberlearn.vn/api/Users/signin',
            method: 'POST',
            data: action.data
        })


    })
    console.log(result);
    action.historyProps.push('/')

}