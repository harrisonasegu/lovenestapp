<script setup lang="ts">
import { NH2 } from 'naive-ui';
import CostOfHomeCare1 from '@/assets/images/CostCalculatorPageImages/CostHomeCareImage/costHomeCare1.png'
import CostOfHomeCare2 from '@/assets/images/CostCalculatorPageImages/CostHomeCareImage/costHomeCare2.png'
import CostOfHomeCare3 from '@/assets/images/CostCalculatorPageImages/CostHomeCareImage/CosthomeLive3.png'
import CostOfHomeCare4 from '@/assets/images/CostCalculatorPageImages/CostHomeCareImage/round-Ellipse.png'
import CostOfHomeCare5 from '@/assets/images/CostCalculatorPageImages/CostHomeCareImage/costHomeCare5.png'


</script>

<template>
    <div class="CostofHomeCarepage-wrap">
        <div class="CostofHomeCarepage-page-banner">

            <div class="contents">
                <h3>
                    Cost of Home Care
                </h3>
            </div>
        </div>

        <div class="CostofHomeCarepage-caption">
            <div class="contents-picture">
                <div class="contents">
                    <h3>About Cost of Home Care
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus corporis eius voluptas
                        cumque placeat harum quos quisquam, repudiandae velit, vero dignissimos voluptates incidunt
                        deleniti impedit sunt quod! Tempora, nam?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur natus corporis eius voluptas
                        cumque placeat harum quos quisquam, repudiandae velit, vero dignissimos voluptates incidunt
                        deleniti impedit sunt quod! Tempora, nam?
                    </p>
                    <h4>Your home. Your care. your choice
                    </h4>
                </div>
                <div class="picture">
                    <img :src="CostOfHomeCare1" alt="picture">
                </div>
            </div>

            <div class="picture-contents">
                <div class="picture">
                    <img :src="CostOfHomeCare2" alt="picture">
                </div>
                <div class="contents">
                    <h3>How much does visiting care cost?
                    </h3>
                    <p>
                        When choosing Home Care, understanding the level of care you or your loved
                        one requires is important because it affects how much you'll pay. We provide
                        a wide range of Home Care services, including care for specialist conditions.
                    </p>
                    <p>
                        Here are some factors that will impact the cost:
                    </p>
                    <div class="rounded-contents">
                        <p>
                            <span class="round-cirle">
                                <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                    style="color: white" />
                            </span>
                            <span>
                                Level of care
                            </span>
                        </p>
                        <p>
                            <span class="round-cirle">
                                <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                    style="color: white" />
                            </span>
                            <span>
                                Frequency of visits
                            </span>
                        </p>
                        <p>
                            <span class="round-cirle">
                                <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                    style="color: white" />
                            </span>
                            <span>
                                Duration of visits
                            </span>
                        </p>
                    </div>

                    <div class="icon-contact">
                        <span>
                            <Icon icon="game-icons:calculator" width="30px" height="30px" style="color: white" />
                        </span>
                        <span>
                            <RouterLink class="phone-number" to="/CostCalculator">Cost Calculator</RouterLink>
                        </span>
                    </div>
                </div>
            </div>

            <div class="services-contents">
                <div class="underline-wrap">
                    <div class="home-care">
                        <h3>How much does Live-in Care cost?
                        </h3>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ad architecto nobis expedita,
                    nihil sunt, quo culpa provident, veniam incidunt hic dolore voluptatibus dolores voluptatem
                    perferendis rerum eaque minus velit.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quaerat quasi architecto.
                    Molestiae laborum debitis facere eveniet magnam voluptate ducimus totam repellendus possimus
                    laudantium quibusdam, excepturi omnis quos quam nam!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ad architecto nobis expedita,
                    nihil sunt, quo culpa provident, veniam incidunt hic dolore voluptatibus dolores voluptatem
                    perferendis rerum eaque minus velit.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quaerat quasi architecto.
                    Molestiae laborum debitis facere eveniet magnam voluptate ducimus totam repellendus possimus
                    laudantium quibusdam, excepturi omnis quos quam nam!
                </p>

                <div class="costHome-CostLive">
                    <div    class="costHomebtn">
                        <RouterLink class="icon-links" to="/CostOfLiveInCare">Click Live-In Care Costs </RouterLink>
                    </div>

                    <div class="costHomebtn">
                        <span>
                            <Icon icon="game-icons:calculator" width="30px" height="30px" style="color: white" />
                        </span>
                        <span>
                            <RouterLink class="phone-number" to="/CostCalculator">Cost Calculator</RouterLink>
                        </span>
                    </div>
                    <!-- <div class="costHomebtn">
                            <RouterLink class="icon-links" to="/CostOfLiveInCare">Click Cost of Live-in care</RouterLink>
                        </div> -->
                </div>
            </div>

            <div class="whychoose-lovenest">
                <h3>Why choose Lovenest Homecare?</h3>

                <div class="meet-with-us">
                    <div class="contact-us">
                        <div class="choose-image">
                            <img :src="CostOfHomeCare3" alt="picture">
                        </div>
                        <p class="caption">Understanding</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa maiores neque nemo,
                            laboriosam
                            delectus sequi libero est. Doloremque sapiente, reiciendis mollitia recusandae nobis iste
                            rerum
                            deserunt hic animi dolores. Similique.
                        </p>
                    </div>

                    <div class="contact-us">
                        <div class="choose-image">
                            <img :src="CostOfHomeCare3" alt="picture">
                        </div>
                        <p class="caption">Excellent Training</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa maiores neque nemo,
                            laboriosam
                            delectus sequi libero est. Doloremque sapiente, reiciendis mollitia recusandae nobis iste
                            rerum
                            deserunt hic animi dolores. Similique.
                        </p>
                    </div>

                    <div class="contact-us">
                        <div class="choose-image">
                            <img :src="CostOfHomeCare3" alt="picture">
                        </div>
                        <p class="caption">Quality Care</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa maiores neque nemo,
                            laboriosam
                            delectus sequi libero est. Doloremque sapiente, reiciendis mollitia recusandae nobis iste
                            rerum
                            deserunt hic animi dolores. Similique.
                        </p>
                    </div>

                    <div class="contact-us">
                        <div class="choose-image">
                            <img :src="CostOfHomeCare3" alt="picture">
                        </div>
                        <p class="caption">Personalized Care</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa maiores neque nemo,
                            laboriosam
                            delectus sequi libero est. Doloremque sapiente, reiciendis mollitia recusandae nobis iste
                            rerum
                            deserunt hic animi dolores. Similique.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="elderly-support">

            <div class="call-us">
                <div class="call-contact">
                    <div>
                        <h3>Contact us Speak to our Team today!</h3>
                    </div>

                    <div class="icon-contact">
                        <span>
                            <Icon icon="ic:baseline-call" width="30px" height="25px" style="color: #DA5E42" />
                        </span>
                        <span>
                            <a class="phone-number" href="#"> 07931 918596</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="promisecontents-picture">

            <div class="contentsPicture-wrap">
                <div class="contents">
                    <h3>Our Home Care cost promise</h3>
                    <p>
                        We're passionate about providing quality care that makes life easier for you and your
                        loved ones. All our Home Care services are:
                    </p>

                    <div class="rounded-contents">
                        <div class="personalized">
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: white" />
                                </span>
                                <span>
                                    Personalized
                                </span>
                            </p>
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: white" />
                                </span>
                                <span>
                                    Highly recommended
                                </span>
                            </p>
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: white" />
                                </span>
                                <span>
                                    Reliable
                                </span>
                            </p>
                        </div>

                        <div class="less-stress">
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: white" />
                                </span>
                                <span>
                                    Value for money
                                </span>
                            </p>
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: white" />
                                </span>
                                <span>
                                    Transparent
                                </span>
                            </p>
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: white" />
                                </span>
                                <span>
                                    Less stressful
                                </span>
                            </p>
                        </div>
                    </div>

                    <div class="icon-contact">
                        <span>
                            <Icon icon="game-icons:calculator" width="30px" height="30px" style="color: white" />
                        </span>
                        <span>
                            <RouterLink class="phone-number" to="/CostCalculator">Cost Calculator</RouterLink>
                        </span>
                    </div>
                </div>

                <div class="picture">
                    <div class="roundImage-content">
                        <div class="image">
                            <img :src="CostOfHomeCare4" alt="picture">
                        </div>
                        <div class="contents">
                            <div class="call callone">
                                <span>1.</span>
                                <span>Call</span>
                            </div>

                            <div class="call">
                                <span>2.</span>
                                <span>Meet</span>
                            </div>

                            <div class="call">
                                <span>3.</span>
                                <span>Start</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="image-paycare">
            <div class="contentsPicture-wrap">

                <div class="picture">
                    <img :src="CostOfHomeCare5" alt="picture">
                </div>

                <div class="contents">
                    <h3>Why pay for Home Care?</h3>
                    <p>
                        Most adults want to age comfortably in the familiarity of their homes and
                        may be reluctant to relocate. The significance of Home Care is that you
                        remain in your own home and maintain independence.
                        Our Home Care services support you to remain active in your local
                        community, visiting friends, family and neighbours. Having your favorite
                        people, pets and possessions nearby can improve your mood and promote
                        feelings of security. Our Home Care costs are fully inclusive, so you won't
                        receive any hidden charges. They account for associated admin costs such
                        as mileage, assessments of care needs, and our own quality audit visits.
                    </p>
                    <div class="rounded-contents">
                        <h4>Benefits of Home Care:</h4>

                        <p>
                            <span class="round-cirle">
                                <Icon icon="material-symbols:done" width="15px" height="15px" style="color: white" />
                            </span>
                            <span>
                                Receiving care in the comfort of home
                            </span>
                        </p>
                        <p>
                            <span class="round-cirle">
                                <Icon icon="material-symbols:done" width="15px" height="15px" style="color: white" />
                            </span>
                            <span>
                                Maintain independence
                            </span>
                        </p>
                        <p>
                            <span class="round-cirle">
                                <Icon icon="material-symbols:done" width="15px" height="15px" style="color: white" />
                            </span>
                            <span>
                                No restrictions on visiting hours
                            </span>
                        </p>
                        <p>
                            <span class="round-cirle">
                                <Icon icon="material-symbols:done" width="15px" height="15px" style="color: white" />
                            </span>
                            <span>
                                Creating your own bespoke care plan
                            </span>
                        </p>
                        <p>
                            <span class="round-cirle">
                                <Icon icon="material-symbols:done" width="15px" height="15px" style="color: white" />
                            </span>
                            <span>
                                Personalized and dedicated care
                            </span>
                        </p>
                        <p>
                            <span class="round-cirle">
                                <Icon icon="material-symbols:done" width="15px" height="15px" style="color: white" />
                            </span>
                            <span>
                                Relief of family care givers
                            </span>
                        </p>
                        <p>
                            <span class="round-cirle">
                                <Icon icon="material-symbols:done" width="15px" height="15px" style="color: white" />
                            </span>
                            <span>
                                Peace of mind
                            </span>
                        </p>
                        <p>
                            <span class="round-cirle">
                                <Icon icon="material-symbols:done" width="15px" height="15px" style="color: white" />
                            </span>
                            <span>
                                More affordable than inpatient care
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.CostofHomeCarepage-wrap {
    // border: 4px solid red;
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    p {
        font-size: 18px;
    }

    p,
    h3,
    h4 {
        font-family: Poppins;
    }

    &>.CostofHomeCarepage-page-banner {
        // border: 4px solid red;  
        padding: 150px 20px;
        background-repeat: no-repeat;
        background-image: url('../../assets/images/CostCalculatorPageImages/CostHomeCareImage/costHomeCareBanner.png');

        .contents {
            //   border: 1px solid red;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;

            h3 {
                font-size: 40px;
                font-weight: 700;
                line-height: 0px;
                letter-spacing: 0em;
                color: #fff;
            }
        }
    }

    &>.CostofHomeCarepage-caption {
        padding: 0 20px;

        &>.contents-picture {
            // border: 12px solid red;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            column-gap: 30px;
            row-gap: 30px;
            margin-top: 50px;
            margin-bottom: 30px;

            &>.contents {
                width: 600px;

                h3 {
                    color: $base-color;
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 25px;
                    letter-spacing: 0em;
                }

                h4 {
                    color: $base-color;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 25px;
                    letter-spacing: 0em;
                }
            }

            &>.picture {
                width: 550px;
                height: auto;

                img {
                    width: 100%;
                }
            }
        }

        &>.picture-contents {
            // border: 2px solid red;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            column-gap: 30px;
            row-gap: 30px;
            margin-top: 50px;
            margin-bottom: 30px;

            &>.picture {
                width: 550px;
                height: auto;

                img {
                    width: 100%;
                }
            }

            &>.contents {
                width: 600px;

                h3 {
                    color: $base-color;
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 25px;
                    letter-spacing: 0em;
                }

                &>.rounded-contents {
                    .round-cirle {
                        // border: 1px solid red;
                        background-color: $base-color;
                        border-radius: 50%;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        row-gap: 10px;
                        width: 20px;
                        height: 20px;
                        margin-right: 3px;
                    }
                }

                &>.icon-contact {
                    // border: 11px solid red;
                    width: fit-content;
                    background-color: $base-color-1;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 20px;
                    margin-top: 50px;
                    column-gap: 10px;

                    span {
                        display: flex;

                        a {
                            text-decoration: none;
                            font-size: 16px;
                        }
                    }

                    .phone-number {
                        font-weight: 700;
                        color: #fff;
                    }
                }
            }
        }

        &>.services-contents {
            // border: 2px solid red;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &>.underline-wrap {
                // border: 4px solid red;
                margin-top: 30px;

                &>.home-care {
                    display: flex;
                    // justify-content: center;

                    h3 {
                        position: relative;
                        font-size: 30px;
                        font-weight: 700;
                        line-height: 60px;
                        letter-spacing: 0em;
                    }

                    h3::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 10%;
                        width: 80%;
                        border-bottom: 7px solid $base-color-1;
                        border-radius: 10px;
                    }
                }
            }

            p {
                // border: 2px solid red;
                width: 1100px;
            }

            &>.costHome-CostLive {
                // border: 2px solid red;
                display: flex;
                justify-content: center;
                column-gap: 100px;
                flex-wrap: wrap;
                // margin-top: 0px;

                &>.costHomebtn {
                    background-color: $base-color-1;
                    width: fit-content;
                    border-radius: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px 30px;
                    margin-top: 30px;
                    column-gap: 10px;

                    &>.icon-links {
                        color: #fff;
                        font-size: 16px;
                        text-decoration: none;
                        font-weight: 700;
                    }

                    span {
                        display: flex;

                        a {
                            text-decoration: none;
                            font-size: 16px;
                        }
                    }

                    .phone-number {
                        font-weight: 700;
                        color: #fff;
                    }
                }
            }
        }

        &>.whychoose-lovenest {
            // border: 2px solid red;
            margin-top: 80px;

            h3 {
                color: $base-color;
                font-size: 22px;
                font-weight: 700;
                line-height: 25px;
                letter-spacing: 0em;
            }

            &>.meet-with-us {
                //   border: 2px solid red;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                column-gap: 30px;
                row-gap: 10px;

                &>.contact-us {
                    // border: 2px solid red;
                    width: 280px;
                    background-color: $base-color;
                    border-bottom-right-radius: 10px;
                    border-bottom-left-radius: 10px;
                    border-top-right-radius: 10px;
                    border-top-left-radius: 10px;

                    &>.choose-image {
                        img {
                            width: 100%;
                            height: auto;
                            border-top-right-radius: 10px;
                            border-top-left-radius: 10px;
                        }
                    }

                    .caption {
                        color: #fff;
                        text-align: center;
                        font-weight: 700;
                        font-size: 20px;
                    }

                    p {
                        color: #FFFFFF80;
                        padding: 0 5px;
                    }
                }
            }


        }
    }

    &>.elderly-support {
        margin-top: 50px;
        margin-bottom: 50px;

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
                    // border: 11px solid red;
                    width: fit-content;
                    background-color: #fff;
                    border-radius: 20px;
                    display: flex;
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
                        font-weight: 700;
                        color: #DA5E42;
                    }
                }
            }
        }
    }

    &>.promisecontents-picture {
        // border: 2px solid red;

        h3 {
            color: $base-color;
            font-size: 22px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
        }

        &>.contentsPicture-wrap {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            column-gap: 30px;
            row-gap: 30px;

            &>.contents {
                width: 600px;
                padding: 0 20px;


                &>.rounded-contents {
                    // border: 2px solid red;
                    display: flex;
                    justify-content: space-between;

                    .round-cirle {
                        // border: 1px solid red;
                        background-color: $base-color;
                        border-radius: 50%;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        row-gap: 10px;
                        width: 20px;
                        height: 20px;
                        margin-right: 3px;
                    }

                    &>.personalized,
                    .less-stress {
                        // border: 1px solid red;
                        line-height: 20px;
                    }
                }

                &>.icon-contact {
                    // border: 11px solid red;
                    width: fit-content;
                    background-color: $base-color-1;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 20px;
                    margin-top: 50px;
                    column-gap: 10px;

                    span {
                        display: flex;

                        a {
                            text-decoration: none;
                            font-size: 16px;
                        }
                    }

                    .phone-number {
                        font-weight: 700;
                        color: #fff;
                    }
                }
            }

            &>.picture {
                width: 500px;
                background-color: $base-color;
                border-top-left-radius: 200px;
                border-bottom-left-radius: 200px;
                padding-top: 35px;
                padding-bottom: 35px;
                padding-left: 40px;



                &>.roundImage-content {
                    // border: 2px solid red;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;

                    &>.image {

                        // border: 2px solid blue;
                        img {
                            border: 30px solid $base-color-1;
                            width: 200px;
                            border-radius: 150px;
                        }
                    }

                    &>.contents {
                        // border: 2px solid blue;
                        width: 150px;
                        display: flex;
                        flex-direction: column;
                        row-gap: 35px;
                        padding-right: 20px;
                        margin-right: 20px;

                        .call {
                            // border: 2px solid blue;
                            background-color: #fff;
                            color: $base-color-1;
                            border-radius: 10px;
                            width: inherit;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            column-gap: 10px;
                            padding: 10px 10px;
                            font-size: 25px;
                        }

                        .callone {
                            // border: 12px solid blue;
                            background-color: $base-color-1;
                            color: #fff;
                        }
                    }

                    span {
                        font-weight: 700;
                    }
                }

            }
        }
    }

    &>.image-paycare {
        &>.contentsPicture-wrap {
            // width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            column-gap: 30px;
            row-gap: 30px;
            margin-top: 50px;
            margin-bottom: 50px;

            &>.picture {

                // border: 2px solid red;
                img {
                    width: 550px;
                }
            }

            &>.contents {
                width: 600px;

                h3 {
                    color: $base-color;
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 2px;
                    letter-spacing: 0em;
                }

                &>.rounded-contents {
                    // border: 2px solid red;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    line-height: 2px;
                    margin-top: 30px;

                    h4 {
                        color: $base-color;
                        font-size: 20px;
                        font-weight: 700;
                        line-height: 2px;
                        letter-spacing: 0em;
                    }

                    .round-cirle {
                        // border: 1px solid red;
                        background-color: $base-color;
                        border-radius: 50%;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        row-gap: 10px;
                        width: 20px;
                        height: 20px;
                        margin-right: 3px;
                    }
                }
            }
        }
    }
}

