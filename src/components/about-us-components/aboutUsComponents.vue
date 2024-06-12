<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'
import { NCarousel, NIcon } from 'naive-ui'

const route = useRoute()
const router = useRouter()

const routeName = route.name as string


const navigateToSubMenu = (elementId: string) => {
  // Get the element by its ID
  var element = document.getElementById(elementId);

  if (element) {
    // Get the top offset of the element relative to the viewport
    var offsetTop = element.offsetTop;

    // Scroll to the coordinates of the element
    window.scroll({
      top: offsetTop,
      behavior: 'smooth' // Optional: Smooth scrolling animation
    });
  } else {
    console.error("Element with ID " + elementId + " not found.");
  }
}

const navigateToSubMenuPage = (menu: string, elementId: string) => {
  const menuRoute = menu.toLowerCase()

  // route to submenu page
  router.push({ name: menuRoute })
  // scroll to submenu
  setTimeout(() => navigateToSubMenu(elementId), 2000)
}

const handleSubMenuClick = (event: Event, subMenu: string) => {
  // get parent element of submenu clicked
  const targetElement = event.target as HTMLAnchorElement
  const parentElement = targetElement?.parentElement?.parentElement as HTMLDivElement
  const parentElementFirstChildElement = parentElement.firstChild as HTMLDivElement
  const FirstChildOfFirstChildElement = parentElementFirstChildElement.firstChild as HTMLSpanElement

  const navMenuTextContent = FirstChildOfFirstChildElement.innerText as string

  switch (routeName) {
    case 'home care services':
      navigateToSubMenu(subMenu)
      break

    case 'disability support':
      navigateToSubMenu(subMenu)
      break

    default:
      navigateToSubMenuPage(navMenuTextContent, subMenu)
  }
}

import Banner from '@/assets/images/about-us-image/aboutBanner.png'
import Image1 from '@/assets/images/about-us-image/aboutImage1.png'
import Image2 from '@/assets/images/about-us-image/about-us-banner.png'
</script>

<template>
  <div id="toTop" class="care-service-wrap">

    <div class="banner">

      <div class="intro-content">
        <h2 class="intro-title">
            Dedicated To Senior Adults And The
        </h2>
        <br>
        <h1 class="intro-subtitle">
            Families Who Love Them
        </h1>
      </div>
    </div>

    <!-- Request a free assessment today!
 -->
    <div class="line-paragraphy">
        <!-- underline contents -->
        <div class="underline-wrap">
        <div class="making-preparation">
          <h3>CARING FOR YOU AND OUR COMMUNITY
          </h3>
        </div>
      </div>

      <p>
        Non-medical home care that puts your loved ones first.LoveNest Home Care proceeds are reinvested in nonprofit, communal organizations that serve seniors, fight 
        hunger, and foster mental health in Cincinnati.
      </p>
    </div>

    <!-- Relative and Absolute section -->
    <section>
  <div class="third-reliable">
    <div class="section-image">
      <img :src="Image1" alt="picture">
    </div>
    <div class="section-background">
      <div class="light-background">
        <div class="contents">
          <h2>
            LOVENEST SPOTLIGHT
          </h2>
          <p>
            Hi. My name is Alicia Reid and I'm the Assistant Director of
            LoveNest Home Care. Every day, people entrust us to care for
            their loved ones, and that is a responsibility I take very
            seriously. In my role, I am responsible for training and
            managing LoveNest's full team of caregivers. But what really
            drives me are the personal connections I have with our seniors.
            I like to say our hearts beat for our clients, and it's true! The
            human interaction and the relationships we develop are what
            makes this kind of work so fulfilling and special.
          </p>
        </div>
      </div>
    </div>
  </div>
    </section>

    <!-- This section is for tab, Mission, Vision etc -->
     
       <!-- Carousel section -->
      <section>
      <n-carousel class="carousel" show-arrow autoplay>

<!-- Second Section -->
<!-- Relative and Absolute section -->
<div class="second-reliable carousel-img">
  <div class="section-image">
  <img :src="Banner" alt="picture">
  </div>
  <div class="section-background">

  <div class="light-background">
    <div class="contents">
      <div class="quotation">
        <Icon class="icons"
         icon="ri:double-quotes-l" width="80px" height="80px"  style="color: #4897E6" />
      </div>
      <p>
        Mom's LoveNest caregivers are simultaneously her lifeline and
        my security blanket. […] From the day Mom first moved here—
        just prior to Rosh Hashanah, 2017—her aides have not only
        provided her day-to-day care, but they've also provided her 
        companionship.
      </p>
      <div class="color-btn">
          <h4>Sindy</h4>
          <p>Daughter of a LoveNest client</p>
            <br>
            <span>
              <Icon class="icons"  icon="material-symbols-light:star" width="40px" height="40px"  style="color: #4897E6" />
              <Icon class="icons" icon="material-symbols-light:star" width="40px" height="40px"  style="color: #4897E6" />
              <Icon  class="icons" icon="material-symbols-light:star" width="40px" height="40px"  style="color: #4897E6" />
              <Icon class="icons" icon="material-symbols-light:star" width="40px" height="40px"  style="color: #4897E6" />
              <Icon class="icons" icon="material-symbols-light:star" width="40px" height="40px"  style="color: #4897E6" />
            </span>
      </div>
    </div>
  </div>
  </div>
</div>

<img class="carousel-img" :src="Image2">

<img class="carousel-img" :src="Image1">

<img class="carousel-img" :src="Image2">

<template #arrow="{ prev, next }">
      <div class="custom-arrow">
        <button type="button" class="custom-arrow--left" @click="prev">
          <n-icon><ArrowBack /></n-icon>
        </button>
        <button type="button" class="custom-arrow--right" @click="next">
          <n-icon><ArrowForward /></n-icon>
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
      </section>

    <section>
      <div class="colored-last">
        <div class="second-color"></div>
        <div class="third-color"></div>
        <div class="first-color"></div>
      </div>
    </section>

    <div class="up-icon">
      <div class="move-up" style="text-align: center">
        <a href="#toTop" @click.prevent="(e) => handleSubMenuClick(e, 'toTop')">
          <Icon class="icon-image" icon="emojione-monotone:up-arrow" width="50px" height="50px"
            style="color: #4897E6" />
        </a>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
