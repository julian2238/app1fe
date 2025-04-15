import AsyncStorage from "@react-native-async-storage/async-storage";

const { create } = require("zustand");

const useAuthStore = create((set) => ({
    user: null,
    token: null,
    isLoading: true,
    login: async ({user, token}) => {
        await AsyncStorage.setItem('token', token)
        set({ user, token })
    },
    logout: async () => {
        await AsyncStorage.removeItem('token')
        set({ user: null, token: null })
    },
    getTokenFromStorage: async () => {
        const token = await AsyncStorage.getItem('token')
        set({ token, isLoading: false })
    }
}))

export default useAuthStore;