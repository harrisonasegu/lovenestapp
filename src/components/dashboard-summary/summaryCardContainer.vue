<script setup lang="ts">
import type { PropType } from 'vue'

import summaryCard from './summaryCard.vue'
  import {
    Coins
} from '@vicons/fa'

defineProps({
  productSummary: {
    type: Array as PropType<number[]>,
      required: true
  }
})
</script>

<template>
    <!-- cards container -->
    <div class="cards-container">
      <div class="cards-wrap">
        <!-- total -->
        <summary-card
          summary-type="total"
          :iconComponent="Coins"
        >
          <template #cardName>Total Products</template>
          <template #count>{{productSummary[0]}}</template>
        </summary-card>
        
        <!-- successful -->
        <summary-card
          summary-type="successful"
          :iconComponent="Coins"
        >
          <template #cardName>Active Products</template>
          <template #count>{{productSummary[1]}}</template>
        </summary-card>
        
        <!-- failed -->
        <summary-card
          summary-type="failed"
          :iconComponent="Coins"
        >
          <template #cardName>Removed Products</template>
          <template #count>{{productSummary[2]}}</template>
        </summary-card>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  // cards container
  div.cards-container {
    width: 100%;
    overflow-x: hidden;

    div.cards-wrap {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      row-gap: 10px;
      justify-content: space-between;
      padding: 20px 0;
    }
  }


  // MEDIA QUERY

  // XX-SM (<251px)
  @media (max-width: 250.9px) {
    // cards container
    div.cards-container {
      div.cards-wrap {
        width: 100%;
        padding: 30px 3px;
      }
    }
  }

  // XX-SM
  @media (min-width: 251px) and (max-width: 350.9px) {
    // cards container
    div.cards-container {
      div.cards-wrap {
        width: 100%;
        padding: 30px 3px;
      }
    }
  }

  // X-SM
  @media (min-width: 351px) and (max-width: 575.9px) {
    // cards container
    div.cards-container {
      div.cards-wrap {
        width: 100%;
        padding: 30px 3px;
      }
    }
  }

  // SM
  @media (min-width: 576px) and (max-width: 767.9px) {
    // cards container
    div.cards-container {
      div.cards-wrap {
        width: 100%;
        padding: 30px 0 ;
      }
    }
  }

  // MD
  @media (min-width: 768px) and (max-width: 991.9px) {
    // cards container
    div.cards-container {
      div.cards-wrap {
        width: 100%;
        padding: 30px 8px;
      }
    }
  }

  // LG
  @media (min-width: 992px) and (max-width: 1200.9px) {
    // cards container
    div.cards-container {
      div.cards-wrap {
        width: 100%;
        // padding: 30px 8px;
      }
    }
  }

  // XL
  // @media (max-width: 1201px) {}
  </style>
