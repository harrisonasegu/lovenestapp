<script setup lang="ts">
import { NH2 } from 'naive-ui';
import CostOfHomeCare1 from '@/assets/images/CostCalculatorPageImages/CostLiveImages/costhomeLive1.png'
import CostOfHomeCare2 from '@/assets/images/CostCalculatorPageImages/CostLiveImages/costHomeLive2.png'
import CostOfHomeCare3 from '@/assets/images/CostCalculatorPageImages/CostHomeCareImage/CosthomeLive3.png'
// import CostOfHomeCare4 from '@/assets/images/about-us-image/aboutPageImage2.png'



</script>

<template>
    <div class="CostofHomeLiveCarepage-wrap">
        <div class="CostofHomeLiveCarepage-page-banner">

            <div class="contents">
                <h3>
                    Cost of Live-in Care
                </h3>
            </div>
        </div>

        <div class="CostofHomeLiveCarepage-caption">
            <div class="contents-picture">
                <div class="contents">
                    <h3>About Live-in Care Costs
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
                    <h3>How much does Live-in Care cost?
                    </h3>
                    <p>
                        Live-in Care is one of the most holistic forms of Home Care. Sometimes known
                        as 24 Hour Care at Home, it is provided by a dedicated Carer in the comfort 
                        and security of your own home. A Live-in Carer moves in with you or your loved
                        one and is ready to support whenever and however you need them.
                    </p>
                    <p>
                        With continuous care provided in the comfort of your own home, you or your 
                        loved one can stay close to family, friends and neighbours. It enables you to 
                        enjoy additional companionship and minimal disruption to your daily routines.
                    </p>
                    <p>
                        Live-in Care costs vary according to what care you require. This can be 
                        anything from companionship, having someone to support when going out, to 
                        providing specialist support and staying awake with you through the night. 
                        Whether you simply want a friendly face around the house or have complex 
                        requirements, we can help.
                    </p>
                    <!-- <div class="rounded-contents">
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
                    </div> -->

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

            <div class="whypay-livecare">
                <div class="why-pay">
                    <h3>
                        Why pay for Live-in Care?
                    </h3>
                    <p>
                        Choosing Live-in Care is a big decision. After an inevitable initial
                        adjustment, having a Carer available 24 hours a day can be 
                        transformative for added reassurance and peace of mind.
                    </p>
                    <p>
                        Our Live-in Carers work to understand what matters most to you, 
                        helping you stay safe, secure and independent in the home you 
                        love. Scroll across to explore some of the key benefits of choosing
                        Live-in Care…
                    </p>
                </div>
                <div class="cost-effectivewrap">
                    <div class="costeffective-support">
                        <div class="cost-effective">
                            <h4>
                                Cost Effective
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iste amet maxime quod quam porro, quibusdam itaque, soluta explicabo deserunt laboriosam, expedita nulla eveniet perspiciatis consequuntur dolorem? Ratione, debitis vel!
                            </p>
                        </div>
                        <div class="support">
                            <h4>
                                Support
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iste amet maxime quod quam porro, quibusdam itaque, soluta explicabo deserunt laboriosam, expedita nulla eveniet perspiciatis consequuntur dolorem? Ratione, debitis vel!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="whychoose-lovenest">
                <h3>Why choose Lovenest Live-in Care?</h3>

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
                            <a class="phone-number" href="#">0808 501 5786</a>
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
<!-- 
                <div class="image">
                    <img :src="CostOfHomeCare4" alt="picture">
                </div> -->
            </div>
        </div>

        <div class="meetwith-uswrap">
            <h3>Comparing the cost of Live-in Care with...</h3>
            <div class="meet-with-us">
                    <div class="contact-us">
                        
                        <p class="caption">Private  Carers
                        </p>
                        <p>
                            Compared with self-employed Carers,
                            our Live-in Care service can offer...
                        </p>

                        <div class="rounded-contents">
                        <div class="personalized">
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: #DA5E42" />
                                </span>
                                <span>
                                    Background checks
                                </span>
                            </p>
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: #DA5E42" />
                                </span>
                                <span>
                                    Central support
                                </span>
                            </p>
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: #DA5E42" />
                                </span>
                                <span>
                                    Less paperwork
                                </span>
                            </p>
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: #DA5E42" />
                                </span>
                                <span>
                                    Excellent training
                                </span>
                            </p>
                        </div>
                    </div>
                    </div>
      
                    <div class="contact-us">
                        
                        <p class="caption">Care Homes
                        </p>
                        <p>
                            Compared with self-employed Carers,
                            our Live-in Care service can offer...
                        </p>

                        <div class="rounded-contents">
                        <div class="personalized">
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: #DA5E42" />
                                </span>
                                <span>
                                    Flat rates
                                </span>
                            </p>
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: #DA5E42" />
                                </span>
                                <span>
                                    Savings for couples
                                </span>
                            </p>
                        </div>
                    </div>
                    </div>
      
                    <div class="contact-us">
                        
                        <p class="caption">Home Care
                        </p>
                        <p>
                            Compared with visiting Carer, Live-in
                            Care can be more cost effective if you
                            require...
                        </p>

                        <div class="rounded-contents">
                        <div class="personalized">
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: #DA5E42" />
                                </span>
                                <span>
                                    Continuous care
                                </span>
                            </p>
                            <p>
                                <span class="round-cirle">
                                    <Icon icon="iconamoon:arrow-right-2-light" width="15px" height="15px"
                                        style="color: #DA5E42" />
                                </span>
                                <span>
                                    Specialist support
                                </span>
                            </p>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.CostofHomeLiveCarepage-wrap {
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

    &>.CostofHomeLiveCarepage-page-banner {
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

    &>.CostofHomeLiveCarepage-caption {
        padding: 0 20px;

        &>.contents-picture {
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
                width: 550px;

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

        &>.whypay-livecare {
            // border: 2px solid red;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 50px;
            
            &>.why-pay {
            //   border: 2px solid red;
              width: 550px;

              h3 {
                    color: $base-color;
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 25px;
                    letter-spacing: 0em;
                }
            }

            &>.cost-effectivewrap {
            //   border: 2px solid red;
              background-color: $base-color-1;
              border-top-left-radius: 350px;
              border-bottom-left-radius: 350px;
              width: 700px;
              color: #fff;

              &>.costeffective-support {
                //  border: 2px solid white;
                 display: flex;
                 justify-content: center;
                 column-gap: 30px;
                 padding-left: 100px;
                 padding-bottom: 20px;
                 padding-top: 20px;
                 

                h4 {
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: center;
                }

                 &>.cost-effective {
                //  width: 200px;
                   padding-left: 20px;
                 }

                 &>.support {
                //  width: 200px;
                  padding-right: 10px;
                 }
              }
            }
        }

        &>.whychoose-lovenest {
            // border: 2px solid red;
            margin-top: 50px;

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

                    &>.image {
                        img {
                            width: 550px;
                        }
                    }
                }
     }

     &>.meetwith-uswrap {
        margin-top: 50px;
        margin-bottom: 50px;
        padding: 0 20px;
        h3 {
            color: $base-color;
            font-size: 22px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
        }

        &>.meet-with-us {
                // border: 2px solid rgb(87, 4, 212);
                display: flex;
                flex-wrap: wrap;
                // justify-content: center;
                column-gap: 30px;
                row-gap: 10px;

                &>.contact-us {
                    // border: 2px solid red;
                    width: 368px;
                    background-color: $base-color;
                    border-radius: 10px;
                    padding: 0 20px;

                    .caption {
                        color: #fff;
                        font-weight: 700;
                        font-size: 20px;
                    }

                    p {
                        color: #FFFFFF80;
                        padding: 0 5px;
                    }

                    &>.rounded-contents {

                    .round-cirle {
                        // border: 1px solid red;
                        background-color: #fff;
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
    .CostofHomeLiveCarepage-wrap {
        // border: 4px solid red;

        p, h4 {
            font-size: 16px;
        }


        &>.CostofHomeLiveCarepage-page-banner {
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

        &>.CostofHomeLiveCarepage-caption {
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

            &>.whypay-livecare {
            // border: 2px solid red;
            margin-top: 30px;
            
            &>.why-pay {
            //   border: 2px solid red;
              width: 100%;
              padding: 0 10px;

              h3 {
                    font-size: 18px;
                    text-align: center;
                }
            }

            &>.cost-effectivewrap {
            //   border: 2px solid red;
              border-top-left-radius: 0px;
              border-bottom-left-radius: 0px;
              width: 100%;
              padding: 0 10px;


              &>.costeffective-support {
                //  border: 2px solid white;
                 display: flex;
                 justify-content: center;
                 flex-direction: column;
                 padding-left: 0px;
                 padding-bottom: 20px;
                 padding-top: 20px;
                 

                h4 {
                    font-size: 18px;
                }

                 &>.cost-effective {
                //  width: 200px;
                   padding-left: 0px;
                 }

                 &>.support {
                //  width: 200px;
                  padding-right: 0px;
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
 
     &>.meetwith-uswrap {
        margin-bottom: 30px;
        padding: 0 10px;

        h3 {
            font-size: 18px;
            text-align: center;
        }

        &>.meet-with-us {
                // border: 2px solid rgb(87, 4, 212);
                display: flex;
                flex-wrap: wrap;
                // justify-content: center;
                column-gap: 30px;
                row-gap: 10px;

                &>.contact-us {
                    // border: 2px solid red;
                    width: 368px;
                    background-color: $base-color;
                    border-radius: 10px;
                    padding: 0 20px;

                    .caption {
                        color: #fff;
                        font-weight: 700;
                        font-size: 20px;
                    }

                    p {
                        color: #FFFFFF80;
                        padding: 0 5px;
                    }

                    &>.rounded-contents {

                    .round-cirle {
                        // border: 1px solid red;
                        background-color: #fff;
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
}

// XX-SM
@media (min-width: 251px) and (max-width: 350.9px) {
    .CostofHomeLiveCarepage-wrap {
        // border: 4px solid red;

        p, h4 {
            font-size: 16px;
        }


        &>.CostofHomeLiveCarepage-page-banner {
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

        &>.CostofHomeLiveCarepage-caption {
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

            &>.whypay-livecare {
            // border: 2px solid red;
            margin-top: 30px;
            
            &>.why-pay {
            //   border: 2px solid red;
              width: 100%;
              padding: 0 10px;

              h3 {
                    font-size: 18px;
                    text-align: center;
                }
            }

            &>.cost-effectivewrap {
            //   border: 2px solid red;
              border-top-left-radius: 0px;
              border-bottom-left-radius: 0px;
              width: 100%;
              padding: 0 10px;


              &>.costeffective-support {
                //  border: 2px solid white;
                 display: flex;
                 justify-content: center;
                 flex-direction: column;
                 padding-left: 0px;
                 padding-bottom: 20px;
                 padding-top: 20px;
                 

                h4 {
                    font-size: 18px;
                }

                 &>.cost-effective {
                //  width: 200px;
                   padding-left: 0px;
                 }

                 &>.support {
                //  width: 200px;
                  padding-right: 0px;
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

        &>.meetwith-uswrap {
        margin-bottom: 30px;
        padding: 0 10px;

        h3 {
            font-size: 18px;
            text-align: center;
        }

        &>.meet-with-us {
                // border: 2px solid rgb(87, 4, 212);
                display: flex;
                flex-wrap: wrap;
                // justify-content: center;
                column-gap: 30px;
                row-gap: 10px;

                &>.contact-us {
                    // border: 2px solid red;
                    width: 100%;
                    background-color: $base-color;
                    border-radius: 10px;
                    padding: 0 10px;

                    .caption {
                        color: #fff;
                        font-weight: 700;
                        font-size: 20px;
                    }

                    p {
                        color: #FFFFFF80;
                        padding: 0 5px;
                    }

                    &>.rounded-contents {

                    .round-cirle {
                        // border: 1px solid red;
                        background-color: #fff;
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
}

// X-SM
@media (min-width: 351px) and (max-width: 575.9px) {
    .CostofHomeLiveCarepage-wrap {
        // border: 4px solid red;

        p, h4 {
            font-size: 16px;
        }

        &>.CostofHomeLiveCarepage-page-banner {
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

        &>.CostofHomeLiveCarepage-caption {
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

            &>.whypay-livecare {
            // border: 2px solid red;
            margin-top: 30px;
            
            &>.why-pay {
            //   border: 2px solid red;
              width: 100%;
              padding: 0 10px;

              h3 {
                    font-size: 18px;
                    text-align: center;
                }
            }

            &>.cost-effectivewrap {
            //   border: 2px solid red;
              border-top-left-radius: 0px;
              border-bottom-left-radius: 0px;
              width: 100%;
              padding: 0 10px;


              &>.costeffective-support {
                //  border: 2px solid white;
                 display: flex;
                 justify-content: center;
                 flex-direction: column;
                 padding-left: 0px;
                 padding-bottom: 20px;
                 padding-top: 20px;
                 

                h4 {
                    font-size: 18px;
                }

                 &>.cost-effective {
                //  width: 200px;
                   padding-left: 0px;
                 }

                 &>.support {
                //  width: 200px;
                  padding-right: 0px;
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

        &>.meetwith-uswrap {
        margin-bottom: 30px;
        padding: 0 10px;

        h3 {
            font-size: 18px;
            text-align: center;
        }

        &>.meet-with-us {
                // border: 2px solid rgb(87, 4, 212);
                display: flex;
                flex-wrap: wrap;
                // justify-content: center;
                column-gap: 30px;
                row-gap: 10px;

                &>.contact-us {
                    // border: 2px solid red;
                    width: 100%;
                    background-color: $base-color;
                    border-radius: 10px;
                    padding: 0 10px;

                    .caption {
                        color: #fff;
                        font-weight: 700;
                        font-size: 20px;
                    }

                    p {
                        color: #FFFFFF80;
                        padding: 0 5px;
                    }

                    &>.rounded-contents {

                    .round-cirle {
                        // border: 1px solid red;
                        background-color: #fff;
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
}

// SM
@media (min-width: 576px) and (max-width: 767.9px) {
    .CostofHomeLiveCarepage-wrap {
        // border: 4px solid red;

        p, h4 {
            font-size: 16px;
        }

        &>.CostofHomeLiveCarepage-page-banner {
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

        &>.CostofHomeLiveCarepage-caption {
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

            &>.whypay-livecare {
            // border: 2px solid red;
            margin-top: 30px;
            
            &>.why-pay {
            //   border: 2px solid red;
              width: 100%;
              padding: 0 10px;

              h3 {
                    font-size: 18px;
                    text-align: center;
                }
            }

            &>.cost-effectivewrap {
            //   border: 2px solid red;
              border-top-left-radius: 0px;
              border-bottom-left-radius: 0px;
              width: 100%;
              padding: 0 10px;


              &>.costeffective-support {
                //  border: 2px solid white;
                 display: flex;
                 justify-content: center;
                 flex-direction: column;
                 padding-left: 0px;
                 padding-bottom: 20px;
                 padding-top: 20px;
                 

                h4 {
                    font-size: 18px;
                }

                 &>.cost-effective {
                //  width: 200px;
                   padding-left: 0px;
                 }

                 &>.support {
                //  width: 200px;
                  padding-right: 0px;
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

                        &>.image {
                            // border: 2px solid blue;

                            img {
                                width: 1000px;
                            }
                        }
                    }
                }

        &>.meetwith-uswrap {
        margin-bottom: 30px;
        padding: 0 10px;

        h3 {
            font-size: 18px;
            text-align: center;
        }

        &>.meet-with-us {
                // border: 2px solid rgb(87, 4, 212);
                display: flex;
                flex-wrap: wrap;
                // justify-content: center;
                column-gap: 30px;
                row-gap: 10px;

                &>.contact-us {
                    // border: 2px solid red;
                    width: 100%;
                    background-color: $base-color;
                    border-radius: 10px;
                    padding: 0 10px;

                    .caption {
                        color: #fff;
                        font-weight: 700;
                        font-size: 20px;
                    }

                    p {
                        color: #FFFFFF80;
                        padding: 0 5px;
                    }

                    &>.rounded-contents {

                    .round-cirle {
                        // border: 1px solid red;
                        background-color: #fff;
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
}

// MD
@media (min-width: 768px) and (max-width: 991.9px) {
    .CostofHomeLiveCarepage-wrap {
        // border: 4px solid red;

        p, h4 {
            font-size: 16px;
        }


        &>.CostofHomeLiveCarepage-page-banner {
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

        &>.CostofHomeLiveCarepage-caption {
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

            &>.whypay-livecare {
            // border: 2px solid red;
            margin-top: 30px;
            
            &>.why-pay {
            //   border: 2px solid red;
              width: 100%;
              padding: 0 10px;

              h3 {
                    font-size: 18px;
                    text-align: center;
                }
            }

            &>.cost-effectivewrap {
            //   border: 2px solid red;
              border-top-left-radius: 0px;
              border-bottom-left-radius: 0px;
              width: 100%;
              padding: 0 10px;


              &>.costeffective-support {
                //  border: 2px solid white;
                 display: flex;
                 justify-content: center;
                 flex-direction: column;
                 padding-left: 0px;
                 padding-bottom: 20px;
                 padding-top: 20px;
                 

                h4 {
                    font-size: 18px;
                }

                 &>.cost-effective {
                //  width: 200px;
                   padding-left: 0px;
                 }

                 &>.support {
                //  width: 200px;
                  padding-right: 0px;
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

                &>.image {
                            // border: 2px solid blue;

                            img {
                                width: 1000px;
                            }
                 }
            }
        }

        &>.meetwith-uswrap {
        margin-bottom: 30px;
        padding: 0 10px;

        h3 {
            font-size: 18px;
            text-align: center;
        }

        &>.meet-with-us {
                // border: 2px solid rgb(87, 4, 212);
                display: flex;
                flex-wrap: wrap;
                // justify-content: center;
                column-gap: 30px;
                row-gap: 10px;

                &>.contact-us {
                    // border: 2px solid red;
                    width: 100%;
                    background-color: $base-color;
                    border-radius: 10px;
                    padding: 0 10px;

                    .caption {
                        color: #fff;
                        font-weight: 700;
                        font-size: 20px;
                    }

                    p {
                        color: #FFFFFF80;
                        padding: 0 5px;
                    }

                    &>.rounded-contents {

                    .round-cirle {
                        // border: 1px solid red;
                        background-color: #fff;
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
}

// LG
@media (min-width: 992px) and (max-width: 1200.9px) {
    .CostofHomeLiveCarepage-wrap {
    // border: 4px solid red;


    &>.CostofHomeLiveCarepage-caption {
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

        &>.whypay-livecare {
            // border: 2px solid red;
            margin-top: 30px;
            
            &>.why-pay {
            //   border: 2px solid red;
              width: 100%;
              padding: 0 10px;

              h3 {
                    font-size: 18px;
                    text-align: center;
                }
            }

            &>.cost-effectivewrap {
            //   border: 2px solid red;
              border-top-left-radius: 0px;
              border-bottom-left-radius: 0px;
              width: 100%;
              padding: 0 10px;


              &>.costeffective-support {
                //  border: 2px solid white;
                 display: flex;
                 justify-content: center;
                 flex-direction: column;
                 padding-left: 0px;
                 padding-bottom: 20px;
                 padding-top: 20px;
                 

                h4 {
                    font-size: 18px;
                }

                 &>.cost-effective {
                //  width: 200px;
                   padding-left: 0px;
                 }

                 &>.support {
                //  width: 200px;
                  padding-right: 0px;
                 }
              }
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

            &>.image {
                            // border: 2px solid blue;

                            img {
                                width: 1500px;
                            }
              }
        }
    }

    &>.meetwith-uswrap {
        margin-bottom: 30px;
        padding: 0 10px;

        h3 {
            font-size: 18px;
            text-align: center;
        }

        &>.meet-with-us {
                // border: 2px solid rgb(87, 4, 212);
                display: flex;
                flex-wrap: wrap;
                // justify-content: center;
                column-gap: 30px;
                row-gap: 10px;

                &>.contact-us {
                    // border: 2px solid red;
                    width: 100%;
                    background-color: $base-color;
                    border-radius: 10px;
                    padding: 0 10px;

                    .caption {
                        color: #fff;
                        font-weight: 700;
                        font-size: 20px;
                    }

                    p {
                        color: #FFFFFF80;
                        padding: 0 5px;
                    }

                    &>.rounded-contents {

                    .round-cirle {
                        // border: 1px solid red;
                        background-color: #fff;
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
}

// XL
@media (min-width: 1201px) and (max-width: 1499.9px) {
    .CostofHomeLiveCarepage-wrap {
    // border: 4px solid red;


    &>.CostofHomeLiveCarepage-caption {
        padding: 0 20px;

        &>.contents-picture {
            // border: 2px solid red;

            &>.contents {
                width: 500px;
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
                width: 580px;

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

        &>.whypay-livecare {
            
            &>.why-pay {
            //   border: 2px solid red;
              width: 480px;

              h3 {
                    color: $base-color;
                    font-size: 22px;
                    font-weight: 700;
                    line-height: 25px;
                    letter-spacing: 0em;
                }
            }
        }

        &>.whychoose-lovenest {
            margin-top: 50px;

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
                justify-content: center;
                column-gap: 30px;
                row-gap: 10px;

                &>.contact-us {
                    // border: 2px solid red;
                    width: 280px;

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

    &>.promisecontents-picture {
        // border: 2px solid red;

        &>.contentsPicture-wrap {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            column-gap: 30px;
            row-gap: 30px;

            &>.contents {
                width: 550px;
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

                    &>.image {
                        img {
                            width: 550px;
                        }
                    }
                }
     }

     &>.meetwith-uswrap {

        &>.meet-with-us {
                // border: 2px solid rgb(87, 4, 212);
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                column-gap: 20px;
                row-gap: 10px;

                &>.contact-us {
                    // border: 2px solid red;
                    width: 352px;
                    background-color: $base-color;
                    border-radius: 10px;
                    padding: 0 20px;

                    .caption {
                        color: #fff;
                        font-weight: 700;
                        font-size: 20px;
                    }

                    p {
                        color: #FFFFFF80;
                        padding: 0 5px;
                    }

                    &>.rounded-contents {

                    .round-cirle {
                        // border: 1px solid red;
                        background-color: #fff;
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

}

// XXL
@media (min-width: 1500px) {
    .CostofHomeLiveCarepage-wrap {
    // border: 4px solid red;

    &>.CostofHomeLiveCarepage-page-banner {
        // border: 4px solid red;  
        padding: 250px 20px;
        background-size: cover;
    }

    &>.CostofHomeLiveCarepage-caption {
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

        &>.whypay-livecare {
            justify-content: center;
            margin-top: 100px;
            column-gap: 200px;
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

    &>.meetwith-uswrap {
        margin-top: 100px;

        &>.underline-wrap {
                    // border: 4px solid red;
                    margin-top: 30px;

                    &>.home-care {
                        display: flex;
                        // justify-content: center;

                        h3 {
                            position: relative;
                            font-size: 40px;
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
      
        h3 {
            text-align: center;
        }

        &>.meet-with-us {
                justify-content: center;
          }
     } 
}
}
</style>
