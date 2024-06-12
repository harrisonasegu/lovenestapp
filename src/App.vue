<script setup lang="ts">
import { NLoadingBarProvider } from 'naive-ui'

import AppProvider from '@/components/application/appProvider.vue'
</script>

<template>
  <n-loading-bar-provider>
    <AppProvider>
      <RouterView />
    </AppProvider>
  </n-loading-bar-provider>
</template>

<style lang="scss" scoped>
@import './assets/styles/style.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// route transition style
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
