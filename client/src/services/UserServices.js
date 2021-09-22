import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('users/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const SignUpUser = async (data) => {
  try {
    const res = await Client.post('users/signup', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('users/session')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUser = async (user_id) => {
  try {
    const res = await Client.get(`users/${user_id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAllUsers = async () => {
  try {
    const res = await Client.get(`users/`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePassword = async (data) => {
  try {
    const res = await Client.post('users/update/password', data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateUser = async (data) => {
  try {
    const res = await Client.put('users/update', data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteUser = async (user_id) => {
  try {
    const res = await Client.delete(`users/delete/${user_id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
