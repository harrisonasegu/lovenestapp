import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import type { GlobalModalProp_Interface } from '@/interface/globalModalProp'

export const useGlobalModalStore = defineStore('global_modal', () => {
  // state
  const showGlobalModal = ref<boolean>(false)
  const modalProp = reactive<GlobalModalProp_Interface>({
    buttonClicked: '',
    title: '',
    data: null
  })

  // getters
  const getShowGlobalModal = computed(() => showGlobalModal)
  const getModalProp = computed(() => modalProp)

  // actions
  const SetShowGlobalModal = (data: boolean) => {
    showGlobalModal.value = data
  }

  const SetModalProp = (prop: GlobalModalProp_Interface) => {
    modalProp.buttonClicked = prop.buttonClicked
    modalProp.title = prop.title
    modalProp.data = prop.data
  }

  const CloseModalProp = () => {
    // toggle modal display
    SetShowGlobalModal(false)
    // update modal prop
    SetModalProp({
      buttonClicked: '',
      title: '',
      data: null
    })
  }

  return {
    modalProp,
    getShowGlobalModal,
    getModalProp,
    SetShowGlobalModal,
    SetModalProp,
    CloseModalProp
  }
})
