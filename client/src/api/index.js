import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertDiary = payload => api.post(`/diaries/create`, payload)
export const getAllDiaries = () => api.get(`/diaries`)
export const updateDiaryById = (id, payload) => api.put(`/diary/${id}`, payload)
export const deleteDiaryById = id => api.delete(`/diary/${id}`)
export const getDiaryById = id => api.get(`/diary/${id}`)

const apis = {
    insertDiary,
    getAllDiaries,
    updateDiaryById,
    deleteDiaryById,
    getDiaryById,
}

export default apis