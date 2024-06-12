<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import { NLayoutFooter } from "naive-ui"

const route: string | any = useRoute()
const activeRoute = computed(() => route?.name)

const footerBg = computed(() => activeRoute.value === 'home')
</script>

<template>
  <n-layout-footer :class="footerBg ? 'home-bg' : ''">
    <!-- footer -->
    <div class="white copyright-icons">
      <section class="copyright">
        <div>
          <span>Copyright &copy; {{ new Date().getFullYear() }} Mofi-Tee Store.</span>
          <span>All Rights Reserved.</span>
        </div>

        <div>
          <a href="#">Terms Of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </section>

      <section class="icons">
        <div class="all-icons">
          <div>
            <a href="https://web.facebook.com/profile.php?id=100090434456384">
              <Icon icon="ri:facebook-fill" color="#8f79ed" width="1.3rem" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/TeeInt39790">
              <Icon icon="uil:twitter" color="#79c8ed" width="1.3rem" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/mofi_tee_solar/">
              <Icon icon="ph:instagram-logo" color="#dd6d9a" width="1.3rem" />
            </a>
          </div>
          <div>
            <a href="#" @click.prevent="">
              <Icon icon="ant-design:youtube-filled" color="#e66262" width="1.3rem" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </n-layout-footer>
</template>

<style lang="scss" scoped>
.n-layout-footer {
  padding: 20px;
  background-color: #f8f8f8;
  overflow: visible;

  &.home-bg {
    background-color: $banner-bg;
  }

  .copyright-icons {
    width: 100%;
    display: flex;
    flex-flow: row wrap-reverse;
    row-gap: 20px;
    column-gap: 50px;
    align-items: flex-start;
    justify-content: space-between;

    .copyright {
      width: fit-content;
      // width: 400px;
      display: flex;
      flex-flow: row wrap-reverse;
      justify-content: flex-start;
      align-items: flex-start;
      row-gap: 15px;
      column-gap: 10px;
      // text-align: center;

        // copyright and all rights reserved
        &>div {
        width: fit-content;
        display: flex;
        row-gap: 5px;
        text-align: start;

        // copyright
        &:first-child {
          display: flex;
          flex-flow: wrap;
          gap: 10px 3px;
        }

        // terms of use(links)
        &:last-child {
          width: fit-content;
          display: flex;
          flex-flow: wrap;
          gap: 10px 20px;

          a {
            color: $base-color;
          }
        }
      }
    }

    .icons {
      .all-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 20px;

        &>div {
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;

          &>* {
            margin-bottom: -5.5px;
          }
        }
      }
    }
  }
}
@media (max-width: 850px) {
  .n-layout-footer {
    padding: 20px;
  }
}

@media (min-width: 1500px) {
  .n-layout-footer {
    padding: 20px 300px;
  }
}
</style>
