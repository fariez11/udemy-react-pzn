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

export const userSession = async (token) => {
    return await fetch (`${import.meta.env.VITE_API_PATH}/users/current`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization' : token
        },
    })    
}

export const updateName = async (token, param) => {
    return await fetch (`${import.meta.env.VITE_API_PATH}/users/current`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization' : token
        },
        body : JSON.stringify(param)
    })
}


export const userLogout = async (token) => {
    return await fetch (`${import.meta.env.VITE_API_PATH}/users/logout`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization' : token
        }
    })
}