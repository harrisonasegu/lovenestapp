<script setup lang="ts">
import { NH2 } from 'naive-ui';
import { defineComponent, ref } from 'vue';

import Image1 from '@/assets/images/newImage/newsimage.png'
</script>

<template>
  <div class="latest-page-wrap">
    <div class="banner">
      <div class="intro-content">
        <h2 class="intro-title">
          The Latest News From LoveNest
        </h2>
        <h1 class="intro-subtitle">
          News & Blog
        </h1>
      </div>
    </div>
    <!-- This section carries all the contents in this page -->
    <div class="latest-contents">

      <!-- LATEST NEWS & BLOG -->
      <section>
        <div class="line-paragraphy">
          <!-- underline contents
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
          </p> -->

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
    </div>

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
.latest-page-wrap {
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

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
    font-family: Montserrat;
    font-size: 18px;
    color: #00000080 !important;
    line-height: 30px !important;
  }

  h4 {
    font-size: 30px;
    color: $base-color-1;
  }

  h3 {
    font-family: Montserrat;
    font-size: 40px;
    color: $base-color-1;
    font-weight: 600 !important;
  }

  h2 {
    font-family: Montserrat;
    font-size: 70px;
    font-size: 35px;
    color: $base-color-1;
  }

  &>.banner {
    background-image: url('../assets/images/HelpFulLinks-Image/helfulLinkBanner.png');
    // border: 5px solid red;
    display: flex;
    align-items: center;
    height: 400px;
    padding: 60px 40px;
    background-repeat: no-repeat;
    background-size: cover;

    &>.intro-content {
      //   border: 12px solid red;
      padding: 10px 20px;
      line-height: 0px;

      .intro-title {
        // border: 2px solid red;
        margin-bottom: 2.5rem;
        font-size: 50px;
        font-weight: 600;
        line-height: 30px;
        color: #fff;
        padding-left: 50px;
      }

      .intro-subtitle {
        // border: 2px solid red;
        font-weight: 700;
        font-size: 70px;
        line-height: 30px;
        letter-spacing: 0em;
        color: #fff;
        padding-left: 400px;
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

  // <!-- LATEST NEWS & BLOG -->
  section {
    &>.line-paragraphy {
      margin-top: 50px;

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

// MEDIA QUERY
// XX-SM (<251px)
@media (max-width: 250.9px) {
  .latest-page-wrap {

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

    // <!-- LATEST NEWS & BLOG -->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

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
                      height: 320px;

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
  .latest-page-wrap {

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
        width: 100%;
        text-align: center;
        padding: 0px 0px;
        line-height: 0px;

        .intro-title {
          // border: 12px solid red;
          margin-bottom: 2.5rem;
          font-weight: 400;
          font-size: 20px !important;
          font-weight: 600;
          line-height: 35px;
          color: #fff;
          padding-left: 0px;
          text-align: center;
        }

        .intro-subtitle {
          // border: 2px solid red;
          font-weight: 700;
          font-size: 30px !important;
          line-height: 25px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
        }
      }
    }

    // <!-- LATEST NEWS & BLOG -->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

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
                      height: 320px;

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
  .latest-page-wrap {

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
      font-size: 16px !important;
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
          font-weight: 400;
          font-size: 25px !important;
          line-height: 40px;
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
          font-size: 35px !important;
          line-height: 30px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
          text-align: center;
        }
      }
    }

    // <!-- LATEST NEWS & BLOG and Cards-->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

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
                      // border: px solid red;
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
  .latest-page-wrap {


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
          width: 100%;
          margin-bottom: 2.5rem;
          font-size: 40px !important;
          line-height: 40px;
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
          font-size: 60px !important;
          line-height: 4ch;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
          text-align: center;
        }
      }
    }

    // <!-- LATEST NEWS & BLOG and Cards-->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

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
  .latest-page-wrap {


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
          font-size: 40px !important;
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
          font-size: 60px !important;
          line-height: 30px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 300px;
        }
      }
    }

    // <!-- LATEST NEWS & BLOG and Cards-->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

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
  .latest-page-wrap {

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
      font-family: Montserrat;
      font-size: 18px;
      color: #00000080 !important;
      line-height: 30px !important;
    }

    h4 {
      font-size: 30px;
      color: $base-color-1;
    }

    h3 {
      font-family: Montserrat;
      font-size: 40px;
      color: $base-color-1;
      font-weight: 600 !important;
    }

    h2 {
      font-family: Montserrat;
      font-size: 70px;
      font-size: 35px;
      color: $base-color-1;
    }

    &>.banner {

      &>.intro-content {
        //   border: 12px solid red;
        padding: 10px 20px;
        line-height: 0px;

        .intro-title {
          // border: 2px solid red;
          margin-bottom: 2.5rem;
          font-size: 50px;
          font-weight: 600;
          line-height: 30px;
          color: #fff;
          padding-left: 50px;
        }

        .intro-subtitle {
          // border: 2px solid red;
          font-weight: 700;
          font-size: 70px;
          line-height: 30px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 400px;
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

    // <!-- LATEST NEWS & BLOG -->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

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
/* @media (min-width: 1201px) and (max-width: 1499.9px) {} */

// XXL
@media (min-width: 1500px) {
  .latest-page-wrap {

    &>.banner {
      height: 500px;
    }

    // <!-- LATEST NEWS & BLOG -->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

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
  }
}
</style>