.care-service-wrap {

  .up-icon {
    position: relative;

    .move-up {
      // border: 2px solid red;
      transition: ease;
      position: fixed;
      right: 10px;
      bottom: 20px;
    }
  }

  P {
    font-size: 18px;
    color: #00000080;

  }

  h3 {
    color: $base-color-1;
    font-weight: 600 !important;
  }

  h2 {
    font-size: 35px;
    color: $base-color-1;
  }

  .contents-dots {
    color: #00000080;
  }

  &>.banner {
    background-image: url('../../assets/images/about-us-image/aboutBanner.png');
    // border: 5px solid red;
    display: flex;
    align-items: center;
    height: 400px;
    padding: 60px 40px;
    background-repeat: no-repeat;
    background-size: cover;

    &>.intro-content {
      // border: 12px solid red;
      padding: 10px 20px;
      line-height: 0px;

      .intro-title {
        // border: 2px solid red;
        margin-bottom: 2.5rem;
        font-size: 50px;
        font-weight: 600;
        line-height: 0px;
        color: #fff;
        padding-left: 50px;
      }

      .intro-subtitle {
        // border: 2px solid red;
        font-weight: 700;
        font-size: 70px;
        line-height: 0px;
        letter-spacing: 0em;
        color: #fff;
        padding-left: 200px;
      }

      .discover-btn {
        // border: 1px solid $base-color;
        padding: 15px 25px;
        text-decoration: none;
        font-size: 15px;
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

  &>.line-paragraphy {
    // border: 3px solid red;
    margin-top: 30px;

    &>.underline-wrap {
      padding: 0 20px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          color: $base-color-1;
          position: relative;
          font-weight: 600;
          font-size: 45px;
          line-height: 60px;
          letter-spacing: 0em;
        }

        h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -5%;
          width: 110%;
          border-bottom: 2px solid $base-color-1;
        }
      }
    }

    p {
      padding: 0 20px;
      text-align: center;
    }
  }

  section {
    margin-top: 50px;

    &>.third-reliable {
      // border: 5px solid $base-color;
      display: flex;
      flex-direction: row-reverse;
      height: 500px;
      overflow-y: hidden;
      margin-bottom: 50px;

      &>.section-image {

        // border: 1px solid red;
        img {
          // border: 1px solid red;
          width: 650px;
          height: auto;
          padding-right: 20px;
        }
      }

      &>.section-background {
        // border: 1px solid red;
        position: relative;
        width: 1500px;
        height: 500px;
        background-color: $base-color;

        &>.light-background {
          // border: 1px solid red;
          background-color: #FFFFFFB2;
          width: 850px;
          // min-height: 200px;
          position: absolute;
          top: 20px;
          bottom: 20px;
          left: 20px;
          display: flex;
          align-content: center;
          justify-content: flex-end;

          &>.contents {
            // border: 2px solid red;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 20px;

            h2 {
              font-weight: 600;
              line-height: 50.86px;
              color: $base-color-1;
              margin-bottom: 20px;

            }

            p {
              font-family: Montserrat;
              font-weight: 400;
              line-height: 35.26px;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }

  // <!-- This section is for tab, Mission, Vision etc -->
  // <!-- Carousel section -->
  section {
    &>.carousel {
        .carousel-img {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }
    
        .custom-arrow {
          display: flex;
          position: absolute;
          bottom: 25px;
          right: 10px;
        }
    
        .custom-arrow button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          margin-right: 12px;
          color: #fff;
          background-color: $base-color-2;
          border-width: 0;
          border-radius: 8px;
          transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
    
        .custom-arrow button:hover {
          background-color: $base-color-1;
        }
    
        .custom-arrow button:active {
          transform: scale(0.95);
          transform-origin: center;
        }
    
        .custom-dots {
          display: flex;
          margin: 0;
          padding: 0;
          position: absolute;
          bottom: 20px;
          left: 20px;
        }
    
        .custom-dots li {
          display: inline-block;
          width: 12px;
          height: 4px;
          margin: 0 3px;
          border-radius: 4px;
          background-color: $base-color-2;
          // background-color: rgba(255, 255, 255, 0.4);
          transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
    
        .custom-dots li.is-active {
          width: 40px;
          background: $base-color-1;
        }
    
        // Absolute Image - Section--------------

          .second-reliable {
          //  border: 3px solid red;
            border: 5px solid $base-color;
            display: flex;
            flex-direction: row-reverse;
            height: 500px;
            overflow-y: hidden;
            margin-bottom: 50px;
    
            &>.section-image {
    
              // border: 1px solid red;
              img {
                // border: 1px solid red;
                width: 650px;
                height: 500px;
              }
            }
    
            &>.section-background {
              // border: 1px solid red;
              position: relative;
              width: 1500px;
              height: 500px;
              background-color: $base-color;
    
              &>.light-background {
                // border: 11px solid red;
                background-color: #FFFFFFB2;
                width: 850px;
                // min-height: 200px;
                position: absolute;
                top: 20px;
                bottom: 20px;
                left: 20px;
                display: flex;
                align-content: center;
                justify-content: flex-end;
    
                &>.contents {
                  // border: 2px solid red;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  padding: 20px;
    
                  .quotation {
                    line-height: 0.86px;
                    color: $base-color-1;
                    // margin-bottom: 20px;
    
                  }
    
                  p {
                    font-family: Montserrat;
                    font-weight: 400;
                    line-height: 30.26px;
                    margin-bottom: 20px;
                  }
    
                  &>.color-btn {
                    display: flex;
                    justify-items: center;
                    flex-direction: column;
                    align-items: center;
                    line-height: 0px;

                    h4 {
                      font-size: 30px;
                      color: $base-color-1;
                    }
                 
                  }
                }
              }
            }
    
          }
        }
      }

  // colored-last line section
  section {
    &>.colored-last {
      display: flex;
      margin-top: 50px;

      &>.first-color {
        background-color: $base-color;
        width: 50%;
        height: 15px;
      }

      &>.second-color {
        background-color: $base-color-2;
        width: 25%;
        height: 15px;
      }

      &>.third-color {
        background-color: $base-color-1;
        width: 25%;
        height: 15px;
      }
    }
  }
}

// XX-SM (<251px)
@media (max-width: 250.9px) {
  .care-service-wrap {

    .up-icon {
      position: relative;

      .move-up {
        // border: 2px solid red;
        transition: ease;
        position: fixed;
        right: 10px;
        bottom: 20px;

        .icon-image {
          //  border: 2px solid red;
          width: 35px;
        }
      }
    }

    P {
      font-size: 14px;
    }

    h2 {
      // border: 12px solid red;
      font-size: 16px;
    }

    h3 {
      font-size: 15px !important;
    }

    // The heart icons in the absolute pages
    .heart {
      width: 25px;
    }

    // border: 11px solid red;
    &>.banner {
      // border: 11px solid red;
      height: 400px;
      padding: 10px 10px;

      &>.intro-content {
        // border: 2px solid red;
        text-align: center;
        padding: 0px 0px;
        line-height: 0px;

        .intro-title {
          // border: 12px solid red;
          margin-bottom: 2.5rem;
          font-size: 20px;
          font-weight: 600;
          line-height: 25px;
          color: #fff;
          padding-left: 0px;
        }

        .intro-subtitle {
          // border: 2px solid red;
          font-weight: 700;
          font-size: 30px;
          line-height: 25px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
        }

      }
    }

    &>.line-paragraphy {
      // border: 11px solid red;
      margin-top: 30px;

      p {
        padding: 0 10px;
        // text-align: center;
      }

      &>.underline-wrap {
        padding: 0 10px;

        &>.making-preparation {
          // border: 4px solid red;
          margin-bottom: 30px;

          h3 {
            line-height: 30px;
            text-align: center;
          }

          h3::after {
            left: 0%;
            width: 100%;
          }
        }
      }

    }

    section {

      &>.reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
        padding: 0 0px;
        margin-bottom: 0px;

        &>.section-image {

          // border: 1px solid red;
          img {
            // border: 1px solid red;
            width: 100%;
            height: auto;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          margin-top: -6px;
          position: relative;
          width: 100%;
          height: 450px;
          background-color: $base-color;

          &>.light-background {
            // border: 11px solid red;
            background-color: #FFFFFFB2;
            width: 95%;
            top: -30px;
            bottom: 5px;
            right: 5px;
            left: 5px;
            justify-content: center;

            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              overflow-y: scroll;
              padding: 10px;

              h2 {
                font-weight: 600;
                line-height: 50.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;
              }

              &>.contents-wrap {
                // border: 2px solid red;
                display: flex;
                flex-direction: column;
                column-gap: 10px;

                // &>.first-section,
                // .second-section {
                //   div {
                //     display: flex;
                //     column-gap: 5px;
                //   }
                // }
              }
            }
          }
        }
      }
    }

    // <!-- YOUR SEARCH ENDS HERE -->
    &>.search-ends {
      // border: 3px solid red;
      margin-top: 20px;

      &>.underline-wrap {
        padding: 0 10px;

        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            line-height: 30px;
          }
        }
      }

      p {
        // border: 3px solid red;
        padding: 0 10px;
        text-align: left;
        margin-bottom: 30px;
      }
    }


    &>.underline-wrap {
      // border: 2px solid blue;
      padding: 0 10px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          text-align: center;
          line-height: 25px;
          margin-top: 30px;
        }

        h3::after {
          left: 5%;
          width: 90%;
        }
      }
    }

    &>.paragraph-dots {
      // border: 11px solid red;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      margin-bottom: 30px;

      &>.para {
        p {
          // border: 11px solid red;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
          padding-bottom: 20px;
          text-align: left;
        }
      }

      &>.contents-dots {
        // border: 2px solid blue;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 10px;

        .contents {
          width: calc((100% / 1) - 0px);
          display: flex;
          flex-wrap: wrap;
          padding: 8px 0;
        }
      }
    }

    .call-us-wrap {
      // border: 1px solid blue;
      background-color: $base-color-1;
      padding: 0 20px;

      &>.call-contact {
        // border: 2px solid red;
        column-gap: 0px;
        padding-bottom: 20px;
        display: flex;
        justify-content: center;

        div h3 {
          font-weight: 700;
          line-height: 20px;
          font-size: 16px;
          text-align: center;
        }

        &>.icon-contact {
          // border: 11px solid red;
          border-radius: 8px;
          width: 70%;
          padding: 5px 15px;
          column-gap: 10px;

          span {

            a {
              font-size: 14px;
            }
          }
        }
      }
    }

    &>.elderly-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          padding: 0 20px;

          &>.making-preparation {
            display: flex;
            justify-content: center;

            // border: 4px solid red;
            h3 {
              text-align: center;
              font-size: 16px;
              line-height: 25px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            // border: 1px solid red;
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
              letter-spacing: 0em;
              text-align: center;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }
    }

    // Looking for elderly care support? component just below the elderly care with image of an advance lady

    &>.elderly-support {
      background-color: $base-color-2;

      .call-us {
        // border: 2px solid red;
        background-color: $base-color-1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        padding-bottom: 25px;

        &>.call-contact {
          // border: 10px solid blue;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;

          div h3 {
            color: #fff;
            font-size: 16px;
            line-height: 25px;
          }

          &>.icon-contact {
            // border: 10px solid blue;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 20px;

            span {
              // border: 11px solid red;
              border-radius: 5px;
              background-color: #fff;
              width: 100%;
              padding: 5px 15px;
              text-align: center;


              a {
                text-decoration: none;
                color: $base-color;
                font-size: 16px;
                font-weight: 700;
              }
            }

            .phone-number {
              color: $base-color-1;
            }
          }
        }
      }
    }

    &>.personal-care {
      // border: 1px solid red;
      padding: 10px 10px;

      &>.underline-wrap {
        &>.underline-care {
          margin-top: 20px;

          // border: 4px solid red;
          h3 {
            position: relative;
            font-size: 16px;
            line-height: 25px;
          }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-supporting {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.supporting {
          width: 100%;

          &>.underline-wrap {
            &>.supporting-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              h3 {
                position: relative;
                font-size: 16px;
                line-height: 25px;
                letter-spacing: 0em;
                line-height: 25px;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
          }
        }
      }

      &>.choose-image {
        // border: 4px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0px 0;

        &>.content {
          width: 100%;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
          }
        }

        &>.image {
          img {
            width: 100%;
            height: auto;
          }
        }
      }

      &>.bathing-showering {
        // border: 11px solid red;
        padding: 0 0px;
        margin-bottom: 0px;

        h4 {
          font-size: 16px;

        }

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;

          .contents {
            width: calc((100% / 1) - 0px);

            // &>.dots {
            //   &>.dots-span {
            //   }
            // }
          }
        }
      }
    }

    &>.getIn-touch {
      border: 11px solid rgb(26, 135, 179)(0, 183, 255);

      .call-us {
        background-color: $base-color-1;
        display: flex;
        justify-content: center;
        padding: 10px;

        &>.call-contact {
          width: 100%;
          justify-content: center;

          div h3 {
            text-align: center;
            font-size: 16px;
          }

          &>.contact {
            // border: 11px solid red;
            background-color: #fff;
            border-radius: 5px;
            color: $base-color;
            padding: 5px 15px;
            column-gap: 10px;
            margin-bottom: 20px;

            span {
              display: flex;

              a {
                text-decoration: none;
                font-size: 16px;
              }
            }

            .phone-number {
              color: $base-color-1;
              font-weight: 700;
            }
          }
        }
      }
    }

    &>.domiciliary-care {
      // border: 13px solid red;

      &>.domiciliary {
        padding: 0 10px;

        &>.underline-domiciliary {
          padding: 0 10px;

          &>.making-preparation {

            // border: 4px solid red;
            h3 {
              font-size: 16px;
              line-height: 25px;
              padding-top: 20px;
            }
          }
        }

        &>.image-domiciliary {
          // border: 2px solid red;
          padding: 0px 0;
          justify-content: center;

          &>.image {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.demociliary {
            width: 100%;

            h3 {
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>.why-domiciliary {
          h3 {
            // border: 2px solid red;
            font-size: 16px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }

        &>.consider-domiciliary {
          // border: 2px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
          }


          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              column-gap: 0px;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.companionship-care {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {

          // border: 4px solid red;
          h3 {
            position: relative;
            line-height: 25px;
          }

          h3::after {
            bottom: 0;
            left: 0%;
            width: 50%;
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-companionship {
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          &>.underline-wrap {
            &>.companionship-care {

              // border: 4px solid red;
              h3 {
                font-size: 16px;
                line-height: 25px;
              }

              h3::after {
                bottom: 0;
                left: 0%;
                width: 40%;
                border-bottom: 3px solid $base-color-1;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
          }

          p {
            font-size: 16px;
          }
        }
      }

      h3 {
        font-size: 16px;
        line-height: 25px;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.dementia-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.elder-dementia-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.elder {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 11px solid red;
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.personal-assistance {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          display: flex;
          justify-content: center;

          h3 {
            font-size: 16px;
            line-height: 25px;
            text-align: center;
            padding-top: 15px;
          }

          h3::after {
            bottom: 0;
            left: 5%;
            width: 90%;
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-personal-assistance {
        // border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          p {
            font-size: 16px;
          }

          h3 {
            font-size: 16px;
            line-height: 0px;
          }
        }
      }
    }

    &>.pet-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-bottom: 20px;
        }

        &>.pet-image-care {
          // border: 21px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0px;

          &>.pet-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }

          &>.pet-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.life-care {


      &>.contents {
        // border: 12px solid rgb(5, 3, 116);
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          padding: 10px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
              letter-spacing: 0em;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 0px;
        }
      }
    }

    &>.palliative-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.palliative-image-care {
          flex-direction: column;
          padding: 0px 0;

          &>.palliative-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.palliative-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.hospital-care {


      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }

        &>.consider-hospital {
          // border: 3px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          &>.paragraph-dots {
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
              }
            }
          }
        }
      }
    }

    &>.overnight-care {

      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.lady-elderly-care {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }

            &>.paragraph-dots {

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  width: calc((100% / 1) - 0px);

                  // .needs-assess {
                  //   color: #00000080;
                  // }
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.couples-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.couples-image-care {
          // border: 2px solid red;
          flex-direction: column;
          justify-content: center;
          padding: 0px 0;

          &>.couples-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.couples-picture {
            img {
              width: 100%;
              height: auto;
              padding-top: 10px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.live-in-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        &>.wheelchair-live-in-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0;

          &>.wheelchair-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.respite-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.respite-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;
          padding-top: 20px;

          &>.respite-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.respite-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.complex-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.complex-support-plan {
          // border: 2px solid red;
          justify-content: center;
          flex-direction: column;
          padding: 0px 0px;

          &>.complex-support {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                  padding-top: 15px;
                }

                h3::after {
                  left: 0%;
                  width: 50%;
                  border-bottom: 3px solid $base-color-1;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }

            p span {
              color: $base-color-1;
              font-size: 16px;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }

          &>.picture {
            img {
              width: 100%;
            }
          }
        }

        &>.complex-home {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 30px 0;

          &>.picture {
            img {
              width: 100%;
            }
          }

          &>.complex-support-content {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }
        }

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>.stroke-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          &>.making-preparation {
            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.stroke-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.stroke-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.stroke-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    // colored-last line section
    section {
      &>.colored-last {
        display: none;
        margin-top: 50px;

        &>.first-color {
          background-color: $base-color;
          width: 50%;
          height: 15px;
        }

        &>.second-color {
          background-color: $base-color-2;
          width: 25%;
          height: 15px;
        }

        &>.third-color {
          background-color: $base-color-1;
          width: 25%;
          height: 15px;
        }
      }
    }
  }
}

// XX-SM
@media (min-width: 251px) and (max-width: 350.9px) {
  .care-service-wrap {
.up-icon {
  position: relative;

  .move-up {
    // border: 2px solid red;
    transition: ease;
    position: fixed;
    right: 10px;
    bottom: 20px;

    .icon-image {
      //  border: 2px solid red;
      width: 40px;
    }
  }
}

P {
  font-size: 14px;
}

// h2 {
//   // border: 12px solid red;
//   font-size: 20px !important;
// }

h3 {
  font-size: 18px !important;
}

// The heart icons in the absolute pages
.heart {
  width: 25px;
}

// border: 11px solid red;
&>.banner {
  // border: 11px solid red;
  height: 400px;
  display: flex;
  justify-content: center;

  padding: 10px 10px;

  &>.intro-content {
    // border: 2px solid red;
    text-align: center;
    padding: 0px 0px;
    line-height: 0px;


    .intro-title {
      // border: 2px solid red;
      margin-bottom: 2.5rem;
      font-size: 25px;
      line-height: 25px;
      padding-left: 0px;
    }

    .intro-title:first-child {
      // border: 12px solid red;
      margin-bottom: 0px;
    }

    .intro-subtitle {
      // border: 2px solid red;
      font-weight: 700;
      font-size: 30px;
      line-height: 25px;
      letter-spacing: 0em;
      color: #fff;
      padding-left: 0px;
    }
  }
}

&>.line-paragraphy {
  // border: 11px solid red;
  margin-top: 30px;

  p {
    padding: 0 10px;
    // text-align: center;
  }

  &>.underline-wrap {
    padding: 0 10px;

    &>.making-preparation {
      // border: 4px solid red;
      margin-bottom: 30px;

      h3 {
        line-height: 30px;
        text-align: center;
      }

      h3::after {
        left: 0%;
        width: 100%;
      }
    }
  }

}


section {

  &>.reliable {
    // border: 5px solid $base-color;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    padding: 0 0px;
    margin-bottom: 0px;

    &>.section-image {

      // border: 1px solid red;
      img {
        // border: 1px solid red;
        width: 100%;
        height: auto;
      }
    }

    &>.section-background {
      // border: 1px solid red;
      margin-top: -6px;
      position: relative;
      width: 100%;
      height: 450px;
      background-color: $base-color;

      &>.light-background {
        // border: 11px solid red;
        background-color: #FFFFFFB2;
        width: 97%;
        top: -30px;
        bottom: 5px;
        right: 0px;
        left: 5px;
        justify-content: center;

        &>.contents {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow-y: scroll;
          padding: 10px;

          h2 {
            font-weight: 600;
            line-height: 50.86px;
            color: $base-color-1;
            margin-bottom: 20px;
            text-align: center;
          }

          &>.contents-wrap {
            // border: 2px solid red;
            display: flex;
            flex-direction: column;
            column-gap: 10px;

            // &>.first-section,
            // .second-section {
            //   div {
            //     display: flex;
            //     column-gap: 5px;
            //   }
            // }
          }
        }
      }
    }
  }
}

// <!-- YOUR SEARCH ENDS HERE -->
&>.search-ends {
  // border: 3px solid red;
  margin-top: 20px;

  &>.underline-wrap {
    padding: 0 10px;

    &>.making-preparation {
      display: flex;
      justify-content: center;

      h3 {
        line-height: 30px;
      }
    }
  }

  p {
    // border: 3px solid red;
    padding: 0 10px;
    text-align: left;
    margin-bottom: 30px;
  }
}


&>.underline-wrap {
  // border: 2px solid blue;
  padding: 0 10px;

  &>.making-preparation {
    display: flex;
    justify-content: center;

    // border: 4px solid red;
    h3 {
      text-align: center;
      line-height: 25px;
      margin-top: 30px;
    }

    h3::after {
      left: 5%;
      width: 90%;
    }
  }
}

&>.paragraph-dots {
  // border: 11px solid red;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 30px;

  &>.para {
    p {
      // border: 11px solid red;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      padding-bottom: 20px;
      text-align: left;
    }
  }

  &>.contents-dots {
    // border: 2px solid blue;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 10px;

    .contents {
      width: calc((100% / 1) - 0px);
      display: flex;
      flex-wrap: wrap;
      padding: 8px 0;
    }
  }
}

.call-us-wrap {
  // border: 1px solid blue;
  background-color: $base-color-1;
  padding: 0 20px;

  &>.call-contact {
    // border: 2px solid red;
    column-gap: 0px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;

    div h3 {
      font-weight: 700;
      line-height: 20px;
      font-size: 16px;
      text-align: center;
    }

    &>.icon-contact {
      // border: 11px solid red;
      border-radius: 8px;
      width: 70%;
      padding: 5px 15px;
      column-gap: 10px;

      span {

        a {
          font-size: 14px;
        }
      }
    }
  }
}

&>.elderly-care {
  &>.contents {
    // border: 2px solid red;
    padding: 20px 10px;

    &>.underline-wrap {
      padding: 0 20px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          text-align: center;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
    }

    &>.lady-elderly-care {
      // border: 2px solid red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px 0;

      &>.lady {
        img {
          width: 100%;
        }
      }

      &>.important-care {
        // border: 1px solid red;
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
          letter-spacing: 0em;
          text-align: center;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.paragraph-dots {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            row-gap: 10px;

            .contents {
              border: 1px solid rgba(0, 0, 0, 0.070);
              border-radius: 8px;
              width: calc((100% / 1) - 0px);
              display: flex;
              flex-wrap: wrap;
              padding: 8px 0;
            }
          }
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0em;
    }
  }
}

// Looking for elderly care support? component just below the elderly care with image of an advance lady

&>.elderly-support {
  background-color: $base-color-2;

  .call-us {
    // border: 2px solid red;
    background-color: $base-color-1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    padding-bottom: 25px;

    &>.call-contact {
      // border: 10px solid blue;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;

      div h3 {
        color: #fff;
        font-size: 16px;
        line-height: 25px;
      }

      &>.icon-contact {
        // border: 10px solid blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 20px;

        span {
          // border: 11px solid red;
          border-radius: 5px;
          background-color: #fff;
          width: 100%;
          padding: 5px 15px;
          text-align: center;


          a {
            text-decoration: none;
            color: $base-color;
            font-size: 16px;
            font-weight: 700;
          }
        }

        .phone-number {
          color: $base-color-1;
        }
      }
    }
  }
}

&>.personal-care {
  // border: 1px solid red;
  padding: 10px 10px;

  &>.underline-wrap {
    &>.underline-care {
      margin-top: 20px;

      // border: 4px solid red;
      h3 {
        position: relative;
        font-size: 16px;
        line-height: 25px;
      }
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
  }

  &>.image-supporting {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &>.image {
      img {
        width: 100%;
      }
    }

    &>.supporting {
      width: 100%;

      &>.underline-wrap {
        &>.supporting-care {
          display: flex;
          justify-content: center;
          flex-direction: column;

          h3 {
            position: relative;
            font-size: 16px;
            line-height: 25px;
            letter-spacing: 0em;
            line-height: 25px;
          }
        }
      }

      h4 {
        width: 100%;
        font-size: 16px;
        letter-spacing: 0em;
      }

      p {
        font-size: 16px;
      }
    }
  }

  &>.choose-image {
    // border: 4px solid red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px 0;

    &>.content {
      width: 100%;

      h3 {
        font-size: 16px;
        line-height: 25px;
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }
    }

    &>.image {
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  &>.bathing-showering {
    // border: 11px solid red;
    padding: 0 0px;
    margin-bottom: 0px;

    h4 {
      font-size: 16px;

    }

    &>.contents-dots {
      // border: 2px solid blue;
      width: 100%;

      .contents {
        width: calc((100% / 1) - 0px);

        // &>.dots {
        //   &>.dots-span {
        //   }
        // }
      }
    }
  }
}

&>.getIn-touch {
  border: 11px solid rgb(26, 135, 179)(0, 183, 255);

  .call-us {
    background-color: $base-color-1;
    display: flex;
    justify-content: center;
    padding: 10px;

    &>.call-contact {
      width: 100%;
      justify-content: center;

      div h3 {
        text-align: center;
        font-size: 16px;
      }

      &>.contact {
        // border: 11px solid red;
        background-color: #fff;
        border-radius: 5px;
        color: $base-color;
        padding: 5px 15px;
        column-gap: 10px;
        margin-bottom: 20px;

        span {
          display: flex;

          a {
            text-decoration: none;
            font-size: 16px;
          }
        }

        .phone-number {
          color: $base-color-1;
          font-weight: 700;
        }
      }
    }
  }
}

&>.domiciliary-care {
  // border: 13px solid red;

  &>.domiciliary {
    padding: 0 10px;

    &>.underline-domiciliary {
      padding: 0 10px;

      &>.making-preparation {

        // border: 4px solid red;
        h3 {
          font-size: 16px;
          line-height: 25px;
          padding-top: 20px;
        }
      }
    }

    &>.image-domiciliary {
      // border: 2px solid red;
      padding: 0px 0;
      justify-content: center;

      &>.image {
        img {
          width: 100%;
          height: auto;
        }
      }

      &>.demociliary {
        width: 100%;

        h3 {
          font-size: 16px;
          line-height: 0px;
          padding-top: 15px;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }
    }

    &>.why-domiciliary {
      h3 {
        // border: 2px solid red;
        font-size: 16px;
      }

      p {
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.consider-domiciliary {
      // border: 2px solid red;
      padding-top: 0px;

      h3 {
        font-size: 16px;
      }


      &>.paragraph-dots {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        padding-bottom: 30px;

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;
          column-gap: 0px;
          row-gap: 10px;

          .contents {
            width: calc((100% / 1) - 0px);
            padding: 8px 0;
          }
        }
      }
    }
  }
}

&>.companionship-care {
  // border: 11px solid red;
  padding: 0 10px;
  padding-bottom: 20px;

  &>.underline-wrap {
    &>.underline-care {

      // border: 4px solid red;
      h3 {
        position: relative;
        line-height: 25px;
      }

      h3::after {
        bottom: 0;
        left: 0%;
        width: 50%;
      }
    }
  }

  p {
    font-size: 16px;
    line-height: 25px;
  }

  &>.image-companionship {
    justify-content: center;

    &>.image {
      img {
        width: 100%;
      }
    }

    &>.companionship {
      width: 100%;

      &>.underline-wrap {
        &>.companionship-care {

          // border: 4px solid red;
          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          h3::after {
            bottom: 0;
            left: 0%;
            width: 40%;
            border-bottom: 3px solid $base-color-1;
          }
        }
      }

      h4 {
        width: 100%;
        font-size: 16px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  h3 {
    font-size: 16px;
    line-height: 25px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
  }
}

&>.dementia-care {
  &>.contents {
    // border: 2px solid red;
    padding: 0px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.elder-dementia-care {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0;

      &>.elder {
        img {
          width: 100%;
          height: auto;
        }
      }

      &>.important-care {
        width: 100%;

        h3 {
          // border: 11px solid red;
          font-size: 16px;
          line-height: 0px;
          padding-top: 15px
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.personal-assistance {
  // border: 11px solid red;
  padding: 0 10px;
  padding-bottom: 20px;

  &>.underline-wrap {
    &>.underline-care {
      display: flex;
      justify-content: center;

      h3 {
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        padding-top: 15px;
      }

      h3::after {
        bottom: 0;
        left: 5%;
        width: 90%;
      }
    }
  }

  p {
    font-size: 16px;
    line-height: 25px;
  }

  &>.image-personal-assistance {
    // border: 2px solid red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &>.image {
      img {
        width: 100%;
      }
    }

    &>.companionship {
      width: 100%;

      p {
        font-size: 16px;
      }

      h3 {
        font-size: 16px;
        line-height: 0px;
      }
    }
  }
}

&>.pet-care {
  &>.contents {
    // border: 2px solid red;
    padding: 0px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
      line-height: 25px;
      padding-bottom: 20px;
    }

    &>.pet-image-care {
      // border: 21px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 10px 0px;

      &>.pet-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 0px;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }

      &>.pet-picture {
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.life-care {


  &>.contents {
    // border: 12px solid rgb(5, 3, 116);
    padding: 0px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
    }

    &>.life-care-image {
      // border: 2px solid red;
      display: flex;
      flex-direction: column;
      padding: 10px 0;

      &>.lady {
        img {
          width: 100%;
        }
      }

      &>.life-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 0px;
          letter-spacing: 0em;
          padding-top: 15px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 0px;
    }
  }
}

&>.palliative-care {
  &>.contents {
    // border: 2px solid red;
    padding: 0 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.palliative-image-care {
      flex-direction: column;
      padding: 0px 0;

      &>.palliative-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 0px;
        }

        p {
          font-size: 16px;
        }
      }

      &>.palliative-picture {
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.hospital-care {


  &>.contents {
    // border: 2px solid red;
    padding: 0 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.life-care-image {
      // border: 2px solid red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px 0;

      &>.lady {
        img {
          width: 100%;
        }
      }

      &>.life-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }

    &>.consider-hospital {
      // border: 3px solid red;
      padding-top: 0px;

      h3 {
        font-size: 16px;
        line-height: 25px;
      }

      &>.paragraph-dots {
        padding-bottom: 30px;

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;
          row-gap: 10px;

          .contents {
            width: calc((100% / 1) - 0px);
          }
        }
      }
    }
  }
}

&>.overnight-care {

  &>.contents {
    // border: 2px solid red;
    padding: 0 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.lady-elderly-care {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px 0;

      &>.lady {
        img {
          width: 100%;
        }
      }

      &>.important-care {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }

        &>.paragraph-dots {

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            .contents {
              width: calc((100% / 1) - 0px);

              // .needs-assess {
              //   color: #00000080;
              // }
            }
          }
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.couples-care {
  &>.contents {
    // border: 2px solid red;
    padding: 0 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.couples-image-care {
      // border: 2px solid red;
      flex-direction: column;
      justify-content: center;
      padding: 0px 0;

      &>.couples-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        h4 {
          // border: 2px solid red;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }
      }

      &>.couples-picture {
        img {
          width: 100%;
          height: auto;
          padding-top: 10px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.live-in-care {
  &>.contents {
    // border: 2px solid red;
    padding: 20px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
      line-height: 25px;
    }

    &>.wheelchair-live-in-care {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 10px 0;

      &>.wheelchair-picture {
        img {
          width: 100%;
          height: auto;
        }
      }

      &>.important-care {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.respite-care {
  &>.contents {
    // border: 2px solid red;
    padding: 10px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.respite-image-care {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0;
      padding-top: 20px;

      &>.respite-picture {
        img {
          width: 100%;
          height: auto;
        }
      }

      &>.respite-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        h4 {
          // border: 2px solid red;
          color: $base-color-1;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.complex-care {
  &>.contents {
    // border: 2px solid red;
    padding: 0px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.complex-support-plan {
      // border: 2px solid red;
      justify-content: center;
      flex-direction: column;
      padding: 0px 0px;

      &>.complex-support {
        width: 100%;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }

            h3::after {
              left: 0%;
              width: 50%;
              border-bottom: 3px solid $base-color-1;
            }
          }
        }

        h4 {
          // border: 2px solid red;
          color: $base-color-1;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }

        p span {
          color: $base-color-1;
          font-size: 16px;
        }

        &>.paragraph-dots {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            row-gap: 10px;

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            .contents {
              border: 1px solid rgba(0, 0, 0, 0.070);
              border-radius: 8px;
              width: calc((100% / 1) - 0px);
              display: flex;
              flex-wrap: wrap;
              padding: 8px 0;
            }
          }
        }
      }

      &>.picture {
        img {
          width: 100%;
        }
      }
    }

    &>.complex-home {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 30px 0;

      &>.picture {
        img {
          width: 100%;
        }
      }

      &>.complex-support-content {
        width: 100%;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
            }
          }
        }

        h4 {
          // border: 2px solid red;
          color: $base-color-1;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }

        &>.paragraph-dots {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            row-gap: 10px;

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            .contents {
              border: 1px solid rgba(0, 0, 0, 0.070);
              border-radius: 8px;
              width: calc((100% / 1) - 0px);
              display: flex;
              flex-wrap: wrap;
              padding: 8px 0;
            }
          }
        }
      }
    }

    h3 {
      // border: 1px solid red;
      font-size: 16px;
      line-height: 25px;
    }

    p {
      font-size: 16px;
    }
  }
}

&>.stroke-care {
  &>.contents {
    // border: 2px solid red;
    padding: 20px 10px;

    &>.underline-wrap {
      &>.making-preparation {
        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.stroke-image-care {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0;

      &>.stroke-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        h4 {
          // border: 2px solid red;
          color: $base-color-1;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }
      }

      &>.stroke-picture {
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

// colored-last line section
section {
  &>.colored-last {
    display: none;
    margin-top: 50px;

    &>.first-color {
      background-color: $base-color;
      width: 50%;
      height: 15px;
    }

    &>.second-color {
      background-color: $base-color-2;
      width: 25%;
      height: 15px;
    }

    &>.third-color {
      background-color: $base-color-1;
      width: 25%;
      height: 15px;
    }
  }
}
}
}

// X-SM
@media (min-width: 351px) and (max-width: 575.9px) {
  .care-service-wrap {

.up-icon {
  position: relative;

  .move-up {
    // border: 2px solid red;
    transition: ease;
    position: fixed;
    right: 10px;
    bottom: 20px;

    .icon-image {
      //  border: 2px solid red;
      width: 45px;
    }
  }
}

P {
  font-size: 14px;
}

h3 {
  font-size: 20px !important;
}

// The heart icons in the absolute pages
.heart {
  width: 25px;
}

// border: 11px solid red;
&>.banner {
  // border: 11px solid red;
  height: 400px;
  display: flex;
  justify-content: center;
  padding: 10px 10px;

  &>.intro-content {
    // border: 2px solid red;
    width: 100%;
    padding: 0px 20px;
    line-height: 0px;

    .intro-title {
      // border: 2px solid red;
      margin-bottom: 2.5rem;
      font-size: 30px;
      line-height: 30px;
      padding-left: 0px;
    }

    .intro-title:first-child {
      // border: 12px solid red;
      margin-bottom: 0px;
    }

    .intro-subtitle {
      // border: 2px solid red;
      font-weight: 700;
      font-size: 35px;
      line-height: 30px;
      letter-spacing: 0em;
      color: #fff;
      padding-left: 0px;
    }
  }
}

&>.line-paragraphy {
  // border: 11px solid red;
  margin-top: 30px;

  p {
    padding: 0 10px;
    // text-align: center;
  }

  &>.underline-wrap {
    padding: 0 10px;

    &>.making-preparation {
      // border: 4px solid red;
      margin-bottom: 30px;

      h3 {
        line-height: 30px;
        text-align: center;
      }

      h3::after {
        left: 0%;
        width: 100%;
      }
    }
  }

}

// First section with absolute styling
section {

  &>.reliable {
    // border: 5px solid $base-color;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    padding: 0 0px;
    margin-bottom: 0px;

    &>.section-image {

      // border: 1px solid red;
      img {
        // border: 1px solid red;
        width: 100%;
        height: auto;
      }
    }

    &>.section-background {
      // border: 1px solid red;
      margin-top: -6px;
      position: relative;
      width: 100%;
      height: 500px;
      background-color: $base-color;

      &>.light-background {
        // border: 11px solid red;
        background-color: #FFFFFFB2;
        width: 97%;
        top: -40px;
        bottom: 5px;
        right: 0px;
        left: 5px;
        justify-content: center;

        &>.contents {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          // overflow-y: scroll;
          padding: 10px;

          h2 {
            // border: 2px solid red;
            font-weight: 600;
            font-size: 18px !important;
            line-height: 30.86px;
            color: $base-color-1;
            // padding-bottom: 10px;
            text-align: center;
          }

          &>.contents-wrap {
            // border: 2px solid red;
            display: flex;
            flex-direction: column;
            column-gap: 10px;
            line-height: 25px;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
}

// <!-- YOUR SEARCH ENDS HERE -->
&>.search-ends {
  // border: 3px solid red;
  margin-top: 20px;

  &>.underline-wrap {
    padding: 0 10px;

    &>.making-preparation {
      display: flex;
      justify-content: center;

      h3 {
        line-height: 30px;
      }
    }
  }

  p {
    // border: 3px solid red;
    padding: 0 10px;
    text-align: left;
    margin-bottom: 30px;
  }
}


&>.underline-wrap {
  // border: 2px solid blue;
  padding: 0 10px;

  &>.making-preparation {
    display: flex;
    justify-content: center;

    // border: 4px solid red;
    h3 {
      text-align: center;
      line-height: 25px;
      margin-top: 30px;
    }

    h3::after {
      left: 5%;
      width: 90%;
    }
  }
}

&>.paragraph-dots {
  // border: 11px solid red;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 30px;

  &>.para {
    p {
      // border: 11px solid red;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      padding-bottom: 20px;
      text-align: left;
    }
  }

  &>.contents-dots {
    // border: 2px solid blue;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 10px;

    .contents {
      width: calc((100% / 1) - 0px);
      display: flex;
      flex-wrap: wrap;
      padding: 8px 0;
    }
  }
}

.call-us-wrap {
  // border: 1px solid blue;
  background-color: $base-color-1;
  padding: 0 20px;

  &>.call-contact {
    // border: 2px solid red;
    column-gap: 0px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;

    div h3 {
      font-weight: 700;
      line-height: 20px;
      font-size: 16px;
      text-align: center;
    }

    &>.icon-contact {
      // border: 11px solid red;
      border-radius: 8px;
      width: 70%;
      padding: 15px 0px;
      column-gap: 10px;

      span {

        a {
          font-size: 14px;
        }
      }
    }
  }
}

&>.elderly-care {
  &>.contents {
    // border: 2px solid red;
    padding: 20px 10px;

    &>.underline-wrap {
      padding: 0 20px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          text-align: center;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
    }

    &>.lady-elderly-care {
      // border: 2px solid red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px 0;

      &>.lady {
        img {
          width: 100%;
        }
      }

      &>.important-care {
        // border: 1px solid red;
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
          letter-spacing: 0em;
          text-align: center;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.paragraph-dots {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            row-gap: 10px;

            .contents {
              border: 1px solid rgba(0, 0, 0, 0.070);
              border-radius: 8px;
              width: calc((100% / 1) - 0px);
              display: flex;
              flex-wrap: wrap;
              padding: 8px 0;
            }
          }
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0em;
    }
  }
}

// Looking for elderly care support? component just below the elderly care with image of an advance lady

&>.elderly-support {
  background-color: $base-color-2;

  .call-us {
    // border: 2px solid red;
    background-color: $base-color-1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    padding-bottom: 25px;

    &>.call-contact {
      // border: 10px solid blue;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;

      div h3 {
        color: #fff;
        font-size: 16px;
        line-height: 25px;
      }

      &>.icon-contact {
        // border: 10px solid blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 20px;

        span {
          // border: 11px solid red;
          border-radius: 5px;
          background-color: #fff;
          width: 100%;
          padding: 15px 15px;
          text-align: center;


          a {
            text-decoration: none;
            color: $base-color;
            font-size: 16px;
            font-weight: 700;
          }
        }

        .phone-number {
          color: $base-color-1;
        }
      }
    }
  }
}

&>.personal-care {
  // border: 1px solid red;
  padding: 10px 10px;

  &>.underline-wrap {
    &>.underline-care {
      margin-top: 20px;

      // border: 4px solid red;
      h3 {
        position: relative;
        font-size: 16px;
        line-height: 25px;
      }
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
  }

  &>.image-supporting {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &>.image {
      img {
        width: 100%;
      }
    }

    &>.supporting {
      width: 100%;

      &>.underline-wrap {
        &>.supporting-care {
          display: flex;
          justify-content: center;
          flex-direction: column;

          h3 {
            position: relative;
            font-size: 16px;
            line-height: 25px;
            letter-spacing: 0em;
            line-height: 25px;
          }
        }
      }

      h4 {
        width: 100%;
        font-size: 16px;
        letter-spacing: 0em;
      }

      p {
        font-size: 16px;
      }
    }
  }

  &>.choose-image {
    // border: 4px solid red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px 0;

    &>.content {
      width: 100%;

      h3 {
        font-size: 16px;
        line-height: 25px;
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }
    }

    &>.image {
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  &>.bathing-showering {
    // border: 11px solid red;
    padding: 0 0px;
    margin-bottom: 0px;

    h4 {
      font-size: 16px;

    }

    &>.contents-dots {
      // border: 2px solid blue;
      width: 100%;

      .contents {
        width: calc((100% / 1) - 0px);

        // &>.dots {
        //   &>.dots-span {
        //   }
        // }
      }
    }
  }
}

&>.getIn-touch {
  border: 11px solid rgb(26, 135, 179)(0, 183, 255);

  .call-us {
    background-color: $base-color-1;
    display: flex;
    justify-content: center;
    padding: 10px;

    &>.call-contact {
      width: 100%;
      justify-content: center;

      div h3 {
        text-align: center;
        font-size: 16px;
      }

      &>.contact {
        // border: 11px solid red;
        background-color: #fff;
        border-radius: 5px;
        color: $base-color;
        padding: 15px 25px;
        column-gap: 10px;
        margin-bottom: 20px;

        span {
          display: flex;

          a {
            text-decoration: none;
            font-size: 16px;
          }
        }

        .phone-number {
          color: $base-color-1;
          font-weight: 700;
        }
      }
    }
  }
}

&>.domiciliary-care {
  // border: 13px solid red;

  &>.domiciliary {
    padding: 0 10px;

    &>.underline-domiciliary {
      padding: 0 10px;

      &>.making-preparation {

        // border: 4px solid red;
        h3 {
          font-size: 16px;
          line-height: 25px;
          padding-top: 20px;
        }
      }
    }

    &>.image-domiciliary {
      // border: 2px solid red;
      padding: 0px 0;
      justify-content: center;

      &>.image {
        img {
          width: 100%;
          height: auto;
        }
      }

      &>.demociliary {
        width: 100%;

        h3 {
          font-size: 16px;
          line-height: 0px;
          padding-top: 15px;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }
    }

    &>.why-domiciliary {
      h3 {
        // border: 2px solid red;
        font-size: 16px;
      }

      p {
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.consider-domiciliary {
      // border: 2px solid red;
      padding-top: 0px;

      h3 {
        font-size: 16px;
      }


      &>.paragraph-dots {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        padding-bottom: 30px;

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;
          column-gap: 0px;
          row-gap: 10px;

          .contents {
            width: calc((100% / 1) - 0px);
            padding: 8px 0;
          }
        }
      }
    }
  }
}

&>.companionship-care {
  // border: 11px solid red;
  padding: 0 10px;
  padding-bottom: 20px;

  &>.underline-wrap {
    &>.underline-care {

      // border: 4px solid red;
      h3 {
        position: relative;
        line-height: 25px;
      }

      h3::after {
        bottom: 0;
        left: 0%;
        width: 50%;
      }
    }
  }

  p {
    font-size: 16px;
    line-height: 25px;
  }

  &>.image-companionship {
    justify-content: center;

    &>.image {
      img {
        width: 100%;
      }
    }

    &>.companionship {
      width: 100%;

      &>.underline-wrap {
        &>.companionship-care {

          // border: 4px solid red;
          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          h3::after {
            bottom: 0;
            left: 0%;
            width: 40%;
            border-bottom: 3px solid $base-color-1;
          }
        }
      }

      h4 {
        width: 100%;
        font-size: 16px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  h3 {
    font-size: 16px;
    line-height: 25px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
  }
}

&>.dementia-care {
  &>.contents {
    // border: 2px solid red;
    padding: 0px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.elder-dementia-care {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0;

      &>.elder {
        img {
          width: 100%;
          height: auto;
        }
      }

      &>.important-care {
        width: 100%;

        h3 {
          // border: 11px solid red;
          font-size: 16px;
          line-height: 0px;
          padding-top: 15px
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.personal-assistance {
  // border: 11px solid red;
  padding: 0 10px;
  padding-bottom: 20px;

  &>.underline-wrap {
    &>.underline-care {
      display: flex;
      justify-content: center;

      h3 {
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        padding-top: 15px;
      }

      h3::after {
        bottom: 0;
        left: 5%;
        width: 90%;
      }
    }
  }

  p {
    font-size: 16px;
    line-height: 25px;
  }

  &>.image-personal-assistance {
    // border: 2px solid red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &>.image {
      img {
        width: 100%;
      }
    }

    &>.companionship {
      width: 100%;

      p {
        font-size: 16px;
      }

      h3 {
        font-size: 16px;
        line-height: 0px;
      }
    }
  }
}

&>.pet-care {
  &>.contents {
    // border: 2px solid red;
    padding: 0px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
      line-height: 25px;
      padding-bottom: 20px;
    }

    &>.pet-image-care {
      // border: 21px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 10px 0px;

      &>.pet-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 0px;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }

      &>.pet-picture {
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.life-care {


  &>.contents {
    // border: 12px solid rgb(5, 3, 116);
    padding: 0px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
    }

    &>.life-care-image {
      // border: 2px solid red;
      display: flex;
      flex-direction: column;
      padding: 10px 0;

      &>.lady {
        img {
          width: 100%;
        }
      }

      &>.life-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 0px;
          letter-spacing: 0em;
          padding-top: 15px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 0px;
    }
  }
}

&>.palliative-care {
  &>.contents {
    // border: 2px solid red;
    padding: 0 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.palliative-image-care {
      flex-direction: column;
      padding: 0px 0;

      &>.palliative-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 0px;
        }

        p {
          font-size: 16px;
        }
      }

      &>.palliative-picture {
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.hospital-care {


  &>.contents {
    // border: 2px solid red;
    padding: 0 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.life-care-image {
      // border: 2px solid red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px 0;

      &>.lady {
        img {
          width: 100%;
        }
      }

      &>.life-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }

    &>.consider-hospital {
      // border: 3px solid red;
      padding-top: 0px;

      h3 {
        font-size: 16px;
        line-height: 25px;
      }

      &>.paragraph-dots {
        padding-bottom: 30px;

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;
          row-gap: 10px;

          .contents {
            width: calc((100% / 1) - 0px);
          }
        }
      }
    }
  }
}

&>.overnight-care {

  &>.contents {
    // border: 2px solid red;
    padding: 0 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.lady-elderly-care {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px 0;

      &>.lady {
        img {
          width: 100%;
        }
      }

      &>.important-care {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }

        &>.paragraph-dots {

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            .contents {
              width: calc((100% / 1) - 0px);

              // .needs-assess {
              //   color: #00000080;
              // }
            }
          }
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.couples-care {
  &>.contents {
    // border: 2px solid red;
    padding: 0 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.couples-image-care {
      // border: 2px solid red;
      flex-direction: column;
      justify-content: center;
      padding: 0px 0;

      &>.couples-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        h4 {
          // border: 2px solid red;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }
      }

      &>.couples-picture {
        img {
          width: 100%;
          height: auto;
          padding-top: 10px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.live-in-care {
  &>.contents {
    // border: 2px solid red;
    padding: 20px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
      line-height: 25px;
    }

    &>.wheelchair-live-in-care {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 10px 0;

      &>.wheelchair-picture {
        img {
          width: 100%;
          height: auto;
        }
      }

      &>.important-care {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.respite-care {
  &>.contents {
    // border: 2px solid red;
    padding: 10px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.respite-image-care {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0;
      padding-top: 20px;

      &>.respite-picture {
        img {
          width: 100%;
          height: auto;
        }
      }

      &>.respite-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        h4 {
          // border: 2px solid red;
          color: $base-color-1;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.complex-care {
  &>.contents {
    // border: 2px solid red;
    padding: 0px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-top: 15px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.complex-support-plan {
      // border: 2px solid red;
      justify-content: center;
      flex-direction: column;
      padding: 0px 0px;

      &>.complex-support {
        width: 100%;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }

            h3::after {
              left: 0%;
              width: 50%;
              border-bottom: 3px solid $base-color-1;
            }
          }
        }

        h4 {
          // border: 2px solid red;
          color: $base-color-1;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }

        p span {
          color: $base-color-1;
          font-size: 16px;
        }

        &>.paragraph-dots {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            row-gap: 10px;

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            .contents {
              border: 1px solid rgba(0, 0, 0, 0.070);
              border-radius: 8px;
              width: calc((100% / 1) - 0px);
              display: flex;
              flex-wrap: wrap;
              padding: 8px 0;
            }
          }
        }
      }

      &>.picture {
        img {
          width: 100%;
        }
      }
    }

    &>.complex-home {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 30px 0;

      &>.picture {
        img {
          width: 100%;
        }
      }

      &>.complex-support-content {
        width: 100%;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
            }
          }
        }

        h4 {
          // border: 2px solid red;
          color: $base-color-1;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }

        &>.paragraph-dots {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            row-gap: 10px;

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            .contents {
              border: 1px solid rgba(0, 0, 0, 0.070);
              border-radius: 8px;
              width: calc((100% / 1) - 0px);
              display: flex;
              flex-wrap: wrap;
              padding: 8px 0;
            }
          }
        }
      }
    }

    h3 {
      // border: 1px solid red;
      font-size: 16px;
      line-height: 25px;
    }

    p {
      font-size: 16px;
    }
  }
}

&>.stroke-care {
  &>.contents {
    // border: 2px solid red;
    padding: 20px 10px;

    &>.underline-wrap {
      &>.making-preparation {
        h3 {
          // border: 4px solid red;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.stroke-image-care {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0;

      &>.stroke-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        h4 {
          // border: 2px solid red;
          color: $base-color-1;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }
      }

      &>.stroke-picture {
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

// colored-last line section
section {
  &>.colored-last {
    display: none;
    margin-top: 50px;

    &>.first-color {
      background-color: $base-color;
      width: 50%;
      height: 15px;
    }

    &>.second-color {
      background-color: $base-color-2;
      width: 25%;
      height: 15px;
    }

    &>.third-color {
      background-color: $base-color-1;
      width: 25%;
      height: 15px;
    }
  }
}
}
}

// SM
@media (min-width: 576px) and (max-width: 767.9px) {
  .care-service-wrap {

    .up-icon {
  position: relative;

  .move-up {
    // border: 2px solid red;
    transition: ease;
    position: fixed;
    right: 10px;
    bottom: 20px;

    .icon-image {
      //  border: 2px solid red;
      width: 45px;
    }
  }
}

P {
  font-size: 18px !important;
}

h3 {
  font-size: 30px !important;
}

// The heart icons in the absolute pages
.heart {
  width: 25px;
}

  // border: 11px solid red;
&>.banner {
  // border: 11px solid red;
  height: 400px;
  display: flex;
  justify-content: center;
  padding: 10px 10px;

  &>.intro-content {
    // border: 2px solid red;
    width: 100%;
    padding: 0px 20px;
    line-height: 0px;

    .intro-title {
      // border: 2px solid red;
      margin-bottom: 2.5rem;
      font-size: 50px;
      line-height: 60px;
      padding-left: 0px;
    }

    .intro-title:first-child {
      // border: 12px solid red;
      margin-bottom: 0px;
    }

    .intro-subtitle {
      // border: 2px solid red;
      font-weight: 700;
      font-size: 60px;
      line-height: 60px;
      letter-spacing: 0em;
      color: #fff;
      padding-left: 0px;
    }
  }
}

&>.line-paragraphy {
  // border: 11px solid red;
  margin-top: 30px;

  p {
    padding: 0 10px;
    // text-align: center;
  }

  &>.underline-wrap {
    padding: 0 10px;

    &>.making-preparation {
      // border: 4px solid red;
      margin-bottom: 30px;

      h3 {
        line-height: 30px;
        text-align: center;
      }

      h3::after {
        left: 0%;
        width: 100%;
      }
    }
  }

}

// First section with absolute styling
section {

  &>.reliable {
    // border: 5px solid $base-color;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    padding: 0 0px;
    margin-bottom: 0px;

    &>.section-image {

      // border: 1px solid red;
      img {
        // border: 1px solid red;
        width: 100%;
        height: auto;
      }
    }

    &>.section-background {
      // border: 1px solid red;
      margin-top: -6px;
      position: relative;
      width: 100%;
      height: 500px;
      background-color: $base-color;

      &>.light-background {
        // border: 11px solid red;
        background-color: #FFFFFFB2;
        justify-content: center;
        align-items: center;
        width: 97%;
        top: -40px;
        bottom: 10px;
        right: 0px;
        left: 10px;

        &>.contents {
          // border: 2px solid red;
          width: 100%;
          display: flex;
          flex-direction: column;
          // overflow-y: scroll;
          padding: 10px;

          h2 {
            // border: 2px solid red;
            font-weight: 600;
            font-size: 25px !important;
            line-height: 30.86px;
            color: $base-color-1;
            padding-bottom: 30px;
            text-align: center;
          }

          &>.contents-wrap {
            // border: 2px solid red;
            display: flex;
            flex-direction: space-between;
            column-gap: 50px;
            line-height: 25px;
            padding-bottom: 10px;
            font-size: 16px !important;
          }
        }
      }
    }
  }
}

// <!-- YOUR SEARCH ENDS HERE -->
&>.search-ends {
  // border: 3px solid red;
  margin-top: 20px;

  &>.underline-wrap {
    padding: 0 10px;

    &>.making-preparation {
      display: flex;
      justify-content: center;

      h3 {
        line-height: 30px;
      }
    }
  }

  p {
    // border: 3px solid red;
    padding: 0 10px;
    text-align: left;
    margin-bottom: 30px;
  }
}

    &>.underline-wrap {
      // border: 2px solid blue;
      padding: 0 10px;
      margin-top: 20px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          text-align: center;
        }
      }
    }

    &>.paragraph-dots {
      // border: 11px solid red;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      margin-bottom: 30px;

      &>.para {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
          padding-bottom: 30px;
          // text-align: center;
        }
      }

      &>.contents-dots {
        // border: 2px solid blue;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 10px;

        .contents {
          border: 1px solid rgba(0, 0, 0, 0.070);
          border-radius: 8px;
          width: calc((100% / 1) - 0px);
          display: flex;
          flex-wrap: wrap;
          padding: 8px 0;
        }
      }
    }

    .call-us-wrap {
      // border: 1px solid blue;
      background-color: $base-color-1;
      padding: 10px;

      &>.call-contact {
        // border: 22px solid blue;
        column-gap: 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div h3 {
          font-weight: 700;
          line-height: 20px;
          font-size: 16px;
          text-align: center;
        }

        &>.icon-contact {
          // border: 11px solid blue;
          border-radius: 8px;
          // width: 30%;
          padding: 15px 15px;
          column-gap: 10px;

          span {

            a {
              font-size: 14px;
            }
          }
        }
      }
    }

    &>.elderly-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          padding: 0 20px;

          &>.making-preparation {
            display: flex;
            justify-content: center;

            // border: 4px solid red;
            h3 {
              text-align: center;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            // border: 1px solid red;
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
              letter-spacing: 0em;
              text-align: center;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }
    }

    // Looking for elderly care support? component just below the elderly care with image of an advance lady

    &>.elderly-support {
      background-color: $base-color-2;

      .call-us {
        // border: 2px solid red;
        background-color: $base-color-1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        padding-bottom: 25px;

        &>.call-contact {
          // border: 10px solid blue;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;

          div h3 {
            color: #fff;
            font-size: 16px;
            line-height: 25px;
          }

          &>.icon-contact {
            // border: 10px solid blue;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 20px;

            span {
              // border: 11px solid red;
              border-radius: 5px;
              background-color: #fff;
              width: 100%;
              padding: 15px 15px;
              text-align: center;


              a {
                text-decoration: none;
                color: $base-color;
                font-size: 16px;
                font-weight: 700;
              }
            }

            .phone-number {
              color: $base-color-1;
            }
          }
        }
      }
    }

    &>.personal-care {
      // border: 1px solid red;
      padding: 10px 10px;

      &>.underline-wrap {
        &>.underline-care {
          margin-top: 20px;

          // border: 4px solid red;
          h3 {
            position: relative;
          }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-supporting {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.supporting {
          width: 100%;

          &>.underline-wrap {
            &>.supporting-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              h3 {
                position: relative;
                font-size: 16px;
                line-height: 25px;
                letter-spacing: 0em;
                line-height: 25px;
              }

              h3::after {
                bottom: 0;
                left: 0%;
                width: 40%;
                border-bottom: 3px solid $base-color-1;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
          }
        }
      }

      &>.choose-image {
        // border: 4px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0px 0;

        &>.content {
          width: 100%;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
          }
        }

        &>.image {
          width: 100%;
          img {
            width: 100%;
            height: auto;
          }
        }
      }

      &>.bathing-showering {
        // border: 11px solid red;
        padding: 0 0px;
        margin-bottom: 0px;

        h4 {
          font-size: 16px;

        }

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;

          .contents {
            width: calc((100% / 1) - 0px);

            // &>.dots {
            //   &>.dots-span {
            //   }
            // }
          }
        }
      }
    }

    &>.getIn-touch {
      .call-us {
        background-color: $base-color-1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;

        &>.call-contact {
          width: 100%;
          display: flex;
          justify-content: center;

          div h3 {
            text-align: center;
            font-size: 16px;
            line-height: 30px;
          }

          &>.contact {
            // border: 11px solid red;
            display: flex;
            background-color: #fff;
            border-radius: 5px;
            color: $base-color;
            padding: 15px 25px;
            column-gap: 10px;

            span {
              display: flex;

              a {
                text-decoration: none;
                font-size: 16px;
              }
            }

            .phone-number {
              color: $base-color-1;
              font-weight: 700;
            }
          }
        }
      }
    }

    &>.domiciliary-care {
      // border: 13px solid red;

      &>.domiciliary {
        padding: 0 10px;

        &>.underline-domiciliary {
          padding: 0 10px;

          &>.making-preparation {

            // border: 4px solid red;
            h3 {
              font-size: 16px;
            }
          }
        }

        &>.image-domiciliary {
          // border: 2px solid red;
          padding: 0px 0;
          justify-content: center;

          &>.image {
            width: 100%;
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.demociliary {
            width: 100%;

            h3 {
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>.why-domiciliary {
          h3 {
            // border: 2px solid red;
            font-size: 16px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }

        &>.consider-domiciliary {
          // border: 2px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
          }


          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              column-gap: 0px;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.companionship-care {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {

          // border: 4px solid red;
          h3 {
            position: relative;
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-companionship {
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          &>.underline-wrap {
            &>.companionship-care {

              // border: 4px solid red;
              h3 {
                font-size: 16px;
                line-height: 25px;
              }

              h3::after {
                bottom: 0;
                left: 0%;
                width: 40%;
                border-bottom: 3px solid $base-color-1;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
          }

          p {
            font-size: 16px;
          }
        }
      }

      h3 {
        font-size: 16px;
        line-height: 25px;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.dementia-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   font-size: 16px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.elder-dementia-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.elder {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 11px solid red;
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.personal-assistance {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          display: flex;
          justify-content: center;

          // h3 {
          //   text-align: center;
          //   padding-top: 15px;
          // }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-personal-assistance {
        // border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          p {
            font-size: 16px;
          }

          h3 {
            font-size: 16px;
            line-height: 0px;
          }
        }
      }
    }

    &>.pet-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-bottom: 20px;
        }

        &>.pet-image-care {
          // border: 21px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0px;

          &>.pet-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }

          &>.pet-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.life-care {


      &>.contents {
        // border: 12px solid rgb(5, 3, 116);
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          padding: 10px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
              letter-spacing: 0em;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 0px;
        }
      }
    }

    &>.palliative-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.palliative-image-care {
          flex-direction: column;
          padding: 0px 0;

          &>.palliative-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.palliative-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.hospital-care {

      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }  
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }

        &>.consider-hospital {
          // border: 3px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          &>.paragraph-dots {
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
              }
            }
          }
        }
      }
    }

    &>.overnight-care {

      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.lady-elderly-care {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }

            &>.paragraph-dots {

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  width: calc((100% / 1) - 0px);

                  // .needs-assess {
                  //   color: #00000080;
                  // }
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.couples-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.couples-image-care {
          // border: 2px solid red;
          flex-direction: column;
          justify-content: center;
          padding: 0px 0;

          &>.couples-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.couples-picture {
            img {
              width: 100%;
              height: auto;
              padding-top: 10px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.live-in-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        // &>.underline-wrap {
        //   &>.making-preparation {

        //     // h3 {
        //     //   // border: 4px solid red;
        //     //   font-size: 16px;
        //     //   line-height: 25px;
        //     //   padding-top: 15px;
        //     // }
        //   }
        // }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        &>.wheelchair-live-in-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0;

          &>.wheelchair-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.respite-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.respite-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;
          padding-top: 20px;

          &>.respite-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.respite-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.complex-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.complex-support-plan {
          // border: 2px solid red;
          justify-content: center;
          flex-direction: column;
          padding: 0px 0px;

          &>.complex-support {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                  padding-top: 15px;
                }

                h3::after {
                  left: 0%;
                  width: 50%;
                  border-bottom: 3px solid $base-color-1;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }

            p span {
              color: $base-color-1;
              font-size: 16px;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }

          &>.picture {
            img {
              width: 100%;
            }
          }
        }

        &>.complex-home {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 30px 0;

          &>.picture {
            img {
              width: 100%;
            }
          }

          &>.complex-support-content {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }
        }

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>.stroke-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        // &>.underline-wrap {
        //   &>.making-preparation {
        //     h3 {
        //       // border: 4px solid red;
        //       font-size: 16px;
        //       line-height: 25px;
        //     }
        //   }
        // }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.stroke-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.stroke-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.stroke-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    // colored-last line section
    section {
      &>.colored-last {
        display: none;
        margin-top: 50px;

        &>.first-color {
          background-color: $base-color;
          width: 50%;
          height: 15px;
        }

        &>.second-color {
          background-color: $base-color-2;
          width: 25%;
          height: 15px;
        }

        &>.third-color {
          background-color: $base-color-1;
          width: 25%;
          height: 15px;
        }
      }
    }
  }
}

// MD
@media (min-width: 768px) and (max-width: 991.9px) {
  .care-service-wrap {

.up-icon {
position: relative;

.move-up {
// border: 2px solid red;
transition: ease;
position: fixed;
right: 10px;
bottom: 20px;

.icon-image {
  //  border: 2px solid red;
  width: 45px;
}
}
}

P {
font-size: 18px !important;
}

h3 {
font-size: 35px !important;
}

// The heart icons in the absolute pages
.heart {
width: 25px;
}

// border: 11px solid red;
&>.banner {
// border: 11px solid red;
height: 400px;
display: flex;
justify-content: center;
padding: 10px 10px;

&>.intro-content {
// border: 2px solid red;
width: 100%;
padding: 0px 20px;
line-height: 0px;

.intro-title {
  // border: 2px solid red;
  margin-bottom: 2.5rem;
  font-size: 50px;
  line-height: 60px;
  padding-left: 0px;
}

.intro-title:first-child {
  // border: 12px solid red;
  margin-bottom: 0px;
}

.intro-subtitle {
  // border: 2px solid red;
  font-weight: 700;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 0em;
  color: #fff;
  padding-left: 0px;
}
}
}

&>.line-paragraphy {
// border: 11px solid red;
margin-top: 30px;

p {
padding: 0 10px;
// text-align: center;
}

&>.underline-wrap {
padding: 0 10px;

&>.making-preparation {
  // border: 4px solid red;
  margin-bottom: 30px;

  h3 {
    line-height: 50px;
    text-align: center;
  }

  h3::after {
    left: 0%;
    width: 100%;
  }
}
}

}

// First section with absolute styling
section {

&>.reliable {
// border: 5px solid $base-color;
display: flex;
flex-direction: column;
overflow-y: hidden;
padding: 0 0px;
margin-bottom: 0px;

&>.section-image {

  // border: 1px solid red;
  img {
    // border: 1px solid red;
    width: 100%;
    height: auto;
  }
}

&>.section-background {
  // border: 1px solid red;
  margin-top: -6px;
  position: relative;
  width: 100%;
  height: 500px;
  background-color: $base-color;

  &>.light-background {
    // border: 11px solid red;
    background-color: #FFFFFFB2;
    justify-content: center;
    align-items: center;
    width: 97.5%;
    top: -40px;
    bottom: 10px;
    right: 0px;
    left: 10px;

    &>.contents {
      // border: 2px solid red;
      width: 100%;
      display: flex;
      flex-direction: column;
      // overflow-y: scroll;
      padding: 10px;

      h2 {
        // border: 2px solid red;
        font-weight: 600;
        font-size: 35px !important;
        line-height: 30.86px;
        color: $base-color-1;
        padding-bottom: 30px;
        text-align: center;
      }

      &>.contents-wrap {
        // border: 2px solid red;
        display: flex;
        flex-direction: space-between;
        column-gap: 50px;
        line-height: 25px;
        padding-bottom: 10px;
        font-size: 16px !important;
      }
    }
  }
}
}
}

// <!-- YOUR SEARCH ENDS HERE -->
&>.search-ends {
// border: 3px solid red;
margin-top: 20px;

&>.underline-wrap {
padding: 0 10px;

&>.making-preparation {
  display: flex;
  justify-content: center;

  h3 {
    line-height: 50px;
  }
}
}

p {
// border: 3px solid red;
padding: 0 10px;
text-align: left;
margin-bottom: 30px;
}
}

&>.underline-wrap {
  // border: 2px solid blue;
  padding: 0 10px;
  margin-top: 20px;

  &>.making-preparation {
    display: flex;
    justify-content: center;

    // border: 4px solid red;
    h3 {
      text-align: center;
    }
  }
}

&>.paragraph-dots {
  // border: 11px solid red;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 30px;

  &>.para {
    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      padding-bottom: 30px;
      // text-align: center;
    }
  }

  &>.contents-dots {
    // border: 2px solid blue;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 10px;

    .contents {
      border: 1px solid rgba(0, 0, 0, 0.070);
      border-radius: 8px;
      width: calc((100% / 1) - 0px);
      display: flex;
      flex-wrap: wrap;
      padding: 8px 0;
    }
  }
}

.call-us-wrap {
  // border: 1px solid blue;
  background-color: $base-color-1;
  padding: 10px;

  &>.call-contact {
    // border: 22px solid blue;
    column-gap: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div h3 {
      font-weight: 700;
      line-height: 20px;
      font-size: 16px;
      text-align: center;
    }

    &>.icon-contact {
      // border: 11px solid blue;
      border-radius: 8px;
      // width: 30%;
      padding: 15px 15px;
      column-gap: 10px;

      span {

        a {
          font-size: 14px;
        }
      }
    }
  }
}

&>.elderly-care {
  &>.contents {
    // border: 2px solid red;
    padding: 20px 10px;

    &>.underline-wrap {
      padding: 0 20px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          text-align: center;
        }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
    }

    &>.lady-elderly-care {
      // border: 2px solid red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px 0;

      &>.lady {
        img {
          width: 100%;
        }
      }

      &>.important-care {
        // border: 1px solid red;
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
          letter-spacing: 0em;
          text-align: center;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.paragraph-dots {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            row-gap: 10px;

            .contents {
              border: 1px solid rgba(0, 0, 0, 0.070);
              border-radius: 8px;
              width: calc((100% / 1) - 0px);
              display: flex;
              flex-wrap: wrap;
              padding: 8px 0;
            }
          }
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      font-weight: 700;
      line-height: 25px;
      letter-spacing: 0em;
    }
  }
}

// Looking for elderly care support? component just below the elderly care with image of an advance lady

&>.elderly-support {
  background-color: $base-color-2;

  .call-us {
    // border: 2px solid red;
    background-color: $base-color-1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    padding-bottom: 25px;

    &>.call-contact {
      // border: 10px solid blue;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;

      div h3 {
        color: #fff;
        font-size: 16px;
        line-height: 25px;
      }

      &>.icon-contact {
        // border: 10px solid blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 20px;

        span {
          // border: 11px solid red;
          border-radius: 5px;
          background-color: #fff;
          width: 100%;
          padding: 15px 15px;
          text-align: center;


          a {
            text-decoration: none;
            color: $base-color;
            font-size: 16px;
            font-weight: 700;
          }
        }

        .phone-number {
          color: $base-color-1;
        }
      }
    }
  }
}

&>.personal-care {
  // border: 1px solid red;
  padding: 10px 10px;

  &>.underline-wrap {
    &>.underline-care {
      margin-top: 20px;

      // border: 4px solid red;
      h3 {
        position: relative;
      }
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
  }

  &>.image-supporting {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &>.image {
      img {
        width: 100%;
      }
    }

    &>.supporting {
      width: 100%;

      &>.underline-wrap {
        &>.supporting-care {
          display: flex;
          justify-content: center;
          flex-direction: column;

          h3 {
            position: relative;
            font-size: 16px;
            line-height: 25px;
            letter-spacing: 0em;
            line-height: 25px;
          }

          h3::after {
            bottom: 0;
            left: 0%;
            width: 40%;
            border-bottom: 3px solid $base-color-1;
          }
        }
      }

      h4 {
        width: 100%;
        font-size: 16px;
        letter-spacing: 0em;
      }

      p {
        font-size: 16px;
      }
    }
  }

  &>.choose-image {
    // border: 4px solid red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0px 0;

    &>.content {
      width: 100%;

      h3 {
        font-size: 16px;
        line-height: 25px;
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }
    }

    &>.image {
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  &>.bathing-showering {
    // border: 11px solid red;
    padding: 0 0px;
    margin-bottom: 0px;

    h4 {
      font-size: 16px;

    }

    &>.contents-dots {
      // border: 2px solid blue;
      width: 100%;

      .contents {
        width: calc((100% / 1) - 0px);

        // &>.dots {
        //   &>.dots-span {
        //   }
        // }
      }
    }
  }
}

&>.getIn-touch {
  .call-us {
    background-color: $base-color-1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    &>.call-contact {
      width: 100%;
      display: flex;
      justify-content: center;

      div h3 {
        text-align: center;
        font-size: 16px;
        line-height: 30px;
      }

      &>.contact {
        // border: 11px solid red;
        display: flex;
        background-color: #fff;
        border-radius: 5px;
        color: $base-color;
        padding: 15px 25px;
        column-gap: 10px;

        span {
          display: flex;

          a {
            text-decoration: none;
            font-size: 16px;
          }
        }

        .phone-number {
          color: $base-color-1;
          font-weight: 700;
        }
      }
    }
  }
}

&>.domiciliary-care {
  // border: 13px solid red;

  &>.domiciliary {
    padding: 0 10px;

    &>.underline-domiciliary {
      padding: 0 10px;

      &>.making-preparation {

        // border: 4px solid red;
        h3 {
          font-size: 16px;
        }
      }
    }

    &>.image-domiciliary {
      // border: 2px solid red;
      padding: 0px 0;
      justify-content: center;

      &>.image {
        width: 100%;
        img {
          width: 100%;
          height: auto;
        }
      }

      &>.demociliary {
        width: 100%;

        h3 {
          font-size: 16px;
          line-height: 0px;
          padding-top: 15px;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }
    }

    &>.why-domiciliary {
      h3 {
        // border: 2px solid red;
        font-size: 16px;
      }

      p {
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.consider-domiciliary {
      // border: 2px solid red;
      padding-top: 0px;

      h3 {
        font-size: 16px;
      }


      &>.paragraph-dots {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        padding-bottom: 30px;

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;
          column-gap: 0px;
          row-gap: 10px;

          .contents {
            width: calc((100% / 1) - 0px);
            padding: 8px 0;
          }
        }
      }
    }
  }
}

&>.companionship-care {
  // border: 11px solid red;
  padding: 0 10px;
  padding-bottom: 20px;

  &>.underline-wrap {
    &>.underline-care {

      // border: 4px solid red;
      h3 {
        position: relative;
      }
    }
  }

  p {
    font-size: 16px;
    line-height: 25px;
  }

  &>.image-companionship {
    justify-content: center;

    &>.image {
      img {
        width: 100%;
      }
    }

    &>.companionship {
      width: 100%;

      &>.underline-wrap {
        &>.companionship-care {

          // border: 4px solid red;
          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          h3::after {
            bottom: 0;
            left: 0%;
            width: 40%;
            border-bottom: 3px solid $base-color-1;
          }
        }
      }

      h4 {
        width: 100%;
        font-size: 16px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  h3 {
    font-size: 16px;
    line-height: 25px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
  }
}

&>.dementia-care {
  &>.contents {
    // border: 2px solid red;
    padding: 10px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        // h3 {
        //   font-size: 16px;
        // }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.elder-dementia-care {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0;

      &>.elder {
        img {
          width: 100%;
          height: auto;
        }
      }

      &>.important-care {
        width: 100%;

        h3 {
          // border: 11px solid red;
          font-size: 16px;
          line-height: 0px;
          padding-top: 15px
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.personal-assistance {
  // border: 11px solid red;
  padding: 0 10px;
  padding-bottom: 20px;

  &>.underline-wrap {
    &>.underline-care {
      display: flex;
      justify-content: center;

      // h3 {
      //   text-align: center;
      //   padding-top: 15px;
      // }
    }
  }

  p {
    font-size: 16px;
    line-height: 25px;
  }

  &>.image-personal-assistance {
    // border: 2px solid red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &>.image {
      img {
        width: 100%;
      }
    }

    &>.companionship {
      width: 100%;

      p {
        font-size: 16px;
      }

      h3 {
        font-size: 16px;
        line-height: 0px;
      }
    }
  }
}

&>.pet-care {
  &>.contents {
    // border: 2px solid red;
    padding: 10px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        // h3 {
        //   // border: 4px solid red;
        //   font-size: 16px;
        //   line-height: 25px;
        //   padding-top: 15px;
        // }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
      line-height: 25px;
      padding-bottom: 20px;
    }

    &>.pet-image-care {
      // border: 21px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 10px 0px;

      &>.pet-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 0px;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }

      &>.pet-picture {
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.life-care {


  &>.contents {
    // border: 12px solid rgb(5, 3, 116);
    padding: 0px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        // h3 {
        //   // border: 4px solid red;
        //   font-size: 16px;
        //   line-height: 25px;
        //   padding-top: 15px;
        // }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
    }

    &>.life-care-image {
      // border: 2px solid red;
      display: flex;
      flex-direction: column;
      padding: 10px 0;

      &>.lady {
        img {
          width: 100%;
        }
      }

      &>.life-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 0px;
          letter-spacing: 0em;
          padding-top: 15px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 0px;
    }
  }
}

&>.palliative-care {
  &>.contents {
    // border: 2px solid red;
    padding: 10px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        // h3 {
        //   // border: 4px solid red;
        //   font-size: 16px;
        //   line-height: 25px;
        //   padding-top: 15px;
        // }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.palliative-image-care {
      flex-direction: column;
      padding: 0px 0;

      &>.palliative-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 0px;
        }

        p {
          font-size: 16px;
        }
      }

      &>.palliative-picture {
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.hospital-care {

  &>.contents {
    // border: 2px solid red;
    padding: 0 10px;

    &>.underline-wrap {
      &>.making-preparation {

        // h3 {
        //   // border: 4px solid red;
        //   font-size: 16px;
        //   line-height: 25px;
        //   padding-top: 15px;
        // }  
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.life-care-image {
      // border: 2px solid red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px 0;

      &>.lady {
        img {
          width: 100%;
        }
      }

      &>.life-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }

    &>.consider-hospital {
      // border: 3px solid red;
      padding-top: 0px;

      h3 {
        font-size: 16px;
        line-height: 25px;
      }

      &>.paragraph-dots {
        padding-bottom: 30px;

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;
          row-gap: 10px;

          .contents {
            width: calc((100% / 1) - 0px);
          }
        }
      }
    }
  }
}

&>.overnight-care {

  &>.contents {
    // border: 2px solid red;
    padding: 10px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        // h3 {
        //   // border: 4px solid red;
        //   font-size: 16px;
        //   line-height: 25px;
        //   padding-top: 15px;
        // }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.lady-elderly-care {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px 0;

      &>.lady {
        img {
          width: 100%;
        }
      }

      &>.important-care {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }

        &>.paragraph-dots {

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            .contents {
              width: calc((100% / 1) - 0px);

              // .needs-assess {
              //   color: #00000080;
              // }
            }
          }
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.couples-care {
  &>.contents {
    // border: 2px solid red;
    padding: 0 10px;

    &>.underline-wrap {
      &>.making-preparation {

        // h3 {
        //   // border: 4px solid red;
        //   font-size: 16px;
        //   line-height: 25px;
        //   padding-top: 15px;
        // }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.couples-image-care {
      // border: 2px solid red;
      flex-direction: column;
      justify-content: center;
      padding: 0px 0;

      &>.couples-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        h4 {
          // border: 2px solid red;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }
      }

      &>.couples-picture {
        img {
          width: 100%;
          height: auto;
          padding-top: 10px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.live-in-care {
  &>.contents {
    // border: 2px solid red;
    padding: 20px 10px;

    // &>.underline-wrap {
    //   &>.making-preparation {

    //     // h3 {
    //     //   // border: 4px solid red;
    //     //   font-size: 16px;
    //     //   line-height: 25px;
    //     //   padding-top: 15px;
    //     // }
    //   }
    // }

    p {
      // border: 2px solid red;
      font-size: 16px;
      line-height: 25px;
    }

    &>.wheelchair-live-in-care {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 10px 0;

      &>.wheelchair-picture {
        img {
          width: 100%;
          height: auto;
        }
      }

      &>.important-care {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.respite-care {
  &>.contents {
    // border: 2px solid red;
    padding: 10px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        // h3 {
        //   // border: 4px solid red;
        //   font-size: 16px;
        //   line-height: 25px;
        //   padding-top: 15px;
        // }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.respite-image-care {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0;
      padding-top: 20px;

      &>.respite-picture {
        img {
          width: 100%;
          height: auto;
        }
      }

      &>.respite-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        h4 {
          // border: 2px solid red;
          color: $base-color-1;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

&>.complex-care {
  &>.contents {
    // border: 2px solid red;
    padding: 10px 10px;

    &>.underline-wrap {
      &>.making-preparation {

        // h3 {
        //   // border: 4px solid red;
        //   font-size: 16px;
        //   line-height: 25px;
        //   padding-top: 15px;
        // }
      }
    }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.complex-support-plan {
      // border: 2px solid red;
      justify-content: center;
      flex-direction: column;
      padding: 0px 0px;

      &>.complex-support {
        width: 100%;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }

            h3::after {
              left: 0%;
              width: 50%;
              border-bottom: 3px solid $base-color-1;
            }
          }
        }

        h4 {
          // border: 2px solid red;
          color: $base-color-1;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }

        p span {
          color: $base-color-1;
          font-size: 16px;
        }

        &>.paragraph-dots {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            row-gap: 10px;

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            .contents {
              border: 1px solid rgba(0, 0, 0, 0.070);
              border-radius: 8px;
              width: calc((100% / 1) - 0px);
              display: flex;
              flex-wrap: wrap;
              padding: 8px 0;
            }
          }
        }
      }

      &>.picture {
        img {
          width: 100%;
        }
      }
    }

    &>.complex-home {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 30px 0;

      &>.picture {
        img {
          width: 100%;
        }
      }

      &>.complex-support-content {
        width: 100%;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
            }
          }
        }

        h4 {
          // border: 2px solid red;
          color: $base-color-1;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }

        &>.paragraph-dots {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            row-gap: 10px;

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            .contents {
              border: 1px solid rgba(0, 0, 0, 0.070);
              border-radius: 8px;
              width: calc((100% / 1) - 0px);
              display: flex;
              flex-wrap: wrap;
              padding: 8px 0;
            }
          }
        }
      }
    }

    h3 {
      // border: 1px solid red;
      font-size: 16px;
      line-height: 25px;
    }

    p {
      font-size: 16px;
    }
  }
}

&>.stroke-care {
  &>.contents {
    // border: 2px solid red;
    padding: 20px 10px;

    // &>.underline-wrap {
    //   &>.making-preparation {
    //     h3 {
    //       // border: 4px solid red;
    //       font-size: 16px;
    //       line-height: 25px;
    //     }
    //   }
    // }

    p {
      // border: 2px solid red;
      font-size: 16px;
    }

    &>.stroke-image-care {
      // border: 2px solid red;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0;

      &>.stroke-content {
        width: 100%;

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        h4 {
          // border: 2px solid red;
          color: $base-color-1;
          font-size: 16px;
        }

        p {
          font-size: 16px;
        }
      }

      &>.stroke-picture {
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    &>h3 {
      // border: 1px solid green;
      font-size: 16px;
      line-height: 25px;
    }
  }
}

// colored-last line section
section {
  &>.colored-last {
    display: none;
    margin-top: 50px;

    &>.first-color {
      background-color: $base-color;
      width: 50%;
      height: 15px;
    }

    &>.second-color {
      background-color: $base-color-2;
      width: 25%;
      height: 15px;
    }

    &>.third-color {
      background-color: $base-color-1;
      width: 25%;
      height: 15px;
    }
  }
}
}
}

// LG
@media (min-width: 992px) and (max-width: 1200.9px) {
  .care-service-wrap {
    // border: 1px solid red;

    &>.underline-wrap {
      padding: 0 20px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // // border: 4px solid red;
        // h3 {
        //   position: relative;
        //   font-size: 30px;
        //   font-weight: 700;
        //   line-height: 60px;
        //   letter-spacing: 0em;
        // }
      }
    }

    &>.paragraph-dots {
      // border: 11px solid red;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      margin-bottom: 30px;

      &>.para {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
          padding-bottom: 30px;
        }
      }

      &>.contents-dots {
        // border: 2px solid blue;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 10px;

        .contents {
          border: 1px solid rgba(0, 0, 0, 0.070);
          border-radius: 8px;
          width: calc((100% / 4) - 33px);
          display: flex;
          flex-wrap: wrap;
          padding: 8px 0;
        }
      }
    }

    .call-us-wrap {
      // border: 12px solid red;
      background-color: $base-color-1;
      padding: 0 20px;

      &>.call-contact {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        h3 {
          color: #fff;
          font-weight: 400;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }

        &>.icon-contact {
          // border: 11px solid red;
          background-color: #fff;
          border-radius: 20px;
          color: $base-color;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px 20px;
          column-gap: 10px;

          span {
            display: flex;

            a {
              text-decoration: none;
              font-size: 16px;
            }
          }

          .phone-number {
            color: $base-color-1;
            font-weight: 700;
          }
        }
      }
    }

    &>.elderly-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          column-gap: 50px;
          padding: 30px 0;

          &>.lady {
            img {
              width: 450px;
            }
          }

          &>.important-care {
            // border: 22px solid red;
            width: 600px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 2) - 17px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    // Looking for elderly care support? component just below the elderly care with image of an advance lady

    &>.elderly-support {
      background-color: $base-color-2;

      .call-us {
        // border: 2px solid red;
        background-color: $base-color-1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;

        &>.call-contact {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          flex-wrap: wrap;
          column-gap: 20px;

          div h3 {
            color: #fff;
            font-weight: 400;
            font-size: 22px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: 0em;
          }

          &>.icon-contact {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 30px;

            span {
              // border: 11px solid red;
              border-radius: 20px;
              background-color: #fff;
              padding: 15px 20px;


              a {
                text-decoration: none;
                color: $base-color;
                font-size: 16px;
                font-weight: 700;
              }
            }

            .phone-number {
              color: $base-color-1;
            }
          }
        }
      }
    }

    &>.personal-care {
      // border: 1px solid red;
      padding: 0 20px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;

          // // border: 4px solid red;
          // h3 {
          //   position: relative;
          //   font-size: 30px;
          //   font-weight: 700;
          //   line-height: 60px;
          //   letter-spacing: 0em;
          // }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-supporting {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 450px;
          }
        }

        &>.supporting {
          width: 500px;

          &>.underline-wrap {
            &>.supporting-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              // // border: 4px solid red;
              // h3 {
              //   position: relative;
              //   font-size: 30px;
              //   font-weight: 700;
              //   line-height: 48px;
              //   letter-spacing: 0em;
              // }

            }
          }

          h4 {
            width: 450px;
            color: $base-color-1;
            font-size: 18px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }
      }

      &>.choose-image {
        // border: 4px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 30px 0;

        &>.content {
          width: 500px;

          h3 {
            font-size: 25px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }

        &>.image {
          img {
            width: 450px;
            height: 650px;
          }
        }
      }

      &>.bathing-showering {
        // border: 11px solid red;
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        margin-bottom: 30px;

        h4 {
          color: $base-color;
          font-size: 20px;
          font-weight: 600;
          line-height: 25px;
          letter-spacing: 0em;

        }

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          column-gap: 30px;
          row-gap: 10px;

          .contents {
            border-radius: 8px;
            padding: 8px 0;

            &>.dots {
              &>.dots-span {
                // border: 2px solid red;
                display: flex;
                align-items: center;
              }
            }
          }
        }
      }
    }

    &>.getIn-touch {
      .call-us {
        background-color: $base-color-1;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;

        &>.call-contact {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          column-gap: 50px;

          div h3 {
            // border: 2px solid red;
            color: #fff;
            font-size: 22px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;

          }

          &>.contact {
            // border: 11px solid red;
            background-color: #fff;
            border-radius: 20px;
            color: $base-color;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px 20px;
            column-gap: 10px;

            span {
              display: flex;

              a {
                text-decoration: none;
                font-size: 16px;
              }
            }

            .phone-number {
              color: $base-color-1;
              font-weight: 700;
            }
          }
        }
      }
    }

    &>.domiciliary-care {
      &>.domiciliary {
        padding: 0 20px;

        &>.underline-domiciliary {
          padding: 0 20px;

          &>.making-preparation {
            display: flex;
            justify-content: center;

            // // border: 4px solid red;
            // h3 {
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        &>.image-domiciliary {
          // border: 2px solid red;
          padding: 30px 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          &>.image {
            img {
              width: 450px;
              height: 550px;
            }
          }

          &>.demociliary {
            width: 500px;

            h3 {
              font-size: 25px;
              font-weight: 700;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>.why-domiciliary {
          h3 {
            font-size: 25px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }

        &>.consider-domiciliary {
          padding-top: 10px;

          h3 {
            font-size: 25px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }


          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            padding-bottom: 50px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              column-gap: 30px;
              row-gap: 10px;

              .contents {
                border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 1) - 17px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.companionship-care {
      // border: 1px solid red;
      padding: 0 20px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-companionship {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        &>.image {
          img {
            width: 450px;
          }
        }

        &>.companionship {
          width: 500px;

          &>.underline-wrap {
            &>.companionship-care {
              display: flex;
              justify-content: center;
              flex-direction: column;
            }
          }

          h4 {
            width: 450px;
            color: $base-color-1;
            font-size: 18px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }
      }

      h3 {
        font-size: 25px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 0em;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.dementia-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.elder-dementia-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.elder {
            img {
              width: 450px;
              height: 550px;
            }
          }

          &>.important-care {
            width: 500px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.personal-assistance {
      // border: 1px solid red;
      padding: 0 20px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;

          // // border: 4px solid red;
          // h3 {
          //   position: relative;
          //   font-size: 30px;
          //   font-weight: 700;
          //   line-height: 60px;
          //   letter-spacing: 0em;
          // }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-personal-assistance {
        // border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 450px;
          }
        }

        &>.companionship {
          width: 500px;

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }

          h3 {
            font-size: 25px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }
      }
    }

    &>.pet-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.pet-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.pet-content {
            width: 500px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }

          &>.pet-picture {
            img {
              width: 450px;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.life-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.lady {
            img {
              width: 450px;
            }
          }

          &>.life-content {
            width: 500px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.palliative-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.palliative-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.palliative-content {
            width: 500px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }

          &>.palliative-picture {
            img {
              width: 450px;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.hospital-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.lady {
            img {
              width: 450px;
            }
          }

          &>.life-content {
            width: 500px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }

        &>.consider-hospital {
          padding-top: 10px;

          h3 {
            font-size: 25px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }

          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            padding-bottom: 50px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              column-gap: 30px;
              row-gap: 10px;

              .contents {
                border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 1) - 17px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.overnight-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.lady {
            img {
              width: 450px;
            }
          }

          &>.important-care {
            width: 500px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 25px;
                  letter-spacing: 0em;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 17px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;

                  .needs-assess {
                    color: #00000080;
                  }
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.couples-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.couples-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.couples-content {
            width: 500px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 18px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }

          &>.couples-picture {
            img {
              width: 450px;
              height: 800px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.live-in-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.wheelchair-live-in-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.wheelchair-picture {
            img {
              width: 450px;
              height: 550px;
            }
          }

          &>.important-care {
            width: 500px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.respite-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.respite-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.respite-picture {
            img {
              width: 450px;
              height: 800px;
            }
          }

          &>.respite-content {
            width: 500px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 18px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.complex-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.complex-support-plan {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.complex-support {
            width: 500px;

            &>.underline-wrap {
              &>.making-preparation {
                // display: flex;
                // justify-content: center;
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 18px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p span {
              color: $base-color-1;
              font-size: 16px;
              font-weight: 600;
              line-height: 25px;
              letter-spacing: 0em;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 25px;
                  letter-spacing: 0em;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 3) - 30px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;

                  .needs-assess {
                    color: #00000080;
                  }
                }
              }
            }
          }

          &>.picture {
            img {
              width: 450px;
            }
          }
        }

        &>.complex-home {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.picture {
            img {
              width: 450px;
            }
          }

          &>.complex-support-content {
            width: 500px;

            &>.underline-wrap {
              &>.making-preparation {
                // display: flex;
                // justify-content: center;

                h3 {
                  // border: 4px solid red;
                  font-size: 22px;
                  font-weight: 700;
                  line-height: 40px;
                  letter-spacing: 0em;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 20px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 25px;
                  letter-spacing: 0em;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 30px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;

                  .needs-assess {
                    color: #00000080;
                  }
                }
              }
            }
          }
        }

        h3 {
          // border: 1px solid red;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }
    }

    &>.stroke-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.stroke-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 0;

          &>.stroke-content {
            width: 500px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 18px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p span {
              font-weight: 700;
            }
          }

          &>.stroke-picture {
            img {
              width: 450px;
              height: 800px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    // colored-last line section
section {
  &>.colored-last {
    display: none;
    margin-top: 50px;

    &>.first-color {
      background-color: $base-color;
      width: 50%;
      height: 15px;
    }

    &>.second-color {
      background-color: $base-color-2;
      width: 25%;
      height: 15px;
    }

    &>.third-color {
      background-color: $base-color-1;
      width: 25%;
      height: 15px;
    }
  }
}
  }
}

// XL
@media (min-width: 1201px) and (max-width: 1499.9px) {
  .care-service-wrap {
    // border: 1px solid red;

    &>.underline-wrap {
      padding: 0 20px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          color: $base-color-1;
          position: relative;
          font-size: 30px;
          font-weight: 600;
          line-height: 50px;
          letter-spacing: 0em;
        }

        h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -5%;
          width: 110%;
          border-bottom: 2px solid $base-color-1;
          border-radius: 10px;
        }
      }
    }

    &>.paragraph-dots {
      // border: 11px solid red;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      margin-bottom: 30px;

      &>.para {
        p {
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
          padding-bottom: 30px;
          color: #00000080;
        }
      }

      &>.contents-dots {
        // border: 2px solid blue;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 10px;
        color: #00000080;

        .contents {
          // border: 1px solid rgba(0, 0, 0, 0.070);
          border-radius: 8px;
          width: calc((100% / 4) - 33px);
          display: flex;
          flex-wrap: wrap;
          padding: 8px 0;
        }
      }
    }

    .call-us-wrap {
      // border: 12px solid red;
      background-color: $base-color-1;
      padding: 0 20px;

      &>.call-contact {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        h3 {
          color: #fff;
          font-weight: 400;
          font-size: 25px;
          font-weight: 600;
          line-height: 40px;
          letter-spacing: 0em;
        }

        &>.icon-contact {
          // border: 11px solid red;
          background-color: #fff;
          border-radius: 20px;
          color: $base-color;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          column-gap: 10px;

          span {
            display: flex;

            a {
              text-decoration: none;
              font-size: 16px;
            }
          }

          .phone-number {
            color: $base-color-1;
            font-weight: 600;
          }
        }
      }
    }

    &>.elderly-care {
      // background-image: linear-gradient(148.01deg, rgba(218, 94, 66, 0.2) -0.47%, rgba(218, 94, 66, 0.4) 56.24%);
      // ;

      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              font-weight: 600;
              line-height: 50px;
              letter-spacing: 0em;
              color: $base-color-1;
            }

            h3::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: -5%;
              width: 110%;
              border-bottom: 2px solid $base-color-1;
              border-radius: 10px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          column-gap: 20px;
          padding: 30px 0;

          &>.lady {
            img {
              width: 500px;
            }
          }

          &>.important-care {
            width: 750px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 2) - 17px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    // Looking for elderly care support? component just below the elderly care with image of an advance lady

    &>.elderly-support {
      background-color: $base-color-2;

      .call-us {
        // border: 2px solid red;
        background-color: $base-color-1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;

        &>.call-contact {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          flex-wrap: wrap;
          column-gap: 20px;

          div h3 {
            color: #fff;
            font-weight: 400;
            font-size: 22px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: 0em;
          }

          &>.icon-contact {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 30px;

            span {
              // border: 11px solid red;
              border-radius: 20px;
              background-color: #fff;
              padding: 10px 20px;


              a {
                text-decoration: none;
                font-size: 16px;
                font-weight: 700;
              }
            }

            .phone-number {
              color: $base-color-1;
            }
          }
        }
      }
    }

    &>.personal-care {
      // border: 1px solid red;
      padding: 0 20px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;

          // border: 4px solid red;
          h3 {
            position: relative;
            font-size: 30px;
            font-weight: 700;
            letter-spacing: 0em;
          }

          h3::after {
            content: '';
            position: absolute;
          }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-supporting {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 550px;
          }
        }

        &>.supporting {
          width: 600px;

          &>.underline-wrap {
            &>.supporting-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              // border: 4px solid red;
              h3 {
                position: relative;
                font-size: 30px;
                font-weight: 700;
                line-height: 40px;
                letter-spacing: 0em;
              }

              h3::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0%;
                width: 30%;
              }
            }
          }

          h4 {
            width: 450px;
            font-size: 18px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }
      }

      &>.choose-image {
        // border: 4px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 30px 0;
        column-gap: 20px;

        &>.content {
          width: 600px;

          h3 {
            font-size: 25px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }

        &>.image {
          img {
            width: 550px;
            height: 650px;
          }
        }
      }

      &>.bathing-showering {
        // border: 11px solid red;
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        margin-bottom: 30px;

        h4 {
          font-size: 20px;
          font-weight: 600;
          line-height: 25px;
          letter-spacing: 0em;

        }

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          column-gap: 30px;
          row-gap: 10px;

          .contents {
            border-radius: 8px;
            padding: 8px 0;

            &>.dots {
              &>.dots-span {
                // border: 2px solid red;
                display: flex;
                align-items: center;
              }
            }
          }
        }
      }
    }

    &>.getIn-touch {
      .call-us {
        background-color: $base-color-1;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;

        &>.call-contact {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          column-gap: 50px;

          div h3 {
            // border: 2px solid red;
            color: #fff;
            font-size: 22px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;

          }

          &>.contact {
            // border: 11px solid red;
            background-color: #fff;
            border-radius: 20px;
            color: $base-color;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 20px;
            column-gap: 10px;

            span {
              display: flex;

              a {
                text-decoration: none;
                font-size: 16px;
              }
            }

            .phone-number {
              color: $base-color-1;
              font-weight: 700;
            }
          }
        }
      }
    }

    &>.domiciliary-care {
      &>.domiciliary {
        padding: 0 20px;

        &>.underline-domiciliary {
          padding: 0 20px;

          &>.making-preparation {
            display: flex;
            justify-content: center;

            // border: 4px solid red;
            h3 {
              position: relative;
              font-size: 30px;
              font-weight: 700;
              line-height: 50px;
              letter-spacing: 0em;
            }

            // h3::after {
            //   content: '';
            //   position: absolute;
            //   bottom: 0;
            //   left: 10%;
            //   width: 80%;
            // }
          }
        }

        &>.image-domiciliary {
          // border: 2px solid red;
          padding: 30px 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          colum-gap: 20px;

          &>.image {
            img {
              width: 550px;
              height: 550px;
            }
          }

          &>.demociliary {
            width: 600px;

            h3 {
              font-size: 25px;
              font-weight: 700;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>.why-domiciliary {
          h3 {
            font-size: 25px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }

        &>.consider-domiciliary {
          padding-top: 10px;

          h3 {
            font-size: 25px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }


          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            padding-bottom: 50px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              column-gap: 30px;
              row-gap: 10px;

              .contents {
                border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 1) - 17px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.companionship-care {
      // border: 1px solid red;
      padding: 0 20px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;

          // border: 4px solid red;
          h3 {
            position: relative;
            font-size: 30px;
            letter-spacing: 0em;
          }

          // h3::after {
          //   content: '';
          //   position: absolute;
          //   bottom: 0;
          //   left: 10%;
          //   width: 80%;
          //   border-radius: 10px;
          // }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-companionship {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 550px;
          }
        }

        &>.companionship {
          width: 600px;

          &>.underline-wrap {
            &>.companionship-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              // border: 4px solid red;
              h3 {
                position: relative;
                font-size: 30px;
                font-weight: 700;
                letter-spacing: 0em;
              }

              h3::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0%;
                width: 30%;
                border-radius: 10px;
              }
            }
          }

          h4 {
            width: 450px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }
      }

      h3 {
        font-size: 25px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 0em;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.dementia-care {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              letter-spacing: 0em;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.elder-dementia-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.elder {
            img {
              width: 500px;
              height: 550px;
            }
          }

          &>.important-care {
            width: 650px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.personal-assistance {
      // border: 1px solid red;
      padding: 0 20px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;

          // border: 4px solid red;
          h3 {
            position: relative;
            font-size: 30px;
            font-weight: 700;
            line-height: 60px;
            letter-spacing: 0em;
          }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-personal-assistance {
        // border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 550px;
          }
        }

        &>.companionship {
          width: 600px;

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }

          h3 {
            font-size: 25px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }
      }
    }

    &>.pet-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              line-height: 50px;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.pet-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.pet-content {
            width: 650px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }

          &>.pet-picture {
            img {
              width: 500px;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.life-care {


      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              font-weight: 700;
              line-height: 60px;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.lady {
            img {
              width: 500px;
            }
          }

          &>.life-content {
            // width: 750px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.palliative-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              font-weight: 700;
              line-height: 60px;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.palliative-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.palliative-content {
            // width: 750px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }

          &>.palliative-picture {
            img {
              width: 500px;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.hospital-care {


      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.lady {
            img {
              width: 500px;
            }
          }

          &>.life-content {
            width: 650px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }

        &>.consider-hospital {
          padding-top: 10px;

          h3 {
            font-size: 25px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }

          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            padding-bottom: 50px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              column-gap: 30px;
              row-gap: 10px;

              .contents {
                border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 1) - 17px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.overnight-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.lady {
            img {
              width: 500px;
            }
          }

          &>.important-care {
            width: 650px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 25px;
                  letter-spacing: 0em;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 17px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;

                  .needs-assess {
                    color: #00000080;
                  }
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.couples-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              font-weight: 700;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.couples-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.couples-content {
            width: 650px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            h4 {
              // border: 2px solid red;
              font-size: 18px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }

          &>.couples-picture {
            img {
              width: 500px;
              height: 800px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.live-in-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.wheelchair-live-in-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.wheelchair-picture {
            img {
              width: 500px;
              height: auto;
            }
          }

          &>.important-care {
            width: 650px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.respite-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.respite-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.respite-picture {
            img {
              width: 500px;
              height: 800px;
            }
          }

          &>.respite-content {
            width: 650px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            h4 {
              // border: 2px solid red;
              font-size: 18px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.complex-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.complex-support-plan {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.complex-support {
            width: 650px;

            // &>.underline-wrap {
            //   &>.making-preparation {
            //     // display: flex;
            //     // justify-content: center;

            //     h3 {
            //       // border: 4px solid red;
            //       position: relative;
            //       font-size: 30px;
            //       font-weight: 700;
            //       line-height: 60px;
            //       letter-spacing: 0em;
            //     }

            //     h3::after {
            //       content: '';
            //       position: absolute;
            //       bottom: 0;
            //       left: 0;
            //       width: 50%;
            //       border-bottom: 7px solid $base-color-1;
            //       border-radius: 10px;
            //     }
            //   }
            // }

            h4 {
              // border: 2px solid red;
              font-size: 18px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p span {
              font-size: 16px;
              font-weight: 600;
              line-height: 25px;
              letter-spacing: 0em;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 25px;
                  letter-spacing: 0em;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 3) - 30px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;

                  .needs-assess {
                    color: #00000080;
                  }
                }
              }
            }
          }

          &>.picture {
            img {
              width: 500px;
              height: auto;
            }
          }
        }

        &>.complex-home {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.picture {
            img {
              width: 500px;
            }
          }

          &>.complex-support-content {
            width: 650px;

            &>.underline-wrap {
              &>.making-preparation {
                // display: flex;
                // justify-content: center;

                h3 {
                  // border: 4px solid red;
                  font-size: 22px;
                  font-weight: 700;
                  line-height: 40px;
                  letter-spacing: 0em;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              font-size: 20px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 25px;
                  letter-spacing: 0em;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 30px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;

                  .needs-assess {
                    color: #00000080;
                  }
                }
              }
            }
          }
        }

        h3 {
          // border: 1px solid red;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }
    }

    &>.stroke-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.stroke-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.stroke-content {
            width: 650px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 18px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p span {
              font-weight: 700;
            }
          }

          &>.stroke-picture {
            // img {
            //   width: 500px;
            //   height: auto;
            // }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }
  }
}

// XXL
@media (min-width: 1500px) {
  .care-service-wrap {
    // border: 11px solid red;
    .up-icon {
      position: relative;

      .move-up {
        // border: 2px solid red;
        transition: ease;
        position: fixed;
        right: 30px;
        bottom: 20px;

        .icon-image {
          //  border: 2px solid red;
           width: 100px;
           height: 80px;
        }
      }
    }

      // The heart icons in the absolute pages
      .heart {
      width: 80px;
      height: 50px;
    }

    P {
      font-size: 28px !important;
      line-height: 50px !important;
    }

    h2 {
      font-size: 40px;
    }

    h3 {
      font-size: 60px !important;
      line-height: 80px !important;
    }

    &>.banner {
    height: 500px;
    
    &>.intro-content {
      line-height: 20px;

      .intro-title {
        // border: 2px solid red;
        font-size: 70px;
      }

      .intro-subtitle {
        font-size: 100px;
        padding-left: 300px;
      }

      .discover-btn {
        // border: 1px solid $base-color;
        padding: 15px 25px;
        text-decoration: none;
        font-size: 15px;
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
    
  &>.line-paragraphy {
    margin-top: 50px;

    p {
      padding: 0 20px;
      // text-align: center;
    }

    &>.underline-wrap {
      padding: 0 20px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          color: $base-color-1;
          position: relative;
          font-weight: 600;
          font-size: 45px;
          line-height: 60px;
          letter-spacing: 0em;
        }

        h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -5%;
          width: 110%;
          border-bottom: 2px solid $base-color-1;
        }
      }
    }

  }

  // First- Section---------------
  // <!-- Relative and Absolute section -->

  section {

    &>.reliable {
      // border: 5px solid $base-color;
      display: flex;
      // height: fit-content;
      justify-content: center;
      overflow-y: hidden;
      padding: 0 20px;
      margin-bottom: 0px;

      &>.section-image {

        // border: 1px solid red;
        img {
          // border: 1px solid red;
          width: 1000px !important;
          height: 700px !important;
        }
      }

      &>.section-background {
        // border: 1px solid red;
        position: relative;
        width: 1000px !important;
        height: 700px !important;
        background-color: $base-color;

        &>.light-background {
          // border: 1px solid red;
          background-color: #FFFFFFB2;
          width: 1000px !important;
          // min-height: 200px;
          position: absolute;
          top: 20px;
          bottom: 20px;
          right: 20px;
          display: flex;
          align-content: center;
          justify-content: flex-end;

          &>.contents {
            // border: 2px solid red;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 20px;

            h2 {
              font-weight: 600;
              line-height: 50.86px;
              color: $base-color-1;
              margin-bottom: 20px;
            }

            &>.contents-wrap {
              // border: 2px solid red;
              display: flex;
              // justify-content: center;
              column-gap: 50px;

              &>.first-section,
              .second-section {
                div {
                  display: flex;
                  column-gap: 5px;

                  span {
                  //  border: 2px solid red;
                  font-size: 23px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // <!-- YOUR SEARCH ENDS HERE -->
  &>.search-ends {
    // border: 3px solid red;
    margin-top: 50px;

    &>.underline-wrap {
      padding: 0 20px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          color: $base-color-1;
          position: relative;
          font-size: 30px;
          font-weight: 600;
          line-height: 50px;
          letter-spacing: 0em;
        }

        h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -5%;
          width: 110%;
          border-bottom: 2px solid $base-color-1;
        }
      }
    }

    p {
      // border: 3px solid red;
      padding: 0 20px;
      text-align: center;
      padding-bottom: 30px;
    }
  }

  // Second- Section---------------
  // <!-- Relative and Absolute section -->

  section {

    &>.reliable {
      // border: 5px solid $base-color;
      display: flex;
      // height: fit-content;
      overflow-y: hidden;
      padding: 0 20px;
      margin-bottom: 0px;

      &>.section-image {

        // border: 1px solid red;
        img {
          // border: 1px solid red;
          width: 650px;
          height: 450px;
        }
      }

      &>.section-background {
        // border: 1px solid red;
        position: relative;
        width: 1500px;
        height: 450px;
        background-color: $base-color;

        &>.light-background {
          // border: 1px solid red;
          background-color: #FFFFFFB2;
          width: 850px;
          // min-height: 200px;
          position: absolute;
          top: 20px;
          bottom: 20px;
          right: 20px;
          display: flex;
          align-content: center;
          justify-content: flex-end;

          &>.contents {
            // border: 2px solid red;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 20px;

            h2 {
              font-weight: 600;
              line-height: 50.86px;
              color: $base-color-1;
              margin-bottom: 30px;
              text-align: center;
            }

            &>.contents-wrap {
              // border: 2px solid red;
              display: flex;
              // justify-content: center;
              column-gap: 50px;

              &>.first-section,
              .second-section {
                display: flex;
                flex-direction: column;
                row-gap: 10px;

                div {
                  // border: 2px solid red;
                  display: flex;
                  column-gap: 5px;
                }
              }
            }
          }
        }
      }
    }
  }

    &>.underline-wrap {
      padding: 0 200px;

      &>.making-preparation {
        display: flex;
        justify-content: center;
      }
    }

    &>.paragraph-dots {
      // border: 11px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 200px;
      margin-bottom: 30px;

      &>.para {
        p {
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
          padding-bottom: 30px;
        }
      }

      &>.contents-dots {
        // border: 2px solid blue;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 10px;
        font-size: 22px;

        .contents {
          // border: 1px solid rgba(0, 0, 0, 0.070);
          border-radius: 8px;
          width: calc((100% / 4) - 33px);
          display: flex;
          flex-wrap: wrap;
          padding: 8px 0;
        }
      }
    }

    .call-us-wrap {
      // border: 12px solid red;
      background-color: $base-color-1;
      padding: 0 200px;

      &>.call-contact {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        h3 {
          color: #fff;
          font-weight: 400;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }

        &>.icon-contact {
          // border: 11px solid red;
          background-color: #fff;
          border-radius: 20px;
          color: $base-color;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 30px;
          column-gap: 10px;

          span {
            display: flex;

            a {
              text-decoration: none;
              font-size: 22px;
            }
          }

          .phone-number {
            color: $base-color-1;
            font-weight: 700;
          }
        }
      }
    }

    &>.elderly-care {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          column-gap: 100px;
          padding: 30px 0;

          &>.lady {
            img {
              width: 650px;
              height: auto;
            }
          }

          &>.important-care {
            width: 750px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;
                font-size: 20px;

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 2) - 17px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    // Looking for elderly care support? component just below the elderly care with image of an advance lady

    &>.elderly-support {
      .call-us {
        padding: 10px 200px;

        &>.call-contact {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          flex-wrap: wrap;
          column-gap: 20px;

          div h3 {
            color: #fff;
            font-weight: 400;
            font-size: 22px;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: 0em;
          }

          &>.icon-contact {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 30px;

            span {
              // border: 11px solid red;
              border-radius: 20px;
              background-color: #fff;
              padding: 20px 30px;


              a {
                text-decoration: none;
                color: $base-color;
                font-size: 22px;
                font-weight: 700;
              }
            }

            .phone-number {
              color: $base-color-1;
            }
          }
        }
      }
    }

    &>.personal-care {
      // border: 11px solid red;
      padding: 0 200px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;
        }
      }

      .image-supporting,
      .choose-image {
        justify-content: center;
        column-gap: 200px;

        &>.image {
        img {
          width: 550px;
          height: 550px;
        }
      }
      }

      &>.bathing-showering {
        // border: 11px solid red;
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        margin-bottom: 30px;

        h4 {
          font-size: 30px;
          font-weight: 600;
          line-height: 25px;
          letter-spacing: 0em;

        }

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          column-gap: 30px;
          row-gap: 10px;

          .contents {
            // border: 1px solid rgba(0, 0, 0, 0.070);
            border-radius: 8px;
            width: calc((100% / 4) - 33px);
            padding: 8px 0;

            &>.dots {
              &>.dots-span {
                // border: 2px solid red;
                display: flex;
                align-items: center;
                font-size: 22px;
              }
            }
          }
        }
      }
    }

    &>.getIn-touch {
      .call-us {
        background-color: $base-color-1;
        display: flex;
        justify-content: space-between;
        padding: 10px 200px;

        &>.call-contact {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        column-gap: 50px;

        div h3 {
          // border: 2px solid red;
          color: #fff;
          font-size: 22px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0em;

        }

        &>.contact {
          // border: 11px solid red;
          padding: 20px 35px;

          span {
            display: flex;

            a {
              text-decoration: none;
              font-size: 22px;
            }
          }
        }
      }
      }
    }

    &>.domiciliary-care {
      &>.domiciliary {
        padding: 0 200px;

        &>.underline-domiciliary {
          padding: 0 20px;

          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .image-domiciliary {
          justify-content: center;
          column-gap: 100px;
        }

        &>.consider-domiciliary {
        padding-top: 10px;

        h3 {
          font-size: 25px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0em;
        }


        &>.paragraph-dots {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          padding-bottom: 50px;

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            row-gap: 10px;
            font-size: 22px;
          }
        }
      }
      }
    }

    &>.companionship-care {
      // border: 11px solid red;
      padding: 0 200px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-companionship {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 200px;

        &>.image {
          img {
            width: 550px;
          }
        }

        &>.companionship {
          width: 600px;

          &>.underline-wrap {
            &>.companionship-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              // border: 4px solid red;
              h3 {
                position: relative;
                font-size: 30px;
                font-weight: 700;
                line-height: 48px;
                letter-spacing: 0em;
              }

              h3::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0%;
                width: 30%;
                border-bottom: 7px solid $base-color-1;
                border-radius: 10px;
              }
            }
          }

          h4 {
            width: 450px;
            color: $base-color-1;
            font-size: 18px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }
      }

      h3 {
        font-size: 25px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 0em;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.dementia-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;


        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        &>.elder-dementia-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          column-gap: 300px;
          padding: 30px 0;

          &>.elder {
            img {
              width: 500px;
              height: 550px;
            }
          }

          &>.important-care {
            width: 650px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.personal-assistance {
      // border: 1px solid red;
      padding: 0 200px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;
        }
      }

      &>.image-personal-assistance {
        // border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 300px;

        &>.image {
          img {
            width: 550px;
          }
        }

        &>.companionship {
          width: 600px;

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }

          h3 {
            font-size: 25px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }
      }
    }

    &>.pet-care {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .pet-image-care {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.life-care {


      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;


        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }


        .life-care-image {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.palliative-care {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .palliative-image-care {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.hospital-care {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .life-care-image {
          justify-content: center;
          column-gap: 300px;
        }

        .paragraph-dots {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          padding-bottom: 50px;

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            row-gap: 10px;
            font-size: 22px;
          }
        }
      }
    }

    &>.overnight-care {
      &>.contents {
        // border: 12px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .lady-elderly-care {
          justify-content: center;
          column-gap: 300px;

          .important-care {
          width: 650px;

          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              column-gap: 30px;
              row-gap: 10px;

              h4 {
                // border: 2px solid red;
                font-size: 25px;
              }

              .contents {
                font-size: 22px;
              }
            }
          }
        }
        }
      }
    }

    &>.couples-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .couples-image-care {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.live-in-care {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .wheelchair-live-in-care {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.respite-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .respite-image-care {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.complex-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .complex-support-plan {
          justify-content: center;
          column-gap: 300px;

          p span {
            // border: 2px solid red;
            color: $base-color-2;
            font-size: 22px !important;
            font-weight: 600;
            line-height: 25px;
            letter-spacing: 0em;
          }

          h4 {
            // border: 2px solid red;
            color: $base-color-2;
            font-size: 30px !important;
            line-height: 35px !important;
          }

          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              column-gap: 30px;
              row-gap: 10px;
              font-size: 22px !important;

              h4 {
                // border: 2px solid red;
                display: none;
                color: $base-color-1;
                font-size: 25px;
              }

              .contents {
                // border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 3) - 30px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;
              }
            }
          }
        }

        .complex-home {
          justify-content: center;
          column-gap: 300px;
            // border: 2px solid red;

          h4 {
            // border: 2px solid red;
            color: $base-color-2;
            font-size: 25px;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0em;
          }

          .paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              column-gap: 30px;
              row-gap: 10px;
              font-size: 22px;

              .contents {
                border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 1) - 30px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;

                .needs-assess {
                  color: #00000080;
                }
              }
            }
          }
        }
      }
    }

    &>.stroke-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .stroke-image-care {
          justify-content: center;
          column-gap: 300px;
        }

        h3 {
          text-align: center;
          margin-top: 30px;
        }
      }
    }
  }

}
</style>
