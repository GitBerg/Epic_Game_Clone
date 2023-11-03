import axios from 'axios'
import GameData from '../interfaces'

const api = axios.create({
  baseURL: "http://localhost:3000",
})

export const getGames = () => api.get<GameData[]>('/games')

export default api