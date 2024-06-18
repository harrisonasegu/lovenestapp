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
    case 'home care givers':
      navigateToSubMenu(subMenu)
      break

    case 'disability support':
      navigateToSubMenu(subMenu)
      break

    default:
      navigateToSubMenuPage(navMenuTextContent, subMenu)
  }
}

import Icon1 from '@/assets/images/Caregiver-Image/Icons/icon1.png'
import Icon2 from '@/assets/images/Caregiver-Image/Icons/icon2.png'
import Icon3 from '@/assets/images/Caregiver-Image/Icons/icon3.png'
import Icon4 from '@/assets/images/Caregiver-Image/Icons/icon4.png'
import Icon5 from '@/assets/images/Caregiver-Image/Icons/icon5.png'
import Icon6 from '@/assets/images/Caregiver-Image/Icons/icon6.png'
import Imagegiver1 from '@/assets/images/Caregiver-Image/Imagegiver1.png'
import Imagegiver2 from '@/assets/images/Care_Service/Frame1.png'
import Imagegiver3 from '@/assets/images/Care_Service/Frame7.png'
</script>

<template>
  <div id="toTop" class="care-giver-wrap">

    <div class="banner">
      <div class="intro-content">
        <h2 class="intro-title">
          The Perfect Caregiver For
        </h2>
        <br>
        <h1 class="intro-subtitle">
          Companionship And Care
        </h1>
      </div>
    </div>

    <!-- Request a free assessment today!
 -->
    <div class="line-paragraphy">
      <!-- underline contents -->
      <div class="underline-wrap">
        <div class="making-preparation">
          <h3>OUR CAREGIVERS: QUALITY CARE FROM QUALITY PEOPLE
          </h3>
        </div>
      </div>

      <p>
        Our LoveNest private-duty caregivers have caring, compassionate spirits, and a genuine enthusiasm for making
        a difference in the lives of seniors and their families. They embrace our culture of respect and kindness, and,
        in
        turn, are rewarded with excellent employee benefits, resulting in low staff turnover. Each caregiver must pass a
        strict background check, as well as drug screenings, both before hire and randomly after hire.Of course, we know
        that diversity is important, so we provide multi-lingual caregivers for families who require
        those skills. It's all part of making sure that we have the right match for you or your loved one.
      </p>

    </div>

    <div class="apply-today">
      <p>
        Interested in becoming a Caregiver? <span> <a href="#">Learn more</a> </span> or <span> <a href="#">apply
            today!</a> </span>
      </p>
    </div>

    <!-- Colored background section/First -->
    <section>
      <div class="colored-wrap">
        <div class="contents">

          <div class="cards">
            <div class="items first-colored">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="caption-icon">
                    <div class="contents">
                      <div class="background-icon">
                        <h2>
                          THE LOVENEST
                          DIFFERENCE
                        </h2>
                      </div>
                    </div>
                    <p>
                      What does it take to be a StarPoint
                      caregiver? A warm, friendly, reliable,
                      compassionate personality for starters.
                      But our team members must also meet
                      the very highest standards of proficiency
                      and professionalism. <a href="#"> Apply today!</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="items white-colored">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="caption-icon">
                    <div class="contents">
                      <div class="background-icon">
                        <Icon class="icons" icon="la:check-circle-solid" width="80px" height="80px"
                          style="color: gray" />
                      </div>
                      <h4>Background Checks</h4>
                    </div>
                    <p>
                      We do everything we can to
                      ensure the integrity of our
                      caregivers, including
                      detailed background checks,
                      employment history
                      verification, and review of
                      driving records.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="items white-colored">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="caption-icon">
                    <div class="contents">
                      <div class="background-icon">
                        <Icon class="icons" icon="la:check-circle-solid" width="80px" height="80px"
                          style="color: gray" />
                      </div>
                      <h4>Skill Checks</h4>
                    </div>
                    <p>
                      All have met the qualifications for at least one certification, including state tested nurse aide,
                      credentialed home health aide, Certified Nursing Assistant (CNA), and specialist in senior care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- COMPREHENSIVE TRAINING -->
    <section>
      <div class="line-paragraphy">
        <!-- underline contents -->
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>COMPREHENSIVE TRAINING
            </h3>
          </div>
        </div>

        <p>
          LoveNest caregivers receive comprehensive training and continuing education on a wide variety
          of topics that can impact the daily lives of seniors, including:
        </p>

        <div class="cards">
          <div class="items white-colored">
            <div class="category-item">
              <!-- card title and icon -->
              <div class="category-item-header">
                <div class="caption-icon">
                  <div class="contents">
                    <div class="background-icon">
                      <img :src="Icon1" alt="picture">
                    </div>
                    <h4>Fall Prevention </h4>
                  </div>
                  <p>
                    A review of the implications
                    falling can have on the long-term
                    wellbeing of seniors, and steps
                    that can be taken to mitigate the
                    risks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="items white-colored">
            <div class="category-item">
              <!-- card title and icon -->
              <div class="category-item-header">
                <div class="caption-icon">
                  <div class="contents">
                    <div class="background-icon">
                      <img :src="Icon2" alt="picture">
                    </div>
                    <h4> Infection Prevention</h4>
                  </div>
                  <p>
                    A look at the simple steps a caregiver can take to help prevent the spread of infection or disease.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="items white-colored">
            <div class="category-item">
              <!-- card title and icon -->
              <div class="category-item-header">
                <div class="caption-icon">
                  <div class="contents">
                    <div class="background-icon">
                      <img :src="Icon3" alt="picture">
                    </div>
                    <h4> Dementia Training
                    </h4>
                  </div>
                  <p>
                    Provides a deeper understanding of Alzheimer's disease and dementia, and offers training in
                    person-centered care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="items white-colored">
            <div class="category-item">
              <!-- card title and icon -->
              <div class="category-item-header">
                <div class="caption-icon">
                  <div class="contents">
                    <div class="background-icon">
                      <img :src="Icon4" alt="picture">
                    </div>
                    <h4>
                      Parkinson's Challenges
                    </h4>
                  </div>
                  <p>
                    We give an overview on the condition and highlight information on how caregivers can help maintain
                    or improve function.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="items white-colored">
            <div class="category-item">
              <!-- card title and icon -->
              <div class="category-item-header">
                <div class="caption-icon">
                  <div class="contents">
                    <div class="background-icon">
                      <img :src="Icon5" alt="picture">
                    </div>
                    <h4> Care for Hospice Patients
                    </h4>
                  </div>
                  <p>
                    Education on how to provide needed support in end-of-life care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="items white-colored">
            <div class="category-item">
              <!-- card title and icon -->
              <div class="category-item-header">
                <div class="caption-icon">
                  <div class="contents">
                    <div class="background-icon">
                      <img :src="Icon6" alt="picture">
                    </div>
                    <h4>
                      Healthy Meal Preparation
                    </h4>
                  </div>
                  <p>
                    Understanding the importance of nutrition for seniors and the key elements involved in preparing
                    healthy meals (non-kosher and kosher) for them
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LOVENEST SPOTLIGHT -->
    <!-- Relative and Absolute section -->
    <section>
      <div class="third-reliable">
        <div class="section-image">
          <img :src="Imagegiver1" alt="picture">
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

    <!-- Carousel section -->
    <section>
      <n-carousel class="carousel" show-arrow autoplay>

        <!-- Second Section -->
        <!-- Relative and Absolute section -->
        <div class="second-reliable carousel-img">
          <div class="section-image">
            <img :src="Imagegiver3" alt="picture">
          </div>
          <div class="section-background">

            <div class="light-background">
              <div class="contents">
                <div class="quotation">
                  <Icon class="icons" icon="ri:double-quotes-l" width="80px" height="80px" style="color: #4897E6" />
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
                    <Icon class="icons" icon="material-symbols-light:star" width="40px" height="40px"
                      style="color: #4897E6" />
                    <Icon class="icons" icon="material-symbols-light:star" width="40px" height="40px"
                      style="color: #4897E6" />
                    <Icon class="icons" icon="material-symbols-light:star" width="40px" height="40px"
                      style="color: #4897E6" />
                    <Icon class="icons" icon="material-symbols-light:star" width="40px" height="40px"
                      style="color: #4897E6" />
                    <Icon class="icons" icon="material-symbols-light:star" width="40px" height="40px"
                      style="color: #4897E6" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img class="carousel-img" :src="Imagegiver1">

        <img class="carousel-img" :src="Imagegiver2">

        <img class="carousel-img" :src="Imagegiver3">

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
    </section>
  </div>
</template>