// XX-SM (<251px)
@media (max-width: 250.9px) {
    .CostofHomeCarepage-wrap {
        // border: 4px solid red;

        p, h4 {
            font-size: 16px;
        }


        &>.CostofHomeCarepage-page-banner {
            // border: 4px solid red;  
            padding: 100px 20px;

            .contents {
                //   border: 1px solid red;
          
                h3 {
                    font-size: 22px;
                    line-height: 25px;
                    text-align: center;
                }
            }
        }

        &>.CostofHomeCarepage-caption {
            padding: 0 10px;

            &>.contents-picture {
                // border: 2px solid red;
                width: 100%;
                margin-top: 30px;

                &>.contents {
                    width: 100%;

                    h3 {
                        font-size: 18px;
                        line-height: 25px;
                        text-align: center;
                    }

                    h4 {
                        color: $base-color;
                        font-size: 16px;
                        text-align: center;
                    }
                }

                &>.picture {
                    // border: 2px solid red;
                    width: 100%;

                    img {
                        width: 100%;
                    }
                }
            }

            &>.picture-contents {
                // border: 2px solid red;
                width: 100%;
                justify-content: center;
                margin-bottom: 0px;

                &>.picture {
                    width: 100%;

                    img {
                        width: 100%;
                    }
                }

                &>.contents {
                    width: 100%;

                    h3 {
                        font-size: 18px;
                        text-align: center;
                    }

                    // &>.rounded-contents {
                    //     .round-cirle {
                    //         // border: 1px solid red;
                    //         background-color: $base-color;
                    //         border-radius: 50%;
                    //         display: inline-flex;
                    //         justify-content: center;
                    //         align-items: center;
                    //         row-gap: 10px;
                    //         width: 20px;
                    //         height: 20px;
                    //         margin-right: 3px;
                    //     }
                    // }

                    &>.icon-contact {
                        // border: 11px solid red;
                        width: 100%;
                        background-color: $base-color-1;
                        border-radius: 8px;
                        padding: 8px 0px;
                        margin-top: 50px;
                        column-gap: 10px;

                        // span {
                        //     display: flex;

                        //     a {
                        //         text-decoration: none;
                        //         font-size: 16px;
                        //     }
                        // }

                        // .phone-number {
                        //     font-weight: 700;
                        //     color: #fff;
                        // }
                    }
                }
            }

            &>.services-contents {
                // border: 2px solid red;

                &>.underline-wrap {
                    // border: 4px solid red;
                    margin-top: 30px;

                    &>.home-care {
                        display: flex;
                        // justify-content: center;

                        h3 {
                            position: relative;
                            font-size: 18px;
                            line-height: 30px;
                            text-align: center;
                        }

                        h3::after {
                            left: 25%;
                            width: 50%;
                            border-bottom: 3px solid $base-color-1;
                        }
                    }
                }

                p {
                    // border: 2px solid red;
                    width: 100%;
                }

                &>.costHome-CostLive {
                    // border: 2px solid red;
                   

                    &>.costHomebtn {
                        width: 100%;
                        border-radius: 8px;
                        padding: 8px 15px;
                        margin-top: 30px;
                        column-gap: 10px;

                        &>.icon-links {
                            color: #fff;
                            font-size: 16px;
                            text-decoration: none;
                            font-weight: 700;
                        }

                        span {
                            display: flex;

                            a {
                                text-decoration: none;
                                font-size: 16px;
                            }
                        }

                        .phone-number {
                            font-weight: 700;
                            color: #fff;
                        }
                    }
                }
            }

            &>.whychoose-lovenest {
                // border: 2px solid red;
                margin-top: 50px;

                h3 {
                    font-size: 18px;
                    text-align: center;
                }

                &>.meet-with-us {
                    //   border: 2px solid red;
                    justify-content: center;

                    &>.contact-us {
                        // border: 2px solid red;
                        width: 100%;
                 
                        &>.choose-image {
                            img {
                                width: 100%;
                            }
                        }

                        .caption {
                            font-size: 18px;
                        }
                    }
                }
            }
        }

        &>.elderly-support {
            margin-top: 50px;
            margin-bottom: 50px;

            .call-us {
                // border: 12px solid red; 
                padding: 8px 15px;

                &>.call-contact {
                    div h3 {
                        font-size: 16px;
                        text-align: center;
                    }

                    &>.icon-contact {
                        // border: 11px solid red;
                        width: 100%;
                        border-radius: 8px;
                        display: flex;
                        padding: 8px 15px;
                        column-gap: 10px;

                        span {
                            display: flex;

                            a {
                                text-decoration: none;
                                font-size: 16px;
                            }
                        }

                        .phone-number {
                            font-weight: 700;
                            color: #DA5E42;
                        }
                    }
                }
            }
        }

        &>.promisecontents-picture {
            // border: 2px solid red;

            h3 {
                font-size: 18px;
                text-align: center;
            }

            &>.contentsPicture-wrap {
                justify-content: center;

                &>.contents {
                    width: 100%;
                    padding: 0 10px;


                    &>.rounded-contents {
                        // border: 2px solid red;
                        justify-content: center;
                        flex-direction: column;


                        // .round-cirle {
                        //     border: 1px solid red;
                        //     background-color: $base-color;
                        //     border-radius: 50%;
                        //     display: inline-flex;
                        //     justify-content: center;
                        //     align-items: center;
                        //     row-gap: 10px;
                        //     width: 20px;
                        //     height: 20px;
                        //     margin-right: 3px;
                        // }

                        // &>.personalized,
                        // .less-stress {
                        //     border: 1px solid red;
                        //     line-height: 20px;
                        // }
                    }

                    &>.icon-contact {
                        // border: 11px solid red;
                        width: 100%;
                        border-radius: 8px;
                        justify-content: center;
                        padding: 8px 0px;
                        margin-top: 20px;
                        margin-bottom: 50px;
                        column-gap: 10px;

                        // span {
                        //     display: flex;

                        //     a {
                        //         text-decoration: none;
                        //         font-size: 16px;
                        //     }
                        // }

                        // .phone-number {
                        //     font-weight: 700;
                        //     color: #fff;
                        // }
                    }
                }

                &>.picture {
                    width: 100%;
                    border-top-left-radius: 0px;
                    border-bottom-left-radius: 0px;
                    padding-top: 35px;
                    padding-bottom: 35px;
                    padding-left: 0px;


                    &>.roundImage-content {
                        padding: 0 10px;
                        display: flex;
                        justify-content: center;
                        row-gap: 30px;

                        &>.image {
                            // border: 2px solid blue;

                            img {
                                border: 10px solid $base-color-1;
                            }
                        }

                        &>.contents {
                            // border: 2px solid blue;
                            width: 100%;
                            row-gap: 10px;
                            padding-right: 0px;
                            margin-right: 0px;

                            .call {
                                // border: 2px solid blue;
                                border-radius: 8px;
                                width: 100%;
                                column-gap: 10px;
                                padding: 8px 0px;
                                font-size: 18px;
                            }
                        }
                    }

                }
            }
        }

        &>.image-paycare {
            &>.contentsPicture-wrap {
                justify-content: center;
                margin-bottom: 0px;

                &>.picture {

                    // border: 2px solid red;
                    img {
                        width: 100%;
                    }
                }

                &>.contents {
                    width: 100%;
                    padding: 0 10px;

                    h3 {
                        font-size: 18px;
                        line-height: 25px;
                        text-align: center;
                    }

                    &>.rounded-contents {
                        // border: 2px solid red;
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        justify-content: center;
                        flex-direction: column;
                        line-height: 25px;
                        margin-top: 30px;

                        h4 {
                            font-size: 16px;
                        }

                        // .round-cirle {
                        //     // border: 1px solid red;
                        //     background-color: $base-color;
                        //     border-radius: 50%;
                        //     display: inline-flex;
                        //     justify-content: center;
                        //     align-items: center;
                        //     row-gap: 10px;
                        //     width: 20px;
                        //     height: 20px;
                        //     margin-right: 3px;
                        // }
                    }
                }
            }
        }
    }
}

