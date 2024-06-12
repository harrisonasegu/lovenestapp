<script setup lang="ts">
import { NH2 } from 'naive-ui';
import VacancyBanner from '@/assets/images/vacancy_images/vacancy-banner.png'
import Ellipse from '@/assets/images/vacancy_images/Ellipse0.png'
import Car from '@/assets/images/vacancy_images/car.png'
import Clock from '@/assets/images/vacancy_images/Clock1.png'
import HatchBack from '@/assets/images/vacancy_images/step.png'
import BrainStorm from '@/assets/images/vacancy_images/Brain.png'
import VacancyProcess from '@/assets/images/vacancy_images/vacancy-process.png'
</script>

<template>
    <div class="vacancy-page-wrap">
        <div class="vacancy-page-banner">
            <h3>Vacancy</h3>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corporis facere dolorem suscipit, eligendi
                    hic nobis! Consequatur accusantium aut temporibus placeat, optio sunt cupiditate, repellat error
                    aspernatur, atque quaerat perspiciatis reviews.
                </p>
                <div class="vancancy-btn">
                    <a href="#">JOIN OUR TEAM</a>
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
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.vacancy-page-wrap {

    // border: 4px solid red;
    p,
    h3,
    h4 {
        font-family: Poppins;
    }

    &>.vacancy-page-banner {
        padding: 150px 20px;
        background-image: url('../../assets/images/vacancy_images/vacancy-banner.png');
        background-repeat: no-repeat;

        h3 {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;
            font-weight: 700;
            line-height: 68px;
            letter-spacing: 0em;
            color: #fff;

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
                left: 35%;
                width: 30%;
                border-bottom: 7px solid $base-color-1;
                border-radius: 10px;
            }

            p {
                font-size: 16px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
            }

            &>.vancancy-btn {
                background: $base-color-1;
                width: fit-content;
                padding: 10px 20px;
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
            background-color: $base-color-3;
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
                            font-size: 14px;
                            font-weight: 400;
                            line-height: 24px;
                            letter-spacing: 0em;
                        }
                    }
                }

                &>.second-row {
                    // border: 2px solid red;
                    margin-top: 60px;

                    h3 {
                        font-size: 25px;
                        font-weight: 700;
                        line-height: 25px;
                        letter-spacing: 0em;
                        text-align: center;
                    }

                    p {
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 25px;
                        letter-spacing: 0em;
                    }
                }
            }
        }

        &>.application-process {
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
                width: 10%;
                border-bottom: 5px solid $base-color-1;
                border-radius: 10px;
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
            width: fit-content;
            margin: 0 auto;
            padding: 10px 20px;
            margin-top: 30px;
            margin-bottom: 40px;

            a {
                text-decoration: none;
                font-weight: 500;
                color: #fff;
            }
        }
    }
}

// MEDIA QUERY

