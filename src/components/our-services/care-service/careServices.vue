<script setup lang="ts">
import { NH2, NCollapse, NCollapseItem, NIcon } from 'naive-ui';
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import CareServiceImage from '@/assets/images/OurServiceImage/Frame98.png'
</script>

<template>
    <div class="care-page">
        <div class="care-page-banner">
            <h3>Home Care Services</h3>
        </div>

        <div class="underline">
            <!-- h3 below the care-page banner -->
            <div class="home-care">
                <h3>Home care from Helping Hands</h3>
            </div>
        </div>
        <div class="visiting">
            <h4>
                We offer both visiting care and live-in care services to suit your needs.
            </h4>
        </div>

        <div class="cards">
            <div class="category-item" v-for="index in 2" :key="index">
                <!-- card title and icon -->
                <div class="category-item-image">
                    <div class="picture">
                        <img :src="CareServiceImage" alt="picture">
                    </div>
                    <div class="contents">

                        <h3>Visiting Care</h3>

                        <div class="line"></div>

                        <p>
                            With visiting care, our carers will visit you at home as
                            little or as often as you need - whether that's a couple
                            of times per week, or several times per day.
                        </p>

                        <div class="dropdown">
                            <n-collapse>
                                <template #header-extra>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 24 24">
                                        <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m7 10l5 5m0 0l5-5" />
                                    </svg>
                                    <br>
                                </template>
                                <template #arrow>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 24 24">
                                        <path fill="black"
                                            d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
                                    </svg>

                                </template>
                                <n-collapse-item title="Visits from 30 minutes a week" name="1">
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia quam
                                        accusantium, blanditiis velit eum illo? Mollitia nulla eligendi, nostrum unde velit
                                        earum provident. Quas neque error fugit inventore expedita?</div>
                                </n-collapse-item>
                                <n-collapse-item title="Flexible support" name="2">
                                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius animi officia,
                                        consectetur excepturi aut vel obcaecati sapiente quibusdam? Soluta sequi autem enim
                                        dolore odio vero deserunt, labore voluptate dolorum incidunt.</div>
                                </n-collapse-item>
                                <n-collapse-item title="Condition-led care" name="3">
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facere, fuga
                                        libero voluptates saepe ipsa, ea eius alias quae rerum eos? Veniam qui blanditiis
                                        quaerat maxime ab officia consectetur atque?</div>
                                </n-collapse-item>
                            </n-collapse>
                        </div>
                        <div class="learn-more">
                            <span>
                                <a href="#">Learn More</a>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                                    <path fill="black" d="m6 15l5-5l-5-5l1-2l7 7l-7 7z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="underline">
            <!-- h3 below the care-page banner -->
            <div class="home-care">
                <h3>Home care from Helping Hands</h3>
            </div>
        </div>

        <!-- speak to our team -->
        <div class="home-assessment">
            <div class="contents">
                <div class="first-content">
                    <p>
                        <span class="color-number">1</span>
                        <span>Speak to our team</span>
                    </p>
                    <p>
                        Call our team of experts to talk
                        through your options and any
                        questions you may have.
                    </p>
                </div>
                <div class="first-content">
                    <p>
                        <span class="color-number">2</span>
                        <span>Free home care assessment</span>
                    </p>
                    <p>
                        Call our team of experts to talk
                        through your options and any
                        questions you may have.
                    </p>
                </div>
                <div class="first-content">
                    <p>
                        <span class="color-number">3</span>
                        <span>Find your carer</span>
                    </p>
                    <p>
                        Call our team of experts to talk
                        through your options and any
                        questions you may have.
                    </p>
                </div>
            </div>
        </div>

        <!-- coloured background before the footer -->
        <div class="coloured-background">
            <div class="contents">
                <div class="underline">
                    <!-- h3 below the care-page banner -->
                    <div class="home-care">
                        <h3>Home care from Helping Hands</h3>
                    </div>
                </div>
                <h4>
                    Your personal carer is here to prioritise your well-being and support your independence.
                </h4>
                <p>
                    The duties of a home carer often involve tasks such as general housekeeping (washing dishes, cleaning
                    the home, doing laundry,
                    making beds and so on). They are also able to help prepare meals as well as provide personal care
                    (bathing, dressing) with
                    dignity. Other ways a home carer can help include:
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam consectetur voluptate, perspiciatis
                    nulla fuga asperiores quisquam consequuntur placeat praesentium reprehenderit deleniti consequatur magni
                    veniam repellendus maxime qui eveniet a quo?
                </p>

                <div class="cards">
                    <div class="category-item" v-for="index in 6" :key="index">
                        <!-- card title and icon -->
                        <div class="category-item-header">
                            <div class="caption-icon">
                                <div class="contents">
                                    <div class="dot-background">
                                 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                        <path fill="black" d="M12.001 4.529a5.998 5.998 0 0 1 8.242.228a6 6 0 0 1 .236 8.236l-8.48 8.492l-8.478-8.492a6 6 0 0 1 8.48-8.464" />
                                    </svg>
                                    </div>
                                    <h3>Personal Care</h3>
                                </div>
                                <p>
                                    All of our carers are trained to provide
                                    discreet, sensitive support with areas
                                    of personal care such as bathing, 
                                    dressing, toileting and continence care
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.care-page {
    // border: 4px solid red;

    &>.care-page-banner {
        padding: 150px 20px;
        background-repeat: no-repeat;
        background-image: url('../../../assets/images/OurServiceImage/Frame\ 3.png');


        h3 {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Poppins;
            font-size: 40px;
            font-weight: 700;
            line-height: 68px;
            letter-spacing: 0em;
            color: #fff;

        }
    }

    &>.underline {
        &>.home-care {
            // border: 4px solid red;

            h3 {
                font-family: Poppins;
                font-size: 30px;
                font-weight: 700;
                letter-spacing: 0em;
                text-align: center;
            }
        }
    }

    &>.visiting {
        font-family: Poppins;
        font-size: 20px;
        font-weight: 500;
        line-height: 45px;
        letter-spacing: 0em;
        text-align: center;

    }

    &>.cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-wrap: wrap;
        column-gap: 20px;
        row-gap: 20px;
        margin-top: 50px;
        margin-bottom: 50px;

        div.category-item {
            // border: 2px solid red;
            width: calc((100% / 2) - 140px);
            height: fit-content;
            display: flex;
            flex-flow: column nowrap;
            border-radius: 0.5rem;
            box-shadow: 3px 3px 4px 2px rgba(0, 0, 0, 0.25);
            padding: 21px 20px 30px;
            transition: all 0.3s;

            &>div.category-item-image {
                &>.picture {
                    // border: 2px solid red;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                }

                &>.contents {

                    // padding: 0px 40px;
                    h3 {
                        font-family: Poppins;
                        font-size: 20px;
                        font-weight: 700;
                        letter-spacing: 0em;
                    }

                    &>.line {
                        border: 1px solid rgba(0, 0, 0, 0.134);
                    }

                    // p {
                    //     border: 1px solid red;
                    // }

                    // &>.dropdown {
                    //     border: 1px solid red;
                    // }

                    &>.learn-more {
                        border: 1px solid rgba(0, 0, 0, 0.134);
                        display: flex;
                        justify-content: center;
                        padding: 10px 0;
                        column-gap: 10px;

                        span {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-family: Poppins;
                            font-weight: 500;
                            letter-spacing: 0em;

                            a {
                                text-decoration: none;
                            }
                        }
                    }
                }

            }
        }
    }

    &>.home-assessment {
        padding-bottom: 50px;

        &>.contents {
            // border: 1px solid red;
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 10px;
            padding: 0 20px;


            &>.first-content {
                // border: 1px solid red;

                p {
                    display: flex;
                    column-gap: 10px;
                    font-family: Poppins;
                    font-weight: 400;
                    line-height: 30px;
                    letter-spacing: 0em;


                    span {
                        // border: 2px solid red;
                        display: flex;
                        align-items: center;
                        column-gap: 10px;
                        font-weight: 700;
                    }

                    &>.color-number {
                        background-color: $base-color;
                        color: #fff;
                        border-radius: 50px;
                        padding: 5px 15px;
                    }

                }
            }
        }
    }

    // coloured background==========
    &>.coloured-background {
        // border: 2px solid red;
        background-color: $base-color-3;

        &>.contents {
            padding: 50px 20px;

            &>.underline {
                &>.home-care {
                    h3 {
                        font-family: Poppins;
                        font-size: 30px;
                        font-weight: 700;
                        letter-spacing: 0em;
                        text-align: center;
                    }

                }
            }

            h4 {
                font-family: Poppins;
                font-size: 20px;
                font-weight: 500;
                line-height: 45px;
                letter-spacing: 0em;
                text-align: center
            }

            
        // cards item
        &>.cards {
            // border: 2px solid red;
            display: flex;
            flex-wrap: wrap;
            column-gap: 20px;
            row-gap: 20px;
            margin-top: 50px;
            margin-bottom: 50px;

            div.category-item {
                background-color: #ffffff89;
                width: calc((100% / 3) - 55px);
                height: fit-content;
                display: flex;
                flex-flow: column nowrap;
                border-radius: 0.5rem;
                box-shadow: 3px 3px 4px 2px rgba(0, 0, 0, 0.25);
                padding: 21px 20px 30px;
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    border-radius: 0.2rem;
                    box-shadow: unset;
                    transform: scale3d(1.05, 1.05, 1);
                }

                &>div.category-item-header {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    column-gap: 10px;

                    .caption-icon {
                        .contents {
                            display: flex;
                            align-items: center;
                            column-gap: 15px;

                            h3 {
                                font-family: Inter;
                                font-size: 20px;
                                font-weight: 600;
                                line-height: 29px;
                                letter-spacing: 0em;
                            }
                        }

                        p {
                            font-family: Poppins;
                            font-size: 16px;
                            font-weight: 400;
                            line-height: 24px;
                            letter-spacing: 0em;
                        }
                    }

                }
            }
        }
        }
    }
}


@media (max-width: 575.9px) {
    div {
        padding: 50px 20px;

        .n-h2 {
            font-size: 14px;
            font-weight: lighter;
        }
    }
}</style>
