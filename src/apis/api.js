import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_BASE_URL

const instance = axios.create({
  baseURL : BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY
  }
})

export const getDogs = async () => {
  const respoonse = await instance.get(`/images/search`, {
    params : {
      format : "json",
      limit : 5,
      has_breeds : true,
      order : "ASC"
    },
  })
  
  return respoonse.data
}