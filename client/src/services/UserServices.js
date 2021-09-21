import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const SignUpUser = async (data) => {
  try {
    const res = await Client.post('/signup', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('/session')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUser = async (user_id) => {
  try {
    const res = await Client.get(`/${user_id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAllUsers = async () => {
  try {
    const res = await Client.get(`/`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePassword = async (data) => {
  try {
    const res = await Client.post('/update/password', data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateUser = async (data) => {
  try {
    const res = await Client.put('/update', data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteUser = async (user_id) => {
  try {
    const res = await Client.destroy(`/delete/${user_id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
