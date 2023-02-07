import axios from "axios";

const API_URL = '/api/timeblocks/'

//create timeblock
const createTimeblock = async (timeblockData, token) => {
    const config = {
        Headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, timeblockData, config)

    return  response.data
}

// Get user timeblocks
const getTimeblocks = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL, config)
  
    return response.data
  }
  
  // Delete user goal
  const deleteTimeblock = async (_id, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URL + _id, config)
  
    return response.data
  }

const timeblockService = {
    createTimeblock,
    getTimeblocks,
    deleteTimeblock
}

export default timeblockService