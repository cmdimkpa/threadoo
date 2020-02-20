export function threads(state=[], action){
    if (action.type === 'NEW_THREAD'){
        return state.concat([action.payload])
    } else {
        return state
    }
}