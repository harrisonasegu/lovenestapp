<script setup lang="ts">
import { NH2 } from 'naive-ui';
import { reactive } from 'vue';
import { NCarousel, NIcon, NH1, NH3 } from 'naive-ui'
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'

// carousel Images
import carouselImage2 from '@/assets/images/landingPageImages/caro.png'
import carouselImage5 from '@/assets/images/OurServiceImage/Frame-5.png'
import carouselImage6 from '@/assets/images/contact-us-image/contact-banner.png'
import carouselImage7 from '@/assets/images/OurServiceImage/Frame3.png'
import carouselImage8 from '@/assets/images/about-us-image/about-us-banner.png'
import carouselImage9 from '@/assets/images/OurServiceImage/image6.png'
// ----------------------------------------
// Landing page contents Images
import Image1 from '@/assets/images/landingPageImages/image1.png'
import Image2 from '@/assets/images/landingPageImages/image2.png'
import Image3 from '@/assets/images/landingPageImages/_image2.png'
import Image4 from '@/assets/images/landingPageImages/connect.png'
import Image5 from '@/assets/images/landingPageImages/commission.png'
import Image6 from '@/assets/images/landingPageImages/image6.png'


import {
  NCollapseItem,
  NSpace,
  NCollapse,
  type CollapseProps
} from 'naive-ui'

const expandedItem = reactive({
  name: '3',
  expanded: true
})

const handleItemHeaderClick: CollapseProps['onItemHeaderClick'] = ({ name, expanded }) => {
  expandedItem.name = name
  expandedItem.expanded = expanded
}

const imageUrl = [
  carouselImage6, carouselImage2, carouselImage5, carouselImage7, carouselImage8, carouselImage9
]
</script>

