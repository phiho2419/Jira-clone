import { takeLatest } from 'redux-saga/effects'
import { callApiSignin, callApiSignup } from '../actions/UserActions'



export function* rootSaga() {
    yield takeLatest("CALL_API_SIGN_UP", callApiSignup);
    yield takeLatest("CALL_API_SIGN_IN", callApiSignin);
}