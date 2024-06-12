<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'

import {
  useNotification,
  NText,
  NIcon,
  NButton,
  NForm,
  NFormItem,
  NInput,
  NInputNumber,
  NUpload,
  NUploadDragger,
  NRow,
  NCol
} from 'naive-ui'

import type {
  FormInst,
  FormValidationError,
  FormRules
} from 'naive-ui'

import type { ProductData_Interface, UpdateProductData_Interface } from '@/interface/product'

import { useResponseNotification } from '@/utils/responseNotification'

import { useResponseMessageStore } from '@/stores/common/responseMessage'
import { useProductStore } from '@/stores/modules/product'
import { useGlobalModalStore } from '@/stores/common/globalModal';

import FormCard from '@/components/form/formCard.vue'

const notification = useNotification()

const responseMessageStore = useResponseMessageStore()
const productStore = useProductStore()
const globalModalStore = useGlobalModalStore()

const emit = defineEmits(['closeProductForm'])
defineProps({
  mode: String
})

const modalProp = globalModalStore.getModalProp

const isLoading = ref<boolean>(false)

const formRef = ref<FormInst | null>(null)

const model = reactive({
  productName: '',
  shortDescription: '',
  mainDescription: '',
  productImages: [],
  quantity: 0,
  amount: 0
})

const rules: FormRules = {
  productName: [
    {
      required: true,
      message: 'product name is required'
    }
  ],
  shortDescription: [
    {
      required: true,
      message: 'short description is required'
    }
  ],
  mainDescription: [
    {
      required: true,
      message: 'main description is required'
    }
  ],
  quantity: [
    {
      required: true,
      message: 'quantity is required'
    }
  ],
  amount: [
    {
      required: true,
      message: 'quantity is required'
    }
  ],
  productImages: [
    {
      required: true,
      message: 'at least one product photo is required'
    }
  ]
}

function showNotification(duration: number) {
  useResponseNotification(
    notification,
    responseMessageStore.response.status,
    responseMessageStore.response.title,
    responseMessageStore.response.message,
    duration
  )
}

function loadingState(state: boolean) {
  isLoading.value = state
}

function updateInputFields() {
  const data = modalProp.data as any

  model.productName = data.productName
  model.shortDescription = data.shortDescription
  model.mainDescription = data.mainDescription
  model.quantity = data.quantity
  model.amount = data.amount
}

function clearInputFields() {
  model.productName = ''
  model.shortDescription = ''
  model.mainDescription = ''
  model.productImages = []
  model.quantity = 0
  model.amount = 0
}

function handleBeforeFileUpload(options: any) {
  // file formats are .jpeg, .jpg and .png
  if (!['image/jpeg', 'image/jpg', 'image/png'].includes(options.file.type)) {
    // update response message
    responseMessageStore.updateResponse('Product Upload', 'error', 'Unsupported file format.')
    // show response message
    showNotification(5000)
    return false
  } else
    if (Math.round(options.file.file.size / 1000) > 2000) {
      // update response message
      responseMessageStore.updateResponse('Product Upload', 'error', 'File size shouldn\'t exceed 2Mb.')
      // show response message
      showNotification(5000)
      return false
    } else {
      // update response message
      responseMessageStore.updateResponse('', '', '')

      const fileReader = new FileReader

      fileReader.readAsDataURL(options.file.file)

      fileReader.addEventListener('load', () => {
        const dataUrl = fileReader.result as string
        model.productImages.push(dataUrl as never)
      })
    }
}

function handleRemoveFile(options: any) {
  const productImages = model.productImages
  const removedImage = options.file.file as never
  const removedImageIndex = productImages?.indexOf(removedImage)

  // update product images
  productImages.splice(removedImageIndex, 1)
}

