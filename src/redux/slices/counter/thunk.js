import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../../api/axiosInstances'

// First, create the thunk
export const getData = createAsyncThunk(
  'getPosts',
  async (argument, thunkAPI) => {
    const response = await axiosInstance.get("https://jsonplaceholder.typicode.com/users")
    return response.data
  }
)
