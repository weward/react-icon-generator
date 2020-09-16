import React, { createContext, useReducer } from 'react'
import IconReducer from '../reducers/IconReducer'
import axios from 'axios'

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

    function processImage(data) {
        return new Promise((resolve, reject) => {
            // proceess image
            axios({
                method: 'POST', 
                url: `${process.env.REACT_APP_API_URL}/generate-icons`,
                data
            }).then((res) => {
                // download
                axios({
                    method: 'POST',
                    url: `${process.env.REACT_APP_API_URL}/download`,
                    responseType: 'blob',
                    data: {
                        dir: res.data.dir
                    }
                }).then((resd) => {
                    const url = window.URL.createObjectURL(new Blob([resd.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'weward-icons.zip');
                    document.body.appendChild(link);
                    link.click();

                    resolve()
                }).catch(() => {
                    reject('Download Failed.')
                })
            }).catch(() => {
                reject('Processing Failed.')
            })
        });
    }

    return <IconContext.Provider value={{
        // STATE
        file: state.file,
        // ACTIONS
        greet,
        processImage,
    }}>
        { props.children }
    </IconContext.Provider>
}
