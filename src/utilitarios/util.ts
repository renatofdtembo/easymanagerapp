import AsyncStorage from "@react-native-async-storage/async-storage";

export const cleanSpace = (text: string) => {
    return text.trim().replace(/\s+/g, ' ');
};


export const setStorege = async (key: string, obj: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(obj));
};

export const getStorege = async (key: string) => {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const removeStorege = async (key: string) => {
    await AsyncStorage.removeItem(key);
};
