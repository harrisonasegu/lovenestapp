<script setup lang="ts">
import LoveNestHeaderTop from "@/components/lovenest-header/top-header/topHeader.vue"
import LoveNestHeaderBottom from "@/components/lovenest-header/bottom-header/bottomHeader.vue"
import HeaderImage from '@/components/lovenest-header/header-logo/headerLogo.vue'
</script>

<template>
  <header>
    <!-- desktop header -->
    <section class="desktop-header">
     <div class="header-wrap">
      <div class="headerImage-contents">
        <div>
          <HeaderImage />
        </div>
        <div>
          <LoveNestHeaderTop />
        </div>
      </div>
      <div class="content">
        <LoveNestHeaderBottom />
      </div>
     </div>
    </section>
  </header>
</template>

<style lang="scss" scoped>
header {
  section {
    .desktop-header {
      // background-color: $base-color;
      .header-wrap {
        .headerImage-contents {
          // border: 10px solid red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 20px;
          // padding-top: 20px;
        }
        
        // &>.content {
        //   //  border: 12px solid red;
        //   }
      }
    }
  }
  }


@media (max-width: 991.9px) {
  header {
    width: 100%;
    }
  }
  @media (max-width: 1500px) {
  header {
    section {
    .desktop-header {
      // background-color: $base-color;
      .header-wrap {
        .headerImage-contents {
          // border: 10px solid red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 20px;
          // padding-top: 20px;
        }
        
        // &>.content {
        //   //  border: 12px solid red;
        //   }
      }
    }
  }
  }
  }
</style>
