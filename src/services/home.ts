import ApiConfig from "../config/api-config"
import { apiClient } from "./client"

export const fetchColors = () => {
    return apiClient.get(`${ApiConfig.random}?count=5`)
}