// XX-SM
@media (min-width: 251px) and (max-width: 350.9px) {
    .CostofHomeCarepage-wrap {
        // border: 4px solid red;

        p, h4 {
            font-size: 16px;
        }


        &>.CostofHomeCarepage-page-banner {
            // border: 4px solid red;  
            padding: 100px 20px;

            .contents {
                //   border: 1px solid red;
          
                h3 {
                    font-size: 22px;
                    line-height: 25px;
                    text-align: center;
                }
            }
        }

        &>.CostofHomeCarepage-caption {
            padding: 0 10px;

            &>.contents-picture {
                // border: 2px solid red;
                width: 100%;
                margin-top: 30px;

                &>.contents {
                    width: 100%;

                    h3 {
                        font-size: 18px;
                        line-height: 25px;
                        text-align: center;
                    }

                    h4 {
                        color: $base-color;
                        font-size: 16px;
                        text-align: center;
                    }
                }

                &>.picture {
                    // border: 2px solid red;
                    width: 100%;

                    img {
                        width: 100%;
                    }
                }
            }

            &>.picture-contents {
                // border: 2px solid red;
                width: 100%;
                justify-content: center;
                margin-bottom: 0px;

                &>.picture {
                    width: 100%;

                    img {
                        width: 100%;
                    }
                }

                &>.contents {
                    width: 100%;

                    h3 {
                        font-size: 18px;
                        text-align: center;
                    }

                    // &>.rounded-contents {
                    //     .round-cirle {
                    //         // border: 1px solid red;
                    //         background-color: $base-color;
                    //         border-radius: 50%;
                    //         display: inline-flex;
                    //         justify-content: center;
                    //         align-items: center;
                    //         row-gap: 10px;
                    //         width: 20px;
                    //         height: 20px;
                    //         margin-right: 3px;
                    //     }
                    // }

                    &>.icon-contact {
                        // border: 11px solid red;
                        width: 100%;
                        background-color: $base-color-1;
                        border-radius: 8px;
                        padding: 8px 0px;
                        margin-top: 50px;
                        column-gap: 10px;

                        // span {
                        //     display: flex;

                        //     a {
                        //         text-decoration: none;
                        //         font-size: 16px;
                        //     }
                        // }

                        // .phone-number {
                        //     font-weight: 700;
                        //     color: #fff;
                        // }
                    }
                }
            }

            &>.services-contents {
                // border: 2px solid red;

                &>.underline-wrap {
                    // border: 4px solid red;
                    margin-top: 30px;

                    &>.home-care {
                        display: flex;
                        // justify-content: center;

                        h3 {
                            position: relative;
                            font-size: 18px;
                            line-height: 30px;
                            text-align: center;
                        }

                        h3::after {
                            left: 25%;
                            width: 50%;
                            border-bottom: 3px solid $base-color-1;
                        }
                    }
                }

                p {
                    // border: 2px solid red;
                    width: 100%;
                }

                &>.costHome-CostLive {
                    // border: 2px solid red;
                   

                    &>.costHomebtn {
                        width: 100%;
                        border-radius: 8px;
                        padding: 8px 15px;
                        margin-top: 30px;
                        column-gap: 10px;

                        &>.icon-links {
                            color: #fff;
                            font-size: 16px;
                            text-decoration: none;
                            font-weight: 700;
                        }

                        span {
                            display: flex;

                            a {
                                text-decoration: none;
                                font-size: 16px;
                            }
                        }

                        .phone-number {
                            font-weight: 700;
                            color: #fff;
                        }
                    }
                }
            }

            &>.whychoose-lovenest {
                // border: 2px solid red;
                margin-top: 50px;

                h3 {
                    font-size: 18px;
                    text-align: center;
                }

                &>.meet-with-us {
                    //   border: 2px solid red;
                    justify-content: center;

                    &>.contact-us {
                        // border: 2px solid red;
                        width: 100%;
                 
                        &>.choose-image {
                            img {
                                width: 100%;
                            }
                        }

                        .caption {
                            font-size: 18px;
                        }
                    }
                }
            }
        }

        &>.elderly-support {
            margin-top: 50px;
            margin-bottom: 50px;

            .call-us {
                // border: 12px solid red; 
                padding: 8px 15px;

                &>.call-contact {
                    div h3 {
                        font-size: 16px;
                        text-align: center;
                    }

                    &>.icon-contact {
                        // border: 11px solid red;
                        width: 100%;
                        border-radius: 8px;
                        display: flex;
                        padding: 8px 15px;
                        column-gap: 10px;

                        span {
                            display: flex;

                            a {
                                text-decoration: none;
                                font-size: 16px;
                            }
                        }

                        .phone-number {
                            font-weight: 700;
                            color: #DA5E42;
                        }
                    }
                }
            }
        }

        &>.promisecontents-picture {
            // border: 2px solid red;

            h3 {
                font-size: 18px;
                text-align: center;
            }

            &>.contentsPicture-wrap {
                justify-content: center;

                &>.contents {
                    width: 100%;
                    padding: 0 10px;


                    &>.rounded-contents {
                        // border: 2px solid red;
                        justify-content: center;
                        flex-direction: column;


                        // .round-cirle {
                        //     border: 1px solid red;
                        //     background-color: $base-color;
                        //     border-radius: 50%;
                        //     display: inline-flex;
                        //     justify-content: center;
                        //     align-items: center;
                        //     row-gap: 10px;
                        //     width: 20px;
                        //     height: 20px;
                        //     margin-right: 3px;
                        // }

                        // &>.personalized,
                        // .less-stress {
                        //     border: 1px solid red;
                        //     line-height: 20px;
                        // }
                    }

                    &>.icon-contact {
                        // border: 11px solid red;
                        width: 100%;
                        border-radius: 8px;
                        justify-content: center;
                        padding: 8px 0px;
                        margin-top: 20px;
                        margin-bottom: 50px;
                        column-gap: 10px;

                        // span {
                        //     display: flex;

                        //     a {
                        //         text-decoration: none;
                        //         font-size: 16px;
                        //     }
                        // }

                        // .phone-number {
                        //     font-weight: 700;
                        //     color: #fff;
                        // }
                    }
                }

                &>.picture {
                    width: 100%;
                    border-top-left-radius: 0px;
                    border-bottom-left-radius: 0px;
                    padding-top: 35px;
                    padding-bottom: 35px;
                    padding-left: 0px;


                    &>.roundImage-content {
                        padding: 0 10px;
                        display: flex;
                        justify-content: center;
                        row-gap: 30px;

                        &>.image {
                            // border: 2px solid blue;

                            img {
                                border: 10px solid $base-color-1;
                            }
                        }

                        &>.contents {
                            // border: 2px solid blue;
                            width: 100%;
                            row-gap: 10px;
                            padding-right: 0px;
                            margin-right: 0px;

                            .call {
                                // border: 2px solid blue;
                                border-radius: 8px;
                                width: 100%;
                                column-gap: 10px;
                                padding: 8px 0px;
                                font-size: 18px;
                            }
                        }
                    }

                }
            }
        }

        &>.image-paycare {
            &>.contentsPicture-wrap {
                justify-content: center;
                margin-bottom: 0px;

                &>.picture {

                    // border: 2px solid red;
                    img {
                        width: 100%;
                    }
                }

                &>.contents {
                    width: 100%;
                    padding: 0 10px;

                    h3 {
                        font-size: 18px;
                        line-height: 25px;
                        text-align: center;
                    }

                    &>.rounded-contents {
                        // border: 2px solid red;
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        justify-content: center;
                        flex-direction: column;
                        line-height: 25px;
                        margin-top: 30px;

                        h4 {
                            font-size: 16px;
                        }

                        // .round-cirle {
                        //     // border: 1px solid red;
                        //     background-color: $base-color;
                        //     border-radius: 50%;
                        //     display: inline-flex;
                        //     justify-content: center;
                        //     align-items: center;
                        //     row-gap: 10px;
                        //     width: 20px;
                        //     height: 20px;
                        //     margin-right: 3px;
                        // }
                    }
                }
            }
        }
    }
}

