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
</script>

<template>
  <header>
    <div class="topheader-wrap">
      <nav>
        <div class="phone-routing">

          <div class="routing">
            <RouterLink class="icon-links" to="/"> Home</RouterLink>

            <RouterLink class="icon-links" to="/home-care-services">
              <div class="dropdown">
                <div class="dropdown-span">
                  <span class="dropdwon-icon">Home Care Services<span>
                      <Icon icon="ic:sharp-arrow-drop-down" width="30" height="30" style="color: white" />
                    </span></span>
                </div>
                <div class="dropdown-content">
                  <a href="#elderly" @click.prevent="(e) => handleSubMenuClick(e, 'elderly')">Elderly Care</a>

                  <a href="#personal" @click.prevent="(e) => handleSubMenuClick(e, 'personal')">Personal Care</a>

                  <a href="#domiciliary" @click.prevent="(e) => handleSubMenuClick(e, 'domiciliary')">Domiciliary Care</a>

                  <a href="#companionship" @click.prevent="(e) => handleSubMenuClick(e, 'companionship')">Companionship Care & Support</a>

                  <a href="#dementia" @click.prevent="(e) => handleSubMenuClick(e, 'dementia')">Dementia Care</a>

                  <a href="#assistance"  @click.prevent="(e) => handleSubMenuClick(e, 'assistance')">Personal Assistance</a>

                  <a href="#pet"  @click.prevent="(e) => handleSubMenuClick(e, 'pet')">Pet-care Care</a>

                  <a href="#life" @click.prevent="(e) => handleSubMenuClick(e, 'life')">End of Life Care</a>

                  <a href="#palliative" @click.prevent="(e) => handleSubMenuClick(e, 'palliative')">Palliative Care</a>

                  <a href="#hospital" @click.prevent="(e) => handleSubMenuClick(e, 'hospital')">Hospital To Home Care</a>

                  <a href="#overnight" @click.prevent="(e) => handleSubMenuClick(e, 'overnight')">Overnight Care</a>

                  <a href="#couples" @click.prevent="(e) => handleSubMenuClick(e, 'couples')">Live-In Couples Care</a>

                  <a href="#live" @click.prevent="(e) => handleSubMenuClick(e, 'live')">Live-In Care</a>

                  <a href="#respite" @click.prevent="(e) => handleSubMenuClick(e, 'respite')">Respite Care</a>

                  <a href="#complex" @click.prevent="(e) => handleSubMenuClick(e, 'complex')">Complex Care</a>

                  <a href="#stroke"  @click.prevent="(e) => handleSubMenuClick(e, 'stroke')">Stroke Care</a>

                </div>
              </div>
            </RouterLink>

            <RouterLink class="icon-links" to="/CostCalculator"> Our Care Givers 
            </RouterLink>

            <RouterLink class="icon-links" to="/disablity-support">
              <div class="dropdown">
                <div class="dropdown-span">
                  <span class="dropdwon-icon">News & Resources <span>
                      <Icon icon="ic:sharp-arrow-drop-down" width="30" height="30" style="color: white" />
                    </span></span>
                </div>
                <!-- Dropdown #tag for Single page navigation -->
                <div class="dropdown-content about-drop">
                  <RouterLink class="icon-links" to="/news-blogs"> News and Blogs
                  </RouterLink>

                  <RouterLink class="icon-links" to="/health-safety"> Health and Safety
                  </RouterLink>

                  <RouterLink class="icon-links" to="/helpful-links"> Helpful Senior Links
                  </RouterLink>
                        
                </div>
              </div>
            </RouterLink>

            <RouterLink class="icon-links" to="/about-us">
              <div class="dropdown">
                <div class="dropdown-span">
                  <span class="dropdwon-icon">About <span>
                      <Icon icon="ic:sharp-arrow-drop-down" width="30" height="30" style="color: white" />
                    </span></span>
                </div>
                <!-- Dropdown #tag for Single page navigation -->
                <div class="dropdown-content about-drop">
                  <RouterLink class="icon-links" to="/frequent-question"> Frequently Asked Questions 
                  </RouterLink>
                </div>
              </div>
            </RouterLink>
      
            <RouterLink class="icon-links" to="/Contact-Us"> Contact </RouterLink>

            <!-- <RouterLink class="icon-links free" to="/vacancy"> Request Free Assessment </RouterLink> -->
          </div>
        </div>
      </nav>
    </div>

  </header>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .topheader-wrap {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    // border: 12px solid red;
    // header- nav
    nav {
      font-family: Montserrat;
      background-color: $base-color-1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 14px;
      font-weight: 600;
      padding: 15px 0;

      &>.phone-routing {
        // border: 5px solid red;
        display: flex;
        justify-content: center;
        align-items: center;

        &>.routing {
          // border: 2px solid red;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 50px;
          padding-right: 20px;

          &>.free {
            // background-color: $base-color-1;
            border-radius: 10px;
            color: #fff !important;
            padding: 10px;
          }

          &>.icon-links {
            color: $base-color-1;
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: #fff;

            .dropdown {
              position: relative;
              display: inline-block;
            }

            .dropdwon-icon {
              // border: 2px solid red;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 16px;
              // color: $base-color-1;
              color: #fff;
            }

            .dropdown-content {
              // border: 3px solid red;
              font-size: 14px;
              font-weight: 700;
              line-height: 18px;
              display: none;
              position: absolute;
              background-color: $base-color-1;
              min-width: 160px;
              box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
              z-index: 1;
              height: 300px;
              overflow-y: scroll;
            }

            .about-drop {
              font-size: 14px;
              font-weight: 700;
              line-height: 18px;
              display: none;
              position: absolute;
              background-color: $base-color-1;
              min-width: 160px;
              box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
              z-index: 1;
              height: fit-content !important;
              overflow-y: hidden;
            }

            .dropdown-content a {
              border-bottom: 1px solid #fff;
              color: black;
              // padding: 2px 10px;
              text-decoration: none;
              display: block;
              padding: 10px;
              text-align: right;
              color: #fff;
            }

            .dropdown-content a:hover {
              color: $base-color-1;
              background-color: #fff;
              padding: 10px;
            }

            .dropdown:hover .dropdown-content {
              display: block;
            }

            span {
              display: flex;
            }
          }
          
          &>.icon-links:hover {
            border-bottom: 3px solid #fff;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    .topheader-wrap {
      // border: 12px solid red;


      // header- nav
      nav {
        border: 2px solid red;
        color: #fff;
        padding: 5px 0px;
        padding-right: 0px;
        font-size: 16px;

        &>.phone-routing {
          // border: 5px solid red;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 0px;

          &>.routing {
            // border: 2px solid red;
            width: 100%;
            display: flex;
            justify-content: left;
            flex-wrap: wrap;
            column-gap: 0px;

            &>.icon-links {
              // background-color: #0B33C1;
              border-radius: 8px;
              padding: 7px 15px;
              color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              column-gap: 5px;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
</style>
