import { GET_ALL_NEWS } from "../actions"

export const reducer = (state = [], action) => {
    switch(action.type){
        case GET_ALL_NEWS:
            state = action.payload
            return state
        default:
            return state
    }
}