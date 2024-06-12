<script setup lang="ts">
import { NH2, NCollapse, NCollapseItem, NIcon } from 'naive-ui';
import { CashOutline as CashIcon } from '@vicons/ionicons5'

import LiveCareImage from '@/assets/images/OurServiceImage/Frame42.png'
</script>

<template>
    <div class="care-live-page">

        <div class="care-live-page-banner">
            <h3>Live-In Care</h3>
        </div>

        <!-- The beginning of the three sections in this page -->
        <div class="div-wrap">
            <!-- First section with video and contents been divided with flex -->
            <div class="first">
                <div class="content">
                    <p>
                        <span class="medium">
                            Make Smarter <Del></Del>ecisions
                        </span>
                        <br>
                        <span class="big">
                            About Live-In Care
                        </span>
                        <br>
                        <span class="small">
                            Use family Assets free tool to get pricing reviews & financial assistance
                            for senior care
                        </span>
                    </p>

                    <div class="cards">
                        <div class="category-item">
                            <!-- card title and icon -->
                            <div class="category-item-header">

                                <select class="mySelect">
                                    <option value="option1">Select a state to search from </option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                    <option value="option4">Option 4</option>
                                </select>

                                <div class="get-started-btn">
                                    <a href="#">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="video">
                    <iframe width="600" height="370" src="https://www.youtube.com/embed/02c-Lr_kJH4?si=IgTcf3gwec_UX0IX"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>

            </div>
            <div class="second">
                <div class="personal-care">
                    <h4>Home care where you're happiest</h4>
                    <p>
                        The days are gone where you had to settle for a care
                        home in your later years.
                    </p>

                    <div class="cards">
                        <div class="category-item" v-for="index in 4" :key="index">
                            <!-- card title and icon -->
                            <div class="category-item-header">
                                <span class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                        <path fill="rgba(100,100, 100)" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
                                    </svg>
                                </span>
                                <span class="content">Independent
                                    at home</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="financial-access">
                    <h5>Live-In Care Resources</h5>
                    <h3>Access financial
                        resources for Live-in care
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus
                        ac lectus
                        biandit erat.
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Erat faucibus ac lectus
                        biandit erat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus
                        ac lectus
                        biandit erat.
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Erat faucibus ac lectus
                        biandit erat.

                    </p>
                    <div class="financial-btn">
                        <a href="#">Find Out More</a>
                    </div>
                </div>
            </div>
            <!-- Below is the last section of this page, before the footer -->
            <div class="third">
                <div class="safe-individual">
                    <h3>Keeping Individuals Safe,
                        Independent and Connected
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, nobis! Quasi velit officia cumque
                        ullam ratione eligendi at veritatis sit omnis. Aut ab fugiat praesentium quas! Sunt omnis officiis
                        minima pariatur commodi! Illo, nihil possimus repellendus similique nam excepturi cumque, earum cum
                        dolorem consequuntur nisi impedit neque perspiciatis aliquam dicta eius voluptates repellat
                        quibusdam! Exercitationem dicta deserunt sit quibusdam quasi rem, corrupti eveniet autem, aliquid
                        placeat excepturi vitae et ipsam odio nesciunt voluptatibus vero est sed dolorum non illo rerum
                        harum quia eligendi? Quam maxime aliquam impedit, laborum id corporis accusantium quos rerum aliquid
                        explicabo, earum, animi tenetur quasi soluta?
                    </p>
                </div>
                <div class="picture">
                    <img :src="LiveCareImage" alt="picture">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.care-live-page {
    // border: 4px solid red;

    &>.care-live-page-banner {
        padding: 150px 20px;
        background-repeat: no-repeat;
        background-image: url('../../../assets/images/OurServiceImage/Frame\ 33\ \(4\).png');


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

    &>.div-wrap {
        // border: 11px solid red;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;

        &>div.first {
            display: flex;
            flex-wrap: wrap;
            column-gap: 100px;

            &>.content {

                p {
                    // border: 1px solid red;
                    width: 350px;

                    &>span.medium {
                        font-family: Poppins;
                        font-size: 26px;
                        font-weight: 700;
                        line-height: 50px;
                        letter-spacing: 0em;
                    }

                    &>span.big {
                        font-family: Poppins;
                        font-size: 36px;
                        font-weight: 700;
                        // line-height: 50px;
                        letter-spacing: 0em;
                    }

                    &>span.small {
                        //    border: 1px solid red;              
                        font-family: Poppins;
                        font-weight: 700;
                        letter-spacing: 0em;
                    }
                }

                .cards {
                    display: flex;
                    flex-wrap: wrap;
                    column-gap: 20px;
                    row-gap: 20px;
                    margin-top: 50px;
                    margin-bottom: 50px;

                    div.category-item {
                        width: calc((100% / 1) - 20px);
                        height: fit-content;
                        display: flex;
                        flex-flow: column nowrap;
                        // border: 1px solid rgba(0, 0, 0, 0.05);
                        border-radius: 0.5rem;
                        box-shadow: 3px 3px 4px 2px rgba(0, 0, 0, 0.25);
                        padding: 21px 20px 30px;

                        &>.category-item-header {
                            &>.mySelect {
                                border: 1px solid rgba(0, 0, 0, 0.163);
                                width: 300px;
                                padding: 10px 0;
                            }

                            &>.get-started-btn {
                                background-color: $base-color-1;
                                padding: 8px 0;
                                width: 300px;
                                text-align: center;
                                margin-top: 20px;


                                a {
                                    text-decoration: none;
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }

            // This provision can also use to style the video embed
        }

        &>div.second {
            // border: 11px solid red;
            display: flex;
            justify-content: center;
            column-gap: 100px;

            &>.personal-care {
                width: 350px;

                h4 {
                    // border: 1px solid red;
                    font-family: Poppins;
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 38px;
                    letter-spacing: 0em;
                }

                p {
                    // border: 1px solid red;
                    font-family: Poppins;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 24px;
                    letter-spacing: 0em;
                }

                .cards {
                    display: flex;
                    flex-wrap: wrap;
                    column-gap: 20px;
                    row-gap: 20px;
                    margin-top: 50px;
                    margin-bottom: 50px;

                    div.category-item {
                        width: calc((100% / 2) - 51px);
                        height: fit-content;
                        display: flex;
                        flex-flow: column nowrap;
                        border-radius: 0.5rem;
                        box-shadow: 3px 3px 4px 2px rgba(0, 0, 0, 0.25);
                        padding: 5px 20px 5px;

                        &>.category-item-header {
                            display: flex;
                            align-items: center;

                            span {
                                // border: 1px solid red;
                                width: 100%;

                                span.icon {}

                                span.content {
                                    font-size: 4px;
                                }
                            }
                        }
                    }
                }
            }

            &>.financial-access {
                // border: 11px solid red;
                width: 600px;


                h5 {
                    color: $base-color;
                    font-family: Poppins;
                    font-size: 10px;
                    font-weight: 700;
                    line-height: 30px;
                    letter-spacing: 0em;
                }

                h3 {
                    font-family: Poppins;
                    font-size: 28px;
                    font-weight: 700;
                    line-height: 10px;
                    letter-spacing: 0em;
                }

                p {
                    font-family: Poppins;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 24px;
                    letter-spacing: 0em;
                }

                &>.financial-btn {
                    background-color: $base-color-1;
                    width: fit-content;
                    padding: 10px 20px;
                    // border-radius: 8px;

                    a {
                        text-decoration: none;
                        color: #fff;
                    }
                }
            }
        }

        &>div.third {
            display: flex;
            justify-content: center;
            column-gap: 50px;
          &>.safe-individual {
                // border: 1px solid red;
                width:460px;

                h3 {
                    font-family: Poppins;
                    font-size: 25px;
                    font-weight: 700;
                    line-height: 30px;
                    letter-spacing: 0em;
                }

                p {
                    font-family: Poppins;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 22px;
                    letter-spacing: 0em;
                }
            }

            // &>.picture {
            //     border: 11px solid red;
            // }
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
