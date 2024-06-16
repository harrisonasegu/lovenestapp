<script setup lang="ts">
import { NH2 } from 'naive-ui';
import { defineComponent, ref } from 'vue';

import Image1 from '@/assets/images/newImage/newsimage.png'
</script>

<template>
  <div class="safety-page-wrap">
    <div class="banner">
      <div class="intro-content">
        <h2 class="intro-title">
          LoveNest Home Care
        </h2>
        <h1 class="intro-subtitle">
          Health And Safety
        </h1>
      </div>
    </div>
    <!-- This section carries all the contents in this page -->
    <div class="safety-contents">
      <section class="first">
        <!-- underline h3 text -->
        <div>
            <h3>
                <a href="#">
                    AgeWell Cincinnati
                </a>
            </h3>
          <p>       
            AgeWell Cincinnati is a coordinated, central solution that links older adults, their family members,
            friends, and caregivers to community resources for aging well in Jewish Cincinnati.
          </p>
          <h3>
                <a href="#">
                    Jewish Family Service of the Cincinnati Area
                </a>
            </h3>
          <p>
            StarPoint Home Care is a subsidiary of Jewish Family Service of the Cincinnati Area, an organization
            that strengthens lives and our community by providing professional social services to families and 
            individuals in times of need. JFS offers access to food & financial support, care coordination, caregiver
            support, counseling, and so much more.
          </p>
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
.safety-page-wrap {
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

  a {
    color: $base-color-1;
  }

  h3 {
    font-family: Montserrat;
    font-size: 35px;
    color: $base-color-1;
    font-weight: 600 !important;
  }

//   h2 {
//     font-family: Montserrat;
//     font-size: 70px;
//     font-size: 35px;
//     color: $base-color-1;
//   }

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

  &>.safety-contents {
    margin-top: 50px;
    // underline h3 text
    &>.first {
      // border: 3px solid red;
      padding: 0 20px;
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
  .safety-page-wrap {

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

    &>.safety-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 20px;

        div {
          // border: 3px solid red;

          h3 {
            // border: 3px solid red;
            margin-bottom: -10px;
            margin-top: 30px;
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
  .safety-page-wrap {

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


    &>.safety-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 20px;
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
  .safety-page-wrap {

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
          font-size: 30px !important;
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
          font-size: 45px !important;
          line-height: 30px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
        }
      }
    }


    &>.safety-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 20px;
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
  .safety-page-wrap {


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


    &>.safety-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 20px;
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
  .safety-page-wrap {


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

    &>.safety-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 20px;
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
  .safety-page-wrap {

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

    &>.safety-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 20px;

        div {
          // border: 3px solid red;

          h3 {
            // border: 3px solid red;
            margin-bottom: -10px;
            margin-top: 30px;
          }
        }

      }

    }

    // <!-- safety NEWS & BLOG -->
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
  .safety-page-wrap {

    &>.banner {
      height: 500px;
    }


    &>.safety-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 200px;

        div {
          // border: 3px solid red;

          h3 {
            // border: 3px solid red;
            margin-bottom: -10px;
            margin-top: 30px;
          }
        }

      }

    }

    // <!-- safety NEWS & BLOG -->
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
  }
}
</style>