function handleValidateButtonClick (e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate(
    (errors: Array<FormValidationError> | undefined) => {
      if (errors) return

      // loading state
      loadingState(true)

      const updateProductButtonClicked = productStore.getIsProductActionButtonClicked.value
      const request = updateProductButtonClicked
        ? productStore.UpdateProduct : productStore.CreateProduct

      let payload: ProductData_Interface | UpdateProductData_Interface = {
        productId: null,
        productName: model.productName,
        shortDescription: model.shortDescription,
        mainDescription: model.mainDescription,
        productImage1: model.productImages[0] ? model.productImages[0] as unknown as string : '',
        productImage2: model.productImages[1] ? model.productImages[1] as unknown as string : '',
        quantity: model.quantity,
        amount: model.amount
      }

      if (modalProp.data) {
        const data = modalProp.data as any
        // update product id
        payload.productId = data?.productId
      }

      // proceed to upload product
      request(payload)
        .then((response) => {
          const { responseCode } = response

          // close product form
          if (responseCode === '00') emit('closeProductForm')

          // loading state
          loadingState(false)
          // notification
          showNotification(5000)
        })
        .catch(() => {
          // loading state
          loadingState(false)
          // notification
          showNotification(5000)
        })
    }
  )
}

onMounted(() => {
  if (productStore.getIsProductActionButtonClicked.value) updateInputFields()
})
</script>

<template>
  <div class="form-container">
    <FormCard>
      <n-form ref="formRef" :model="model" :rules="rules">
        <n-form-item
          path="productName"
          label="Product Name"
        >
          <n-input
            :disabled="isLoading"
            v-model:value="model.productName"
            type="text"
            @keydown.enter.prevent
          />
        </n-form-item>

        <n-form-item
          path="shortDescription"
          label="Short Description"
        >
          <n-input
            v-model:value="model.shortDescription"
            :disabled="!model.productName || isLoading"
            type="textarea"
            :autosize="{
              minRows: 2,
              maxRows: 4
            }"
            @keydown.enter.prevent
          />
        </n-form-item>

        <n-form-item
          path="mainDescription"
          label="Main Description"
        >
          <n-input
            v-model:value="model.mainDescription"
            :disabled="!model.shortDescription || isLoading"
            type="textarea"
            :autosize="{
              minRows: 3,
              maxRows: 5
            }"
            @keydown.enter.prevent
          />
        </n-form-item>

        <n-form-item
          path="quantity"
          label="Quantity"
        >
          <n-input-number
            :disabled="isLoading"
            v-model:value="model.quantity"
            min="0"
            @keydown.enter.prevent
          />
        </n-form-item>

        <n-form-item
          path="amount"
          label="Amount"
        >
          <n-input-number
            :disabled="isLoading"
            v-model:value="model.amount"
            min="0"
            :show-button="false"
            @keydown.enter.prevent
          />
        </n-form-item>

        <n-form-item
          path="productImages"
          label="Product Images"
        >
          <n-upload
            :disabled="isLoading"
            multiple
            list-type="image"
            :max="2"
            @before-upload="handleBeforeFileUpload"
            @remove="handleRemoveFile"
          >
            <n-upload-dragger>
              <div style="margin-bottom: 12px">
                <n-icon size="40" :depth="3">
                  <Icon icon="uil:upload" />
                </n-icon>
              </div>
              <n-text style="font-size: 16px">
                click or drop files here to upload
              </n-text>
            </n-upload-dragger>
          </n-upload>
        </n-form-item>

        <n-row :gutter="[0, 24]">
          <n-col :span="24">
            <div style="display: flex; justify-content: flex-end">
              <n-button
                round
                type="primary"
                :loading="isLoading"
                :disabled="isLoading"
                @click="handleValidateButtonClick"
              >
                Submit
              </n-button>
            </div>
          </n-col>
        </n-row>
      </n-form>
    </FormCard>
  </div>
</template>

<style lang="scss" scoped>
.form-container {
  width: 350px;
  padding: 40px 0;
  display: flex;
  justify-content: center;
}

@media (max-width: 575.9px) {
  .form-container {
    width: 100%;
  }
}
</style>
