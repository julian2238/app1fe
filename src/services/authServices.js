import publicApi from "../api/publicApi"

const login = async (email, password) => {
    const response = await publicApi.post('/login', { email, password });
    return response.data;
}

export const authServices = {
    login
} 