<script setup lang="ts">
import type { Component } from 'vue'

import { NIcon } from 'naive-ui'

  const props = defineProps<{
    summaryType: String,
    iconComponent: Component
  }>()

  const summaryType_ = props?.summaryType?.concat('-transactions')
</script>

<template>
  <div class="summary-count-item">
    <!-- card title, count and icon -->
    <div class="summary-count-item-header">
      <div class="stat-title">
        <span>
          <slot name="cardName"></slot>
        </span>
        <span>
          <slot name="count"></slot>
        </span>
      </div>
      <div :class="[
        'stat-icon',
        summaryType_
      ]">
        <span>
          <n-icon
            :component="iconComponent"
          />
        </span>
      </div>
    </div>
    <!-- percentage -->
    <p class="summary-count-item-percentage">
    <!-- percentage -->
      <span class="percentage-box">
        <span class="arrow-indicator">
          <!-- <fa icon="arrow-up" /> -->
        </span>
        <span class="value">45.01%</span>
      </span>
      <span>Since last month</span>
    </p>
  </div>
</template>
  
  <style lang="scss" scoped>
  // cards item
  div.summary-count-item {
    // width: calc((100% / 5) - 5px);
    width: calc((100% / 4));
    height: fit-content;
    display: flex;
    flex-flow: column nowrap;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 0.375rem;
    padding: 1rem 1.5rem;
    background-clip: border-box;
    word-wrap: break-word;
    background-color: rgb(248, 248, 248);
  
    // statistics icon ad description colors
    .total-transactions {
      &>span {
        background: linear-gradient(87deg,#405fbb,#6990c9);
      }
  
      &.summary-count-item-percentage>span {
        color: #6990c9;
        background: transparent;
      }
    }
    
    .pending-transactions {
      &>span {
        background: linear-gradient(87deg,#dcb575,#f0a020);
      }
  
      &.summary-count-item-percentage>span {
        color: #dcb575;
        background: transparent;
      }
    }
    
    .successful-transactions {
      &>span {
        background: linear-gradient(87deg,#18a05899,#18a058);
      }
  
      &.summary-count-item-percentage>span {
        color: #18a05899;
        background: transparent;
      }
    }
  
    .failed-transactions {
      &>span {
        background: linear-gradient(87deg,#f5365c,#f56036);
      }
  
      &.summary-count-item-percentage>span {
        color: #f5365c;
        background: transparent;
      }
    }
    // =====================================
  
    &>div.summary-count-item-header {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      column-gap: 10px;
  
      // statistics title
      &>div.stat-title {
        display: flex;
        flex-basis: content;
        flex-direction: column;
        row-gap: 5px;
        font-weight: 600;
  
        // title
        &>span:first-child {
          font-size: 0.8em;
          text-transform: capitalize;
          color: #8898aa;
        }
        // Stat Value
        &>span:last-child {
          font-size: 1.2rem;
          color: #32325d;
        }
      }
      // statistics icon
      &>div.stat-icon {
        display: flex;
        flex-basis: content;
        justify-content: center;
        align-items: center;
  
        &>span {
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
  
          // icon
          .n-icon {
            font-size: 22px;
            color: #ffffff;
          }
        }
      }
    }
    &>p.summary-count-item-percentage {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      column-gap: 7px;
      margin-top: 1rem;
      margin-bottom: 0;
      font-size: 0.875rem;
      font-weight: 300;
      line-height: 1.7;
  
      &>span {
        // font-weight: bold;
        line-height: 1;
      }

      // icon and percenatge value
      &>span.percentage-box {
        display: flex;
        column-gap: 4px;
        align-items: center;
        color: #2dce89;

        // low percentage value
        &.low-percentage {
          color: #f5365c;

          &>.arrow-indicator {
            margin-top: -5px;
            transform: rotateX(180deg);
          }
        }

        &>span.arrow-indicator {
          &>svg {
            font-size: 0.9rem;
            font-weight: 600;
          }
        }
      }
      // time
      &>span:last-child {
        line-height: 1;
        color: #525f7f;
      }
    }
  }
  
  
  // MEDIA QUERY
  
  // XX-SM (<251px)
  @media (max-width: 250.9px) {
    // cards item
    div.summary-count-item {
      width: 100%;
      display: flex;
      padding: 1rem 1rem;
  
      &>div.summary-count-item-header {
        // statistics title
        &>div.stat-title {
          // title
          &>span:first-child {
            font-size: 0.7em;
          }
          // Stat Value
          &>span:last-child {
            font-size: 1rem;
          }
        }
        // statistics icon
        &>div.stat-icon {
          display: none;
  
          &>span {
            width: 38px;
            height: 38px;
  
            // icon
            svg {
              width: 20px;
              height: 20px;
              color: #ffffff;
              align-self: center;
            }
          }
        }
      }
    }
  }
  
  // XX-SM
  @media (min-width: 251px) and (max-width: 350.9px) {
    // cards item
    div.summary-count-item {
      width: 100%;
      display: flex;
      padding: 1rem 1rem;
  
      &>div.summary-count-item-header {
        // statistics title
        &>div.stat-title {
          // title
          &>span:first-child {
            font-size: 0.65em;
          }
          // Stat Value
          &>span:last-child {
            font-size: 1rem;
          }
        }
        // statistics icon
        &>div.stat-icon {
          display: flex;
          flex-basis: content;
          justify-content: center;
          align-items: center;
  
          &>span {
            width: 38px;
            height: 38px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
  
            // icon
            svg {
              width: 20px;
              height: 20px;
              color: #ffffff;
              align-self: center;
            }
          }
        }
      }
    }
  }
  
  // X-SM
  @media (min-width: 351px) and (max-width: 575.9px) {
    // cards item
    div.summary-count-item {
      width: 100%;
      display: flex;
      padding: 1rem 1rem;
  
      &>div.summary-count-item-header {
        // statistics title
        &>div.stat-title {
          // title
          &>span:first-child {
            font-size: 0.8em;
          }
          // Stat Value
          &>span:last-child {
            font-size: 1rem;
          }
        }
        // statistics icon
        &>div.stat-icon {
          display: flex;
          flex-basis: content;
          justify-content: center;
          align-items: center;
  
          &>span {
            width: 38px;
            height: 38px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
  
            // icon
            svg {
              width: 20px;
              height: 20px;
              color: #ffffff;
              align-self: center;
            }
          }
        }
      }
    }
  }
  
  // SM
  @media (min-width: 576px) and (max-width: 767.9px) {
    // cards item
    div.summary-count-item {
      width: 100%;
      display: flex;
      padding: 1rem 1rem;
  
      &>div.summary-count-item-header {
        // statistics title
        &>div.stat-title {
          // title
          &>span:first-child {
            font-size: 0.8em;
          }
          // Stat Value
          &>span:last-child {
            font-size: 1rem;
          }
        }
        // statistics icon
        &>div.stat-icon {
          display: flex;
          flex-basis: content;
          justify-content: center;
          align-items: center;
  
          &>span {
            width: 38px;
            height: 38px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
  
            // icon
            svg {
              width: 20px;
              height: 20px;
              color: #ffffff;
              align-self: center;
            }
          }
        }
      }
      &>p.summary-count-item-percentage {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        column-gap: 7px;
        margin-top: 1rem;
        margin-bottom: 0;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.7;
      }
    }
  }
  
  // MD
  @media (min-width: 768px) and (max-width: 991.9px) {
    // cards item
    div.summary-count-item {
      width: calc((100% / 2.2) - 5px);
      display: flex;
      padding: 1rem 1rem;
  
      &>div.summary-count-item-header {
        // statistics title
        &>div.stat-title {
          // title
          &>span:first-child {
            font-size: 0.8em;
          }
          // Stat Value
          &>span:last-child {
            font-size: 1rem;
          }
        }
        // statistics icon
        &>div.stat-icon {
          display: flex;
          flex-basis: content;
          justify-content: center;
          align-items: center;
  
          &>span {
            width: 38px;
            height: 38px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
  
            // icon
            svg {
              width: 20px;
              height: 20px;
              color: #ffffff;
              align-self: center;
            }
          }
        }
      }
      &>p.summary-count-item-percentage {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        column-gap: 7px;
        margin-top: 1rem;
        margin-bottom: 0;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.7;
      }
    }
  }
  
  // LG
  @media (min-width: 992px) and (max-width: 1200.9px) {
    // cards item
    div.summary-count-item {
      width: calc((100% / 2.2) - 5px);
      display: flex;
      padding: 1rem 1rem;
  
      &>div.summary-count-item-header {
        // statistics title
        &>div.stat-title {
          // title
          &>span:first-child {
            font-size: 0.8em;
          }
          // Stat Value
          &>span:last-child {
            font-size: 1rem;
          }
        }
        // statistics icon
        &>div.stat-icon {
          display: flex;
          flex-basis: content;
          justify-content: center;
          align-items: center;
  
          &>span {
            width: 38px;
            height: 38px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
  
            // icon
            svg {
              width: 20px;
              height: 20px;
              color: #ffffff;
              align-self: center;
            }
          }
        }
      }
      &>p.summary-count-item-percentage {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        column-gap: 7px;
        margin-top: 1rem;
        margin-bottom: 0;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.7;
      }
    }
  }
  
  // XL
  // @media (max-width: 1201px) {}
  </style>
  