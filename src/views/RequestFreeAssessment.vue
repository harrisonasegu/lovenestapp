<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { computed, reactive } from 'vue'

import {
  useNotification,
  NButton,
  NForm,
  NFormItem,
  NInput,
  NCheckbox,
  NSpace,
  NSelect,
  NDatePicker
} from 'naive-ui'

import type {
  FormInst,
  FormItemRule,
  FormValidationError,
  FormRules
} from 'naive-ui'

import { useResponseNotification } from '@/composables/responseNotification'

import { useResponseMessageStore } from '@/stores/common/responseMessage'
import { useAuthenticationStore } from '@/stores/modules/authentication'

import { InputRegex } from '@/utils/regex/validations';

const route = useRoute()
const router = useRouter()

const routeName = route.name as string

const notification = useNotification()

const responseMessageStore = useResponseMessageStore()
const userStore = useAuthenticationStore()

const isLoading = ref<boolean>(false)
const timePicker = ref()

const formRef = ref<FormInst | null>(null)

const model = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  timePicker: '',
  customerAddress: '',
  termsAndConditions: false
})

const inputRequired = computed(() => (
  model.firstName === '' ||
  model.lastName === '' ||
  model.email === '' ||
  model.phoneNumber === '' ||
  model.timePicker === '' ||
  model.customerAddress === '' ||
  !model.termsAndConditions
))

const rules: FormRules = {
  firstName: [
    {
      required: true,
      message: 'first name is required',
      trigger: ['input', 'blur']
    }
  ],
  lastName: [
    {
      required: true,
      message: 'last name is required',
      trigger: ['input', 'blur']
    }
  ],
  email: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('email is required')
        } else if (!InputRegex.email.test(value)) {
          return new Error('email is invalid')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  phoneNumber: [
    {
      required: true,
      message: 'phone number is required',
      trigger: ['input', 'blur']
    }
  ],
  customerAddress: [
    {
      required: true,
      message: 'address is required',
      trigger: ['input', 'blur']
    }
  ]
}

function showNotification(duration: number) {
  useResponseNotification(
    notification,
    responseMessageStore.response.status,
    responseMessageStore.response.title,
    responseMessageStore.response.message,
    duration
  )
}

function loadingState(state: boolean) {
  isLoading.value = state
}

function allowNumberInput(number: string) {
  return !number || /^\d{0,11}$/.test(number)
}

function clearInputFields() {
  model.firstName = ''
  model.lastName = ''
  model.email = ''
  model.phoneNumber = ''
  model.customerAddress = ''
  model.termsAndConditions = false
}

function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate(
    (errors: Array<FormValidationError> | undefined) => {
      if (errors) return

      // loading state
      loadingState(true)

      // proceed to sign up
      // userStore.AddNewCustomer({
      //   firstname: model.firstName,
      //   lastname: model.lastName,
      //   email: model.email,
      //   phoneNo: model.phoneNumber,
      //   customerAddress: model.customerAddress,
      //   acceptTerms: model.termsAndConditions
      // })
      //   .then(response => {
      //     const { responseCode } = response

      //     switch (responseCode) {
      //       // successful registration
      //       case '00':
      //         // clear input
      //         clearInputFields()
      //         break
      //     }

      //     // loading state
      //     loadingState(false)
      //     // notification
      //     showNotification(5000)
      //   })
      //   .catch(() => {
      //     // loading state
      //     loadingState(false)
      //     // notification
      //     showNotification(5000)
      //   })
    }
  )
}

const navigateToSubMenu = (elementId: string) => {
  // Get the element by its ID
  var element = document.getElementById(elementId);

  if (element) {
    // Get the top offset of the element relative to the viewport
    var offsetTop = element.offsetTop;

    // Scroll to the coordinates of the element
    window.scroll({
      top: offsetTop,
      behavior: 'smooth' // Optional: Smooth scrolling animation
    });
  } else {
    console.error("Element with ID " + elementId + " not found.");
  }
}

const navigateToSubMenuPage = (menu: string, elementId: string) => {
  const menuRoute = menu.toLowerCase()

  // route to submenu page
  router.push({ name: menuRoute })
  // scroll to submenu
  setTimeout(() => navigateToSubMenu(elementId), 2000)
}

const handleSubMenuClick = (event: Event, subMenu: string) => {
  // get parent element of submenu clicked
  const targetElement = event.target as HTMLAnchorElement
  const parentElement = targetElement?.parentElement?.parentElement as HTMLDivElement
  const parentElementFirstChildElement = parentElement.firstChild as HTMLDivElement
  const FirstChildOfFirstChildElement = parentElementFirstChildElement.firstChild as HTMLSpanElement

  const navMenuTextContent = FirstChildOfFirstChildElement.innerText as string

  switch (routeName) {
    case 'home assessment services':
      navigateToSubMenu(subMenu)
      break

    case 'disability support':
      navigateToSubMenu(subMenu)
      break

    default:
      navigateToSubMenuPage(navMenuTextContent, subMenu)
  }
}
</script>

