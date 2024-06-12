<script setup lang="ts">
import { NLayout, NLayoutContent } from 'naive-ui'

import GuestLayoutHeader from '@/components/headers/guestHeader.vue'
import GuestLayoutFooter from '@/components/footers/guestFooter.vue'
</script>

<template>
  <n-layout class="open-layout">
    <n-layout class="open-layout-content">

      <GuestLayoutHeader />
      
      <n-layout-content>
        <RouterView />
      </n-layout-content>

      <GuestLayoutFooter />
    </n-layout>
  </n-layout>
</template>

<style lang="scss" scoped>
.open-layout {
  .open-layout-content {
    .n-layout-content {
      min-height: calc(100vh - 140px);
      // padding: 0 20px;
    }
  }
}
</style>