<style lang="scss" scoped>
.care-giver-wrap {
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  .up-icon {
    position: relative;

    .move-up {
      // border: 5px solid red;
      transition: ease;
      position: fixed;
      right: 10px;
      bottom: 20px;
    }
  }

  P {
    font-family: Montserrat;
    font-size: 18px;
    color: #00000080;
  }

  h3 {
    font-family: Montserrat;
    color: $base-color-1;
    font-weight: 600 !important;
  }

  h2 {
    font-family: Montserrat;
    font-size: 35px;
    color: $base-color-1;
  }

  &>.banner {
    background-image: url('../../assets/images/Caregiver-Image/caregiverbanner.png');
    // border: 15px solid red;
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
          font-size: 40px;
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
      // text-align: center;
    }
  }

  &>.apply-today {
    //  border:2px solid red;
    padding: 30px 20px;
    text-align: center;

    p {
      color: $base-color-1;
      font-weight: 700;

      span {
        a {
          color: $base-color-2;
          font-weight: 700;
        }
      }
    }
  }

  // <!-- Colored background section -->
  section {
    &>.colored-wrap {
      background-color: $base-color;
      min-height: 300px;
      padding: 50px 0px;

      &>.contents {
        .cards {
          // border: 1px solid red;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0 0px;

          .items {
            // border: 5px solid red;
            width: calc((100% / 3) - 50px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 100%;
                display: flex;
                column-gap: 10px;

                .caption-icon {
                  // border: 1px solid red;
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  padding: 10px;

                  .contents {
                    // border: 1px solid red;
                    display: flex;
                    flex-direction: column;
                    text-align: center;

                    // .icons {
                    //   border: 3px solid red;
                    // }

                    h2 {
                      text-align: right !important;
                      color: #fff;
                      font-weight: 600;
                      line-height: 29px;
                      letter-spacing: 0em;
                      font-size: 25px;
                    }

                    h4 {
                      color: $base-color-1;
                      font-weight: 600;
                      line-height: 25px;
                      letter-spacing: 0em;
                      font-size: 20px;
                    }
                  }

                  p {
                    // color: #FFFFFF80;
                    font-weight: 400;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: center;
                  }
                }
              }
            }
          }

          .first-colored {
            background-color: $base-color-1;

            p {
              text-align: right !important;
              color: #fff;
            }
          }

          .white-colored {
            background-color: #fff;
            color: #000;

            p {
              color: #2408CF4D;
            }
          }
        }
      }
    }
  }

  // <!-- COMPREHENSIVE TRAINING -->
  section {
    &>.line-paragraphy {
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
            font-size: 40px;
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
        width: 80%;
        margin: 0 auto;
        padding: 0 20px;
        text-align: center;
        margin-bottom: 50px;
      }

      .cards {
        // border: 1px solid red;
        width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 20px;
        row-gap: 20px;
        margin-top: 30px;
        margin-bottom: 50px;
        padding: 0px;

        .items {
          width: calc((100% / 2) - 50px);
          min-height: 250px;
          display: flex;
          flex-flow: column nowrap;

          div.category-item {
            &>div.category-item-header {
              // border: 5px solid red;
              width: 100%;
              display: flex;
              column-gap: 10px;

              .caption-icon {
                // border: 1px solid #000;
                display: flex;
                flex-direction: column;
                width: 100%;

                .contents {
                  display: flex;
                  flex-direction: column;
                  text-align: center;
                  line-height: 0px;

                  &>.background-icon {

                    // border: 1px solid red;
                    img {
                      // border: 1px solid red;
                      width: 130px;
                    }
                  }

                  h4 {
                    color: $base-color-1;
                    font-weight: 600;
                    line-height: 25px;
                    letter-spacing: 0em;
                    font-size: 20px;
                    color: #fff;
                  }
                }

                p {
                  // color: #FFFFFF80;
                  font-weight: 400;
                  line-height: 25px;
                  letter-spacing: 0em;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }

  // Third- Section--------------
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

            &>.color-btn {
              background-color: $base-color-1;
              border-radius: 10px;
              width: fit-content;
              padding: 10px;

              a {
                color: #fff;
                font-size: 16px;
                font-weight: 700;
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }

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
}

// XX-SM (<251px)
@media (max-width: 250.9px) {
  .care-giver-wrap {

    .up-icon {
      position: relative;

      .move-up {
        // border: 5px solid red;
        transition: ease;
        position: fixed;
        right: 10px;
        bottom: 20px;
      }
    }


    P {
      font-size: 14px;
    }

    h2 {
      // border: 2px solid red;
      font-size: 22px !important;
    }

    h3 {
      font-size: 15px !important;
    }

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
          line-height: 35px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
        }
      }
    }

    // &>.line-paragraphy {
    //   margin-top: 30px;

    //   &>.underline-wrap {
    //     padding: 0 20px;

    //     &>.making-preparation {
    //       display: flex;
    //       justify-content: center;

    //       // border: 4px solid red;
    //       h3 {
    //         color: $base-color-1;
    //         position: relative;
    //         font-weight: 600;
    //         font-size: 45px;
    //         line-height: 60px;
    //         letter-spacing: 0em;
    //       }

    //       h3::after {
    //         content: '';
    //         position: absolute;
    //         bottom: 0;
    //         left: -5%;
    //         width: 110%;
    //         border-bottom: 2px solid $base-color-1;
    //       }
    //     }
    //   }

    //   p {
    //     padding: 0 20px;
    //     // text-align: center;
    //   }
    // }
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

    &>.apply-today {
      //  border:2px solid red;
      padding: 5px 10px;
      text-align: center;

      p {
        color: $base-color-1;
        font-weight: 700;

        span {
          a {
            color: $base-color-2;
            font-weight: 700;
          }
        }
      }
    }

    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color;
        min-height: 300px;
        padding: 0px;

        &>.contents {
          .cards {
            // border: 1px solid red;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            flex-direction: column;
            column-gap: 0px;
            row-gap: 0px;
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 0 0px;

            .items {
              // border: 5px solid red;
              width: calc((100% / 1) - 0px);
              min-height: 250px;
              display: flex;
              flex-flow: column nowrap;

              div.category-item {
                &>div.category-item-header {
                  // border: 5px solid red;
                  width: 100%;
                  display: flex;
                  column-gap: 10px;

                  .caption-icon {
                    // border: 1px solid red;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 10px;

                    .contents {
                      // border: 1px solid red;
                      display: flex;
                      flex-direction: column;
                      text-align: center;
                      line-height: 0px;

                      .background-icon {
                        .icons {
                          // border: 1px solid red;
                          height: 50px;
                        }
                      }

                      h2 {
                        color: #fff;
                        font-weight: 600;
                        line-height: 30px;
                        letter-spacing: 0em;
                        font-size: 20px !important;
                      }

                      h4 {
                        color: $base-color-1;
                        font-weight: 600;
                        line-height: 0px;
                        letter-spacing: 0em;
                      }
                    }

                    p {
                      // color: #FFFFFF80;
                      font-weight: 400;
                      line-height: 25px;
                      letter-spacing: 0em;
                      text-align: center;
                    }
                  }
                }
              }
            }

            .first-colored {
              background-color: $base-color-1;

              p {
                color: #fff;
              }
            }
          }
        }
      }
    }

    // <!-- COMPREHENSIVE TRAINING -->
    section {
      &>.line-paragraphy {
        margin-top: 0px;

        &>.underline-wrap {
          padding: 0 10px;

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
          width: 100%;
          // margin: 0 auto;
          padding: 0px;
          text-align: center;
          margin-bottom: 50px;
        }

        .cards {
          // border: 1px solid red;
          width: 100%;
          // margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            width: calc((100% / 1) - 0px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 95%;
                margin: 0 auto;
                display: flex;
                column-gap: 10px;

                .caption-icon {
                  display: flex;
                  flex-direction: column;
                  width: 100%;

                  .contents {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    line-height: 0px;

                    &>.background-icon {
                      img {
                        // border: 1px solid red;
                        width: 80px;
                      }
                    }

                    h4 {
                      color: $base-color-1;
                      font-weight: 600;
                      line-height: 25px;
                      letter-spacing: 0em;
                      font-size: 20px;
                    }
                  }

                  p {
                    // color: #FFFFFF80;
                    // border: 1px solid #000;
                    width: 90%;
                    margin: 0 auto;
                    font-weight: 400;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: left;
                    padding: 0 10px;
                  }
                }
              }
            }
          }
        }
      }
    }

    // Third- Section--------------
    section {
      margin-top: 50px;

      &>.third-reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        height: fit-content;
        overflow-y: hidden;
        margin-bottom: 50px;

        &>.section-image {
          // border: 2px solid red;
          margin-bottom: -8px;

          img {
            // border: 5px solid red;
            width: 100%;
            padding: 0px;
          }
        }

        &>.section-background {
          // border: 5px solid red;
          background-color: $base-color;
          position: relative;
          width: 100%;
          height: 340px !important;



          &>.light-background {
            // border: 11px solid red;
            background-color: #FFFFFFB2;
            display: flex;
            align-content: center;
            justify-content: center;
            width: 95%;
            position: absolute;
            top: -100px;
            bottom: 5px;
            left: 5px;


            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 10px;

              h2 {
                font-weight: 600;
                line-height: 25.86px;
                color: $base-color-1;
                margin-bottom: 50px;

              }

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 25.26px;
                margin-bottom: 20px;
              }
            }
          }
        }

        &>.section-background {
          // border: 5px solid red;
          position: relative;
          width: 100%;
          height: 500px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 95%;
            height: 400px;
            position: absolute;
            overflow-y: scroll;
            top: -70px;
            bottom: 5px;
            left: 7px;
            display: flex;
            align-content: center;
            justify-content: center;

            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 10px;

              h2 {
                font-weight: 600;
                line-height: 25.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;

              }

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 25.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                background-color: $base-color-1;
                border-radius: 5px;
                width: fit-content;
                padding: 8px;
                text-align: center;

                a {
                  color: #fff;
                  font-size: 14px;
                  font-weight: 700;
                  text-decoration: none;
                }
              }
            }
          }
        }
      }
    }

    // <!-- Carousel section -->
    section {
      &>.carousel {

        //  border: 3px solid red;
        .carousel-img {
          width: 100%;
          height: 350px;
        }

        img {
          // border: 3px solid red;
          width: 100%;
        }

        .custom-arrow {
          bottom: 20px;
          right: 10px;
        }

        .custom-dots {
          bottom: 30px;
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
          // border: 3px solid red;
          border: 5px solid $base-color;
          display: flex;
          flex-direction: row-reverse;
          flex-direction: column;
          height: 350px;
          overflow-y: hidden;
          margin-bottom: 50px;

          &>.section-image {

            // border: 1px solid red;
            img {
              // border: 1px solid red;
              width: 100%;
              height: auto;
              padding-right: 0px;
            }
          }

          &>.section-background {
            // border: 1px solid red;
            position: relative;
            width: 100%;
            height: 350px;
            margin-top: -7px;
            background-color: $base-color;

            &>.light-background {
              // border: 11px solid red;
              background-color: #FFFFFFB2;
              width: 95%;
              // min-height: 200px;
              position: absolute;
              overflow-y: scroll;
              top: -100px;
              bottom: 7px;
              left: 2px;
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
                text-align: center;

                .icons {
                  // border: 2px solid red;
                  height: 30px;
                }

                .quotation {
                  line-height: 0.86px;
                  color: $base-color-1;
                  // margin-bottom: 20px;
                }

                p {
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
                    font-size: 20px;
                    color: $base-color-1;
                    line-height: 0px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// XX-SM
@media (min-width: 251px) and (max-width: 350.9px) {
  .care-giver-wrap {

    .up-icon {
      position: relative;

      .move-up {
        // border: 5px solid red;
        transition: ease;
        position: fixed;
        right: 10px;
        bottom: 20px;
      }
    }


    P {
      font-size: 14px;
    }

    h2 {
      // border: 2px solid red;
      font-size: 22px !important;
    }

    h3 {
      font-size: 15px !important;
    }

    &>.banner {
      // border: 11px solid red;
      height: 400px;
      padding: 10px 10px;

      &>.intro-content {
        // border: 2px solid red;
        text-align: center;
        padding: 0px 0px;

        .intro-title {
          // border: 12px solid red;
          margin-bottom: 2.5rem;
          font-size: 20px;
          font-weight: 600;
          line-height: 40px;
          color: #fff;
          padding-left: 0px;
          text-align: center;
        }

        .intro-subtitle {
          // border: 2px solid red;
          font-weight: 700;
          font-size: 30px;
          line-height: 40px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
          text-align: center;
        }
      }
    }

    // &>.line-paragraphy {
    //   margin-top: 30px;

    //   &>.underline-wrap {
    //     padding: 0 20px;

    //     &>.making-preparation {
    //       display: flex;
    //       justify-content: center;

    //       // border: 4px solid red;
    //       h3 {
    //         color: $base-color-1;
    //         position: relative;
    //         font-weight: 600;
    //         font-size: 45px;
    //         line-height: 60px;
    //         letter-spacing: 0em;
    //       }

    //       h3::after {
    //         content: '';
    //         position: absolute;
    //         bottom: 0;
    //         left: -5%;
    //         width: 110%;
    //         border-bottom: 2px solid $base-color-1;
    //       }
    //     }
    //   }

    //   p {
    //     padding: 0 20px;
    //     // text-align: center;
    //   }
    // }
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

    &>.apply-today {
      //  border:2px solid red;
      padding: 5px 10px;
      text-align: center;

      p {
        color: $base-color-1;
        font-weight: 700;

        span {
          a {
            color: $base-color-2;
            font-weight: 700;
          }
        }
      }
    }

    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color;
        min-height: 300px;
        padding: 0px;

        &>.contents {
          .cards {
            // border: 1px solid red;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            flex-direction: column;
            column-gap: 0px;
            row-gap: 0px;
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 0 0px;

            .items {
              // border: 5px solid red;
              width: calc((100% / 1) - 0px);
              min-height: 250px;
              display: flex;
              flex-flow: column nowrap;

              div.category-item {
                &>div.category-item-header {
                  // border: 5px solid red;
                  width: 100%;
                  display: flex;
                  column-gap: 10px;

                  .caption-icon {
                    // border: 1px solid red;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 10px;

                    .contents {
                      // border: 1px solid red;
                      display: flex;
                      flex-direction: column;
                      text-align: center;
                      line-height: 0px;

                      .background-icon {
                        .icons {
                          // border: 1px solid red;
                          height: 50px;
                        }
                      }

                      h2 {
                        color: #fff;
                        font-weight: 600;
                        line-height: 30px;
                        letter-spacing: 0em;
                        font-size: 20px !important;
                      }

                      h4 {
                        color: $base-color-1;
                        font-weight: 600;
                        line-height: 0px;
                        letter-spacing: 0em;
                      }
                    }

                    p {
                      // color: #FFFFFF80;
                      font-weight: 400;
                      line-height: 25px;
                      letter-spacing: 0em;
                      text-align: center;
                    }
                  }
                }
              }
            }

            .first-colored {
              background-color: $base-color-1;

              p {
                color: #fff;
              }
            }
          }
        }
      }
    }

    // <!-- COMPREHENSIVE TRAINING -->
    section {
      &>.line-paragraphy {
        margin-top: 0px;

        &>.underline-wrap {
          padding: 0 10px;

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
          width: 100%;
          // margin: 0 auto;
          padding: 0px;
          text-align: center;
          margin-bottom: 50px;
        }

        .cards {
          // border: 1px solid red;
          width: 100%;
          // margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            width: calc((100% / 1) - 0px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 95%;
                margin: 0 auto;
                display: flex;
                column-gap: 10px;

                .caption-icon {
                  display: flex;
                  flex-direction: column;
                  width: 100%;

                  .contents {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    line-height: 0px;

                    &>.background-icon {
                      img {
                        // border: 1px solid red;
                        width: 80px;
                      }
                    }

                    h4 {
                      color: $base-color-1;
                      font-weight: 600;
                      line-height: 25px;
                      letter-spacing: 0em;
                      font-size: 20px;
                    }
                  }

                  p {
                    // color: #FFFFFF80;
                    // border: 1px solid #000;
                    width: 90%;
                    margin: 0 auto;
                    font-weight: 400;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: left;
                    padding: 0 10px;
                  }
                }
              }
            }
          }
        }
      }
    }

    // Third- Section--------------
    section {
      margin-top: 50px;

      &>.third-reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        height: fit-content;
        overflow-y: hidden;
        margin-bottom: 50px;

        &>.section-image {
          // border: 2px solid red;
          margin-bottom: -8px;

          img {
            // border: 5px solid red;
            width: 100%;
            padding: 0px;
          }
        }

        &>.section-background {
          // border: 5px solid red;
          background-color: $base-color;
          position: relative;
          width: 100%;
          height: 340px !important;



          &>.light-background {
            // border: 11px solid red;
            background-color: #FFFFFFB2;
            display: flex;
            align-content: center;
            justify-content: center;
            width: 95%;
            position: absolute;
            top: -100px;
            bottom: 5px;
            left: 5px;


            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 10px;

              h2 {
                font-weight: 600;
                line-height: 25.86px;
                color: $base-color-1;
                margin-bottom: 50px;

              }

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 25.26px;
                margin-bottom: 20px;
              }
            }
          }
        }

        &>.section-background {
          // border: 5px solid red;
          position: relative;
          width: 100%;
          height: 500px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 95%;
            height: 400px;
            position: absolute;
            overflow-y: scroll;
            top: -70px;
            bottom: 5px;
            left: 7px;
            display: flex;
            align-content: center;
            justify-content: center;

            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 10px;

              h2 {
                font-weight: 600;
                line-height: 25.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;

              }

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 25.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                background-color: $base-color-1;
                border-radius: 5px;
                width: fit-content;
                padding: 8px;
                text-align: center;

                a {
                  color: #fff;
                  font-size: 14px;
                  font-weight: 700;
                  text-decoration: none;
                }
              }
            }
          }
        }
      }
    }

    // <!-- Carousel section -->
    section {
      &>.carousel {

        //  border: 3px solid red;
        .carousel-img {
          width: 100%;
          height: 350px;
        }

        img {
          // border: 3px solid red;
          width: 100%;
        }

        .custom-arrow {
          bottom: 20px;
          right: 10px;
        }

        .custom-dots {
          bottom: 30px;
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
          // border: 3px solid red;
          border: 5px solid $base-color;
          display: flex;
          flex-direction: row-reverse;
          flex-direction: column;
          height: 350px;
          overflow-y: hidden;
          margin-bottom: 50px;

          &>.section-image {

            // border: 1px solid red;
            img {
              // border: 1px solid red;
              width: 100%;
              height: auto;
              padding-right: 0px;
            }
          }

          &>.section-background {
            // border: 1px solid red;
            position: relative;
            width: 100%;
            height: 350px;
            margin-top: -7px;
            background-color: $base-color;

            &>.light-background {
              // border: 11px solid red;
              background-color: #FFFFFFB2;
              width: 95%;
              // min-height: 200px;
              position: absolute;
              overflow-y: scroll;
              top: -100px;
              bottom: 7px;
              left: 2px;
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
                text-align: center;

                .icons {
                  // border: 2px solid red;
                  height: 30px;
                }

                .quotation {
                  line-height: 0.86px;
                  color: $base-color-1;
                  // margin-bottom: 20px;
                }

                p {
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
                    font-size: 20px;
                    color: $base-color-1;
                    line-height: 0px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// X-SM
@media (min-width: 351px) and (max-width: 575.9px) {
  .care-giver-wrap {

    .up-icon {
      position: relative;

      .move-up {
        // border: 5px solid red;
        transition: ease;
        position: fixed;
        right: 10px;
        bottom: 20px;
      }
    }

    p {
      font-size: 18px !important;
      line-height: 30px !important;

    }

    h2 {
      // border: 2px solid red;
      font-size: 22px !important;
    }

    h3 {
      font-size: 20px !important;
    }

    &>.banner {
      // border: 4px solid red;
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
          text-align: center;
        }

        .intro-title:first-child {
          // border: 12px solid red;
          margin-bottom: 0px;
        }

        .intro-subtitle {
          // border: 2px solid red;
          font-weight: 700;
          font-size: 35px;
          line-height: 50px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
          text-align: center;
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
            left: 10%;
            width: 80%;
          }
        }
      }

    }

    &>.apply-today {
      //  border:2px solid red;
      padding: 5px 10px;
      text-align: center;

      p {
        color: $base-color-1;
        font-weight: 700;

        span {
          a {
            color: $base-color-2;
            font-weight: 700;
          }
        }
      }
    }

    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color;
        min-height: 300px;
        padding: 0px;

        &>.contents {
          .cards {
            // border: 1px solid red;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            flex-direction: column;
            column-gap: 0px;
            row-gap: 0px;
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 0 0px;

            .items {
              // border: 5px solid red;
              width: calc((100% / 1) - 0px);
              min-height: 250px;
              display: flex;
              flex-flow: column nowrap;

              div.category-item {
                &>div.category-item-header {
                  // border: 5px solid red;
                  width: 100%;
                  display: flex;
                  column-gap: 10px;

                  .caption-icon {
                    // border: 1px solid red;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 10px;

                    .contents {
                      // border: 11px solid red;
                      display: flex;
                      flex-direction: column;
                      text-align: center;
                      line-height: 0px;
                      text-align: center !important;

                      .background-icon {
                        .icons {
                          // border: 1px solid red;
                          height: 100px;
                        }
                      }

                      h2 {
                        color: #fff;
                        font-weight: 600;
                        line-height: 30px;
                        letter-spacing: 0em;
                        font-size: 20px !important;
                        text-align: center !important;
                      }

                      h4 {
                        color: $base-color-1;
                        font-weight: 600;
                        line-height: 0px;
                        letter-spacing: 0em;
                      }
                    }

                    p {
                      // border: 11px solid red;
                      // color: #FFFFFF80;
                      font-weight: 400;
                      line-height: 25px;
                      letter-spacing: 0em;
                    }
                  }
                }
              }
            }

            .first-colored {
              background-color: $base-color-1;

              p {
                color: #fff;
                text-align: center !important;
              }
            }
          }
        }
      }
    }

    // <!-- COMPREHENSIVE TRAINING -->
    section {
      &>.line-paragraphy {
        margin-top: 0px;
        padding: 0px 10px;

        &>.underline-wrap {
          padding: 0 10px;

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
          // border: 2px solid red;
          width: 90%;
          text-align: center;
          margin-bottom: 50px;
        }

        .cards {
          // border: 1px solid red;
          width: 100%;
          // margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            width: calc((100% / 1) - 0px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 100%;
                margin: 0 auto;
                display: flex;
                column-gap: 10px;

                .caption-icon {
                  display: flex;
                  flex-direction: column;
                  width: 100%;

                  .contents {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    line-height: 0px;

                    &>.background-icon {
                      img {
                        // border: 1px solid red;
                        width: 120px;
                      }
                    }

                    h4 {
                      color: $base-color-1;
                      font-weight: 600;
                      line-height: 25px;
                      letter-spacing: 0em;
                      font-size: 20px;
                    }
                  }

                  p {
                    // color: #FFFFFF80;
                    // border: 1px solid #000;
                    width: 100%;
                    margin: 0 auto;
                    font-weight: 400;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: center;
                    padding: 0px;
                  }
                }
              }
            }
          }
        }
      }
    }

    // Third- Section--------------
    section {
      margin-top: 50px;

      &>.third-reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        height: fit-content;
        overflow-y: hidden;
        margin-bottom: 50px;

        &>.section-image {
          // border: 2px solid red;
          margin-bottom: -8px;

          img {
            // border: 5px solid red;
            width: 100%;
            padding: 0px;
          }
        }

        &>.section-background {
          // border: 5px solid red;
          background-color: $base-color;
          position: relative;
          width: 100%;
          // height: 340px !important;



          &>.light-background {
            // border: 11px solid red;
            background-color: #FFFFFFB2;
            display: flex;
            align-content: center;
            justify-content: center;
            width: 95%;
            position: absolute;
            top: -100px;
            bottom: 5px;
            left: 5px;


            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 10px;

              h2 {
                font-weight: 600;
                line-height: 25.86px;
                color: $base-color-1;
                margin-bottom: 50px;

              }

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 25.26px;
                margin-bottom: 20px;
              }
            }
          }
        }

        &>.section-background {
          // border: 5px solid red;
          position: relative;
          width: 100%;
          height: 500px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 96%;
            // height: 400px;
            position: absolute;
            // overflow-y: scroll;
            top: -70px;
            bottom: 7px;
            left: 7px;
            display: flex;
            align-content: center;
            justify-content: center;

            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 10px;

              h2 {
                font-weight: 600;
                line-height: 25.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;
              }

              p {
                font-weight: 400;
                line-height: 25.26px;
                margin-bottom: 20px;
              }

              // &>.color-btn {
              //   background-color: $base-color-1;
              //   border-radius: 5px;
              //   width: fit-content;
              //   padding: 8px;
              //   text-align: center;

              //   a {
              //     color: #fff;
              //     font-size: 14px;
              //     font-weight: 700;
              //     text-decoration: none;
              //   }
              // }
            }
          }
        }
      }
    }

    // <!-- Carousel section -->
    section {
      &>.carousel {

        //  border: 3px solid red;
        .carousel-img {
          width: 100%;
          // height: 350px;
        }

        img {
          // border: 3px solid red;
          width: 100%;
        }

        .custom-arrow {
          bottom: 20px;
          right: 10px;
        }

        .custom-dots {
          bottom: 30px;
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
          // border: 3px solid red;
          border: 5px solid $base-color;
          display: flex;
          flex-direction: row-reverse;
          flex-direction: column;
          // height: 500px;
          overflow-y: hidden;
          margin-bottom: 50px;

          &>.section-image {

            // border: 1px solid red;
            img {
              // border: 1px solid red;
              width: 100%;
              height: auto;
              padding-right: 0px;
            }
          }

          &>.section-background {
            // border: 1px solid red;
            position: relative;
            width: 100%;
            // height: 500px;
            margin-top: -7px;
            background-color: $base-color;

            &>.light-background {
              // border: 11px solid red;
              background-color: #FFFFFFB2;
              width: 96%;
              // min-height: 200px;
              position: absolute;
              overflow-y: scroll;
              top: -100px;
              bottom: 5px;
              left: 2px;
              display: flex;
              align-content: center;
              justify-content: flex-end;

              &>.contents {
                // border: 2px solid red;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 10px;
                text-align: center;

                .icons {
                  // border: 2px solid red;
                  height: 30px;
                }

                .quotation {
                  line-height: 0.86px;
                  color: $base-color-1;
                  // margin-bottom: 20px;
                }

                p {
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
                    font-size: 20px;
                    color: $base-color-1;
                    line-height: 0px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// SM
@media (min-width: 576px) and (max-width: 767.9px) {
  .care-giver-wrap {

    .up-icon {
      position: relative;

      .move-up {
        // border: 5px solid red;
        transition: ease;
        position: fixed;
        right: 10px;
        bottom: 20px;
      }
    }

    P {
      font-size: 18px !important;
      line-height: 30px;
    }


    h2 {
      // border: 2px solid red;
      font-size: 22px !important;
    }

    h3 {
      font-size: 30px !important;
    }

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
        // border: 1px solid red;
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
            left: 10%;
            width: 80%;
          }
        }
      }
    }

    &>.apply-today {
      //  border:2px solid red;
      padding: 5px 10px;
      text-align: center;

      p {
        color: $base-color-1;
        font-weight: 700;

        span {
          a {
            color: $base-color-2;
            font-weight: 700;
          }
        }
      }
    }

    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color;
        min-height: 300px;
        padding: 0px;

        &>.contents {
          .cards {
            // border: 1px solid red;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            flex-direction: column;
            column-gap: 0px;
            row-gap: 0px;
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 0px;

            .items {
              // border: 5px solid red;
              width: calc((100% / 1) - 0px);
              min-height: 250px;
              display: flex;
              flex-flow: column nowrap;

              div.category-item {
                &>div.category-item-header {
                  // border: 5px solid red;
                  width: 100%;
                  display: flex;
                  column-gap: 10px;

                  .caption-icon {
                    // border: 1px solid red;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 10px;

                    .contents {
                      // border: 11px solid red;
                      display: flex;
                      flex-direction: column;
                      text-align: center;
                      line-height: 0px;

                      .background-icon {
                        .icons {
                          // border: 1px solid red;
                          height: 50px;
                        }
                      }

                      h2 {
                        color: #fff;
                        font-weight: 600;
                        line-height: 30px;
                        letter-spacing: 0em;
                        font-size: 20px !important;
                      }

                      h4 {
                        color: $base-color-1;
                        font-weight: 600;
                        line-height: 0px;
                        letter-spacing: 0em;
                      }
                    }

                    p {
                      // border: 11px solid red;
                      // color: #FFFFFF80;
                      font-weight: 400;
                      line-height: 25px;
                      letter-spacing: 0em;
                      text-align: left;
                    }
                  }
                }
              }
            }

            .first-colored {
              background-color: $base-color-1;

              p {
                color: #fff;
              }
            }
          }
        }
      }
    }

    // <!-- COMPREHENSIVE TRAINING -->
    section {
      &>.line-paragraphy {
        margin-top: 0px;
        padding: 0px 10px;

        &>.underline-wrap {
          padding: 0 10px;

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
          width: 90%;
          margin: 0 auto;
          text-align: center;
          margin-bottom: 50px;
        }

        .cards {
          // border: 1px solid red;
          width: 100%;
          // margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            width: calc((100% / 1) - 0px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 100%;
                margin: 0 auto;
                display: flex;
                column-gap: 10px;

                .caption-icon {
                  display: flex;
                  flex-direction: column;
                  width: 100%;

                  .contents {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    line-height: 0px;

                    &>.background-icon {
                      img {
                        // border: 1px solid red;
                        width: 80px;
                      }
                    }

                    h4 {
                      color: $base-color-1;
                      font-weight: 600;
                      line-height: 25px;
                      letter-spacing: 0em;
                      font-size: 20px;
                    }
                  }

                  p {
                    // color: #FFFFFF80;
                    // border: 1px solid #000;
                    width: 98%;
                    // margin: 0 auto;
                    font-weight: 400;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: center;
                    padding: 0 10px;
                  }
                }
              }
            }
          }
        }
      }
    }

    // Third- Section--------------
    section {
      margin-top: 50px;

      &>.third-reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        height: fit-content;
        overflow-y: hidden;
        margin-bottom: 50px;

        &>.section-image {
          // border: 2px solid red;
          margin-bottom: -8px;

          img {
            // border: 5px solid red;
            width: 100%;
            padding: 0px;
          }
        }

        &>.section-background {
          // border: 5px solid red;
          background-color: $base-color;
          position: relative;
          width: 100%;
          // height: 340px !important;



          &>.light-background {
            // border: 11px solid red;
            background-color: #FFFFFFB2;
            display: flex;
            align-content: center;
            justify-content: center;
            width: 95%;
            position: absolute;
            top: -100px;
            bottom: 5px;
            left: 5px;


            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 10px;

              h2 {
                font-weight: 600;
                line-height: 25.86px;
                color: $base-color-1;
                margin-bottom: 50px;

              }

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 25.26px;
                margin-bottom: 20px;
              }
            }
          }
        }

        &>.section-background {
          // border: 5px solid red;
          position: relative;
          width: 100%;
          height: 500px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 98%;
            // height: 400px;
            position: absolute;
            // overflow-y: scroll;
            top: -70px;
            bottom: 7px;
            left: 7px;
            display: flex;
            align-content: center;
            justify-content: center;

            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 10px;

              h2 {
                font-weight: 600;
                line-height: 25.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;
              }

              p {
                font-weight: 400;
                line-height: 25.26px;
                margin-bottom: 20px;
              }

              // &>.color-btn {
              //   background-color: $base-color-1;
              //   border-radius: 5px;
              //   width: fit-content;
              //   padding: 8px;
              //   text-align: center;

              //   a {
              //     color: #fff;
              //     font-size: 14px;
              //     font-weight: 700;
              //     text-decoration: none;
              //   }
              // }
            }
          }
        }
      }
    }

    // <!-- Carousel section -->
    section {
      &>.carousel {

        //  border: 3px solid red;
        .carousel-img {
          width: 100%;
          height: 500px;
        }

        img {
          // border: 3px solid red;
          width: 100%;
        }

        .custom-arrow {
          bottom: 20px;
          right: 10px;
        }

        .custom-dots {
          bottom: 30px;
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
          // border: 3px solid red;
          border: 5px solid $base-color;
          display: flex;
          flex-direction: row-reverse;
          flex-direction: column;
          // height: 500px;
          overflow-y: hidden;
          margin-bottom: 50px;

          &>.section-image {

            // border: 1px solid red;
            img {
              // border: 1px solid red;
              width: 100%;
              height: auto;
              padding-right: 0px;
            }
          }

          &>.section-background {
            // border: 1px solid red;
            position: relative;
            width: 100%;
            // height: 500px;
            margin-top: -7px;
            background-color: $base-color;

            &>.light-background {
              // border: 11px solid red;
              background-color: #FFFFFFB2;
              width: 96%;
              // min-height: 200px;
              position: absolute;
              overflow-y: scroll;
              top: -100px;
              bottom: 5px;
              left: 2px;
              display: flex;
              align-content: center;
              justify-content: flex-end;

              &>.contents {
                // border: 2px solid red;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 10px;
                text-align: center;

                .icons {
                  // border: 2px solid red;
                  height: 30px;
                }

                .quotation {
                  line-height: 0.86px;
                  color: $base-color-1;
                  // margin-bottom: 20px;
                }

                p {
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
                    font-size: 20px;
                    color: $base-color-1;
                    line-height: 0px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// MD
@media (min-width: 768px) and (max-width: 991.9px) {
  .care-giver-wrap {

    .up-icon {
      position: relative;

      .move-up {
        // border: 5px solid red;
        transition: ease;
        position: fixed;
        right: 10px;
        bottom: 20px;
      }
    }

    P {
      font-size: 18px !important;
      line-height: 30px !important;
    }


    h2 {
      // border: 2px solid red;
      font-size: 22px !important;
    }

    h3 {
      font-size: 35px !important;
    }

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
          font-size: 50px !important;
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
        // border: 1px solid red;
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
            left: 10%;
            width: 80%;
          }
        }
      }
    }

    &>.apply-today {
      //  border:2px solid red;
      padding: 5px 10px;
      text-align: center;

      p {
        color: $base-color-1;
        font-weight: 700;

        span {
          a {
            color: $base-color-2;
            font-weight: 700;
          }
        }
      }
    }

    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color;
        min-height: 300px;
        padding: 0px;

        &>.contents {
          .cards {
            // border: 1px solid red;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            flex-direction: column;
            column-gap: 0px;
            row-gap: 0px;
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 0px;

            .items {
              // border: 5px solid red;
              width: calc((100% / 1) - 0px);
              min-height: 250px;
              display: flex;
              flex-flow: column nowrap;

              div.category-item {
                &>div.category-item-header {
                  // border: 5px solid red;
                  width: 100%;
                  display: flex;
                  column-gap: 10px;

                  .caption-icon {
                    // border: 1px solid red;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 10px;

                    .contents {
                      // border: 11px solid red;
                      display: flex;
                      flex-direction: column;
                      text-align: center;
                      line-height: 0px;

                      .background-icon {
                        .icons {
                          // border: 1px solid red;
                          height: 50px;
                        }
                      }

                      h2 {
                        color: #fff;
                        font-weight: 600;
                        line-height: 30px;
                        letter-spacing: 0em;
                        font-size: 20px !important;
                      }

                      h4 {
                        color: $base-color-1;
                        font-weight: 600;
                        line-height: 0px;
                        letter-spacing: 0em;
                      }
                    }

                    p {
                      // border: 11px solid red;
                      // color: #FFFFFF80;
                      font-weight: 400;
                      line-height: 25px;
                      letter-spacing: 0em;
                      text-align: left;
                    }
                  }
                }
              }
            }

            .first-colored {
              background-color: $base-color-1;

              p {
                color: #fff;
              }
            }
          }
        }
      }
    }

    // <!-- COMPREHENSIVE TRAINING -->
    section {
      &>.line-paragraphy {
        margin-top: 0px;
        padding: 0px 10px;

        &>.underline-wrap {
          padding: 0 10px;

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
          width: 90%;
          margin: 0 auto;
          text-align: center;
          margin-bottom: 50px;
        }

        .cards {
          // border: 1px solid red;
          width: 100%;
          // margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            width: calc((100% / 1) - 0px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 100%;
                margin: 0 auto;
                display: flex;
                column-gap: 10px;

                .caption-icon {
                  display: flex;
                  flex-direction: column;
                  width: 100%;

                  .contents {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    line-height: 0px;

                    &>.background-icon {
                      img {
                        // border: 1px solid red;
                        width: 80px;
                      }
                    }

                    h4 {
                      color: $base-color-1;
                      font-weight: 600;
                      line-height: 25px;
                      letter-spacing: 0em;
                      font-size: 20px;
                    }
                  }

                  p {
                    // color: #FFFFFF80;
                    // border: 1px solid #000;
                    width: 98%;
                    // margin: 0 auto;
                    font-weight: 400;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: center;
                    padding: 0 10px;
                  }
                }
              }
            }
          }
        }
      }
    }

    // Third- Section--------------
    section {
      margin-top: 50px;

      &>.third-reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        height: fit-content;
        overflow-y: hidden;
        margin-bottom: 50px;

        &>.section-image {
          // border: 2px solid red;
          margin-bottom: -8px;

          img {
            // border: 5px solid red;
            width: 100%;
            padding: 0px;
          }
        }

        &>.section-background {
          // border: 5px solid red;
          background-color: $base-color;
          position: relative;
          width: 100%;
          // height: 340px !important;



          &>.light-background {
            // border: 11px solid red;
            background-color: #FFFFFFB2;
            display: flex;
            align-content: center;
            justify-content: center;
            width: 95%;
            position: absolute;
            top: -100px;
            bottom: 5px;
            left: 5px;


            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 10px;

              h2 {
                font-weight: 600;
                line-height: 25.86px;
                color: $base-color-1;
                margin-bottom: 50px;

              }

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 25.26px;
                margin-bottom: 20px;
              }
            }
          }
        }

        &>.section-background {
          // border: 5px solid red;
          position: relative;
          width: 100%;
          height: 500px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 98.5%;
            position: absolute;
            top: -70px;
            bottom: 7px;
            left: 7px;
            display: flex;
            align-content: center;
            justify-content: center;

            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 10px;

              h2 {
                font-weight: 600;
                line-height: 25.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;
              }

              p {
                font-weight: 400;
                line-height: 25.26px;
                margin-bottom: 20px;
              }

              // &>.color-btn {
              //   background-color: $base-color-1;
              //   border-radius: 5px;
              //   width: fit-content;
              //   padding: 8px;
              //   text-align: center;

              //   a {
              //     color: #fff;
              //     font-size: 14px;
              //     font-weight: 700;
              //     text-decoration: none;
              //   }
              // }
            }
          }
        }
      }
    }

    // <!-- Carousel section -->
    section {
      &>.carousel {

        //  border: 3px solid red;
        .carousel-img {
          width: 100%;
          height: 500px;
        }

        img {
          // border: 3px solid red;
          width: 100%;
        }

        .custom-arrow {
          bottom: 20px;
          right: 10px;
        }

        .custom-dots {
          bottom: 30px;
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
          // border: 3px solid red;
          border: 5px solid $base-color;
          display: flex;
          flex-direction: row-reverse;
          flex-direction: column;
          // height: 500px;
          overflow-y: hidden;
          margin-bottom: 50px;

          &>.section-image {

            // border: 1px solid red;
            img {
              // border: 1px solid red;
              width: 100%;
              height: auto;
              padding-right: 0px;
            }
          }

          &>.section-background {
            // border: 1px solid red;
            position: relative;
            width: 100%;
            // height: 500px;
            margin-top: -7px;
            background-color: $base-color;

            &>.light-background {
              // border: 11px solid red;
              background-color: #FFFFFFB2;
              width: 96%;
              // min-height: 200px;
              position: absolute;
              overflow-y: scroll;
              top: -100px;
              bottom: 5px;
              left: 2px;
              display: flex;
              align-content: center;
              justify-content: flex-end;

              &>.contents {
                // border: 2px solid red;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 10px;
                text-align: center;

                .icons {
                  // border: 2px solid red;
                  height: 30px;
                }

                .quotation {
                  line-height: 0.86px;
                  color: $base-color-1;
                  // margin-bottom: 20px;
                }

                p {
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
                    font-size: 20px;
                    color: $base-color-1;
                    line-height: 0px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

}

// LG
@media (min-width: 992px) and (max-width: 1200.9px) {
  .care-giver-wrap {

    &>.banner {
      &>.intro-content {

        .intro-title {
          padding-left: 0px;
        }

        .intro-subtitle {
          padding-left: 30px;
        }
      }
    }

    &>.line-paragraphy {
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
            text-align: center;
          }

          h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 10%;
            width: 80%;
            border-bottom: 2px solid $base-color-1;
          }
        }
      }

      p {
        padding: 0 20px;
        // text-align: center;
      }
    }

    &>.apply-today {
      //  border:2px solid red;
      padding: 30px 20px;
      text-align: center;

      p {
        color: $base-color-1;
        font-weight: 700;

        span {
          a {
            color: $base-color-2;
            font-weight: 700;
          }
        }
      }
    }

    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color;
        min-height: 300px;
        padding: 50px 0px;

        &>.contents {
          .cards {
            // border: 1px solid red;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            column-gap: 20px;
            row-gap: 20px;
            margin-top: 30px;
            margin-bottom: 50px;
            padding: 0 0px;

            .items {
              // border: 5px solid red;
              width: calc((100% / 3) - 50px);
              min-height: 250px;
              display: flex;
              flex-flow: column nowrap;

              div.category-item {
                &>div.category-item-header {
                  // border: 5px solid red;
                  width: 100%;
                  display: flex;
                  column-gap: 10px;

                  .caption-icon {
                    // border: 1px solid red;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    padding: 10px;

                    .contents {
                      // border: 1px solid red;
                      display: flex;
                      flex-direction: column;
                      text-align: center;

                      // .icons {
                      //   border: 3px solid red;
                      // }

                      h2 {
                        color: #fff;
                        font-weight: 600;
                        line-height: 29px;
                        letter-spacing: 0em;
                        font-size: 25px;
                      }

                      h4 {
                        color: $base-color-1;
                        font-weight: 600;
                        line-height: 25px;
                        letter-spacing: 0em;
                        font-size: 20px;
                      }
                    }

                    p {
                      // color: #FFFFFF80;
                      font-weight: 400;
                      line-height: 25px;
                      letter-spacing: 0em;
                      text-align: center;
                    }
                  }
                }
              }
            }

            .first-colored {
              background-color: $base-color-1;

              p {
                color: #fff;
              }
            }

            .white-colored {
              background-color: #fff;
              color: #000;

              p {
                color: #2408CF4D;
              }
            }
          }
        }
      }
    }

    // <!-- COMPREHENSIVE TRAINING -->
    section {
      &>.line-paragraphy {
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
          width: 80%;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          margin-bottom: 50px;
        }

        .cards {
          // border: 1px solid red;
          width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            width: calc((100% / 2) - 50px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 100%;
                display: flex;
                column-gap: 10px;

                .caption-icon {
                  // border: 1px solid #000;
                  display: flex;
                  flex-direction: column;
                  width: 100%;

                  .contents {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    line-height: 0px;

                    &>.background-icon {

                      // border: 1px solid red;
                      img {
                        // border: 1px solid red;
                        width: 130px;
                      }
                    }

                    h4 {
                      color: $base-color-1;
                      font-weight: 600;
                      line-height: 25px;
                      letter-spacing: 0em;
                      font-size: 20px;
                      color: #fff;
                    }
                  }

                  p {
                    // color: #FFFFFF80;
                    font-weight: 400;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
    }

    // Third- Section--------------
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

              &>.color-btn {
                background-color: $base-color-1;
                border-radius: 10px;
                width: fit-content;
                padding: 10px;

                a {
                  color: #fff;
                  font-size: 16px;
                  font-weight: 700;
                  text-decoration: none;
                }
              }
            }
          }
        }
      }
    }

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
  }
}

