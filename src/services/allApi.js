import { commonAPI } from "./commonApi"
import SERVER_URL from "./serverUrl"

// register api
export const registerAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}/register`, user, "")
}

// login api
export const loginAPI = async (user) => {
    return await commonAPI("POST", `${SERVER_URL}/login`, user, "")
}
// add task
export const addProjectAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVER_URL}/add-project`, reqBody, reqHeader)
}

// get all project vewmore
export const getAllProjectAPI = async (searchkey, reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/get-all-project?search=${searchkey}`, "", reqHeader)
}


// get user project auth
export const getUserProjectAPI = async (reqHeader) => {
    return await commonAPI("GET", `${SERVER_URL}/get-user-project`, "", reqHeader)
}

// edit project
export const updateProjectAPI = async (projectId, reqBody, reqHeader) => {
    return await commonAPI("PUT", `${SERVER_URL}/project/edit/${projectId}`, reqBody, reqHeader)
}

// delete project
export const deleteProjectAPI = async (projectId, reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/remove-project/${projectId}`, {}, reqHeader)
}

