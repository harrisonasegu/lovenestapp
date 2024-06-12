<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Icon } from '@iconify/vue';

import Logo from '@/assets/images/footer_image/footer-logo.png'
import Beos from '@/assets/images/footer_image/BeOS.png'
import Bs from '@/assets/images/footer_image/bs.png'
import Daf from '@/assets/images/footer_image/Daf.png'
import Spoon from '@/assets/images/footer_image/Spoon.png'
import Citi from '@/assets/images/footer_image/Citibank (1).png'
</script>

<template>
  <div class="footer-wrap">
    <div class="footer-images">
      <img class="footer-logo" :src="Logo" alt="logo">
      <img :src="Beos" alt="beos">
      <img :src="Bs" alt="bs">
      <img :src="Daf" alt="daf">
      <img :src="Spoon" alt="spoon">
      <img :src="Citi" alt="citi">
    </div>

    <div class="footer-content">
      <div class="footer-icons">
        <p>We understand that finding quality old care
          services can be difficult and that is why we
          are here for you.
        </p>
        <p class="icon">
          <span>
            <Icon class="iconx" icon="eva:facebook-fill" color="black" width="25" />
          </span>
          <span>
            <Icon class="iconx" icon="ion:logo-instagram" color="black" width="25" />
          </span>
          <span>
            <Icon class="iconx" icon="devicon:twitter" color="black" width="20" />
          </span>
          <span>
            <Icon class="iconx" icon="mingcute:youtube-line" color="black" width="25" />
          </span>
        </p>
      </div>
      <div class="footer-information">
        <h3>Information</h3>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </div>
      <div class="footer-contact-us">
        <h3>Contact Us</h3>
        <li><a href="#">+234808 501 5786</a></li>
        <li><a href="#">info@abi-support.co.uk</a></li>
        <li><a href="#">129 Broadways
            OX11 8XD
            Didcot
            Oxfordshire</a>
        </li>
      </div>
      <div class="footer-work-hours">
        <h3>Work Hours</h3>
        <p>
          <span>Icon</span>
          <span>
            9 AM - 5 PM, Monday - Friday
          </span>
        </p>

        <p>
          9 AM - 5 PM, Monday - Friday <br>
          Are you or a loved one in need of
          compassionate care and
          support?
        </p>
        <p>
          <button>
            <span class="iconx">
              <Icon icon="ion:call" color="#fff" width="20" />
            </span>
            <span>Contact Us</span>
          </button>
        </p>
      </div>
    </div>
    <div class="black-line">

    </div>
    <div class="all-rights">
      LoveNestCare-Support &copy; <span> {{ new Date().getFullYear() }}</span> . All rights reserved.
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .footer-wrap {
    background-image: url(../../assets/images/footer-animation/footer.gif);
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0 20px;
    color: #fff;

    &>.footer-images {
      // border: 2px solid red;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-top: 100px;
      padding-bottom: 50px;

      .footer-logo {
        width: 200px;
      }

      img {
        width: 100px;
      }
    }

    &>.footer-content {
      // border: 3px solid blue;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-bottom: 30px;

      // logo
      &>.footer-icons {
        // border: 1px solid red;
        display: flex;
        flex-direction: column;
        row-gap: 30px;

        p {
          color: #ffffff8e;
        }

        img {
          width: 150px;
        }

        &>.icon {
          // border: 3px solid blue;
          display: flex;
          align-items: center;
          column-gap: 10px;
        }
      }

      &>.footer-information {
        // border: 1px solid red;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        a {
          text-decoration: none;
          color: #ffffff8e;
        }
      }

      &>.footer-contact-us {
        // border: 1px solid red;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        a {
          text-decoration: none;
          color: #ffffff8e;
        }
      }

      &>.footer-work-hours {
        // border: 11px solid red;
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        span,
        p {
          font-size: 14px;
          color: #ffffff8e;
        }

        button {
          border: 1px solid #ffffff8e !important;
          background-image: url(../../assets/images/footer-animation/footer.gif);
          background-size: cover;
          padding: 8px 20px;
          display: flex;
          align-items: center;
          column-gap: 10px;
          margin-top: 20px;
        }
      }

      P {
        width: 250px;
      }

    }

    &>.black-line {
      border: 1px solid rgba(0, 0, 0, 0.163);
    }

    &>.all-rights {
      font-size: 14px;
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }

  // XX-SM (<251px)
  @media (max-width: 250.9px) {
    .footer-wrap {
      // border: 3px solid red;
      background-color: #D1D1D1;
      padding: 0 10px;
      margin-top: 50px;

      &>.footer-images {
        padding-top: 30px;
        padding-bottom: 0px;
        row-gap: 20px;

        .footer-logo {
          width: 80px;
        }

        img {
          width: 50px;
        }
      }

      &>.footer-content {
        // border: 3px solid blue;
        padding-top: 30px;
        padding-bottom: 30px;
        row-gap: 30px;

        &>.footer-icons {
          text-align: center;

          p {
            width: 100%;
          }

          &>.icon {
            // border: 3px solid blue;
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 20px;
          }
        }

        &>.footer-information {
          // border: 1px solid red;
          width: 100%;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          row-gap: 5px;

          a {
            text-decoration: none;
          }
        }

        &>.footer-contact-us {
          // border: 1px solid red;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          row-gap: 5px;

          a {
            text-decoration: none;
          }
        }

        &>.footer-work-hours {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          row-gap: 5px;

          span,
          p {
            font-size: 14px;
            width: 100%;
          }

          button {
            // border: 1px solid green;
            border: transparent;
            background-color: #8D3909;
            border-radius: 5px;
            color: #fff;
            padding: 8px 25px;
            margin: 0 auto;
            margin-top: 20px;

            span {
              font-size: 13px;
            }

            .iconx {
              width: 10px;
              display: none;
            }
          }
        }

        P {
          width: 250px;
        }
      }

      &>.black-line {
        border: 1px solid rgba(0, 0, 0, 0.163);
      }

      &>.all-rights {
        font-size: 14px;
        padding-top: 30px;
        padding-bottom: 30px;
        text-align: center;
      }
    }
  }

  // XX-SM
  @media (min-width: 251px) and (max-width: 350.9px) {
    .footer-wrap {
      // border: 3px solid red;
      background-color: #D1D1D1;
      padding: 0 10px;
      margin-top: 50px;

      &>.footer-images {
        justify-content: left;
        padding-top: 30px;
        padding-bottom: 0px;
        row-gap: 20px;

        .footer-logo {
          width: 80px;
        }

        img {
          width: 50px;
        }
      }

      &>.footer-content {
        // border: 3px solid blue;
        padding-top: 30px;
        padding-bottom: 30px;
        row-gap: 30px;

        &>.footer-icons {
          text-align: center;

          p {
            width: 100%;
          }

          &>.icon {
            // border: 3px solid blue;
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 20px;
          }
        }

        &>.footer-information {
          // border: 1px solid red;
          width: 100%;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          row-gap: 5px;

          a {
            text-decoration: none;
          }
        }

        &>.footer-contact-us {
          // border: 1px solid red;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          row-gap: 5px;

          a {
            text-decoration: none;
          }
        }

        &>.footer-work-hours {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          row-gap: 5px;

          span,
          p {
            font-size: 14px;
            width: 100%;
          }

          button {
            // border: 1px solid green;
            border: transparent;
            background-color: #8D3909;
            border-radius: 5px;
            color: #fff;
            padding: 8px 25px;
            margin: 0 auto;
            margin-top: 20px;

            span {
              font-size: 13px;
            }

            .iconx {
              width: 10px;
              display: none;
            }
          }
        }

        P {
          width: 250px;
        }
      }

      &>.black-line {
        border: 1px solid rgba(0, 0, 0, 0.163);
      }

      &>.all-rights {
        font-size: 14px;
        padding-top: 30px;
        padding-bottom: 30px;
        text-align: center;
      }
    }
  }

  // X-SM
  @media (min-width: 351px) and (max-width: 575.9px) {
    .footer-wrap {
      // border: 3px solid red;
      background-color: #D1D1D1;
      padding: 0 10px;
      margin-top: 50px;

      &>.footer-images {
        // border: 3px solid blue;
        justify-content: left;
        padding-top: 30px;
        padding-bottom: 0px;
        row-gap: 20px;
        column-gap: 30px;

        .footer-logo {
          width: 70px;
        }

        img {
          width: 50px;
        }
      }

      &>.footer-content {
        // border: 3px solid blue;
        padding-top: 30px;
        padding-bottom: 30px;
        row-gap: 30px;

        &>.footer-icons {
          // border: 3px solid blue;
          text-align: left;

          p {
            width: 100%;
          }

          &>.icon {
            // border: 3px solid blue;
            display: flex;
            align-items: center;
            justify-content: left;
            column-gap: 20px;
          }
        }

        &>.footer-information {
          // border: 1px solid red;
          width: 100%;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          row-gap: 5px;

          a {
            text-decoration: none;
          }
        }

        &>.footer-contact-us {
          // border: 1px solid red;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          row-gap: 5px;

          a {
            text-decoration: none;
          }
        }

        &>.footer-work-hours {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          row-gap: 5px;

          span,
          p {
            font-size: 14px;
            width: 100%;
          }

          button {
            // border: 1px solid green;
            border: transparent;
            background-color: #8D3909;
            border-radius: 5px;
            color: #fff;
            padding: 12px 25px;
            margin-top: 20px;

            span {
              font-size: 13px;
            }

            .iconx {
              width: 10px;
              display: none;
            }
          }
        }

        P {
          width: 250px;
        }
      }

      &>.black-line {
        border: 1px solid rgba(0, 0, 0, 0.163);
      }

      &>.all-rights {
        font-size: 14px;
        padding-top: 30px;
        padding-bottom: 30px;
        text-align: center;
      }
    }
  }

  // SM
  @media (min-width: 576px) and (max-width: 767.9px) {
    .footer-wrap {
      // border: 3px solid red;
      background-color: #D1D1D1;
      padding: 0 10px;
      margin-top: 50px;

      &>.footer-images {
      // border: 3px solid red;
        justify-content: space-between;
        padding-top: 30px;
        padding-bottom: 0px;
        row-gap: 20px;

        .footer-logo {
          width: 90px;
        }

        img {
          width: 90px;
        }
      }

      &>.footer-content {
        // border: 3px solid blue;
        padding-top: 30px;
        padding-bottom: 30px;
        row-gap: 30px;

        &>.footer-icons {
          text-align: left;

          p {
            width: 100%;
          }

          &>.icon {
            // border: 3px solid blue;
            display: flex;
            align-items: center;
            justify-content: left;
            column-gap: 20px;
          }
        }

        &>.footer-information {
          // border: 1px solid red;
          width: 100%;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          row-gap: 5px;

          a {
            text-decoration: none;
          }
        }

        &>.footer-contact-us {
          // border: 1px solid red;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          row-gap: 5px;

          a {
            text-decoration: none;
          }
        }

        &>.footer-work-hours {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          row-gap: 5px;

          span,
          p {
            font-size: 14px;
            width: 100%;
          }

          button {
            // border: 1px solid green;
            border: transparent;
            background-color: #8D3909;
            border-radius: 5px;
            color: #fff;
            padding: 8px 25px;
            margin-top: 20px;

            span {
              font-size: 13px;
            }

            .iconx {
              width: 10px;
              display: none;
            }
          }
        }

        P {
          width: 250px;
        }
      }

      &>.black-line {
        border: 1px solid rgba(0, 0, 0, 0.163);
      }

      &>.all-rights {
        font-size: 14px;
        padding-top: 30px;
        padding-bottom: 30px;
        text-align: center;
      }
    }
  }

  // MD
  @media (min-width: 768px) and (max-width: 991.9px) {
    .footer-wrap {
      // border: 3px solid red;
      background-color: #D1D1D1;
      padding: 0 10px;
      margin-top: 50px;

      &>.footer-images {
        justify-content: space-between;
        padding-top: 50px;
        padding-bottom: 0px;
        row-gap: 20px;

        .footer-logo {
          width: 90px;
        }

        img {
          width: 90px;
        }
      }

      &>.footer-content {
        // border: 3px solid blue;
        padding-top: 30px;
        padding-bottom: 30px;
        row-gap: 30px;

        &>.footer-icons {
          text-align: center;

          p {
            width: 100%;
          }

          &>.icon {
            // border: 3px solid blue;
            display: flex;
            align-items: center;
            justify-content: left;
            column-gap: 50px;
          }
        }

        &>.footer-information {
          // border: 1px solid red;
          width: 100%;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          row-gap: 5px;

          a {
            text-decoration: none;
          }
        }

        &>.footer-contact-us {
          // border: 1px solid red;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          row-gap: 5px;

          a {
            text-decoration: none;
          }
        }

        &>.footer-work-hours {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          row-gap: 5px;

          span,
          p {
            font-size: 14px;
            width: 100%;
          }

          button {
            // border: 1px solid green;
            border: transparent;
            background-color: #8D3909;
            border-radius: 5px;
            color: #fff;
            padding: 8px 25px;
            margin-top: 20px;

            span {
              font-size: 13px;
            }

            .iconx {
              width: 10px;
              display: none;
            }
          }
        }

        P {
          width: 250px;
        }
      }

      &>.black-line {
        border: 1px solid rgba(0, 0, 0, 0.163);
      }

      &>.all-rights {
        font-size: 14px;
        padding-top: 30px;
        padding-bottom: 30px;
        text-align: center;
      }
    }
  }

  // LG
  @media (min-width: 992px) and (max-width: 1200.9px) {
    .footer-wrap {
      // border: 3px solid red;
      background-color: #D1D1D1;
      padding: 0 10px;
      margin-top: 50px;

      &>.footer-images {
        justify-content: space-between;
        padding-top: 70px;
        padding-bottom: 0px;
        row-gap: 20px;

        .footer-logo {
          width: 90px;
        }

        img {
          width: 90px;
        }
      }

      &>.footer-content {
        // border: 3px solid blue;
        padding-top: 30px;
        padding-bottom: 30px;
        row-gap: 30px;

        &>.footer-icons {
          text-align: center;

          p {
            width: 100%;
          }

          &>.icon {
            // border: 3px solid blue;
            display: flex;
            align-items: center;
            justify-content: left;
            column-gap: 20px;
          }
        }

        &>.footer-information {
          // border: 1px solid red;
          width: 100%;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          row-gap: 5px;

          a {
            text-decoration: none;
          }
        }

        &>.footer-contact-us {
          // border: 1px solid red;
          list-style-type: none;
          display: flex;
          flex-direction: column;
          row-gap: 5px;

          a {
            text-decoration: none;
          }
        }

        &>.footer-work-hours {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          row-gap: 5px;

          span,
          p {
            font-size: 14px;
            width: 100%;
          }

          button {
            // border: 1px solid green;
            border: transparent;
            background-color: #8D3909;
            border-radius: 5px;
            color: #fff;
            padding: 8px 25px;
            margin-top: 20px;

            span {
              font-size: 13px;
            }

            .iconx {
              width: 10px;
              display: none;
            }
          }
        }

        P {
          width: 250px;
        }
      }

      &>.black-line {
        border: 1px solid rgba(0, 0, 0, 0.163);
      }

      &>.all-rights {
        font-size: 14px;
        padding-top: 30px;
        padding-bottom: 30px;
        text-align: center;
      }
    }
  }

  // XL
   @media (min-width: 1201px) and (max-width: 1499.9px) {
    .footer-information,.footer-contact-us, .footer-work-hours {
      h3 {
        font-size: 30px;
      }
    }
   } 

  // XXL
   @media (min-width: 1500px) {

    .footer-information,.footer-contact-us, .footer-work-hours {
      h3 {
        font-size: 40px;
      }
    }
   } 
}
</style>