// // XL
// @media (min-width: 1201px) and (max-width: 1499.9px) {
//   .care-giver-wrap {
//     // border: 1px solid red;

//     &>.underline-wrap {
//       padding: 0 20px;

//       &>.making-preparation {
//         display: flex;
//         justify-content: center;

//         // border: 4px solid red;
//         h3 {
//           color: $base-color-1;
//           position: relative;
//           font-size: 30px;
//           font-weight: 600;
//           line-height: 50px;
//           letter-spacing: 0em;
//         }

//         h3::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: -5%;
//           width: 110%;
//           border-bottom: 2px solid $base-color-1;
//           border-radius: 10px;
//         }
//       }
//     }

//     &>.paragraph-dots {
//       // border: 11px solid red;
//       display: flex;
//       flex-direction: column;
//       padding: 0 20px;
//       margin-bottom: 30px;

//       &>.para {
//         p {
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//           padding-bottom: 30px;
//           color: #00000080;
//         }
//       }

//       &>.contents-dots {
//         // border: 2px solid blue;
//         width: 100%;
//         display: flex;
//         flex-wrap: wrap;
//         column-gap: 30px;
//         row-gap: 10px;
//         color: #00000080;

//         .contents {
//           // border: 1px solid rgba(0, 0, 0, 0.070);
//           border-radius: 8px;
//           width: calc((100% / 4) - 33px);
//           display: flex;
//           flex-wrap: wrap;
//           padding: 8px 0;
//         }
//       }
//     }

