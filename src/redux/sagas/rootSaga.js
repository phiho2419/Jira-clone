import { all } from 'redux-saga/effects'
import * as userAction from '../actions/UserActions'


export function* rootSaga() {
    yield all([
        userAction.trackingCallApiLogin(),
        userAction.trackingCallApiSignUp(),
    ])
}