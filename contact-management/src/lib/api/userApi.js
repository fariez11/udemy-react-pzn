export const userRegister = async (param) => {
    return await fetch (`${import.meta.env.VITE_API_PATH}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(param),
    })    
}


export const userLogin = async (param) => {
    return await fetch (`${import.meta.env.VITE_API_PATH}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(param),
    })    
}