// X-SM
@media (min-width: 351px) and (max-width: 575.9px) {
    .CostofHomeCarepage-wrap {
        // border: 4px solid red;

        p, h4 {
            font-size: 16px;
        }


        &>.CostofHomeCarepage-page-banner {
            // border: 4px solid red;  
            padding: 130px 20px;

            .contents {
                //   border: 1px solid red;
          
                h3 {
                    font-size: 22px;
                    line-height: 25px;
                    text-align: center;
                }
            }
        }

        &>.CostofHomeCarepage-caption {
            padding: 0 10px;

            &>.contents-picture {
                // border: 2px solid red;
                width: 100%;
                margin-top: 30px;

                &>.contents {
                    width: 100%;

                    h3 {
                        font-size: 18px;
                        line-height: 25px;
                        text-align: center;
                    }

                    h4 {
                        color: $base-color;
                        font-size: 16px;
                        text-align: center;
                    }
                }

                &>.picture {
                    // border: 2px solid red;
                    width: 100%;

                    img {
                        width: 100%;
                    }
                }
            }

            &>.picture-contents {
                // border: 2px solid red;
                width: 100%;
                justify-content: center;
                margin-bottom: 0px;

                &>.picture {
                    width: 100%;

                    img {
                        width: 100%;
                    }
                }

                &>.contents {
                    width: 100%;

                    h3 {
                        font-size: 18px;
                        text-align: center;
                    }

                    // &>.rounded-contents {
                    //     .round-cirle {
                    //         // border: 1px solid red;
                    //         background-color: $base-color;
                    //         border-radius: 50%;
                    //         display: inline-flex;
                    //         justify-content: center;
                    //         align-items: center;
                    //         row-gap: 10px;
                    //         width: 20px;
                    //         height: 20px;
                    //         margin-right: 3px;
                    //     }
                    // }

                    &>.icon-contact {
                        // border: 11px solid red;
                        width: 100%;
                        background-color: $base-color-1;
                        border-radius: 8px;
                        padding: 10px 0px;
                        margin-top: 50px;
                        column-gap: 10px;

                        // span {
                        //     display: flex;

                        //     a {
                        //         text-decoration: none;
                        //         font-size: 16px;
                        //     }
                        // }

                        // .phone-number {
                        //     font-weight: 700;
                        //     color: #fff;
                        // }
                    }
                }
            }

            &>.services-contents {
                // border: 2px solid red;

                &>.underline-wrap {
                    // border: 4px solid red;
                    margin-top: 30px;

                    &>.home-care {
                        display: flex;
                        // justify-content: center;

                        h3 {
                            position: relative;
                            font-size: 18px;
                            line-height: 30px;
                            text-align: center;
                        }

                        h3::after {
                            left: 25%;
                            width: 50%;
                            border-bottom: 3px solid $base-color-1;
                        }
                    }
                }

                p {
                    // border: 2px solid red;
                    width: 100%;
                }

                &>.costHome-CostLive {
                    // border: 2px solid red;
                   

                    &>.costHomebtn {
                        width: 100%;
                        border-radius: 8px;
                        padding: 10px 0px;
                        margin-top: 30px;
                        column-gap: 10px;

                        &>.icon-links {
                            color: #fff;
                            font-size: 16px;
                            text-decoration: none;
                            font-weight: 700;
                        }

                        span {
                            display: flex;

                            a {
                                text-decoration: none;
                                font-size: 16px;
                            }
                        }

                        .phone-number {
                            font-weight: 700;
                            color: #fff;
                        }
                    }
                }
            }

            &>.whychoose-lovenest {
                // border: 2px solid red;
                margin-top: 50px;

                h3 {
                    font-size: 18px;
                    text-align: center;
                }

                &>.meet-with-us {
                    //   border: 2px solid red;
                    justify-content: center;

                    &>.contact-us {
                        // border: 2px solid red;
                        width: 100%;
                 
                        &>.choose-image {
                            img {
                                width: 100%;
                            }
                        }

                        .caption {
                            font-size: 18px;
                        }
                    }
                }
            }
        }

        &>.elderly-support {
            margin-top: 50px;
            margin-bottom: 50px;

            .call-us {
                // border: 12px solid red; 
                padding: 8px 15px;

                &>.call-contact {
                    display: flex;
                    justify-content: center;

                    div h3 {
                        font-size: 16px;
                        text-align: center;
                    }

                    &>.icon-contact {
                        // border: 11px solid red;
                        display: flex;
                        justify-content: center;
                        width: 100%;
                        border-radius: 8px;
                        display: flex;
                        padding: 10px 0px;
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
                            font-weight: 700;
                            color: #DA5E42;
                        }
                    }
                }
            }
        }

        &>.promisecontents-picture {
            // border: 2px solid red;

            h3 {
                font-size: 18px;
                text-align: center;
            }

            &>.contentsPicture-wrap {
                justify-content: center;

                &>.contents {
                    width: 100%;
                    padding: 0 10px;


                    &>.rounded-contents {
                        // border: 2px solid red;
                        justify-content: center;
                        flex-direction: column;


                        // .round-cirle {
                        //     border: 1px solid red;
                        //     background-color: $base-color;
                        //     border-radius: 50%;
                        //     display: inline-flex;
                        //     justify-content: center;
                        //     align-items: center;
                        //     row-gap: 10px;
                        //     width: 20px;
                        //     height: 20px;
                        //     margin-right: 3px;
                        // }

                        // &>.personalized,
                        // .less-stress {
                        //     border: 1px solid red;
                        //     line-height: 20px;
                        // }
                    }

                    &>.icon-contact {
                        // border: 11px solid red;
                        width: 100%;
                        border-radius: 8px;
                        justify-content: center;
                        padding: 10px 0px;
                        margin-top: 20px;
                        margin-bottom: 50px;
                        column-gap: 10px;

                        // span {
                        //     display: flex;

                        //     a {
                        //         text-decoration: none;
                        //         font-size: 16px;
                        //     }
                        // }

                        // .phone-number {
                        //     font-weight: 700;
                        //     color: #fff;
                        // }
                    }
                }

                &>.picture {
                    width: 100%;
                    border-top-left-radius: 0px;
                    border-bottom-left-radius: 0px;
                    padding-top: 35px;
                    padding-bottom: 35px;
                    padding-left: 0px;


                    &>.roundImage-content {
                        padding: 0 10px;
                        display: flex;
                        justify-content: center;
                        row-gap: 30px;

                        &>.image {
                            // border: 2px solid blue;

                            img {
                                border: 10px solid $base-color-1;
                            }
                        }

                        &>.contents {
                            // border: 2px solid blue;
                            width: 100%;
                            row-gap: 10px;
                            padding-right: 0px;
                            margin-right: 0px;

                            .call {
                                // border: 2px solid blue;
                                border-radius: 8px;
                                width: 100%;
                                column-gap: 10px;
                                padding: 10px 0px;
                                font-size: 18px;
                            }
                        }
                    }

                }
            }
        }

        &>.image-paycare {
            &>.contentsPicture-wrap {
                justify-content: center;
                margin-bottom: 0px;

                &>.picture {

                    // border: 2px solid red;
                    img {
                        width: 100%;
                    }
                }

                &>.contents {
                    width: 100%;
                    padding: 0 10px;

                    h3 {
                        font-size: 18px;
                        line-height: 25px;
                        text-align: center;
                    }

                    &>.rounded-contents {
                        // border: 2px solid red;
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        justify-content: center;
                        flex-direction: column;
                        line-height: 25px;
                        margin-top: 30px;

                        h4 {
                            font-size: 16px;
                        }

                        // .round-cirle {
                        //     // border: 1px solid red;
                        //     background-color: $base-color;
                        //     border-radius: 50%;
                        //     display: inline-flex;
                        //     justify-content: center;
                        //     align-items: center;
                        //     row-gap: 10px;
                        //     width: 20px;
                        //     height: 20px;
                        //     margin-right: 3px;
                        // }
                    }
                }
            }
        }
    }
}

