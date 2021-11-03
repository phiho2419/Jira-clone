import axios from 'axios'
import { call, takeLatest, put, delay } from 'redux-saga/effects'
import { userService } from '../../services/userServices'
import { TOKEN, USERLOGIN } from '../../utils/constant'



function* callApiSignupAction(action) {

    try {
        const { data, status } = yield call(() => {
            return userService.callApiSignup(action.newUser)
        })
        if (status === 200) {
            alert("Register successfully !");
            action.historyProps.push('/signin')
        }
    } catch (error) {
        alert("Email existed !")
    }

}

export function* trackingCallApiSignUp() {
    yield takeLatest("CALL_API_SIGN_UP", callApiSignupAction);
}

function* callApiSigninAction(action) {
    yield put({
        type: 'DISPLAY_LOADING'
    })
    try {
        //TEST LOADING GIF

        yield delay(1000)
        const { data, status } = yield call(() => {
            return userService.callApiSignIn(action.data)
        })
        if (status === 200) {
            localStorage.setItem(TOKEN, data.content.accessToken);
            localStorage.setItem(USERLOGIN, JSON.stringify(data.content));
            alert("Sign in successflly!");
            action.historyProps.push('/')
        }
        else {
            console.log("Sign in fail !");
        }

    } catch (error) {
        alert("Email or password is incorred !");
        action.historyProps.go(0)
    }
    yield put({
        type: 'HIDDEN_LOADING'
    })

}

export function* trackingCallApiSignIn() {
    yield takeLatest("CALL_API_SIGN_IN", callApiSigninAction);
}