<script setup lang="ts">
import { NCarousel, NIcon, NH1, NH3 } from 'naive-ui'
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'

import solar2 from '@/assets/images/carousel_image/solar2.jpg'
import solar5 from '@/assets/images/carousel_image/solar5.jpg'
import solar6 from '@/assets/images/carousel_image/solar6.jpg'
import solar7 from '@/assets/images/carousel_image/solar7.jpg'
import solar8 from '@/assets/images/carousel_image/solar8.jpeg'
import solar9 from '@/assets/images/carousel_image/solar9.jpeg'

const imageUrl = [
  solar6, solar2, solar5, solar7, solar8, solar9 
]
</script>

<template>
  <div class="carousel-container">
    <n-carousel
      show-arrow
      draggable
      autoplay
      effect="fade"
      :transition-style="{ 
        transitionDuration: '5000ms'
        // transitionTimingFunction?: string 
      }"
    >
      <div
        v-for="(url, index) in imageUrl" :key="index"
        class="carousel-item"
        :style="{
          backgroundImage: `url(${url})`
        }"
      >
        <!-- <div class="intro-content">
          <n-h3 class="intro-subtitle">SEASONAL PICKS</n-h3>
          <n-h1 class="intro-title">
            Get All<br>The Good Stuff
          </n-h1>
          <router-link to="/products" class="discover-btn">
            <div>
              <span>DISCOVER MORE</span>
              <n-icon :component="ArrowForward" />
            </div>
          </router-link>
        </div> -->
      </div>

      <template #arrow="{ prev, next }">
        <div class="custom-arrow">
          <button type="button" class="custom-arrow--left" @click="prev">
            <n-icon>
              <ArrowBack />
            </n-icon>
          </button>
          <button type="button" class="custom-arrow--right" @click="next">
            <n-icon>
              <ArrowForward />
            </n-icon>
          </button>
        </div>
      </template>
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li v-for="index of total" :key="index" :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)" />
        </ul>
      </template>
    </n-carousel>
  </div>
</template>

<style lang="scss" scoped>
div.carousel-container {
  height: 550px;
  // padding: 0 50px;
  // background-color: $banner-bg;

  &>.n-carousel {
    .carousel-item {
      height: inherit;
      display: flex;
      align-items: center;
      background-image: url('@/assets/images/slide-1.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      &>.intro-content {
        padding: 10px 50px;
        position: static;
        left: auto;
        top: auto;
        transform: translateY(0);

        .intro-subtitle {
          margin-bottom: 1rem;
          font-weight: 500;
          // color: $base-color;
          color: #ffebd9e7;
        }

        .intro-title {
          margin-bottom: 2.5rem;
          font-size: 80px;
          font-weight: 600;
          line-height: initial;
          color: #ffebd9e7;
        }

        .discover-btn {
          // border: 1px solid $base-color;
          // border: 1px solid $base-color;
          padding: 15px 25px;
          transition: $transition;
          text-decoration: none;
          font-size: 15px;
          background-color: #ffffff;
          color: $base-color;

          &:hover {
            background-color: #c96;
            color: #fff;
          }

          &>div {
            display: inline-flex;
            column-gap: 5px;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }

    .custom-arrow {
      display: flex;
      position: absolute;
      bottom: 25px;
      right: 30px;
    }

    .custom-arrow button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      margin-right: 12px;
      color: $base-color;
      border-width: 0;
      border-radius: 8px;
      transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      &:active {
        transform: scale(0.95);
        transform-origin: center;
      }
    }

    .custom-dots {
      display: flex;
      margin: 0;
      padding: 0 25px;
      position: absolute;
      bottom: 20px;
      left: 20px;

      & li {
        display: inline-block;
        width: 12px;
        height: 4px;
        margin: 0 3px;
        border-radius: 4px;
        background-color: $base-color-2;
        transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;

        &.is-active {
          width: 40px;
          background-color: $base-color;
        }
      }
    }
  }
}

@media (max-width: 575.9px) {
  div.carousel-container {
    min-height: 450px;
    padding: 0;
    background-color: transparent !important;

    &>.n-carousel {
      .carousel-item {
        padding: 10px;
        justify-content: center;

        .intro-title {
          margin-bottom: 2.5rem;
          font-size: 45px !important;
          font-weight: 400;
          line-height: initial;
        }

        .discover-btn {
          padding: 15px 25px;
          font-size: 15px;
        }
      }
    }
  }
}

@media (min-width: 1500px) {
  div.carousel-container {
    height: 600px;

    &>.n-carousel {
      .carousel-item {
        padding: 0 250px;
      }
    }
  }
}
</style>