// SM
@media (min-width: 576px) and (max-width: 767.9px) {
    .CostofHomeCarepage-wrap {
        // border: 4px solid red;

        p, h4 {
            font-size: 16px;
        }


        &>.CostofHomeCarepage-page-banner {
            // border: 4px solid red;  
            padding: 140px 20px;

            .contents {
                //   border: 1px solid red;
          
                h3 {
                    font-size: 22px;
                    line-height: 25px;
                    text-align: center;
                }
            }
        }

        &>.CostofHomeCarepage-caption {
            padding: 0 10px;

            &>.contents-picture {
                // border: 2px solid red;
                width: 100%;
                margin-top: 30px;

                &>.contents {
                    width: 100%;

                    h3 {
                        font-size: 18px;
                        line-height: 25px;
                        text-align: center;
                    }

                    h4 {
                        color: $base-color;
                        font-size: 16px;
                        text-align: center;
                    }
                }

                &>.picture {
                    // border: 2px solid red;
                    width: 100%;

                    img {
                        width: 100%;
                    }
                }
            }

            &>.picture-contents {
                // border: 2px solid red;
                width: 100%;
                justify-content: center;
                margin-bottom: 0px;

                &>.picture {
                    width: 100%;

                    img {
                        width: 100%;
                    }
                }

                &>.contents {
                    width: 100%;

                    h3 {
                        font-size: 18px;
                        text-align: center;
                    }

                    // &>.rounded-contents {
                    //     .round-cirle {
                    //         // border: 1px solid red;
                    //         background-color: $base-color;
                    //         border-radius: 50%;
                    //         display: inline-flex;
                    //         justify-content: center;
                    //         align-items: center;
                    //         row-gap: 10px;
                    //         width: 20px;
                    //         height: 20px;
                    //         margin-right: 3px;
                    //     }
                    // }

                    &>.icon-contact {
                        // border: 11px solid red;
                        width: 50%;
                        margin: 0 auto;
                        background-color: $base-color-1;
                        border-radius: 8px;
                        padding: 10px 0px;
                        margin-top: 50px;
                        column-gap: 10px;

                        // span {
                        //     display: flex;

                        //     a {
                        //         text-decoration: none;
                        //         font-size: 16px;
                        //     }
                        // }

                        // .phone-number {
                        //     font-weight: 700;
                        //     color: #fff;
                        // }
                    }
                }
            }

            &>.services-contents {
                // border: 2px solid red;

                &>.underline-wrap {
                    // border: 4px solid red;
                    margin-top: 30px;

                    &>.home-care {
                        display: flex;
                        // justify-content: center;

                        h3 {
                            position: relative;
                            font-size: 18px;
                            line-height: 30px;
                            text-align: center;
                        }

                        h3::after {
                            left: 25%;
                            width: 50%;
                            border-bottom: 3px solid $base-color-1;
                        }
                    }
                }

                p {
                    // border: 2px solid red;
                    width: 100%;
                }

                &>.costHome-CostLive {
                    // border: 2px solid red;
                   

                    &>.costHomebtn {
                        width: 70%;
                        border-radius: 8px;
                        padding: 10px 0px;
                        margin-top: 30px;
                        column-gap: 10px;

                        &>.icon-links {
                            color: #fff;
                            font-size: 16px;
                            text-decoration: none;
                            font-weight: 700;
                        }

                        span {
                            display: flex;

                            a {
                                text-decoration: none;
                                font-size: 16px;
                            }
                        }

                        .phone-number {
                            font-weight: 700;
                            color: #fff;
                        }
                    }
                }
            }

            &>.whychoose-lovenest {
                // border: 2px solid red;
                margin-top: 50px;

                h3 {
                    font-size: 18px;
                    text-align: center;
                }

                &>.meet-with-us {
                    //   border: 2px solid red;
                    justify-content: center;

                    &>.contact-us {
                        // border: 2px solid red;
                        width: 100%;
                 
                        &>.choose-image {
                            img {
                                width: 100%;
                            }
                        }

                        .caption {
                            font-size: 18px;
                        }
                    }
                }
            }
        }

        &>.elderly-support {
            margin-top: 50px;
            margin-bottom: 50px;

            .call-us {
                // border: 12px solid red; 
                padding: 8px 15px;

                &>.call-contact {
                    display: flex;
                    justify-content: center;

                    div h3 {
                        font-size: 16px;
                        text-align: center;
                    }

                    &>.icon-contact {
                        // border: 11px solid red;
                        display: flex;
                        justify-content: center;
                        width: 50%;
                        border-radius: 8px;
                        display: flex;
                        padding: 10px 0px;
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
                            font-weight: 700;
                            color: #DA5E42;
                        }
                    }
                }
            }
        }

        &>.promisecontents-picture {
            // border: 2px solid red;

            h3 {
                font-size: 18px;
                text-align: center;
            }

            &>.contentsPicture-wrap {
                justify-content: center;

                &>.contents {
                    width: 100%;
                    padding: 0 10px;


                    &>.rounded-contents {
                        // border: 2px solid red;
                        justify-content: center;
                        flex-direction: column;


                        // .round-cirle {
                        //     border: 1px solid red;
                        //     background-color: $base-color;
                        //     border-radius: 50%;
                        //     display: inline-flex;
                        //     justify-content: center;
                        //     align-items: center;
                        //     row-gap: 10px;
                        //     width: 20px;
                        //     height: 20px;
                        //     margin-right: 3px;
                        // }

                        // &>.personalized,
                        // .less-stress {
                        //     border: 1px solid red;
                        //     line-height: 20px;
                        // }
                    }

                    &>.icon-contact {
                        // border: 11px solid red;
                        width: 50%;
                        margin: 0 auto;
                        border-radius: 8px;
                        justify-content: center;
                        padding: 10px 0px;
                        margin-top: 20px;
                        margin-bottom: 50px;
                        column-gap: 10px;

                        // span {
                        //     display: flex;

                        //     a {
                        //         text-decoration: none;
                        //         font-size: 16px;
                        //     }
                        // }

                        // .phone-number {
                        //     font-weight: 700;
                        //     color: #fff;
                        // }
                    }
                }

                &>.picture {
                    width: 100%;
                    border-top-left-radius: 0px;
                    border-bottom-left-radius: 0px;
                    padding-top: 35px;
                    padding-bottom: 35px;
                    padding-left: 0px;


                    &>.roundImage-content {
                        padding: 0 10px;
                        display: flex;
                        justify-content: center;
                        row-gap: 30px;

                        &>.image {
                            // border: 2px solid blue;

                            img {
                                border: 10px solid $base-color-1;
                                border-radius: 200px;
                                width: 350px;
                            }
                        }

                        &>.contents {
                            // border: 2px solid blue;
                            width: 100%;
                            row-gap: 20px;
                            padding-right: 0px;
                            margin-right: 0px;

                            .call {
                                // border: 2px solid blue;
                                border-radius: 8px;
                                width: 50%;
                                margin: 0 auto;
                                column-gap: 10px;
                                padding: 10px 0px;
                                font-size: 18px;
                            }
                        }
                    }

                }
            }
        }

        &>.image-paycare {
            &>.contentsPicture-wrap {
                justify-content: center;
                margin-bottom: 0px;

                &>.picture {

                    // border: 2px solid red;
                    img {
                        width: 100%;
                    }
                }

                &>.contents {
                    width: 100%;
                    padding: 0 10px;

                    h3 {
                        font-size: 18px;
                        line-height: 25px;
                        text-align: center;
                    }

                    &>.rounded-contents {
                        // border: 2px solid red;
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        justify-content: center;
                        flex-direction: column;
                        line-height: 25px;
                        margin-top: 30px;

                        h4 {
                            font-size: 16px;
                        }

                        // .round-cirle {
                        //     // border: 1px solid red;
                        //     background-color: $base-color;
                        //     border-radius: 50%;
                        //     display: inline-flex;
                        //     justify-content: center;
                        //     align-items: center;
                        //     row-gap: 10px;
                        //     width: 20px;
                        //     height: 20px;
                        //     margin-right: 3px;
                        // }
                    }
                }
            }
        }
    }
}

