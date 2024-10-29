// frontend/lib/api.js
import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const createGroup = (groupName) => api.post("/api/group", { groupName })
export const matchManitto = (groupId) => api.post("/api/match", { groupId })
