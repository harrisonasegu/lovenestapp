<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Icon } from '@iconify/vue';
</script>

<template>
  <header>
    <div class="topheader-wrap">
      <nav>
        <div class="phone-routing">
          <div class="phone">
            <span>
              <Icon icon="ion:call" color="#BE0C68" width="20" />
            </span>

            <span>
              <a class="number" href="tel:+ 07931 918596">07931 918596</a>
            </span>

          </div>

          <div class="routing">
            <div class="icon-links"> <span>
                <Icon icon="wpf:message-outline" color="#fff" width="20" />
              </span> <span> <a href="mailto:">Email</a> </span> </div>

            <RouterLink class="icon-links" to="/vacancy"><span>
                <Icon icon="clarity:cursor-arrow-line" width="20px" height="20px" style="color: white" />
              </span> Apply For Jobs </RouterLink>

            <RouterLink class="icon-links" to="/Free-assessment"> Request Free Assessment </RouterLink>
            <!-- 
              <div class="icon-links"><span>
               
                <Icon icon="ion:search" width="20px" height="20px"  style="color: white" />
              </span>
            </div> -->

          </div>
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

  .topheader-wrap {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    // border: 12px solid red;

    // header- nav
    nav {
      // border: 2px solid red;
      font-family: Montserrat;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      &>.phone-routing {
        // border: 12px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 50px;

        &>.phone {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 8px;
          font-size: 23px;

          &>.number,
          a {
            display: flex;
            text-decoration: none;
            font-size: 18px;
            font-weight: 700;
            color: $base-color-2;
          }
        }

        &>.routing {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 30px;

          &>.icon-links {
            background-color: $base-color-2;
            border-radius: 10px;
            padding: 10px 15px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 5px;
            text-decoration: none;
            font-size: 16px;
            font-weight: 700;

            a {
              text-decoration: none;
              color: #fff;
            }

            span {
              // border: 12px solid red;
              display: flex;

              font-size: 16px;
              font-weight: 700;
            }
          }
        }
      }
    }
  }

  @media (min-width: 992px) and (max-width: 1240px) {

    .topheader-wrap {

      // header- nav
      nav {

        &>.phone-routing {
          column-gap: 20px;

          &>.phone {
            // border: 2px solid red;
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 8px;
            font-size: 23px;

            &>.number,
            a {
              display: flex;
              text-decoration: none;
              font-size: 18px;
              font-weight: 700;
              color: $base-color-2;
            }
          }

          &>.routing {
            column-gap: 20px;
          }
        }
      }
    }

  }
}
</style>