// MD
@media (min-width: 768px) and (max-width: 991.9px) {
    .CostofHomeCarepage-wrap {
        // border: 4px solid red;

        p, h4 {
            font-size: 16px;
        }


        &>.CostofHomeCarepage-page-banner {
            // border: 4px solid red;  
            padding: 140px 20px;

            .contents {
                //   border: 1px solid red;
          
                h3 {
                    font-size: 22px;
                    line-height: 25px;
                    text-align: center;
                }
            }
        }

        &>.CostofHomeCarepage-caption {
            padding: 0 10px;

            &>.contents-picture {
                // border: 2px solid red;
                width: 100%;
                margin-top: 30px;

                &>.contents {
                    width: 100%;

                    h3 {
                        font-size: 18px;
                        line-height: 25px;
                        text-align: center;
                    }

                    h4 {
                        color: $base-color;
                        font-size: 16px;
                        text-align: center;
                    }
                }

                &>.picture {
                    // border: 2px solid red;
                    width: 100%;

                    img {
                        width: 100%;
                    }
                }
            }

            &>.picture-contents {
                // border: 2px solid red;
                width: 100%;
                justify-content: center;
                margin-bottom: 0px;

                &>.picture {
                    width: 100%;

                    img {
                        width: 100%;
                    }
                }

                &>.contents {
                    width: 100%;

                    h3 {
                        font-size: 18px;
                        text-align: center;
                    }

                    // &>.rounded-contents {
                    //     .round-cirle {
                    //         // border: 1px solid red;
                    //         background-color: $base-color;
                    //         border-radius: 50%;
                    //         display: inline-flex;
                    //         justify-content: center;
                    //         align-items: center;
                    //         row-gap: 10px;
                    //         width: 20px;
                    //         height: 20px;
                    //         margin-right: 3px;
                    //     }
                    // }

                    &>.icon-contact {
                        // border: 11px solid red;
                        width: 50%;
                        margin: 0 auto;
                        background-color: $base-color-1;
                        border-radius: 8px;
                        padding: 10px 0px;
                        margin-top: 50px;
                        column-gap: 10px;

                        // span {
                        //     display: flex;

                        //     a {
                        //         text-decoration: none;
                        //         font-size: 16px;
                        //     }
                        // }

                        // .phone-number {
                        //     font-weight: 700;
                        //     color: #fff;
                        // }
                    }
                }
            }

            &>.services-contents {
                // border: 2px solid red;

                &>.underline-wrap {
                    // border: 4px solid red;
                    margin-top: 30px;

                    &>.home-care {
                        display: flex;
                        // justify-content: center;

                        h3 {
                            position: relative;
                            font-size: 18px;
                            line-height: 30px;
                            text-align: center;
                        }

                        h3::after {
                            left: 25%;
                            width: 50%;
                            border-bottom: 3px solid $base-color-1;
                        }
                    }
                }

                p {
                    // border: 2px solid red;
                    width: 100%;
                }

                &>.costHome-CostLive {
                    // border: 2px solid red;
                   

                    &>.costHomebtn {
                        width: 70%;
                        border-radius: 8px;
                        padding: 10px 0px;
                        margin-top: 30px;
                        column-gap: 10px;

                        &>.icon-links {
                            color: #fff;
                            font-size: 16px;
                            text-decoration: none;
                            font-weight: 700;
                        }

                        span {
                            display: flex;

                            a {
                                text-decoration: none;
                                font-size: 16px;
                            }
                        }

                        .phone-number {
                            font-weight: 700;
                            color: #fff;
                        }
                    }
                }
            }

            &>.whychoose-lovenest {
                // border: 2px solid red;
                margin-top: 50px;

                h3 {
                    font-size: 18px;
                    text-align: center;
                }

                &>.meet-with-us {
                    //   border: 2px solid red;
                    justify-content: center;

                    &>.contact-us {
                        // border: 2px solid red;
                        width: 100%;
                 
                        &>.choose-image {
                            img {
                                width: 100%;
                            }
                        }

                        .caption {
                            font-size: 18px;
                        }
                    }
                }
            }
        }

        &>.elderly-support {
            margin-top: 50px;
            margin-bottom: 50px;

            .call-us {
                // border: 12px solid red; 
                padding: 8px 15px;

                &>.call-contact {
                   

                    div h3 {
                        font-size: 18px;
                        text-align: center;
                    }

                    // &>.icon-contact {
                    //     // border: 11px solid red;
                    //     display: flex;
                    //     justify-content: center;
                    //     width: 50%;
                    //     border-radius: 8px;
                    //     display: flex;
                    //     padding: 10px 0px;
                    //     column-gap: 10px;
                    //     margin-bottom: 20px;

                    //     span {
                    //         display: flex;

                    //         a {
                    //             text-decoration: none;
                    //             font-size: 16px;
                    //         }
                    //     }

                    //     .phone-number {
                    //         font-weight: 700;
                    //         color: #DA5E42;
                    //     }
                    // }
                }
            }
        }

        &>.promisecontents-picture {
            // border: 2px solid red;

            h3 {
                font-size: 18px;
                text-align: center;
            }

            &>.contentsPicture-wrap {
                justify-content: center;

                &>.contents {
                    width: 100%;
                    padding: 0 10px;


                    &>.rounded-contents {
                        // border: 2px solid red;
                        justify-content: center;
                        flex-direction: column;


                        // .round-cirle {
                        //     border: 1px solid red;
                        //     background-color: $base-color;
                        //     border-radius: 50%;
                        //     display: inline-flex;
                        //     justify-content: center;
                        //     align-items: center;
                        //     row-gap: 10px;
                        //     width: 20px;
                        //     height: 20px;
                        //     margin-right: 3px;
                        // }

                        // &>.personalized,
                        // .less-stress {
                        //     border: 1px solid red;
                        //     line-height: 20px;
                        // }
                    }

                    &>.icon-contact {
                        // border: 11px solid red;
                        width: 50%;
                        margin: 0 auto;
                        border-radius: 8px;
                        justify-content: center;
                        padding: 10px 0px;
                        margin-top: 20px;
                        margin-bottom: 50px;
                        column-gap: 10px;

                        // span {
                        //     display: flex;

                        //     a {
                        //         text-decoration: none;
                        //         font-size: 16px;
                        //     }
                        // }

                        // .phone-number {
                        //     font-weight: 700;
                        //     color: #fff;
                        // }
                    }
                }

                &>.picture {
                    width: 100%;
                    border-top-left-radius: 0px;
                    border-bottom-left-radius: 0px;
                    padding-top: 35px;
                    padding-bottom: 35px;
                    padding-left: 0px;


                    &>.roundImage-content {
                        padding: 0 10px;
                        display: flex;
                        justify-content: center;
                        row-gap: 30px;

                        &>.image {
                            // border: 2px solid blue;

                            img {
                                border: 10px solid $base-color-1;
                                border-radius: 200px;
                                width: 350px;
                            }
                        }

                        &>.contents {
                            // border: 2px solid blue;
                            width: 100%;
                            row-gap: 20px;
                            padding-right: 0px;
                            margin-right: 0px;

                            .call {
                                // border: 2px solid blue;
                                border-radius: 8px;
                                width: 50%;
                                margin: 0 auto;
                                column-gap: 10px;
                                padding: 10px 0px;
                                font-size: 18px;
                            }
                        }
                    }

                }
            }
        }

        &>.image-paycare {
            &>.contentsPicture-wrap {
                justify-content: center;
                margin-bottom: 0px;

                &>.picture {

                    // border: 2px solid red;
                    img {
                        width: 900px;
                    }
                }

                &>.contents {
                    width: 100%;
                    padding: 0 10px;

                    h3 {
                        font-size: 18px;
                        line-height: 25px;
                        text-align: center;
                    }

                    &>.rounded-contents {
                        // border: 2px solid red;
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        justify-content: center;
                        flex-direction: column;
                        line-height: 25px;
                        margin-top: 30px;

                        h4 {
                            font-size: 16px;
                        }

                        // .round-cirle {
                        //     // border: 1px solid red;
                        //     background-color: $base-color;
                        //     border-radius: 50%;
                        //     display: inline-flex;
                        //     justify-content: center;
                        //     align-items: center;
                        //     row-gap: 10px;
                        //     width: 20px;
                        //     height: 20px;
                        //     margin-right: 3px;
                        // }
                    }
                }
            }
        }
    }
}

