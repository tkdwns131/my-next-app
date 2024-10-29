// lib/api.js
import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const getExampleData = async () => {
  try {
    const response = await api.get("/")
    return response.data
  } catch (error) {
    console.error(error)
  }
}