<template>
  <div id="toTop" class="assessment-service-wrap">

    <div class="banner">

      <div class="intro-content">
        <h2 class="intro-title">
          Free Assessment:
        </h2>
        <br>
        <h1 class="intro-subtitle">
          Find The Care You Need
        </h1>
      </div>
    </div>
    <section>
      <div class="form-content">
        <div class="form-container">
          <section class="form-header">
            <div class="img-container">
              <h2>Let's Get Started!
              </h2>
            </div>

            <p>
              Please fill out the form below and we'll get
              back to you to confirm the date and time
              of your consultation.
            </p>
            <p>
              <span></span> Indicates required fields
            </p>
          </section>

          <section class="form-body">
            <div class="onboarding-form">
              <n-form ref="formRef" :model="model" :rules="rules">
                <n-form-item path="firstName">
                  <n-input size="large" placeholder="First Name" v-model:value="model.firstName" :disabled="isLoading"
                    @keydown.enter.prevent />
                </n-form-item>

                <n-form-item path="lastName">
                  <n-input size="large" placeholder="Last Name" v-model:value="model.lastName" :disabled="isLoading"
                    @keydown.enter.prevent />
                </n-form-item>

                <n-form-item path="email">
                  <n-input size="large" placeholder="Email" v-model:value="model.email" :disabled="isLoading"
                    @keydown.enter.prevent />
                </n-form-item>

                <n-form-item path="phoneNumber">
                  <n-input size="large" placeholder="Phone Number" v-model:value="model.phoneNumber"
                    :allow-input="allowNumberInput" :disabled="isLoading" @keydown.enter.prevent />
                </n-form-item>

                <n-form-item size="large" path="customerDate">
                  <n-date-picker placeholder="Select Vaild Date" v-model:value="timePicker" :disabled="isLoading"
                    @keydown.enter.prevent type="date" />
                </n-form-item>

                <span>What services are you interested in?</span>

                <n-form-item>
                  <n-space>
                    <n-checkbox size="large" v-model:checked="model.termsAndConditions" :disabled="isLoading" />
                    <div class="t-and-c-container">
                      <span>Companionship and engaging
                        conversation. </span>
                    </div>
                  </n-space>

                </n-form-item>

                <n-form-item>
                  <n-space>
                    <n-checkbox size="large" v-model:checked="model.termsAndConditions" :disabled="isLoading" />
                    <div class="t-and-c-container">
                      <span>Help with household chores and light
                        cleaning.</span>
                    </div>
                  </n-space>

                </n-form-item>

                <n-form-item>
                  <n-space>
                    <n-checkbox size="large" v-model:checked="model.termsAndConditions" :disabled="isLoading" />
                    <div class="t-and-c-container">
                      <span>
                        Help with dressing and grooming.
                      </span>
                    </div>
                  </n-space>

                </n-form-item>

                <n-form-item>
                  <n-space>
                    <n-checkbox size="large" v-model:checked="model.termsAndConditions" :disabled="isLoading" />
                    <div class="t-and-c-container">
                      <span>Help with hygiene and toileting.</span>
                    </div>
                  </n-space>

                </n-form-item>

                <n-form-item>
                  <n-space>
                    <n-checkbox size="large" v-model:checked="model.termsAndConditions" :disabled="isLoading" />
                    <div class="t-and-c-container">
                      <span>Help with hygiene and toileting.</span>
                    </div>
                  </n-space>

                </n-form-item>

                <span>
                  Your Message
                </span>

                <n-form-item path="customerAddress">
                  <n-input size="large" placeholder="Message" type="textarea" rows="2"
                    v-model:value="model.customerAddress" :disabled="isLoading" @keydown.enter.prevent />
                </n-form-item>


                <div class="btn-container">
                  <n-button size="large" :loading="isLoading" :disabled="inputRequired || isLoading"
                    @click="handleValidateButtonClick">
                    Contact LoveNest
                  </n-button>
                </div>
              </n-form>
            </div>

            <div class="privacy-form-footer">
              <span>LoveNest respects your privacy. For more
                information , visit our <router-link to="#"> <br> Privacy Policy page.</router-link> </span>

            </div>
          </section>
        </div>
        <div class="contents">
          <h2>Assessment Information</h2>
          <p>
            Our team is always ready to assist you with all of your
            home care needs.
          </p>
          <p>
            <a href="#">
              Address: 9395 Kenwood Rd, Suite 100, Cincinnati, OH 45242 <br>
              Phone: 513-766-3339 <br>
              Email: Info@StarPointHC.org
            </a>
          </p>

          <h2>
            Looking for a Job with
            LoveNest HomeCare?
          </h2>
          <p>
            <a href="#">
              Learn how to become a Caregiver or apply today.Ashley Worthy, Talent Acquisition, JVS Career Services:
              <br>
              Phone: 513-745-2912 <br>
              Email: AWorthy@JVSCareers.org
            </a>
          </p>

          <h2>
            Office Hours
          </h2>
          <div class="work-time">
            <p> Monday: 9AM - 5PM</p>
            <p> Tuesday: 9AM - 5PM</p>
            <p> Wednesday: 9AM - 5PM</p>
            <p> Thursday: 9AM - 5PM</p>
            <p> Friday: 9AM - 5PM</p>
            <p> Saturday: Closed</p>
            <p> Sunday: Closed</p>
          </div>
        </div>
      </div>

    </section>


    <section>
      <div class="colored-last">
        <div class="second-color"></div>
        <div class="third-color"></div>
        <div class="first-color"></div>
      </div>
    </section>

    <div class="up-icon">
      <div class="move-up" style="text-align: center">
        <a href="#toTop" @click.prevent="(e) => handleSubMenuClick(e, 'toTop')">
          <Icon class="icon-image" icon="emojione-monotone:up-arrow" width="50px" height="50px"
            style="color: #4897E6" />
        </a>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
