const stateDefault = {
    data: 'data'
}

export const UserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SIGN_IN':{
            break;
        }
        case 'SIGN_UP':{
            break;
        }
        
        default: return { ...state }
    }
}