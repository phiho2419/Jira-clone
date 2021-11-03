import { all } from 'redux-saga/effects'
import * as userAction from '../actions/UserActions'


export function* rootSaga() {
    yield all([
        userAction.trackingCallApiSignIn(),
        userAction.trackingCallApiSignUp(),
    ])
}