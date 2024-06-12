<script setup lang="ts">
import LoveNestHeaderComponent from "@/components/loveNestHeader-component/headerComponent.vue"
import MobileHeader from "@/components/lovenest-header/mobileHeader.vue"
</script>

<template>
  <header>
    <!-- desktop header -->
    <section class="desktop-header">
      <LoveNestHeaderComponent />
    </section>

    <!-- mobile header -->
    <section class="mobile-header">
      <MobileHeader />
    </section>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;

  // desktop and mobile header
  &>section {

    // desktop header
    &.desktop-header {
      display: block;
    }

    // mobile header
    &.mobile-header {
      display: none;
    }
  }
}

@media (max-width: 991.9px) {
  header {
    width: 100%;

    // desktop and mobile header
    &>section {
      // desktop header
      &.desktop-header {
        display: none;
      }

      // mobile header
      &.mobile-header {
        display: block;
      }
    }
  }
}
</style>
