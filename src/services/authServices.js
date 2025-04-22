import publicApi from "../api/publicApi"

const login = async (email, password) => {
    try {
        const response = await publicApi.post('/login', { email, password });
        return response.data;
    } catch (error) {
        return null;
    }
}

export const authServices = {
    login
} 