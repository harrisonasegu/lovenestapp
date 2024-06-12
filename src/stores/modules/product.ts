import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { request } from '@/api/api-config'

import type {
  ProductData_Interface,
  UpdateProductData_Interface,
  ProductDelete_Interface
} from '@/interface/product'

import { useAuthenticationStore } from '@/stores/modules/authentication'
import { useResponseMessageStore } from '../common/responseMessage'

const { getUser, Unauthorized } = useAuthenticationStore()
const { updateResponse } = useResponseMessageStore()

export const useProductStore = defineStore('product', () => {
  // state
  const product = ref<object | null>(null)
  const allProducts = ref<object[]>([])
  const activeProducts = ref<object[]>([])
  const isProductActionButtonClicked = ref<boolean>(false)

  // getters
  const getProduct = computed(() => product)
  const getAllProducts = computed(() => allProducts)
  const getActiveProducts = computed(() => activeProducts)
  const getIsProductActionButtonClicked = computed(() => isProductActionButtonClicked)

  // actions
  function setIsProductActionButtonClicked(state: boolean) {
    isProductActionButtonClicked.value = state
  }

  async function CreateProduct(payload: ProductData_Interface) {
    return await request.post('Products/CreateProduct', payload)
      .then(response => {
        const responseData = response.data
        const { responseCode, responseMessage } = responseData

        switch (responseCode) {
          // successful logout
          case '00':
            // refresh product list
            RefreshProductList()
            // update notification
            updateResponse('Create Product', 'success', responseMessage)
            break

          default:
            // update notification
            updateResponse('Create Product', 'error', responseMessage)
            break
        }

        return responseData
      })
      .catch(error => {
        // unauthorized
        const errorCode = error.response.status
        const errorMessage = error.message

        if (errorCode === 401) {
          Unauthorized(getUser.email, errorMessage)
        } else {
          // update products
          updateResponse('Create Product', 'error', error.message)
        }
      })
  }

  async function UpdateProduct(payload: UpdateProductData_Interface) {
    return await request.put('Products/UpdateProduct', payload)
      .then(response => {
        const responseData = response.data
        const { responseCode, responseMessage } = responseData

        switch (responseCode) {
          // successful logout
          case '00':
            // refresh product list
            RefreshProductList()
            // update notification
            updateResponse('Update Product', 'success', responseMessage)
            break

          default:
            // update notification
            updateResponse('Update Product', 'error', responseMessage)
            break
        }

        return responseData
      })
      .catch(error => {
        // unauthorized
        const errorCode = error.response.status
        const errorMessage = error.message

        if (errorCode === 401) {
          Unauthorized(getUser.email, errorMessage)
        } else {
          // update products
          updateResponse('Update Product', 'error', error.message)
        }
      })
  }

  async function DeleteProduct(payload: ProductDelete_Interface) {
    return await request.put('Products/DeleteProduct', payload)
      .then(response => {
        const responseData = response.data
        const { responseCode, responseMessage } = responseData

        switch (responseCode) {
          // successful logout
          case '00':
            // refresh product list
            RefreshProductList()
            // update notification
            updateResponse('Delete Product', 'success', responseMessage)
            break

          default:
            // update notification
            updateResponse('Delete Product', 'error', responseMessage)
            break
        }

        return responseData
      })
      .catch(error => {
        // unauthorized
        const errorCode = error.response.status
        const errorMessage = error.message

        if (errorCode === 401) {
          Unauthorized(getUser.email, errorMessage)
        } else {
          // update products
          updateResponse('Delete Product', 'error', error.message)
        }
      })
  }

  async function GetProductById(id: number|string) {
    return await request.get(`Products/GetProductbyId?ProductId=${id}`)
      .then(response => {
        const responseData = response.data
        const { responseCode, responseMessage } = responseData

        switch (responseCode) {
          case '00':
            // update products
            product.value = responseData.data
            break

          default:
            // update notification
            updateResponse('Fetch Products', 'error', responseMessage)
            break
        }

        return responseData
      })
      .catch(error => {
        // unauthorized
        const errorCode = error.response.status
        const errorMessage = error.message

        if (errorCode === 401) {
          Unauthorized(getUser.email, errorMessage)
        } else {
          // update products
          updateResponse('Fetch Products', 'error', error.message)
        }
      })
  }

  async function GetAllProducts() {
    return await request.get('Products/GetAllProducts')
      .then(response => {
        const responseData = response.data
        const { responseCode, responseMessage } = responseData

        switch (responseCode) {
          case '00':
            // update products
            allProducts.value = responseData.data
            break

          default:
            // update notification
            updateResponse('Fetch Products', 'error', responseMessage)
            break
        }

        return responseData
      })
      .catch(error => {
        // unauthorized
        const errorCode = error.response.status
        const errorMessage = error.message

        if (errorCode === 401) {
          Unauthorized(getUser.email, errorMessage)
        } else {
          // update products
          updateResponse('Fetch Products', 'error', error.message)
        }
      })
  }

  async function GetAllActiveProducts() {
    return await request.get('Products/GetAllActiveProducts')
      .then(response => {
        const responseData = response.data
        const { responseCode, responseMessage } = responseData

        switch (responseCode) {
          case '00':
            // update products
            activeProducts.value = responseData.data
            break

          default:
            // update notification
            updateResponse('Fetch Products', 'error', responseMessage)
            break
        }

        return responseData
      })
      .catch(error => {
        // unauthorized
        const errorCode = error.response.status
        const errorMessage = error.message

        if (errorCode === 401) {
          Unauthorized(getUser.email, errorMessage)
        } else {
          // update products
          updateResponse('Fetch Products', 'error', error.message)
        }
      })
  }

  async function RefreshProductList() {
    Promise.all([
      GetAllProducts(),
      GetAllActiveProducts()
    ])
  }

  return {
    getProduct,
    getAllProducts,
    getActiveProducts,
    getIsProductActionButtonClicked,
    setIsProductActionButtonClicked,
    CreateProduct,
    UpdateProduct,
    DeleteProduct,
    GetProductById,
    GetAllProducts,
    GetAllActiveProducts
  }
})