<template>
  <div class="wrap">
    <div class="carousel-container">
      <n-carousel show-arrow draggable autoplay effect="fade" :transition-style="{
        transitionDuration: '5000ms'
        // transitionTimingFunction?: string 
      }">
        <div v-for="(url, index) in imageUrl" :key="index" class="carousel-item" :style="{
        backgroundImage: `url(${url})`
      }">
          <div class="intro-content">
            <n-h2 class="intro-title">
              YOUR PERFECT MATCH FOR
            </n-h2>
            <n-h1 class="intro-subtitle">
              IN-HOME CARE
            </n-h1>
          </div>
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
    <!-- First Section -->
    <!-- Relative and Absolute section -->
    <section>
      <div class="reliable">
        <div class="section-image">
          <img :src="Image1" alt="picture">
        </div>
        <div class="section-background">

          <div class="light-background">
            <div class="contents">
              <h2>
                RELIABLE, QUALITY, PROFESSIONAL CARE
                IN THE HEART OF YOUR COMMUNITY
              </h2>
              <p>
                LoveNest Home Care is based right in the heart of Cincinnati. We provide a full
                complement of non-medical, in-home assistance services for senior adults who
                need a helping hand maintaining their independence while continuing to live a
                vibrant and engaged life. LoveNest is here to serve all seniors in our area,
                regardless of ethnicity, religion, or race.
              </p>
              <div class="color-btn">
                <a href="#">Learn more about our personalized home care</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <!-- =============================== -->
    <!-- Second Section -->
    <!-- Relative and Absolute section -->
    <section>
      <div class="second-reliable">
        <div class="section-image">
          <img :src="Image3" alt="picture">
        </div>
        <div class="section-background">

          <div class="light-background">
            <div class="contents">
              <h2>
                THE ART OF CONNECTION
              </h2>
              <p>
                What makes LoveNest special is our ability to match clients to
                our experienced, carefully selected, private-duty caregivers. It all
                starts with the care, intuition, and experience of our staff. Our
                team personally meets with our clients and their families, listens
                carefully to get to know who they are—their likes and dislikes,
                hobbies and pastimes—then makes a match, creating just the
                right client-caregiver connection based on personality and
                common interests.
              </p>
              <div class="color-btn">
                <a href="#">Request a Free Assessment</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section>
      <div class="guides">
        <h2>
          GUIDES TO STARTING YOUR HOME CARE JOURNEY
        </h2>

        <div class="vector-pictures">
          <img :src="Image4" alt="connect-image">
        </div>

        <div class="guides-contents">
          <div class="our-teams">
            <div class="icon-content">
              <div class="icons">
                <Icon class="reduce-icon" icon="uil:forwaded-call" width="60" height="60" style="color: #BE0C68" />
              </div>
            </div>
            <div class="caption-contents">
              <h3>Speak to our team</h3>
              <p>
                Call our team of experts to talk
                through your options and any
                question you may have
                regarding your care.
              </p>
            </div>
          </div>
          <div class="free-home">
            <div class="icon-content">
              <div class="icons">
                <Icon class="reduce-icon" icon="raphael:home" width="60" height="60" style="color: #BE0C68" />
              </div>
            </div>
            <div class="caption-contents">
              <h3>A free home care assessment</h3>
              <p>
                Your local helping hands manager
                will visit you to discuss your
                requirements and even about the
                type care you are after.
              </p>
            </div>

          </div>
          <div class="care-package">
            <div class="icon-content">
              <div class="icons">
                <Icon class="reduce-icon" icon="healthicons:i-schedule-school-date-time" width="60" height="60"
                  style="color: #BE0C68" />
              </div>
            </div>
            <div class="caption-contents">
              <h3>Create a bespoke care package</h3>
              <p>
                We'll ensure you have the right care
                and support in place that this around
                your needs and preference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- New---===================== -->

    <!-- Colored background section/First -->
    <section>
      <div class="colored-wrap">
        <div class="contents">
          <h2>
            OUR HOME CARE SERVICES
          </h2>
          <p class="caption-paragraphy">
            Your personalized care plan starts with a thorough evaluation so we can best deliver the non-medical
            services you need—when you need them. Here are some of the many services we can provide.
          </p>

          <div class="cards">
            <div class="items">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="caption-icon">
                    <div class="contents">
                      <div class="background-icon">
                        <Icon icon="mdi:human-kabaddi" width="50px" height="50px" style="color: white" />
                      </div>
                      <h4>Personal Care and Assistance</h4>
                    </div>
                    <p>
                      Bathing, restroom activities,
                      incontinence care, grooming,
                      personal hygiene, dressing,
                      walking, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="items">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="caption-icon">
                    <div class="contents">
                      <div class="background-icon">
                        <Icon icon="fa-solid:utensil-spoon" width="50px" height="50px" style="color: white" />
                      </div>
                      <h4>Living in Care and Overnight
                        Care</h4>
                    </div>
                    <p>
                      Helping you live the life you
                      want on your own terms etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="items">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="caption-icon">
                    <div class="contents">
                      <div class="background-icon">
                        <Icon icon="game-icons:caduceus" width="50px" height="50px" style="color: white" />
                      </div>
                      <h4>Professional Medication
                        Management</h4>
                    </div>
                    <p>
                      Reminders, supervision, pill box
                      , organization, daily
                      log, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div class="items">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="caption-icon">
                    <div class="contents">
                      <div class="background-icon">
                        <Icon icon="fluent-mdl2:car" width="50px" height="50px" style="color: white" />
                      </div>
                      <h4>
                        Mobility aids and Home
                        adaptation
                      </h4>
                    </div>
                    <p>
                      Schedule planning and
                      assistance (visits,
                      appointment, outings, etc.)
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div class="items">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="caption-icon">
                    <div class="contents">
                      <div class="background-icon">
                        <Icon icon="wpf:todo-list" width="50px" height="50px" style="color: white" />
                      </div>
                      <h4>
                        Domiciliary Care for Elderly
                        Care
                      </h4>
                    </div>
                    <p>
                      We are here to help with
                      everyday tasks you might
                      struggle with.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div class="items">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="caption-icon">
                    <div class="contents">
                      <div class="background-icon">
                        <Icon icon="teenyicons:users-solid" width="50px" height="50px" style="color: white" />
                      </div>
                      <h4>
                        Support in the Community
                      </h4>
                    </div>
                    <p>
                      Support to help you stay
                      connected to people you love
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Care Quality Commission--------- -->
    <section>
      <div class="commissin-wrap">
        <div class="picture">
          <img :src="Image5" alt="picture">
        </div>
        <div class="regulated-services">
          <h4>
            We are fully regulated service
          </h4>
          <p>
            Closely monitored by external regulated body
          </p>
        </div>
        <div class="see-more">
          <span>See what this means for you</span>
          <span>
            <Icon class="home-icon" icon="fe:arrow-right" width="20px" height="20px" style="color: #BE0C68" />
          </span>
        </div>
      </div>
    </section>

    <!-- Request Free Assessment -->
    <section>
      <div class="see-more">
        <span>
          <Icon class="home-icon" icon="fe:arrow-right" width="20px" height="20px" style="color: #fff" />
        </span>
        <span>See what this means for you</span>
      </div>
    </section>

    <!-- Third Section -->
    <!-- Relative and Absolute section -->
    <section>
      <div class="third-reliable">
        <div class="section-image">
          <img :src="Image6" alt="picture">
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
              <!-- <div class="color-btn">
              <a href="#">Request a Free Assessment</a>
            </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Colored background section/Last -->
    <section>
      <div class="last-colored-wrap">
        <div class="contents">
          <h3>
            FAQS
          </h3>
          <p class="caption-paragraphy">
            Below are some frequently asked questions regarding personalized home care. If you have additional
            questions or would like some more information, please reach out and one of our expert team
            members will get back to you promptly.
          </p>

          <div class="contact-us">
            <!-- <a class="number" href="tel:++0808 501 5786">Contact Us</a> -->
            <RouterLink class="icon-links" to="/about"> Contact Us</RouterLink>
          </div>

          <div class="page-view">
            <n-space vertical :size="40">
              <div class="application-page-wrap">
                <div class="application-contents">

                  <div class="financial-grants">

                    <div class="collapse">

                      <n-collapse accordion arrow-placement="right" :default-expanded-names="expandedItem.name"
                        @item-header-click="handleItemHeaderClick">
                        <template #arrow>&VeryThinSpace;</template>

                        <n-collapse-item name="1">
                          <template #header>
                            <h2 class="collapsed-item-header">Why would somebody use home care?</h2>
                          </template>

                          <template #header-extra>
                            <div class="header-extra-container">
                              <Icon
                                :icon="(expandedItem.name === '1' && expandedItem.expanded) ? 'ic:baseline-minus' : 'ic:baseline-plus'" />
                            </div>
                          </template>

                          <p>
                            Home care enables a person to live as independently as possible without having to give up
                            the
                            comforts of their own home. It allows them to be in a familiar environment, sleep in their
                            own
                            bed at night, and stay close to loved ones like family, friends, and pets. It also brings
                            peace
                            of
                            mind to know they have access to skilled, consistent, reliable care when it is needed, even
                            if
                            those
                            needs change.
                          </p>
                        </n-collapse-item>

                        <n-collapse-item name="2">
                          <template #header>
                            <h2 class="collapsed-item-header">Do you take insurance?</h2>
                          </template>

                          <template #header-extra>
                            <div class="header-extra-container">
                              <Icon
                                :icon="(expandedItem.name === '2' && expandedItem.expanded) ? 'ic:baseline-minus' : 'ic:baseline-plus'" />
                            </div>
                          </template>

                          <p>
                            LoveNest Home Care does not currently take Medicaid or Medicare insurance. Should you have a
                            long-term care (LTC) insurance plan, LoveNest will work diligently with you LTC to get your
                            services covered under your policy. Please note that many LTC policies have an elimination
                            period that you must meet before services are covered.
                          </p>
                        </n-collapse-item>

                        <n-collapse-item name="3">
                          <template #header>
                            <h2 class="collapsed-item-header">Can you only get home care in a private residence?</h2>
                          </template>

                          <template #header-extra>
                            <div class="header-extra-container">
                              <Icon
                                :icon="(expandedItem.name === '3' && expandedItem.expanded) ? 'ic:baseline-minus' : 'ic:baseline-plus'" />
                            </div>
                          </template>

                          <p>
                            No. Home care services can be provided wherever home is—a private residence, a senior living
                            community, or while staying with a friend or family caregiver.
                          </p>
                        </n-collapse-item>

                        <n-collapse-item name="4">
                          <template #header>
                            <h2 class="collapsed-item-header">What is the difference between Home Care and Home Health
                              Care?</h2>
                          </template>

                          <template #header-extra>
                            <div class="header-extra-container">
                              <Icon
                                :icon="(expandedItem.name === '4' && expandedItem.expanded) ? 'ic:baseline-minus' : 'ic:baseline-plus'" />
                            </div>
                          </template>

                          <p>
                            What LoveNest provides is Home Care- nonmedical private duty assistance- things like
                            toileting,
                            bathing, dressing, meal preparation, companionship, often described as Activities of Daily
                            Living (ADL).Home Health Care is a different service, often covered by medical insurance and
                            includes nursing, physical, speech and occupational therapy and wound care.
                          </p>
                        </n-collapse-item>

                        <n-collapse-item name="5">
                          <template #header>
                            <h2 class="collapsed-item-header">How do I know I am getting the right caregiver?</h2>
                          </template>

                          <template #header-extra>
                            <div class="header-extra-container">
                              <Icon
                                :icon="(expandedItem.name === '5' && expandedItem.expanded) ? 'ic:baseline-minus' : 'ic:baseline-plus'" />
                            </div>
                          </template>

                          <p>
                            All LoveNest aides are background checked and drug screened. Once our team meets with and
                            assesses the client, they work with caregivers to make the best possible match in
                            personality
                            and needs. If at any time you are unhappy with a caregiver, we will work hard to fix the
                            care to
                            your satisfaction.
                          </p>
                        </n-collapse-item>

                        <n-collapse-item name="6">
                          <template #header>
                            <h2 class="collapsed-item-header">Why LoveNest?
                            </h2>
                          </template>

                          <template #header-extra>
                            <div class="header-extra-container">
                              <Icon
                                :icon="(expandedItem.name === '6' && expandedItem.expanded) ? 'ic:baseline-minus' : 'ic:baseline-plus'" />
                            </div>
                          </template>

                          <p>
                            Our team is dedicated to providing family-like care. We get to know our clients and
                            caregivers,
                            and consider our team a family. In addition, as a non-profit, all of our proceeds go
                            directly
                            back to serving the Cincinnati Jewish Community, through our parent agency, Jewish Family
                            Service of Cincinnati.
                          </p>
                        </n-collapse-item>

                      </n-collapse>
                    </div>
                  </div>
                </div>
              </div>
            </n-space>
          </div>
        </div>
      </div>
    </section>

    <!-- Colored section border------- -->
    <section>
      <div class="colored-last">
        <div class="second-color"></div>
        <div class="third-color"></div>
        <div class="first-color"></div>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrap {
  div.carousel-container {
    height: 500px;
    //   padding: 0 50px;
    // background-color: $banner-bg;

    &>.n-carousel {
      .carousel-item {
        height: inherit;
        display: flex;
        align-items: center;
        // background-image: url('@/assets/images/slide-1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        &>.intro-content {
          // border: 2px solid red;
          padding: 10px 20px;
          position: static;
          left: auto;
          top: auto;
          transform: translateY(0);

          .intro-title {
            // border: 2px solid red;
            margin-bottom: 2.5rem;
            font-size: 60px;
            font-weight: 600;
            line-height: 10px;
            color: #fff;
            padding-left: 50px;
          }

          .intro-subtitle {
            // border: 2px solid red;
            // margin-bottom: 1rem;
            font-weight: 700;
            font-size: 80px;
            line-height: 80px;
            letter-spacing: 0em;
            color: #fff;
            padding-left: 300px;
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
        // border: 3px solid red;
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

  P {
    font-size: 18px;
  }

  h2 {
    font-size: 38px;
  }

  h3 {
    font-size: 25px;
  }

  // First- Section---------------
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

  // Second- Section--------------
  section {
    margin-top: 50px;

    &>.second-reliable {
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

  // colored line section
  section {
    &>.colored {
      display: flex;

      &>.first-color {
        background-color: $base-color;
        width: 25%;
        height: 15px;
      }

      &>.second-color {
        background-color: $base-color-2;
        width: 50%;
        height: 15px;
      }

      &>.third-color {
        background-color: $base-color-1;
        width: 25%;
        height: 15px;
      }
    }
  }

  // GUIDES TO STARTING YOUR HOME CARE JOURNEY Section
  // <!-- New---===================== -->
  section {

    &>.guides {
      padding: 0 20px;

      h2 {
        border-bottom: 3px solid $base-color-1;
        width: fit-content;
        margin: 0 auto;
        font-weight: 600;
        line-height: 45.76px;
        color: $base-color-1;
        margin-bottom: 30px;
      }

      &>.vector-pictures {
        // border: 2px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;

        img {
          width: 100%
        }
      }

      &>.guides-contents {
        // border: 2px solid red;
        // margin-top: 0px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        column-gap: 20px;
        row-gap: 30px;
        justify-content: space-between;

        &>.our-teams,
        .free-home,
        .care-package {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          row-gap: 20px;
          width: 350px;
          font-family: Montserrat;
          font-weight: 700;
          line-height: 29.26px;
          text-align: center;

          .icon-content {
            // border: 3px solid $base-color-1;

            .icons {
              border: 3px solid $base-color-1;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              height: 110px;
              width: 110px;
            }
          }

          h3,
          p {
            width: 350px;
          }

          p {
            //  border: 2px solid red;
            width: 350px;
            color: #00000080;
          }
        }
      }
    }
  }

  // <!-- Colored background section -->
  section {
    &>.colored-wrap {
      background-color: $base-color-1;
      min-height: 300px;
      padding: 50px 80px;

      &>.contents {
        h2 {
          border-bottom: 3px solid #fff;
          width: fit-content;
          margin: 0 auto;
          font-weight: 600;
          line-height: 45.76px;
          color: $base-color-1;
          color: #fff;
        }

        .caption-paragraphy {
          // border: 2px solid red;
          width: 1000px;
          margin: 0 auto;
          font-family: Montserrat;
          font-weight: 400;
          line-height: 29.26px;
          color: #fff;
          text-align: center;
          padding-top: 30px;
          padding-bottom: 20px;
        }

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
            border: 1px solid #ffffff3f;
            width: calc((100% / 3) - 50px);
            min-height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: column nowrap;
            border-radius: 0.5rem;

            div.category-item {
              // border: 5px solid red;

              &>div.category-item-header {
                // border: 5px solid red;
                width: 100%;
                display: flex;
                // justify-content: center;
                align-items: center;
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
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    // column-gap: 15px;

                    h4 {
                      color: #fff;
                      font-weight: 600;
                      line-height: 29px;
                      letter-spacing: 0em;
                      padding-top: 15px;
                      padding-bottom: 15px;
                      font-size: 20px;
                    }
                  }

                  p {
                    color: #FFFFFF80;
                    font-weight: 400;
                    line-height: 24px;
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
  }

  // <!-- Care Quality Commission--------- -->
  section {
    &>.commissin-wrap {
      // border: 1px solid rgba(0, 0, 0, 0.263);
      box-shadow: 4px 3px 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 100px;
      padding-left: 20px;
      padding-right: 20px;

      &>.picture {
        height: 100px;

        img {
          width: auto;
          height: 100px;
        }
      }

      &>.regulated-services {
        h4 {
          font-family: Montserrat;
          font-size: 25px;
          font-weight: 600;
          line-height: 36.57px;
        }

        p {
          font-family: Montserrat;
          font-weight: 400;
          line-height: 29.26px;
          color: #00000080;
        }
      }

      &>.see-more {
        border: 2px solid $base-color-2;
        border-radius: 10px;
        display: flex;
        align-items: center;
        column-gap: 10px;
        padding: 10px;

        span {
          color: $base-color-2;
          display: flex;
          font-size: 20px;
          font-weight: 600;
          line-height: 36px;
        }
      }
    }
  }

  // Request Free Assessment
  section {
    &>.see-more {
      // border: 1px solid red;
      background-color: $base-color-1;
      border-radius: 10px;
      width: fit-content;
      margin: 0 auto;
      display: flex;
      align-items: center;
      column-gap: 10px;
      padding: 15px 30px;



      span {
        display: flex;
        font-size: 20px;
        font-weight: 600;
        line-height: 36px;
        color: #fff;
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

  // <!-- Colored background section/Last -->
  section {
    &>.last-colored-wrap {
      background-color: $base-color-1;
      // min-height: 300px;
      padding: 50px 0px;

      &>.contents {
        h3 {
          // width: fit-content;
          position: relative;
          width: 100%;
          margin: 0 auto;
          font-size: 40px;
          font-weight: 600;
          line-height: 45.76px;
          color: $base-color-1;
          color: #fff;
          text-align: center;
          line-height: 60px;
        }

        h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 5%;
          width: 90%;
          border-bottom: 2px solid #fff;
        }


        .caption-paragraphy {
          // border: 2px solid red;
          width: 1000px;
          margin: 0 auto;
          font-family: Montserrat;
          font-weight: 400;
          line-height: 29.26px;
          color: #fff;
          text-align: center;
          padding-top: 30px;
          padding-bottom: 20px;
        }

        .contact-us {
          // border: 1px solid #fff;
          background-color: #fff;
          border-radius: 10px;
          width: fit-content;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          height: 50px;
          margin-bottom: 50px;

          .icon-links {
            text-decoration: none;
            font-size: 20px;
            font-weight: 700;
            line-height: 36px;
            color: $base-color-1;
            padding: 30px;
          }
        }

        .application-page-wrap {

          // border: 2px solid red;
          // application-contents
          &>.application-contents {

            &>.financial-grants {
              padding: 0px;
              display: flex;
              flex-direction: column;
              row-gap: 30px;

              &>.collapse {
                padding: 0px 50px;
                // height: 40px;
                font-style: normal;
                font-weight: 800;
                font-size: 25px;

                .n-collapse {
                  // border: 1px solid $base-color;
                  line-height: 50px;
                  color: $base-color-1;

                  .n-collapse-item {
                    // border: 2px solid red;
                    border-bottom: 1px solid $base-color;
                    // margin: 0;
                    padding-left: 20px;
                    padding-right: 24px;
                    padding-bottom: 20px;
                    background-color: #fff;

                    // make non-first-child item border transparent
                    &:last-of-type {
                      border-bottom: 1px solid transparent;
                    }

                    &.n-collapse-item--active {
                      border-top: 1px solid $base-color;
                    }

                    // collapse header and header extra
                    .collapsed-item-header {
                      // border: 2px solid red;
                      padding: 10px 0;
                      font-size: 18px;
                      font-weight: 800;
                      line-height: 40px;
                      color: $base-color-1;
                      text-align: left;
                    }

                    .header-extra-container {
                      font-size: 25px;
                      font-weight: bolder;
                      color: $base-color-2;
                    }

                    // collapsed content
                    p {
                      width: 900px;
                      font-size: 16px;
                      font-weight: 700;
                      line-height: 25.26px;
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

  // colored-last line section
  section {
    &>.colored-last {
      display: flex;

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
  .wrap {

    div.carousel-container {
      height: 400px;
      //   padding: 0 50px;
      // background-color: $banner-bg;

      &>.n-carousel {
        .carousel-item {
          height: inherit;
          display: flex;
          align-items: center;
          // background-image: url('@/assets/images/slide-1.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;

          &>.intro-content {
            // border: 2px solid red;
            padding: 10px 0px;
            position: static;
            left: auto;
            top: auto;
            transform: translateY(0);

            .intro-title {
              // border: 2px solid red;
              width: 250px;
              margin-bottom: 2.5rem;
              font-size: 20px;
              font-weight: 600;
              line-height: 25px;
              color: #fff;
              padding-left: 0px;
              text-align: center;
            }

            .intro-subtitle {
              // border: 2px solid red;
              font-weight: 700;
              font-size: 30px;
              line-height: 0px;
              letter-spacing: 0em;
              color: #fff;
              padding-left: 0px;
              text-align: center;
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
          // border: 3px solid red;
          display: none !important;
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

    P {
      font-size: 14px;
    }

    h2 {
      // border: 2px solid red;
      font-size: 16px;
    }

    h3 {
      font-size: 15px;
    }

    // First- Section---------------
    // <!-- Relative and Absolute section -->
    section {

      &>.reliable {
        // border: 5px solid red;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        padding: 0 10px;
        margin-bottom: 50px;
        margin-top: 50px;

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
          height: 400px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 95%;
            // min-height: 200px;
            overflow-y: scroll;
            position: absolute;
            top: -100px;
            bottom: 5px;
            left: 5px;
            display: flex;
            align-content: center;
            justify-content: center;

            &>.contents {
              // position: absolute;
              padding: 10px;
              overflow-y: scroll;


              h2 {
                font-weight: 600;
                line-height: 30.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;
              }

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 30.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                width: fit-content;
                margin: 0 auto;
                border-radius: 5px;
                padding: 8px;
                text-align: center;

                a {
                  font-size: 14px;
                }
              }

            }
          }
        }

      }
    }

    // Second- Section--------------
    section {
      margin-top: 50px;

      &>.second-reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        height: fit-content;
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
          margin-top: -7px;
          position: relative;
          width: 100%;
          height: 450px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 95%;
            // min-height: 200px;
            position: absolute;
            overflow-y: scroll;
            top: -100px;
            bottom: 7px;
            left: 5px;
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
                line-height: 30.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                background-color: $base-color-1;
                border-radius: 5px;
                width: fit-content;
                margin: 0 auto;
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

    // GUIDES TO STARTING YOUR HOME CARE JOURNEY Section
    section {

      &>.guides {
        padding: 0 10px;

        h2 {
          border-bottom: 3px solid $base-color-1;
          width: fit-content;
          margin: 0 auto;
          font-weight: 600;
          line-height: 25.76px;
          color: $base-color-1;
          margin-bottom: 30px;
          text-align: center;
        }

        &>.vector-pictures {
          // border: 2px solid red;
          display: none !important;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;

          img {
            width: 100%
          }
        }

        &>.guides-contents {
          // border: 2px solid red;
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          column-gap: 0px;
          row-gap: 20px;
          justify-content: center;

          &>.our-teams,
          .free-home,
          .care-package {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            row-gap: 20px;
            width: 100%;
            font-family: Montserrat;
            font-weight: 700;
            line-height: 25.26px;
            text-align: center;

            .icon-content {
              // border: 3px solid $base-color-1;

              .icons {
                border: 3px solid $base-color-1;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                height: 60px;
                width: 60px;

                .reduce-icon {
                  //  border: 2px solid red;
                  width: 35px;
                }
              }
            }

            // .icon-content::after {
            //      content: "";
            //       position: absolute;
            //       right: 0;
            //       top: 50%;
            //       width: 30px;
            //       height: 5px;
            //       background-color: $base-color-1; 
            //       transform: translateY(-50%);
            //   }

            h3,
            p {
              width: 100%;
            }

            p {
              //  border: 2px solid red;
              width: 100%;
              color: #00000080;
            }
          }

          .care-package {
            margin-bottom: 20px;
          }
        }
      }
    }

    // Cards
    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color-1;
        min-height: 300px;
        padding: 40px 10px;

        &>.contents {
          h2 {
            border-bottom: 2px solid #fff;
            width: fit-content;
            margin: 0 auto;
            font-weight: 600;
            line-height: 25px;
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 100%;
            margin: 0 auto;
            line-height: 25.26px;
            text-align: center;
            padding-top: 15px;
            padding-bottom: 15px;
          }

          .cards {
            margin-top: 30px;
            margin-bottom: 30px;
            padding: 0px;

            .items {
              width: calc((100% / 1) - 0px);

              div.category-item {

                &>div.category-item-header {
                  .caption-icon {
                    width: 100%;

                    .contents {
                      column-gap: 5px;

                      h3 {
                        font-size: 18px;
                      }

                      .dot-background {
                        width: 10px;
                        height: 10px;
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

    // <!-- Care Quality Commission--------- -->
    section {
      &>.commissin-wrap {
        // border: 1px solid rgba(0, 0, 0, 0.263);
        margin-top: 30px;
        box-shadow: 4px 3px 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        column-gap: 0px;
        row-gap: 0px;
        padding-left: 0px;
        padding-right: 0px;

        &>.picture {
          margin-top: 30px;
          height: 100px;

          img {
            width: 200px;
            height: auto;
          }
        }

        &>.regulated-services {
          margin-bottom: 30px;

          h4 {
            font-size: 17px;
            line-height: 25.57px;
            text-align: center;
          }

          p {
            font-weight: 400;
            line-height: 25.26px;
            text-align: center;
          }
        }

        &>.see-more {

          border: 2px solid $base-color-2;
          border-radius: 5px;
          display: flex;
          align-items: center;
          column-gap: 0px;
          padding: 8px;
          margin-bottom: 30px;

          span {
            color: $base-color-2;
            display: flex;
            font-size: 20px;
            font-weight: 600;
            line-height: 25px;
            font-size: 14px;

            &>.home-icon {
              display: none;
            }
          }
        }
      }
    }

    // Request Free Assessment
    section {
      &>.see-more {
        background-color: $base-color-1;
        border-radius: 5px;
        width: fit-content;
        margin: 0 auto;
        display: flex;
        align-items: center;
        column-gap: 0px;
        padding: 8px;
        margin-top: 30px;
        margin-bottom: 30px;

        span {
          display: flex;
          line-height: 25px;
          font-size: 14px;

          &>.home-icon {
            display: none;
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


    // <!-- Colored background section/Last -->
    section {
      &>.last-colored-wrap {
        padding: 40px 10px;

        &>.contents {
          h3 {
            font-size: 30px;
            line-height: 50px;
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 100%;
            margin: 0 auto;
            line-height: 25.26px;
            color: #fff;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .contact-us {
            // border: 1px solid #fff;
            border-radius: 5px;
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            height: 40px;
            margin-bottom: 10px;

            .icon-links {
              // border: 2px solid red;
              font-size: 14px;
              line-height: 25px;
              padding: 0px 25px;
            }
          }

          .application-page-wrap {

            // border: 2px solid red;
            // application-contents
            &>.application-contents {
              // border: 2px solid red;

              &>.financial-grants {
                padding: 40px 0px 40px;
                row-gap: 50px;

                &>.collapse {
                  // border: 2px solid red;
                  padding: 0px;
                  // height: 40px;
                  font-style: normal;
                  font-weight: 800;
                  font-size: 18px;

                  .n-collapse {
                    line-height: 3%;

                    .n-collapse-item {
                      padding: 0 10px;

                      &:last-of-type {
                        border-bottom: 1px solid transparent;
                      }

                      &.n-collapse-item--active {
                        border-top: 1px solid $base-color;
                      }

                      // collapse header and header extra
                      .collapsed-item-header {
                        // border: 2px solid red;
                        padding: 10px 0;
                        font-size: 18px;
                        font-weight: 800;
                        line-height: 30px;
                        font-size: 14px;
                        line-height: 25.26px;
                      }

                      .header-extra-container {
                        font-size: 18px;
                        font-weight: bolder;
                        color: $base-color-2;
                      }

                      // collapsed content
                      p {
                        width: 100%;
                        font-size: 14px;
                        padding: 0px;
                        line-height: 25.26px;
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

    // colored-last line section
    section {
      margin-top: 0px;

      &>.colored-last {
        display: flex;
        display: none;

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
@media (min-width: 251.9px) and (max-width: 350.9px) {
  .wrap {

    // border: 2px solid red;
    div.carousel-container {
      height: 400px;
      //   padding: 0 50px;
      // background-color: $banner-bg;

      &>.n-carousel {
        .carousel-item {
          height: inherit;
          display: flex;
          justify-content: center;
          align-items: center;
          // background-image: url('@/assets/images/slide-1.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;

          &>.intro-content {
            // border: 2px solid red;
            padding: 10px 0px;
            position: static;
            left: auto;
            top: auto;
            transform: translateY(0);

            .intro-title {
              // border: 2px solid red;
              margin-bottom: 2.5rem;
              font-size: 20px;
              font-weight: 600;
              line-height: 0px;
              color: #fff;
              padding-left: 0px;
            }

            .intro-subtitle {
              // border: 2px solid red;
              font-weight: 700;
              font-size: 30px;
              line-height: 0px;
              letter-spacing: 0em;
              color: #fff;
              padding-left: 0px;
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
          // border: 3px solid red;
          display: none !important;
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

    P {
      font-size: 14px;
    }

    h2 {
      // border: 2px solid red;
      font-size: 16px;
    }

    h3 {
      font-size: 15px;
    }

    // First- Section---------------
    // <!-- Relative and Absolute section -->
    section {

      &>.reliable {
        // border: 5px solid red;
        display: flex;
        flex-direction: column;
        // height: 500px;
        overflow-y: scroll;
        padding: 0 10px;
        margin-bottom: 50px;
        margin-top: 50px;

        &>.section-image {
          margin-bottom: -4px;

          // border: 1px solid red;
          img {
            // border: 1px solid red;
            width: 100%;
            height: auto;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          margin-top: -3px;
          position: relative;
          width: 100%;
          height: 400px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 95%;
            // min-height: 200px;
            overflow-y: scroll;
            position: absolute;
            top: -100px;
            bottom: 10px;
            right: 7px;
            display: flex;
            align-content: center;
            justify-content: center;

            &>.contents {
              // position: absolute;
              padding: 10px;
              overflow-y: scroll;


              h2 {
                font-weight: 600;
                line-height: 30.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;
              }

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 30.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                width: fit-content;
                margin: 0 auto;
                border-radius: 5px;
                padding: 8px;
                text-align: center;

                a {
                  font-size: 14px;
                }
              }

            }
          }
        }

      }
    }

    // Second- Section--------------
    section {
      margin-top: 50px;

      &>.second-reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        height: fit-content;
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
          margin-top: -7px;
          position: relative;
          width: 100%;
          height: 450px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 95%;
            // min-height: 200px;
            position: absolute;
            overflow-y: scroll;
            top: -100px;
            bottom: 10px;
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
                line-height: 30.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                background-color: $base-color-1;
                border-radius: 5px;
                width: fit-content;
                margin: 0 auto;
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

    // GUIDES TO STARTING YOUR HOME CARE JOURNEY Section
    section {

      &>.guides {
        padding: 0 10px;

        h2 {
          border-bottom: 3px solid $base-color-1;
          width: fit-content;
          margin: 0 auto;
          font-weight: 600;
          line-height: 25.76px;
          color: $base-color-1;
          margin-bottom: 30px;
          text-align: center;
        }


        &>.vector-pictures {
          // border: 2px solid red;
          display: none !important;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;

          img {
            width: 100%
          }
        }

        &>.guides-contents {
          // border: 2px solid red;
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          column-gap: 0px;
          row-gap: 30px;
          justify-content: center;

          &>.our-teams,
          .free-home,
          .care-package {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            row-gap: 20px;
            width: 100%;
            font-family: Montserrat;
            font-weight: 700;
            line-height: 25.26px;
            text-align: center;

            .icon-content {
              // border: 3px solid $base-color-1;

              .icons {
                border: 3px solid $base-color-1;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                height: 60px;
                width: 60px;

                .reduce-icon {
                  //  border: 2px solid red;
                  width: 35px;
                }
              }
            }


            h3,
            p {
              width: 100%;
            }

            p {
              //  border: 2px solid red;
              width: 100%;
              color: #00000080;
            }
          }

          .care-package {
            margin-bottom: 20px;
          }
        }
      }
    }

    // Cards
    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color-1;
        min-height: 300px;
        padding: 40px 10px;

        &>.contents {
          h2 {
            border-bottom: 2px solid #fff;
            width: fit-content;
            margin: 0 auto;
            font-weight: 600;
            line-height: 25px;
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 100%;
            margin: 0 auto;
            line-height: 25.26px;
            text-align: center;
            padding-top: 15px;
            padding-bottom: 15px;
          }

          .cards {
            margin-top: 30px;
            margin-bottom: 30px;
            padding: 0px;

            .items {
              width: calc((100% / 1) - 0px);

              div.category-item {

                &>div.category-item-header {
                  .caption-icon {
                    width: 100%;

                    .contents {
                      column-gap: 5px;

                      h3 {
                        font-size: 18px;
                      }

                      .dot-background {
                        width: 10px;
                        height: 10px;
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

    // <!-- Care Quality Commission--------- -->
    section {
      &>.commissin-wrap {
        // border: 1px solid rgba(0, 0, 0, 0.263);
        margin-top: 30px;
        box-shadow: 4px 3px 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        column-gap: 0px;
        row-gap: 0px;
        padding-left: 0px;
        padding-right: 0px;

        &>.picture {
          margin-top: 30px;
          height: 100px;

          img {
            width: 200px;
            height: auto;
          }
        }

        &>.regulated-services {
          margin-bottom: 30px;

          h4 {
            font-size: 17px;
            line-height: 25.57px;
            text-align: center;
          }

          p {
            font-weight: 400;
            line-height: 25.26px;
            text-align: center;
          }
        }

        &>.see-more {

          border: 2px solid $base-color-2;
          border-radius: 5px;
          display: flex;
          align-items: center;
          column-gap: 0px;
          padding: 8px;
          margin-bottom: 30px;

          span {
            color: $base-color-2;
            display: flex;
            font-size: 20px;
            font-weight: 600;
            line-height: 25px;
            font-size: 14px;

            &>.home-icon {
              display: none;
            }
          }
        }
      }
    }

    // Request Free Assessment
    section {
      &>.see-more {
        background-color: $base-color-1;
        border-radius: 5px;
        width: fit-content;
        margin: 0 auto;
        display: flex;
        align-items: center;
        column-gap: 0px;
        padding: 8px;
        margin-top: 30px;
        margin-bottom: 30px;

        span {
          display: flex;
          line-height: 25px;
          font-size: 14px;

          &>.home-icon {
            display: none;
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
            bottom: 10px;
            left: 10px;


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


    // <!-- Colored background section/Last -->
    section {
      &>.last-colored-wrap {
        padding: 40px 10px;

        &>.contents {
          h3 {
            font-size: 30px;
            line-height: 60px;
            margin-bottom: 10px;
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 100%;
            margin: 0 auto;
            line-height: 25.26px;
            color: #fff;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .contact-us {
            // border: 1px solid #fff;
            border-radius: 5px;
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            height: 40px;
            margin-bottom: 10px;

            .icon-links {
              // border: 2px solid red;
              font-size: 14px;
              line-height: 25px;
              padding: 0px 25px;
            }
          }

          .application-page-wrap {

            // border: 2px solid red;
            // application-contents
            &>.application-contents {
              // border: 2px solid red;

              &>.financial-grants {
                padding: 40px 0px 40px;
                row-gap: 50px;

                &>.collapse {
                  // border: 2px solid red;
                  padding: 0px;
                  // height: 40px;
                  font-style: normal;
                  font-weight: 800;
                  font-size: 18px;

                  .n-collapse {
                    line-height: 3%;

                    .n-collapse-item {
                      padding: 0 10px;

                      &:last-of-type {
                        border-bottom: 1px solid transparent;
                      }

                      &.n-collapse-item--active {
                        border-top: 1px solid $base-color;
                      }

                      // collapse header and header extra
                      .collapsed-item-header {
                        // border: 2px solid red;
                        padding: 10px 0;
                        font-size: 18px;
                        font-weight: 800;
                        line-height: 30px;
                        font-size: 14px;
                        line-height: 25.26px;
                      }

                      .header-extra-container {
                        font-size: 18px;
                        font-weight: bolder;
                        color: $base-color-2;
                      }

                      // collapsed content
                      p {
                        width: 100%;
                        font-size: 14px;
                        padding: 0px;
                        line-height: 25.26px;
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

    // colored-last line section
    section {
      margin-top: 0px;

      &>.colored-last {
        display: flex;
        display: none;

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
@media (min-width: 351.9px) and (max-width: 575.9px) {
  .wrap {

    // border: 2px solid red;
    div.carousel-container {
      height: 450px;
      //   padding: 0 50px;
      // background-color: $banner-bg;

      &>.n-carousel {
        .carousel-item {
          height: inherit;
          display: flex;
          justify-content: center;
          align-items: center;
          // background-image: url('@/assets/images/slide-1.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;

          &>.intro-content {
            // border: 2px solid red;
            padding: 10px 0px;
            position: static;
            left: auto;
            top: auto;
            transform: translateY(0);

            .intro-title {
              // border: 2px solid red;
              margin-bottom: 2.5rem;
              font-size: 30px;
              font-weight: 400;
              line-height: 30px;
              color: #fff;
              padding-left: 20px;
            }

            .intro-subtitle {
              // border: 2px solid red;
              font-weight: 700;
              font-size: 35px;
              line-height: 0px;
              letter-spacing: 0em;
              color: #fff;
              padding-left: 20px;
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
          // border: 3px solid red;
          display: none !important;
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

    P {
      font-size: 14px;
    }

    h2 {
      // border: 2px solid red;
      font-size: 16px;
    }

    h3 {
      font-size: 15px;
    }

    // First- Section---------------
    // <!-- Relative and Absolute section -->
    section {

      &>.reliable {
        // border: 5px solid red;
        display: flex;
        flex-direction: column;
        // height: 500px;
        overflow-y: scroll;
        padding: 0 10px;
        margin-bottom: 50px;
        margin-top: 50px;

        &>.section-image {
          // border: 1px solid red;
          margin-bottom: -3px;

          img {
            // border: 1px solid red;
            width: 100%;
            height: auto;
            margin-bottom: -3px;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          margin-top: -3px;
          position: relative;
          width: 100%;
          height: 400px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 95%;
            // min-height: 200px;
            overflow-y: scroll;
            position: absolute;
            top: -100px;
            bottom: 10px;
            right: 7px;
            display: flex;
            align-content: center;
            justify-content: center;

            &>.contents {
              // position: absolute;
              padding: 10px;
              overflow-y: scroll;


              h2 {
                font-weight: 600;
                line-height: 30.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;
              }

              p {
                font-weight: 400;
                line-height: 30.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                width: fit-content;
                margin: 0 auto;
                border-radius: 5px;
                padding: 8px;
                text-align: center;

                a {
                  font-size: 14px;
                }
              }

            }
          }
        }

      }
    }

    // Second- Section--------------
    section {
      margin-top: 50px;

      &>.second-reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        height: fit-content;
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
          margin-top: -7px;
          position: relative;
          width: 100%;
          height: 450px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 95%;
            // min-height: 200px;
            position: absolute;
            overflow-y: scroll;
            top: -100px;
            bottom: 10px;
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
                line-height: 30.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                background-color: $base-color-1;
                border-radius: 5px;
                width: fit-content;
                margin: 0 auto;
                padding: 12px 20px;
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

    // GUIDES TO STARTING YOUR HOME CARE JOURNEY Section
    section {

      &>.guides {
        padding: 0 10px;

        h2 {
          border-bottom: 3px solid $base-color-1;
          width: fit-content;
          margin: 0 auto;
          font-weight: 600;
          line-height: 25.76px;
          color: $base-color-1;
          margin-bottom: 30px;
          text-align: center;
        }


        &>.vector-pictures {
          // border: 2px solid red;
          display: none !important;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;

          img {
            width: 100%
          }
        }


        &>.guides-contents {
          // border: 2px solid red;
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          column-gap: 0px;
          row-gap: 30px;
          justify-content: center;

          &>.our-teams,
          .free-home,
          .care-package {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            row-gap: 20px;
            width: 100%;
            font-family: Montserrat;
            font-weight: 700;
            line-height: 25.26px;
            text-align: center;

            .icon-content {
              // border: 3px solid $base-color-1;

              .icons {
                border: 3px solid $base-color-1;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                height: 80px;
                width: 80px;

                .reduce-icon {
                  //  border: 2px solid red;
                  width: 45px;
                }
              }
            }

            h3,
            p {
              width: 100%;
            }

            p {
              //  border: 2px solid red;
              width: 100%;
              color: #00000080;
            }
          }

          .care-package {
            margin-bottom: 20px;
          }
        }
      }
    }

    // Cards
    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color-1;
        min-height: 300px;
        padding: 40px 10px;

        &>.contents {
          h2 {
            border-bottom: 2px solid #fff;
            width: fit-content;
            margin: 0 auto;
            font-weight: 600;
            line-height: 25px;
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 100%;
            margin: 0 auto;
            line-height: 25.26px;
            text-align: center;
            padding-top: 15px;
            padding-bottom: 15px;
          }

          .cards {
            margin-top: 30px;
            margin-bottom: 30px;
            padding: 0px;

            .items {
              width: calc((100% / 1) - 0px);

              div.category-item {

                &>div.category-item-header {
                  .caption-icon {
                    width: 100%;

                    .contents {
                      column-gap: 5px;

                      h3 {
                        font-size: 18px;
                      }

                      .dot-background {
                        width: 10px;
                        height: 10px;
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

    // <!-- Care Quality Commission--------- -->
    section {
      &>.commissin-wrap {
        // border: 1px solid rgba(0, 0, 0, 0.263);
        margin-top: 30px;
        box-shadow: 4px 3px 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        column-gap: 0px;
        row-gap: 0px;
        padding-left: 0px;
        padding-right: 0px;

        &>.picture {
          margin-top: 30px;
          height: 100px;

          img {
            width: 200px;
            height: auto;
          }
        }

        &>.regulated-services {
          margin-bottom: 30px;

          h4 {
            font-size: 17px;
            line-height: 25.57px;
            text-align: center;
          }

          p {
            font-weight: 400;
            line-height: 25.26px;
            text-align: center;
          }
        }

        &>.see-more {

          border: 2px solid $base-color-2;
          border-radius: 5px;
          display: flex;
          align-items: center;
          column-gap: 0px;
          padding: 12px 20px;
          margin-bottom: 30px;

          span {
            color: $base-color-2;
            display: flex;
            font-size: 20px;
            font-weight: 600;
            line-height: 25px;
            font-size: 14px;

            &>.home-icon {
              display: none;
            }
          }
        }
      }
    }

    // Request Free Assessment
    section {
      &>.see-more {
        background-color: $base-color-1;
        border-radius: 5px;
        width: fit-content;
        margin: 0 auto;
        display: flex;
        align-items: center;
        column-gap: 0px;
        padding: 15px 20px;
        margin-top: 30px;
        margin-bottom: 30px;

        span {
          display: flex;
          line-height: 25px;
          font-size: 14px;

          &>.home-icon {
            display: none;
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
            bottom: 10px;
            left: 10px;


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


    // <!-- Colored background section/Last -->
    section {
      &>.last-colored-wrap {
        padding: 40px 10px;

        &>.contents {
          h3 {
            font-size: 30px;
            line-height: 60px;
            margin-bottom: 10px;
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 100%;
            margin: 0 auto;
            line-height: 25.26px;
            color: #fff;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .contact-us {
            // border: 1px solid #fff;
            border-radius: 5px;
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            height: 40px;
            margin-bottom: 10px;

            .icon-links {
              // border: 2px solid red;
              font-size: 14px;
              line-height: 25px;
              padding: 0px 25px;
            }
          }

          .application-page-wrap {

            // border: 2px solid red;
            // application-contents
            &>.application-contents {
              // border: 2px solid red;

              &>.financial-grants {
                padding: 40px 0px 40px;
                row-gap: 50px;

                &>.collapse {
                  // border: 2px solid red;
                  padding: 0px;
                  // height: 40px;
                  font-style: normal;
                  font-weight: 800;
                  font-size: 18px;

                  .n-collapse {
                    line-height: 3%;

                    .n-collapse-item {
                      padding: 0 10px;

                      &:last-of-type {
                        border-bottom: 1px solid transparent;
                      }

                      &.n-collapse-item--active {
                        border-top: 1px solid $base-color;
                      }

                      // collapse header and header extra
                      .collapsed-item-header {
                        // border: 2px solid red;
                        padding: 10px 0;
                        font-size: 18px;
                        font-weight: 800;
                        line-height: 30px;
                        font-size: 14px;
                        line-height: 25.26px;
                      }

                      .header-extra-container {
                        font-size: 18px;
                        font-weight: bolder;
                        color: $base-color-2;
                      }

                      // collapsed content
                      p {
                        width: 100%;
                        font-size: 14px;
                        padding: 0px;
                        line-height: 25.26px;
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

    // colored-last line section
    section {
      margin-top: 0px;

      &>.colored-last {
        display: flex;
        display: none;

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
  .wrap {

    // border: 5px solid red;
    // border: 2px solid red;
    div.carousel-container {
      height: 450px;
      // padding: 0 50px;
      // background-color: $banner-bg;

      &>.n-carousel {
        .carousel-item {
          height: inherit;
          display: flex;
          // justify-content: center;
          align-items: center;
          // background-image: url('@/assets/images/slide-1.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;

          &>.intro-content {
            // border: 2px solid red;
            padding: 10px 0px;
            position: static;
            left: auto;
            top: auto;
            transform: translateY(0);

            .intro-title {
              // border: 2px solid red;
              margin-bottom: 2.5rem;
              font-size: 35px;
              font-weight: 600;
              line-height: 30px;
              color: #fff;
              padding-left: 20px;
            }

            .intro-subtitle {
              // border: 2px solid red;
              font-weight: 700;
              font-size: 40px;
              line-height: 0px;
              letter-spacing: 0em;
              color: #fff;
              padding-left: 100px;
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
          // border: 3px solid red;
          display: none !important;
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

    P {
      font-size: 16px;
    }

    h2 {
      // border: 2px solid red;
      font-size: 25px;
    }

    h3 {
      font-size: 20px;
    }

    // First- Section---------------
    // <!-- Relative and Absolute section -->
    section {

      &>.reliable {
        // border: 5px solid red;
        display: flex;
        flex-direction: column;
        height: fit-content;
        overflow-y: scroll;
        padding: 0px;
        margin-bottom: 50px;
        margin-top: 50px;

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
          margin-top: -7px;
          position: relative;
          width: 100%;
          height: 600px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 97%;
            // min-height: 200px;
            overflow-y: scroll;
            position: absolute;
            top: -100px;
            bottom: 10px;
            right: 10px;
            display: flex;
            align-content: center;
            justify-content: center;

            &>.contents {
              // position: absolute;
              padding: 10px;
              overflow-y: scroll;


              h2 {
                font-weight: 600;
                line-height: 30.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;
              }

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 30.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                width: fit-content;
                margin: 0 auto;
                border-radius: 5px;
                padding: 15px 30px;
                text-align: center;

                a {
                  font-size: 16px;
                }
              }

            }
          }
        }
      }
    }

    // Second- Section--------------
    section {
      margin-top: 50px;

      &>.second-reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        height: fit-content;
        overflow-y: hidden;
        margin-bottom: 50px;

        &>.section-image {
          // border: 1px solid red;
          margin-bottom: -7px;

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
          height: 500px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 97%;
            // min-height: 200px;
            position: absolute;
            overflow-y: scroll;
            top: -100px;
            bottom: 13px;
            left: 10px;
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
                line-height: 30.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                background-color: $base-color-1;
                border-radius: 5px;
                width: fit-content;
                margin: 0 auto;
                padding: 15px 30px;
                text-align: center;

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

    // colored line section
    // section {
    //   &>.colored {
    //     display: flex;

    //     &>.first-color {
    //       background-color: $base-color;
    //       width: 25%;
    //       height: 15px;
    //     }

    //     &>.second-color {
    //       background-color: $base-color-2;
    //       width: 50%;
    //       height: 15px;
    //     }

    //     &>.third-color {
    //       background-color: $base-color-1;
    //       width: 25%;
    //       height: 15px;
    //     }
    //   }
    // }


    // GUIDES TO STARTING YOUR HOME CARE JOURNEY Section
    section {

      &>.guides {
        padding: 0 10px;

        h2 {
          border-bottom: 3px solid $base-color-1;
          width: fit-content;
          margin: 0 auto;
          font-weight: 600;
          line-height: 25.76px;
          color: $base-color-1;
          margin-bottom: 30px;
          text-align: center;
        }


        &>.vector-pictures {
          // border: 2px solid red;
          display: none !important;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;

          img {
            width: 100%
          }
        }

        &>.guides-contents {
          // border: 2px solid red;
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          column-gap: 0px;
          row-gap: 20px;
          justify-content: center;

          &>.our-teams,
          .free-home,
          .care-package {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            row-gap: 20px;
            width: 100%;
            font-family: Montserrat;
            font-weight: 700;
            line-height: 25.26px;
            text-align: center;

            .icon-content {
              // border: 3px solid $base-color-1;

              .icons {
                border: 3px solid $base-color-1;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                height: 90px;
                width: 90px;

                .reduce-icon {
                  //  border: 2px solid red;
                  width: 45px;
                }
              }
            }

            // .icon-content::after {
            //      content: "";
            //       position: absolute;
            //       right: 0;
            //       top: 50%;
            //       width: 30px;
            //       height: 5px;
            //       background-color: $base-color-1; 
            //       transform: translateY(-50%);
            //   }

            h3,
            p {
              width: 100%;
              padding-bottom: 10px;
            }

            p {
              //  border: 2px solid red;
              width: 100%;
              color: #00000080;
            }
          }

          .care-package {
            margin-bottom: 20px;
          }
        }
      }
    }

    // Cards
    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color-1;
        min-height: 300px;
        padding: 40px 10px;

        &>.contents {
          h2 {
            border-bottom: 2px solid #fff;
            width: fit-content;
            margin: 0 auto;
            font-weight: 600;
            line-height: 25px;
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 100%;
            margin: 0 auto;
            line-height: 25.26px;
            text-align: center;
            padding-top: 15px;
            padding-bottom: 15px;
          }

          .cards {
            margin-top: 30px;
            margin-bottom: 30px;
            padding: 0px;

            .items {
              width: calc((100% / 1) - 0px);

              div.category-item {

                &>div.category-item-header {
                  .caption-icon {
                    width: 100%;

                    .contents {
                      column-gap: 5px;

                      h3 {
                        font-size: 18px;
                      }

                      .dot-background {
                        width: 10px;
                        height: 10px;
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

    // <!-- Care Quality Commission--------- -->
    section {
      &>.commissin-wrap {
        // border: 1px solid rgba(0, 0, 0, 0.263);
        margin-top: 30px;
        box-shadow: 4px 3px 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        column-gap: 0px;
        row-gap: 0px;
        padding-left: 0px;
        padding-right: 0px;

        &>.picture {
          margin-top: 30px;
          height: 100px;

          img {
            width: 250px;
            height: auto;
          }
        }

        &>.regulated-services {
          margin-bottom: 30px;

          h4 {
            font-size: 17px;
            line-height: 25.57px;
            text-align: center;
          }

          p {
            font-weight: 400;
            line-height: 25.26px;
            text-align: center;
          }
        }

        &>.see-more {

          border: 2px solid $base-color-2;
          border-radius: 5px;
          display: flex;
          align-items: center;
          column-gap: 0px;
          padding: 13px 30px;
          margin-bottom: 30px;

          span {
            color: $base-color-2;
            display: flex;
            font-size: 16px;
            font-weight: 600;
            line-height: 25px;

            &>.home-icon {
              display: none;
            }
          }
        }
      }
    }

    // Request Free Assessment
    section {
      &>.see-more {
        background-color: $base-color-1;
        border-radius: 5px;
        width: fit-content;
        margin: 0 auto;
        display: flex;
        align-items: center;
        column-gap: 0px;
        padding: 15px 30px;
        margin-top: 30px;
        margin-bottom: 30px;

        span {
          display: flex;
          line-height: 25px;
          font-size: 16px;

          &>.home-icon {
            display: none;
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
            bottom: 10px;
            left: 10px;


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
            width: 97%;
            height: 400px;
            position: absolute;
            overflow-y: scroll;
            top: -70px;
            bottom: 10px;
            left: 10px;
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


    // <!-- Colored background section/Last -->
    section {
      &>.last-colored-wrap {
        padding: 40px 10px;

        &>.contents {
          h2 {
            // width: fit-content;
            width: 100%;
            margin: 0 auto;
            line-height: 30.76px;
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 100%;
            margin: 0 auto;
            line-height: 25.26px;
            color: #fff;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .contact-us {
            // border: 1px solid #fff;
            border-radius: 5px;
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            height: 40px;
            margin-bottom: 10px;

            .icon-links {
              // border: 2px solid red;
              font-size: 14px;
              line-height: 25px;
              padding: 0px 25px;
            }
          }

          .application-page-wrap {

            // border: 2px solid red;
            // application-contents
            &>.application-contents {
              // border: 2px solid red;

              &>.financial-grants {
                padding: 40px 0px 40px;
                row-gap: 50px;

                &>.collapse {
                  // border: 2px solid red;
                  padding: 0px;
                  // height: 40px;
                  font-style: normal;
                  font-weight: 800;
                  font-size: 18px;

                  .n-collapse {
                    line-height: 3%;

                    .n-collapse-item {
                      padding: 0 10px;

                      &:last-of-type {
                        border-bottom: 1px solid transparent;
                      }

                      &.n-collapse-item--active {
                        border-top: 1px solid $base-color;
                      }

                      // collapse header and header extra
                      .collapsed-item-header {
                        // border: 2px solid red;
                        padding: 10px 0;
                        font-size: 18px;
                        font-weight: 800;
                        line-height: 30px;
                        font-size: 14px;
                        line-height: 25.26px;
                      }

                      .header-extra-container {
                        font-size: 18px;
                        font-weight: bolder;
                        color: $base-color-2;
                      }

                      // collapsed content
                      p {
                        width: 100%;
                        font-size: 14px;
                        padding: 0px;
                        line-height: 25.26px;
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

    // colored-last line section
    section {
      margin-top: 0px;

      &>.colored-last {
        display: flex;
        display: none;

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

@media (min-width: 768.9px) and (max-width: 991.9px) {
  .wrap {

    // border: 5px solid red;
    div.carousel-container {
      height: 450px;
      // padding: 0 50px;
      // background-color: $banner-bg;

      &>.n-carousel {
        .carousel-item {
          height: inherit;
          display: flex;
          // justify-content: center;
          align-items: center;
          // background-image: url('@/assets/images/slide-1.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;

          &>.intro-content {
            // border: 2px solid red;
            padding: 10px 0px;
            position: static;
            left: auto;
            top: auto;
            transform: translateY(0);

            .intro-title {
              // border: 2px solid red;
              margin-bottom: 2.5rem;
              font-size: 40px;
              font-weight: 600;
              line-height: 30px;
              color: #fff;
              padding-left: 20px;
            }

            .intro-subtitle {
              // border: 2px solid red;
              font-weight: 700;
              font-size: 45px;
              line-height: 0px;
              letter-spacing: 0em;
              color: #fff;
              padding-left: 100px;
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
          // border: 3px solid red;
          display: none !important;
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



    P {
      font-size: 16px;
    }

    h2 {
      // border: 2px solid red;
      font-size: 25px;
    }

    h3 {
      font-size: 20px;
    }

    // First- Section---------------
    // <!-- Relative and Absolute section -->
    section {

      &>.reliable {
        // border: 5px solid red;
        display: flex;
        flex-direction: column;
        height: fit-content;
        overflow-y: scroll;
        padding: 0px;
        margin-bottom: 50px;
        margin-top: 50px;

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
          margin-top: -7px;
          position: relative;
          width: 100%;
          height: 600px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 98%;
            // min-height: 200px;
            overflow-y: scroll;
            position: absolute;
            top: -100px;
            bottom: 10px;
            right: 10px;
            display: flex;
            align-content: center;
            justify-content: center;

            &>.contents {
              // position: absolute;
              padding: 10px;
              overflow-y: scroll;


              h2 {
                font-weight: 600;
                line-height: 30.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;
              }

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 30.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                width: fit-content;
                margin: 0 auto;
                border-radius: 5px;
                padding: 15px 30px;
                text-align: center;

                a {
                  font-size: 16px;
                }
              }

            }
          }
        }
      }
    }

    // Second- Section--------------
    section {
      margin-top: 50px;

      &>.second-reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        height: fit-content;
        overflow-y: hidden;
        margin-bottom: 50px;

        &>.section-image {
          // border: 1px solid red;
          margin-bottom: -7px;

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
          height: 500px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 98%;
            // min-height: 200px;
            position: absolute;
            overflow-y: scroll;
            top: -100px;
            bottom: 13px;
            left: 10px;
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
                line-height: 30.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                background-color: $base-color-1;
                border-radius: 5px;
                width: fit-content;
                margin: 0 auto;
                padding: 15px 30px;
                text-align: center;

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

    // colored line section
    // section {
    //   &>.colored {
    //     display: flex;

    //     &>.first-color {
    //       background-color: $base-color;
    //       width: 25%;
    //       height: 15px;
    //     }

    //     &>.second-color {
    //       background-color: $base-color-2;
    //       width: 50%;
    //       height: 15px;
    //     }

    //     &>.third-color {
    //       background-color: $base-color-1;
    //       width: 25%;
    //       height: 15px;
    //     }
    //   }
    // }

    // GUIDES TO STARTING YOUR HOME CARE JOURNEY Section
    section {

      &>.guides {
        padding: 0 10px;

        h2 {
          border-bottom: 3px solid $base-color-1;
          width: fit-content;
          margin: 0 auto;
          font-weight: 600;
          line-height: 25.76px;
          color: $base-color-1;
          margin-bottom: 30px;
          text-align: center;
        }


        &>.vector-pictures {
          // border: 2px solid red;
          display: none !important;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;

          img {
            width: 100%
          }
        }

        &>.guides-contents {
          // border: 2px solid red;
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          column-gap: 0px;
          row-gap: 20px;
          justify-content: center;

          &>.our-teams,
          .free-home,
          .care-package {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            row-gap: 20px;
            width: 100%;
            font-family: Montserrat;
            font-weight: 700;
            line-height: 25.26px;
            text-align: center;

            .icon-content {
              // border: 3px solid $base-color-1;

              .icons {
                border: 3px solid $base-color-1;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                height: 90px;
                width: 90px;

                .reduce-icon {
                  //  border: 2px solid red;
                  width: 45px;
                }
              }
            }

            // .icon-content::after {
            //      content: "";
            //       position: absolute;
            //       right: 0;
            //       top: 50%;
            //       width: 30px;
            //       height: 5px;
            //       background-color: $base-color-1; 
            //       transform: translateY(-50%);
            //   }

            h3,
            p {
              width: 100%;
              padding-bottom: 10px;
            }

            p {
              //  border: 2px solid red;
              width: 100%;
              color: #00000080;
            }
          }

          .care-package {
            margin-bottom: 20px;
          }
        }
      }
    }

    // Cards
    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color-1;
        min-height: 300px;
        padding: 40px 10px;

        &>.contents {
          h2 {
            border-bottom: 2px solid #fff;
            width: fit-content;
            margin: 0 auto;
            font-weight: 600;
            line-height: 25px;
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 100%;
            margin: 0 auto;
            line-height: 25.26px;
            text-align: center;
            padding-top: 15px;
            padding-bottom: 15px;
          }

          .cards {
            margin-top: 30px;
            margin-bottom: 30px;
            padding: 0px;

            .items {
              width: calc((100% / 1) - 0px);

              div.category-item {

                &>div.category-item-header {
                  .caption-icon {
                    width: 100%;

                    .contents {
                      column-gap: 5px;

                      h3 {
                        font-size: 18px;
                      }

                      .dot-background {
                        width: 10px;
                        height: 10px;
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

    // <!-- Care Quality Commission--------- -->
    section {
      &>.commissin-wrap {
        // border: 1px solid rgba(0, 0, 0, 0.263);
        margin-top: 30px;
        box-shadow: 4px 3px 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        column-gap: 0px;
        row-gap: 0px;
        padding-left: 0px;
        padding-right: 0px;

        &>.picture {
          margin-top: 30px;
          height: 100px;

          img {
            width: 250px;
            height: auto;
          }
        }

        &>.regulated-services {
          margin-bottom: 30px;

          h4 {
            font-size: 17px;
            line-height: 25.57px;
            text-align: center;
          }

          p {
            font-weight: 400;
            line-height: 25.26px;
            text-align: center;
          }
        }

        &>.see-more {

          border: 2px solid $base-color-2;
          border-radius: 5px;
          display: flex;
          align-items: center;
          column-gap: 0px;
          padding: 13px 30px;
          margin-bottom: 30px;

          span {
            color: $base-color-2;
            display: flex;
            font-size: 16px;
            font-weight: 600;
            line-height: 25px;

            &>.home-icon {
              display: none;
            }
          }
        }
      }
    }

    // Request Free Assessment
    section {
      &>.see-more {
        background-color: $base-color-1;
        border-radius: 5px;
        width: fit-content;
        margin: 0 auto;
        display: flex;
        align-items: center;
        column-gap: 0px;
        padding: 15px 30px;
        margin-top: 30px;
        margin-bottom: 30px;

        span {
          display: flex;
          line-height: 25px;
          font-size: 16px;

          &>.home-icon {
            display: none;
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
          position: relative;
          width: 100%;
          height: 500px;
          background-color: $base-color;
          height: 340px !important;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 98%;
            height: 400px;
            position: absolute;
            overflow-y: scroll;
            top: -70px;
            bottom: 10px;
            left: 10px;
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

    // <!-- Colored background section/Last -->
    section {
      &>.last-colored-wrap {
        padding: 40px 10px;

        &>.contents {
          h2 {
            // width: fit-content;
            width: 100%;
            margin: 0 auto;
            line-height: 30.76px;
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 100%;
            margin: 0 auto;
            line-height: 25.26px;
            color: #fff;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .contact-us {
            // border: 1px solid #fff;
            border-radius: 5px;
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            height: 50px;
            margin-top: 10px;
            margin-bottom: 10px;

            .icon-links {
              // border: 2px solid red;
              font-size: 16px;
              line-height: 25px;
              padding: 0px 50px;
            }
          }

          .application-page-wrap {

            // border: 2px solid red;
            // application-contents
            &>.application-contents {
              // border: 2px solid red;

              &>.financial-grants {
                padding: 40px 0px 40px;
                row-gap: 50px;

                &>.collapse {
                  // border: 2px solid red;
                  padding: 0px;
                  // height: 40px;
                  font-style: normal;
                  font-weight: 800;
                  font-size: 18px;

                  .n-collapse {
                    line-height: 3%;

                    .n-collapse-item {
                      padding: 0 10px;

                      &:last-of-type {
                        border-bottom: 1px solid transparent;
                      }

                      &.n-collapse-item--active {
                        border-top: 1px solid $base-color;
                      }

                      // collapse header and header extra
                      .collapsed-item-header {
                        // border: 2px solid red;
                        padding: 10px 0;
                        font-size: 18px;
                        font-weight: 800;
                        line-height: 30px;
                        line-height: 25.26px;
                      }

                      .header-extra-container {
                        font-size: 25px;
                        font-weight: bolder;
                        color: $base-color-2;
                      }

                      // collapsed content
                      p {
                        width: 100%;
                        font-size: 16px;
                        padding: 0px;
                        line-height: 25.26px;
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

    // colored-last line section
    section {
      margin-top: 0px;

      &>.colored-last {
        display: flex;
        display: none;

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
  .wrap {

    // border: 5px solid red;
    div.carousel-container {
      height: 500px;
      //   padding: 0 50px;
      // background-color: $banner-bg;

      &>.n-carousel {
        .carousel-item {
          height: inherit;
          display: flex;
          align-items: center;
          // background-image: url('@/assets/images/slide-1.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;

          &>.intro-content {
            // border: 2px solid red;
            padding: 10px 20px;
            position: static;
            left: auto;
            top: auto;
            transform: translateY(0);

            .intro-title {
              // border: 2px solid red;
              margin-bottom: 2.5rem;
              font-size: 50px;
              font-weight: 600;
              line-height: 10px;
              color: #fff;
              padding-left: 50px;
            }

            .intro-subtitle {
              // border: 2px solid red;
              // margin-bottom: 1rem;
              font-weight: 700;
              font-size: 70px;
              line-height: 80px;
              letter-spacing: 0em;
              color: #fff;
              padding-left: 300px;
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
          // border: 3px solid red;
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



    P {
      font-size: 16px;
    }

    h2 {
      // border: 2px solid red;
      font-size: 25px;
    }

    h3 {
      font-size: 20px;
    }

    // First- Section---------------
    // <!-- Relative and Absolute section -->
    section {

      &>.reliable {
        // border: 5px solid red;
        display: flex;
        flex-direction: column;
        height: fit-content;
        overflow-y: scroll;
        padding: 0px;
        margin-bottom: 50px;
        margin-top: 50px;

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
          margin-top: -7px;
          position: relative;
          width: 100%;
          height: 600px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 97%;
            // min-height: 200px;
            overflow-y: scroll;
            position: absolute;
            top: -100px;
            bottom: 10px;
            right: 10px;
            display: flex;
            align-content: center;
            justify-content: center;

            &>.contents {
              // position: absolute;
              padding: 10px;
              overflow-y: scroll;


              h2 {
                font-weight: 600;
                line-height: 30.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;
              }

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 30.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                width: fit-content;
                margin: 0 auto;
                border-radius: 5px;
                padding: 15px 30px;
                text-align: center;

                a {
                  font-size: 16px;
                }
              }

            }
          }
        }
      }
    }

    // Second- Section--------------
    section {
      margin-top: 50px;

      &>.second-reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: row-reverse;
        flex-direction: column;
        height: fit-content;
        overflow-y: hidden;
        margin-bottom: 50px;

        &>.section-image {
          // border: 1px solid red;
          margin-bottom: -7px;

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
          height: 500px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 97%;
            // min-height: 200px;
            position: absolute;
            overflow-y: scroll;
            top: -100px;
            bottom: 13px;
            left: 10px;
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
                line-height: 30.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                background-color: $base-color-1;
                border-radius: 5px;
                width: fit-content;
                margin: 0 auto;
                padding: 15px 30px;
                text-align: center;

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

    // colored line section
    // section {
    //   &>.colored {
    //     display: flex;

    //     &>.first-color {
    //       background-color: $base-color;
    //       width: 25%;
    //       height: 15px;
    //     }

    //     &>.second-color {
    //       background-color: $base-color-2;
    //       width: 50%;
    //       height: 15px;
    //     }

    //     &>.third-color {
    //       background-color: $base-color-1;
    //       width: 25%;
    //       height: 15px;
    //     }
    //   }
    // }

    // GUIDES TO STARTING YOUR HOME CARE JOURNEY Section
    section {

      &>.guides {
        padding: 0 10px;

        h2 {
          border-bottom: 3px solid $base-color-1;
          width: fit-content;
          margin: 0 auto;
          font-weight: 600;
          line-height: 25.76px;
          color: $base-color-1;
          margin-bottom: 30px;
          text-align: center;
        }


        &>.vector-pictures {
          // border: 2px solid red;
          display: none !important;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;

          img {
            width: 100%
          }
        }

        &>.guides-contents {
          // border: 2px solid red;
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          column-gap: 0px;
          row-gap: 20px;
          justify-content: center;

          &>.our-teams,
          .free-home,
          .care-package {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            row-gap: 20px;
            width: 100%;
            font-family: Montserrat;
            font-weight: 700;
            line-height: 25.26px;
            text-align: center;

            .icon-content {
              // border: 3px solid $base-color-1;

              .icons {
                border: 3px solid $base-color-1;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                height: 90px;
                width: 90px;

                .reduce-icon {
                  //  border: 2px solid red;
                  width: 45px;
                }
              }
            }

            // .icon-content::after {
            //      content: "";
            //       position: absolute;
            //       right: 0;
            //       top: 50%;
            //       width: 30px;
            //       height: 5px;
            //       background-color: $base-color-1; 
            //       transform: translateY(-50%);
            //   }

            h3,
            p {
              width: 100%;
              padding-bottom: 10px;
            }

            p {
              //  border: 2px solid red;
              width: 100%;
              color: #00000080;
            }
          }

          .care-package {
            margin-bottom: 20px;
          }
        }
      }
    }

    // Cards
    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color-1;
        min-height: 300px;
        padding: 40px 10px;

        &>.contents {
          h2 {
            border-bottom: 2px solid #fff;
            width: fit-content;
            margin: 0 auto;
            font-weight: 600;
            line-height: 25px;
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 100%;
            margin: 0 auto;
            line-height: 25.26px;
            text-align: center;
            padding-top: 15px;
            padding-bottom: 15px;
          }

          .cards {
            margin-top: 30px;
            margin-bottom: 30px;
            padding: 0px;

            .items {
              width: calc((100% / 1) - 0px);

              div.category-item {

                &>div.category-item-header {
                  .caption-icon {
                    width: 100%;

                    .contents {
                      column-gap: 5px;

                      h3 {
                        font-size: 18px;
                      }

                      .dot-background {
                        width: 10px;
                        height: 10px;
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

    // <!-- Care Quality Commission--------- -->
    section {
      &>.commissin-wrap {
        // border: 1px solid rgba(0, 0, 0, 0.263);
        margin-top: 30px;
        box-shadow: 4px 3px 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        column-gap: 0px;
        row-gap: 0px;
        padding-left: 0px;
        padding-right: 0px;

        &>.picture {
          margin-top: 30px;
          height: 100px;

          img {
            width: 250px;
            height: auto;
          }
        }

        &>.regulated-services {
          margin-bottom: 30px;

          h4 {
            font-size: 17px;
            line-height: 25.57px;
            text-align: center;
          }

          p {
            font-weight: 400;
            line-height: 25.26px;
            text-align: center;
          }
        }

        &>.see-more {

          border: 2px solid $base-color-2;
          border-radius: 5px;
          display: flex;
          align-items: center;
          column-gap: 0px;
          padding: 13px 30px;
          margin-bottom: 30px;

          span {
            color: $base-color-2;
            display: flex;
            font-size: 16px;
            font-weight: 600;
            line-height: 25px;

            &>.home-icon {
              display: none;
            }
          }
        }
      }
    }

    // Request Free Assessment
    section {
      &>.see-more {
        background-color: $base-color-1;
        border-radius: 5px;
        width: fit-content;
        margin: 0 auto;
        display: flex;
        align-items: center;
        column-gap: 0px;
        padding: 15px 30px;
        margin-top: 30px;
        margin-bottom: 30px;

        span {
          display: flex;
          line-height: 25px;
          font-size: 16px;

          &>.home-icon {
            display: none;
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
            bottom: 10px;
            left: 10px;


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
            width: 97%;
            height: 400px;
            position: absolute;
            overflow-y: scroll;
            top: -70px;
            bottom: 10px;
            left: 10px;
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

    // <!-- Colored background section/Last -->
    section {
      &>.last-colored-wrap {
        padding: 40px 10px;

        &>.contents {
          h2 {
            // width: fit-content;
            width: 100%;
            margin: 0 auto;
            line-height: 30.76px;
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 100%;
            margin: 0 auto;
            line-height: 25.26px;
            color: #fff;
            text-align: center;
            padding-top: 10px;
            padding-bottom: 10px;
          }

          .contact-us {
            // border: 1px solid #fff;
            border-radius: 5px;
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            height: 50px;
            margin-top: 10px;
            margin-bottom: 10px;

            .icon-links {
              // border: 2px solid red;
              font-size: 16px;
              line-height: 25px;
              padding: 0px 50px;
            }
          }

          .application-page-wrap {

            // border: 2px solid red;
            // application-contents
            &>.application-contents {
              // border: 2px solid red;

              &>.financial-grants {
                padding: 40px 0px 40px;
                row-gap: 50px;

                &>.collapse {
                  // border: 2px solid red;
                  padding: 0px;
                  // height: 40px;
                  font-style: normal;
                  font-weight: 800;
                  font-size: 18px;

                  .n-collapse {
                    line-height: 3%;

                    .n-collapse-item {
                      padding: 0 10px;

                      &:last-of-type {
                        border-bottom: 1px solid transparent;
                      }

                      &.n-collapse-item--active {
                        border-top: 1px solid $base-color;
                      }

                      // collapse header and header extra
                      .collapsed-item-header {
                        // border: 2px solid red;
                        padding: 10px 0;
                        font-size: 18px;
                        font-weight: 800;
                        line-height: 30px;
                        line-height: 25.26px;
                      }

                      .header-extra-container {
                        font-size: 25px;
                        font-weight: bolder;
                        color: $base-color-2;
                      }

                      // collapsed content
                      p {
                        width: 100%;
                        font-size: 16px;
                        padding: 0px;
                        line-height: 25.26px;
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

    // colored-last line section
    section {
      margin-top: 0px;

      &>.colored-last {
        display: flex;
        display: none;

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

  .wrap {
    div.carousel-container {
      height: 500px;
      //   padding: 0 50px;
      // background-color: $banner-bg;

      &>.n-carousel {
        .carousel-item {
          height: inherit;
          display: flex;
          align-items: center;
          // background-image: url('@/assets/images/slide-1.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;

          &>.intro-content {
            // border: 2px solid red;
            padding: 10px 20px;
            position: static;
            left: auto;
            top: auto;
            transform: translateY(0);

            .intro-title {
              // border: 2px solid red;
              margin-bottom: 2.5rem;
              font-size: 50px;
              font-weight: 600;
              line-height: 10px;
              color: #fff;
              padding-left: 50px;
            }

            .intro-subtitle {
              // border: 2px solid red;
              // margin-bottom: 1rem;
              font-weight: 700;
              font-size: 70px;
              line-height: 80px;
              letter-spacing: 0em;
              color: #fff;
              padding-left: 300px;
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
          // border: 3px solid red;
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

    // border: 5px solid red;

    P {
      font-size: 16px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 22px;
    }

    // First- Section---------------
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
                padding: 15px 30px;

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

    // Second- Section--------------
    section {
      margin-top: 50px;

      &>.second-reliable {
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
                padding: 15px 30px;

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

    // colored line section
    section {
      &>.colored {
        display: flex;

        &>.first-color {
          background-color: $base-color;
          width: 25%;
          height: 15px;
        }

        &>.second-color {
          background-color: $base-color-2;
          width: 50%;
          height: 15px;
        }

        &>.third-color {
          background-color: $base-color-1;
          width: 25%;
          height: 15px;
        }
      }
    }

    // GUIDES TO STARTING YOUR HOME CARE JOURNEY Section
    section {

      &>.guides {
        padding: 0 20px;

        h2 {
          border-bottom: 3px solid $base-color-1;
          width: fit-content;
          margin: 0 auto;
          font-weight: 600;
          line-height: 45.76px;
          color: $base-color-1;
          margin-bottom: 30px;
        }

        &>.vector-pictures {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 90%
          }
        }

        &>.guides-contents {
          // border: 2px solid red;
          margin-top: 0px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          justify-content: space-between;

          &>.our-teams,
          .free-home,
          .care-package {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            row-gap: 20px;
            width: 350px;
            font-family: Montserrat;
            font-weight: 700;
            line-height: 29.26px;
            text-align: center;

            .icon-content {
              // border: 3px solid $base-color-1;
              display: none;

              .icons {
                border: 3px solid $base-color-1;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                height: 100px;
                width: 100px;

                // .reduce-icon {
                //  border: 2px solid red;
                //   width: 50px;
                // }
              }
            }

            h3,
            p {
              width: 350px;
              padding-bottom: 10px;
            }

            p {
              //  border: 2px solid red;
              width: 350px;
              color: #00000080;
            }
          }
        }

      }
    }

    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color-1;
        min-height: 300px;
        padding: 50px 80px;

        &>.contents {
          h2 {
            border-bottom: 3px solid #fff;
            width: fit-content;
            margin: 0 auto;
            font-weight: 600;
            line-height: 45.76px;
            color: $base-color-1;
            color: #fff;
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 1000px;
            margin: 0 auto;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 29.26px;
            color: #fff;
            text-align: center;
            padding-top: 30px;
            padding-bottom: 20px;
          }

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
              border: 1px solid #ffffff3f;
              width: calc((100% / 3) - 50px);
              min-height: 250px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-flow: column nowrap;
              border-radius: 0.5rem;

              div.category-item {
                // border: 5px solid red;

                &>div.category-item-header {
                  // border: 5px solid red;
                  width: 100%;
                  display: flex;
                  // justify-content: center;
                  align-items: center;
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
                      justify-content: center;
                      align-items: center;
                      text-align: center;
                      // column-gap: 15px;

                      h4 {
                        color: #fff;
                        font-weight: 600;
                        line-height: 29px;
                        letter-spacing: 0em;
                        padding-top: 15px;
                        padding-bottom: 15px;
                        font-size: 20px;
                      }
                    }

                    p {
                      color: #FFFFFF80;
                      font-weight: 400;
                      line-height: 24px;
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
    }

    // <!-- Care Quality Commission--------- -->
    section {
      &>.commissin-wrap {
        // border: 1px solid rgba(0, 0, 0, 0.263);
        box-shadow: 4px 3px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 100px;
        padding-left: 20px;
        padding-right: 20px;

        &>.picture {
          height: 100px;

          img {
            width: auto;
            height: 100px;
          }
        }

        &>.regulated-services {
          h4 {
            font-family: Montserrat;
            font-size: 25px;
            font-weight: 600;
            line-height: 36.57px;
          }

          p {
            font-family: Montserrat;
            font-weight: 400;
            line-height: 29.26px;
            color: #00000080;
          }
        }

        &>.see-more {
          border: 2px solid $base-color-2;
          border-radius: 10px;
          display: flex;
          align-items: center;
          column-gap: 10px;
          padding: 10px;

          span {
            color: $base-color-2;
            display: flex;
            font-size: 20px;
            font-weight: 600;
            line-height: 36px;
          }
        }
      }
    }

    // Request Free Assessment
    section {
      &>.see-more {
        background-color: $base-color-1;
        border-radius: 10px;
        width: fit-content;
        margin: 0 auto;
        display: flex;
        align-items: center;
        column-gap: 10px;
        padding: 15px 30px;


        span {
          display: flex;
          font-size: 20px;
          font-weight: 600;
          line-height: 36px;
          color: #fff;
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

    // <!-- Colored background section/Last -->
    section {
      &>.last-colored-wrap {
        background-color: $base-color-1;
        // min-height: 300px;
        padding: 50px 0px;

        &>.contents {
          h2 {
            // width: fit-content;
            width: 100%;
            margin: 0 auto;
            font-weight: 600;
            line-height: 45.76px;
            color: $base-color-1;
            color: #fff;
            text-align: center
          }

          .caption-paragraphy {
            // border: 2px solid red;
            width: 1000px;
            margin: 0 auto;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 29.26px;
            color: #fff;
            text-align: center;
            padding-top: 30px;
            padding-bottom: 20px;
          }

          .contact-us {
            // border: 5px solid red;
            background-color: #fff;
            border-radius: 10px;
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            height: 60px;
            margin-bottom: 50px;

            .icon-links {
              text-decoration: none;
              font-size: 20px;
              font-weight: 700;
              line-height: 36px;
              color: $base-color-1;
              padding: 30px;
            }
          }

          .application-page-wrap {

            // border: 2px solid red;
            // application-contents
            &>.application-contents {

              &>.financial-grants {
                padding: 0px;
                display: flex;
                flex-direction: column;
                row-gap: 30px;

                &>.collapse {
                  padding: 0px 50px;
                  // height: 40px;
                  font-style: normal;
                  font-weight: 800;
                  font-size: 25px;

                  .n-collapse {
                    // border: 1px solid $base-color;
                    line-height: 50px;
                    color: $base-color-1;

                    .n-collapse-item {
                      // border: 2px solid red;
                      border-bottom: 1px solid $base-color;
                      // margin: 0;
                      padding-left: 20px;
                      padding-right: 24px;
                      padding-bottom: 20px;
                      background-color: #fff;

                      // make non-first-child item border transparent
                      &:last-of-type {
                        border-bottom: 1px solid transparent;
                      }

                      &.n-collapse-item--active {
                        border-top: 1px solid $base-color;
                      }

                      // collapse header and header extra
                      .collapsed-item-header {
                        // border: 2px solid red;
                        padding: 10px 0;
                        font-size: 18px;
                        font-weight: 800;
                        line-height: 40px;
                        color: $base-color-1;
                        text-align: left;
                      }

                      .header-extra-container {
                        font-size: 25px;
                        font-weight: bolder;
                        color: $base-color-2;
                      }

                      // collapsed content
                      p {
                        width: 900px;
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 25.26px;
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

    // colored-last line section
    section {
      &>.colored-last {
        display: flex;

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

@media (min-width: 1500px) {
  .wrap {
    // border: 3px solid red;

    div.carousel-container {
      height: 700px;

      &>.n-carousel {
        .carousel-item {
          height: inherit;
          display: flex;
          align-items: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;

          &>.intro-content {
            // border: 2px solid red;
            padding: 10px 20px;
            position: static;
            left: auto;
            top: auto;
            transform: translateY(0);

            .intro-title {
              // border: 2px solid red;
              margin-bottom: 2.5rem;
              font-size: 70px;
              font-weight: 600;
              line-height: 100px;
              color: #fff;
              padding-left: 50px;
            }

            .intro-subtitle {
              // border: 2px solid red;
              // margin-bottom: 1rem;
              font-weight: 700;
              font-size: 100px;
              line-height: 80px;
              letter-spacing: 0em;
              color: #fff;
              padding-left: 400px;
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
          // border: 3px solid red;
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

    P {
      font-size: 20px;
    }

    h2 {
      font-size: 40px;
    }

    h3 {
      font-size: 30px;
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
        padding: 0 200px;
        margin-bottom: 0px;

        &>.section-image {

          // border: 1px solid red;
          img {
            // border: 1px solid red;
            width: 1000px;
            height: auto;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          position: relative;
          width: 1000px;
          height: auto;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 1000px;
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

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 35.26px;
                margin-top: 40px;
                margin-bottom: 40px;
              }

              &>.color-btn {
                background-color: $base-color-1;
                border-radius: 10px;
                width: fit-content;
                padding: 30px 40px;

                a {
                  color: #fff;
                  font-size: 25px;
                  font-weight: 700;
                  text-decoration: none;
                }
              }

            }
          }
        }

      }
    }

    // Second- Section--------------
    section {
      margin-top: 50px;

      &>.second-reliable {
        // border: 5px solid $base-color;
        display: flex;
        justify-content: center;
        flex-direction: row-reverse;
        height: 750px;
        overflow-y: hidden;
        margin-bottom: 50px;

        &>.section-image {
          // border: 1px solid red;

          img {
            // border: 1px solid red;
            width: 1000px;
            height: auto;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          position: relative;
          width: 1000px;
          height: 750px;
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
                margin-top: 40px;
                margin-bottom: 40px;
              }

              &>.color-btn {
                background-color: $base-color-1;
                border-radius: 10px;
                width: fit-content;
                padding: 30px 40px;

                a {
                  color: #fff;
                  font-size: 25px;
                  font-weight: 700;
                  text-decoration: none;
                }
              }
            }
          }
        }

      }
    }

    // colored line section
    section {
      &>.colored {
        display: flex;

        &>.first-color {
          background-color: $base-color;
          width: 25%;
          height: 15px;
        }

        &>.second-color {
          background-color: $base-color-2;
          width: 50%;
          height: 15px;
        }

        &>.third-color {
          background-color: $base-color-1;
          width: 25%;
          height: 15px;
        }
      }
    }

    // GUIDES TO STARTING YOUR HOME CARE JOURNEY Section
    section {
      &>.guides {
        margin-top: 50px;
        padding: 0 200px;

        .icon-content {
          display: none;
        }

        .caption-contents {}
      }
    }

    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color-1;
        min-height: 300px;
        padding: 50px 80px;

        &>.contents {
          h2 {
            border-bottom: 3px solid #fff;
            width: fit-content;
            margin: 0 auto;
            font-weight: 600;
            line-height: 45.76px;
            color: $base-color-1;
            color: #fff;
          }

          .caption-paragraphy {
            // border: 12px solid red;
            width: 1000px;
            margin: 0 auto;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 29.26px;
            color: #fff;
            text-align: center;
            padding-top: 30px;
            padding-bottom: 20px;
          }

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
              border: 1px solid #ffffff3f;
              width: calc((100% / 3) - 50px);
              min-height: 250px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-flow: column nowrap;
              border-radius: 0.5rem;

              div.category-item {
                // border: 5px solid red;

                &>div.category-item-header {
                  // border: 5px solid red;
                  width: 100%;
                  display: flex;
                  // justify-content: center;
                  align-items: center;
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
                      justify-content: center;
                      align-items: center;
                      text-align: center;
                      // column-gap: 15px;

                      h4 {
                        color: #fff;
                        font-weight: 600;
                        line-height: 29px;
                        letter-spacing: 0em;
                        padding-top: 15px;
                        padding-bottom: 15px;
                        font-size: 20px;
                      }
                    }

                    p {
                      color: #FFFFFF80;
                      font-weight: 400;
                      line-height: 24px;
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
    }

    // <!-- Care Quality Commission--------- -->
    section {
      &>.commissin-wrap {
        // border: 5px solid rgba(0, 0, 0, 0.263);
        box-shadow: 4px 3px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 100px;
        padding-left: 20px;
        padding-right: 20px;
        height: 200px;

        &>.picture {
          // height: 100px;

          img {
            width: 100%;
            height: auto;
          }
        }

        &>.regulated-services {
          h4 {
            font-family: Montserrat;
            font-size: 25px;
            font-weight: 600;
            line-height: 36.57px;
          }

          p {
            font-family: Montserrat;
            font-weight: 400;
            line-height: 29.26px;
            color: #00000080;
          }
        }

        &>.see-more {
          border: 2px solid $base-color-2;
          border-radius: 10px;
          display: flex;
          align-items: center;
          column-gap: 10px;
          padding: 30px 40px;

          span {
            color: $base-color-2;
            display: flex;
            font-size: 25px;
            font-weight: 600;
            line-height: 36px;
          }
        }
      }
    }

    // Request Free Assessment
    section {
      &>.see-more {
        background-color: $base-color-1;
        border-radius: 10px;
        width: fit-content;
        margin: 0 auto;
        display: flex;
        align-items: center;
        column-gap: 10px;
        padding: 30px 40px;


        span {
          display: flex;
          font-size: 25px;
          font-weight: 600;
          line-height: 36px;
          color: #fff;
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
        justify-content: center;
        height: fit-content;
        overflow-y: hidden;
        margin-bottom: 50px;

        &>.section-image {

          // border: 1px solid red;
          img {
            // border: 1px solid red;
            width: 1000px;
            height: auto;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          position: relative;
          width: 1000px;
          height: auto;
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
                // border: 2px solid red;
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

    // <!-- Colored background section/Last -->
    section {
      &>.last-colored-wrap {
        background-color: $base-color-1;
        // min-height: 300px;
        padding: 50px 0px;

        &>.contents {
          h2 {
            // width: fit-content;
            width: 100%;
            margin: 0 auto;
            font-weight: 600;
            line-height: 45.76px;
            color: $base-color-1;
            color: #fff;
            text-align: center
          }

          .caption-paragraphy {
            // border: 21px solid red;
            width: 1000px;
            margin: 0 auto;
            font-family: Montserrat;
            font-weight: 400;
            line-height: 29.26px;
            color: #fff;
            text-align: center;
            padding-top: 30px;
            padding-bottom: 20px;
          }

          .contact-us {
            // border: 5px solid red;
            background-color: #fff;
            border-radius: 10px;
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            height: 100px;
            padding: 30px 80px;
            margin-bottom: 50px;
            margin-top: 30px;

            .icon-links {
              text-decoration: none;
              font-size: 25px;
              font-weight: 700;
              line-height: 36px;
              color: $base-color-1;
              // padding: 30px;
            }
          }

          .application-page-wrap {

            // border: 2px solid red;
            // application-contents
            &>.application-contents {

              &>.financial-grants {
                padding: 0px;
                display: flex;
                flex-direction: column;
                row-gap: 30px;

                &>.collapse {
                  // border: 2px solid red;
                  padding: 0px 150px;
                  // height: 40px;
                  font-style: normal;
                  font-weight: 800;
                  font-size: 25px;

                  .n-collapse {
                    // border: 1px solid $base-color;
                    line-height: 50px;
                    color: $base-color-1;

                    .n-collapse-item {
                      // border: 2px solid red;
                      border-bottom: 1px solid $base-color;
                      // margin: 0;
                      padding-left: 20px;
                      padding-right: 24px;
                      padding-bottom: 20px;
                      background-color: #fff;

                      // make non-first-child item border transparent
                      &:last-of-type {
                        border-bottom: 1px solid transparent;
                      }

                      &.n-collapse-item--active {
                        border-top: 1px solid $base-color;
                      }

                      // collapse header and header extra
                      .collapsed-item-header {
                        // border: 25px solid red;
                        padding: 25px 0;
                        font-size: 30px;
                        font-weight: 800;
                        line-height: 40px;
                        color: $base-color-1;
                        text-align: left;
                      }

                      .header-extra-container {
                        font-size: 40px;
                        font-weight: bolder;
                        color: $base-color-2;
                      }

                      // collapsed content
                      p {
                        width: 85%;
                        font-size: 25px;
                        font-weight: 700;
                        line-height: 25.26px;
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

    // colored-last line section
    section {
      &>.colored-last {
        display: flex;

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
</style>
