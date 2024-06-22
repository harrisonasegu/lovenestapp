<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Icon } from '@iconify/vue';

import loveNestLogo from '@/assets/logo.png'
</script>

<template>
  <header>
    <div class="header-image">
      <nav>
        <div class="logo">
          <img :src="loveNestLogo" alt="logo">
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .header-image {

    // border: 2px solid red;
    .logo {
      img {
        width: 400px;
      }
    }
  }

  @media (min-width: 992px) and (max-width: 1240px) {
    .header-image {

      // border: 2px solid red;
      .logo {
        img {
          width: 200px;
        }
      }
    }
  }
}
</style>
