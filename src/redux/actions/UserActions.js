import { call, takeLatest, put, delay } from 'redux-saga/effects'
import { userService } from '../../services/userServices'
import { TOKEN, USERLOGIN } from '../../utils/constant'
import { history } from '../../utils/history'
import { CALL_API_LOG_IN_ACTION, CALL_API_SIGN_UP_ACTION, DISPLAY_LOADING, HIDDEN_LOADING } from '../constants/consRedux'



function* callApiSignupAction(action) {

    try {
        const { data, status } = yield call(() => {
            return userService.callApiSignup(action.newUser)
        })
        if (status === 200) {
            alert("Register successfully !");
            history.push('/login')
        }
    } catch (error) {
        alert("Email existed !")
    }

}

export function* trackingCallApiSignUp() {
    yield takeLatest(CALL_API_SIGN_UP_ACTION, callApiSignupAction);
}

function* callApiLoginAction(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    try {
        //TEST LOADING GIF

        yield delay(1000)
        const { data, status } = yield call(() => {
            return userService.callApiLogin(action.data)
        })
        if (status === 200) {
            localStorage.setItem(TOKEN, data.content.accessToken);
            localStorage.setItem(USERLOGIN, JSON.stringify(data.content));
            alert("Sign in successflly!");
            history.push('/')
        }
        else {
            console.log("Sign in fail !");
        }

    } catch (error) {
        console.log(error);
        // alert("Email or password is incorred !");
        // history.go(0)
    }
    yield put({
        type: HIDDEN_LOADING
    })

}

export function* trackingCallApiLogin() {
    yield takeLatest(CALL_API_LOG_IN_ACTION, callApiLoginAction);
}