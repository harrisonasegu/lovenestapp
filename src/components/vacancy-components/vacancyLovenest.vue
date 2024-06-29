<script setup lang="ts">
import { NH2 } from 'naive-ui';
import { defineComponent, ref } from 'vue';

import VacancyBanner from '@/assets/images/vacancy_images/vacancy-banner.png'
import Ellipse from '@/assets/images/vacancy_images/Ellipse0.png'
import Car from '@/assets/images/vacancy_images/car.png'
import Clock from '@/assets/images/vacancy_images/Clock1.png'
import HatchBack from '@/assets/images/vacancy_images/step.png'
import BrainStorm from '@/assets/images/vacancy_images/Brain.png'
import VacancyProcess from '@/assets/images/vacancy_images/vacancy-connect.png'
</script>

<template>
    <div class="vacancy-page-wrap">
        <div class="banner">

            <div class="intro-content">
                <!-- <h2 class="intro-title">
      Dedicated To Senior Adults And The
  </h2> -->
                <h1 class="intro-subtitle">
                    Vacancy
                </h1>
            </div>
        </div>
        <!-- First section -->
        <div class="vacancy-contents">
            <section class="first">
                <!-- underline h3 text -->
                <h3>
                    Join the care provider, that cares for you
                </h3>
                <p>
                    Our Carer Centric values have lead to Visiting Angels having an exceptionally low staff
                    turnover rate & great employee satisfaction reviews.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corporis facere dolorem suscipit,
                    eligendi
                    hic nobis! Consequatur accusantium aut temporibus placeat, optio sunt cupiditate, repellat error
                    aspernatur, atque quaerat perspiciatis reviews.
                </p>
                <div class="vancancy-btn">
                    <RouterLink class="icon-links" to="/job-form"> JOIN OUR TEAM </RouterLink>
                </div>
            </section>

            <!-- second section -->
            <section class="color-background">
                <div class="contents">
                    <div class="first-row">
                        <div class="icons-contents">
                            <div class="image">
                                <img :src="Ellipse" alt="picture">
                            </div>
                            <div class="para">
                                Leading Rates of pay
                            </div>
                        </div>
                        <div class="icons-contents">
                            <div class="image">
                                <img :src="Car" alt="picture">
                            </div>
                            <div class="para">
                                Leading Rates of pay
                            </div>
                        </div>
                        <div class="icons-contents">
                            <div class="image">
                                <img :src="Clock" alt="picture">
                            </div>
                            <div class="para">
                                Leading Rates of pay
                            </div>
                        </div>
                        <div class="icons-contents">
                            <div class="image">
                                <img :src="HatchBack" alt="picture">
                            </div>
                            <div class="para">
                                Leading Rates of pay
                            </div>
                        </div>
                        <div class="icons-contents">
                            <div class="image">
                                <img :src="BrainStorm" alt="picture">
                            </div>
                            <div class="para">
                                Leading Rates of pay
                            </div>
                        </div>
                    </div>
                    <div class="second-row">
                        <h3>
                            Care isn't just a job, its the best thing you would ever do!
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus ac lectus
                            biandit erat.
                            Lorem ipsum dolor sit amet, consecteturadipiscing elit. Erat faucibus
                            ac lectus
                            biandit erat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibusac lectus
                            biandit erat.
                            Lorem ipsum dolor sit amet, consectetur adipis
                            cing elit. Erat faucibus ac lectus
                            biandit erat.

                        </p>
                    </div>
                </div>
            </section>
            <div class="application-process">
                <h3>Application Process</h3>
            </div>
            <div class="vacancy-process">
                <img :src="VacancyProcess" alt="picture">
            </div>

            <div class="vancancy-btn">
                <a href="#">JOIN OUR TEAM</a>
                <div>
                </div>
            </div>
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
.vacancy-page-wrap {
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
        background-image: url('../../assets/images/vacancy_images/vacancy-banner.png');
        // border: 5px solid red;
        display: flex;
        align-items: center;
        height: 400px;
        padding: 60px 40px;
        background-repeat: no-repeat;
        background-size: cover;

        &>.intro-content {
            //   border: 12px solid red;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
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


    &>.vacancy-contents {

        // underline h3 text
        &>.first {
            padding: 0 20px;

            h3 {
                position: relative;
                font-size: 30px;
                font-weight: 700;
                line-height: 60px;
                letter-spacing: 0em;
                text-align: center;
            }

            h3::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 25%;
                width: 50%;
                border-bottom: 2px solid $base-color-1;
            }

            p {
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
            }

            &>.vancancy-btn {
                background: $base-color-1;
                width: fit-content;
                padding: 15px 30px;
                margin-top: 30px;
                margin-bottom: 40px;

                a {
                    text-decoration: none;
                    font-weight: 500;
                    color: #fff;
                }
            }
        }

        &>.color-background {
            background-color: $base-color-1;
            padding: 50px 0;

            &>.contents {
                padding: 0 20px;

                &>.first-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    column-gap: 10px;
                    row-gap: 20px;

                    &>.icons-contents {
                        &>.image {
                            // border: 2px solid red;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            img {
                                width: 80px;
                            }
                        }

                        &>.para {
                            font-weight: 400;
                            letter-spacing: 0em;
                            color: #fff !important;
                            padding-top: 10px;
                        }
                    }
                }

                &>.second-row {
                    // border: 2px solid red;
                    margin-top: 60px;

                    h3 {
                        font-size: 25px;
                        color: #fff !important;
                        font-weight: 700;
                        letter-spacing: 0em;
                        text-align: center;
                    }

                    p {
                        // border: 2px solid red;
                        font-weight: 300;
                        letter-spacing: 0em;
                        color: #fff !important;
                    }
                }
            }
        }

        &>.application-process {
            display: flex;
            justify-content: center;
            padding: 0 20px;
            margin-bottom: 40px;

            h3 {
                position: relative;
                font-size: 25px;
                font-weight: 500;
                line-height: 60px;
                letter-spacing: 0em;
            }

            h3::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                border-bottom: 2px solid $base-color-1;
            }
        }

        &>.vacancy-process {
            // border: 2px solid red;

            img {
                background-size: contain;
                width: 100%;
            }
        }

        &>.vancancy-btn {
            background: $base-color-1;
            // border: 3px solid red;
            width: fit-content;
            margin: 0 auto;
            padding: 15px 30px;
            margin-top: 30px;
            margin-bottom: 40px;

            // /* Styles for modal overlay */
            // .modal-overlay {
            //     position: fixed;
            //     top: 0;
            //     left: 0;
            //     width: 100%;
            //     height: 100%;
            //     background: rgba(0, 0, 0, 0.5);
            //     /* Semi-transparent black overlay */
            //     display: flex;
            //     align-items: center;
            //     justify-content: center;
            // }

            // /* Styles for modal */
            // .modal {
            //     background-color: white;
            //     padding: 20px;
            //     border-radius: 8px;
            //     position: relative;
            // }

            // /* Close Button */
            // .close {
            //     position: absolute;
            //     top: 10px;
            //     right: 10px;
            //     cursor: pointer;
            // }

            a {
                text-decoration: none;
                font-weight: 500;
                color: #fff;
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
    .vacancy-page-wrap {

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
 
    &>.vacancy-contents {

        // underline h3 text
        &>.first {
            padding: 0 10px;

            h3 {
                font-size: 20px;
                line-height: 25px;
            }

            h3::after {
                left: 35%;
                width: 30%;
              }

            p {
                text-align: center;
            }

            &>.vancancy-btn {
                width: fit-content;
                margin: 0 auto;
                padding: 10px 20px;
                margin-top: 30px;
                margin-bottom: 40px;

                a {
                    font-size: 12px;
                }
            }
        }

        &>.color-background {
            padding: 50px 0;

            &>.contents {
                // border: 2px solid red;
                padding: 0 10px;

                &>.first-row {
                    justify-content: center;
                    row-gap: 30px;

                    &>.icons-contents {
                        &>.image {
                            // border: 2px solid red;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            img {
                                width: 80px;
                            }
                        }

                        // &>.para {
                        //     font-size: 14px;
                        //     font-weight: 400;
                        //     line-height: 24px;
                        //     letter-spacing: 0em;
                        // }
                    }
                }

                &>.second-row {
                    // border: 2px solid red;
                    margin-top: 30px;

                    h3 {
                        font-size: 18px;
                        // text-align: left;
                    }

                    p {
                        text-align: center;
                    }
                }
            }
        }

        &>.application-process {
            padding: 0 10px;

            h3 {
                position: relative;
                font-size: 18px;
                line-height: 25px;
            }
        }

        &>.vacancy-process {
            // border: 2px solid red;

            img {
                width: 100%;
            }
        }

        &>.vancancy-btn {
            margin-top: 30px;
            margin-bottom: 0px;
            padding: 10px 30px;

            a {
                font-size: 12px;
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
    .vacancy-page-wrap {

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

&>.vacancy-contents {

// underline h3 text
&>.first {
    padding: 0 10px;

    h3 {
        font-size: 20px;
        line-height: 25px;
    }

    h3::after {
        left: 35%;
        width: 30%;
      }

    p {
        text-align: center;
    }

    &>.vancancy-btn {
        width: fit-content;
        margin: 0 auto;
        padding: 10px 20px;
        margin-top: 30px;
        margin-bottom: 40px;

        a {
            font-size: 12px;
        }
    }
}

&>.color-background {
    padding: 50px 0;

    &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.first-row {
            justify-content: center;
            row-gap: 30px;

            &>.icons-contents {
                &>.image {
                    // border: 2px solid red;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        width: 80px;
                    }
                }

                // &>.para {
                //     font-size: 14px;
                //     font-weight: 400;
                //     line-height: 24px;
                //     letter-spacing: 0em;
                // }
            }
        }

        &>.second-row {
            // border: 2px solid red;
            margin-top: 30px;

            h3 {
                font-size: 18px;
                // text-align: left;
            }

            p {
                text-align: center;
            }
        }
    }
}

&>.application-process {
    padding: 0 10px;

    h3 {
        position: relative;
        font-size: 18px;
        line-height: 25px;
    }
}

&>.vacancy-process {
    // border: 2px solid red;

    img {
        width: 100%;
    }
}

&>.vancancy-btn {
    margin-top: 30px;
    margin-bottom: 0px;
    padding: 10px 30px;

    a {
        font-size: 12px;
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
    .vacancy-page-wrap {
            
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


&>.vacancy-contents {

// underline h3 text
&>.first {
    padding: 0 10px;

    h3 {
        font-size: 20px;
        line-height: 30px;
    }

    h3::after {
        left: 8%;
        width: 80%;
      }

    p {
        text-align: center;
    }

    &>.vancancy-btn {
        width: fit-content;
        margin: 0 auto;
        padding: 15px 30px;
        margin-top: 30px;
        margin-bottom: 40px;

        a {
            font-size: 12px;
        }
    }
}

&>.color-background {
    padding: 50px 0;

    &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.first-row {
            justify-content: center;
            column-gap: 30px;
            row-gap: 30px;

            &>.icons-contents {
                &>.image {
                    // border: 2px solid red;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        width: 80px;
                    }
                }

                // &>.para {
                //     font-size: 14px;
                //     font-weight: 400;
                //     line-height: 24px;
                //     letter-spacing: 0em;
                // }
            }
        }

        &>.second-row {
            // border: 2px solid red;
            margin-top: 30px;

            h3 {
                font-size: 18px;
                // text-align: left;
            }

            p {
                text-align: center;
            }
        }
    }
}

&>.application-process {
    padding: 0 10px;
    margin-top: 20px;

    h3 {
        position: relative;
        font-size: 18px;
        line-height: 25px;
    }
}

&>.vacancy-process {
    // border: 2px solid red;

    img {
        width: 100%;
    }
}

&>.vancancy-btn {
    margin-top: 30px;
    margin-bottom: 0px;
    padding: 15px 30px;

    a {
        font-size: 12px;
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
    .vacancy-page-wrap {

            
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
      font-size: 40px;
      line-height: 40px;
      letter-spacing: 0em;
      color: #fff;
      padding-left: 0px;
    }
  }
    }

    &>.vacancy-contents {

        // underline h3 text
        &>.first {
            padding: 0 10px;

            h3 {
                font-size: 20px;
                line-height: 60px;
                margin-top: 50px;

            }

            h3::after {
                left: 10%;
                width: 80%;
                border-bottom: 3px solid $base-color-1;
            }

            p {
                font-size: 16px;
            }

            &>.vancancy-btn {
                width: fit-content;
                margin: 0 auto;
                padding: 10px 20px;
                margin-top: 30px;
                margin-bottom: 40px;

                a {
                    font-size: 12px;
                }
            }
        }

        &>.color-background {
            padding: 50px 0;

            &>.contents {
                // border: 2px solid red;
                padding: 0 10px;

                &>.first-row {
                    row-gap: 50px;
                    column-gap: 30px;
                    justify-content: center;

                    &>.icons-contents {
                        &>.image {
                            // border: 2px solid red;
                            display: flex;
                            justify-content: center;
                            align-items: left;

                            img {
                                width: 70px;
                            }
                        }

                        &>.para {
                            font-size: 14px;
                            font-weight: 400;
                            line-height: 24px;
                            letter-spacing: 0em;
                        }
                    }
                }

                &>.second-row {
                    // margin-top: 60px;

                    h3 {
                        font-size: 18px;
                        text-align: center;
                    }

                    p {
                        font-size: 16px;
                        text-align: center;
                    }
                }
            }
        }

        &>.application-process {
            // border: 2px solid red;
            padding: 0 10px;
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            margin-top: 15px;

            h3 {
                position: relative;
                font-size: 18px;
                line-height: 50px;
            }

            h3::after {
                left: 0;
                width: 100%;
                border-bottom: 3px solid $base-color-1;
                border-radius: 10px;
            }
        }

        &>.vacancy-process {
            // border: 2px solid red;

            img {
                width: 100%;
            }
        }

        &>.vancancy-btn {
            margin-top: 30px;
            margin-bottom: 0px;

            a {
                font-size: 12px;
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
    .vacancy-page-wrap {

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
    color: #00000080 !important;
    line-height: 30px !important;
}

h3 {
    color: $base-color-1;
    font-weight: 600 !important;
}

h2 {
    font-size: 35px;
    color: $base-color-1;
}

&>.banner {
    height: 400px;

    &>.intro-content {
        //   border: 12px solid red;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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


&>.vacancy-contents {

    // underline h3 text
    &>.first {
        padding: 0 20px;

        h3 {
            position: relative;
            font-size: 30px;
            font-weight: 700;
            line-height: 60px;
            letter-spacing: 0em;
            text-align: center;
        }

        h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 25%;
            width: 50%;
            border-bottom: 2px solid $base-color-1;
        }

        p {
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0em;
        }

        &>.vancancy-btn {
            background: $base-color-1;
            width: fit-content;
            padding: 15px 30px;
            margin-top: 30px;
            margin-bottom: 40px;

            a {
                text-decoration: none;
                font-weight: 500;
                color: #fff;
            }
        }
    }

    &>.color-background {
        background-color: $base-color-1;
        padding: 50px 0;

        &>.contents {
            padding: 0 20px;

            &>.first-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                column-gap: 10px;
                row-gap: 20px;

                &>.icons-contents {
                    &>.image {
                        // border: 2px solid red;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        img {
                            width: 80px;
                        }
                    }

                    &>.para {
                        font-weight: 400;
                        letter-spacing: 0em;
                        color: #fff !important;
                        padding-top: 10px;
                    }
                }
            }

            &>.second-row {
                // border: 2px solid red;
                margin-top: 60px;

                h3 {
                    font-size: 25px;
                    color: #fff !important;
                    font-weight: 700;
                    letter-spacing: 0em;
                    text-align: center;
                }

                p {
                    // border: 2px solid red;
                    font-weight: 300;
                    letter-spacing: 0em;
                    color: #fff !important;
                }
            }
        }
    }

    &>.application-process {
        display: flex;
        justify-content: center;
        padding: 0 20px;
        margin-bottom: 40px;

        h3 {
            position: relative;
            font-size: 25px;
            font-weight: 500;
            line-height: 60px;
            letter-spacing: 0em;
        }

        h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            border-bottom: 2px solid $base-color-1;
        }
    }

    &>.vacancy-process {
        // border: 2px solid red;

        img {
            background-size: contain;
            width: 100%;
        }
    }

    &>.vancancy-btn {
        background: $base-color-1;
        // border: 3px solid red;
        width: fit-content;
        margin: 0 auto;
        padding: 15px 30px;
        margin-top: 30px;
        margin-bottom: 40px;

        // /* Styles for modal overlay */
        // .modal-overlay {
        //     position: fixed;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     height: 100%;
        //     background: rgba(0, 0, 0, 0.5);
        //     /* Semi-transparent black overlay */
        //     display: flex;
        //     align-items: center;
        //     justify-content: center;
        // }

        // /* Styles for modal */
        // .modal {
        //     background-color: white;
        //     padding: 20px;
        //     border-radius: 8px;
        //     position: relative;
        // }

        // /* Close Button */
        // .close {
        //     position: absolute;
        //     top: 10px;
        //     right: 10px;
        //     cursor: pointer;
        // }

        a {
            text-decoration: none;
            font-weight: 500;
            color: #fff;
        }
    }
}

 // colored-last line section
section {
    &>.colored-last {
    display: none;
    margin-top: 50px;
    }
   }
  }
} 

// LG
/* @media (min-width: 992px) and (max-width: 1200.9px) {} */

// XL
/* @media (min-width: 1201px) and (max-width: 1499.9px) {} */

// XXL
@media (min-width: 1500px) {
    .vacancy-page-wrap {
     
        &>.banner {
        height: 500px;
      }

        &>.vacancy-contents {

            // underline h3 text
            &>.first {
                padding: 0 200px;

                h3 {
                    position: relative;
                    font-size: 40px;
                    font-weight: 700;
                    line-height: 80px;
                    letter-spacing: 0em;
                    text-align: center;
                }
            }
        }

        .color-background {
            background-color: $base-color-3;
            padding: 50px 0;

            .contents {
                &>.first-row {
                    padding: 0 200px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    column-gap: 10px;
                    row-gap: 20px;

                    &>.icons-contents {
                        &>.image {
                            img {
                                width: 150px !important;
                                height: 150px;
                            }
                        }

                        &>.para {
                            font-weight: 400;
                            line-height: 24px;
                            letter-spacing: 0em;
                            font-size: 20px;
                        }
                    }
                }

                &>.second-row {
                    // border: 2px solid red;
                    margin-top: 60px;
                    padding: 0 200px;


                    h3 {
                        font-size: 25px;
                        font-weight: 700;
                        line-height: 25px;
                        letter-spacing: 0em;
                        text-align: center;
                    }

                    p {
                        font-size: 20px;
                        font-weight: 300;
                        line-height: 30px;
                        letter-spacing: 0em;
                    }
                }
            }
        }

        .application-process {
            margin-bottom: 40px;


            h3 {
                margin-left: 0px;
                font-size: 40px !important;
            }

            h3::after {
                left: 200px;
            }
        }

        .vacancy-process {
            // border: 12px solid red;

            img {
                background-size: contain;
                width: 100%;
            }
        }

        .vancancy-btn {
            a {
                font-size: 25px;
            }
        }
    }
}
</style>
