<template>
  <div>
    <button @click="openModal">Open Modal</button>

    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal">
        <span class="close" @click="closeModal">&times;</span>
        <p>This is the modal content.</p>
        <button @click="closeModal">Close Modal</button>
        <button @click="submitModal">Submit</button>
      </div>
    </div>

    <!-- Content -->
    <div v-if="!isModalOpen">
      <!-- Your content here -->
      <p>This is the main content of the page.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ModalComponent',
  setup() {
    const isModalOpen = ref(false);

    const openModal = () => {
      isModalOpen.value = true;
      document.body.style.overflow = 'hidden'; // Hide scrollbar
    };

    const closeModal = () => {
      isModalOpen.value = false;
      document.body.style.overflow = ''; // Restore scrollbar
    };

    const submitModal = () => {
      // Handle modal submission
      closeModal();
    };

    return {
      isModalOpen,
      openModal,
      closeModal,
      submitModal,
    };
  },
});

</script>

<style>
/* Styles for modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Styles for modal */
.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

/* Close Button */
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
