<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NSpace } from 'naive-ui'

import { useProductStore } from '@/stores/modules/product'

import Banner from '@/components/home-page-containers/banner/HomePagebanner.vue'


const productStore = useProductStore()
// const activeProducts = productStore.getActiveProducts as unknown as UpdateProductData_Interface[]

onMounted(async () => await productStore.GetAllActiveProducts())
</script>

<template>
  <div class="page-view">
    <n-space vertical>
      <div class="contents">
        <div class="banner">
          <!-- Banner -->
          <Banner />
        </div>
      </div>
    </n-space>
  </div>
</template>
