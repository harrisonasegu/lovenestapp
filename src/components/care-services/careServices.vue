<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const route = useRoute()
const router = useRouter()

const routeName = route.name as string

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
    case 'home care services':
      navigateToSubMenu(subMenu)
      break

    case 'disability support':
      navigateToSubMenu(subMenu)
      break

    default:
      navigateToSubMenuPage(navMenuTextContent, subMenu)
  }
}

import ElderlyLadyImage from '@/assets/images/Care_Service/lady.png'
import wheelChairLady from '@/assets/images/Care_Service/lady1.png'
import ChooseUsImage from '@/assets/images/Care_Service/Vector.png'
import DomiciliaryImage from '@/assets/images/Care_Service/Domiciliary.png'
import DementiaI from '@/assets/images/Care_Service/Demential.png'
import PetCare from '@/assets/images/Care_Service/pet.png'
import LifeCare from '@/assets/images/Care_Service/lifeCare.png'
import Palliative from '@/assets/images/Care_Service/palliative.png'
import Couples from '@/assets/images/Care_Service/couples.png'
import Respite from '@/assets/images/Care_Service/respite.png'
import Complex from '@/assets/images/Care_Service/Demential.png'
import ComplexHome from '@/assets/images/Care_Service/respite.png'
import Frame1 from '@/assets/images/Care_Service/Frame1.png'
import Frame2 from '@/assets/images/Care_Service/newImage1.png'
import Frame3 from '@/assets/images/Care_Service/Frame3.png'
import Frame4 from '@/assets/images/Care_Service/Frame4.png'
import Frame5 from '@/assets/images/Care_Service/Frame5.png'
import Frame6 from '@/assets/images/Care_Service/Frame6.png'
import Frame7 from '@/assets/images/Care_Service/Frame7.png'
</script>

