export default (state, action) => {
    switch (action.type) {
        case 'GREET': 
            return {
                ...state.file,
                name: action.payload
            }

        default: 
            return state
    }
}