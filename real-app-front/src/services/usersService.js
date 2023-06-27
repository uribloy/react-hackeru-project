import httpService from "./httpService";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";
setHeaderToken();

export function setHeaderToken() {
    httpService.setCommonHeader("x-auth-token", getJWT());
}

export function createUser(user) {
    return httpService.post("/users", user);
}
export async function login(credentials) {
    const response = await httpService.post("/auth", credentials);
    localStorage.setItem(TOKEN_KEY, response.data.token)
    setHeaderToken();
    return response;
}
export function logout() {
    localStorage.removeItem(TOKEN_KEY);
    setHeaderToken();
}
export function getJWT() {
    return localStorage.getItem(TOKEN_KEY);
}
export function getUser() {
    try {
        const token = getJWT();
        return jwtDecode(token);
    } catch {
        return null;
    }
}



const usersServices = {
    createUser,
    login,
    logout,
    getJWT,
    getUser
}
export default usersServices;