//     .call-us-wrap {
//       // border: 12px solid red;
//       background-color: $base-color-1;
//       padding: 0 20px;

//       &>.call-contact {
//         width: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: space-between;
//         flex-wrap: wrap;

//         h3 {
//           color: #fff;
//           font-weight: 400;
//           font-size: 25px;
//           font-weight: 600;
//           line-height: 40px;
//           letter-spacing: 0em;
//         }

//         &>.icon-contact {
//           // border: 11px solid red;
//           background-color: #fff;
//           border-radius: 20px;
//           color: $base-color;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 10px 20px;
//           column-gap: 10px;

//           span {
//             display: flex;

//             a {
//               text-decoration: none;
//               font-size: 16px;
//             }
//           }

//           .phone-number {
//             color: $base-color-1;
//             font-weight: 600;
//           }
//         }
//       }
//     }

//     &>.elderly-care {
//       // background-image: linear-gradient(148.01deg, rgba(218, 94, 66, 0.2) -0.47%, rgba(218, 94, 66, 0.4) 56.24%);
//       // ;

//       &>.contents {
//         // border: 2px solid red;
//         padding: 20px 20px;

//         &>.underline-wrap {
//           &>.making-preparation {
//             display: flex;
//             justify-content: center;

//             h3 {
//               // border: 4px solid red;
//               position: relative;
//               font-size: 30px;
//               font-weight: 600;
//               line-height: 50px;
//               letter-spacing: 0em;
//               color: $base-color-1;
//             }

