<script setup lang="ts">
import { NLayout, NLayoutContent } from 'naive-ui'

import DashboardSidebar from '@/components/sidebars/dashboardSidebar.vue'
import DashboardHeader from '@/components/headers/dashboardHeader.vue'
// import DashboardFooter from '@/components/footers/dashboardFooter.vue'
</script>

<template>
  <n-layout position="absolute" has-sider class="dashboard-layout">
    <DashboardSidebar />

    <n-layout class="dashboard-content">
      <DashboardHeader />
      
      <n-layout-content>
        <RouterView />
      </n-layout-content>

      <!-- <DashboardFooter /> -->
    </n-layout>
  </n-layout>
</template>

<style lang="scss" scoped>
.dashboard-layout {
  .dashboard-content {
    .n-layout-content {
      min-height: calc(100vh - 140px);
      padding: 0 20px;
    }
  }
}
</style>