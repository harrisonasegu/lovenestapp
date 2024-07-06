import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { request } from '@/api/api-config'

import { useResponseMessageStore } from '../common/responseMessage'

import type { ContactUs_Interface } from '@/interface/formSubmission'

import type { RequestFreeAssessment_Interface } from '@/interface/formSubmission'

const { updateResponse } = useResponseMessageStore()

export const useFormSubmisionStore = defineStore('formSubmision', () => {
  // actions
  // For Contact Us
  async function ContactUs(payload: ContactUs_Interface) {
    return await request.post('ContactUs/SubmitContactUs', payload)
      .then(response => {
        const responseData = response.data
        const { responseCode, responseMessage } = responseData

        switch (responseCode) {
          // successful
          case '00':
            // update notification
            updateResponse('Contact Us', 'success', responseMessage)
            break

          // failed
          default:
            // update notification
            updateResponse('Contact Us', 'error', responseMessage)
            break
        }

        return responseData
      })
      .catch(error => {        
        const errorMessagesObj = error?.response.data?.errors
        const serverErrorMessage = error.message

        const errorMessages_: string[] = []

        for (const key in errorMessagesObj) {
          if (Object.prototype.hasOwnProperty.call(errorMessagesObj, key)) {
            const errorMessagesObjValue = errorMessagesObj[key]
            
            errorMessages_.push(errorMessagesObjValue[0])
          }
        }

        // update notification
        updateResponse('Contact Us', 'error', (errorMessages_.length ? errorMessages_.join() : serverErrorMessage))

        return error
      })
    }

    // For Request Free Assessment
    async function RequestFreeAssessment(payload: RequestFreeAssessment_Interface) {
      return await request.post('Consultation/SubmitConsultation', payload)
        .then(response => {
          const responseData = response.data
          const { responseCode, responseMessage } = responseData
  
          switch (responseCode) {
            // successful
            case '00':
              // update notification
              updateResponse('Request Free Assessment', 'success', responseMessage)
              break
  
            // failed
            default:
              // update notification
              updateResponse('Request Free Assessment', 'error', responseMessage)
              break
          }
  
          return responseData
        })
        .catch(error => {        
          const errorMessagesObj = error?.response.data?.errors
          const serverErrorMessage = error.message
  
          const errorMessages_: string[] = []
  
          for (const key in errorMessagesObj) {
            if (Object.prototype.hasOwnProperty.call(errorMessagesObj, key)) {
              const errorMessagesObjValue = errorMessagesObj[key]
              
              errorMessages_.push(errorMessagesObjValue[0])
            }
          }
  
          // update notification
          updateResponse('Contact Us', 'error', (errorMessages_.length ? errorMessages_.join() : serverErrorMessage))
  
          return error
        })
      }


    return {
      ContactUs,
      RequestFreeAssessment
    }
  })