//             h3::after {
//               content: '';
//               position: absolute;
//               bottom: 0;
//               left: -5%;
//               width: 110%;
//               border-bottom: 2px solid $base-color-1;
//               border-radius: 10px;
//             }
//           }
//         }

//         p {
//           // border: 2px solid red;
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//         }

//         &>.lady-elderly-care {
//           // border: 2px solid red;
//           display: flex;
//           justify-content: space-between;
//           column-gap: 20px;
//           padding: 30px 0;

//           &>.lady {
//             img {
//               width: 500px;
//             }
//           }

//           &>.important-care {
//             width: 750px;

//             h3 {
//               // border: 1px solid red;
//               font-size: 22px;
//               font-weight: 700;
//               line-height: 40px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }

//             &>.paragraph-dots {
//               // border: 1px solid red;
//               display: flex;
//               flex-direction: column;

//               &>.contents-dots {
//                 // border: 2px solid blue;
//                 width: 100%;
//                 display: flex;
//                 flex-wrap: wrap;
//                 column-gap: 30px;
//                 row-gap: 10px;

//                 .contents {
//                   border: 1px solid rgba(0, 0, 0, 0.070);
//                   border-radius: 8px;
//                   width: calc((100% / 2) - 17px);
//                   display: flex;
//                   flex-wrap: wrap;
//                   padding: 8px 0;
//                 }
//               }
//             }
//           }
//         }

