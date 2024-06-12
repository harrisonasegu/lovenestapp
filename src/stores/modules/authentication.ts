import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { request } from '@/api/api-config'

import type {
  User_Interface,
  Login_Interface,
  Logout_Interface,
  ChangePassword_Interface,
  ContactUs_Interface
} from '@/interface/authentication'

import { useResponseMessageStore } from '../common/responseMessage'

const { updateResponse } = useResponseMessageStore()

export const useAuthenticationStore = defineStore('authentication', () => {
  // state
  const user = () => localStorage.getItem('@') as string
  const isLoggedInAnotherDevice = ref<boolean>(false)
  const isLogoutMenuClicked = ref<boolean>(false)

  // getters
  const getToken = computed(() => user() ? JSON.parse((user()) as string)['#####'] : null)
  const getUser = computed(() => user() ? JSON.parse((user()) as string)['####'] : null)
  const getIsLoggedInAnotherDevice = computed(() => isLoggedInAnotherDevice)
  const getIsLogoutMenuClicked = computed(() => isLogoutMenuClicked)

  // actions
  function saveUserCredentials(data: User_Interface) {
    const user_json = JSON.stringify(data)

    // save user data
    localStorage.setItem('@', user_json)
  }

  function updateIsLogoutMenuClicked(state: boolean) {
    isLogoutMenuClicked.value = state
  }

  async function Login(payload: Login_Interface) {
    return await request.post('Auth/Login', payload)
      .then(response => {
        const responseData = response.data
        const { responseCode, responseMessage } = responseData

        switch (responseCode) {
          // successful login
          case '00':
            saveUserCredentials({
              '#####': responseData.jwtToken,
              '####': responseData.data
            })
            break

          // logged in on another device
          case '09':
            // update notification
            updateResponse('Authentication', 'error', responseMessage)

            // update user loggen in another device
            isLoggedInAnotherDevice.value = true
            break

          default:
            // update notification
            updateResponse('Authentication', 'error', responseMessage)
            break
        }

        return responseData
      })
      .catch(error => {
        // update notification
        updateResponse('Authentication', 'error', error.message)
      })
  }

  async function Logout(payload: Logout_Interface) {
    return await request.post('Auth/Logout', payload)
      .then(response => {
        const responseData = response.data
        const { responseCode, responseMessage } = responseData

        switch (responseCode) {
          // successful logout
          case '00':
            // clear ;ocal stroage
            localStorage.removeItem('@')
            // update user loggedIn in another device
            isLoggedInAnotherDevice.value = false

            // update notification
            updateResponse('Logout', 'success', responseMessage)
            break

          default:
            // update notification
            updateResponse('Logout', 'error', responseMessage)
            break
        }

        return responseData
      })
      .catch(error => {
        // update notification
        updateResponse('Logout', 'error', error.message)
      })
  }

  function Unauthorized(email: string, errorMessage: string) {
    // update notification
    updateResponse('Session Timeout', 'error', errorMessage)

    // logout
    Logout({ email })
      .finally(() => {
        location.href = ('/login')
      })
  }

  async function SendEmailForPasswordChange(payload: Logout_Interface) {
    return await request.post('Auth/SendEmailForPasswordChange', payload)
      .then(response => {
        const responseData = response.data
        const { responseCode, responseMessage } = responseData

        switch (responseCode) {
          // successful logout
          case '00':
            // update notification
            updateResponse('Reset Password', 'success', responseMessage)
            break

          default:
            // update notification
            updateResponse('Reset Password', 'error', responseMessage)
            break
        }

        return responseData
      })
      .catch(error => {
        // unauthorized
        const errorCode = error.response.status
        const errorMessage = error.message

        if (errorCode === 401) {
          Unauthorized(getUser.value?.email, errorMessage)
        } else {
          // update notification
          updateResponse('Reset Password', 'error', error.message)
        }
      })
  }

  async function ChangePassword(payload: ChangePassword_Interface) {
    return await request.post('Auth/ChangePassword', payload)
      .then(response => {
        const responseData = response.data
        const { responseCode, responseMessage } = responseData

        switch (responseCode) {
          // successful
          case '00':
            // update notification
            updateResponse('Reset Password', 'success', responseMessage)
            break

          default:
            // update notification
            updateResponse('Reset Password', 'error', responseMessage)
            break
        }

        return responseData
      })
      .catch(error => {
        // unauthorized
        const errorCode = error.response.status
        const errorMessage = error.message

        if (errorCode === 401) {
          Unauthorized(getUser.value?.email, errorMessage)
        } else {
          // update notification
          updateResponse('Reset Password', 'error', error.message)
        }
      })
  }

  async function UpdateUserProfileDetails(payload: Login_Interface) {
    return await request.post('Auth/UpdateUserProfileDetails', payload)
      .then(response => {
        const responseData = response.data
        const { responseCode, responseMessage } = responseData

        switch (responseCode) {
          // successful
          case '00':
            // update notification
            updateResponse('Update Profile', 'success', responseMessage)
            break

          default:
            // update notification
            updateResponse('Update Profile', 'error', responseMessage)
            break
        }

        return responseData
      })
      .catch(error => {
        // unauthorized
        const errorCode = error.response.status
        const errorMessage = error.message

        if (errorCode === 401) {
          Unauthorized(getUser.value?.email, errorMessage)
        } else {
          // update notification
          updateResponse('Update Profile', 'error', error.message)
        }
      })
  }

  async function ContactUs(payload: ContactUs_Interface) {
    return await request.post('Auth/ContactUs', payload)
      .then(response => {
        const responseData = response.data
        const { responseCode, responseMessage } = responseData

        switch (responseCode) {
          // successful
          case '00':
            // update notification
            updateResponse('Contact Us', 'success', responseMessage)
            break

          default:
            // update notification
            updateResponse('Contact Us', 'error', responseMessage)
            break
        }

        return responseData
      })
      .catch(error => {
        // unauthorized
        const errorCode = error.response.status
        const errorMessage = error.message

        if (errorCode === 401) {
          Unauthorized(getUser.value?.email, errorMessage)
        } else {
          // update notification
          updateResponse('Contact Us', 'error', error.message)
        }
      })
  }

  return {
    getToken,
    getUser,
    getIsLoggedInAnotherDevice,
    getIsLogoutMenuClicked,
    updateIsLogoutMenuClicked,
    Login,
    Logout,
    Unauthorized,
    UpdateUserProfileDetails,
    SendEmailForPasswordChange,
    ChangePassword,
    ContactUs
  }
})