// XX-SM (<251px)
@media (max-width: 250.9px) {
    .vacancy-page-wrap {

        // border: 4px solid red;
        &>.vacancy-page-banner {
            padding: 100px 20px;

            h3 {
                font-size: 22px;
                line-height: 25px;
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
                background-color: $base-color-3;
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
                                    width: 50px;
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
                        // margin-top: 60px;

                        h3 {
                            font-size: 18px;
                            // text-align: left;
                        }

                        p {
                            font-size: 16px;
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

                h3::after {
                    left: 0;
                    width: 50%;
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
    }
}

// XX-SM
@media (min-width: 251px) and (max-width: 350.9px) {
    .vacancy-page-wrap {

        // border: 4px solid red;
        &>.vacancy-page-banner {
            padding: 100px 20px;

            h3 {
                font-size: 22px;
                line-height: 25px;
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
                background-color: $base-color-3;
                padding: 50px 0;

                &>.contents {
                    // border: 2px solid red;
                    padding: 0 10px;

                    &>.first-row {
                        row-gap: 30px;
                        column-gap: 30px;

                        &>.icons-contents {
                            // border: 2px solid red;

                            &>.image {
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                img {
                                    width: 50px;
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
                            text-align: left;
                        }

                        p {
                            font-size: 16px;
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
                    line-height: 25px;
                }

                h3::after {
                    left: 0;
                    width: 50%;
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
    }
}

// X-SM
@media (min-width: 351px) and (max-width: 575.9px) {
    .vacancy-page-wrap {

        // border: 4px solid red;
        &>.vacancy-page-banner {
            padding: 125px 20px;

            h3 {
                font-size: 22px;
                line-height: 25px;
            }
        }

        &>.vacancy-contents {

            // underline h3 text
            &>.first {
                padding: 0 10px;

                h3 {
                    font-size: 20px;
                    line-height: 30px;
                    margin-top: 50px;

                }

                h3::after {
                    left: 40%;
                    width: 20%;
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
                background-color: $base-color-3;
                padding: 50px 0;

                &>.contents {
                    // border: 2px solid red;
                    padding: 0 10px;

                    &>.first-row {
                        row-gap: 30px;
                        column-gap: 30px;
                        justify-content: left;

                        &>.icons-contents {
                            &>.image {
                                // border: 2px solid red;
                                display: flex;
                                justify-content: center;
                                align-items: left;

                                img {
                                    width: 50px;
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
                            text-align: left;
                        }

                        p {
                            font-size: 16px;
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
                    line-height: 25px;
                }

                h3::after {
                    left: 0;
                    width: 50%;
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
    }
}

// SM
@media (min-width: 576px) and (max-width: 767.9px) {
    .vacancy-page-wrap {

        // border: 4px solid red;
        &>.vacancy-page-banner {
            padding: 100px 20px;

            h3 {
                font-size: 22px;
                line-height: 25px;
            }
        }

        &>.vacancy-contents {

            // underline h3 text
            &>.first {
                padding: 0 10px;

                h3 {
                    font-size: 20px;
                    line-height: 30px;
                    margin-top: 50px;

                }

                h3::after {
                    left: 35%;
                    width: 30%;
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
                background-color: $base-color-3;
                padding: 50px 0;

                &>.contents {
                    // border: 2px solid red;
                    padding: 0 10px;

                    &>.first-row {
                        row-gap: 30px;
                        column-gap: 30px;
                        justify-content: left;

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
                            text-align: left;
                        }

                        p {
                            font-size: 16px;
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
                    line-height: 25px;
                }

                h3::after {
                    left: 0;
                    width: 50%;
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
    }
}

// MD
/* @media (min-width: 768px) and (max-width: 991.9px) {} */

// LG
/* @media (min-width: 992px) and (max-width: 1200.9px) {} */

// XL
/* @media (min-width: 1201px) and (max-width: 1499.9px) {} */

// XXL
@media (min-width: 1500px) {
    .vacancy-page-wrap {
        &>.vacancy-page-banner {
            padding: 200px 20px;

            background-size: cover;
        }

        &>.vacancy-contents {

            // underline h3 text
            &>.first {
                padding: 0 200px;

                h3 {
                position: relative;
                font-size: 40px;
                font-weight: 700;
                line-height: 60px;
                letter-spacing: 0em;
                text-align: center;
            }

            h3::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 30%;
                width: 40%;
                border-bottom: 7px solid $base-color-1;
                border-radius: 10px;
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
                            // border: 2px solid red;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            img {
                                width: 80px;
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
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 25px;
                        letter-spacing: 0em;
                    }
                }
            }
        }

        .application-process {
            // border: 5px solid red;
            margin-bottom: 40px;


            h3 {
                margin-left: 200px;
            }

            h3::after {
                left: 200px;
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
            width: fit-content;
            margin: 0 auto;
            padding: 10px 20px;
            margin-top: 30px;
            margin-bottom: 40px;

            a {
                text-decoration: none;
                font-weight: 500;
                color: #fff;
            }
        }
    }
}
</style>