//         &>h3 {
//           // border: 1px solid green;
//           font-size: 22px;
//           font-weight: 700;
//           line-height: 40px;
//           letter-spacing: 0em;
//         }
//       }
//     }

//     // Looking for elderly care support? component just below the elderly care with image of an advance lady

//     &>.elderly-support {
//       background-color: $base-color-2;

//       .call-us {
//         // border: 2px solid red;
//         background-color: $base-color-1;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         padding: 10px 20px;

//         &>.call-contact {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           width: 100%;
//           flex-wrap: wrap;
//           column-gap: 20px;

//           div h3 {
//             color: #fff;
//             font-weight: 400;
//             font-size: 22px;
//             font-weight: 700;
//             line-height: 30px;
//             letter-spacing: 0em;
//           }

//           &>.icon-contact {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             column-gap: 30px;

//             span {
//               // border: 11px solid red;
//               border-radius: 20px;
//               background-color: #fff;
//               padding: 10px 20px;


//               a {
//                 text-decoration: none;
//                 font-size: 16px;
//                 font-weight: 700;
//               }
//             }

//             .phone-number {
//               color: $base-color-1;
//             }
//           }
//         }
//       }
//     }

//     &>.personal-care {
//       // border: 1px solid red;
//       padding: 0 20px;

//       &>.underline-wrap {
//         &>.underline-care {
//           // border: 3px solid red;
//           display: flex;
//           justify-content: center;

//           // border: 4px solid red;
//           h3 {
//             position: relative;
//             font-size: 30px;
//             font-weight: 700;
//             letter-spacing: 0em;
//           }

//           h3::after {
//             content: '';
//             position: absolute;
//           }
//         }
//       }

//       p {
//         font-size: 16px;
//         font-weight: 400;
//         line-height: 25px;
//         letter-spacing: 0em;
//       }

//       &>.image-supporting {
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-between;

//         &>.image {
//           img {
//             width: 550px;
//           }
//         }

//         &>.supporting {
//           width: 600px;

//           &>.underline-wrap {
//             &>.supporting-care {
//               display: flex;
//               justify-content: center;
//               flex-direction: column;

//               // border: 4px solid red;
//               h3 {
//                 position: relative;
//                 font-size: 30px;
//                 font-weight: 700;
//                 line-height: 40px;
//                 letter-spacing: 0em;
//               }

//               h3::after {
//                 content: '';
//                 position: absolute;
//                 bottom: 0;
//                 left: 0%;
//                 width: 30%;
//               }
//             }
//           }

//           h4 {
//             width: 450px;
//             font-size: 18px;
//             font-weight: 700;
//             line-height: 25px;
//             letter-spacing: 0em;
//           }

//           p {
//             font-size: 16px;
//             font-weight: 400;
//             line-height: 25px;
//             letter-spacing: 0em;
//           }
//         }
//       }

//       &>.choose-image {
//         // border: 4px solid red;
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-between;
//         padding: 30px 0;
//         column-gap: 20px;

//         &>.content {
//           width: 600px;

//           h3 {
//             font-size: 25px;
//             font-weight: 700;
//             line-height: 25px;
//             letter-spacing: 0em;
//           }

//           p {
//             font-size: 16px;
//             font-weight: 400;
//             line-height: 25px;
//             letter-spacing: 0em;
//           }
//         }

//         &>.image {
//           img {
//             width: 550px;
//             height: 650px;
//           }
//         }
//       }

//       &>.bathing-showering {
//         // border: 11px solid red;
//         display: flex;
//         flex-direction: column;
//         padding: 0 20px;
//         margin-bottom: 30px;

//         h4 {
//           font-size: 20px;
//           font-weight: 600;
//           line-height: 25px;
//           letter-spacing: 0em;

//         }

//         &>.contents-dots {
//           // border: 2px solid blue;
//           width: 100%;
//           display: flex;
//           flex-wrap: wrap;
//           column-gap: 30px;
//           row-gap: 10px;

//           .contents {
//             border-radius: 8px;
//             padding: 8px 0;

//             &>.dots {
//               &>.dots-span {
//                 // border: 2px solid red;
//                 display: flex;
//                 align-items: center;
//               }
//             }
//           }
//         }
//       }
//     }

//     &>.getIn-touch {
//       .call-us {
//         background-color: $base-color-1;
//         display: flex;
//         justify-content: space-between;
//         padding: 10px 20px;

//         &>.call-contact {
//           width: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           flex-wrap: wrap;
//           column-gap: 50px;

//           div h3 {
//             // border: 2px solid red;
//             color: #fff;
//             font-size: 22px;
//             font-weight: 700;
//             line-height: 25px;
//             letter-spacing: 0em;

//           }

//           &>.contact {
//             // border: 11px solid red;
//             background-color: #fff;
//             border-radius: 20px;
//             color: $base-color;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             padding: 10px 20px;
//             column-gap: 10px;

//             span {
//               display: flex;

//               a {
//                 text-decoration: none;
//                 font-size: 16px;
//               }
//             }

//             .phone-number {
//               color: $base-color-1;
//               font-weight: 700;
//             }
//           }
//         }
//       }
//     }

//     &>.domiciliary-care {
//       &>.domiciliary {
//         padding: 0 20px;

//         &>.underline-domiciliary {
//           padding: 0 20px;

//           &>.making-preparation {
//             display: flex;
//             justify-content: center;

//             // border: 4px solid red;
//             h3 {
//               position: relative;
//               font-size: 30px;
//               font-weight: 700;
//               line-height: 50px;
//               letter-spacing: 0em;
//             }

//             // h3::after {
//             //   content: '';
//             //   position: absolute;
//             //   bottom: 0;
//             //   left: 10%;
//             //   width: 80%;
//             // }
//           }
//         }

//         &>.image-domiciliary {
//           // border: 2px solid red;
//           padding: 30px 0;
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: space-between;
//           colum-gap: 20px;

//           &>.image {
//             img {
//               width: 550px;
//               height: 550px;
//             }
//           }

//           &>.demociliary {
//             width: 600px;

//             h3 {
//               font-size: 25px;
//               font-weight: 700;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }
//           }
//         }

//         &>.why-domiciliary {
//           h3 {
//             font-size: 25px;
//             font-weight: 700;
//             line-height: 25px;
//             letter-spacing: 0em;
//           }

//           p {
//             font-size: 16px;
//             font-weight: 400;
//             line-height: 25px;
//             letter-spacing: 0em;
//           }
//         }

//         &>.consider-domiciliary {
//           padding-top: 10px;

//           h3 {
//             font-size: 25px;
//             font-weight: 700;
//             line-height: 25px;
//             letter-spacing: 0em;
//           }


//           &>.paragraph-dots {
//             // border: 1px solid red;
//             display: flex;
//             flex-direction: column;
//             padding-bottom: 50px;

//             &>.contents-dots {
//               // border: 2px solid blue;
//               width: 100%;
//               display: flex;
//               flex-wrap: wrap;
//               column-gap: 30px;
//               row-gap: 10px;

//               .contents {
//                 border: 1px solid rgba(0, 0, 0, 0.070);
//                 border-radius: 8px;
//                 width: calc((100% / 1) - 17px);
//                 display: flex;
//                 flex-wrap: wrap;
//                 padding: 8px 0;
//               }
//             }
//           }
//         }
//       }
//     }

//     &>.companionship-care {
//       // border: 1px solid red;
//       padding: 0 20px;
//       padding-bottom: 20px;

//       &>.underline-wrap {
//         &>.underline-care {
//           // border: 3px solid red;
//           display: flex;
//           justify-content: center;

//           // border: 4px solid red;
//           h3 {
//             position: relative;
//             font-size: 30px;
//             letter-spacing: 0em;
//           }

//           // h3::after {
//           //   content: '';
//           //   position: absolute;
//           //   bottom: 0;
//           //   left: 10%;
//           //   width: 80%;
//           //   border-radius: 10px;
//           // }
//         }
//       }

//       p {
//         font-size: 16px;
//         font-weight: 400;
//         line-height: 25px;
//         letter-spacing: 0em;
//       }

//       &>.image-companionship {
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-between;

//         &>.image {
//           img {
//             width: 550px;
//           }
//         }

//         &>.companionship {
//           width: 600px;

//           &>.underline-wrap {
//             &>.companionship-care {
//               display: flex;
//               justify-content: center;
//               flex-direction: column;

//               // border: 4px solid red;
//               h3 {
//                 position: relative;
//                 font-size: 30px;
//                 font-weight: 700;
//                 letter-spacing: 0em;
//               }

