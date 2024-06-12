<script setup lang="ts">
import { NModal } from 'naive-ui'
import type { PropType } from 'vue'

import type { GlobalModalProp_Interface } from '@/interface/globalModalProp'

defineProps({
  modalProp: {
    type: Object as PropType<GlobalModalProp_Interface>,
    required: true
  },
  maskClosable: Boolean as PropType<boolean>
})

const emit = defineEmits(['closeModal', 'onPositiveClick', 'onNegativeClick'])

const onPositiveClick = () => emit('onPositiveClick')
const onNegativeClick = () => emit('onNegativeClick')
const closeModal = () => emit('closeModal')
</script>

<template>
  <n-modal
    preset="dialog"
    :title="modalProp?.title"
    style=" width: fit-content;"
    @negative-click="onNegativeClick"
    @positive-click="onPositiveClick"
    @after-leave="closeModal"
    @esc="closeModal"
  >
    <div class="modal-content-container">
      <slot name="modalContent"></slot>
    </div>
  </n-modal>
</template>
