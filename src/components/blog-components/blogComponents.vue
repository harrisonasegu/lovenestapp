<script setup lang="ts">
import { NH2 } from 'naive-ui';

import BlogBanner from '@/assets/images/blog-Image/blog-banner.png'
import BlogPicture from '@/assets/images/blog-Image/blog-picture.png'
</script>

<template>
    <div class="blog-page-wrap">
        <div class="blog-page-banner">

            <div class="contents">
                <h3>
                    Blog
                </h3>
            </div>
        </div>

        <div class="blog-caption">
            <div class="h3-contents">
                <h3>Welcome to the official blog of Lovenest Home Care
                </h3>
                <p>
                    We're dedicated to providing the best care and support for the elderly and vulnerable in Essex. As
                    we brace for the colder months
                    ahead, it's crucial to stay informed about the available support and tips to ensure a warm, safe,
                    and healthy winter. In this blog,
                    we'll cover the essentials of the Winter Fuel Payment, the importance of flu and COVID vaccinations,
                    and practical energy-saving
                    tips to keep your home cosy. Let's dive in!
                </p>

            </div>
            <div class="cards">
                <div class="category-item" v-for="index in 2" :key="index">
                    <!-- card title and icon -->
                    <div class="category-item-header">
                        <div class="picture-captions">
                            <div class="picture">
                                <img :src="BlogPicture" alt="picture">
                            </div>
                            <div class="captions">
                                <div class="caption-contents">
                                    <h4>
                                        Staying Warm and
                                        Healthy This Winter:
                                        Understanding winter
                                        fuel payments and
                                        the importance of flu
                                        & COVID Jabs for
                                        2023-2024
                                    </h4>
                                    <p>
                                        Welcome to the official blog of Lovenest
                                        Home Care We're dedicated to providing
                                        the best care and support for the elderly
                                        and vulnerable in Essex....
                                    </p>
                                    <div class="button">
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blog-page-wrap {
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

    &>.blog-page-banner {
        // border: 4px solid red;  
        padding: 150px 20px;
        background-repeat: no-repeat;
        background-image: url('../../assets/images/blog-Image/blog-banner.png');

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

    &>.blog-caption {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding: 0 20px;

        .h3-contents {
            // border: 2px solid red;
            width: 850px;
            display: flex;
            justify-content: center;
            flex-direction: column;

            h3 {
                font-size: 22px;
                font-weight: 700;
                line-height: 25px;
                letter-spacing: 0em;
                padding-top: 40px;
                text-align: center;
            }

            // p {
            //    text-align: center;
            // }
        }

        .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            column-gap: 20px;
            row-gap: 20px;
            margin-top: 50px;
            margin-bottom: 50px;

            div.category-item {
                border: 1px solid rgba(0, 0, 0, 0.096);
                width: calc((100% / 2) - 300px);
                height: fit-content;
                display: flex;
                flex-flow: column nowrap;
                border-radius: 0.5rem;
                padding: 21px 20px 30px;
                transition: all 0.3s;

                &>div.category-item-header {
                    // border: 3px solid blue;

                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    column-gap: 10px;

                    &>.picture-captions {

                        .picture {
                            display: flex;
                            justify-content: first baseline;


                            img {
                                border-top-right-radius: 15px;
                                border-top-left-radius: 15px;
                                width: 100%;
                                height: auto;
                            }
                        }

                        &>.captions {
                            // border: 2px solid blue;
                            border-bottom-right-radius: 15px;
                            border-bottom-left-radius: 15px;
                            background-color: $base-color-1;

                            &>.caption-contents {
                                padding: 10px;

                                h4 {
                                    // border: 5px solid red;
                                    font-size: 20px;
                                    font-weight: 400;
                                    line-height: 30px;
                                    color: #fff
                                }

                                p {
                                    color: #FFFFFF80;
                                    font-size: 16px;
                                    font-weight: 400;
                                    line-height: 25px;
                                    letter-spacing: 0em;
                                    text-align: left;
                                }

                                .button {
                                    background-color: #fff;
                                    border-radius: 10px;
                                    padding: 8px 25px;
                                    width: fit-content;
                                    margin-bottom: 10px;

                                    a {
                                        text-decoration: none;
                                        color: $base-color-1;
                                        font-weight: 600;
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

// XX-SM (<251px)
@media (max-width: 250.9px) {
    .blog-page-wrap {
   
        p {
            font-size: 16px;
        }
        
        h3,
        h4 {
            font-size: 18px !important;
        }

        &>.blog-page-banner {
            padding: 130px 20px;

            .contents {
                h3 {
                    font-size: 22px;
                }
            }
        }

        &>.blog-caption {
            padding: 0 10px;

            .h3-contents {
                // border: 2px solid red;
                width: 100%;

                h3 {
                    letter-spacing: 0em;
                    padding-top: 30px;
                    text-align: left;
                }

                // p {
                //    text-align: center;
                // }
            }

            .cards {
                margin-top: 20px;
                margin-bottom: 0px;

                div.category-item {
                    width: calc((100% / 1) - 0px);
                    &>div.category-item-header {
                        // border: 3px solid blue;

                        width: 100%;
                        &>.picture-captions {
                            &>.captions {
                                // border: 2px solid blue;
                            
                                &>.caption-contents {

                                    h4 {
                                        // border: 5px solid red;
                                        font-size: 18px;
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

// XX-SM
@media (min-width: 251px) and (max-width: 350.9px) {
    .blog-page-wrap {
   
   p {
       font-size: 16px;
   }
   
   h3,
   h4 {
       font-size: 18px !important;
   }

   &>.blog-page-banner {
       padding: 130px 20px;

       .contents {
           h3 {
               font-size: 22px;
           }
       }
   }

   &>.blog-caption {
       padding: 0 10px;

       .h3-contents {
           // border: 2px solid red;
           width: 100%;

           h3 {
               letter-spacing: 0em;
               padding-top: 30px;
               text-align: left;
           }

           // p {
           //    text-align: center;
           // }
       }

       .cards {
            margin-top: 20px;
            margin-bottom: 0px;

           div.category-item {
               width: calc((100% / 1) - 0px);
               &>div.category-item-header {
                   // border: 3px solid blue;

                   width: 100%;
                   &>.picture-captions {
                       &>.captions {
                           // border: 2px solid blue;
                       
                           &>.caption-contents {

                               h4 {
                                   // border: 5px solid red;
                                   font-size: 18px;
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

// X-SM
@media (min-width: 351px) and (max-width: 575.9px) {
    .blog-page-wrap {
   
   p {
       font-size: 16px;
   }
   
   h3,
   h4 {
       font-size: 18px !important;
   }

   &>.blog-page-banner {
       padding: 140px 20px;

       .contents {
           h3 {
               font-size: 22px;
           }
       }
   }

   &>.blog-caption {
       padding: 0 10px;

       .h3-contents {
        //    border: 2px solid red;
           width: 100%;

           h3 {
               letter-spacing: 0em;
               padding-top: 30px;
               text-align: center;
           }

        //    p {
        //       text-align: center;
        //    }
       }

       .cards {
            margin-top: 20px;
            margin-bottom: 0px;
            
           div.category-item {
               width: calc((100% / 1) - 0px);
               &>div.category-item-header {
                   // border: 3px solid blue;

                   width: 100%;
                   &>.picture-captions {
                       &>.captions {
                           // border: 2px solid blue;
                       
                           &>.caption-contents {

                               h4 {
                                   // border: 5px solid red;
                                   font-size: 18px;
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

// SM
@media (min-width: 576px) and (max-width: 767.9px) {
    .blog-page-wrap {
   
   p {
       font-size: 16px;
   }
   
   h3,
   h4 {
       font-size: 18px !important;
   }

   &>.blog-page-banner {
       padding: 130px 20px;

       .contents {
           h3 {
               font-size: 22px;
           }
       }
   }

   &>.blog-caption {
       padding: 0 10px;

       .h3-contents {
           // border: 2px solid red;
           width: 100%;

           h3 {
               letter-spacing: 0em;
               padding-top: 30px;
               text-align: left;
           }

           // p {
           //    text-align: center;
           // }
       }

       .cards {
            margin-top: 20px;
            margin-bottom: 0px;
            
           div.category-item {
               width: calc((100% / 1) - 0px);
               &>div.category-item-header {
                   // border: 3px solid blue;

                   width: 100%;
                   &>.picture-captions {
                       &>.captions {
                           // border: 2px solid blue;
                       
                           &>.caption-contents {

                               h4 {
                                   // border: 5px solid red;
                                   font-size: 18px;
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

// MD
@media (min-width: 768px) and (max-width: 991.9px) {
    .blog-page-wrap {
   
   p {
       font-size: 16px;
   }
   
   h3,
   h4 {
       font-size: 18px !important;
   }

   &>.blog-page-banner {
       padding: 130px 20px;

       .contents {
           h3 {
               font-size: 22px;
           }
       }
   }

   &>.blog-caption {
       padding: 0 10px;

       .h3-contents {
           // border: 2px solid red;
           width: 100%;

           h3 {
               letter-spacing: 0em;
               padding-top: 30px;
               text-align: left;
           }

           // p {
           //    text-align: center;
           // }
       }

       .cards {
            margin-top: 20px;
            margin-bottom: 0px;
            
           div.category-item {
               width: calc((100% / 2) - 200px);
               &>div.category-item-header {
                   // border: 3px solid blue;

                   width: 100%;
                   &>.picture-captions {
                       &>.captions {
                           // border: 2px solid blue;
                       
                           &>.caption-contents {

                               h4 {
                                   // border: 5px solid red;
                                   font-size: 18px;
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

// LG
@media (min-width: 992px) and (max-width: 1200.9px) {
    .blog-page-wrap {
   
   p {
       font-size: 16px;
   }
   
   h3,
   h4 {
       font-size: 18px !important;
   }

   &>.blog-page-banner {
       padding: 130px 20px;

       .contents {
           h3 {
               font-size: 22px;
           }
       }
   }

   &>.blog-caption {
       padding: 0 10px;

       .h3-contents {
           // border: 2px solid red;
           width: 100%;

           h3 {
               letter-spacing: 0em;
               padding-top: 30px;
               text-align: left;
           }

           // p {
           //    text-align: center;
           // }
       }

       .cards {
            margin-top: 20px;
            margin-bottom: 0px;
            
           div.category-item {
               width: calc((100% / 2) - 200px);
               &>div.category-item-header {
                   // border: 3px solid blue;

                   width: 100%;
                   &>.picture-captions {
                       &>.captions {
                           // border: 2px solid blue;
                       
                           &>.caption-contents {

                               h4 {
                                   // border: 5px solid red;
                                   font-size: 18px;
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

// XL
// @media (min-width: 1201px) and (max-width: 1499.9px) {}

// XXL
@media (min-width: 1500px) {
    .blog-page-wrap {
   
   &>.blog-page-banner {
       padding: 200px 20px;
       background-size: cover;
   }

   &>.blog-caption {
       padding: 0 200px;
        .h3-contents {
            width: 90%;
            h3 {
                font-size: 35px;
            }
            p {
            width: 100%;
          }
        }
       .cards {
           div.category-item {
               width: calc((100% / 2) - 400px);
               }
           }
       }
   }
 }
</style>