//               h3::after {
//                 content: '';
//                 position: absolute;
//                 bottom: 0;
//                 left: 0%;
//                 width: 30%;
//                 border-radius: 10px;
//               }
//             }
//           }

//           h4 {
//             width: 450px;
//             font-weight: 700;
//             line-height: 25px;
//             letter-spacing: 0em;
//           }

//           p {
//             font-size: 16px;
//             font-weight: 400;
//             line-height: 25px;
//             letter-spacing: 0em;
//           }
//         }
//       }

//       h3 {
//         font-size: 25px;
//         font-weight: 700;
//         line-height: 25px;
//         letter-spacing: 0em;
//       }

//       p {
//         font-size: 16px;
//         font-weight: 400;
//         line-height: 25px;
//         letter-spacing: 0em;
//       }
//     }

//     &>.dementia-care {

//       &>.contents {
//         // border: 2px solid red;
//         padding: 20px 20px;

//         &>.underline-wrap {
//           &>.making-preparation {
//             display: flex;
//             justify-content: center;

//             h3 {
//               // border: 4px solid red;
//               position: relative;
//               font-size: 30px;
//               letter-spacing: 0em;
//             }
//           }
//         }

//         p {
//           // border: 2px solid red;
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//         }

//         &>.elder-dementia-care {
//           // border: 2px solid red;
//           display: flex;
//           justify-content: space-between;
//           padding: 30px 0;

//           &>.elder {
//             img {
//               width: 500px;
//               height: 550px;
//             }
//           }

//           &>.important-care {
//             width: 650px;

//             h3 {
//               // border: 1px solid red;
//               font-size: 22px;
//               font-weight: 700;
//               line-height: 40px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }
//           }
//         }

//         &>h3 {
//           // border: 1px solid green;
//           font-size: 22px;
//           font-weight: 700;
//           line-height: 40px;
//           letter-spacing: 0em;
//         }
//       }
//     }

//     &>.personal-assistance {
//       // border: 1px solid red;
//       padding: 0 20px;
//       padding-bottom: 20px;

//       &>.underline-wrap {
//         &>.underline-care {
//           // border: 3px solid red;
//           display: flex;
//           justify-content: center;

//           // border: 4px solid red;
//           h3 {
//             position: relative;
//             font-size: 30px;
//             font-weight: 700;
//             line-height: 60px;
//             letter-spacing: 0em;
//           }
//         }
//       }

//       p {
//         font-size: 16px;
//         font-weight: 400;
//         line-height: 25px;
//         letter-spacing: 0em;
//       }

//       &>.image-personal-assistance {
//         // border: 2px solid red;
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-between;

//         &>.image {
//           img {
//             width: 550px;
//           }
//         }

//         &>.companionship {
//           width: 600px;

//           p {
//             font-size: 16px;
//             font-weight: 400;
//             line-height: 25px;
//             letter-spacing: 0em;
//           }

//           h3 {
//             font-size: 25px;
//             font-weight: 700;
//             line-height: 25px;
//             letter-spacing: 0em;
//           }
//         }
//       }
//     }

//     &>.pet-care {
//       &>.contents {
//         // border: 2px solid red;
//         padding: 20px 20px;

//         &>.underline-wrap {
//           &>.making-preparation {
//             display: flex;
//             justify-content: center;

//             h3 {
//               // border: 4px solid red;
//               position: relative;
//               font-size: 30px;
//               line-height: 50px;
//               letter-spacing: 0em;
//             }

//             h3::after {
//               content: '';
//               position: absolute;
//             }
//           }
//         }

//         p {
//           // border: 2px solid red;
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//         }

//         &>.pet-image-care {
//           // border: 2px solid red;
//           display: flex;
//           justify-content: space-between;
//           padding: 30px 0;

//           &>.pet-content {
//             width: 650px;

//             h3 {
//               // border: 1px solid red;
//               font-size: 22px;
//               font-weight: 700;
//               line-height: 40px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }
//           }

//           &>.pet-picture {
//             img {
//               width: 500px;
//               height: auto;
//             }
//           }
//         }

//         &>h3 {
//           // border: 1px solid green;
//           font-size: 22px;
//           font-weight: 700;
//           line-height: 40px;
//           letter-spacing: 0em;
//         }
//       }
//     }

//     &>.life-care {


//       &>.contents {
//         // border: 2px solid red;
//         padding: 20px 20px;

//         &>.underline-wrap {
//           &>.making-preparation {
//             display: flex;
//             justify-content: center;

//             h3 {
//               // border: 4px solid red;
//               position: relative;
//               font-size: 30px;
//               font-weight: 700;
//               line-height: 60px;
//               letter-spacing: 0em;
//             }

//             h3::after {
//               content: '';
//               position: absolute;
//             }
//           }
//         }

//         p {
//           // border: 2px solid red;
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//         }

//         &>.life-care-image {
//           // border: 2px solid red;
//           display: flex;
//           justify-content: space-between;
//           padding: 30px 0;

//           &>.lady {
//             img {
//               width: 500px;
//             }
//           }

//           &>.life-content {
//             // width: 750px;

//             h3 {
//               // border: 1px solid red;
//               font-size: 22px;
//               font-weight: 700;
//               line-height: 40px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }
//           }
//         }

//         &>h3 {
//           // border: 1px solid green;
//           font-size: 22px;
//           font-weight: 700;
//           line-height: 40px;
//           letter-spacing: 0em;
//         }
//       }
//     }

//     &>.palliative-care {
//       &>.contents {
//         // border: 2px solid red;
//         padding: 20px 20px;

//         &>.underline-wrap {
//           &>.making-preparation {
//             display: flex;
//             justify-content: center;

//             h3 {
//               // border: 4px solid red;
//               position: relative;
//               font-size: 30px;
//               font-weight: 700;
//               line-height: 60px;
//               letter-spacing: 0em;
//             }

//             h3::after {
//               content: '';
//               position: absolute;
//             }
//           }
//         }

//         p {
//           // border: 2px solid red;
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//         }

//         &>.palliative-image-care {
//           // border: 2px solid red;
//           display: flex;
//           justify-content: space-between;
//           padding: 30px 0;

//           &>.palliative-content {
//             // width: 750px;

//             h3 {
//               // border: 1px solid red;
//               font-size: 22px;
//               font-weight: 700;
//               line-height: 40px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }
//           }

//           &>.palliative-picture {
//             img {
//               width: 500px;
//               height: auto;
//             }
//           }
//         }

//         &>h3 {
//           // border: 1px solid green;
//           font-size: 22px;
//           font-weight: 700;
//           line-height: 40px;
//           letter-spacing: 0em;
//         }
//       }
//     }

//     &>.hospital-care {


//       &>.contents {
//         // border: 2px solid red;
//         padding: 20px 20px;

//         &>.underline-wrap {
//           &>.making-preparation {
//             display: flex;
//             justify-content: center;

//             h3 {
//               // border: 4px solid red;
//               position: relative;
//               font-size: 30px;
//               letter-spacing: 0em;
//             }

//             h3::after {
//               content: '';
//               position: absolute;
//             }
//           }
//         }

//         p {
//           // border: 2px solid red;
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//         }

//         &>.life-care-image {
//           // border: 2px solid red;
//           display: flex;
//           justify-content: space-between;
//           padding: 30px 0;

//           &>.lady {
//             img {
//               width: 500px;
//             }
//           }

//           &>.life-content {
//             width: 650px;

//             h3 {
//               // border: 1px solid red;
//               font-size: 22px;
//               font-weight: 700;
//               line-height: 40px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }
//           }
//         }

//         &>h3 {
//           // border: 1px solid green;
//           font-size: 22px;
//           font-weight: 700;
//           line-height: 40px;
//           letter-spacing: 0em;
//         }

//         &>.consider-hospital {
//           padding-top: 10px;

//           h3 {
//             font-size: 25px;
//             font-weight: 700;
//             line-height: 25px;
//             letter-spacing: 0em;
//           }

//           &>.paragraph-dots {
//             // border: 1px solid red;
//             display: flex;
//             flex-direction: column;
//             padding-bottom: 50px;

//             &>.contents-dots {
//               // border: 2px solid blue;
//               width: 100%;
//               display: flex;
//               flex-wrap: wrap;
//               column-gap: 30px;
//               row-gap: 10px;

//               .contents {
//                 border: 1px solid rgba(0, 0, 0, 0.070);
//                 border-radius: 8px;
//                 width: calc((100% / 1) - 17px);
//                 display: flex;
//                 flex-wrap: wrap;
//                 padding: 8px 0;
//               }
//             }
//           }
//         }
//       }
//     }

//     &>.overnight-care {
//       &>.contents {
//         // border: 2px solid red;
//         padding: 20px 20px;

//         &>.underline-wrap {
//           &>.making-preparation {
//             display: flex;
//             justify-content: center;

//             h3 {
//               // border: 4px solid red;
//               position: relative;
//               font-size: 30px;
//               letter-spacing: 0em;
//             }

//             h3::after {
//               content: '';
//               position: absolute;
//             }
//           }
//         }

//         p {
//           // border: 2px solid red;
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//         }

//         &>.lady-elderly-care {
//           // border: 2px solid red;
//           display: flex;
//           justify-content: space-between;
//           padding: 30px 0;

//           &>.lady {
//             img {
//               width: 500px;
//             }
//           }

//           &>.important-care {
//             width: 650px;

//             h3 {
//               // border: 1px solid red;
//               font-size: 22px;
//               font-weight: 700;
//               line-height: 40px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }

//             &>.paragraph-dots {
//               // border: 1px solid red;
//               display: flex;
//               flex-direction: column;

//               &>.contents-dots {
//                 // border: 2px solid blue;
//                 width: 100%;
//                 display: flex;
//                 flex-wrap: wrap;
//                 column-gap: 30px;
//                 row-gap: 10px;

//                 h4 {
//                   // border: 2px solid red;
//                   font-size: 18px;
//                   font-weight: 500;
//                   line-height: 25px;
//                   letter-spacing: 0em;
//                 }

//                 .contents {
//                   border: 1px solid rgba(0, 0, 0, 0.070);
//                   border-radius: 8px;
//                   width: calc((100% / 1) - 17px);
//                   display: flex;
//                   flex-wrap: wrap;
//                   padding: 8px 0;

//                   .needs-assess {
//                     color: #00000080;
//                   }
//                 }
//               }
//             }
//           }
//         }

//         &>h3 {
//           // border: 1px solid green;
//           font-size: 22px;
//           font-weight: 700;
//           line-height: 40px;
//           letter-spacing: 0em;
//         }
//       }
//     }

//     &>.couples-care {
//       &>.contents {
//         // border: 2px solid red;
//         padding: 20px 20px;

//         &>.underline-wrap {
//           &>.making-preparation {
//             display: flex;
//             justify-content: center;

//             h3 {
//               // border: 4px solid red;
//               position: relative;
//               font-size: 30px;
//               font-weight: 700;
//               letter-spacing: 0em;
//             }

