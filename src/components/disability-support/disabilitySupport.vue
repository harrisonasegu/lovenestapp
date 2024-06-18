<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { reactive } from 'vue';
import { Icon } from '@iconify/vue'
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'
import { NCarousel, NIcon } from 'naive-ui'

import {
  NCollapseItem,
  NSpace,
  NCollapse,
  NH2,
  type CollapseProps
} from 'naive-ui'

const expandedItem = reactive({
  name: '0',
  expanded: true
})

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

import Icon1 from '@/assets/images/newImage/Icons/covid-icon.png'
import Icon2 from '@/assets/images/newImage/Icons/list-icon.png'
import Image1 from '@/assets/images/newImage/newsimage.png'

</script>

<template>
  <div id="toTop" class="care-giver-wrap">

    <div class="banner">
      <div class="intro-content">
        <h2 class="intro-title">
          News & Resources
        </h2>
        <br>
        <h1 class="intro-subtitle">
          Center
        </h1>
      </div>
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
                          RESOURCES
                        </h2>
                      </div>
                    </div>
                    <p>
                      Stay up to date on key senior topics and resources, get news from LoveNest Home Care, and more.
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
                        <img :src="Icon1" alt="picture">
                      </div>
                      <h4>Health and Safety</h4>
                    </div>
                    <p>
                      LoveNest Home Care continues to meet needs of our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="items white-colored last-card">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="caption-icon">
                    <div class="contents">
                      <div class="background-icon">
                        <img :src="Icon2" alt="picture">
                      </div>
                      <h4>Helpful Links</h4>
                    </div>
                    <p>
                      Find links to valuable online resources for seniors and their families.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- LATEST NEWS & BLOG -->
    <section>
      <div class="line-paragraphy">
        <!-- underline contents -->
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>
              <RouterLink class="icon-links" to="/latest-new">
                LATEST NEWS & BLOG <span>

                  <Icon icon="clarity:cursor-hand-click-line" width="50" height="50" style="color: #4897E6" />
                </span> </RouterLink>
            </h3>
          </div>
        </div>

        <p>
          See the latest news from LoveNest and get helpful information on senior in-home care.
        </p>

        <div class="cards">
          <!-- card with light blue style 1 -->
          <div class="items">
            <div class="category-item">
              <!-- card title and icon -->
              <div class="category-item-header">
                <div class="reliable">
                  <div class="section-image">
                    <img :src="Image1" alt="picture">
                  </div>
                  <div class="section-background">

                    <div class="light-background">
                      <div class="contents">
                        <h2>
                          A Day in the Life of a
                          Caregiver
                        </h2>
                        <p>
                          As the general, worldwide trend is for people to live longer, caregivers are playing an
                          increasingly vital role in our society. In-home aides ...
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <!-- card with light red style 1 -->
          <div class="items">
            <div class="category-item">
              <!-- card title and icon -->
              <div class="category-item-header">
                <div class="reliable">
                  <div class="section-image">
                    <img :src="Image1" alt="picture">
                  </div>
                  <div class="section-background first-long-lenght">

                    <div class="light-background">
                      <div class="contents">
                        <h2>
                          The LoveNest
                          Difference:
                          What Sets Us Apart
                        </h2>
                        <p>
                          Accesss to good health care is vital for folks at any stage of life, but it is particularly
                          important to older adults.
                          Regular, reliable health care ...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- card with light blue style 1 -->
          <div class="items">
            <div class="category-item">
              <!-- card title and icon -->
              <div class="category-item-header">
                <div class="reliable">
                  <div class="section-image">
                    <img :src="Image1" alt="picture">
                  </div>
                  <div class="section-background">

                    <div class="light-background">
                      <div class="contents">
                        <h2>
                          When Does At-Home
                          Care Make Sense?
                        </h2>
                        <p>
                          As people age, they often need more assistance, day in and day out. At the same time, many
                          seniors prefer to lead an independent life and may want ...
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <!-- card with light red style 1 -->
          <div class="items">
            <div class="category-item">
              <!-- card title and icon -->
              <div class="category-item-header">
                <div class="reliable">
                  <div class="section-image">
                    <img :src="Image1" alt="picture">
                  </div>
                  <div class="section-background lightblue-colored">

                    <div class="light-background">
                      <div class="contents">
                        <h2>
                          A Day in the Life of a
                          Caregiver
                        </h2>
                        <p>
                          As the general, worldwide trend is for people to live longer, caregivers are playing an
                          increasingly vital role in our society. In-home aides ...
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <!-- card with light blue style 1 -->
          <div class="items">
            <div class="category-item">
              <!-- card title and icon -->
              <div class="category-item-header">
                <div class="reliable">
                  <div class="section-image">
                    <img :src="Image1" alt="picture">
                  </div>
                  <div class="section-background second-long-lenght">

                    <div class="light-background">
                      <div class="contents">
                        <h2>
                          The LoveNest
                          Difference:
                          What Sets Us Apart
                        </h2>
                        <p>
                          Accesss to good health care is vital for folks at any stage of life, but it is particularly
                          important to older adults.
                          Regular, reliable health care ...
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <!-- card with light red style 1 -->
          <div class="items">
            <div class="category-item">
              <!-- card title and icon -->
              <div class="category-item-header">
                <div class="reliable">
                  <div class="section-image">
                    <img :src="Image1" alt="picture">
                  </div>
                  <div class="section-background lightblue-colored">

                    <div class="light-background">
                      <div class="contents">
                        <h2>
                          When Does At-Home
                          Care Make Sense?
                        </h2>
                        <p>
                          As people age, they often need more assistance, day in and day out. At the same time, many
                          seniors prefer to lead an independent life and may want ...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
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

          <!-- testing -->
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

                      <n-collapse accordion arrow-placement="right" :default-expanded-names="expandedItem.name">
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

    <section>
      <div class="last-section">
        <h3>
          NEED MORE HELP?
        </h3>
        <p class="caption-paragraphy">
          We're always here and ready to assist you in any way we can.Feel free to contact us at any time and we'll get
          back
          to you as soon as we can.
        </p>

        <div class="contact-us">
          <!-- <a class="number" href="tel:++0808 501 5786">Contact Us</a> -->
          <RouterLink class="icon-links" to="/about"> Visit Our Contact Page</RouterLink>
        </div>

      </div>
    </section>


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
    background-image: url('../../assets/images/newImage/new-banner.png');
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
        padding-left: 350px;
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

  // <!-- Colored background section -->
  section {
    &>.colored-wrap {
      background-color: $base-color;
      min-height: 300px;
      padding: 30px 0px;
      // margin-top: 0px;

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
          padding: 0px;

          .items {
            // border: 5px solid red;
            width: calc((100% / 3) - 50px);
            min-height: 200px;
            display: flex;
            flex-flow: column nowrap;
            // line-height: 2px;

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

                    .background-icon {
                      img {
                        // border: 3px solid red;
                        height: 100px;
                      }

                    }

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
            // border: 3px solid red;
            background-color: #2408CF4D;

            h2 {
              text-align: right !important;
            }

            p {
              color: #fff;
              text-align: right !important;
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

  // <!-- LATEST NEWS & BLOG -->
  section {
    &>.line-paragraphy {
      margin-top: 30px;

      &>.underline-wrap {
        padding: 0 20px;

        &>.making-preparation {
          display: flex;
          justify-content: center;

          .icon-links {
            text-decoration: none !important;
            color: $base-color-1;
            display: flex;
            align-items: center;
            column-gap: 10px;
          }

          span {
            // display: flex;
          }

          // border: 4px solid red;
          h3 {
            color: $base-color-1;
            position: relative;
            font-weight: 600;
            font-size: 35px;
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
        width: 80%;
        margin: 0 auto;
        padding: 0 20px;
        text-align: center;
        margin-bottom: 50px;
      }

      .cards {
        width: 95%;
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
          // border: 1px solid red;
          width: calc((100% / 3) - 20px);
          min-height: 250px;
          display: flex;
          flex-flow: column nowrap;

          div.category-item {
            &>div.category-item-header {
              // border: 5px solid red;
              width: 100%;
              display: flex;
              column-gap: 10px;

              &>.reliable {
                // border: 5px solid red;
                display: flex;
                flex-direction: column;

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

                // Style with light blue color 1
                &>.section-background {
                  background-color: $base-color;
                  margin-top: -3px;
                  position: relative;
                  width: 100%;
                  height: 300px;

                  &>.light-background {
                    // border: 1px solid red;
                    background-color: #FFFFFFB2;
                    width: 95%;
                    height: 250px;
                    position: absolute;
                    top: -30px;
                    bottom: 10px;
                    right: 10px;
                    display: flex;
                    align-content: center;
                    justify-content: center;

                    &>.contents {
                      padding: 0 10px;

                      h2 {
                        // border: 1px solid red;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 30.86px;
                        color: $base-color-1;
                        margin-bottom: 20px;
                        text-align: left;
                      }

                      p {
                        width: 100%;
                        font-weight: 400;
                        line-height: 30.26px;
                        text-align: left;
                        padding: 0px;
                      }
                    }
                  }
                }

                // Style with light blue color 1
                &>.first-long-lenght {
                  background-color: $base-color-2 !important;
                  margin-top: -3px;
                  position: relative;
                  width: 100%;
                  height: 300px;

                  &>.light-background {
                    // border: 1px solid red;
                    background-color: #FFFFFFB2;
                    width: 95%;
                    height: 320px !important;
                    position: absolute;
                    top: -30px;
                    bottom: 10px;
                    right: 10px;
                    display: flex;
                    align-content: center;
                    justify-content: center;

                    &>.contents {
                      padding: 0 10px;

                      h2 {
                        // border: 1px solid red;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 30.86px;
                        color: $base-color-1;
                        margin-bottom: 20px;
                        text-align: left;
                      }

                      p {
                        width: 100%;
                        font-weight: 400;
                        line-height: 30.26px;
                        text-align: left;
                        padding: 0px;
                      }
                    }
                  }
                }

                // Style with light blue color 1
                &>.lightblue-colored {
                  background-color: $base-color-2 !important;
                  margin-top: -3px;
                  position: relative;
                  width: 100%;
                  height: 300px;

                  &>.light-background {
                    // border: 1px solid red;
                    background-color: #FFFFFFB2;
                    width: 95%;
                    height: 250px;
                    position: absolute;
                    top: -30px;
                    bottom: 10px;
                    right: 10px;
                    display: flex;
                    align-content: center;
                    justify-content: center;

                    &>.contents {
                      padding: 0 10px;

                      h2 {
                        // border: 1px solid red;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 30.86px;
                        color: $base-color-1;
                        margin-bottom: 20px;
                        text-align: left;
                      }

                      p {
                        width: 100%;
                        font-weight: 400;
                        line-height: 30.26px;
                        text-align: left;
                        padding: 0px;
                      }
                    }
                  }
                }

                // Style with light blue color 1
                &>.second-long-lenght {
                  background-color: $base-color;
                  margin-top: -3px;
                  position: relative;
                  width: 100%;
                  height: 300px;

                  &>.light-background {
                    // border: 1px solid red;
                    background-color: #FFFFFFB2;
                    width: 95%;
                    height: 320px !important;
                    position: absolute;
                    top: -30px;
                    bottom: 10px;
                    right: 10px;
                    display: flex;
                    align-content: center;
                    justify-content: center;

                    &>.contents {
                      padding: 0 10px;

                      h2 {
                        // border: 1px solid red;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 30.86px;
                        color: $base-color-1;
                        margin-bottom: 20px;
                        text-align: left;
                      }

                      p {
                        width: 100%;
                        font-weight: 400;
                        line-height: 30.26px;
                        text-align: left;
                        padding: 0px;
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

  section {
    &>.last-section {
      margin-top: 50px;
      margin-bottom: 100px;

      h3 {
        // width: fit-content;
        position: relative;
        width: 100%;
        margin: 0 auto;
        font-size: 40px;
        font-weight: 600;
        line-height: 45.76px;
        color: $base-color-1;
        text-align: center;
        line-height: 60px;
      }

      h3::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 5%;
        width: 90%;
        border-bottom: 2px solid $base-color-1;
      }

      .caption-paragraphy {
        // border: 2px solid red;
        width: 1000px;
        margin: 0 auto;
        font-family: Montserrat;
        font-weight: 400;
        line-height: 29.26px;
        text-align: center;
        padding-top: 30px;
        padding-bottom: 20px;
      }

      .contact-us {
        // border: 1px solid #fff;
        background-color: $base-color-1;
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
          padding: 30px;
          color: #fff;
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
      font-size: 14px !important;
    }

    h3 {
      font-size: 15px !important;
    }

    h2 {
      font-size: 16px;
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
          text-align: center;
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

    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color;
        min-height: 300px;
        padding: 30px 0px;

        &>.contents {
          .cards {
            // border: 1px solid red;
            flex-direction: column;
            margin-top: 30px;
            margin-bottom: 50px;
            padding: 0px;

            .items {
              // border: 5px solid red;
              width: calc((100% / 1) - 0px);
              min-height: 200px;
              display: flex;
              flex-flow: column nowrap;
              // line-height: 2px;

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

                      .background-icon {
                        img {
                          // border: 3px solid red;
                          height: 70px;
                          margin-top: 20px;
                        }

                      }

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
                    }
                  }
                }
              }
            }

            .first-colored {
              // border: 3px solid red;
              background-color: #2408CF4D;
              margin-top: -40px !important;

              h2 {
                text-align: center !important;
                font-size: 20px !important;
              }

              p {
                color: #fff;
                text-align: center !important;
              }
            }

            .last-card {
              margin-bottom: -60px !important;
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

    // <!-- LATEST NEWS & BLOG -->
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
          // border: 2px solid red;
          width: 95%;
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
            // border: 1px solid red;
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

                &>.reliable {
                  // border: 5px solid red;
                  display: flex;
                  flex-direction: column;

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

                  // Style with light blue color 1
                  &>.section-background {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.first-long-lenght {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.lightblue-colored {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.second-long-lenght {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
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

    section {
      &>.last-section {
        // border: 2px solid red;
        margin-top: 50px;
        margin-bottom: 0px;
        padding: 0 10px;

        h3 {
          // width: fit-content;
          position: relative;
          width: 100%;
          margin: 0 auto;
          font-size: 40px;
          font-weight: 600;
          line-height: 45.76px;
          color: $base-color-1;
          text-align: center;
          line-height: 60px;
        }

        h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 5%;
          width: 90%;
          border-bottom: 2px solid $base-color-1;
        }

        .caption-paragraphy {
          // border: 2px solid red;
          width: 100%;
          font-weight: 400;
          line-height: 29.26px;
          text-align: center;
          padding-top: 30px;
          padding-bottom: 20px;
        }

        .contact-us {
          // border: 1px solid #fff;
          background-color: $base-color-1;
          border-radius: 10px;
          width: fit-content;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          height: 45px;
          margin-bottom: 30px;

          .icon-links {
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
            line-height: 36px;
            padding: 0px 25px;
            color: #fff;
          }
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
      font-size: 14px !important;
    }

    h3 {
      font-size: 15px !important;
    }

    h2 {
      font-size: 16px;
    }

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
          font-size: 30px;
          line-height: 25px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
        }
      }
    }


    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color;
        min-height: 300px;
        padding: 30px 0px;

        &>.contents {
          .cards {
            // border: 1px solid red;
            flex-direction: column;
            margin-top: 30px;
            margin-bottom: 50px;
            padding: 0px;

            .items {
              // border: 5px solid red;
              width: calc((100% / 1) - 0px);
              min-height: 200px;
              display: flex;
              flex-flow: column nowrap;
              // line-height: 2px;

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

                      .background-icon {
                        img {
                          // border: 3px solid red;
                          height: 70px;
                          margin-top: 20px;
                        }

                      }

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
                    }
                  }
                }
              }
            }

            .first-colored {
              // border: 3px solid red;
              background-color: #2408CF4D;
              margin-top: -40px !important;

              h2 {
                text-align: center !important;
                font-size: 20px !important;
              }

              p {
                color: #fff;
                text-align: center !important;
              }
            }

            .last-card {
              margin-bottom: -60px !important;
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

    // <!-- LATEST NEWS & BLOG -->
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
          // border: 2px solid red;
          width: 95%;
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
            // border: 1px solid red;
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

                &>.reliable {
                  // border: 5px solid red;
                  display: flex;
                  flex-direction: column;

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

                  // Style with light blue color 1
                  &>.section-background {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.first-long-lenght {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.lightblue-colored {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.second-long-lenght {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
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

    section {
      &>.last-section {
        // border: 2px solid red;
        margin-top: 50px;
        margin-bottom: 0px;
        padding: 0 10px;

        h3 {
          // width: fit-content;
          position: relative;
          width: 100%;
          margin: 0 auto;
          font-size: 40px;
          font-weight: 600;
          line-height: 45.76px;
          color: $base-color-1;
          text-align: center;
          line-height: 60px;
        }

        h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 5%;
          width: 90%;
          border-bottom: 2px solid $base-color-1;
        }

        .caption-paragraphy {
          // border: 2px solid red;
          width: 100%;
          font-weight: 400;
          line-height: 29.26px;
          text-align: center;
          padding-top: 30px;
          padding-bottom: 20px;
        }

        .contact-us {
          // border: 1px solid #fff;
          background-color: $base-color-1;
          border-radius: 10px;
          width: fit-content;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          height: 45px;
          margin-bottom: 30px;

          .icon-links {
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
            line-height: 36px;
            padding: 0px 25px;
            color: #fff;
          }
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
    }

    h3 {
      font-size: 18px !important;
    }

    h2 {
      font-size: 20px !important;
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
          line-height: 30px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
          text-align: center;
        }
      }
    }

    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color;
        min-height: 300px;
        padding: 30px 0px;

        &>.contents {
          .cards {
            // border: 11px solid red;
            flex-direction: column;
            margin-top: 30px;
            margin-bottom: 50px;
            padding: 0px;

            .items {
              // border: 5px solid red;
              width: calc((100% / 1) - 0px);
              min-height: 200px;
              display: flex;
              flex-flow: column nowrap;
              // line-height: 2px;

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

                      .background-icon {
                        img {
                          // border: 3px solid red;
                          height: 70px;
                          margin-top: 20px;
                        }

                      }

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
                    }
                  }
                }
              }
            }

            .first-colored {
              // border: 3px solid red;
              background-color: #2408CF4D;
              margin-top: -40px !important;

              h2 {
                text-align: center !important;
                font-size: 20px !important;
              }

              p {
                color: #fff;
                text-align: center !important;
              }
            }

            .last-card {
              margin-bottom: -60px !important;
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

    // <!-- LATEST NEWS & BLOG and Cards-->
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
              font-size: 18px !important;
              line-height: 40px;
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
          // border: 5px solid red;
          width: 95%;
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
            // border: 1px solid red;
            width: calc((100% / 1) - 0px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                width: 100%;
                display: flex;
                justify-content: center;
                column-gap: 10px;

                &>.reliable {
                  // border: 5px solid red;
                  display: flex;
                  flex-direction: column;

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

                  // Style with light blue color 1
                  &>.section-background {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 11px solid red;
                      width: 94.5%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.first-long-lenght {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      width: 94.5%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.lightblue-colored {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      border: px solid red;
                      width: 94.5%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.second-long-lenght {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 94.5%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
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
                        font-size: 16px !important;
                        font-weight: 800;
                        line-height: 30px;
                        font-size: 14px;
                        line-height: 25.26px;
                      }

                      .header-extra-container {
                        // font-size: 17px;
                        font-weight: bolder;
                        color: $base-color-2;
                      }

                      // collapsed content
                      p {
                        width: 100%;
                        font-size: 14px !important;
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

    section {
      &>.last-section {
        // border: 2px solid red;
        margin-top: 50px;
        margin-bottom: 0px;
        padding: 0 10px;

        h3 {
          // width: fit-content;
          position: relative;
          width: 100%;
          margin: 0 auto;
          font-size: 40px;
          font-weight: 600;
          line-height: 45.76px;
          color: $base-color-1;
          text-align: center;
          line-height: 50px;
        }

        h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 5%;
          width: 90%;
          border-bottom: 2px solid $base-color-1;
        }

        .caption-paragraphy {
          // border: 2px solid red;
          width: 100%;
          font-weight: 400;
          line-height: 29.26px;
          text-align: center;
          padding-top: 30px;
          padding-bottom: 20px;
        }

        .contact-us {
          // border: 1px solid #fff;
          background-color: $base-color-1;
          border-radius: 10px;
          width: fit-content;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          height: 45px;
          margin-bottom: 30px;

          .icon-links {
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
            line-height: 36px;
            padding: 0px 25px;
            color: #fff;
          }
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

    h3 {
      font-size: 30px !important;
    }

    // h2 {
    //   font-size: 22px !important;
    // }

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

    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color;
        min-height: 300px;
        padding: 30px 0px;

        &>.contents {
          .cards {
            // border: 11px solid red;
            flex-direction: column;
            margin-top: 30px;
            margin-bottom: 50px;
            padding: 0px;

            .items {
              // border: 5px solid red;
              width: calc((100% / 1) - 0px);
              min-height: 200px;
              display: flex;
              flex-flow: column nowrap;
              // line-height: 2px;

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

                      .background-icon {
                        img {
                          // border: 3px solid red;
                          height: 70px;
                          margin-top: 20px;
                        }

                      }

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
                    }
                  }
                }
              }
            }

            .first-colored {
              // border: 3px solid red;
              background-color: #2408CF4D;
              margin-top: -40px !important;

              h2 {
                text-align: center !important;
                font-size: 20px !important;
              }

              p {
                color: #fff;
                text-align: center !important;
              }
            }

            .last-card {
              margin-bottom: -60px !important;
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

    // <!-- LATEST NEWS & BLOG and Cards-->
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
          // border: 5px solid red;
          width: 95%;
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
            // border: 1px solid red;
            width: calc((100% / 2) - 10px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 100%;
                display: flex;
                column-gap: 10px;

                &>.reliable {
                  // border: 5px solid red;
                  display: flex;
                  flex-direction: column;

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

                  // Style with light blue color 1
                  &>.section-background {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 11px solid red;
                      width: 95%;
                      right: 8px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.first-long-lenght {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      width: 95%;
                      right: 8px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.lightblue-colored {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 5px solid red;
                      width: 95%;
                      right: 8px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.second-long-lenght {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 8px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
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
            // border: 12px solid red;
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
                        font-size: 18px !important;
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
                        font-size: 16px !important;
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

    section {
      &>.last-section {
        // border: 2px solid red;
        margin-top: 50px;
        margin-bottom: 0px;
        padding: 0 10px;

        h3 {
          // width: fit-content;
          position: relative;
          width: 100%;
          margin: 0 auto;
          font-size: 40px;
          font-weight: 600;
          line-height: 45.76px;
          color: $base-color-1;
          text-align: center;
          line-height: 50px;
        }

        h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 5%;
          width: 90%;
          border-bottom: 2px solid $base-color-1;
        }

        .caption-paragraphy {
          // border: 2px solid red;
          width: 100%;
          font-weight: 400;
          line-height: 29.26px;
          text-align: center;
          padding-top: 30px;
          padding-bottom: 20px;
        }

        .contact-us {
          // border: 1px solid #fff;
          background-color: $base-color-1;
          border-radius: 10px;
          width: fit-content;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          height: 45px;
          margin-bottom: 30px;

          .icon-links {
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
            line-height: 36px;
            padding: 0px 25px;
            color: #fff;
          }
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

    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color;
        min-height: 300px;
        padding: 30px 0px;

        &>.contents {
          .cards {
            // border: 11px solid red;
            flex-direction: column;
            margin-top: 30px;
            margin-bottom: 50px;
            padding: 0px;

            .items {
              // border: 5px solid red;
              width: calc((100% / 1) - 0px);
              min-height: 200px;
              display: flex;
              flex-flow: column nowrap;
              // line-height: 2px;

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

                      .background-icon {
                        img {
                          // border: 3px solid red;
                          height: 70px;
                          margin-top: 20px;
                        }

                      }

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
                    }
                  }
                }
              }
            }

            .first-colored {
              // border: 3px solid red;
              background-color: #2408CF4D;
              margin-top: -40px !important;

              h2 {
                text-align: center !important;
                font-size: 20px !important;
              }

              p {
                color: #fff;
                text-align: center !important;
              }
            }

            .last-card {
              margin-bottom: -60px !important;
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

    // <!-- LATEST NEWS & BLOG and Cards-->
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
          // border: 5px solid red;
          width: 95%;
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
            // border: 1px solid red;
            width: calc((100% / 2) - 10px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 100%;
                display: flex;
                column-gap: 10px;

                &>.reliable {
                  // border: 5px solid red;
                  display: flex;
                  flex-direction: column;

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

                  // Style with light blue color 1
                  &>.section-background {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 11px solid red;
                      width: 95%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.first-long-lenght {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      width: 95%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.lightblue-colored {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 5px solid red;
                      width: 95%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.second-long-lenght {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
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
            // border: 12px solid red;
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
                        font-size: 18px !important;
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
                        font-size: 16px !important;
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

    section {
      &>.last-section {
        // border: 2px solid red;
        margin-top: 50px;
        margin-bottom: 0px;
        padding: 0 10px;

        h3 {
          // width: fit-content;
          position: relative;
          width: 100%;
          margin: 0 auto;
          font-size: 40px;
          font-weight: 600;
          line-height: 45.76px;
          color: $base-color-1;
          text-align: center;
          line-height: 50px;
        }

        h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 5%;
          width: 90%;
          border-bottom: 2px solid $base-color-1;
        }

        .caption-paragraphy {
          // border: 2px solid red;
          width: 100%;
          font-weight: 400;
          line-height: 29.26px;
          text-align: center;
          padding-top: 30px;
          padding-bottom: 20px;
        }

        .contact-us {
          // border: 1px solid #fff;
          background-color: $base-color-1;
          border-radius: 10px;
          width: fit-content;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          height: 45px;
          margin-bottom: 30px;

          .icon-links {
            text-decoration: none;
            font-size: 14px;
            font-weight: 700;
            line-height: 36px;
            padding: 0px 25px;
            color: #fff;
          }
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

    // <!-- LATEST NEWS & BLOG -->
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
          border: 1px solid red;
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
      font-size: 20px !important;
    }

    h3 {
      color: $base-color-1;
      font-weight: 600 !important;
    }

    h2 {
      // font-size: 30px !important;
      line-height: 40px !important;
      color: $base-color-1;
    }

    &>.banner {
      height: 500px;

      &>.intro-content {
        // border: 12px solid red;
        line-height: 20px;

        .intro-title {
          // border: 2px solid red;
          font-size: 70px;
        }

        .intro-subtitle {
          // border: 2px solid red;
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

    // <!-- Colored background section -->
    section {
      &>.colored-wrap {
        background-color: $base-color;
        min-height: 300px;
        padding: 150px 200px;
        // margin-top: 0px;

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
            padding: 0px;

            .items {
              // border: 5px solid red;
              width: calc((100% / 3) - 50px);
              padding: 50px 0;
              // line-height: 2px;

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

                      .background-icon {
                        img {
                          // border: 3px solid red;
                          height: 100px;
                        }

                      }

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
              // border: 3px solid red;
              background-color: #2408CF4D;

              h2 {
                text-align: right !important;
              }

              p {
                color: #fff;
                text-align: right !important;
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

    // <!-- LATEST NEWS & BLOG -->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

        &>.underline-wrap {
          padding: 0 200px;

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
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          column-gap: 20px;
          row-gap: 50px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            // border: 1px solid red;
            width: calc((100% / 3) - 20px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {

              &>div.category-item-header {
                width: 100%;
                display: flex;
                justify-content: center;
                column-gap: 10px;

                &>.reliable {
                  // border: 5px solid red;
                  display: flex;
                  flex-direction: column;

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

                  // Style with light blue color 1
                  &>.section-background {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      background-color: #FFFFFFB2;
                      width: 95%;
                      height: 250px;
                      position: absolute;
                      top: -30px;
                      bottom: 10px;
                      right: 10px;
                      display: flex;
                      align-content: center;
                      justify-content: center;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: left;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: left;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.first-long-lenght {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      background-color: #FFFFFFB2;
                      width: 95%;
                      height: 320px !important;
                      position: absolute;
                      top: -30px;
                      bottom: 10px;
                      right: 10px;
                      display: flex;
                      align-content: center;
                      justify-content: center;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: left;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: left;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.lightblue-colored {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      background-color: #FFFFFFB2;
                      width: 95%;
                      height: 250px;
                      position: absolute;
                      top: -30px;
                      bottom: 10px;
                      right: 10px;
                      display: flex;
                      align-content: center;
                      justify-content: center;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: left;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: left;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.second-long-lenght {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      background-color: #FFFFFFB2;
                      width: 95%;
                      height: 320px !important;
                      position: absolute;
                      top: -30px;
                      bottom: 10px;
                      right: 10px;
                      display: flex;
                      align-content: center;
                      justify-content: center;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: left;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: left;
                          padding: 0px;
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
    }

    // <!-- Colored background section/Last -->
    section {
      &>.last-colored-wrap {
        background-color: $base-color-1;
        // min-height: 300px;
        padding: 50px 150px;

        &>.contents {
          h3 {
            // width: fit-content;
            position: relative;
            width: 100%;
            margin: 0 auto;
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
                        padding: 10px 0;
                        font-size: 25px !important;
                        font-weight: 800;
                        line-height: 40px;
                        color: $base-color-1;
                        text-align: left;
                      }

                      .header-extra-container {
                        // border: 4px solid red;
                        font-size: 50px;
                        font-weight: bolder;
                        color: $base-color-2;
                      }

                      // collapsed content
                      p {
                        width: 70%;
                        font-size: 20px !important;
                        font-weight: 700;
                        line-height: 40px;
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

    section {
      &>.last-section {
        margin-top: 50px;
        margin-bottom: 100px;

        h3 {
          // width: fit-content;
          position: relative;
          width: 100%;
          margin: 0 auto;
          font-size: 40px;
          font-weight: 600;
          line-height: 45.76px;
          color: $base-color-1;
          text-align: center;
          line-height: 60px;
        }

        h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 5%;
          width: 90%;
          border-bottom: 2px solid $base-color-1;
        }

        .caption-paragraphy {
          // border: 2px solid red;
          width: 1000px;
          margin: 0 auto;
          font-family: Montserrat;
          font-weight: 400;
          line-height: 29.26px;
          text-align: center;
          padding-top: 30px;
          padding-bottom: 20px;
        }

        .contact-us {
          // border: 1px solid #fff;
          background-color: $base-color-1;
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
            padding: 30px;
            color: #fff;
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
}
</style>
