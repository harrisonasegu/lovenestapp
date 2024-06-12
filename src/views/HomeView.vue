<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NSpace } from 'naive-ui'
import HomePageContents from '@/components/homePageContents/homePageContents.vue'

</script>

<template> 
  <div class="page-view">
    <n-space vertical>
      <!-- HomePageContents Pages -->
      <HomePageContents />
    </n-space>
  </div>
</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>