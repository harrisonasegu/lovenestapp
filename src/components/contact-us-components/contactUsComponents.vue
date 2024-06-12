<script setup lang="ts">
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import {
    NH2,
    NForm,
    NFormItem,
    NInput,
    NCollapse,
    NCollapseItem,
    NIcon
} from 'naive-ui';

import { defineComponent, ref } from 'vue'
import ContactUsPictureOne from '@/assets/images/contact-us-image/contactPicture.png'

</script>

<template>
    <div class="about-us-page-wrap">
        <div class="about-us-page-banner">

            <div class="contents">
                <h3>
                    Contact Us
                </h3>
                <!-- <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus ac lectus
                    biandit erat.
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Erat faucibus ac lectus
                    biandit erat.
                </p> -->
            </div>
        </div>

        <div class="wrap-contents">
            <div class="image-formInputs">
                <div class="image">
                    <img :src="ContactUsPictureOne" alt="picture">
                </div>
                <div class="formInputs">
                    <form action="">
                        <div class="name">
                            <label for="">Name</label> <br>
                            <input type="aext" name="" id="" placeholder="Enter your full name" required>
                        </div>

                        <div class="email">
                            <label for="">Email</label> <br>
                            <input type="email" name="" id="" placeholder="Enter your email " required>
                        </div>

                        <div class="subject">
                            <label for="">Subject</label> <br>
                            <input type="text" name="" id="" required>
                        </div>

                        <div class="subject">
                            <label for="">Nature of enquiry</label> <br>
                            <select name="" id="">
                                <option value="">
                                    - - -
                                </option>
                                <option value="">
                                    General enquiry
                                </option>
                                <option value="">
                                    Looking for care
                                </option>
                                <option value="">
                                    Press enquiry
                                </option>
                                <option value="">
                                    Vacancies
                                </option>
                            </select>
                        </div>

                        <div class="textprovision">
                            <label for="">Message</label> <br>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Write your message"
                                required></textarea>
                        </div>

                        <div class="button">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- h3 caption below the image and input form -->
            <div class="complaints-compliments">
                <div class="underline-wrap">
                    <div class="home-care">
                        <h3>Complaints and Compliments</h3>
                    </div>
                </div>
                <div class="complaints-paragraphy">
                    <p>
                        We take all feedback seriously, good and bad.If you do have a complaint,
                        our guide helps you through our complaints procedure.
                    </p>
                </div>
            </div>

            <!-- dropdown select colored background -->
            <div class="color-background-dropdown">
                <div class="collapse-contents">
                    <n-collapse>
                        <template #header-extra>
                            <Icon icon="iconamoon:arrow-down-2-light" width="30px" height="30px" style="color: black" />
                        </template>

                        <template #arrow>
                            <n-icon>
                                <Icon icon="ci:arrow-down-up" width="50px" height="50px" style="color: black" />
                            </n-icon>
                        </template>
                        <n-collapse-item title="See our complaints procedure" name="1">
                            <div>
                                <p><b>Complaints Procedure</b></p>
                                <ol type="a">
                                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, ipsa.Lorem
                                        ipsum dolor sit amet
                                        consectetur, adipisicing elit. Itaque, ipsa.
                                    </li>
                                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, ipsa.Lorem
                                        ipsum dolor sit amet
                                        consectetur, adipisicing elit. Itaque, ipsa.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, ipsa.Lorem
                                        ipsum dolor sit amet
                                        consectetur, adipisicing elit. Itaque, ipsa.</li>
                                </ol>
                            </div>
                        </n-collapse-item>
                        <n-collapse-item title="Send us your feedback" name="2">
                            <div>
                                <p><b>Feedback</b></p>
                                <ol type="a">
                                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, ipsa.Lorem
                                        ipsum dolor sit amet
                                        consectetur, adipisicing elit. Itaque, ipsa.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, ipsa.Lorem
                                        ipsum dolor sit amet
                                        consectetur, adipisicing elit. Itaque, ipsa.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, ipsa.Lorem
                                        ipsum dolor sit amet
                                        consectetur, adipisicing elit. Itaque, ipsa.</li>
                                </ol>
                            </div>
                        </n-collapse-item>
                        <n-collapse-item title="Request Brochure" name="3">
                            <div>
                                <p><b>Brochure Request</b></p>
                                <ol type="a">
                                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, ipsa.Lorem
                                        ipsum dolor sit amet
                                        consectetur, adipisicing elit. Itaque, ipsa.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, ipsa.Lorem
                                        ipsum dolor sit amet
                                        consectetur, adipisicing elit. Itaque, ipsa.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, ipsa.Lorem
                                        ipsum dolor sit amet
                                        consectetur, adipisicing elit. Itaque, ipsa.</li>
                                </ol>
                            </div>
                        </n-collapse-item>
                    </n-collapse>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about-us-page-wrap {
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

    &>.about-us-page-banner {
        // border: 4px solid red;  
        padding: 150px 20px;
        background-repeat: no-repeat;
        background-image: url('../../assets/images/contact-us-image/contact-banner.png');

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

    &>.wrap-contents {
        // border: 2px solid red;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;

        &>.image-formInputs {
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 10px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            column-gap: 50px;
            row-gap: 20px;
            margin-top: 50px;
            margin-bottom: 50px;

            &>.image {
                img {
                    width: 500px;
                    height: 600px;
                }
            }

            &>.formInputs {
                border: 2px solid rgba(0, 0, 0, 0.08);

                form {
                    width: 400px;
                    display: flex;
                    flex-direction: column;
                    row-gap: 30px;
                    padding: 10px 20px;

                    label {
                        // font-size: 20px;
                        font-weight: 700;
                    }

                    input {
                        width: 100%;
                        padding: 8px 0;
                    }

                    select {
                        width: 100%;
                        padding: 10px 0;
                    }

                    select option {
                        font-size: 14;
                    }
                    
                    textarea {
                        width: 400px;
                    }

                    button {
                        // border: 2px solid red;
                        padding: 10px 30px;

                        // &>.submit {
                        // }
                    }
                }

            }
        }

        &>.complaints-compliments {
            // border: 12px solid red;
            width: fit-content;
            margin: 0 auto;
            padding: 0 20px;

            .underline-wrap {

                // border: 4px solid red;
                &>.home-care {
                    display: flex;
                    justify-content: center;

                    // border: 4px solid red;
                    h3 {
                        position: relative;
                        font-family: Poppins;
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

            &>.complaints-paragraphy {
                p {
                    // border: 1px solid red;
                    width: 700px;
                    margin: 0 auto;
                    text-align: center;
                }
            }
        }

        &>.color-background-dropdown {
            border: 1px solid rgba(0, 0, 0, 0.128);
            border-radius: 8px;
            width: 1000px;
            margin: 0 auto;
            margin-top: 40px;
            margin-bottom: 30px;

            &>.collapse-contents {
                // border: 2px solid blue;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                column-gap: 30px;
                row-gap: 30px;
                padding: 10px 0;
                margin-top: 30px;
                margin-bottom: 50px;

                .n-collapse-item {
                    //  background-color: $base-color-1;
                    border-top: 1px solid rgba(0, 0, 0, 0.075);
                    border-bottom: 1px solid rgba(0, 0, 0, 0.075);
                    padding: 10px 20px;
                }
            }
        }
    }
}

// XX-SM (<251px)
@media (max-width: 250.9px) {
    .about-us-page-wrap {
        // border: 4px solid red;

        p {
            font-size: 16px;
        }

        &>.about-us-page-banner {
            // border: 4px solid red;  
            padding: 140px 20px;

            .contents {

                h3 {
                    font-size: 22px;
                }
            }
        }

        &>.wrap-contents {

            &>.image-formInputs {

                // border: 2px solid red;
                width: 100%;

                &>.image {
                    width: 100%;

                    img {
                        width: 100%;
                        height: 340px;
                    }
                }

                &>.formInputs {
                    // border: 1px solid blue;
                    padding: 0 10px;
                    width: 100%;


                    form {
                        width: 100%;

                        padding: 20px 0px;

                        label,
                        textarea,
                        input {
                            // border: 3px solid red;
                            width: 100%;
                        }
                    }
                }
            }

            &>.complaints-compliments {
                // border: 2px solid red;
                padding: 0 10px;

                .underline-wrap {

                    // border: 4px solid red;
                    &>.home-care {


                        // border: 4px solid red;
                        h3 {
                            font-size: 16px;
                            line-height: 40px;
                            text-align: center;
                        }

                        h3::after {
                            border-bottom: 3px solid $base-color-1;
                            left: 30%;
                            width: 40%;
                        }
                    }
                }

                &>.complaints-paragraphy {
                    width: 100%;

                    p {
                        // border: 1px solid red;
                        width: 100%;
                        // text-align: left;
                    }
                }
            }

            &>.color-background-dropdown {
                // border: 2px solid blue;
                border-radius: 0;
                padding: 0 0px;
                margin-top: 30px;
                width: 100%;

                &>.collapse-contents {
                    // border: 2px solid blue;
                    column-gap: 30px;
                    row-gap: 30px;
                    padding: 0px;
                    margin-top: 30px;
                    margin-bottom: 0px;

                    .n-collapse-item {
                        padding: 10px 20px;
                    }
                }
            }
        }
    }
}

// XX-SM
@media (min-width: 251px) and (max-width: 350.9px) {
    .about-us-page-wrap {
        // border: 4px solid red;

        p {
            font-size: 16px;
        }

        &>.about-us-page-banner {
            // border: 4px solid red;  
            padding: 140px 20px;

            .contents {

                h3 {
                    font-size: 22px;
                }
            }
        }

        &>.wrap-contents {

            &>.image-formInputs {

                // border: 2px solid red;
                width: 100%;

                &>.image {
                    width: 100%;

                    img {
                        width: 100%;
                        height: 340px;
                    }
                }

                &>.formInputs {
                    // border: 1px solid blue;
                    padding: 0 10px;
                    width: 100%;


                    form {
                        width: 100%;

                        padding: 20px 0px;

                        label,
                        textarea,
                        input {
                            // border: 3px solid red;
                            width: 100%;
                        }
                    }
                }
            }

            &>.complaints-compliments {
                // border: 2px solid red;
                padding: 0 10px;

                .underline-wrap {

                    // border: 4px solid red;
                    &>.home-care {


                        // border: 4px solid red;
                        h3 {
                            font-size: 16px;
                            line-height: 40px;
                            text-align: center;
                        }

                        h3::after {
                            border-bottom: 3px solid $base-color-1;
                            left: 30%;
                            width: 40%;
                        }
                    }
                }

                &>.complaints-paragraphy {
                    width: 100%;

                    p {
                        // border: 1px solid red;
                        width: 100%;
                        // text-align: left;
                    }
                }
            }

            &>.color-background-dropdown {
                // border: 2px solid blue;
                border-radius: 0;
                padding: 0 0px;
                margin-top: 30px;
                width: 100%;

                &>.collapse-contents {
                    // border: 2px solid blue;
                    column-gap: 30px;
                    row-gap: 30px;
                    padding: 0px;
                    margin-top: 30px;
                    margin-bottom: 0px;

                    .n-collapse-item {
                        padding: 10px 20px;
                    }
                }
            }
        }
    }
}

// X-SM
@media (min-width: 351px) and (max-width: 575.9px) {
    .about-us-page-wrap {
        // border: 4px solid red;

        p {
            font-size: 16px;
        }

        &>.about-us-page-banner {
            // border: 4px solid red;  
            padding: 140px 20px;

            .contents {

                h3 {
                    font-size: 22px;
                }
            }
        }

        &>.wrap-contents {

            &>.image-formInputs {

                // border: 2px solid red;
                width: 100%;

                &>.image {
                    width: 100%;

                    img {
                        width: 100%;
                        height: 400px;
                    }
                }

                &>.formInputs {
                    // border: 1px solid blue;
                    padding: 0 10px;
                    width: 100%;


                    form {
                        width: 100%;

                        padding: 20px 0px;

                        label,
                        textarea,
                        input {
                            // border: 3px solid red;
                            width: 100%;
                        }
                    }
                }
            }

            &>.complaints-compliments {
                // border: 2px solid red;
                padding: 0 10px;

                .underline-wrap {

                    // border: 4px solid red;
                    &>.home-care {


                        // border: 4px solid red;
                        h3 {
                            font-size: 16px;
                            line-height: 40px;
                            text-align: center;
                        }

                        h3::after {
                            border-bottom: 3px solid $base-color-1;
                            left: 30%;
                            width: 40%;
                        }
                    }
                }

                &>.complaints-paragraphy {
                    width: 100%;

                    p {
                        // border: 1px solid red;
                        width: 100%;
                        // text-align: left;
                    }
                }
            }

            &>.color-background-dropdown {
                // border: 2px solid blue;
                border-radius: 0;
                padding: 0 0px;
                margin-top: 30px;
                width: 100%;

                &>.collapse-contents {
                    // border: 2px solid blue;
                    column-gap: 30px;
                    row-gap: 30px;
                    padding: 0px;
                    margin-top: 30px;
                    margin-bottom: 0px;

                    .n-collapse-item {
                        padding: 10px 20px;
                    }
                }
            }
        }
    }
}

// SM
@media (min-width: 576px) and (max-width: 767.9px) {
    .about-us-page-wrap {
        // border: 4px solid red;

        p {
            font-size: 16px;
        }

        &>.about-us-page-banner {
            // border: 4px solid red;  
            padding: 140px 20px;

            .contents {

                h3 {
                    font-size: 22px;
                }
            }
        }

        &>.wrap-contents {

            &>.image-formInputs {

                // border: 2px solid red;
                width: 100%;

                &>.image {
                    width: 100%;

                    img {
                        width: 100%;
                        height: 500px;
                    }
                }

                &>.formInputs {
                    // border: 1px solid blue;
                    padding: 0 10px;
                    width: 100%;


                    form {
                        width: 100%;

                        padding: 20px 0px;

                        label,
                        textarea,
                        input {
                            // border: 3px solid red;
                            width: 100%;
                        }
                    }
                }
            }

            &>.complaints-compliments {
                // border: 2px solid red;
                padding: 0 10px;

                .underline-wrap {

                    // border: 4px solid red;
                    &>.home-care {


                        // border: 4px solid red;
                        h3 {
                            font-size: 16px;
                            line-height: 40px;
                            text-align: center;
                        }

                        h3::after {
                            border-bottom: 3px solid $base-color-1;
                            left: 30%;
                            width: 40%;
                        }
                    }
                }

                &>.complaints-paragraphy {
                    width: 100%;

                    p {
                        // border: 1px solid red;
                        width: 100%;
                        // text-align: left;
                    }
                }
            }

            &>.color-background-dropdown {
                // border: 2px solid blue;
                border-radius: 0;
                padding: 0 0px;
                margin-top: 30px;
                width: 100%;

                &>.collapse-contents {
                    // border: 2px solid blue;
                    column-gap: 30px;
                    row-gap: 30px;
                    padding: 0px;
                    margin-top: 30px;
                    margin-bottom: 0px;

                    .n-collapse-item {
                        padding: 10px 20px;
                    }
                }
            }
        }
    }
}

// MD
@media (min-width: 768px) and (max-width: 991.9px) {
    .about-us-page-wrap {
        // border: 4px solid red;

        p {
            font-size: 16px;
        }

        &>.about-us-page-banner {
            // border: 4px solid red;  
            padding: 140px 20px;

            .contents {

                h3 {
                    font-size: 22px;
                }
            }
        }

        &>.wrap-contents {

            &>.image-formInputs {

                // border: 2px solid red;
                width: 100%;

                &>.image {
                    width: 100%;

                    img {
                        width: 100%;
                        height: 550px;
                    }
                }

                &>.formInputs {
                    // border: 1px solid blue;
                    padding: 0 10px;
                    width: 100%;


                    form {
                        width: 100%;

                        padding: 20px 0px;

                        label,
                        textarea,
                        input {
                            // border: 3px solid red;
                            width: 100%;
                        }
                    }
                }
            }

            &>.complaints-compliments {
                // border: 2px solid red;
                padding: 0 10px;

                .underline-wrap {

                    // border: 4px solid red;
                    &>.home-care {


                        // border: 4px solid red;
                        h3 {
                            font-size: 16px;
                            line-height: 40px;
                            text-align: center;
                        }

                        h3::after {
                            border-bottom: 3px solid $base-color-1;
                            left: 30%;
                            width: 40%;
                        }
                    }
                }

                &>.complaints-paragraphy {
                    width: 100%;

                    p {
                        // border: 1px solid red;
                        width: 100%;
                        // text-align: left;
                    }
                }
            }

            &>.color-background-dropdown {
                // border: 2px solid blue;
                border-radius: 0;
                padding: 0 0px;
                margin-top: 30px;
                width: 100%;

                &>.collapse-contents {
                    // border: 2px solid blue;
                    column-gap: 30px;
                    row-gap: 30px;
                    padding: 0px;
                    margin-top: 30px;
                    margin-bottom: 0px;

                    .n-collapse-item {
                        padding: 10px 20px;
                    }
                }
            }
        }
    }
}

// LG
// @media (min-width: 992px) and (max-width: 1200.9px) {
// }

// XL
// @media (min-width: 1201px) and (max-width: 1499.9px) {}

// XXL
@media (min-width: 1500px) {

    .about-us-page-wrap {
    // border: 4px solid red;
    &>.about-us-page-banner {
        // border: 4px solid red;
        background-size: cover;  
        padding: 200px 20px;
   
    }

    &>.wrap-contents {

        &>.image-formInputs {
            column-gap: 100px;
            column-gap: 100px;
            &>.image {
                img {
                    width: 800px;
                    height: 800px;
                }
            }

            &>.formInputs {
              

                form {
                    width: 650px;
              
                }

            }
        }

        &>.complaints-compliments {
            // border: 12px solid red;
            width: fit-content;
            margin: 0 auto;
            padding: 0 20px;

            .underline-wrap {

                // border: 4px solid red;
                &>.home-care {
                    display: flex;
                    justify-content: center;

                    // border: 4px solid red;
                    h3 {
                        position: relative;
                        font-family: Poppins;
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

            &>.complaints-paragraphy {
                p {
                    // border: 1px solid red;
                    width: 700px;
                    margin: 0 auto;
                    text-align: center;
                }
            }
        }

        &>.color-background-dropdown {
          
            margin: 0 auto;
            margin-top: 40px;
            margin-bottom: 30px;
        }
    }
}
}
</style>
