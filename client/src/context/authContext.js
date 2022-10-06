
import React, { useReducer, createContext } from 'react'
import jwtDecode from 'jwt-decode'


const initialState = {
    user: null
}

if(localStorage.getItem("sessiontoken")) {
    const decodedToken = jwtDecode(localStorage.getItem('sessiontoken'))

    if(decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('sessiontoken')
    } else {
        initialState.user = decodedToken
    }
}

const authContext = createContext({
    user: null,
    login: userData => {},
    logout: () => {}
})

const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}

