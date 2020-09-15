import React, { createContext, useReducer } from 'react'
import IconReducer from '../reducers/IconReducer'

const initialState = {
    file: {
        name: '',
        preview: '',
    }
}

export const IconContext = createContext(initialState)

export const IconProvider = (props) => {
    const [state, dispatch] = useReducer(IconReducer , initialState)

    function greet(name) {
        return new Promise((resolve, reject) => {
            try {
                dispatch({
                    type: 'GREET',
                    payload: name
                })

                resolve()
            } catch (err) {
                reject(err)
            }
        })
    }

    return <IconContext.Provider value={{
        file: state.file,
        greet
    }}>
        { props.children }
    </IconContext.Provider>
}