//             h3::after {
//               content: '';
//               position: absolute;
//             }
//           }
//         }

//         p {
//           // border: 2px solid red;
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//         }

//         &>.couples-image-care {
//           // border: 2px solid red;
//           display: flex;
//           justify-content: space-between;
//           padding: 30px 0;

//           &>.couples-content {
//             width: 650px;

//             h3 {
//               // border: 1px solid red;
//               font-size: 22px;
//               font-weight: 700;
//               line-height: 40px;
//               letter-spacing: 0em;
//             }

//             h4 {
//               // border: 2px solid red;
//               font-size: 18px;
//               font-weight: 500;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }
//           }

//           &>.couples-picture {
//             img {
//               width: 500px;
//               height: 800px;
//             }
//           }
//         }

//         &>h3 {
//           // border: 1px solid green;
//           font-size: 22px;
//           font-weight: 700;
//           line-height: 40px;
//           letter-spacing: 0em;
//         }
//       }
//     }

//     &>.live-in-care {
//       &>.contents {
//         // border: 2px solid red;
//         padding: 20px 20px;

//         &>.underline-wrap {
//           &>.making-preparation {
//             display: flex;
//             justify-content: center;

//             h3 {
//               // border: 4px solid red;
//               position: relative;
//               font-size: 30px;
//             }

//             h3::after {
//               content: '';
//               position: absolute;
//             }
//           }
//         }

//         p {
//           // border: 2px solid red;
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//         }

//         &>.wheelchair-live-in-care {
//           // border: 2px solid red;
//           display: flex;
//           justify-content: space-between;
//           padding: 30px 0;

//           &>.wheelchair-picture {
//             img {
//               width: 500px;
//               height: auto;
//             }
//           }

//           &>.important-care {
//             width: 650px;

//             h3 {
//               // border: 1px solid red;
//               font-size: 22px;
//               font-weight: 700;
//               line-height: 40px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }
//           }
//         }

//         &>h3 {
//           // border: 1px solid green;
//           font-size: 22px;
//           font-weight: 700;
//           line-height: 40px;
//           letter-spacing: 0em;
//         }
//       }
//     }

//     &>.respite-care {
//       &>.contents {
//         // border: 2px solid red;
//         padding: 20px 20px;

//         &>.underline-wrap {
//           &>.making-preparation {
//             display: flex;
//             justify-content: center;

//             h3 {
//               // border: 4px solid red;
//               position: relative;
//               font-size: 30px;
//               letter-spacing: 0em;
//             }

//             h3::after {
//               content: '';
//               position: absolute;
//             }
//           }
//         }

//         p {
//           // border: 2px solid red;
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//         }

//         &>.respite-image-care {
//           // border: 2px solid red;
//           display: flex;
//           justify-content: space-between;
//           padding: 30px 0;

//           &>.respite-picture {
//             img {
//               width: 500px;
//               height: 800px;
//             }
//           }

//           &>.respite-content {
//             width: 650px;

//             h3 {
//               // border: 1px solid red;
//               font-size: 22px;
//               font-weight: 700;
//               line-height: 40px;
//               letter-spacing: 0em;
//             }

//             h4 {
//               // border: 2px solid red;
//               font-size: 18px;
//               font-weight: 500;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }
//           }
//         }

//         &>h3 {
//           // border: 1px solid green;
//           font-size: 22px;
//           font-weight: 700;
//           line-height: 40px;
//           letter-spacing: 0em;
//         }
//       }
//     }

//     &>.complex-care {
//       &>.contents {
//         // border: 2px solid red;
//         padding: 20px 20px;

//         &>.underline-wrap {
//           &>.making-preparation {
//             display: flex;
//             justify-content: center;

//             h3 {
//               // border: 4px solid red;
//               position: relative;
//             }

//             h3::after {
//               content: '';
//               position: absolute;
//             }
//           }
//         }

//         p {
//           // border: 2px solid red;
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//         }

//         &>.complex-support-plan {
//           // border: 2px solid red;
//           display: flex;
//           justify-content: space-between;
//           padding: 30px 0;

//           &>.complex-support {
//             width: 650px;

//             // &>.underline-wrap {
//             //   &>.making-preparation {
//             //     // display: flex;
//             //     // justify-content: center;

//             //     h3 {
//             //       // border: 4px solid red;
//             //       position: relative;
//             //       font-size: 30px;
//             //       font-weight: 700;
//             //       line-height: 60px;
//             //       letter-spacing: 0em;
//             //     }

//             //     h3::after {
//             //       content: '';
//             //       position: absolute;
//             //       bottom: 0;
//             //       left: 0;
//             //       width: 50%;
//             //       border-bottom: 7px solid $base-color-1;
//             //       border-radius: 10px;
//             //     }
//             //   }
//             // }

//             h4 {
//               // border: 2px solid red;
//               font-size: 18px;
//               font-weight: 500;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }

//             p span {
//               font-size: 16px;
//               font-weight: 600;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }

//             &>.paragraph-dots {
//               // border: 1px solid red;
//               display: flex;
//               flex-direction: column;

//               &>.contents-dots {
//                 // border: 2px solid blue;
//                 width: 100%;
//                 display: flex;
//                 flex-wrap: wrap;
//                 column-gap: 30px;
//                 row-gap: 10px;

//                 h4 {
//                   // border: 2px solid red;
//                   color: $base-color-1;
//                   font-size: 18px;
//                   font-weight: 500;
//                   line-height: 25px;
//                   letter-spacing: 0em;
//                 }

//                 .contents {
//                   border: 1px solid rgba(0, 0, 0, 0.070);
//                   border-radius: 8px;
//                   width: calc((100% / 3) - 30px);
//                   display: flex;
//                   flex-wrap: wrap;
//                   padding: 8px 0;

//                   .needs-assess {
//                     color: #00000080;
//                   }
//                 }
//               }
//             }
//           }

//           &>.picture {
//             img {
//               width: 500px;
//               height: auto;
//             }
//           }
//         }

//         &>.complex-home {
//           // border: 2px solid red;
//           display: flex;
//           justify-content: space-between;
//           padding: 30px 0;

//           &>.picture {
//             img {
//               width: 500px;
//             }
//           }

//           &>.complex-support-content {
//             width: 650px;

//             &>.underline-wrap {
//               &>.making-preparation {
//                 // display: flex;
//                 // justify-content: center;

//                 h3 {
//                   // border: 4px solid red;
//                   font-size: 22px;
//                   font-weight: 700;
//                   line-height: 40px;
//                   letter-spacing: 0em;
//                 }
//               }
//             }

//             h4 {
//               // border: 2px solid red;
//               font-size: 20px;
//               font-weight: 500;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }

//             &>.paragraph-dots {
//               // border: 1px solid red;
//               display: flex;
//               flex-direction: column;

//               &>.contents-dots {
//                 // border: 2px solid blue;
//                 width: 100%;
//                 display: flex;
//                 flex-wrap: wrap;
//                 column-gap: 30px;
//                 row-gap: 10px;

//                 h4 {
//                   // border: 2px solid red;
//                   font-size: 18px;
//                   font-weight: 500;
//                   line-height: 25px;
//                   letter-spacing: 0em;
//                 }

//                 .contents {
//                   border: 1px solid rgba(0, 0, 0, 0.070);
//                   border-radius: 8px;
//                   width: calc((100% / 1) - 30px);
//                   display: flex;
//                   flex-wrap: wrap;
//                   padding: 8px 0;

//                   .needs-assess {
//                     color: #00000080;
//                   }
//                 }
//               }
//             }
//           }
//         }

//         h3 {
//           // border: 1px solid red;
//           font-size: 22px;
//           font-weight: 700;
//           line-height: 40px;
//           letter-spacing: 0em;
//         }

//         p {
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//         }
//       }
//     }

//     &>.stroke-care {
//       &>.contents {
//         // border: 2px solid red;
//         padding: 20px 20px;

//         &>.underline-wrap {
//           &>.making-preparation {
//             display: flex;
//             justify-content: center;

//             h3 {
//               // border: 4px solid red;
//               position: relative;
//             }
//           }
//         }

//         p {
//           // border: 2px solid red;
//           font-size: 16px;
//           font-weight: 400;
//           line-height: 25px;
//           letter-spacing: 0em;
//         }

//         &>.stroke-image-care {
//           // border: 2px solid red;
//           display: flex;
//           justify-content: space-between;
//           padding: 30px 0;

//           &>.stroke-content {
//             width: 650px;

//             h3 {
//               // border: 1px solid red;
//               font-size: 22px;
//               font-weight: 700;
//               line-height: 40px;
//               letter-spacing: 0em;
//             }

//             h4 {
//               // border: 2px solid red;
//               color: $base-color-1;
//               font-size: 18px;
//               font-weight: 500;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }

//             p {
//               font-size: 16px;
//               font-weight: 400;
//               line-height: 25px;
//               letter-spacing: 0em;
//             }

//             p span {
//               font-weight: 700;
//             }
//           }

//           &>.stroke-picture {
//             // img {
//             //   width: 500px;
//             //   height: auto;
//             // }
//           }
//         }

//         &>h3 {
//           // border: 1px solid green;
//           font-size: 22px;
//           font-weight: 700;
//           line-height: 40px;
//           letter-spacing: 0em;
//         }
//       }
//     }
//   }
// }

// XXL
@media (min-width: 1500px) {
  .care-giver-wrap {

    .up-icon {
      position: relative;

      .move-up {
        // border: 5px solid red;
        transition: ease;
        position: fixed;
        right: 10px;
        bottom: 20px;
      }
    }

    P {
      line-height: 35px !important;
    }

    h2 {
      font-size: 35px;
      color: $base-color-1;
    }

    &>.banner {
      height: 500px;
    }

    // Third- Section--------------
    section {
      margin-top: 50px;

      &>.third-reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: row-reverse;
        height: 650px;
        overflow-y: hidden;
        margin-bottom: 50px;

        &>.section-image {

          // border: 1px solid red;
          img {
            // border: 1px solid red;
            width: 1000px;
            height: 650px;
            padding-right: 20px;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          position: relative;
          width: 1500px;
          height: 650px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 1000px;
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

              &>.color-btn {
                background-color: $base-color-1;
                border-radius: 10px;
                width: fit-content;
                padding: 10px;

                a {
                  color: #fff;
                  font-size: 16px;
                  font-weight: 700;
                  text-decoration: none;
                }
              }
            }
          }
        }
      }
    }

    // <!-- Carousel section -->
    section {
      &>.carousel {
        .carousel-img {
          width: 100%;
          height: 600px;
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
          height: 600px;
          overflow-y: hidden;
          margin-bottom: 50px;

          &>.section-image {

            // border: 1px solid red;
            img {
              // border: 11px solid red;
              width: 1300px;
              height: 600px;
              padding-right: 20px;
            }
          }

          &>.section-background {
            // border: 1px solid red;
            position: relative;
            width: 100%;
            height: 600px;
            background-color: $base-color;

            &>.light-background {
              // border: 11px solid red;
              background-color: #FFFFFFB2;
              width: 100%;
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
  }

}
</style>