<template>
  <div id="toTop" class="care-service-wrap">

    <div class="banner">

      <div class="intro-content">
        <h2 class="intro-title">
          Find The Perfect Caregiver
        </h2>
        <br>
        <h1 class="intro-subtitle">
          For Your Loved One
        </h1>
      </div>
    </div>

    <!-- Request a free assessment today!
 -->
    <div class="line-paragraphy">
      <p>
        At LoveNest, personalized home care really is personal. Our team listens carefully to understand clients' likes
        and dislikes, hobbies and pastimes, and personal schedules. We then make a match to a caregiver based on
        personality and common interests. Our team can also create the ideal care plan depending on specific needs.
      </p>

      <!-- underline contents -->
      <div class="underline-wrap">
        <div class="making-preparation">
          <h3>Request A Free Assessment Today!
          </h3>
        </div>
      </div>
    </div>

    <!-- First Section -->
    <!-- Relative and Absolute section -->
    <section>
      <div class="reliable">
        <div class="section-image">
          <img :src="Frame1" alt="picture">
        </div>
        <div class="section-background">

          <div class="light-background">
            <div class="contents">
              <h2>
                HERE ARE SOME OF THE SERVICES WE PROVIDE:
              </h2>
              <div class="contents-wrap">
                <div class="first-section">
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>Companionship</span>
                  </div>
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>Fall Prevention</span>
                  </div>
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>Laundry</span>
                  </div>
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>in-Patience Care Companion</span>
                  </div>
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>Errands</span>
                  </div>
                </div>
                <div class="second-section">
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>Dressing and Grooming</span>
                  </div>
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>Light Housekeeping</span>
                  </div>
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>Shopping</span>
                  </div>
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>Medication Reminders</span>
                  </div>
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>Meal Preparation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    <!-- YOUR SEARCH ENDS HERE -->
    <div class="search-ends">
      <!-- underline contents -->
      <div class="underline-wrap">
        <div class="making-preparation">
          <h3>YOUR SEARCH ENDS HERE
          </h3>
        </div>
      </div>
      <p>
        If you're looking for private-duty, in-home care in Cincinnati, LoveNest is here and ready to serve you. We
        support all families who are searching for excellence with in-home senior care-services.

      </p>
    </div>

    <!-- Second Section -->
    <!-- Relative and Absolute section -->
    <section>
      <div class="reliable">
        <div class="section-image">
          <img :src="Frame7" alt="picture">
        </div>
        <div class="section-background">

          <div class="light-background">
            <div class="contents">
              <h2>
                WHY CHOOSE LOVENEST?
              </h2>
              <div class="contents-wrap">
                <div class="first-section">
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>
                      Full range of non-medical
                      services and companionship,
                      provided in-home, as well as
                      at physical rehabilitation
                      centers and hospitals
                    </span>
                  </div>
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>
                      We can provide assistance
                      with documentation for your
                      long-term care insurance
                      provider, when applicable
                    </span>
                  </div>
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>
                      Always there for our clients,
                      24/7/365
                    </span>
                  </div>

                </div>
                <div class="second-section">
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>
                      Friendly, compassionate,
                      expertly trained caregivers,
                      personally matched by
                      LoveNest Director to the
                      personality and preference
                      of you or your loved one
                    </span>
                  </div>
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>
                      100 percent of profits
                      invested back into the
                      community through Jewish
                      Family Service of New York
                    </span>
                  </div>
                  <div>
                    <span>
                      <Icon class="heart" icon="f7:heart-fill" width="30px" height="30px" style="color: #BE0C68" />
                    </span>
                    <span>
                      Your caregiver will be
                      attuned to your schedule
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Second Underline============== -->
    <!-- underline contents -->
    <div class="underline-wrap">
      <div class="making-preparation">
        <h3>MAKING PREPARATIONS FOR YOUR HOME CARE</h3>
      </div>
    </div>

    <div class="paragraph-dots">
      <div class="para">
        <p>
          Preparing for home care involves several important steps to ensure a safe and comfortable environment for the
          individual receiving care.
          Here's a checklist to help you make necessary preparations:
        </p>
      </div>
      <div class="contents-dots">
        <div class="contents">
          <span class="dots">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
              <path fill="#DA5E42"
                d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
            </svg>
          </span>
          <span class="needs-assess">
            Promoting Independence
          </span>
        </div>

        <div class="contents">
          <span class="dots">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
              <path fill="#DA5E42"
                d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
            </svg>
          </span>
          <span class="needs-assess">
            Ensuring Safety
          </span>
        </div>

        <div class="contents">
          <span class="dots">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
              <path fill="#DA5E42"
                d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
            </svg>
          </span>
          <span class="needs-assess">
            Promoting Healthy Aging
          </span>
        </div>

        <div class="contents">
          <span class="dots">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
              <path fill="#DA5E42"
                d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
            </svg>
          </span>
          <span class="needs-assess">
            Managing Health Conditions
          </span>
        </div>

        <div class="contents">
          <span class="dots">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
              <path fill="#DA5E42"
                d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
            </svg>
          </span>
          <span class="needs-assess">
            Preventing Social Isolation
          </span>
        </div>

        <div class="contents">
          <span class="dots">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
              <path fill="#DA5E42"
                d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
            </svg>
          </span>
          <span class="needs-assess">
            Respecting Dignity
          </span>
        </div>

        <div class="contents">
          <span class="dots">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
              <path fill="#DA5E42"
                d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
            </svg>
          </span>
          <span class="needs-assess">
            Emergency Preparedness
          </span>
        </div>

        <div class="contents">
          <span class="dots">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
              <path fill="#DA5E42"
                d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
            </svg>
          </span>
          <span class="needs-assess">
            Create a Safe Environment
          </span>
        </div>

      </div>
    </div>

    <div class="call-us-wrap">
      <div class="call-contact">
        <div>
          <h3> Call us today to arrange home care </h3>
        </div>

        <div class="icon-contact">

          <span>
            <Icon icon="ion:call" color="#da5e42" width="15" />
          </span>

          <span>
            <a class="phone-number" href="tel:++ 07931 918596"> 07931 918596</a>
          </span>

        </div>
      </div>
    </div>

    <section id="elderly" class="elderly-care">
      <div class="contents">
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>ELDERLY CARE</h3>
          </div>
        </div>
        <p>
          Elderly care encompasses a broad range of services and support aimed at meeting the physical, emotional, and
          social needs of older
          adults. As individuals age, they may require assistance with activities of daily living, healthcare, social
          engagement, and emotional
          support.
        </p>

        <p>
          Elderly care is dedicated support that addresses the physical and mental needs of people as they age. It can
          include short-term
          assistance to recover from a specific condition, respite care to give unpaid carers a break, or long-term
          support. Elderly care can
          include a range of services tailored to the individual and their specific situation from helping them maintain
          a
          healthy and nutritious
          diet, to encouraging gentle and positive movement. Elderly care can help individuals maintain a positive
          quality
          of life during their later
          years.
        </p>

        <div class="lady-elderly-care">
          <div class="lady">
            <img :src="Frame2" alt="lady-picture">
          </div>
          <div class="important-care">
            <h3>What is the importance
              of Elderly care?
            </h3>
            <p>
              The world is aging faster than ever before. According to the Centre for Aging
              Better, there are currently 11 million people aged 65 in England alone, and this
              is set to rise to 13 million in the next 10 years.
            </p>
            <p>
              The ageing process does not always lead to disability, although 86 percent of
              people over 85 are living with at least one chronic long-term health condition.
              It's projected that the number of individuals in care in the UK will double by
              2035, meaning care services are gaining increased importance. The use of
              their services enables our loved ones to maintain independence and enjoy a
              longer quality of life.
            </p>

            <div class="paragraph-dots">
              <div class="contents-dots">
                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#DA5E42"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Assess the Needs
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#DA5E42"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Medication Management
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#DA5E42"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Arrange for Medical Supplies
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#DA5E42"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Stay Organized
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#DA5E42"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Emotional Support
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#DA5E42"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Create a Safe Environment
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#DA5E42"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Legal and Financial Planning
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#DA5E42"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Support Network
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#DA5E42"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Personal Care
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#DA5E42"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Emergency Preparedness
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

        <h3>
          Who would benefit from elderly care services?
        </h3>

        <p>
          Elderly individuals experiencing difficulty with daily activities due health difficulties, mobility issues, or
          loneliness may find assistance
          and support through elderly care services.
          For example, those living with dementia, complex medical conditions like Parkinson's Disease, or finding it
          difficult to keep up with personal care may see their quality of life improve with professional support.
        </p>
        <p>
          It should be noted that an older person may not always be aware of when they require assistance. This can be
          challenging for friends
          and family members to observe and therefore needs a sensitive approach. We have some advice for discussing
          sensitive topics from
          a professional therapist here.
        </p>
      </div>
    </section>

    <!-- // Looking for elderly care support? component just below the elderly care with image of an advance lady -->
    <div class="elderly-support">

      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for elderly care support?</h3>
          </div>

          <div class="icon-contact">

            <span>
              <a class="#" href="tel:+ 07931 918596">Schedule a call back</a>
            </span>

            <span>
              <a class="#" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="personal" class="personal-care">
      <!-- underline contents -->
      <div class="underline-wrap">
        <div class="underline-care">
          <h3>PERSONAL CARE</h3>
        </div>
      </div>

      <p>
        Personal care for elders is the support and supervision of daily personal living tasks and private hygiene and
        toileting, along with
        dressing and maintaining your personal appearance. Personal care may include: bathing and showering, including
        bed-baths, and
        applying lotions and creams as required. It provides you or your loved one with the opportunity to receive
        discreet and sensitive
        one-to-one support from a fully-trained private carer.
      </p>
      <div class="image-supporting">
        <div class="image">
          <img :src="wheelChairLady" alt="picture">
        </div>
        <div class="supporting">
          <div class="underline-wrap">
            <div class="supporting-care">
              <h3>Supporting your independence
                with a personal carer
              </h3>
              <h4>
                A fully trained private carer offers discreet
                personal care to support your independence.
              </h4>
              <p>
                At Helping Hands, our carers are all fully trained to provide dedicated,
                person-centred home care that promotes your independence and lets
                you continue to live life on your own terms. Working to your regular
                routines and ensuring that support is tailored to your specific
                requirements, you'll always receive personal care in the way that's most
                comfortable and convenient for you.
                <br>
                <span>
                  We believe in the importance of a continuous service and the same
                  familiar faces, especially when it comes to personal care.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- What is Personal care? -->
      <div class="choose-image">
        <div class="content">
          <h3>What is Personal care?</h3>
          <p>
            Personal care refers to the assistance provided to individuals with activities
            related to daily living, hygiene, and grooming. It encompasses a range of
            tasks that help individuals maintain their personal hygiene, appearance, and
            overall well-being. Personal care services are often provided to those who
            may have difficulty performing these tasks independently due to age,
            disability, illness, or other factors.
          </p>
          <h3>
            Why you choose us for
            personal care?
          </h3>
          <p>
            At Beaumont Home Care, our care professionals are experienced in
            providing bespoke personal care services, ensuring that each client's
            individual and unique needs are preferences are met. We strive to create a
            reassuring and supportive environment where individuals feel comfortable,
            confident and cared for during their personal care routine.
            Additionally, our personal care service is provided with a compassionate
            and respectful approach, taking into consideration our client's preferences,
            cultural beliefs, and privacy. Our care professionals are trained to provide
            assistance while promoting independence and maintaining dignity, We
            take into consideration our client's preferences, cultural beliefs and privacy,
            to promote dignity and respect at all times.
          </p>
        </div>
        <div class="image">
          <img :src="Frame2" alt="picture">
        </div>
      </div>


      <div class="bathing-showering">
        <h4>A personal carer can assist with:</h4>
        <div class="contents-dots">
          <div class="contents">
            <span class="dots">
              <div class="dots-span">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                  <path fill="#DA5E42"
                    d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                </svg>
                <span class="needs-assess">
                  Bathing and Showering
                </span>
              </div>
              <p>
                Assistance with bathing or showering
                involves helping individuals clean their
                bodies thoroughly, ensuring they are
                comfortable and safe during the
                process.
              </p>
            </span>
          </div>

          <div class="contents">
            <span class="dots">
              <div class="dots-span">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                  <path fill="#DA5E42"
                    d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                </svg>
                <span class="needs-assess">
                  Toileting and Incontinence Care
                </span>
              </div>
              <p>
                This involves assisting individuals with using the
                toilet, maintaining continence, and managing
                incontinence issues if present.
              </p>
            </span>
          </div>
          <div class="contents">
            <span class="dots">
              <div class="dots-span">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                  <path fill="#DA5E42"
                    d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                </svg>
                <span class="needs-assess">
                  Dressing and Undressing
                </span>
              </div>
              <p>
                Personal care aides help individuals
                select appropriate clothing, put on and
                take off garments, fasten buttons, tie
                shoelaces, and ensure clothing is
                comfortable and properly fitted.
              </p>
            </span>
          </div>
          <div class="contents">
            <span class="dots">
              <div class="dots-span">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                  <path fill="#DA5E42"
                    d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                </svg>
                <span class="needs-assess">
                  Assistance and Mobility
                </span>
              </div>
              <p>
                Personal care aides may help
                individuals move around safely,
                transfer from one place to another
                (e.g., from bed to chair), and use
                mobility aids such as walkers or
                wheelchairs.
              </p>
            </span>
          </div>
          <div class="contents">
            <span class="dots">
              <div class="dots-span">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                  <path fill="#DA5E42"
                    d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                </svg>
                <span class="needs-assess">
                  Medication Reminders
                </span>
              </div>
              <p>
                While personal care aides typically do not
                administer medications, they may remind
                individuals to take their medications as
                prescribed and assist with opening containers
                or organizing pillboxes.
              </p>
            </span>
          </div>
          <div class="contents">
            <span class="dots">
              <div class="dots-span">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                  <path fill="#DA5E42"
                    d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                </svg>
                <span class="needs-assess">
                  Grooming
                </span>
              </div>
              <p>
                Grooming tasks include hair care
                (combing, brushing, washing, and styling),
                oral hygiene (brushing teeth, denture care,
                and mouthwash), shaving (for men), and
                nail care (trimming and filing nails).
              </p>
            </span>
          </div>
        </div>
      </div>

    </section>

    <div class="getIn-touch">
      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for assistance with your personal care needs?
            </h3>
          </div>

          <div class="contact">
            <span>
              <a class="phone-number" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <div id="domiciliary" class="domiciliary-care">
      <div class="domiciliary">
        <div class="underline-domiciliary">
          <div class="making-preparation">
            <h3>DOMICILLIARY CARE</h3>
          </div>
        </div>
        <p>
          At Lovenest Home Care, we understand that there's no place like home and if you have ever felt like you could
          use some extra support
          at home to continue living independently, domiciliary care can help. We can offer a variety of flexible care
          options from just
          30 minutes a week, several hours a day to a more permanent home care solution such as live-in care.
        </p>
        <p>
          Domiciliary Care is tailored to provide support to people living in their own homes who require additional
          support with day-to-day
          living and are there to help you retain independence and make you feel safe and cared for in the comfort of
          your
          own home amongst
          familiar surroundings.
        </p>

        <div class="image-domiciliary">
          <div class="image">
            <img :src="DomiciliaryImage" alt="picture">
          </div>
          <div class="demociliary">
            <h3>What is Domiciliary care?</h3>
            <p>
              Domiciliary care refers to a type of home care service provided to individuals
              who need assistance with daily activities, personal care, or medical needs
              but prefer to stay in the comfort of their own homes rather than move to a
              residential care facility. Domiciliary care services can be tailored to the
              specific needs of the individual and may include assistance with tasks such
              as bathing, dressing, meal preparation, medication management, mobility
              assistance, and companionship.
            </p>
            <p>
              Domiciliary care can be provided by trained caregivers, nurses, or other
              healthcare professionals either on a full-time basis or for specific hours
              during the day or week, depending on the needs of the individual receiving
              care. This type of care is often used by elderly individuals who wish to
              maintain their independence and stay in familiar surroundings as they age,
              as well as by individuals with disabilities or chronic illnesses who require
              assistance with daily living activities.
            </p>
          </div>
        </div>
        <div class="why-domiciliary">
          <h3>
            Why should you choose us for domiciliary care?
          </h3>
          <p>
            Lovenest Home Care is a trusted provider of domiciliary care services. We have a proven track record of
            delivering exceptional care
            and have earned the trust of our clients and their families. We are committed to making a positive
            difference
            in your life and
            providing the support you need to live comfortably, safety and independently in the comfort of your own
            home.
          </p>
          <p>
            Choosing Lovenest Home Care means choosing a reliable and compassionate partner in domiciliary care. We are
            dedicated to
            providing a personalized, high-quality service that meets your unique needs and promotes well-being.
          </p>
        </div>

        <div class="consider-domiciliary">
          <h3>
            When to consider domiciliary care?
          </h3>
          <div class="paragraph-dots">
            <div class="contents-dots">
              <div class="contents">
                <span class="dots">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                    <path fill="#BE0C68"
                      d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                  </svg>
                </span>
                <span class="needs-assess">
                  Feeling lonely and need support to attend appointments.
                </span>
              </div>

              <div class="contents">
                <span class="dots">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                    <path fill="#BE0C68"
                      d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                  </svg>
                </span>
                <span class="needs-assess">
                  Having a surgery or illness but want to leave hospital as quickly as possible.
                </span>
              </div>

              <div class="contents">
                <span class="dots">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                    <path fill="#BE0C68"
                      d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                  </svg>
                </span>
                <span class="needs-assess">
                  Finding personal hygiene, such as getting in and out of the shower, increasingly harder.
                </span>
              </div>

              <div class="contents">
                <span class="dots">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                    <path fill="#BE0C68"
                      d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                  </svg>
                </span>
                <span class="needs-assess">
                  Needing an extra hand with housekeeping.
                </span>
              </div>

              <div class="contents">
                <span class="dots">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                    <path fill="#BE0C68"
                      d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                  </svg>
                </span>
                <span class="needs-assess">
                  If you need continence care support.
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="getIn-touch">
      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for domiciliary care in the comfort of your home?
            </h3>
          </div>

          <div class="contact">
            <span>
              <a class="phone-number" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="companionship" class="companionship-care">
      <!-- underline contents -->
      <div class="underline-wrap">
        <div class="underline-care">
          <h3 id="companionship">COMPANIONSHIP CARE & SUPPORT</h3>
        </div>
      </div>

      <p>
        Companionship care and support refer to the provision of emotional support, companionship, and assistance with
        daily activities
        for individuals who may be elderly, disabled, or otherwise in need of assistance. This type of care focuses on
        enhancing the
        quality of life and well-being of the individual by providing them with social interaction, emotional support,
        and
        assistance with
        tasks that they may find challenging due to age or disability.
      </p>
      <p>
        Overall, companionship care and support play a vital role in enhancing the quality of life, promoting
        independence, and ensuring
        the well-being of individuals who may require assistance with daily living activities. It fosters meaningful
        connections, reduces
        isolation, and provides a sense of security and companionship for those in need.
      </p>
      <div class="image-companionship">
        <div class="image">
          <img :src="wheelChairLady" alt="picture">
        </div>
        <div class="companionship">
          <div class="underline-wrap">
            <div class="companionship-care">
              <h3>What is companionship care
                and support?
              </h3>
              <h4>
                Here are some key aspects of companionship
                care and support
              </h4>
              <p>
                At Lovenest Home Care, our companionship care service pairs you
                or your loved one with a skilled care professional whose company you
                will genuinely enjoy. Companionship care is here to provide:
              </p>
              <p>
                <span> Engagement:</span> We actively assist you or your loved one in maintaining a
                lively lifestyle, promoting both mental and physical well-being.
              </p>
              <p>
                <span> Meaningful Social Interaction: </span>
                Enjoy the benefits of quality company
                and meaningful conversations, enhancing your daily life experience.
              </p>
              <p>
                <span>Confidence Building:</span> Providing support from home to the outside world,
                encouraging various forms of social participation.

              </p>
              <p>
                Activity Involvement: We support and encourage participation in both
                indoor and outdoor activities, tailored to individual interests and
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3>
        Why you should choose us for companionship care and
        support?
      </h3>
      <p>
        With our companionship care and support we go above and beyond basic care. Our care professionals are here to
        provide
        companionship that matters, a smiling face, and a listening ear, whether it be sharing a warm cup of tea,
        accompanying you to
        doctor visits, or going out for a leisurely lunch. Our carers will spend time with you participating in
        activities
        that you enjoy. From
        baking cakes, playing cards, to going for a walk, we ensure that the time spent with our care professionals is
        always an enjoyable
        experience. Companionship contributes to a better quality of life, can aid recovery and improves mental health.

        Choosing Beaumont Home Care for companionship care and support provides not just company, but also peace of
        mind.
      </p>
    </section>

    <div class="getIn-touch">
      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for Companionship care and support of your home?
            </h3>
          </div>
          <div class="contact">
            <span>
              <a class="phone-number" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="dementia" class="dementia-care">
      <div class="contents">
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>DEMENTIA CARE</h3>
          </div>
        </div>
        <p>
          Elderly care encompasses a broad range of services and support aimed at meeting the physical, emotional, and
          social needs of older
          At Lovenest Home Care, we understand the unique challenges and complexities that come with providing care for
          loved ones living
          with dementia. We are proud to specialise in dementia care, offering our expertise together with compassionate
          and tailored support
          to enhance quality of life for both our clients and their families.
        </p>
        <p>
          Dementia is a progressive condition that affects memory, thinking and behaviour. It requires a comprehensive
          and
          person-centred
          approach to ensure the well-being and safety of those living with dementia. Our specialised team of dedicated
          and highly trained
          care professionals are experienced in providing the highest standard of dementia care and understand the
          unique
          needs and
          challenges associated with the condition.
        </p>

        <div class="elder-dementia-care">
          <div class="elder">
            <img :src="DementiaI" alt="elder-picture">
          </div>
          <div class="important-care">
            <h3>What is Dementia care?
            </h3>
            <p>
              Dementia care refers to the specialized support and assistance provided to
              individuals diagnosed with dementia, a progressive neurological condition
              characterized by a decline in cognitive function, memory loss, and changes in
              behavior and personality. Dementia can have a significant impact on an
              individual's ability to perform daily tasks, communicate effectively, and
              maintain independence.
            </p>
            <p>
              Dementia care involves a comprehensive and person-centered approach that
              considers the individual's physical, emotional, and cognitive needs. It focuses
              on maintaining independence, promoting engagement and fostering a sense
              of purpose for individuals living with dementia. Our dementia care services
              can include various forms of assistance, such as personal care, medication
              management, cognitive stimulation, emotional support, safety and supervision,
              meal preparation and companionship.
              Our dementia care involves working closely with families, healthcare
              professionals and other support networks to ensure a coordinated and holistic
              care experience.
            </p>
          </div>
        </div>

        <h3>
          Why should you choose us for domiciliary care?
        </h3>
        <p>
          At Lovenest Home Care, we are specialists in dementia care. We have extensive experience and knowledge in
          providing
          personalized support to individuals living with dementia. Our care professionals undergo specialized training
          to
          understand the
          unique needs and challenges associated with the condition, ensuring that our clients receive the highest
          standards of care.
        </p>
        <p>
          Choosing Lovenest Home Care means choosing a trusted partner in dementia care. We are dedicated to making a
          positive
          difference in the lives of individuals living with dementia and for their families.
        </p>
      </div>
    </section>

    <div class="elderly-support">

      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for dementia care support?</h3>
          </div>

          <div class="icon-contact">

            <span>
              <a class="#" href="tel:++ 07931 918596">Schedule a call back</a>
            </span>

            <span>
              <a class="#" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="assistance" class="personal-assistance">
      <!-- underline contents -->
      <div class="underline-wrap">
        <div class="underline-care">
          <h3>PERSONAL ASSISTANT/CONCIERGE SERVICE</h3>
        </div>
      </div>

      <p>
        A personal assistant service typically involves providing support and assistance to individuals or businesses in
        managing various tasks
        and responsibilities. These services can range from administrative support to managing schedules, making travel
        arrangements,
        handling correspondence, and even personal tasks like grocery shopping or managing household affairs.
      </p>
      <div class="image-personal-assistance">
        <div class="image">
          <img :src="Frame3" alt="picture">
        </div>
        <div class="companionship">
          <div class="companionship-care">
            <h3>What is Personal assistant?
            </h3>
            <p>
              At Lovenest Home Care we are always looking at ways to make every day
              living just that little bit easier. From organizing and managing household
              bills, helping you set up technology (PC's,Iphones,Ipads, Zoom), running
              errands, scheduling appointments.
            </p>
            <p>
              Decluttering and organizing your home
              to managing home repairs or even gift shopping for a beloved family
              member - yes, we do that too! A personal Assistant helps you to find
              harmony and can relieve you of the burden of any administrative task you
              no longer desire or find difficult managing alone.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="getIn-touch">
      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for help with administrative tasks?
            </h3>
          </div>
          <div class="contact">
            <span>
              <a class="phone-number" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="pet" class="pet-care">
      <div class="contents">
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>PET CARE</h3>
          </div>
        </div>
        <p>
          Caring for your cherished pet can become challenging when you're unwell or have limited mobility. That's where
          our in-home pet care
          services come to the rescue. We understand that your pet is a cherished part of your family, and there are
          immense advantages to
          allowing them to remain in the familiar and loving environment of your own home.
        </p>
        <p>
          Our pet loving and dedicated team are here to support you and ensure that both you and your beloved pet can
          continue to enjoy each
          other's company. With our assistance, your pet can maintain the happy and healthy life you've always wished
          for
          them, all while
          providing you with the companionship and comfort you both need.
        </p>

        <div class="pet-image-care">
          <div class="pet-content">
            <h3>What is Pet care?
            </h3>
            <p>
              Certainly! Pet care involves a range of responsibilities to ensure the health,
              happiness, and well-being of your furry or feathered friend. Here are some
              essential aspects of pet care:
            </p>
            <p>
              Nutrition: Provide your pet with a balanced diet appropriate for their species,
              age, and health condition. Consult with a veterinarian to determine the best
              food options and feeding schedule.
            </p>
            <p>
              Hydration: Always ensure your pet has access to clean, fresh water. Hydration
              is crucial for their overall health and well-being.
            </p>
            <p>
              Exercise: Regular physical activity is important for maintaining your pet's
              weight, muscle tone, and mental stimulation. Take your dog for walks, play
              interactive games with your cat, or provide toys and activities for birds and
              small mammals.
            </p>
            <p>
              Grooming: Regular grooming helps keep your pet's coat or feathers clean and
              free of mats, reduces shedding, and prevents skin issues. This includes
              brushing, bathing, nail trimming, and dental care.
            </p>
          </div>
          <div class="pet-picture">
            <img :src="PetCare" alt="pet-picture">
          </div>
        </div>

        <h3>
          Why should you choose us for pet care?
        </h3>
        <p>
          In a few words…. because we simply adore pets, and you can be rest assured that your furry friend is in the
          safest of hands.
        </p>
      </div>
    </section>

    <div class="elderly-support">

      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for care for a cherished pet?</h3>
          </div>

          <div class="icon-contact">

            <span>
              <a class="#" href="tel:++ 07931 918596">Schedule a call back</a>
            </span>

            <span>
              <a class="#" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="life" class="life-care">
      <div class="contents">
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>END OF LIFE CARE</h3>
          </div>
        </div>
        <p>
          Personal care for elders is the support and supervision of daily personal living tasks and private hygiene and
          toileting, along with
          Facing a life limiting disease or illness both as a family or individual is hugely daunting and we know from
          our
          experience of
          supporting people who are nearing the end-of-life, how upsetting and distressing it can be for all the family.
        </p>
        <p>
          We also know that most people would prefer to be looked after in their own home supported by family and loved
          ones as they
          approach the end of their life. It is a very emotional time for all involved and requires a sensitive,
          compassionate and respectful
          approach to care.
        </p>
        <p>
          Our experienced end-of-life care team are trained to help and support you every step of the way. Working
          alongside other health
          professionals allows us to support you with the effective management of any symptoms a person may be
          experiencing, whilst
          also supporting emotional and psychological needs during the last few months and weeks of life.
        </p>
        <div class="life-care-image">
          <div class="lady">
            <img :src="Frame2" alt="lady-picture">
          </div>
          <div class="life-content">
            <h3>What is end of life care?
            </h3>
            <p>
              End-of-life care refers to the support and medical care provided to individuals
              who are in the final stages of a terminal illness or nearing the end of their lives.
              The goal of end-of-life care is to ensure that individuals experience comfort,
              dignity, and quality of life during their remaining time. It involves addressing
              physical, emotional, social, and spiritual needs, as well as supporting the
              individual's family and caregivers.
            </p>
            <p>
              End of life care is a compassionate and supportive approach to caring for
              individuals who are in the final stages of their life. It focuses on providing
              comfort, dignity, and emotional support for both the individual and their loved
              ones during this emotional time. End of life care aims to provide the highest
              possible quality of life for the individual and offers emotional and spiritual
              support, helping patients and their families navigate the emotional and
              spiritual aspects of the end-of-life journey. Our dedicated and empathetic
              care professionals provide personalized care, ensuring that the individuals
              physical, emotional and spiritual needs are met with compassion and respect.
            </p>
          </div>
        </div>

        <h3>
          Why choose us?
        </h3>
        <p>
          Our end-of-life team are highly trained and skilled in delivering personalized care that meets the unique
          needs
          of each individual we
          care for. Choosing Beaumont Home Care means choosing a compassionate and reliable partner in your end-of-life
          journey.
          We are committed to making a positive difference in your life and providing support you need to feel safe,
          comfortable and cared
          for.
        </p>
      </div>
    </section>

    <div class="getIn-touch">
      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for compasionate end-of-life care?
            </h3>
          </div>
          <div class="contact">
            <span>
              <a class="phone-number" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="palliative" class="palliative-care">
      <div class="contents">
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>PALLIATIVE CARE</h3>
          </div>
        </div>
        <p>
          Palliative care is specialized medical care that focuses on providing relief from pain and other symptoms of a
          serious illness. It also can
          help you cope with side effects from medical treatments. The availability of palliative care does not depend
          on
          whether your condition
          can be cured.
        </p>
        <p>
          Palliative care teams aim to provide comfort and improve quality of life for people and their families. This
          form of care is offered
          alongside other treatments a person may be receiving.
        </p>
        <p>
          Palliative care is provided by a team of health care providers, including doctors, nurses, social workers,
          chaplains and other trained
          specialists. The team works with you, your family and your other providers to add an extra layer of support
          and
          relief that complements
          your ongoing care.
        </p>

        <div class="palliative-image-care">
          <div class="palliative-content">
            <h3>What is Palliative care?
            </h3>
            <p>
              Palliative care is a specialized medical care approach focused on improving
              the quality of life of individuals facing serious illnesses. Its goal is to provide
              relief from the symptoms, pain, and stress of the illness, regardless of the
              diagnosis or stage of the disease. Palliative care is provided by a team of
              healthcare professionals, including doctors, nurses, social workers, chaplains,
              and other specialists, who work together to address the physical, emotional,
              social, and spiritual needs of patients and their families.

            </p>
            <p>
              Palliative care can be provided alongside curative treatments and is not
              limited to end-of-life care. It is appropriate at any stage of illness and can be
              integrated into the patient's overall treatment plan. Palliative care focuses on
              enhancing comfort, managing symptoms such as pain, nausea, and
              shortness of breath, improving communication between patients and their
              healthcare providers, and helping patients and their families navigate
              complex medical decisions.
            </p>
            <p>
              In addition to symptom management, palliative care also addresses
              psychological and emotional aspects of illness, including depression, anxiety,
              and existential distress. It provides counseling and support to patients and
              families, helping them cope with the challenges of serious illness and
              end-of-life issues.
            </p>
          </div>
          <div class="palliative-picture">
            <img :src="Frame4" alt="palliative-picture">
          </div>
        </div>

        <h3>
          Why should you choose us for palliative care?
        </h3>
        <p>
          When faced with a life limiting disease or illness, we understand that most people would prefer to remain at
          home where they feel
          comfortable and in control.
        </p>
        <p>
          It is an emotional time for all involved and we're here to support your loved one and family through our
          bespoke palliative care at home services.
          At Beaumont Home Care we understand the unique needs and challenges faced by individuals and families dealing
          with serious
          illness.
        </p>
        <p>
          Our compassionate and experienced care professionals are trained in providing specialised palliative care,
          focusing on personal
          care, emotional support and enhancing quality of life.
        </p>
      </div>
    </section>

    <div class="getIn-touch">
      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Find out more information or find a palliative carer today?
            </h3>
          </div>
          <div class="contact">
            <span>
              <a class="phone-number" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="hospital" class="hospital-care">
      <div class="contents">
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>HOSPITAL TO HOME CARE</h3>
          </div>
        </div>
        <p>
          Hospital to home care involves ensuring that an appropriate level of support is in place to help older people
          return home after a
          hospital stay. Typically, hospital discharge will only be able to take place if the elderly person returning
          home can do so safely
          with the right care in place and we are here to enable this. It is particularly important for people living
          with
          a cognitive impairment
          such as dementia to return home as soon as possible since the unfamiliar environment of a hospital can cause
          added confusion
          or disorientation.
        </p>
        <p>
          At Lovenest Home Care we can offer a range of hospital discharge care options at short notice. This may
          involve
          hourly care, night
          care or even 24-hour live-in care. Our hospital to home care service is flexible and can often be provided on
          either a short-term
          or long-term basis to help a client with rehabilitation and recovery until they feel confident and able to
          cope
          on their own once
          more.
        </p>
        <div class="life-care-image">
          <div class="lady">
            <img :src="Frame2" alt="lady-picture">
          </div>
          <div class="life-content">
            <h3>What is hospital to home care?
            </h3>
            <p>
              The decision to transition into a care home following a hospital stay or to return
              to the familiar surroundings of your own home should be based around the
              wishes of the patient and their individual needs. Many elderly people prefer to
              discharge into their own home with the support of a professional home care
              team where their care can be individually tailored to their specific needs, often
              involving specialist input from health professionals such as a District Nurse,
              physiotherapist or occupational therapist.
            </p>
            <p>
              This can be on an hourly care basis where carers will come at various times
              during the day, or a full-time live-in care basis to ensure support around the
              clock. There are many benefits to recovering in your own home including a
              smoother transition, familiarity, confidence, tailored activities and more
              personalized one-to-one care.
            </p>
            <p>
              If you are going into hospital for a planned procedure, deciding what will
              happen upon your discharge should take place before you go into hospital. If
              you are in hospital for an unplanned admission, it is important that discharge
              planning takes place from the day of your arrival.
            </p>
          </div>
        </div>

        <h3>
          Why should you choose us for hospital to home care?
        </h3>
        <p>
          Our end-of-life team are highly trained and skilled in delivering personalized care that meets the unique
          needs
          of each individual we
          We are able to provide support with hospital discharge at short notice on an emergency basis or following a
          scheduled hospital visit
          for planned operations such as hip replacement or major surgery. Our specialist home care management team will
          work closely with
          you, your family and other healthcare professionals involved to ensure you are able to enjoy a safe and prompt
          return to the comfort
          and familiarity of your own home. This may include working alongside the Discharge Team, occupational
          therapists, social services,
          doctors and District Nurses.
        </p>
        <p>
          We are able to carry out a free assessment of your needs in the hospital and or upon your return home which
          will
          be used to agree
          with you how you wish to be supported at home.This often involves help with recuperation,convalescence and
          rehabilitation for
          which our team of professional home carers are able to work closely with physiotherapists, occupational
          therapists, District Nurses
          and other healthcare professionals.
        </p>

        <div class="consider-hospital">
          <h3>
            When to consider hospital to home care?
          </h3>
          <div class="paragraph-dots">
            <div class="contents-dots">
              <div class="contents">
                <span class="dots">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                    <path fill="#BE0C68"
                      d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                  </svg>
                </span>
                <span class="needs-assess">
                  In need of practical help or advice about returning home after leaving hospital
                </span>
              </div>

              <div class="contents">
                <span class="dots">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                    <path fill="#BE0C68"
                      d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                  </svg>
                </span>
                <span class="needs-assess">
                  Currently an in-patient in hospital seeking to return home immediately after being discharged
                </span>
              </div>

              <div class="contents">
                <span class="dots">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                    <path fill="#BE0C68"
                      d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                  </svg>
                </span>
                <span class="needs-assess">
                  Due to be admitted to hospital and will require support after they have been discharged
                </span>
              </div>

              <div class="contents">
                <span class="dots">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                    <path fill="#BE0C68"
                      d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                  </svg>
                </span>
                <span class="needs-assess">
                  Already at home and in need of extra support following a recent stay in hospital
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="getIn-touch">
      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for compasionate end-of-life care?
            </h3>
          </div>
          <div class="contact">
            <span>
              <a class="phone-number" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="overnight" class="overnight-care">
      <div class="contents">
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>OVERNIGHT CARE</h3>
          </div>
        </div>
        <p>
          Have additional needs overnight, require 24-hour care or become more anxious during the
          early hours by themselves. A private carer will help with any support needs that would otherwise occur during
          the day, such as assisting
          with personal care, administering medication, helping you to and from the toilet and ensuring you have a safe
          night's sleep.
        </P>
        <p>
          Overnight care is specifically for those that
          Care during the night is suitable for anyone in need of extra support overnight - whether they have a spinal
          injury and need help turning
          safely in bed, or if they have dementia and regularly wake throughout the night.
        </p>

        <div class="lady-elderly-care">
          <div class="lady">
            <img :src="Frame2" alt="lady-picture">
          </div>
          <div class="important-care">
            <h3>What is the importance
              of overnight care?
            </h3>
            <p>
              Care may be required at any time, day or night, which is why it's important to
              consider your overnight support if you're living with a long-term health
              condition or have complex care needs.
            </p>
            <p>
              Things can seem more difficult at night and it's a time when we typically turn
              things over in our minds, dwelling on what's happened and what will happen
              in the future. Overnight care, also known as sleep-in care, is designed for
              those who need help before bedtime and upon waking with activities like
              dressing, preparing breakfast or taking bedtime medication. Sleep-in care
              provides proactive support for those with changing needs.
            </p>

            <div class="paragraph-dots">
              <div class="contents-dots">
                <h4>Overnight care can be delivered in one of three ways:
                </h4>
                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Sleeping night
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Sitting service
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Waking night
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
        <h3>
          Why should you choose overnight care?
        </h3>
        <p>
          Elderly individuals experiencing difficulty with daily activities due health difficulties, mobility issues, or
          loneliness may find assistance.
          Our dedicated team of care professionals work through the night so that you can feel safe, cared for and
          supported by either of our
          'Sleeping Night' service or our 'Waking Night' service.
        </p>
        <p>
          Whether you're elderly, under the weather, or just in need of extra help during the night, our overnight care
          is
          here for you. From
          medication reminders to bathroom assistance, or simply a reassuring presence, we make nights easier and safer.
        </p>
        <p>
          We know how crucial it is for you or your loved one to feel secure and well-supported at home, regardless of
          the
          hour. That's why our
          expert care professionals are on hand to offer overnight care, customised to your specific needs. Whether you
          require a sleep-in
          service or a waking night service, our flexible overnight options ensure you get the care and peace of mind
          you
          deserve.
        </p>
      </div>
    </section>

    <div class="elderly-support">
      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for overnight care at home?</h3>
          </div>

          <div class="icon-contact">

            <span>
              <a class="#" href="tel:++ 07931 918596">Schedule a call back</a>
            </span>

            <span>
              <a class="#" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="couples" class="couples-care">
      <div class="contents">
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>LIVE-IN CARE FOR COUPLES</h3>
          </div>
        </div>
        <p>
          With live-in care, one of our wonderful carers will come to stay with you in your home and provide you with
          constant support and companionship at all times. Your carer can assist in virtually any way you wish - whether
          that's keeping on top of the housework, helping you with mobility, accompanying you out and about or enabling
          you to maintain your favourite hobbies and activities.
          Live-in care is ideal for couples who wish to remain living together when one or both of you require
          additional
          support but do not wish to move into residential care.
        </p>
        <p>
          When faced with the realisation that one or both of you needs additional support, it can be a worrying time
          for
          you and your family. Perhaps one of you is becoming too frail to care adequately and safely for the other, or
          one of you is living with a condition such as dementia or Parkinson's or requires care following a stroke or
          with cancer. We know from our experience the overriding concern for couples in this situation is that they
          will
          be separated if they go into a residential care home and will no longer have the privacy and choice you are
          used
          to.
        </p>
        <p>
          Live-in care is fast becoming the preferred alternative for those who need care and support, but do not want
          the
          upheaval and disruption that moving out of a much-loved family home into residential care brings.
        </p>

        <div class="couples-image-care">
          <div class="couples-content">
            <h3>What is live-in care for couples?
            </h3>
            <p>
              Live-in care for couples typically involves a caregiver providing support
              and assistance to both members of the couple within the comfort of
              their own home. This type of care arrangement is beneficial for couples
              who wish to remain together and receive personalized care tailored to
              their specific needs.
            </p>
            <h4>
              Here are some key aspects of live-in care for
              couples
            </h4>
            <p>
              <span>Personalized Care: </span> Live-in caregivers provide personalized care based
              on the unique needs and preferences of each individual in the couple.
              This can include assistance with activities of daily living,
              medication management, meal preparation, light housekeeping, and
              companionship.
            </p>
            <p>
              <span>24/7 Support: </span> With live-in care, couples have access to support around
              the clock. Caregivers are available to assist with any needs that may
              arise during the day or night, providing peace of mind for both the
              individuals and their families.
            </p>
            <p>
              <span>Promotes Independence: </span> Live-in care aims to promote independence
              while ensuring safety and well-being. Caregivers encourage couples
              to remain as independent as possible while offering assistance when
              needed, helping them maintain a sense of dignity and autonomy.
            </p>
            <p>
              <span>Companionship:</span> Beyond practical assistance, live-in caregivers offer
              companionship and emotional support to the couple. They engage in
              meaningful conversations, participate in activities together, and
              provide emotional encouragement, which can significantly enhance
              the quality of life for the individuals involved.
            </p>
          </div>
          <div class="couples-picture">
            <img :src="Frame5" alt="couples-picture">
          </div>
        </div>

        <h3>
          Why you should choose us for live-in care for couples?
        </h3>
        <p>
          At Lovenest Home Care we understand the unique needs and dynamics of couples requiring care. Our experienced
          care
          professionals are trained to provide personalised care that caters to the individual needs of each client
          within
          the couple.
        </p>
        <p>
          Our compassionate staff create a nurturing environment that promotes well-being and happiness for both
          individuals, whilst also
          being mindful to give privacy.
        </p>

        <p>
          With Beaumont Home Care, you can trust that you and your partner will receive the highest level of care,
          allowing you to continue
          enjoying your lives together.
        </p>
      </div>
    </section>

    <div class="getIn-touch">
      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for expert live-in care for couples at home?
            </h3>
          </div>
          <div class="contact">
            <span>
              <a class="phone-number" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="live" class="live-in-care">
      <div class="contents">
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>LIVE-IN CARE </h3>
          </div>
        </div>
        <p>
          Live-in care offers you the opportunity to have one of our compassionate, expertly trained carers live with
          you
          in your own home,
          supporting you at any time of day or night.Live-in care is ideal for anyone who requires continuous care and
          prefer to remain in the
          comfort and familiarity of their own home.
        </p>
        <p>
          Not only will your live-in carer be able to provide you with practical and personal care, but they can also be
          a
          wonderful source of
          companionship and emotional support. All our live-in carers are hand selected for their kind, empathetic,
          personalities, and moral core
          values.
        </p>

        <div class="wheelchair-live-in-care">
          <div class="wheelchair-picture">
            <img :src="DementiaI" alt="elder-picture">
          </div>
          <div class="important-care">
            <h3>What is Live-in care?
            </h3>
            <p>
              Live-in care means having a fully-trained carer living with you in your own
              home. Your live-in carer will be available to support you with any specific
              needs to keep you comfortable and independent at home. Our live-in carers
              and companions help with: personal care and specialist medical care, and
              dietary and nutritional needs.
            </p>
            <p>
              One of the main attractions of live-in care is that it encompasses a wide
              range of care services, meaning you and your family can have full assurance
              that you're getting the support you need and want.
            </p>
            <p>
              Live-in care is a form of home care where a caregiver resides with the
              individual receiving care in their own home, providing around-the-clock
              assistance and support. This type of care is often chosen by individuals who
              prefer to remain in familiar surroundings and maintain independence while
              receiving the assistance they need with daily activities.
            </p>
          </div>
        </div>

        <h3>
          Why should you choose us for live-in care?
        </h3>
        <p>
          Choosing Beaumont Home Care for live-in care means choosing a trusted and reliable provider that is committed
          to
          delivering
          exceptional care and support. Our team of highly trained and compassionate live-in care professionals are
          experienced in
          providing live-in care services, ensuring that the individuals we care for receive personalised and
          comprehensive support in the
          comfort of their own home.
        </p>
        <p>
          Beaumont Home Care can assist with everything from routine housework, cooking, and companionship to personal
          care and more
          specialised needs. We have an exceptionally dedicated live-in care team available ready to provide
          round-the-clock assistance
          with activities of daily living, medication management, companionship, and more.
        </p>
      </div>
    </section>

    <div class="elderly-support">

      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for expert live-in care at home?</h3>
          </div>

          <div class="icon-contact">

            <span>
              <a class="#" href="tel:++ 07931 918596">Schedule a call back</a>
            </span>

            <span>
              <a class="#" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="respite" class="respite-care">
      <div class="contents">
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>RESPITE CARE</h3>
          </div>
        </div>
        <p>
          Companionship care and support refer to the provision of emotional support, companionship, and assistance with
          daily activities
          You don't have to shoulder all the care responsibilities alone. Our care professionals can help care for your
          loved one whilst you have a well-deserved break, keep an appointment, enjoy a holiday or attend a special
          occasion. To enable you to care for a loved one it's important to look after your own well-being too, and with
          our respite care service you can be confident that your loved one is safe, happy and well cared for at home.
        </p>
        <p>
          We recognise and understand that occasionally care givers need a break to take care of themselves, celebrate a
          special event or to go on holiday. This is where our respite carers can be of assistance. Our respite carers
          make it possible for primary care givers to take some time to themselves, with the comfort and reassurance
          that
          they are in safe hands
        </p>

        <div class="respite-image-care">
          <div class="respite-picture">
            <img :src="Frame5" alt="respite-picture">
          </div>
          <div class="respite-content">
            <h3>What is respite care ?
            </h3>
            <p>
              Respite care is a form of temporary caregiving designed to provide
              relief for primary caregivers, whether family members or professional
              caregivers, who need a break from their caregiving responsibilities. It
              offers caregivers the opportunity to rest, attend to personal matters, or
              simply recharge while ensuring that their loved ones continue to
              receive proper care and support.
            </p>
            <h4>
              Here are some key aspects of respite care
            </h4>
            <p>
              <span>Engagement:</span> We actively assist you or your loved one in maintaining a
              Temporary Relief: Respite care provides short-term relief for primary
              caregivers. It can range from a few hours to several days or weeks,
              depending on the needs and preferences of the caregiver and the care
              recipient.
            </p>
            <p>
              <span> Varied Settings:</span> Respite care can be provided in various settings,
              including the individual's home, residential care facilities, adult day
              centers, or specialized respite care facilities. The setting chosen often
              depends on the level of care needed and the availability of resources.
            </p>
            <p>
              <span> Professional Caregivers:</span> Respite care may be provided by trained
              professionals, such as home health aides, nurses, or staff at respite
              care facilities. These caregivers are equipped to meet the specific
              needs of the care recipient, including assistance with activities of daily
              living, medication management, and companionship.
            </p>
            <p>
              <span>Flexibility:</span> Respite care services are flexible and can be tailored to meet
              the unique needs of both the caregiver and the care recipient.
              Caregivers can schedule respite breaks as needed, whether for a few
              hours during the day, overnight, or for an extended period.
            </p>
          </div>
        </div>

        <h3>
          Why choose us for respite care?
        </h3>
        <p>
          At Lovenest Home Care, we have extensive experience in providing respite care services. Our care professionals
          are trained and
          experienced in supporting individuals and their families during periods of respite. We also understand the
          unique challenges and
          needs that arise during respite care and are equipped to provide the highest level of support.
        </p>
        <p>
          Choosing Lovenest Home Care for respite care means choosing a reliable and compassionate partner who
          understands
          the
          unique needs of both the individual receiving care and their family. We are dedicated to providing
          personalised,
          high-quality
          respite care that allows you to take a break whilst ensuring the well-being and comfort of your loved one.
        </p>
      </div>
    </section>

    <div class="getIn-touch">
      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for respite care in the comfort of your home?
            </h3>
          </div>
          <div class="contact">
            <span>
              <a class="phone-number" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="complex" class="complex-care">
      <div class="contents">
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>COMPLEX CARE</h3>
          </div>
        </div>
        <p>
          Elderly care encompasses a broad range of services and support aimed at meeting the physical, emotional, and
          social needs of older
          Complex care is a type of healthcare and support given to people who have chronic or long-term health
          conditions
          who need extra
          help to manage their symptoms and daily tasks. Examples of such conditions include neurological disorders,
          disabilities, injuries, and
          sometimes the use of feeding tubes.
        </p>
        <p>
          Complex care differs from general domiciliary care because it usually involves medical intervention of some
          sort, and can also be
          provided if someone requires nursing care.
        </p>
        <p>
          Living with an existing health condition or a new condition that involves specialist or complex care can be
          stressful, daunting and
          distressing.
        </p>
        <p>
          At Lovenest Home Care we provide a range of specialist home care services for a variety of circumstance. Our
          specialist and expert
          home care is all about tailoring the service to the individual; we listen, as to ensure we provide complete
          person-centred care at all
          times.
        </p>

        <div class="complex-support-plan">
          <div class="complex-support">

            <div class="underline-wrap">
              <div class="making-preparation">
                <h3>What goes into a complex
                  support plan?
                </h3>
              </div>
            </div>
            <h4>
              A complex care plan offers a comprehensive
              solution to support your health needs.
            </h4>
            <p>
              A complex care support plan will include all of the details relating to an
              individual's health care needs, including any diagnosis that they may have,
              and the treatment required.
            </p>
            <p>
              Written in first person, a support plan is centred around the individual and
              their wishes, and will include important information such as their next of kin
              and other medical professionals involved in their care.
            </p>
            <p>
              <span>
                Our care professionals are trained extensively to support clients living with
                complex conditions such as:
              </span>
            </p>

            <div class="paragraph-dots">
              <div class="contents-dots">
                <h4>Overnight care can be delivered in one of three ways:
                </h4>
                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Dementia
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Cancer
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Dementia
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Alzheimer's
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Spinal cord injury
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Diabetes
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Epilepsy
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Acquired Brain Injury
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Parkinson Disease
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Stroke
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Huntingdon's Diseas
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Multiple Sclerosis
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Arthritis
                  </span>
                </div>

              </div>
            </div>

          </div>
          <div class="picture">
            <img :src="Complex" alt="complex-picture">
          </div>
        </div>

        <div class="complex-home">

          <div class="picture">
            <img :src="Frame6" alt="complex-picture">
          </div>
          <div class="complex-support-content">

            <div class="underline-wrap">
              <div class="making-preparation">
                <h3>What is complex home care?
                </h3>
              </div>
            </div>
            <p>
              Specialist home care, also referred to as complex care, is tailor-made
              assistance provided to those living with an on-going health condition
              or a new diagnosis. With the help of Beaumont's specialist home care
              team, a custom-made approach is adopted to ensure both the needs
              and wants of the client will not only be met but surpassed.
            </p>
            <p>
              In the past, a hospital or nursing home would have been the only option
              available for specialist care, but it is now common practice for
              individuals to be cared for in the comfort of their own home, which is
              why many families now are opting for specialist home care services.
            </p>
            <p>
              Our committed team of specialised home care experts offer an
              unrivalled service, and we firmly believe that having a specialist
              condition shouldn't impair anybody's wellbeing, and we will make every
              effort to help each and every client lead an independent and rewarding
              life.
            </p>
            <h4>
              Our care professionals can offer help and
              support for:
            </h4>

            <div class="paragraph-dots">
              <div class="contents-dots">
                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Companionship and emotional support.
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Continence care
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Getting dressed
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Bathing, showering and support with oral care
                  </span>
                </div>

                <div class="contents">
                  <span class="dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                      <path fill="#BE0C68"
                        d="M8 4c.367 0 .721.048 1.063.145a3.943 3.943 0 0 1 1.762 1.031a3.944 3.944 0 0 1 1.03 1.762c.097.34.145.695.145 1.062c0 .367-.048.721-.145 1.063a3.94 3.94 0 0 1-1.03 1.765a4.017 4.017 0 0 1-1.762 1.031C8.72 11.953 8.367 12 8 12s-.721-.047-1.063-.14a4.056 4.056 0 0 1-1.765-1.032A4.055 4.055 0 0 1 4.14 9.062A3.992 3.992 0 0 1 4 8c0-.367.047-.721.14-1.063a4.02 4.02 0 0 1 .407-.953A4.089 4.089 0 0 1 5.98 4.546a3.94 3.94 0 0 1 .957-.401A3.89 3.89 0 0 1 8 4" />
                    </svg>
                  </span>
                  <span class="needs-assess">
                    Repositioning in bed (with or without equipment)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3>
          Who would benefit from elderly care services?
        </h3>
        <p>
          Our team of care professionals are not just highly trained; they're specialised in making life at home more
          manageable and
          enjoyable. With specialised training in dementia, Alzheimer's, and Parkinson's care to advanced clinical
          support
          such as catheter and
          stoma care, our staff receive their knowledge from medical experts and undergo consistent checks to ensure
          their
          skills remain up to
          date.
        </p>
        <p>
          What sets our service apart is our emphasis on a bespoke approach. We match our care professionals with
          clients
          based on not only
          skill set but also personality and individual characteristics. This ensures that our home care services are
          not
          just proficient but also
          highly personalised, enabling our clients to enjoy a fulfilling life in the comfort of their own home.
        </p>
      </div>

    </section>

    <div class="elderly-support">

      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>Looking for overnight care at home?</h3>
          </div>

          <div class="icon-contact">

            <span>
              <a class="#" href="tel:++ 07931 918596">Schedule a call back</a>
            </span>

            <span>
              <a class="#" href="#">Get in touch</a>
            </span>

          </div>
        </div>
      </div>
    </div>

    <section id="stroke" class="stroke-care">
      <div class="contents">
        <div class="underline-wrap">
          <div class="making-preparation">
            <h3>STROKE CARE</h3>
          </div>
        </div>
        <p>
          Our Home Care for Stroke service enables you or your loved one to remain at home following a stroke through
          high
          quality support. If
          you or your loved one has had a stroke, everyday tasks can often become more difficult and you may find
          additional support at home
          is needed.
        </p>
        <p>
          We understand the challenges a stroke can bring, not just for you but also your loved ones. At Alina Homecare,
          we can help with all
          aspects of Stroke Care at Home, from overcoming difficulties with mobility, to communication and emotional
          support.
        </p>
        <p>
          After Stroke Home Care allows you or your loved one to remain in the familiarity of the home. Our dedicated
          Care
          Workers are highly
          trained to help people who have had a stroke to live as independently as possible.
        </p>

        <div class="stroke-image-care">
          <div class="stroke-content">
            <h3>What is Stroke care?
            </h3>
            <p>
              Stroke care refers to the medical treatment and support provided to
              individuals who have experienced a stroke, which is a medical emergency that
              occurs when blood flow to the brain is interrupted or reduced. Stroke care
              involves a multi-disciplinary approach aimed at preventing further brain
              damage, promoting recovery, and reducing the risk of future strokes. Here are
              some key aspects of stroke care:
            </p>
            <p>
              <span>Emergency Response: </span> Recognizing the signs of a stroke and seeking
              immediate medical attention is crucial. The acronym FAST is often used to help
              people identify stroke symptoms:

            <ul>
              <li> F: Face drooping</li>
              <li> A: Arm weakness</li>
              <li> S: Speech difficulty</li>
              <li> T: Time to call emergency services</li>
            </ul>
            </p>
            <p>
              <span>Medical Assessment and Diagnosis: </span>
              Once a person arrives at the hospital,
              healthcare professionals will conduct a series of tests to diagnose the type of
              stroke (ischemic or hemorrhagic) and determine its severity.
            </p>
            <p>
              <span>Acute Treatment:</span> Acute treatment for ischemic strokes often involves
              administering clot-busting medications such as tissue plasminogen activator
              (tPA) or performing mechanical thrombectomy to remove the clot.
              Hemorrhagic strokes may require surgery to repair blood vessel abnormalities
              or to relieve pressure on the brain.
            </p>
            <p>
              <span>Monitoring and Support: </span> Stroke patients require close monitoring of vital signs,
              neurological status, and other parameters to prevent complications such as
              brain swelling, pneumonia, or infections. Supportive care may include oxygen
              therapy, fluids, and medications to manage symptoms and prevent
              complications.
            </p>
            <p>
              <span> Rehabilitation: </span> Stroke rehabilitation aims to help patients regain lost abilities
              and improve their quality of life. It may include physical therapy, occupational
              therapy, speech therapy, and cognitive therapy tailored to the individual's
              needs and goals.
            </p>

          </div>
          <div class="stroke-picture">
            <img :src="Frame5" alt="stroke-picture">
          </div>
        </div>

        <h3>
          Why should you choose us for Stroke care?
        </h3>
        <p>
          A stroke impacts people in different ways, depending on various factors such as the location of where the
          brain
          is damaged and its
          severity. It also depends on the type of stroke. An Ischemic stroke is caused by a blockage in the brain's
          blood
          supply whereas a
          haemorrhagic stroke is caused by bleeding in or around the brain. This is why we listen to the needs of you or
          your loved one and
          tailor our care to suit your specific needs and requirements.
        </p>
        <p>
          Choosing Lovenest Home Care after a stroke is a big decision with the emotional impact a stroke can bring,
          familiarity and
          consistency are vital factors to consider.
        </p>
        <p>
          Whatever you or your loved one need to manage the everyday impact of a stroke, we can help.
        </p>
      </div>
    </section>

    <div class="elderly-support">

      <div class="call-us">
        <div class="call-contact">
          <div>
            <h3>
              Looking for assistance with stroke care?
            </h3>
          </div>

          <div class="icon-contact">

            <span>
              <a class="#" href="tel:++ 07931 918596">Schedule a call back</a>
            </span>

            <span>
              <a class="#" href="#">Get in touch</a>
            </span>

          </div>
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
.care-service-wrap {

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

  span {
    font-family: Montserrat;
    font-size: 18px !important;
  }

  P {
    font-family: Montserrat;
    font-size: 18px;
    line-height: 30px !important;
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

  .contents-dots {
    color: #00000080;
  }

  &>.banner {
    background-image: url('../../assets/images/Care_Service/careServiceBanner.png');
    // border: 5px solid red;
    display: flex;
    align-items: center;
    height: 400px;
    padding: 60px 40px;
    background-repeat: no-repeat;
    background-size: cover;

    &>.intro-content {
      // border: 12px solid red;
      padding: 10px 20px;
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
              margin-bottom: 20px;
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

  // <!-- Second Underline============== -->
  //     <!-- underline contents -->
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
        font-weight: 700;
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

  &>.paragraph-dots {
    // border: 11px solid red;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    margin-bottom: 30px;

    &>.para {
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        padding-bottom: 30px;
        color: #00000080;
        text-align: center;
      }
    }

    &>.contents-dots {
      // border: 12px solid blue;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      column-gap: 30px;
      row-gap: 10px;

      .contents {
        // border: 1px solid rgba(0, 0, 0, 0.070);
        border-radius: 8px;
        width: calc((100% / 4) - 33px);
        display: flex;
        flex-wrap: wrap;
        padding: 8px 0;

        span {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .call-us-wrap {
    // border: 12px solid red;
    background-color: $base-color-1;
    padding: 0 20px;

    &>.call-contact {
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

      &>.icon-contact {
        // border: 11px solid red;
        background-color: #fff;
        border-radius: 20px;
        color: $base-color;
        display: flex;
        align-items: center;
        justify-content: center;
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
          color: $base-color-1;
          font-weight: 700;
        }
      }
    }
  }

  &>.elderly-care {
    &>.contents {
      // border: 2px solid red;
      padding: 20px 20px;

      &>.underline-wrap {
        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            // border: 4px solid red;
            position: relative;
            font-size: 30px;
            font-weight: 700;
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
        // border: 2px solid red;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.lady-elderly-care {
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        padding: 30px 0;

        &>.lady {
          img {
            width: 500px;
          }
        }

        &>.important-care {
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

              .contents {
                // border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 2) - 17px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;

                span {
                  display: flex;
                  align-items: center;
                }
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

  // Looking for elderly care support? component just below the elderly care with image of an advance lady

  &>.elderly-support {
    background-color: $base-color-2;

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
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 30px;

          span {
            // border: 11px solid red;
            border-radius: 20px;
            background-color: #fff;
            padding: 10px 20px;


            a {
              // border: 11px solid red;
              text-decoration: none;
              color: $base-color-1 !important;
              font-size: 16px;
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

  &>.personal-care {
    // border: 11px solid red;
    padding: 0 20px;

    &>.underline-wrap {
      &>.underline-care {
        // border: 3px solid red;
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          position: relative;
          font-size: 30px;
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
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
    }

    &>.image-supporting {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      &>.image {
        img {
          width: 550px;
        }
      }

      &>.supporting {
        width: 600px;

        &>.underline-wrap {
          &>.supporting-care {
            display: flex;
            justify-content: center;
            flex-direction: column;

            // border: 4px solid red;
            h3 {
              position: relative;
              font-size: 30px;
              line-height: 48px;
              letter-spacing: 0em;
            }

            h3::after {
              border-bottom: 2px solid $base-color-1;
              left: 0%;
              width: 50%;
            }
          }
        }

        h4 {
          width: 450px;
          color: $base-color-2;
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

    &>.choose-image {
      // border: 4px solid red;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 30px 0;

      &>.content {
        width: 600px;

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

      &>.image {
        img {
          width: 550px;
          height: 650px;
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
        color: $base-color-1;
        font-size: 20px;
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
        color: $base-color-2;

        .contents {
          // border: 1px solid rgba(0, 0, 0, 0.070);
          // border: 2px solid red;
          border-radius: 8px;
          width: calc((100% / 3) - 25px);
          padding: 8px 0;

          &>.dots {
            &>.dots-span {
              // border: 2px solid red;
              display: flex;
              align-items: center;
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
      padding: 10px 20px;

      &>.call-contact {
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

        &>.contact {
          // border: 11px solid red;
          background-color: #fff;
          border-radius: 20px;
          color: $base-color;
          display: flex;
          align-items: center;
          justify-content: center;
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
            color: $base-color-1;
            font-weight: 700;
          }
        }
      }
    }
  }

  &>.domiciliary-care {

    &>.domiciliary {
      padding: 0 20px;

      &>.underline-domiciliary {
        padding: 0 20px;

        &>.making-preparation {
          display: flex;
          justify-content: center;

          // border: 4px solid red;
          h3 {
            position: relative;
            font-size: 30px;
            font-weight: 700;
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

      &>.image-domiciliary {
        // border: 2px solid red;
        padding: 30px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 550px;
            height: 550px;
          }
        }

        &>.demociliary {
          width: 600px;

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
      }

      &>.why-domiciliary {
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

            .contents {
              // border: 1px solid rgba(0, 0, 0, 0.070);
              border-radius: 8px;
              width: calc((100% / 1) - 17px);
              display: flex;
              flex-wrap: wrap;
              padding: 8px 0;

              span {
                display: flex;
                align-items: center;
              }
            }
          }
        }
      }
    }
  }

  &>.companionship-care {
    // border: 1px solid red;
    padding: 0 20px;
    padding-bottom: 20px;

    &>.underline-wrap {
      &>.underline-care {
        // border: 3px solid red;
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          position: relative;
          font-size: 30px;
          font-weight: 700;
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
          border-radius: 10px;
        }
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
      justify-content: space-between;

      &>.image {
        img {
          width: 550px;
        }
      }

      &>.companionship {
        width: 600px;

        &>.underline-wrap {
          &>.companionship-care {
            display: flex;
            justify-content: center;
            flex-direction: column;

            // border: 4px solid red;
            h3 {
              position: relative;
              font-size: 30px;
              line-height: 30px;
              letter-spacing: 0em;
            }
          }
        }

        h4 {
          width: 450px;
          color: $base-color-2;
          font-size: 18px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0em;
        }

        p {
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;

          span {
            color: $base-color-2;
            font-weight: 500;
          }
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

  &>.dementia-care {
    &>.contents {
      // border: 2px solid red;
      padding: 20px 20px;

      &>.underline-wrap {
        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            // border: 4px solid red;
            position: relative;
            font-size: 30px;
            font-weight: 700;
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
        // border: 2px solid red;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.elder-dementia-care {
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        padding: 30px 0;

        &>.elder {
          img {
            width: 500px;
            height: 550px;
          }
        }

        &>.important-care {
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
    // border: 11px solid red;
    padding: 0 20px;
    padding-bottom: 20px;

    &>.underline-wrap {
      &>.underline-care {
        // border: 3px solid red;
        display: flex;
        justify-content: center;

        // border: 4px solid red;
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
          left: -5%;
          width: 110%;
          border-bottom: 2px solid $base-color-1;
        }
      }
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
    }

    &>.image-personal-assistance {
      // border: 2px solid red;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

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

  &>.pet-care {
    &>.contents {
      // border: 2px solid red;
      padding: 20px 20px;

      &>.underline-wrap {
        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            // border: 4px solid red;
            position: relative;
            font-size: 30px;
            font-weight: 700;
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
        // border: 2px solid red;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.pet-image-care {
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        padding: 30px 0;

        &>.pet-content {
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

        &>.pet-picture {
          img {
            width: 500px;
            height: auto;
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

  &>.life-care {
    &>.contents {
      // border: 2px solid red;
      padding: 20px 20px;

      &>.underline-wrap {
        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            // border: 4px solid red;
            position: relative;
            font-size: 30px;
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
        // border: 2px solid red;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.life-care-image {
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        column-gap: 50px;
        padding: 30px 0;

        &>.lady {
          img {
            width: 500px;
          }
        }

        &>.life-content {
          width: 750px;

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

  &>.palliative-care {
    &>.contents {
      // border: 2px solid red;
      padding: 20px 20px;

      &>.underline-wrap {
        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            // border: 4px solid red;
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
            left: -5%;
            width: 110%;
            border-bottom: 2px solid $base-color-1;
          }
        }
      }

      p {
        // border: 2px solid red;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.palliative-image-care {
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        column-gap: 50px;
        padding: 30px 0;

        &>.palliative-content {
          width: 750px;

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

        &>.palliative-picture {
          img {
            width: 500px;
            height: auto;
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

  &>.hospital-care {
    &>.contents {
      // border: 2px solid red;
      padding: 20px 20px;

      &>.underline-wrap {
        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            // border: 4px solid red;
            position: relative;
            font-size: 30px;
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
        // border: 2px solid red;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.life-care-image {
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        padding: 30px 0;

        &>.lady {
          img {
            width: 500px;
          }
        }

        &>.life-content {
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

      &>.consider-hospital {
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

            .contents {
              // border: 1px solid rgba(0, 0, 0, 0.070);
              border-radius: 8px;
              width: calc((100% / 1) - 17px);
              display: flex;
              flex-wrap: wrap;
              padding: 8px 0;

              span {
                display: flex;
                align-items: center;
              }
            }
          }
        }
      }
    }
  }

  &>.overnight-care {
    &>.contents {
      // border: 2px solid red;
      padding: 20px 20px;

      &>.underline-wrap {
        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            // border: 4px solid red;
            position: relative;
            font-size: 30px;
            font-weight: 700;
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
            border-radius: 10px;
          }
        }
      }

      p {
        // border: 2px solid red;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.lady-elderly-care {
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        padding: 30px 0;

        &>.lady {
          img {
            width: 500px;
          }
        }

        &>.important-care {
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
                color: $base-color-2;
                font-size: 18px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
              }

              .contents {
                // border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 1) - 17px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;

                span {
                  display: flex;
                  align-items: center;
                }

                .needs-assess {
                  color: #00000080;
                }
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

  &>.couples-care {
    &>.contents {
      // border: 2px solid red;
      padding: 20px 20px;

      &>.underline-wrap {
        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            // border: 4px solid red;
            position: relative;
            font-size: 30px;
            font-weight: 700;
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
        // border: 2px solid red;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.couples-image-care {
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        padding: 30px 0;

        &>.couples-content {
          width: 650px;

          h3 {
            // border: 1px solid red;
            font-size: 22px;
            font-weight: 700;
            line-height: 40px;
            letter-spacing: 0em;
          }

          h4 {
            // border: 2px solid red;
            color: $base-color-2;
            font-size: 18px;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            // border: 2px solid red;
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;

            span {
              color: $base-color-4;
              ;
            }
          }
        }

        &>.couples-picture {
          img {
            width: 500px;
            height: 800px;
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

  &>.live-in-care {
    &>.contents {
      // border: 2px solid red;
      padding: 20px 20px;

      &>.underline-wrap {
        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            // border: 4px solid red;
            position: relative;
            font-size: 30px;
            font-weight: 700;
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
        // border: 2px solid red;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.wheelchair-live-in-care {
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        padding: 30px 0;

        &>.wheelchair-picture {
          img {
            width: 500px;
            height: auto;
          }
        }

        &>.important-care {
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

  &>.respite-care {
    &>.contents {
      // border: 2px solid red;
      padding: 20px 20px;

      &>.underline-wrap {
        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            // border: 4px solid red;
            position: relative;
            font-size: 30px;
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
        // border: 2px solid red;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.respite-image-care {
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        padding: 30px 0;

        &>.respite-picture {
          img {
            width: 500px;
            height: 800px;
          }
        }

        &>.respite-content {
          width: 650px;

          h3 {
            // border: 1px solid red;
            font-size: 22px;
            font-weight: 700;
            line-height: 40px;
            letter-spacing: 0em;
          }

          h4 {
            // border: 2px solid red;
            color: $base-color-2;
            font-size: 18px;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;

            span {
              color: $base-color-4;
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

  &>.complex-care {
    &>.contents {
      // border: 2px solid red;
      padding: 20px 20px;

      &>.underline-wrap {
        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            // border: 4px solid red;
            position: relative;
            font-size: 30px;
            line-height: 50px;
            letter-spacing: 0em;
            color: $base-color-1;
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
        // border: 2px solid red;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.complex-support-plan {
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        padding: 30px 0;

        &>.complex-support {
          width: 650px;

          &>.underline-wrap {
            &>.making-preparation {
              // display: flex;
              // justify-content: center;

              h3 {
                // border: 4px solid red;
                position: relative;
                font-size: 30px;
                line-height: 30px;
                letter-spacing: 0em;
              }

              // h3::after {
              //   content: '';
              //   position: absolute;
              //   bottom: 0;
              //   left: 0;
              //   width: 50%;
              //   border-bottom: 7px solid $base-color-1;
              //   border-radius: 10px;
              // }
            }
          }

          h4 {
            // border: 2px solid red;
            color: $base-color-2;
            font-size: 18px;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p span {
            // border: 2px solid red;
            color: $base-color-2;
            font-size: 16px;
            font-weight: 600;
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
              flex-wrap: wrap;
              column-gap: 30px;
              row-gap: 10px;

              h4 {
                // border: 2px solid red;
                display: none;
                color: $base-color-1;
                font-size: 18px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
              }

              .contents {
                // border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 3) - 30px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;

                span {
                  display: flex;
                  align-items: center;
                }

                .needs-assess {
                  color: #00000080;
                }
              }
            }
          }
        }

        &>.picture {
          img {
            width: 500px;
            height: auto;
          }
        }
      }

      &>.complex-home {
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        padding: 30px 0;

        &>.picture {
          img {
            width: 500px;
            height: auto;
          }
        }

        &>.complex-support-content {
          width: 650px;

          &>.underline-wrap {
            &>.making-preparation {
              // display: flex;
              // justify-content: center;

              h3 {
                // border: 4px solid red;
                font-size: 22px;
                font-weight: 700;
                line-height: 40px;
                letter-spacing: 0em;
              }
            }
          }

          h4 {
            // border: 2px solid red;
            color: $base-color-2;
            font-size: 20px;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
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
              flex-wrap: wrap;
              column-gap: 30px;
              row-gap: 10px;

              h4 {
                // border: 2px solid red;
                color: $base-color-1;
                font-size: 18px;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 0em;
              }

              .contents {
                // border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 1) - 30px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;

                span {
                  display: flex;
                  align-items: center;
                }

                .needs-assess {
                  color: #00000080;
                }
              }
            }
          }
        }
      }

      h3 {
        // border: 1px solid red;
        color: $base-color-2;
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

  &>.stroke-care {
    &>.contents {
      // border: 2px solid red;
      padding: 20px 20px;

      &>.underline-wrap {
        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            // border: 4px solid red;
            position: relative;
            font-size: 30px;
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
        // border: 2px solid red;
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.stroke-image-care {
        // border: 2px solid red;
        display: flex;
        justify-content: space-between;
        padding: 30px 0;

        &>.stroke-content {
          width: 650px;

          h3 {
            // border: 1px solid red;
            font-size: 22px;
            font-weight: 700;
            line-height: 40px;
            letter-spacing: 0em;
          }

          h4 {
            // border: 2px solid red;
            color: $base-color-1;
            font-size: 18px;
            font-weight: 500;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
          }

          p span {
            font-weight: 700;
            color: $base-color-4;
          }
        }

        &>.stroke-picture {
          img {
            width: 500px;
            height: auto;
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
  .care-service-wrap {

    .up-icon {
      position: relative;

      .move-up {
        // border: 2px solid red;
        transition: ease;
        position: fixed;
        right: 10px;
        bottom: 20px;

        .icon-image {
          //  border: 2px solid red;
          width: 35px;
        }
      }
    }

    P {
      font-size: 14px;
    }

    h2 {
      // border: 12px solid red;
      font-size: 16px;
    }

    h3 {
      font-size: 15px !important;
    }

    // The heart icons in the absolute pages
    .heart {
      width: 25px;
    }

    // border: 11px solid red;
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

    &>.line-paragraphy {
      // border: 11px solid red;
      margin-top: 30px;

      p {
        padding: 0 10px;
        // text-align: center;
      }

      &>.underline-wrap {
        padding: 0 10px;

        &>.making-preparation {
          // border: 4px solid red;
          margin-bottom: 30px;

          h3 {
            line-height: 30px;
            text-align: center;
          }

          h3::after {
            left: 0%;
            width: 100%;
          }
        }
      }

    }

    section {

      &>.reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
        padding: 0 0px;
        margin-bottom: 0px;

        &>.section-image {

          // border: 1px solid red;
          img {
            // border: 1px solid red;
            width: 100%;
            height: auto;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          margin-top: -6px;
          position: relative;
          width: 100%;
          height: 450px;
          background-color: $base-color;

          &>.light-background {
            // border: 11px solid red;
            background-color: #FFFFFFB2;
            width: 95%;
            top: -30px;
            bottom: 5px;
            right: 5px;
            left: 5px;
            justify-content: center;

            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              overflow-y: scroll;
              padding: 10px;

              h2 {
                font-weight: 600;
                line-height: 50.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;
              }

              &>.contents-wrap {
                // border: 2px solid red;
                display: flex;
                flex-direction: column;
                column-gap: 10px;

                // &>.first-section,
                // .second-section {
                //   div {
                //     display: flex;
                //     column-gap: 5px;
                //   }
                // }
              }
            }
          }
        }
      }
    }

    // <!-- YOUR SEARCH ENDS HERE -->
    &>.search-ends {
      // border: 3px solid red;
      margin-top: 20px;

      &>.underline-wrap {
        padding: 0 10px;

        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            line-height: 30px;
          }
        }
      }

      p {
        // border: 3px solid red;
        padding: 0 10px;
        text-align: left;
        margin-bottom: 30px;
      }
    }


    &>.underline-wrap {
      // border: 2px solid blue;
      padding: 0 10px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          text-align: center;
          line-height: 25px;
          margin-top: 30px;
        }

        h3::after {
          left: 5%;
          width: 90%;
        }
      }
    }

    &>.paragraph-dots {
      // border: 11px solid red;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      margin-bottom: 30px;

      &>.para {
        p {
          // border: 11px solid red;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
          padding-bottom: 20px;
          text-align: left;
        }
      }

      &>.contents-dots {
        // border: 2px solid blue;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 10px;

        .contents {
          width: calc((100% / 1) - 0px);
          display: flex;
          flex-wrap: wrap;
          padding: 8px 0;
        }
      }
    }

    .call-us-wrap {
      // border: 1px solid blue;
      background-color: $base-color-1;
      padding: 0 20px;

      &>.call-contact {
        // border: 2px solid red;
        column-gap: 0px;
        padding-bottom: 20px;
        display: flex;
        justify-content: center;

        div h3 {
          font-weight: 700;
          line-height: 20px;
          font-size: 16px;
          text-align: center;
        }

        &>.icon-contact {
          // border: 11px solid red;
          border-radius: 8px;
          width: 70%;
          padding: 5px 15px;
          column-gap: 10px;

          span {

            a {
              font-size: 14px;
            }
          }
        }
      }
    }

    &>.elderly-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          padding: 0 20px;

          &>.making-preparation {
            display: flex;
            justify-content: center;

            // border: 4px solid red;
            h3 {
              text-align: center;
              font-size: 16px;
              line-height: 25px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            // border: 1px solid red;
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
              letter-spacing: 0em;
              text-align: center;
            }

            p {
              font-size: 16px;
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
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
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
          font-size: 16px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }
    }

    // Looking for elderly care support? component just below the elderly care with image of an advance lady

    &>.elderly-support {
      background-color: $base-color-2;

      .call-us {
        // border: 2px solid red;
        background-color: $base-color-1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        padding-bottom: 25px;

        &>.call-contact {
          // border: 10px solid blue;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;

          div h3 {
            color: #fff;
            font-size: 16px;
            line-height: 25px;
          }

          &>.icon-contact {
            // border: 10px solid blue;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 20px;

            span {
              // border: 11px solid red;
              border-radius: 5px;
              background-color: #fff;
              width: 100%;
              padding: 5px 15px;
              text-align: center;


              a {
                text-decoration: none;
                color: $base-color;
                font-size: 16px;
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

    &>.personal-care {
      // border: 1px solid red;
      padding: 10px 10px;

      &>.underline-wrap {
        &>.underline-care {
          margin-top: 20px;

          // border: 4px solid red;
          h3 {
            position: relative;
            font-size: 16px;
            line-height: 25px;
          }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-supporting {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.supporting {
          width: 100%;

          &>.underline-wrap {
            &>.supporting-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              h3 {
                position: relative;
                font-size: 16px;
                line-height: 25px;
                letter-spacing: 0em;
                line-height: 25px;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
          }
        }
      }

      &>.choose-image {
        // border: 4px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0px 0;

        &>.content {
          width: 100%;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
          }
        }

        &>.image {
          img {
            width: 100%;
            height: auto;
          }
        }
      }

      &>.bathing-showering {
        // border: 11px solid red;
        padding: 0 0px;
        margin-bottom: 0px;

        h4 {
          font-size: 16px;

        }

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;

          .contents {
            width: calc((100% / 1) - 0px);

            // &>.dots {
            //   &>.dots-span {
            //   }
            // }
          }
        }
      }
    }

    &>.getIn-touch {
      border: 11px solid rgb(26, 135, 179)(0, 183, 255);

      .call-us {
        background-color: $base-color-1;
        display: flex;
        justify-content: center;
        padding: 10px;

        &>.call-contact {
          width: 100%;
          justify-content: center;

          div h3 {
            text-align: center;
            font-size: 16px;
          }

          &>.contact {
            // border: 11px solid red;
            background-color: #fff;
            border-radius: 5px;
            color: $base-color;
            padding: 5px 15px;
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
              color: $base-color-1;
              font-weight: 700;
            }
          }
        }
      }
    }

    &>.domiciliary-care {
      // border: 13px solid red;

      &>.domiciliary {
        padding: 0 10px;

        &>.underline-domiciliary {
          padding: 0 10px;

          &>.making-preparation {

            // border: 4px solid red;
            h3 {
              font-size: 16px;
              line-height: 25px;
              padding-top: 20px;
            }
          }
        }

        &>.image-domiciliary {
          // border: 2px solid red;
          padding: 0px 0;
          justify-content: center;

          &>.image {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.demociliary {
            width: 100%;

            h3 {
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>.why-domiciliary {
          h3 {
            // border: 2px solid red;
            font-size: 16px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }

        &>.consider-domiciliary {
          // border: 2px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
          }


          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              column-gap: 0px;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.companionship-care {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {

          // border: 4px solid red;
          h3 {
            position: relative;
            line-height: 25px;
          }

          h3::after {
            bottom: 0;
            left: 0%;
            width: 50%;
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-companionship {
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          &>.underline-wrap {
            &>.companionship-care {

              // border: 4px solid red;
              h3 {
                font-size: 16px;
                line-height: 25px;
              }

              h3::after {
                bottom: 0;
                left: 0%;
                width: 40%;
                border-bottom: 3px solid $base-color-1;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
          }

          p {
            font-size: 16px;
          }
        }
      }

      h3 {
        font-size: 16px;
        line-height: 25px;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.dementia-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.elder-dementia-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.elder {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 11px solid red;
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.personal-assistance {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          display: flex;
          justify-content: center;

          h3 {
            font-size: 16px;
            line-height: 25px;
            text-align: center;
            padding-top: 15px;
          }

          h3::after {
            bottom: 0;
            left: 5%;
            width: 90%;
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-personal-assistance {
        // border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          p {
            font-size: 16px;
          }

          h3 {
            font-size: 16px;
            line-height: 0px;
          }
        }
      }
    }

    &>.pet-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-bottom: 20px;
        }

        &>.pet-image-care {
          // border: 21px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0px;

          &>.pet-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }

          &>.pet-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.life-care {


      &>.contents {
        // border: 12px solid rgb(5, 3, 116);
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          padding: 10px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
              letter-spacing: 0em;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 0px;
        }
      }
    }

    &>.palliative-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.palliative-image-care {
          flex-direction: column;
          padding: 0px 0;

          &>.palliative-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.palliative-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.hospital-care {


      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }

        &>.consider-hospital {
          // border: 3px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          &>.paragraph-dots {
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
              }
            }
          }
        }
      }
    }

    &>.overnight-care {

      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.lady-elderly-care {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }

            &>.paragraph-dots {

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  width: calc((100% / 1) - 0px);

                  // .needs-assess {
                  //   color: #00000080;
                  // }
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.couples-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.couples-image-care {
          // border: 2px solid red;
          flex-direction: column;
          justify-content: center;
          padding: 0px 0;

          &>.couples-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.couples-picture {
            img {
              width: 100%;
              height: auto;
              padding-top: 10px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.live-in-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        &>.wheelchair-live-in-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0;

          &>.wheelchair-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.respite-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.respite-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;
          padding-top: 20px;

          &>.respite-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.respite-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.complex-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.complex-support-plan {
          // border: 2px solid red;
          justify-content: center;
          flex-direction: column;
          padding: 0px 0px;

          &>.complex-support {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                  padding-top: 15px;
                }

                h3::after {
                  left: 0%;
                  width: 50%;
                  border-bottom: 3px solid $base-color-1;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }

            p span {
              color: $base-color-1;
              font-size: 16px;
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

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }

          &>.picture {
            img {
              width: 100%;
            }
          }
        }

        &>.complex-home {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 30px 0;

          &>.picture {
            img {
              width: 100%;
            }
          }

          &>.complex-support-content {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
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

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }
        }

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>.stroke-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          &>.making-preparation {
            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.stroke-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.stroke-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.stroke-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
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
  .care-service-wrap {
    .up-icon {
      position: relative;

      .move-up {
        // border: 2px solid red;
        transition: ease;
        position: fixed;
        right: 10px;
        bottom: 20px;

        .icon-image {
          //  border: 2px solid red;
          width: 40px;
        }
      }
    }

    P {
      font-size: 14px;
    }

    // h2 {
    //   // border: 12px solid red;
    //   font-size: 20px !important;
    // }

    h3 {
      font-size: 18px !important;
    }

    // The heart icons in the absolute pages
    .heart {
      width: 25px;
    }

    // border: 11px solid red;
    &>.banner {
      // border: 11px solid red;
      height: 400px;
      display: flex;
      justify-content: center;

      padding: 10px 10px;

      &>.intro-content {
        // border: 2px solid red;
        text-align: center;
        padding: 0px 0px;
        line-height: 0px;


        .intro-title {
          // border: 2px solid red;
          margin-bottom: 2.5rem;
          font-size: 20px !important;
          line-height: 30px;
          padding-left: 0px;
          text-align: center;
        }

        .intro-title:first-child {
          // border: 12px solid red;
          margin-bottom: 0px;
        }

        .intro-subtitle {
          // border: 2px solid red;
          font-weight: 400;
          font-size: 30px !important;
          line-height: 30px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
          text-align: center;
        }
      }
    }

    &>.line-paragraphy {
      // border: 11px solid red;
      margin-top: 30px;

      p {
        padding: 0 10px;
        // text-align: center;
      }

      &>.underline-wrap {
        padding: 0 10px;

        &>.making-preparation {
          // border: 4px solid red;
          margin-bottom: 30px;

          h3 {
            line-height: 30px;
            text-align: center;
          }

          h3::after {
            left: 0%;
            width: 100%;
          }
        }
      }

    }


    section {

      &>.reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
        padding: 0 0px;
        margin-bottom: 0px;

        &>.section-image {

          // border: 1px solid red;
          img {
            // border: 1px solid red;
            width: 100%;
            height: auto;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          margin-top: -6px;
          position: relative;
          width: 100%;
          height: 450px;
          background-color: $base-color;

          &>.light-background {
            // border: 11px solid red;
            background-color: #FFFFFFB2;
            width: 97%;
            top: -30px;
            bottom: 5px;
            right: 0px;
            left: 5px;
            justify-content: center;

            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              overflow-y: scroll;
              padding: 10px;

              h2 {
                font-weight: 600;
                line-height: 50.86px;
                color: $base-color-1;
                margin-bottom: 20px;
                text-align: center;
              }

              &>.contents-wrap {
                // border: 2px solid red;
                display: flex;
                flex-direction: column;
                column-gap: 10px;

                // &>.first-section,
                // .second-section {
                //   div {
                //     display: flex;
                //     column-gap: 5px;
                //   }
                // }
              }
            }
          }
        }
      }
    }

    // <!-- YOUR SEARCH ENDS HERE -->
    &>.search-ends {
      // border: 3px solid red;
      margin-top: 20px;

      &>.underline-wrap {
        padding: 0 10px;

        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            line-height: 30px;
          }
        }
      }

      p {
        // border: 3px solid red;
        padding: 0 10px;
        text-align: left;
        margin-bottom: 30px;
      }
    }


    &>.underline-wrap {
      // border: 2px solid blue;
      padding: 0 10px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          text-align: center;
          line-height: 25px;
          margin-top: 30px;
        }

        h3::after {
          left: 5%;
          width: 90%;
        }
      }
    }

    &>.paragraph-dots {
      // border: 11px solid red;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      margin-bottom: 30px;

      &>.para {
        p {
          // border: 11px solid red;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
          padding-bottom: 20px;
          text-align: left;
        }
      }

      &>.contents-dots {
        // border: 2px solid blue;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 10px;

        .contents {
          width: calc((100% / 1) - 0px);
          display: flex;
          flex-wrap: wrap;
          padding: 8px 0;
        }
      }
    }

    .call-us-wrap {
      // border: 1px solid blue;
      background-color: $base-color-1;
      padding: 0 20px;

      &>.call-contact {
        // border: 2px solid red;
        column-gap: 0px;
        padding-bottom: 20px;
        display: flex;
        justify-content: center;

        div h3 {
          font-weight: 700;
          line-height: 20px;
          font-size: 16px;
          text-align: center;
        }

        &>.icon-contact {
          // border: 11px solid red;
          border-radius: 8px;
          width: 70%;
          padding: 5px 15px;
          column-gap: 10px;

          span {

            a {
              font-size: 14px;
            }
          }
        }
      }
    }

    &>.elderly-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          padding: 0 20px;

          &>.making-preparation {
            display: flex;
            justify-content: center;

            // border: 4px solid red;
            h3 {
              text-align: center;
              font-size: 16px;
              line-height: 25px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            // border: 1px solid red;
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
              letter-spacing: 0em;
              text-align: center;
            }

            p {
              font-size: 16px;
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
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
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
          font-size: 16px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }
    }

    // Looking for elderly care support? component just below the elderly care with image of an advance lady

    &>.elderly-support {
      background-color: $base-color-2;

      .call-us {
        // border: 2px solid red;
        background-color: $base-color-1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        padding-bottom: 25px;

        &>.call-contact {
          // border: 10px solid blue;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;

          div h3 {
            color: #fff;
            font-size: 16px;
            line-height: 25px;
          }

          &>.icon-contact {
            // border: 10px solid blue;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 20px;

            span {
              // border: 11px solid red;
              border-radius: 5px;
              background-color: #fff;
              width: 100%;
              padding: 5px 15px;
              text-align: center;


              a {
                text-decoration: none;
                color: $base-color;
                font-size: 16px;
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

    &>.personal-care {
      // border: 1px solid red;
      padding: 10px 10px;

      &>.underline-wrap {
        &>.underline-care {
          margin-top: 20px;

          // border: 4px solid red;
          h3 {
            position: relative;
            font-size: 16px;
            line-height: 25px;
          }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-supporting {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.supporting {
          width: 100%;

          &>.underline-wrap {
            &>.supporting-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              h3 {
                position: relative;
                font-size: 16px;
                line-height: 25px;
                letter-spacing: 0em;
                line-height: 25px;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
          }
        }
      }

      &>.choose-image {
        // border: 4px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0px 0;

        &>.content {
          width: 100%;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
          }
        }

        &>.image {
          img {
            width: 100%;
            height: auto;
          }
        }
      }

      &>.bathing-showering {
        // border: 11px solid red;
        padding: 0 0px;
        margin-bottom: 0px;

        h4 {
          font-size: 16px;

        }

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;

          .contents {
            width: calc((100% / 1) - 0px);

            // &>.dots {
            //   &>.dots-span {
            //   }
            // }
          }
        }
      }
    }

    &>.getIn-touch {
      border: 11px solid rgb(26, 135, 179)(0, 183, 255);

      .call-us {
        background-color: $base-color-1;
        display: flex;
        justify-content: center;
        padding: 10px;

        &>.call-contact {
          width: 100%;
          justify-content: center;

          div h3 {
            text-align: center;
            font-size: 16px;
          }

          &>.contact {
            // border: 11px solid red;
            background-color: #fff;
            border-radius: 5px;
            color: $base-color;
            padding: 5px 15px;
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
              color: $base-color-1;
              font-weight: 700;
            }
          }
        }
      }
    }

    &>.domiciliary-care {
      // border: 13px solid red;

      &>.domiciliary {
        padding: 0 10px;

        &>.underline-domiciliary {
          padding: 0 10px;

          &>.making-preparation {

            // border: 4px solid red;
            h3 {
              font-size: 16px;
              line-height: 25px;
              padding-top: 20px;
            }
          }
        }

        &>.image-domiciliary {
          // border: 2px solid red;
          padding: 0px 0;
          justify-content: center;

          &>.image {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.demociliary {
            width: 100%;

            h3 {
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>.why-domiciliary {
          h3 {
            // border: 2px solid red;
            font-size: 16px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }

        &>.consider-domiciliary {
          // border: 2px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
          }


          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              column-gap: 0px;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.companionship-care {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {

          // border: 4px solid red;
          h3 {
            position: relative;
            line-height: 25px;
          }

          h3::after {
            bottom: 0;
            left: 0%;
            width: 50%;
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-companionship {
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          &>.underline-wrap {
            &>.companionship-care {

              // border: 4px solid red;
              h3 {
                font-size: 16px;
                line-height: 25px;
              }

              h3::after {
                bottom: 0;
                left: 0%;
                width: 40%;
                border-bottom: 3px solid $base-color-1;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
          }

          p {
            font-size: 16px;
          }
        }
      }

      h3 {
        font-size: 16px;
        line-height: 25px;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.dementia-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.elder-dementia-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.elder {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 11px solid red;
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.personal-assistance {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          display: flex;
          justify-content: center;

          h3 {
            font-size: 16px;
            line-height: 25px;
            text-align: center;
            padding-top: 15px;
          }

          h3::after {
            bottom: 0;
            left: 5%;
            width: 90%;
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-personal-assistance {
        // border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          p {
            font-size: 16px;
          }

          h3 {
            font-size: 16px;
            line-height: 0px;
          }
        }
      }
    }

    &>.pet-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-bottom: 20px;
        }

        &>.pet-image-care {
          // border: 21px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0px;

          &>.pet-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }

          &>.pet-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.life-care {


      &>.contents {
        // border: 12px solid rgb(5, 3, 116);
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          padding: 10px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
              letter-spacing: 0em;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 0px;
        }
      }
    }

    &>.palliative-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.palliative-image-care {
          flex-direction: column;
          padding: 0px 0;

          &>.palliative-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.palliative-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.hospital-care {


      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }

        &>.consider-hospital {
          // border: 3px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          &>.paragraph-dots {
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
              }
            }
          }
        }
      }
    }

    &>.overnight-care {

      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.lady-elderly-care {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }

            &>.paragraph-dots {

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  width: calc((100% / 1) - 0px);

                  // .needs-assess {
                  //   color: #00000080;
                  // }
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.couples-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.couples-image-care {
          // border: 2px solid red;
          flex-direction: column;
          justify-content: center;
          padding: 0px 0;

          &>.couples-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.couples-picture {
            img {
              width: 100%;
              height: auto;
              padding-top: 10px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.live-in-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        &>.wheelchair-live-in-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0;

          &>.wheelchair-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.respite-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.respite-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;
          padding-top: 20px;

          &>.respite-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.respite-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.complex-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.complex-support-plan {
          // border: 2px solid red;
          justify-content: center;
          flex-direction: column;
          padding: 0px 0px;

          &>.complex-support {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                  padding-top: 15px;
                }

                h3::after {
                  left: 0%;
                  width: 50%;
                  border-bottom: 3px solid $base-color-1;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }

            p span {
              color: $base-color-1;
              font-size: 16px;
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

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }

          &>.picture {
            img {
              width: 100%;
            }
          }
        }

        &>.complex-home {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 30px 0;

          &>.picture {
            img {
              width: 100%;
            }
          }

          &>.complex-support-content {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
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

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }
        }

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>.stroke-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          &>.making-preparation {
            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.stroke-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.stroke-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.stroke-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
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
  .care-service-wrap {

    .up-icon {
      position: relative;

      .move-up {
        // border: 2px solid red;
        transition: ease;
        position: fixed;
        right: 10px;
        bottom: 20px;

        .icon-image {
          //  border: 2px solid red;
          width: 45px;
        }
      }
    }

    P {
      // border: 1px solid red;
      font-size: 16px !important;
    }

    span {
      //  border: 1px solid red;
      font-size: 15px !important;
    }

    h3 {
      //  border: 1px solid red;
      font-size: 20px !important;
    }

    // The heart icons in the absolute pages
    .heart {
      // border: 1px solid red;
      width: 25px;
    }

    // border: 11px solid red;
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

    &>.line-paragraphy {
      // border: 11px solid red;
      margin-top: 30px;

      p {
        padding: 0 10px;
        // text-align: center;
      }

      &>.underline-wrap {
        padding: 0 10px;

        &>.making-preparation {
          // border: 4px solid red;
          margin-bottom: 30px;

          h3 {
            line-height: 30px;
            text-align: center;
          }

          h3::after {
            left: 0%;
            width: 100%;
          }
        }
      }

    }

    // First section with absolute styling
    section {

      &>.reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
        padding: 0 0px;
        margin-bottom: 0px;

        &>.section-image {

          // border: 1px solid red;
          img {
            // border: 1px solid red;
            width: 100%;
            height: auto;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          margin-top: -6px;
          position: relative;
          width: 100%;
          height: 500px;
          background-color: $base-color;

          &>.light-background {
            // border: 11px solid red;
            background-color: #FFFFFFB2;
            width: 97%;
            top: -80px;
            bottom: 5px;
            right: 0px;
            left: 5px;
            justify-content: center;

            &>.contents {
              // border: 2px solid red;
              display: flex;
              flex-direction: column;
              justify-content: center;
              // overflow-y: scroll;
              padding: 10px;

              h2 {
                // border: 2px solid red;
                font-weight: 600;
                font-size: 18px !important;
                line-height: 30.86px;
                color: $base-color-1;
                padding-bottom: 0px;
                text-align: center;
              }

              &>.contents-wrap {
                // border: 2px solid red;
                display: flex;
                flex-direction: column;
                column-gap: 10px;
                line-height: 25px;
                padding-bottom: 10px;
              }
            }
          }
        }
      }
    }

    // <!-- YOUR SEARCH ENDS HERE -->
    &>.search-ends {
      // border: 3px solid red;
      margin-top: 20px;

      &>.underline-wrap {
        padding: 0 10px;

        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            line-height: 30px;
          }
        }
      }

      p {
        // border: 3px solid red;
        padding: 0 10px;
        text-align: left;
        margin-bottom: 30px;
      }
    }


    &>.underline-wrap {
      // border: 2px solid blue;
      padding: 0 10px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          text-align: center;
          line-height: 25px;
          margin-top: 30px;
        }

        h3::after {
          left: 5%;
          width: 90%;
        }
      }
    }

    &>.paragraph-dots {
      // border: 11px solid red;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      margin-bottom: 30px;

      &>.para {
        p {
          // border: 11px solid red;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
          padding-bottom: 20px;
          text-align: left;
        }
      }

      &>.contents-dots {
        // border: 2px solid blue;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 10px;

        .contents {
          width: calc((100% / 1) - 0px);
          display: flex;
          flex-wrap: wrap;
          padding: 8px 0;
        }
      }
    }

    .call-us-wrap {
      // border: 1px solid blue;
      background-color: $base-color-1;
      padding: 0 20px;

      &>.call-contact {
        // border: 2px solid red;
        column-gap: 0px;
        padding-bottom: 20px;
        display: flex;
        justify-content: center;

        div h3 {
          font-weight: 700;
          line-height: 20px;
          font-size: 16px;
          text-align: center;
        }

        &>.icon-contact {
          // border: 11px solid red;
          border-radius: 8px;
          width: 70%;
          padding: 15px 0px;
          column-gap: 10px;

          span {

            a {
              font-size: 14px;
            }
          }
        }
      }
    }

    &>.elderly-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          padding: 0 20px;

          &>.making-preparation {
            display: flex;
            justify-content: center;

            // border: 4px solid red;
            h3 {
              text-align: center;
              font-size: 16px;
              line-height: 25px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            // border: 1px solid red;
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
              letter-spacing: 0em;
              text-align: center;
            }

            p {
              font-size: 16px;
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
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
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
          font-size: 16px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }
    }

    // Looking for elderly care support? component just below the elderly care with image of an advance lady

    &>.elderly-support {
      background-color: $base-color-2;

      .call-us {
        // border: 2px solid red;
        background-color: $base-color-1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        padding-bottom: 25px;

        &>.call-contact {
          // border: 10px solid blue;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;

          div h3 {
            color: #fff;
            font-size: 16px;
            line-height: 25px;
          }

          &>.icon-contact {
            // border: 10px solid blue;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 20px;

            span {
              // border: 11px solid red;
              border-radius: 5px;
              background-color: #fff;
              width: 100%;
              padding: 15px 15px;
              text-align: center;


              a {
                text-decoration: none;
                color: $base-color;
                font-size: 16px;
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

    &>.personal-care {
      // border: 1px solid red;
      padding: 10px 10px;

      &>.underline-wrap {
        &>.underline-care {
          margin-top: 20px;

          // border: 4px solid red;
          h3 {
            position: relative;
            font-size: 16px;
            line-height: 25px;
          }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-supporting {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.supporting {
          width: 100%;

          &>.underline-wrap {
            &>.supporting-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              h3 {
                position: relative;
                font-size: 16px;
                line-height: 25px;
                letter-spacing: 0em;
                line-height: 25px;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
          }
        }
      }

      &>.choose-image {
        // border: 4px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0px 0;

        &>.content {
          width: 100%;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
          }
        }

        &>.image {
          img {
            width: 100%;
            height: auto;
          }
        }
      }

      &>.bathing-showering {
        // border: 11px solid red;
        padding: 0 0px;
        margin-bottom: 0px;

        h4 {
          font-size: 16px;

        }

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;

          .contents {
            width: calc((100% / 1) - 0px);

            // &>.dots {
            //   &>.dots-span {
            //   }
            // }
          }
        }
      }
    }

    &>.getIn-touch {
      border: 11px solid rgb(26, 135, 179)(0, 183, 255);

      .call-us {
        background-color: $base-color-1;
        display: flex;
        justify-content: center;
        padding: 10px;

        &>.call-contact {
          width: 100%;
          justify-content: center;

          div h3 {
            text-align: center;
            font-size: 16px;
          }

          &>.contact {
            // border: 11px solid red;
            background-color: #fff;
            border-radius: 5px;
            color: $base-color;
            padding: 15px 25px;
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
              color: $base-color-1;
              font-weight: 700;
            }
          }
        }
      }
    }

    &>.domiciliary-care {
      // border: 13px solid red;

      &>.domiciliary {
        padding: 0 10px;

        &>.underline-domiciliary {
          padding: 0 10px;

          &>.making-preparation {

            // border: 4px solid red;
            h3 {
              font-size: 16px;
              line-height: 25px;
              padding-top: 20px;
            }
          }
        }

        &>.image-domiciliary {
          // border: 2px solid red;
          padding: 0px 0;
          justify-content: center;

          &>.image {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.demociliary {
            width: 100%;

            h3 {
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>.why-domiciliary {
          h3 {
            // border: 2px solid red;
            font-size: 16px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }

        &>.consider-domiciliary {
          // border: 2px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
          }


          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              column-gap: 0px;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.companionship-care {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {

          // border: 4px solid red;
          h3 {
            position: relative;
            line-height: 25px;
          }

          h3::after {
            bottom: 0;
            left: 0%;
            width: 50%;
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-companionship {
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          &>.underline-wrap {
            &>.companionship-care {

              // border: 4px solid red;
              h3 {
                font-size: 16px;
                line-height: 25px;
              }

              h3::after {
                bottom: 0;
                left: 0%;
                width: 40%;
                border-bottom: 3px solid $base-color-1;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
          }

          p {
            font-size: 16px;
          }
        }
      }

      h3 {
        font-size: 16px;
        line-height: 25px;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.dementia-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.elder-dementia-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.elder {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 11px solid red;
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.personal-assistance {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          display: flex;
          justify-content: center;

          h3 {
            font-size: 16px;
            line-height: 25px;
            text-align: center;
            padding-top: 15px;
          }

          h3::after {
            bottom: 0;
            left: 5%;
            width: 90%;
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-personal-assistance {
        // border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          p {
            font-size: 16px;
          }

          h3 {
            font-size: 16px;
            line-height: 0px;
          }
        }
      }
    }

    &>.pet-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-bottom: 20px;
        }

        &>.pet-image-care {
          // border: 21px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0px;

          &>.pet-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }

          &>.pet-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.life-care {


      &>.contents {
        // border: 12px solid rgb(5, 3, 116);
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          padding: 10px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
              letter-spacing: 0em;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 0px;
        }
      }
    }

    &>.palliative-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.palliative-image-care {
          flex-direction: column;
          padding: 0px 0;

          &>.palliative-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.palliative-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.hospital-care {


      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }

        &>.consider-hospital {
          // border: 3px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          &>.paragraph-dots {
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
              }
            }
          }
        }
      }
    }

    &>.overnight-care {

      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.lady-elderly-care {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }

            &>.paragraph-dots {

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  width: calc((100% / 1) - 0px);

                  // .needs-assess {
                  //   color: #00000080;
                  // }
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.couples-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.couples-image-care {
          // border: 2px solid red;
          flex-direction: column;
          justify-content: center;
          padding: 0px 0;

          &>.couples-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.couples-picture {
            img {
              width: 100%;
              height: auto;
              padding-top: 10px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.live-in-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        &>.wheelchair-live-in-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0;

          &>.wheelchair-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.respite-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.respite-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;
          padding-top: 20px;

          &>.respite-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.respite-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.complex-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
              padding-top: 15px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.complex-support-plan {
          // border: 2px solid red;
          justify-content: center;
          flex-direction: column;
          padding: 0px 0px;

          &>.complex-support {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                  padding-top: 15px;
                }

                h3::after {
                  left: 0%;
                  width: 50%;
                  border-bottom: 3px solid $base-color-1;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }

            p span {
              color: $base-color-1;
              font-size: 16px;
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

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }

          &>.picture {
            img {
              width: 100%;
            }
          }
        }

        &>.complex-home {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 30px 0;

          &>.picture {
            img {
              width: 100%;
            }
          }

          &>.complex-support-content {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
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

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }
        }

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>.stroke-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          &>.making-preparation {
            h3 {
              // border: 4px solid red;
              font-size: 16px;
              line-height: 25px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.stroke-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.stroke-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.stroke-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
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
  .care-service-wrap {

    .up-icon {
      position: relative;

      .move-up {
        // border: 2px solid red;
        transition: ease;
        position: fixed;
        right: 10px;
        bottom: 20px;

        .icon-image {
          //  border: 2px solid red;
          width: 45px;
        }
      }
    }

    P {
      font-size: 18px !important;
    }

    span {
      font-size: 18px !important;
    }

    h3 {
      font-size: 30px !important;
    }

    // The heart icons in the absolute pages
    .heart {
      width: 25px;
    }

    // border: 11px solid red;
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
          font-size: 50px;
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

    &>.line-paragraphy {
      // border: 11px solid red;
      margin-top: 30px;

      p {
        padding: 0 10px;
        // text-align: center;
      }

      &>.underline-wrap {
        padding: 0 10px;

        &>.making-preparation {
          // border: 4px solid red;
          margin-bottom: 30px;

          h3 {
            line-height: 30px;
            text-align: center;
          }

          h3::after {
            left: 0%;
            width: 100%;
          }
        }
      }

    }

    // First section with absolute styling
    section {

      &>.reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
        padding: 0 0px;
        margin-bottom: 0px;

        &>.section-image {

          // border: 1px solid red;
          img {
            // border: 1px solid red;
            width: 100%;
            height: auto;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          margin-top: -6px;
          position: relative;
          width: 100%;
          height: 500px;
          background-color: $base-color;

          &>.light-background {
            // border: 11px solid red;
            background-color: #FFFFFFB2;
            justify-content: center;
            align-items: center;
            width: 97%;
            top: -40px;
            bottom: 10px;
            right: 0px;
            left: 10px;

            &>.contents {
              // border: 2px solid red;
              width: 100%;
              display: flex;
              flex-direction: column;
              // overflow-y: scroll;
              padding: 10px;

              h2 {
                // border: 2px solid red;
                font-weight: 600;
                font-size: 25px !important;
                line-height: 30.86px;
                color: $base-color-1;
                padding-bottom: 30px;
                text-align: center;
              }

              &>.contents-wrap {
                // border: 2px solid red;
                display: flex;
                flex-direction: space-between;
                column-gap: 50px;
                line-height: 25px;
                padding-bottom: 10px;
                font-size: 16px !important;
              }
            }
          }
        }
      }
    }

    // <!-- YOUR SEARCH ENDS HERE -->
    &>.search-ends {
      // border: 3px solid red;
      margin-top: 20px;

      &>.underline-wrap {
        padding: 0 10px;

        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            line-height: 30px;
          }
        }
      }

      p {
        // border: 3px solid red;
        padding: 0 10px;
        text-align: left;
        margin-bottom: 30px;
      }
    }

    &>.underline-wrap {
      // border: 2px solid blue;
      padding: 0 10px;
      margin-top: 20px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          text-align: center;
        }
      }
    }

    &>.paragraph-dots {
      // border: 11px solid red;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      margin-bottom: 30px;

      &>.para {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
          padding-bottom: 30px;
          // text-align: center;
        }
      }

      &>.contents-dots {
        // border: 2px solid blue;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 10px;

        .contents {
          border: 1px solid rgba(0, 0, 0, 0.070);
          border-radius: 8px;
          width: calc((100% / 1) - 0px);
          display: flex;
          flex-wrap: wrap;
          padding: 8px 0;
        }
      }
    }

    .call-us-wrap {
      // border: 1px solid blue;
      background-color: $base-color-1;
      padding: 10px;

      &>.call-contact {
        // border: 22px solid blue;
        column-gap: 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div h3 {
          font-weight: 700;
          line-height: 20px;
          font-size: 16px;
          text-align: center;
        }

        &>.icon-contact {
          // border: 11px solid blue;
          border-radius: 8px;
          // width: 30%;
          padding: 15px 15px;
          column-gap: 10px;

          span {

            a {
              font-size: 14px;
            }
          }
        }
      }
    }

    &>.elderly-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          padding: 0 20px;

          &>.making-preparation {
            display: flex;
            justify-content: center;

            // border: 4px solid red;
            h3 {
              text-align: center;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            // border: 1px solid red;
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
              letter-spacing: 0em;
              text-align: center;
            }

            p {
              font-size: 16px;
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
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
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
          font-size: 16px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }
    }

    // Looking for elderly care support? component just below the elderly care with image of an advance lady

    &>.elderly-support {
      background-color: $base-color-2;

      .call-us {
        // border: 2px solid red;
        background-color: $base-color-1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        padding-bottom: 25px;

        &>.call-contact {
          // border: 10px solid blue;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;

          div h3 {
            color: #fff;
            font-size: 16px;
            line-height: 25px;
          }

          &>.icon-contact {
            // border: 10px solid blue;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 20px;

            span {
              // border: 11px solid red;
              border-radius: 5px;
              background-color: #fff;
              width: 100%;
              padding: 15px 15px;
              text-align: center;


              a {
                text-decoration: none;
                color: $base-color;
                font-size: 16px;
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

    &>.personal-care {
      // border: 1px solid red;
      padding: 10px 10px;

      &>.underline-wrap {
        &>.underline-care {
          margin-top: 20px;

          // border: 4px solid red;
          h3 {
            position: relative;
          }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-supporting {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.supporting {
          width: 100%;

          &>.underline-wrap {
            &>.supporting-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              h3 {
                position: relative;
                font-size: 16px;
                line-height: 25px;
                letter-spacing: 0em;
                line-height: 25px;
              }

              h3::after {
                bottom: 0;
                left: 0%;
                width: 40%;
                border-bottom: 3px solid $base-color-1;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
          }
        }
      }

      &>.choose-image {
        // border: 4px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0px 0;

        &>.content {
          width: 100%;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
          }
        }

        &>.image {
          width: 100%;

          img {
            width: 100%;
            height: auto;
          }
        }
      }

      &>.bathing-showering {
        // border: 11px solid red;
        padding: 0 0px;
        margin-bottom: 0px;

        h4 {
          font-size: 16px;

        }

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;

          .contents {
            width: calc((100% / 1) - 0px);

            // &>.dots {
            //   &>.dots-span {
            //   }
            // }
          }
        }
      }
    }

    &>.getIn-touch {
      .call-us {
        background-color: $base-color-1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;

        &>.call-contact {
          width: 100%;
          display: flex;
          justify-content: center;

          div h3 {
            text-align: center;
            font-size: 16px;
            line-height: 30px;
          }

          &>.contact {
            // border: 11px solid red;
            display: flex;
            background-color: #fff;
            border-radius: 5px;
            color: $base-color;
            padding: 15px 25px;
            column-gap: 10px;

            span {
              display: flex;

              a {
                text-decoration: none;
                font-size: 16px;
              }
            }

            .phone-number {
              color: $base-color-1;
              font-weight: 700;
            }
          }
        }
      }
    }

    &>.domiciliary-care {
      // border: 13px solid red;

      &>.domiciliary {
        padding: 0 10px;

        &>.underline-domiciliary {
          padding: 0 10px;

          &>.making-preparation {

            // border: 4px solid red;
            h3 {
              font-size: 16px;
            }
          }
        }

        &>.image-domiciliary {
          // border: 2px solid red;
          padding: 0px 0;
          justify-content: center;

          &>.image {
            width: 100%;

            img {
              width: 100%;
              height: auto;
            }
          }

          &>.demociliary {
            width: 100%;

            h3 {
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>.why-domiciliary {
          h3 {
            // border: 2px solid red;
            font-size: 16px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }

        &>.consider-domiciliary {
          // border: 2px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
          }


          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              column-gap: 0px;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.companionship-care {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {

          // border: 4px solid red;
          h3 {
            position: relative;
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-companionship {
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          &>.underline-wrap {
            &>.companionship-care {

              // border: 4px solid red;
              h3 {
                font-size: 16px;
                line-height: 25px;
              }

              h3::after {
                bottom: 0;
                left: 0%;
                width: 40%;
                border-bottom: 3px solid $base-color-1;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
          }

          p {
            font-size: 16px;
          }
        }
      }

      h3 {
        font-size: 16px;
        line-height: 25px;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.dementia-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   font-size: 16px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.elder-dementia-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.elder {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 11px solid red;
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.personal-assistance {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          display: flex;
          justify-content: center;

          // h3 {
          //   text-align: center;
          //   padding-top: 15px;
          // }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-personal-assistance {
        // border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          p {
            font-size: 16px;
          }

          h3 {
            font-size: 16px;
            line-height: 0px;
          }
        }
      }
    }

    &>.pet-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-bottom: 20px;
        }

        &>.pet-image-care {
          // border: 21px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0px;

          &>.pet-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }

          &>.pet-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.life-care {


      &>.contents {
        // border: 12px solid rgb(5, 3, 116);
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          padding: 10px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
              letter-spacing: 0em;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 0px;
        }
      }
    }

    &>.palliative-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.palliative-image-care {
          flex-direction: column;
          padding: 0px 0;

          &>.palliative-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.palliative-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.hospital-care {

      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }  
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }

        &>.consider-hospital {
          // border: 3px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          &>.paragraph-dots {
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
              }
            }
          }
        }
      }
    }

    &>.overnight-care {

      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.lady-elderly-care {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }

            &>.paragraph-dots {

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  width: calc((100% / 1) - 0px);

                  // .needs-assess {
                  //   color: #00000080;
                  // }
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.couples-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.couples-image-care {
          // border: 2px solid red;
          flex-direction: column;
          justify-content: center;
          padding: 0px 0;

          &>.couples-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.couples-picture {
            img {
              width: 100%;
              height: auto;
              padding-top: 10px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.live-in-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        // &>.underline-wrap {
        //   &>.making-preparation {

        //     // h3 {
        //     //   // border: 4px solid red;
        //     //   font-size: 16px;
        //     //   line-height: 25px;
        //     //   padding-top: 15px;
        //     // }
        //   }
        // }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        &>.wheelchair-live-in-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0;

          &>.wheelchair-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.respite-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.respite-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;
          padding-top: 20px;

          &>.respite-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.respite-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.complex-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.complex-support-plan {
          // border: 2px solid red;
          justify-content: center;
          flex-direction: column;
          padding: 0px 0px;

          &>.complex-support {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                  padding-top: 15px;
                }

                h3::after {
                  left: 0%;
                  width: 50%;
                  border-bottom: 3px solid $base-color-1;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }

            p span {
              color: $base-color-1;
              font-size: 16px;
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

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }

          &>.picture {
            img {
              width: 100%;
            }
          }
        }

        &>.complex-home {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 30px 0;

          &>.picture {
            img {
              width: 100%;
            }
          }

          &>.complex-support-content {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
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

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }
        }

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>.stroke-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        // &>.underline-wrap {
        //   &>.making-preparation {
        //     h3 {
        //       // border: 4px solid red;
        //       font-size: 16px;
        //       line-height: 25px;
        //     }
        //   }
        // }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.stroke-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.stroke-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.stroke-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
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
  .care-service-wrap {

    .up-icon {
      position: relative;

      .move-up {
        // border: 2px solid red;
        transition: ease;
        position: fixed;
        right: 10px;
        bottom: 20px;

        .icon-image {
          //  border: 2px solid red;
          width: 45px;
        }
      }
    }

    P {
      font-size: 18px !important;
    }

    h3 {
      font-size: 35px !important;
    }

    // The heart icons in the absolute pages
    .heart {
      width: 25px;
    }

    // border: 11px solid red;
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
          font-size: 50px;
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

    &>.line-paragraphy {
      // border: 11px solid red;
      margin-top: 30px;

      p {
        padding: 0 10px;
        // text-align: center;
      }

      &>.underline-wrap {
        padding: 0 10px;

        &>.making-preparation {
          // border: 4px solid red;
          margin-bottom: 30px;

          h3 {
            line-height: 50px;
            text-align: center;
          }

          h3::after {
            left: 0%;
            width: 100%;
          }
        }
      }

    }

    // First section with absolute styling
    section {

      &>.reliable {
        // border: 5px solid $base-color;
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
        padding: 0 0px;
        margin-bottom: 0px;

        &>.section-image {

          // border: 1px solid red;
          img {
            // border: 1px solid red;
            width: 100%;
            height: auto;
          }
        }

        &>.section-background {
          // border: 1px solid red;
          margin-top: -6px;
          position: relative;
          width: 100%;
          height: 500px;
          background-color: $base-color;

          &>.light-background {
            // border: 11px solid red;
            background-color: #FFFFFFB2;
            justify-content: center;
            align-items: center;
            width: 97.5%;
            top: -40px;
            bottom: 10px;
            right: 0px;
            left: 10px;

            &>.contents {
              // border: 2px solid red;
              width: 100%;
              display: flex;
              flex-direction: column;
              // overflow-y: scroll;
              padding: 10px;

              h2 {
                // border: 2px solid red;
                font-weight: 600;
                font-size: 35px !important;
                line-height: 30.86px;
                color: $base-color-1;
                padding-bottom: 30px;
                text-align: center;
              }

              &>.contents-wrap {
                // border: 2px solid red;
                display: flex;
                flex-direction: space-between;
                column-gap: 50px;
                line-height: 25px;
                padding-bottom: 10px;
                font-size: 16px !important;
              }
            }
          }
        }
      }
    }

    // <!-- YOUR SEARCH ENDS HERE -->
    &>.search-ends {
      // border: 3px solid red;
      margin-top: 20px;

      &>.underline-wrap {
        padding: 0 10px;

        &>.making-preparation {
          display: flex;
          justify-content: center;

          h3 {
            line-height: 50px;
          }
        }
      }

      p {
        // border: 3px solid red;
        padding: 0 10px;
        text-align: left;
        margin-bottom: 30px;
      }
    }

    &>.underline-wrap {
      // border: 2px solid blue;
      padding: 0 10px;
      margin-top: 20px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // border: 4px solid red;
        h3 {
          text-align: center;
        }
      }
    }

    &>.paragraph-dots {
      // border: 11px solid red;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      margin-bottom: 30px;

      &>.para {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
          padding-bottom: 30px;
          // text-align: center;
        }
      }

      &>.contents-dots {
        // border: 2px solid blue;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 10px;

        .contents {
          border: 1px solid rgba(0, 0, 0, 0.070);
          border-radius: 8px;
          width: calc((100% / 1) - 0px);
          display: flex;
          flex-wrap: wrap;
          padding: 8px 0;
        }
      }
    }

    .call-us-wrap {
      // border: 1px solid blue;
      background-color: $base-color-1;
      padding: 10px;

      &>.call-contact {
        // border: 22px solid blue;
        column-gap: 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div h3 {
          font-weight: 700;
          line-height: 20px;
          font-size: 16px;
          text-align: center;
        }

        &>.icon-contact {
          // border: 11px solid blue;
          border-radius: 8px;
          // width: 30%;
          padding: 15px 15px;
          column-gap: 10px;

          span {

            a {
              font-size: 14px;
            }
          }
        }
      }
    }

    &>.elderly-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        &>.underline-wrap {
          padding: 0 20px;

          &>.making-preparation {
            display: flex;
            justify-content: center;

            // border: 4px solid red;
            h3 {
              text-align: center;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            // border: 1px solid red;
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
              letter-spacing: 0em;
              text-align: center;
            }

            p {
              font-size: 16px;
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
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
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
          font-size: 16px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0em;
        }
      }
    }

    // Looking for elderly care support? component just below the elderly care with image of an advance lady

    &>.elderly-support {
      background-color: $base-color-2;

      .call-us {
        // border: 2px solid red;
        background-color: $base-color-1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        padding-bottom: 25px;

        &>.call-contact {
          // border: 10px solid blue;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;

          div h3 {
            color: #fff;
            font-size: 16px;
            line-height: 25px;
          }

          &>.icon-contact {
            // border: 10px solid blue;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 20px;

            span {
              // border: 11px solid red;
              border-radius: 5px;
              background-color: #fff;
              width: 100%;
              padding: 15px 15px;
              text-align: center;


              a {
                text-decoration: none;
                color: $base-color;
                font-size: 16px;
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

    &>.personal-care {
      // border: 1px solid red;
      padding: 10px 10px;

      &>.underline-wrap {
        &>.underline-care {
          margin-top: 20px;

          // border: 4px solid red;
          h3 {
            position: relative;
          }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-supporting {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.supporting {
          width: 100%;

          &>.underline-wrap {
            &>.supporting-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              h3 {
                position: relative;
                font-size: 16px;
                line-height: 25px;
                letter-spacing: 0em;
                line-height: 25px;
              }

              h3::after {
                bottom: 0;
                left: 0%;
                width: 40%;
                border-bottom: 3px solid $base-color-1;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
            letter-spacing: 0em;
          }

          p {
            font-size: 16px;
          }
        }
      }

      &>.choose-image {
        // border: 4px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0px 0;

        &>.content {
          width: 100%;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
          }
        }

        &>.image {
          width: 100%;

          img {
            width: 100%;
            height: auto;
          }
        }
      }

      &>.bathing-showering {
        // border: 11px solid red;
        padding: 0 0px;
        margin-bottom: 0px;

        h4 {
          font-size: 16px;

        }

        &>.contents-dots {
          // border: 2px solid blue;
          width: 100%;

          .contents {
            width: calc((100% / 1) - 0px);

            // &>.dots {
            //   &>.dots-span {
            //   }
            // }
          }
        }
      }
    }

    &>.getIn-touch {
      .call-us {
        background-color: $base-color-1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;

        &>.call-contact {
          width: 100%;
          display: flex;
          justify-content: center;

          div h3 {
            text-align: center;
            font-size: 16px;
            line-height: 30px;
          }

          &>.contact {
            // border: 11px solid red;
            display: flex;
            background-color: #fff;
            border-radius: 5px;
            color: $base-color;
            padding: 15px 25px;
            column-gap: 10px;

            span {
              display: flex;

              a {
                text-decoration: none;
                font-size: 16px;
              }
            }

            .phone-number {
              color: $base-color-1;
              font-weight: 700;
            }
          }
        }
      }
    }

    &>.domiciliary-care {
      // border: 13px solid red;

      &>.domiciliary {
        padding: 0 10px;

        &>.underline-domiciliary {
          padding: 0 10px;

          &>.making-preparation {

            // border: 4px solid red;
            h3 {
              font-size: 16px;
            }
          }
        }

        &>.image-domiciliary {
          // border: 2px solid red;
          padding: 0px 0;
          justify-content: center;

          &>.image {
            width: 100%;

            img {
              width: 100%;
              height: auto;
            }
          }

          &>.demociliary {
            width: 100%;

            h3 {
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }
        }

        &>.why-domiciliary {
          h3 {
            // border: 2px solid red;
            font-size: 16px;
          }

          p {
            font-size: 16px;
            line-height: 25px;
            letter-spacing: 0em;
          }
        }

        &>.consider-domiciliary {
          // border: 2px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
          }


          &>.paragraph-dots {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              column-gap: 0px;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.companionship-care {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {

          // border: 4px solid red;
          h3 {
            position: relative;
          }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-companionship {
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          &>.underline-wrap {
            &>.companionship-care {

              // border: 4px solid red;
              h3 {
                font-size: 16px;
                line-height: 25px;
              }

              h3::after {
                bottom: 0;
                left: 0%;
                width: 40%;
                border-bottom: 3px solid $base-color-1;
              }
            }
          }

          h4 {
            width: 100%;
            font-size: 16px;
          }

          p {
            font-size: 16px;
          }
        }
      }

      h3 {
        font-size: 16px;
        line-height: 25px;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }
    }

    &>.dementia-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   font-size: 16px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.elder-dementia-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.elder {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 11px solid red;
              font-size: 16px;
              line-height: 0px;
              padding-top: 15px
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.personal-assistance {
      // border: 11px solid red;
      padding: 0 10px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          display: flex;
          justify-content: center;

          // h3 {
          //   text-align: center;
          //   padding-top: 15px;
          // }
        }
      }

      p {
        font-size: 16px;
        line-height: 25px;
      }

      &>.image-personal-assistance {
        // border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        &>.image {
          img {
            width: 100%;
          }
        }

        &>.companionship {
          width: 100%;

          p {
            font-size: 16px;
          }

          h3 {
            font-size: 16px;
            line-height: 0px;
          }
        }
      }
    }

    &>.pet-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
          padding-bottom: 20px;
        }

        &>.pet-image-care {
          // border: 21px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0px;

          &>.pet-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }
          }

          &>.pet-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.life-care {


      &>.contents {
        // border: 12px solid rgb(5, 3, 116);
        padding: 0px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          padding: 10px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
              letter-spacing: 0em;
              padding-top: 15px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 0px;
        }
      }
    }

    &>.palliative-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.palliative-image-care {
          flex-direction: column;
          padding: 0px 0;

          &>.palliative-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 0px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.palliative-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.hospital-care {

      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }  
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.life-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }

        &>.consider-hospital {
          // border: 3px solid red;
          padding-top: 0px;

          h3 {
            font-size: 16px;
            line-height: 25px;
          }

          &>.paragraph-dots {
            padding-bottom: 30px;

            &>.contents-dots {
              // border: 2px solid blue;
              width: 100%;
              row-gap: 10px;

              .contents {
                width: calc((100% / 1) - 0px);
              }
            }
          }
        }
      }
    }

    &>.overnight-care {

      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.lady-elderly-care {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px 0;

          &>.lady {
            img {
              width: 100%;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }

            &>.paragraph-dots {

              &>.contents-dots {
                // border: 2px solid blue;
                width: 100%;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  width: calc((100% / 1) - 0px);

                  // .needs-assess {
                  //   color: #00000080;
                  // }
                }
              }
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.couples-care {
      &>.contents {
        // border: 2px solid red;
        padding: 0 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.couples-image-care {
          // border: 2px solid red;
          flex-direction: column;
          justify-content: center;
          padding: 0px 0;

          &>.couples-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.couples-picture {
            img {
              width: 100%;
              height: auto;
              padding-top: 10px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.live-in-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        // &>.underline-wrap {
        //   &>.making-preparation {

        //     // h3 {
        //     //   // border: 4px solid red;
        //     //   font-size: 16px;
        //     //   line-height: 25px;
        //     //   padding-top: 15px;
        //     // }
        //   }
        // }

        p {
          // border: 2px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        &>.wheelchair-live-in-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 10px 0;

          &>.wheelchair-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.important-care {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.respite-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.respite-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;
          padding-top: 20px;

          &>.respite-picture {
            img {
              width: 100%;
              height: auto;
            }
          }

          &>.respite-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
        }
      }
    }

    &>.complex-care {
      &>.contents {
        // border: 2px solid red;
        padding: 10px 10px;

        &>.underline-wrap {
          &>.making-preparation {

            // h3 {
            //   // border: 4px solid red;
            //   font-size: 16px;
            //   line-height: 25px;
            //   padding-top: 15px;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.complex-support-plan {
          // border: 2px solid red;
          justify-content: center;
          flex-direction: column;
          padding: 0px 0px;

          &>.complex-support {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                  padding-top: 15px;
                }

                h3::after {
                  left: 0%;
                  width: 50%;
                  border-bottom: 3px solid $base-color-1;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }

            p span {
              color: $base-color-1;
              font-size: 16px;
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

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }

          &>.picture {
            img {
              width: 100%;
            }
          }
        }

        &>.complex-home {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 30px 0;

          &>.picture {
            img {
              width: 100%;
            }
          }

          &>.complex-support-content {
            width: 100%;

            &>.underline-wrap {
              &>.making-preparation {

                h3 {
                  // border: 4px solid red;
                  font-size: 16px;
                  line-height: 25px;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
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

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 16px;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 0px);
                  display: flex;
                  flex-wrap: wrap;
                  padding: 8px 0;
                }
              }
            }
          }
        }

        h3 {
          // border: 1px solid red;
          font-size: 16px;
          line-height: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    &>.stroke-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 10px;

        // &>.underline-wrap {
        //   &>.making-preparation {
        //     h3 {
        //       // border: 4px solid red;
        //       font-size: 16px;
        //       line-height: 25px;
        //     }
        //   }
        // }

        p {
          // border: 2px solid red;
          font-size: 16px;
        }

        &>.stroke-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding: 0;

          &>.stroke-content {
            width: 100%;

            h3 {
              // border: 1px solid red;
              font-size: 16px;
              line-height: 25px;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 16px;
            }

            p {
              font-size: 16px;
            }
          }

          &>.stroke-picture {
            img {
              width: 100%;
              height: auto;
            }
          }
        }

        &>h3 {
          // border: 1px solid green;
          font-size: 16px;
          line-height: 25px;
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

// LG
@media (min-width: 992px) and (max-width: 1200.9px) {
  .care-service-wrap {
    // border: 1px solid red;

    &>.underline-wrap {
      padding: 0 20px;

      &>.making-preparation {
        display: flex;
        justify-content: center;

        // // border: 4px solid red;
        // h3 {
        //   position: relative;
        //   font-size: 30px;
        //   font-weight: 700;
        //   line-height: 60px;
        //   letter-spacing: 0em;
        // }
      }
    }

    &>.paragraph-dots {
      // border: 11px solid red;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      margin-bottom: 30px;

      &>.para {
        p {
          font-size: 16px;
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

        .contents {
          border: 1px solid rgba(0, 0, 0, 0.070);
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
      padding: 0 20px;

      &>.call-contact {
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

        &>.icon-contact {
          // border: 11px solid red;
          background-color: #fff;
          border-radius: 20px;
          color: $base-color;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px 20px;
          column-gap: 10px;

          span {
            display: flex;

            a {
              text-decoration: none;
              font-size: 16px;
            }
          }

          .phone-number {
            color: $base-color-1;
            font-weight: 700;
          }
        }
      }
    }

    &>.elderly-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          column-gap: 50px;
          padding: 30px 0;

          &>.lady {
            img {
              width: 450px;
            }
          }

          &>.important-care {
            // border: 22px solid red;
            width: 600px;

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

    // Looking for elderly care support? component just below the elderly care with image of an advance lady

    &>.elderly-support {
      background-color: $base-color-2;

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
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 30px;

            span {
              // border: 11px solid red;
              border-radius: 20px;
              background-color: #fff;
              padding: 15px 20px;


              a {
                text-decoration: none;
                color: $base-color;
                font-size: 16px;
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

    &>.personal-care {
      // border: 1px solid red;
      padding: 0 20px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;

          // // border: 4px solid red;
          // h3 {
          //   position: relative;
          //   font-size: 30px;
          //   font-weight: 700;
          //   line-height: 60px;
          //   letter-spacing: 0em;
          // }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-supporting {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 450px;
          }
        }

        &>.supporting {
          width: 500px;

          &>.underline-wrap {
            &>.supporting-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              // // border: 4px solid red;
              // h3 {
              //   position: relative;
              //   font-size: 30px;
              //   font-weight: 700;
              //   line-height: 48px;
              //   letter-spacing: 0em;
              // }

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

      &>.choose-image {
        // border: 4px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 30px 0;

        &>.content {
          width: 500px;

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

        &>.image {
          img {
            width: 450px;
            height: 650px;
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
          color: $base-color;
          font-size: 20px;
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
            border-radius: 8px;
            padding: 8px 0;

            &>.dots {
              &>.dots-span {
                // border: 2px solid red;
                display: flex;
                align-items: center;
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
        padding: 10px 20px;

        &>.call-contact {
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

          &>.contact {
            // border: 11px solid red;
            background-color: #fff;
            border-radius: 20px;
            color: $base-color;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px 20px;
            column-gap: 10px;

            span {
              display: flex;

              a {
                text-decoration: none;
                font-size: 16px;
              }
            }

            .phone-number {
              color: $base-color-1;
              font-weight: 700;
            }
          }
        }
      }
    }

    &>.domiciliary-care {
      &>.domiciliary {
        padding: 0 20px;

        &>.underline-domiciliary {
          padding: 0 20px;

          &>.making-preparation {
            display: flex;
            justify-content: center;

            // // border: 4px solid red;
            // h3 {
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        &>.image-domiciliary {
          // border: 2px solid red;
          padding: 30px 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          &>.image {
            img {
              width: 450px;
              height: 550px;
            }
          }

          &>.demociliary {
            width: 500px;

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
        }

        &>.why-domiciliary {
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

              .contents {
                border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 1) - 17px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.companionship-care {
      // border: 1px solid red;
      padding: 0 20px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
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
        justify-content: space-between;
        align-items: center;

        &>.image {
          img {
            width: 450px;
          }
        }

        &>.companionship {
          width: 500px;

          &>.underline-wrap {
            &>.companionship-care {
              display: flex;
              justify-content: center;
              flex-direction: column;
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

    &>.dementia-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

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

        &>.elder-dementia-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.elder {
            img {
              width: 450px;
              height: 550px;
            }
          }

          &>.important-care {
            width: 500px;

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
      padding: 0 20px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;

          // // border: 4px solid red;
          // h3 {
          //   position: relative;
          //   font-size: 30px;
          //   font-weight: 700;
          //   line-height: 60px;
          //   letter-spacing: 0em;
          // }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-personal-assistance {
        // border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 450px;
          }
        }

        &>.companionship {
          width: 500px;

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

    &>.pet-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.pet-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.pet-content {
            width: 500px;

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

          &>.pet-picture {
            img {
              width: 450px;
              height: auto;
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

    &>.life-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.lady {
            img {
              width: 450px;
            }
          }

          &>.life-content {
            width: 500px;

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

    &>.palliative-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.palliative-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.palliative-content {
            width: 500px;

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

          &>.palliative-picture {
            img {
              width: 450px;
              height: auto;
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

    &>.hospital-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.lady {
            img {
              width: 450px;
            }
          }

          &>.life-content {
            width: 500px;

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

        &>.consider-hospital {
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

              .contents {
                border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 1) - 17px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.overnight-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.lady {
            img {
              width: 450px;
            }
          }

          &>.important-care {
            width: 500px;

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
                  color: $base-color-1;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 25px;
                  letter-spacing: 0em;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 17px);
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

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.couples-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

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

        &>.couples-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.couples-content {
            width: 500px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 18px;
              font-weight: 500;
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

          &>.couples-picture {
            img {
              width: 450px;
              height: 800px;
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

    &>.live-in-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            // h3 {
            //   // border: 4px solid red;
            //   position: relative;
            //   font-size: 30px;
            //   font-weight: 700;
            //   line-height: 60px;
            //   letter-spacing: 0em;
            // }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.wheelchair-live-in-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.wheelchair-picture {
            img {
              width: 450px;
              height: 550px;
            }
          }

          &>.important-care {
            width: 500px;

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

    &>.respite-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

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

        &>.respite-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.respite-picture {
            img {
              width: 450px;
              height: 800px;
            }
          }

          &>.respite-content {
            width: 500px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 18px;
              font-weight: 500;
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

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.complex-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

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

        &>.complex-support-plan {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.complex-support {
            width: 500px;

            &>.underline-wrap {
              &>.making-preparation {
                // display: flex;
                // justify-content: center;
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 18px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p span {
              color: $base-color-1;
              font-size: 16px;
              font-weight: 600;
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
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 25px;
                  letter-spacing: 0em;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 3) - 30px);
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

          &>.picture {
            img {
              width: 450px;
            }
          }
        }

        &>.complex-home {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.picture {
            img {
              width: 450px;
            }
          }

          &>.complex-support-content {
            width: 500px;

            &>.underline-wrap {
              &>.making-preparation {
                // display: flex;
                // justify-content: center;

                h3 {
                  // border: 4px solid red;
                  font-size: 22px;
                  font-weight: 700;
                  line-height: 40px;
                  letter-spacing: 0em;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 20px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
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
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 25px;
                  letter-spacing: 0em;
                }

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

    &>.stroke-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

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

        &>.stroke-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 0;

          &>.stroke-content {
            width: 500px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 18px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p span {
              font-weight: 700;
            }
          }

          &>.stroke-picture {
            img {
              width: 450px;
              height: 800px;
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

// XL
@media (min-width: 1201px) and (max-width: 1499.9px) {
  .care-service-wrap {
    // border: 1px solid red;

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
          border-radius: 10px;
        }
      }
    }

    &>.paragraph-dots {
      // border: 11px solid red;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      margin-bottom: 30px;

      &>.para {
        p {
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
          padding-bottom: 30px;
          color: #00000080;
        }
      }

      &>.contents-dots {
        // border: 2px solid blue;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        row-gap: 10px;
        color: #00000080;

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
      padding: 0 20px;

      &>.call-contact {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        h3 {
          color: #fff;
          font-weight: 400;
          font-size: 25px;
          font-weight: 600;
          line-height: 40px;
          letter-spacing: 0em;
        }

        &>.icon-contact {
          // border: 11px solid red;
          background-color: #fff;
          border-radius: 20px;
          color: $base-color;
          display: flex;
          align-items: center;
          justify-content: center;
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
            color: $base-color-1;
            font-weight: 600;
          }
        }
      }
    }

    &>.elderly-care {
      // background-image: linear-gradient(148.01deg, rgba(218, 94, 66, 0.2) -0.47%, rgba(218, 94, 66, 0.4) 56.24%);
      // ;

      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              font-weight: 600;
              line-height: 50px;
              letter-spacing: 0em;
              color: $base-color-1;
            }

            h3::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: -5%;
              width: 110%;
              border-bottom: 2px solid $base-color-1;
              border-radius: 10px;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          column-gap: 20px;
          padding: 30px 0;

          &>.lady {
            img {
              width: 500px;
            }
          }

          &>.important-care {
            width: 750px;

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

    // Looking for elderly care support? component just below the elderly care with image of an advance lady

    &>.elderly-support {
      background-color: $base-color-2;

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
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 30px;

            span {
              // border: 11px solid red;
              border-radius: 20px;
              background-color: #fff;
              padding: 10px 20px;


              a {
                text-decoration: none;
                font-size: 16px;
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

    &>.personal-care {
      // border: 1px solid red;
      padding: 0 20px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;

          // border: 4px solid red;
          h3 {
            position: relative;
            font-size: 30px;
            font-weight: 700;
            letter-spacing: 0em;
          }

          h3::after {
            content: '';
            position: absolute;
          }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-supporting {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>.image {
          img {
            width: 550px;
          }
        }

        &>.supporting {
          width: 600px;

          &>.underline-wrap {
            &>.supporting-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              // border: 4px solid red;
              h3 {
                position: relative;
                font-size: 30px;
                font-weight: 700;
                line-height: 40px;
                letter-spacing: 0em;
              }

              h3::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0%;
                width: 30%;
              }
            }
          }

          h4 {
            width: 450px;
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

      &>.choose-image {
        // border: 4px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 30px 0;
        column-gap: 20px;

        &>.content {
          width: 600px;

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

        &>.image {
          img {
            width: 550px;
            height: 650px;
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
          font-size: 20px;
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
            border-radius: 8px;
            padding: 8px 0;

            &>.dots {
              &>.dots-span {
                // border: 2px solid red;
                display: flex;
                align-items: center;
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
        padding: 10px 20px;

        &>.call-contact {
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

          &>.contact {
            // border: 11px solid red;
            background-color: #fff;
            border-radius: 20px;
            color: $base-color;
            display: flex;
            align-items: center;
            justify-content: center;
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
              color: $base-color-1;
              font-weight: 700;
            }
          }
        }
      }
    }

    &>.domiciliary-care {
      &>.domiciliary {
        padding: 0 20px;

        &>.underline-domiciliary {
          padding: 0 20px;

          &>.making-preparation {
            display: flex;
            justify-content: center;

            // border: 4px solid red;
            h3 {
              position: relative;
              font-size: 30px;
              font-weight: 700;
              line-height: 50px;
              letter-spacing: 0em;
            }

            // h3::after {
            //   content: '';
            //   position: absolute;
            //   bottom: 0;
            //   left: 10%;
            //   width: 80%;
            // }
          }
        }

        &>.image-domiciliary {
          // border: 2px solid red;
          padding: 30px 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          colum-gap: 20px;

          &>.image {
            img {
              width: 550px;
              height: 550px;
            }
          }

          &>.demociliary {
            width: 600px;

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
        }

        &>.why-domiciliary {
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

              .contents {
                border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 1) - 17px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.companionship-care {
      // border: 1px solid red;
      padding: 0 20px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;

          // border: 4px solid red;
          h3 {
            position: relative;
            font-size: 30px;
            letter-spacing: 0em;
          }

          // h3::after {
          //   content: '';
          //   position: absolute;
          //   bottom: 0;
          //   left: 10%;
          //   width: 80%;
          //   border-radius: 10px;
          // }
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
        justify-content: space-between;

        &>.image {
          img {
            width: 550px;
          }
        }

        &>.companionship {
          width: 600px;

          &>.underline-wrap {
            &>.companionship-care {
              display: flex;
              justify-content: center;
              flex-direction: column;

              // border: 4px solid red;
              h3 {
                position: relative;
                font-size: 30px;
                font-weight: 700;
                letter-spacing: 0em;
              }

              h3::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0%;
                width: 30%;
                border-radius: 10px;
              }
            }
          }

          h4 {
            width: 450px;
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

    &>.dementia-care {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              letter-spacing: 0em;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.elder-dementia-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.elder {
            img {
              width: 500px;
              height: 550px;
            }
          }

          &>.important-care {
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
      padding: 0 20px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
          // border: 3px solid red;
          display: flex;
          justify-content: center;

          // border: 4px solid red;
          h3 {
            position: relative;
            font-size: 30px;
            font-weight: 700;
            line-height: 60px;
            letter-spacing: 0em;
          }
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
      }

      &>.image-personal-assistance {
        // border: 2px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

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

    &>.pet-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              line-height: 50px;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.pet-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.pet-content {
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

          &>.pet-picture {
            img {
              width: 500px;
              height: auto;
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

    &>.life-care {


      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              font-weight: 700;
              line-height: 60px;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.lady {
            img {
              width: 500px;
            }
          }

          &>.life-content {
            // width: 750px;

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

    &>.palliative-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              font-weight: 700;
              line-height: 60px;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.palliative-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.palliative-content {
            // width: 750px;

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

          &>.palliative-picture {
            img {
              width: 500px;
              height: auto;
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

    &>.hospital-care {


      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.life-care-image {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.lady {
            img {
              width: 500px;
            }
          }

          &>.life-content {
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

        &>.consider-hospital {
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

              .contents {
                border: 1px solid rgba(0, 0, 0, 0.070);
                border-radius: 8px;
                width: calc((100% / 1) - 17px);
                display: flex;
                flex-wrap: wrap;
                padding: 8px 0;
              }
            }
          }
        }
      }
    }

    &>.overnight-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.lady-elderly-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.lady {
            img {
              width: 500px;
            }
          }

          &>.important-care {
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
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 25px;
                  letter-spacing: 0em;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 1) - 17px);
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

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.couples-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              font-weight: 700;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.couples-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.couples-content {
            width: 650px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            h4 {
              // border: 2px solid red;
              font-size: 18px;
              font-weight: 500;
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

          &>.couples-picture {
            img {
              width: 500px;
              height: 800px;
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

    &>.live-in-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.wheelchair-live-in-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.wheelchair-picture {
            img {
              width: 500px;
              height: auto;
            }
          }

          &>.important-care {
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

    &>.respite-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
              font-size: 30px;
              letter-spacing: 0em;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.respite-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.respite-picture {
            img {
              width: 500px;
              height: 800px;
            }
          }

          &>.respite-content {
            width: 650px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            h4 {
              // border: 2px solid red;
              font-size: 18px;
              font-weight: 500;
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

        &>h3 {
          // border: 1px solid green;
          font-size: 22px;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }
      }
    }

    &>.complex-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
            }

            h3::after {
              content: '';
              position: absolute;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.complex-support-plan {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.complex-support {
            width: 650px;

            // &>.underline-wrap {
            //   &>.making-preparation {
            //     // display: flex;
            //     // justify-content: center;

            //     h3 {
            //       // border: 4px solid red;
            //       position: relative;
            //       font-size: 30px;
            //       font-weight: 700;
            //       line-height: 60px;
            //       letter-spacing: 0em;
            //     }

            //     h3::after {
            //       content: '';
            //       position: absolute;
            //       bottom: 0;
            //       left: 0;
            //       width: 50%;
            //       border-bottom: 7px solid $base-color-1;
            //       border-radius: 10px;
            //     }
            //   }
            // }

            h4 {
              // border: 2px solid red;
              font-size: 18px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p span {
              font-size: 16px;
              font-weight: 600;
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
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  color: $base-color-1;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 25px;
                  letter-spacing: 0em;
                }

                .contents {
                  border: 1px solid rgba(0, 0, 0, 0.070);
                  border-radius: 8px;
                  width: calc((100% / 3) - 30px);
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

          &>.picture {
            img {
              width: 500px;
              height: auto;
            }
          }
        }

        &>.complex-home {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.picture {
            img {
              width: 500px;
            }
          }

          &>.complex-support-content {
            width: 650px;

            &>.underline-wrap {
              &>.making-preparation {
                // display: flex;
                // justify-content: center;

                h3 {
                  // border: 4px solid red;
                  font-size: 22px;
                  font-weight: 700;
                  line-height: 40px;
                  letter-spacing: 0em;
                }
              }
            }

            h4 {
              // border: 2px solid red;
              font-size: 20px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
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
                flex-wrap: wrap;
                column-gap: 30px;
                row-gap: 10px;

                h4 {
                  // border: 2px solid red;
                  font-size: 18px;
                  font-weight: 500;
                  line-height: 25px;
                  letter-spacing: 0em;
                }

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

    &>.stroke-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 20px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;

            h3 {
              // border: 4px solid red;
              position: relative;
            }
          }
        }

        p {
          // border: 2px solid red;
          font-size: 16px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0em;
        }

        &>.stroke-image-care {
          // border: 2px solid red;
          display: flex;
          justify-content: space-between;
          padding: 30px 0;

          &>.stroke-content {
            width: 650px;

            h3 {
              // border: 1px solid red;
              font-size: 22px;
              font-weight: 700;
              line-height: 40px;
              letter-spacing: 0em;
            }

            h4 {
              // border: 2px solid red;
              color: $base-color-1;
              font-size: 18px;
              font-weight: 500;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p {
              font-size: 16px;
              font-weight: 400;
              line-height: 25px;
              letter-spacing: 0em;
            }

            p span {
              font-weight: 700;
            }
          }

          &>.stroke-picture {
            // img {
            //   width: 500px;
            //   height: auto;
            // }
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
  }
}

// XXL
@media (min-width: 1500px) {
  .care-service-wrap {

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

    P {
      font-size: 28px !important;
      line-height: 50px !important;
    }

    h2 {
      font-size: 40px;
    }

    h3 {
      // border: 2px solid red;
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
      padding: 0 20px;

      &>.call-contact {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        h3 {
          color: #fff;
          font-weight: 400;
          font-size: 40px !important;
          font-weight: 700;
          line-height: 40px;
          letter-spacing: 0em;
        }

        &>.icon-contact {
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

    &>.elderly-care {

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

        &>.lady-elderly-care {
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

          &>.important-care {
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

    // Looking for elderly care support? component just below the elderly care with image of an advance lady

    &>.elderly-support {
      .call-us {
        padding: 10px 20px;

        &>.call-contact {
          // border: 14px solid red;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          flex-wrap: wrap;
          column-gap: 20px;

          div h3 {
            color: #fff;
            font-weight: 400;
            font-size: 40px !important;
            font-weight: 700;
            line-height: 30px;
            letter-spacing: 0em;
          }

          &>.icon-contact {
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

    &>.personal-care {
      // border: 11px solid red;
      padding: 0 200px;

      &>.underline-wrap {
        &>.underline-care {
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
        // border: 12px solid red;
        background-color: $base-color-1;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;

        &>.call-contact {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          column-gap: 50px;

          div h3 {
            // border: 2px solid red;
            color: #fff;
            font-size: 40px !important;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;

          }

          &>.contact {
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

    &>.domiciliary-care {
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

    &>.companionship-care {
      // border: 11px solid red;
      padding: 0 200px;
      padding-bottom: 20px;

      &>.underline-wrap {
        &>.underline-care {
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
            &>.companionship-care {
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

    &>.dementia-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;


        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        &>.elder-dementia-care {
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

          &>.important-care {
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
        &>.underline-care {
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

    &>.pet-care {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .pet-image-care {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.life-care {


      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;


        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }


        .life-care-image {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.palliative-care {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .palliative-image-care {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.hospital-care {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .life-care-image {
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

    &>.overnight-care {
      &>.contents {
        // border: 12px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .lady-elderly-care {
          justify-content: center;
          column-gap: 300px;

          .important-care {
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

    &>.couples-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .couples-image-care {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.live-in-care {

      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .wheelchair-live-in-care {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.respite-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .respite-image-care {
          justify-content: center;
          column-gap: 300px;
        }
      }
    }

    &>.complex-care {
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

    &>.stroke-care {
      &>.contents {
        // border: 2px solid red;
        padding: 20px 200px;

        &>.underline-wrap {
          &>.making-preparation {
            display: flex;
            justify-content: center;
          }
        }

        .stroke-image-care {
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