// LG
@media (min-width: 992px) and (max-width: 1200.9px) {
    .CostofHomeCarepage-wrap {
    // border: 4px solid red;


    &>.CostofHomeCarepage-caption {
        padding: 0 20px;

        &>.contents-picture {
            // border: 2px solid red;

            &>.contents {
                width: 420px;
            }

            &>.picture {
                width: 450px;
                height: auto;

                img {
                    width: 100%;
                }
            }
        }

        &>.picture-contents {
            // border: 2px solid red;

            &>.picture {
                width: 450px;
                height: auto;

                img {
                    width: 100%;
                }
            }

            &>.contents {
                width: 420px;
            }
        }

        &>.services-contents {
            // border: 2px solid red;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &>.underline-wrap {
                // border: 4px solid red;
                margin-top: 30px;

                &>.home-care {
                    display: flex;
                    // justify-content: center;

                    h3 {
                        position: relative;
                        font-size: 30px;
                        font-weight: 700;
                        line-height: 60px;
                        letter-spacing: 0em;
                    }

                    h3::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 10%;
                        width: 80%;
                        border-bottom: 7px solid $base-color-1;
                        border-radius: 10px;
                    }
                }
            }

            p {
                // border: 2px solid red;
                width: 100%;
                padding: 0 20px;
            }
        }
    }


    &>.promisecontents-picture {
        // border: 2px solid red;

        &>.contentsPicture-wrap {

            &>.contents {
                width: 400px;
                padding: 0 20px;


                &>.rounded-contents {
                    // border: 2px solid red;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                }
            }

            &>.picture {
                width: 450px;
                background-color: $base-color;
                border-top-left-radius: 200px;
                border-bottom-left-radius: 200px;
                padding-top: 25px;
                padding-bottom: 25px;
                padding-left: 20px;

                &>.roundImage-content {
                    // border: 2px solid red;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;

                    &>.image {

                        // border: 2px solid blue;
                        img {
                            border: 30px solid $base-color-1;
                            width: 200px;
                            border-radius: 150px;
                        }
                    }

                    &>.contents {
                        // border: 2px solid blue;
                        width: 100px;
                        display: flex;
                        flex-direction: column;
                        row-gap: 35px;
                        padding-right: 20px;
                        margin-right: 10px;

                        .call {
                            // border: 2px solid blue;
                            background-color: #fff;
                            color: $base-color-1;
                            border-radius: 10px;
                            width: inherit;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            column-gap: 10px;
                            padding: 10px 10px;
                            font-size: 25px;
                        }

                        .callone {
                            // border: 12px solid blue;
                            background-color: $base-color-1;
                            color: #fff;
                        }
                    }

                    span {
                        font-weight: 700;
                    }
                }

            }
        }
    }

    &>.image-paycare {
        &>.contentsPicture-wrap {

            &>.picture {

                // border: 2px solid red;
                img {
                    width: 450px;
                }
            }

            &>.contents {
                width: 450px;
            }
        }
    }
}
}

