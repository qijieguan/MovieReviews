export const setSave = save => {
    return {
        type: 'SET_SAVE',
        payload: save
    }
}

export const setDelete = del => {
    return {
        type: 'SET_DELETE',
        payload: del
    }
}
