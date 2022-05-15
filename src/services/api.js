import axios from 'axios'

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(async config => {
	const token = import.meta.env.VITE_TOKEN
	if (token) {
		config.headers.Authorization = `${token}`
	}
	return config;
})