// XL
// @media (min-width: 1201px) and (max-width: 1499.9px) {}

// XXL
@media (min-width: 1500px) {
    .CostofHomeCarepage-wrap {
    // border: 4px solid red;

    &>.CostofHomeCarepage-page-banner {
        // border: 4px solid red;  
        padding: 250px 20px;
        background-size: cover;
    }

    &>.CostofHomeCarepage-caption {
        // padding: 0 200px;

        &>.contents-picture {
            justify-content: center;
            column-gap: 200px;
           

            &>.contents {
                width: 600px;
            }

            &>.picture {
                width: 650px;
                height: auto;

                img {
                    width: 100%;
                }
            }
        }

        &>.picture-contents {
            justify-content: center;
            align-items: center;
            column-gap: 200px;
      

            &>.picture {
                width: 650px;
                height: auto;

                img {
                    width: 100%;
                }
            }

            &>.contents {
                width: 600px;
            }
        }

        &>.services-contents {
            // border: 2px solid red;
            &>.underline-wrap {
                // border: 4px solid red;
                margin-top: 30px;

                &>.home-care {
                    display: flex;
                    // justify-content: center;

                    h3 {
                        position: relative;
                        font-size: 40px;
                    }

                    h3::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 10%;
                        width: 80%;
                        border-bottom: 7px solid $base-color-1;
                        border-radius: 10px;
                    }
                }
            }
     
            p {
                // border: 2px solid red;
                width: 1500px;
            }
        }

        &>.whychoose-lovenest {
            // border: 2px solid red;
            margin-top: 80px;

            h3 {
                color: $base-color;
                font-size: 22px;
                font-weight: 700;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: center;
            }

            &>.meet-with-us {
                //   border: 2px solid red;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                column-gap: 30px;
                row-gap: 10px;

                &>.contact-us {
                    // border: 2px solid red;
                    width: 280px;
                    background-color: $base-color;
                    border-bottom-right-radius: 10px;
                    border-bottom-left-radius: 10px;
                    border-top-right-radius: 10px;
                    border-top-left-radius: 10px;

                    &>.choose-image {
                        img {
                            width: 100%;
                            height: auto;
                            border-top-right-radius: 10px;
                            border-top-left-radius: 10px;
                        }
                    }

                    .caption {
                        color: #fff;
                        text-align: center;
                        font-weight: 700;
                        font-size: 20px;
                    }

                    p {
                        color: #FFFFFF80;
                        padding: 0 5px;
                    }
                }
            }


        }
    }

    &>.elderly-support {
        margin-top: 50px;
        margin-bottom: 50px;

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
                justify-content: center;
                width: 100%;
                flex-wrap: wrap;
                column-gap: 500px;
            }
        }
    }

    &>.promisecontents-picture {
        // border: 2px solid red;

        &>.contentsPicture-wrap {
            justify-content: center;
            align-items: center;
            column-gap: 200px;
            row-gap: 30px;

            &>.contents {
                width: 600px;
                padding: 0 20px;


                &>.rounded-contents {
                    // border: 2px solid red;
                    display: flex;
                    justify-content: space-between;

                    .round-cirle {
                        // border: 1px solid red;
                        background-color: $base-color;
                        border-radius: 50%;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        row-gap: 10px;
                        width: 20px;
                        height: 20px;
                        margin-right: 3px;
                    }

                    &>.personalized,
                    .less-stress {
                        // border: 1px solid red;
                        line-height: 20px;
                    }
                }

                &>.icon-contact {
                    // border: 11px solid red;
                    width: fit-content;
                    background-color: $base-color-1;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 20px;
                    margin-top: 50px;
                    column-gap: 10px;

                    span {
                        display: flex;

                        a {
                            text-decoration: none;
                            font-size: 16px;
                        }
                    }

                    .phone-number {
                        font-weight: 700;
                        color: #fff;
                    }
                }
            }

            &>.picture {
                width: 500px;
                background-color: $base-color;
                border-top-left-radius: 200px;
                border-bottom-left-radius: 200px;
                padding-top: 35px;
                padding-bottom: 35px;
                padding-left: 40px;



                &>.roundImage-content {
                    // border: 2px solid red;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;

                    &>.image {

                        // border: 2px solid blue;
                        img {
                            border: 30px solid $base-color-1;
                            width: 200px;
                            border-radius: 150px;
                        }
                    }

                    &>.contents {
                        // border: 2px solid blue;
                        width: 150px;
                        display: flex;
                        flex-direction: column;
                        row-gap: 35px;
                        padding-right: 20px;
                        margin-right: 20px;

                        .call {
                            // border: 2px solid blue;
                            background-color: #fff;
                            color: $base-color-1;
                            border-radius: 10px;
                            width: inherit;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            column-gap: 10px;
                            padding: 10px 10px;
                            font-size: 25px;
                        }

                        .callone {
                            // border: 12px solid blue;
                            background-color: $base-color-1;
                            color: #fff;
                        }
                    }

                    span {
                        font-weight: 700;
                    }
                }

            }
        }
    }

    &>.image-paycare {
        &>.contentsPicture-wrap {     
            justify-content: center;
            column-gap: 200px;
            &>.picture {

                // border: 2px solid red;
                img {
                    width: 550px;
                }
            }

            &>.contents {
                width: 600px;
            }
        }
    }
}
}
</style>