.assessment-service-wrap {
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  .up-icon {
    display: none !important;
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
    color: #00000080;
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

  span {
    font-family: Montserrat;
  }

  .contents-dots {
    color: #00000080;
  }

  &>.banner {
    background-image: url('../assets/images/frequent-question/Banner.png');
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
        line-height: 70px;
        letter-spacing: 0em;
        color: #fff;
        padding-left: 300px;
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

  section {
    &>.form-content {
      display: flex;
      justify-content: center;
      column-gap: 50px;
      margin-top: 100px;
      margin-bottom: 50px;

      div.form-container {
        border: 1px solid #0000001a;
        width: 500px;
        height: fit-content;
        border-radius: 0.75rem;
        padding: 0 20px 40px;
        position: relative;
        display: flex;
        flex-direction: column;
        row-gap: 40px;
        align-items: center;

        &>section {
          width: 100%;

          // form header
          &.form-header {

            // image container
            div.img-container {
              display: flex;
              justify-content: center;

              &>img {
                height: 3.2rem;
              }
            }

            // caption
            &>h3 {
              text-align: center;
              font-size: 1.18rem;
              color: #ffffff;
            }
          }

          // form body
          &.form-body {
            margin-top: -50px;
            padding-left: 5px;
            padding-right: 5px;
            display: flex;
            flex-direction: column;
            row-gap: 25px;

            .n-input,
            .n-date-picker {
              //  border: 3px solid red;
              width: 100%;
            }

            // onboarding form
            &>div.onboarding-form {
              .n-form {
                &>.n-form-item {
                  display: block;
                  word-break: break-all;

                  // check box container
                  .n-space {

                    // terms and conditions
                    .t-and-c-container {
                      span {
                        text-decoration: none;
                        font-weight: bold;
                        color: $base-color-1;
                      }
                    }

                    // nav link
                    a {
                      // text-decoration: none;
                      font-weight: 600;
                      color: $base-color;
                    }
                  }
                }

                &>.btn-container {
                  //  border: 3px solid red;
                  background-color: $base-color-1;
                  color: #fff;

                  .n-button {
                    width: 100%;
                    color: #fff;
                  }
                }
              }
            }

            // onboarding form footer
            &>div.onboarding-form-footer {
              display: flex;
              flex-direction: row;
              column-gap: 5px;
              justify-content: center;
              word-break: break-all;

              // &>span {}

              a {
                text-decoration: none;
                font-weight: bold;
                color: $base-color-1;
              }
            }

            // onboarding form footer
            &>div.privacy-form-footer {
              width: 100%;
              display: flex;
              flex-direction: row;
              column-gap: 5px;
              justify-content: center;
              word-break: break-all;
              text-align: center;

              // &>span {}

              a {
                text-decoration: none;
                font-weight: bold;
                color: red;
              }
            }
          }
        }
      }

      &>.contents {
        // border: 2px solid blue;
        width: 500px;
        min-height: 300px;
      }
    }
  }

  // <!-- Carousel section -->
  section {
    &>.carousel {
      .carousel-img {
        width: 100%;
        height: 500px;
        object-fit: cover;
      }

      .custom-arrow {
        display: flex;
        position: absolute;
        bottom: 25px;
        right: 10px;
      }

      .custom-arrow button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        margin-right: 12px;
        color: #fff;
        background-color: $base-color-2;
        border-width: 0;
        border-radius: 8px;
        transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
      }

      .custom-arrow button:hover {
        background-color: $base-color-1;
      }

      .custom-arrow button:active {
        transform: scale(0.95);
        transform-origin: center;
      }

      .custom-dots {
        display: flex;
        margin: 0;
        padding: 0;
        position: absolute;
        bottom: 20px;
        left: 20px;
      }

      .custom-dots li {
        display: inline-block;
        width: 12px;
        height: 4px;
        margin: 0 3px;
        border-radius: 4px;
        background-color: $base-color-2;
        // background-color: rgba(255, 255, 255, 0.4);
        transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
      }

      .custom-dots li.is-active {
        width: 40px;
        background: $base-color-1;
      }

      // Absolute Image - Section--------------

      .second-reliable {
        //  border: 3px solid red;
        border: 5px solid $base-color;
        display: flex;
        flex-direction: row-reverse;
        height: 500px;
        overflow-y: hidden;
        margin-bottom: 50px;

        &>.section-image {

          // border: 1px solid red;
          img {
            // border: 1px solid red;
            width: 650px;
            height: 500px;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          position: relative;
          width: 1500px;
          height: 500px;
          background-color: $base-color;

          &>.light-background {
            // border: 11px solid red;
            background-color: #FFFFFFB2;
            width: 850px;
            // min-height: 200px;
            position: absolute;
            top: 20px;
            bottom: 20px;
            left: 20px;
            display: flex;
            align-content: center;
            justify-content: flex-end;

            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 20px;

              .quotation {
                line-height: 0.86px;
                color: $base-color-1;
                // margin-bottom: 20px;

              }

              p {
                font-family: Montserrat;
                font-weight: 400;
                line-height: 30.26px;
                margin-bottom: 20px;
              }

              &>.color-btn {
                display: flex;
                justify-items: center;
                flex-direction: column;
                align-items: center;
                line-height: 0px;

                h4 {
                  font-size: 30px;
                  color: $base-color-1;
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

// XX-SM (<251px)
@media (max-width: 250.9px) {
  .assessment-service-wrap {
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


    section {
      &>.form-content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        column-gap: 50px;
        margin-top: 50px;
        margin-bottom: 50px;

        // This section is for the form
        div.form-container {
          width: 90%;
          border-radius: 0.3rem;
          padding: 0 10px 40px;
          row-gap: 30px;

          &>section {
            width: 100%;

            // form header
            &.form-header {
              border-radius: 0.25rem;
              padding: 22px 20px;
              text-align: center;

              // image container
              // div.img-container {
              //   border: 3px solid red;
              //   h2{}
              // }

              // caption
              &>h3 {
                font-size: 1rem;
              }
            }

            // form body
            &.form-body {
              padding-left: unset;
              padding-right: unset;

              // onboarding form
              // &>div.onboarding-form {}

              // onboarding form footer
              &>div.onboarding-form-footer {
                flex-direction: column;
                row-gap: 5px;
                text-align: center;
              }

              &>div.privacy-form-footer {
                flex-direction: column;
                row-gap: 5px;
                text-align: center;
              }
            }
          }
        }

        // This section is for the contents/assessment Address
        &>.contents {
          // border: 3px solid red;
          display: flex;
          flex-direction: column;
          width: 90%;
          margin: 0 auto;

          h2,
          p,
          a {
            text-align: center;
          }

          .work-time {
            padding-bottom: 30px;
          }
        }
      }
    }

    // <!-- Carousel section -->
    section {
      &>.carousel {

        //  border: 3px solid red;
        .carousel-img {
          width: 100%;
          height: 350px;
        }

        img {
          // border: 3px solid red;
          width: 100%;
        }

        .custom-arrow {
          bottom: 20px;
          right: 10px;
        }

        .custom-dots {
          bottom: 30px;
        }

        .custom-dots li {
          display: inline-block;
          width: 12px;
          height: 4px;
          margin: 0 3px;
          border-radius: 4px;
          background-color: $base-color-2;
          // background-color: rgba(255, 255, 255, 0.4);
          transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .custom-dots li.is-active {
          width: 40px;
          background: $base-color-1;
        }

        // Absolute Image - Section--------------

        .second-reliable {
          // border: 3px solid red;
          border: 5px solid $base-color;
          display: flex;
          flex-direction: row-reverse;
          flex-direction: column;
          height: 350px;
          overflow-y: hidden;
          margin-bottom: 50px;

          &>.section-image {

            // border: 1px solid red;
            img {
              // border: 1px solid red;
              width: 100%;
              height: auto;
              padding-right: 0px;
            }
          }

          &>.section-background {
            // border: 1px solid red;
            position: relative;
            width: 100%;
            height: 350px;
            margin-top: -7px;
            background-color: $base-color;

            &>.light-background {
              // border: 11px solid red;
              background-color: #FFFFFFB2;
              width: 95%;
              // min-height: 200px;
              position: absolute;
              overflow-y: scroll;
              top: -10px;
              bottom: 7px;
              left: 2px;
              display: flex;
              align-content: center;
              justify-content: flex-end;

              &>.contents {
                // border: 2px solid red;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                text-align: center;

                .icons {
                  // border: 2px solid red;
                  height: 30px;
                }

                .quotation {
                  line-height: 0.86px;
                  color: $base-color-1;
                  // margin-bottom: 20px;
                }

                p {
                  font-weight: 400;
                  line-height: 30.26px;
                  margin-bottom: 20px;
                }

                &>.color-btn {
                  display: flex;
                  justify-items: center;
                  flex-direction: column;
                  align-items: center;
                  line-height: 0px;

                  h4 {
                    font-size: 20px;
                    color: $base-color-1;
                    line-height: 0px;
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

// XX-SM
@media (min-width: 251px) and (max-width: 350.9px) {
  .assessment-service-wrap {
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
          font-weight: 400;
          font-size: 20px !important;
          line-height: 25px;
          color: #fff;
          padding-left: 0px;
        }

        .intro-subtitle {
          // border: 2px solid red;
          font-weight: 700;
          font-size: 30px !important;
          line-height: 40px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
        }
      }
    }


    section {
      &>.form-content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        column-gap: 50px;
        margin-top: 50px;
        margin-bottom: 50px;

        // This section is for the form
        div.form-container {
          width: 90%;
          border-radius: 0.3rem;
          padding: 0 10px 40px;
          row-gap: 30px;

          &>section {
            width: 100%;

            // form header
            &.form-header {
              border-radius: 0.25rem;
              padding: 22px 20px;
              text-align: center;

              // image container
              // div.img-container {
              //   border: 3px solid red;
              //   h2{}
              // }

              // caption
              &>h3 {
                font-size: 1rem;
              }
            }

            // form body
            &.form-body {
              padding-left: unset;
              padding-right: unset;

              // onboarding form
              // &>div.onboarding-form {}

              // onboarding form footer
              &>div.onboarding-form-footer {
                flex-direction: column;
                row-gap: 5px;
                text-align: center;
              }

              &>div.privacy-form-footer {
                flex-direction: column;
                row-gap: 5px;
                text-align: center;
              }
            }
          }
        }

        // This section is for the contents/assessment Address
        &>.contents {
          // border: 3px solid red;
          display: flex;
          flex-direction: column;
          width: 90%;
          margin: 0 auto;

          h2,
          p,
          a {
            text-align: center;
          }

          .work-time {
            padding-bottom: 30px;
          }
        }
      }
    }

    // <!-- Carousel section -->
    section {
      &>.carousel {

        //  border: 3px solid red;
        .carousel-img {
          width: 100%;
          height: 350px;
        }

        img {
          // border: 3px solid red;
          width: 100%;
        }

        .custom-arrow {
          bottom: 20px;
          right: 10px;
        }

        .custom-dots {
          bottom: 30px;
        }

        .custom-dots li {
          display: inline-block;
          width: 12px;
          height: 4px;
          margin: 0 3px;
          border-radius: 4px;
          background-color: $base-color-2;
          // background-color: rgba(255, 255, 255, 0.4);
          transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .custom-dots li.is-active {
          width: 40px;
          background: $base-color-1;
        }

        // Absolute Image - Section--------------

        .second-reliable {
          // border: 3px solid red;
          border: 5px solid $base-color;
          display: flex;
          flex-direction: row-reverse;
          flex-direction: column;
          height: 350px;
          overflow-y: hidden;
          margin-bottom: 50px;

          &>.section-image {

            // border: 1px solid red;
            img {
              // border: 1px solid red;
              width: 100%;
              height: auto;
              padding-right: 0px;
            }
          }

          &>.section-background {
            // border: 1px solid red;
            position: relative;
            width: 100%;
            height: 350px;
            margin-top: -7px;
            background-color: $base-color;

            &>.light-background {
              // border: 11px solid red;
              background-color: #FFFFFFB2;
              width: 95%;
              // min-height: 200px;
              position: absolute;
              overflow-y: scroll;
              top: -10px;
              bottom: 7px;
              left: 2px;
              display: flex;
              align-content: center;
              justify-content: flex-end;

              &>.contents {
                // border: 2px solid red;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                text-align: center;

                .icons {
                  // border: 2px solid red;
                  height: 30px;
                }

                .quotation {
                  line-height: 0.86px;
                  color: $base-color-1;
                  // margin-bottom: 20px;
                }

                p {
                  font-weight: 400;
                  line-height: 30.26px;
                  margin-bottom: 20px;
                }

                &>.color-btn {
                  display: flex;
                  justify-items: center;
                  flex-direction: column;
                  align-items: center;
                  line-height: 0px;

                  h4 {
                    font-size: 20px;
                    color: $base-color-1;
                    line-height: 0px;
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

// X-SM
@media (min-width: 351px) and (max-width: 575.9px) {
  .assessment-service-wrap {


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
      font-size: 15px !important;
    }

    h2 {
      font-size: 18px;
    }

    &>.banner {
      // border: 11px solid red;
      height: 400px;
      display: flex;
      justify-content: center;
      padding: 10px 10px;

      &>.intro-content {
        width: 100%;
        padding: 0px 20px;
        line-height: 0px;

        .intro-title {
          // border: 2px solid red;
          margin-bottom: 2.5rem;
          font-weight: 400;
          font-size: 25px !important;
          line-height: 35px;
          padding-left: 0px;
          text-align: center;
        }

        .intro-title:first-child {
          // border: 12px solid red;
          margin-bottom: 0px;
        }

        .intro-subtitle {
          // border: 2px solid red;
          font-weight: 700;
          font-size: 35px !important;
          line-height: 40px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
          text-align: center;
        }
      }
    }


    section {
      &>.form-content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        column-gap: 50px;
        margin-top: 50px;
        margin-bottom: 50px;

        // This section is for the form
        div.form-container {
          // border: 3px solid red;
          width: 90%;
          margin: 0 auto;
          border-radius: 0rem;
          padding: 0 10px 40px;
          row-gap: 30px;

          &>section {
            width: 100%;

            // form header
            &.form-header {
              // border: 3px solid red;
              border-radius: 0.25rem;
              padding: 22px 20px;
              text-align: center;

              // image container
              // div.img-container {
              //   border: 3px solid red;
              //   h2{}
              // }

              // caption
              &>h3 {
                font-size: 1rem;
              }
            }

            // form body
            &.form-body {
              padding-left: unset;
              padding-right: unset;

              // onboarding form
              &>div.onboarding-form {
                .t-and-c-container {
                //  border: 3px solid red;
                width: 280px;
                }
              }

              // onboarding form footer
              &>div.onboarding-form-footer {
                // border: 3px solid red;
                flex-direction: column;
                row-gap: 5px;
                text-align: center;

              }

              &>div.privacy-form-footer {
                flex-direction: column;
                row-gap: 5px;
                text-align: center;
              }
            }
          }
        }

        // This section is for the contents/assessment Address
        &>.contents {
          // border: 3px solid red;
          display: flex;
          flex-direction: column;
          width: 90%;
          margin: 0 auto;

          h2,
          p,
          a {
            text-align: center;
          }

          .work-time {
            padding-bottom: 30px;
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

// SM
@media (min-width: 576px) and (max-width: 767.9px) {
  .assessment-service-wrap {


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

    section {
      &>.form-content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        column-gap: 50px;
        margin-top: 50px;
        margin-bottom: 50px;

        // This section is for the form
        div.form-container {
          width: 90%;
          margin: 0 auto;
          border-radius: 0.3rem;
          padding: 0 10px 40px;
          row-gap: 30px;

          &>section {
            width: 100%;

            // form header
            &.form-header {
              border-radius: 0.25rem;
              padding: 22px 20px;
              text-align: center;

              // image container
              // div.img-container {
              //   border: 3px solid red;
              //   h2{}
              // }

              // caption
              &>h3 {
                font-size: 1rem;
              }
            }

            // form body
            &.form-body {
              padding-left: unset;
              padding-right: unset;

              // onboarding form
              // &>div.onboarding-form {}

              // onboarding form footer
              &>div.onboarding-form-footer {
                flex-direction: column;
                row-gap: 5px;
                text-align: center;
              }

              &>div.privacy-form-footer {
                flex-direction: column;
                row-gap: 5px;
                text-align: center;
              }
            }
          }
        }

        // This section is for the contents/assessment Address
        &>.contents {
          // border: 3px solid red;
          display: flex;
          flex-direction: column;
          width: 90%;
          margin: 0 auto;

          h2,
          p,
          a {
            text-align: center;
          }

          .work-time {
            padding-bottom: 30px;
          }
        }
      }
    }

    // <!-- Carousel section -->
    section {
      &>.carousel {
        //  border: 3px solid red;
        margin-bottom: -50px;

        .carousel-img {
          width: 100%;
          // height: 350px;
        }

        img {
          // border: 3px solid red;
          width: 100%;
        }

        .custom-arrow {
          bottom: 20px;
          right: 10px;
        }

        .custom-dots {
          bottom: 30px;
        }

        .custom-dots li {
          display: inline-block;
          width: 12px;
          height: 4px;
          margin: 0 3px;
          border-radius: 4px;
          background-color: $base-color-2;
          // background-color: rgba(255, 255, 255, 0.4);
          transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .custom-dots li.is-active {
          width: 40px;
          background: $base-color-1;
        }

        // Absolute Image - Section--------------

        .second-reliable {
          // border: 3px solid red;
          border: 5px solid $base-color;
          display: flex;
          flex-direction: row-reverse;
          flex-direction: column;
          // height: 500px;
          overflow-y: hidden;
          margin-bottom: 50px;

          &>.section-image {

            // border: 1px solid red;
            img {
              // border: 1px solid red;
              width: 100%;
              height: auto;
              padding-right: 0px;
            }
          }

          &>.section-background {
            // border: 1px solid red;
            position: relative;
            width: 100%;
            // height: 500px;
            margin-top: -7px;
            background-color: $base-color;

            &>.light-background {
              // border: 11px solid red;
              background-color: #FFFFFFB2;
              width: 96%;
              // min-height: 200px;
              position: absolute;
              overflow-y: scroll;
              top: -30px;
              bottom: 5px;
              left: 7px;
              display: flex;
              align-content: center;
              justify-content: flex-end;

              &>.contents {
                // border: 2px solid red;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 10px;
                text-align: center;

                .icons {
                  // border: 2px solid red;
                  height: 30px;
                }

                .quotation {
                  line-height: 0.86px;
                  color: $base-color-1;
                  // margin-bottom: 20px;
                }

                p {
                  font-weight: 400;
                  line-height: 30.26px;
                  margin-bottom: 20px;
                }

                &>.color-btn {
                  display: flex;
                  justify-items: center;
                  flex-direction: column;
                  align-items: center;
                  line-height: 0px;

                  h4 {
                    font-size: 20px;
                    color: $base-color-1;
                    line-height: 0px;
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

// MD
@media (min-width: 768px) and (max-width: 991.9px) {
  .assessment-service-wrap {


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
      line-height: 30px !important;
    }


    h2 {
      // border: 2px solid red;
      font-size: 22px !important;
    }

    h3 {
      font-size: 35px !important;
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
          font-size: 50px !important;
          line-height: 60px;
          padding-left: 0px;
        }

        .intro-title:first-child {
          // border: 12px solid red;
          margin-bottom: 0px;
        }

        .intro-subtitle {
          // border: 2px solid red;
          font-weight: 700;
          font-size: 60px;
          line-height: 60px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
        }
      }
    }

    // colored-last line section
    section {
      &>.colored-last {
        display: none;
        margin-top: 0px;

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

@media (min-width: 992px) and (max-width: 1200.9px) {
  .assessment-service-wrap {


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
      line-height: 30px !important;
    }


    h2 {
      // border: 2px solid red;
      font-size: 22px !important;
    }

    h3 {
      font-size: 35px !important;
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
          font-size: 50px !important;
          line-height: 60px;
          padding-left: 0px;
        }

        .intro-title:first-child {
          // border: 12px solid red;
          margin-bottom: 0px;
        }

        .intro-subtitle {
          // border: 2px solid red;
          font-weight: 700;
          font-size: 60px;
          line-height: 60px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
        }
      }
    }

    // colored-last line section
    section {
      &>.colored-last {
        display: none;
        margin-top: 0px;

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

@media (min-width: 1500px) {
  .assessment-service-wrap {

    // border: 11px solid red;
    .up-icon {
      position: relative;

      .move-up {
        // border: 2px solid red;
        transition: ease;
        position: fixed;
        right: 30px;
        bottom: 20px;

        .icon-image {
          //  border: 2px solid red;
          width: 100px;
          height: 80px;
        }
      }
    }

    // The heart icons in the absolute pages
    .heart {
      width: 80px;
      height: 50px;
    }

    P {
      font-size: 28px !important;
      line-height: 50px !important;
    }

    h2 {
      font-size: 40px;
    }

    h3 {
      font-size: 60px !important;
      line-height: 80px !important;
    }

    &>.banner {
      height: 500px;

      &>.intro-content {
        line-height: 20px;

        .intro-title {
          // border: 2px solid red;
          font-size: 70px;
        }

        .intro-subtitle {
          font-size: 100px;
          padding-left: 300px;
          line-height: 100px;
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

    &>.line-paragraphy {
      margin-top: 50px;

      p {
        padding: 0 20px;
        // text-align: center;
      }

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

    }

    // First- Section---------------
    // <!-- Relative and Absolute section -->

    section {

      &>.reliable {
        // border: 5px solid $base-color;
        display: flex;
        // height: fit-content;
        justify-content: center;
        overflow-y: hidden;
        padding: 0 20px;
        margin-bottom: 0px;

        &>.section-image {

          // border: 1px solid red;
          img {
            // border: 1px solid red;
            width: 1000px !important;
            height: 700px !important;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          position: relative;
          width: 1000px !important;
          height: 700px !important;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 1000px !important;
            // min-height: 200px;
            position: absolute;
            top: 20px;
            bottom: 20px;
            right: 20px;
            display: flex;
            align-content: center;
            justify-content: flex-end;

            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 20px;

              h2 {
                font-weight: 600;
                line-height: 50.86px;
                color: $base-color-1;
                margin-bottom: 20px;
              }

              &>.contents-wrap {
                // border: 2px solid red;
                display: flex;
                // justify-content: center;
                column-gap: 50px;

                &>.first-section,
                .second-section {
                  div {
                    display: flex;
                    column-gap: 5px;

                    span {
                      //  border: 2px solid red;
                      font-size: 23px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    // <!-- YOUR SEARCH ENDS HERE -->
    &>.search-ends {
      // border: 3px solid red;
      margin-top: 50px;

      &>.underline-wrap {
        padding: 0 20px;

        &>.making-preparation {
          display: flex;
          justify-content: center;

          // border: 4px solid red;
          h3 {
            color: $base-color-1;
            position: relative;
            font-size: 30px;
            font-weight: 600;
            line-height: 50px;
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
        // border: 3px solid red;
        padding: 0 20px;
        text-align: center;
        padding-bottom: 30px;
      }
    }

    // Second- Section---------------
    // <!-- Relative and Absolute section -->

    section {

      &>.reliable {
        // border: 5px solid $base-color;
        display: flex;
        // height: fit-content;
        overflow-y: hidden;
        padding: 0 20px;
        margin-bottom: 0px;

        &>.section-image {

          // border: 1px solid red;
          img {
            // border: 1px solid red;
            width: 650px;
            height: 450px;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          position: relative;
          width: 1500px;
          height: 450px;
          background-color: $base-color;

          &>.light-background {
            // border: 1px solid red;
            background-color: #FFFFFFB2;
            width: 850px;
            // min-height: 200px;
            position: absolute;
            top: 20px;
            bottom: 20px;
            right: 20px;
            display: flex;
            align-content: center;
            justify-content: flex-end;

            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 20px;

              h2 {
                font-weight: 600;
                line-height: 50.86px;
                color: $base-color-1;
                margin-bottom: 30px;
                text-align: center;
              }

              &>.contents-wrap {
                // border: 2px solid red;
                display: flex;
                // justify-content: center;
                column-gap: 50px;

                &>.first-section,
                .second-section {
                  display: flex;
                  flex-direction: column;
                  row-gap: 10px;

                  div {
                    // border: 2px solid red;
                    display: flex;
                    column-gap: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }

    &>.underline-wrap {
      padding: 0 200px;

      &>.making-preparation {
        display: flex;
        justify-content: center;
      }
    }

    &>.paragraph-dots {
      // border: 11px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 200px;
      margin-bottom: 30px;

      &>.para {
        p {
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
          padding-bottom: 30px;
        }
      }

      &>.contents-dots {
        // border: 2px solid blue;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 10px;
        font-size: 22px;

        .contents {
          // border: 1px solid rgba(0, 0, 0, 0.070);
          border-radius: 8px;
          width: calc((100% / 4) - 33px);
          display: flex;
          flex-wrap: wrap;
          padding: 8px 0;
        }
      }
    }

    .call-us-wrap {
      // border: 12px solid red;
      background-color: $base-color-1;
      padding: 0 200px;

      &>.call-assessment {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        h3 {
          color: #fff;
          font-weight: 400;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }

        &>.icon-assessment {
          // border: 11px solid red;
          background-color: #fff;
          border-radius: 20px;
          color: $base-color;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 30px;
          column-gap: 10px;

          span {
            display: flex;

            a {
              text-decoration: none;
              font-size: 22px;
            }
          }

          .phone-number {
            color: $base-color-1;
            font-weight: 700;
          }
        }
      }
    }

    &>.elderly-assessment {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-assessment {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          column-gap: 100px;
          padding: 30px 0;

          &>.lady {
            img {
              width: 650px;
              height: auto;
            }
          }

          &>.important-assessment {
            width: 750px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;
                font-size: 20px;

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 2) - 17px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    // Looking for elderly assessment support? component just below the elderly assessment with image of an advance lady

    &>.elderly-support {
      .call-us {
        padding: 10px 200px;

        &>.call-assessment {
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

          &>.icon-assessment {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 30px;

            span {
              // border: 11px solid red;
              border-radius: 20px;
              background-color: #fff;
              padding: 20px 30px;


              a {
                text-decoration: none;
                color: $base-color;
                font-size: 22px;
                font-weight: 700;
              }
            }

            .phone-number {
              color: $base-color-1;
            }
          }
        }
      }
    }

    &>.personal-assessment {
      // border: 11px solid red;
      padding: 0 200px;

      &>.underline-wrap {
        &>.underline-assessment {
          // border: 3px solid red;
          display: flex;
          justify-content: center;
        }
      }

      .image-supporting,
      .choose-image {
        justify-content: center;
        column-gap: 200px;

        &>.image {
          img {
            width: 550px;
            height: 550px;
          }
        }
      }

      &>.bathing-showering {
        // border: 11px solid red;
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        margin-bottom: 30px;

        h4 {
          font-size: 30px;
          font-weight: 600;
          line-height: 25px;
          letter-spacing: 0em;

        }

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          column-gap: 30px;
          row-gap: 10px;

          .contents {
            // border: 1px solid rgba(0, 0, 0, 0.070);
            border-radius: 8px;
            width: calc((100% / 4) - 33px);
            padding: 8px 0;

            &>.dots {
              &>.dots-span {
                // border: 2px solid red;
                display: flex;
                align-items: center;
                font-size: 22px;
              }
            }
          }
        }
      }
    }

    &>.getIn-touch {
      .call-us {
        background-color: $base-color-1;
        display: flex;
        justify-content: space-between;
        padding: 10px 200px;

        &>.call-assessment {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          column-gap: 50px;

          div h3 {
            // border: 2px solid red;
            color: #fff;
            font-size: 22px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;

          }

          &>.assessment {
            // border: 11px solid red;
            padding: 20px 35px;

            span {
              display: flex;

              a {
                text-decoration: none;
                font-size: 22px;
              }
            }
          }
        }
      }
    }

    &>.domiciliary-assessment {
      &>.domiciliary {
        padding: 0 200px;

        &>.underline-domiciliary {
          padding: 0 20px;

          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .image-domiciliary {
          justify-content: center;
          column-gap: 100px;
        }

        &>.consider-domiciliary {
          padding-top: 10px;

          h3 {
            font-size: 25px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }


          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            padding-bottom: 50px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              column-gap: 30px;
              row-gap: 10px;
              font-size: 22px;
            }
          }
        }
      }
    }

    &>.companionship-assessment {
      // border: 11px solid red;
      padding: 0 200px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-assessment {
          // border: 3px solid red;
          display: flex;
          justify-content: center;
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-companionship {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 200px;

        &>.image {
          img {
            width: 550px;
          }
        }

        &>.companionship {
          width: 600px;

          &>.underline-wrap {
            &>.companionship-assessment {
              display: flex;
              justify-content: center;
              flex-direction: column;

              // border: 4px solid red;
              h3 {
                position: relative;
                font-size: 30px;
                font-weight: 700;
                line-height: 48px;
                letter-spacing: 0em;
              }

              h3::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0%;
                width: 30%;
                border-bottom: 7px solid $base-color-1;
                border-radius: 10px;
              }
            }
          }

          h4 {
            width: 450px;
            color: $base-color-1;
            font-size: 18px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }
      }

      h3 {
        font-size: 25px;
        font-weight: 700;
        line-height: 25px;
        letter-spacing: 0em;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.dementia-assessment {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;


        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        &>.elder-dementia-assessment {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          column-gap: 300px;
          padding: 30px 0;

          &>.elder {
            img {
              width: 500px;
              height: 550px;
            }
          }

          &>.important-assessment {
            width: 650px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.personal-assistance {
      // border: 1px solid red;
      padding: 0 200px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-assessment {
          // border: 3px solid red;
          display: flex;
          justify-content: center;
        }
      }

      &>.image-personal-assistance {
        // border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 300px;

        &>.image {
          img {
            width: 550px;
          }
        }

        &>.companionship {
          width: 600px;

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }

          h3 {
            font-size: 25px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }
      }
    }

    &>.pet-assessment {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .pet-image-assessment {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.life-assessment {


      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;


        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }


        .life-assessment-image {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.palliative-assessment {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .palliative-image-assessment {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.hospital-assessment {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .life-assessment-image {
          justify-content: center;
          column-gap: 300px;
        }

        .paragraph-dots {
          // border: 1px solid red;
          display: flex;
          flex-direction: column;
          padding-bottom: 50px;

          &>.contents-dots {
            // border: 2px solid blue;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            column-gap: 30px;
            row-gap: 10px;
            font-size: 22px;
          }
        }
      }
    }

    &>.overnight-assessment {
      &>.contents {
        // border: 12px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .lady-elderly-assessment {
          justify-content: center;
          column-gap: 300px;

          .important-assessment {
            width: 650px;

            &>.paragraph-dots {
              // border: 1px solid red;
              display: flex;
              flex-direction: column;

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  font-size: 25px;
                }

                .contents {
                  font-size: 22px;
                }
              }
            }
          }
        }
      }
    }

    &>.couples-assessment {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .couples-image-assessment {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.live-in-assessment {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .wheelchair-live-in-assessment {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.respite-assessment {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .respite-image-assessment {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.complex-assessment {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .complex-support-plan {
          justify-content: center;
          column-gap: 300px;

          p span {
            // border: 2px solid red;
            color: $base-color-2;
            font-size: 22px !important;
            font-weight: 600;
            line-height: 25px;
            letter-spacing: 0em;
          }

          h4 {
            // border: 2px solid red;
            color: $base-color-2;
            font-size: 30px !important;
            line-height: 35px !important;
          }

          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              column-gap: 30px;
              row-gap: 10px;
              font-size: 22px !important;

              h4 {
                // border: 2px solid red;
                display: none;
                color: $base-color-1;
                font-size: 25px;
              }

              .contents {
                // border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 3) - 30px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;
              }
            }
          }
        }

        .complex-home {
          justify-content: center;
          column-gap: 300px;
          // border: 2px solid red;

          h4 {
            // border: 2px solid red;
            color: $base-color-2;
            font-size: 25px;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0em;
          }

          .paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              column-gap: 30px;
              row-gap: 10px;
              font-size: 22px;

              .contents {
                border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 1) - 30px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;

                .needs-assess {
                  color: #00000080;
                }
              }
            }
          }
        }
      }
    }

    &>.stroke-assessment {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .stroke-image-assessment {
          justify-content: center;
          column-gap: 300px;
        }

        h3 {
          text-align: center;
          margin-top: 30px;
        }
      }
    }
  }

}
</style>
