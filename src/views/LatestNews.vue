<script setup lang="ts">
import { NH2 } from 'naive-ui';
import { defineComponent, ref } from 'vue';

import Image1 from '@/assets/images/newImage/newsimage.png'
</script>

<template>
  <div class="latest-page-wrap">
    <div class="banner">
      <div class="intro-content">
        <h2 class="intro-title">
          A Day In The Life Of A
        </h2>
        <h1 class="intro-subtitle">
          Caregiver
        </h1>
      </div>
    </div>
    <!-- This section carries all the contents in this page -->
    <div class="latest-contents">
      <section class="first">
        <!-- underline h3 text -->
        <div class="icon-content">
          <h3>
            <RouterLink class="icon-links" to="/news-and-resources">
              <span>
                <Icon icon="typcn:arrow-back" width="40" height="40" style="color: #4897E6" />
              </span>
              Back To News
            </RouterLink>
         
          </h3>
          <p>
            As the general, worldwide trend is for people to live longer, caregivers are playing an increasingly vital
            role in
            our society. In-home aides provide assistance and ensure the well-being of their clients. They can have a
            dramatic impact on the families and individuals they help serve. Many of those drawn to a career as a
            caregiver
            have an innate desire to help others, and few roles offer such a big opportunity to make a real and ongoing
            difference.
          </p>
          <p>
            Caregivers lend a helping, supportive hand to the elderly, those with disabilities, and others in need of
            assistance. In this way, they have played an important role in raising the quality of life for countless
            people.
          </p>
        </div>

        <div>
          <h3>
            Morning—Time to Start the Day Right
          </h3>
          <p>
            When caring for older adults, it's critical to first learn what, precisely, their needs are, and then
            determine an
            appropriate schedule to match up to those needs. Naturally, routines may vary. While most clients will be
            early
            birds and want to wake up with the sun, others will be night owls and want to sleep in late.
            The best home care organizations match clients and caregivers who are a good fit for each other. In the
            above
            scenarios, that would mean matching early rising caregivers with early rising clients, and so forth.
            Regardless of
            when the day “begins” caregivers are always instrumental in helping folks get their day started and moving
            in a
            positive direction.
          </p>
          <p>
            For breakfast, in-home aides can prepare nutritious and tasty meals. Older adults often enjoy lighter
            breakfasts,
            but as always, open and honest communication is the key to understanding their preferences. Caregivers can
            also help individuals take their prescribed medications on time, and in a manner that is well organized.
            Clients
            might also need assistance with basic hygiene, such as brushing their teeth or combing their hair.
          </p>
          <p>
            Some days, a client might need to see a doctor, dentist, or legal or financial advisors. Caregivers can help
            by
            driving a client's car, scheduling rideshares, or coordinating access to public transportation.
            Regular exercise is also an important need for the elderly. Walking, or participating in any light cardio
            activity,
            can help improve an individual's health and well-being. A caregiver can be a great motivator in helping
            clients
            achieve these simple but important goals.
          </p>
        </div>

        <div>
          <h3>
            Afternoon—Lunch, Midday Tasks, and Daily Living
          </h3>
          <p>
            Properly trained in-home aides can help their clients develop, or stick to, a healthy diet. The elderly
            typically
            have different nutritional needs than people in their youth. Of course, diet restrictions and requirements
            will
            vary widely, so it's important to collaborate closely with families, medical practitioners, and clients.
            Caregivers
            can also ensure that religious or other meal requirements are met—whether that be kosher, halal, or
            vegetarian
            or vegan fare. Lunch is also a great time for the client and caregiver to plan out their day.

          </p>
          <p>
            If the client has errands to run—to the grocery store, to the pharmacy, or to visit with friends—the early
            afternoon
            is often a good time. Caregivers might also take clients to houses of worship. As the day wears on, many
            seniors
            will want to rest by taking a nap, or simply settling down with a book or a show on television. This is also
            a good
            time for the caregiver to help with chores around the house.

          </p>
        </div>

        <div>
          <h3>
            Evening—Dinner, and Time to Wind Down
          </h3>
          <p> For elderly folks, the dinner hour is typically in the late afternoon, rather than at night. Once again,
            communication is key, so caregivers will want to tailor their routine to the unique requirements of their
            client.
            Ideally, the in-home aide will prepare a healthy and delicious dinner, then finish up with evening house
            chores,
            such as washing the dishes or doing laundry. The caregiver can also help the client take prescribed
            medications,
            brush their teeth, go to the bathroom, and otherwise prepare for bed. It is not uncommon for clients to need
            assistance with getting into bed, or with gathering what they need for a comfortable night's sleep, once in
            bed.
            The caregiver should make sure that doors are locked, appliances are turned off, nightlights are
            functioning, and
            that everything in the home is in its proper place. The biggest danger is that of nighttime falls, so
            caregivers
            should be especially vigilant for tripping hazards.
            Finally, aides often keep notes about client’s likes/dislikes, meal preferences, schedules, and other
            helpful insights.
            These can be shared with the family, or another caregiver who might also be helping the client.
          </p>
        </div>

        <div>
          <h3>
            Becoming a Caregiver
          </h3>
          <p> A day in the life of a caretaker is varied, busy, and all about care. If you're looking for a rewarding,
            impactful
            career—working as a caregiver may be the perfect fit. Further, if you want to work with an organization that
            truly
            values your talents and compassion, LoveNest Care is currently welcoming new applicants. Our team
            understands that our caregivers are literally and fundamentally who we are. LoveNest will help you through
            every step, as you begin this exciting journey. To view our open positions, or simply learn more about our
            philosophy, visit us online or give us a call today at  07931 918596.
          </p>
        </div>

      </section>

      <!-- Related New Blogs -->

      <!-- LATEST NEWS & BLOG -->
      <section>
        <div class="line-paragraphy">
          <!-- underline contents -->
          <div class="underline-wrap">
            <div class="making-preparation">
              <h3>
                <RouterLink class="icon-links" to="/latest-new">
                  LATEST NEWS & BLOG <span>

                    <Icon icon="clarity:cursor-hand-click-line" width="50" height="50" style="color: #4897E6" />
                  </span> </RouterLink>
              </h3>
            </div>
          </div>

          <p>
            See the latest news from LoveNest and get helpful information on senior in-home care.
          </p>

          <div class="cards">
            <!-- card with light blue style 1 -->
            <div class="items">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="reliable">
                    <div class="section-image">
                      <img :src="Image1" alt="picture">
                    </div>
                    <div class="section-background">

                      <div class="light-background">
                        <div class="contents">
                          <h2>
                            A Day in the Life of a
                            Caregiver
                          </h2>
                          <p>
                            As the general, worldwide trend is for people to live longer, caregivers are playing an
                            increasingly vital role in our society. In-home aides ...
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <!-- card with light red style 1 -->
            <div class="items">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="reliable">
                    <div class="section-image">
                      <img :src="Image1" alt="picture">
                    </div>
                    <div class="section-background first-long-lenght">

                      <div class="light-background">
                        <div class="contents">
                          <h2>
                            The LoveNest
                            Difference:
                            What Sets Us Apart
                          </h2>
                          <p>
                            Accesss to good health care is vital for folks at any stage of life, but it is particularly
                            important to older adults.
                            Regular, reliable health care ...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- card with light blue style 1 -->
            <div class="items">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="reliable">
                    <div class="section-image">
                      <img :src="Image1" alt="picture">
                    </div>
                    <div class="section-background">

                      <div class="light-background">
                        <div class="contents">
                          <h2>
                            When Does At-Home
                            Care Make Sense?
                          </h2>
                          <p>
                            As people age, they often need more assistance, day in and day out. At the same time, many
                            seniors prefer to lead an independent life and may want ...
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <!-- card with light red style 1 -->
            <div class="items">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="reliable">
                    <div class="section-image">
                      <img :src="Image1" alt="picture">
                    </div>
                    <div class="section-background lightblue-colored">

                      <div class="light-background">
                        <div class="contents">
                          <h2>
                            A Day in the Life of a
                            Caregiver
                          </h2>
                          <p>
                            As the general, worldwide trend is for people to live longer, caregivers are playing an
                            increasingly vital role in our society. In-home aides ...
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <!-- card with light blue style 1 -->
            <div class="items">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="reliable">
                    <div class="section-image">
                      <img :src="Image1" alt="picture">
                    </div>
                    <div class="section-background second-long-lenght">

                      <div class="light-background">
                        <div class="contents">
                          <h2>
                            The LoveNest
                            Difference:
                            What Sets Us Apart
                          </h2>
                          <p>
                            Accesss to good health care is vital for folks at any stage of life, but it is particularly
                            important to older adults.
                            Regular, reliable health care ...
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            <!-- card with light red style 1 -->
            <div class="items">
              <div class="category-item">
                <!-- card title and icon -->
                <div class="category-item-header">
                  <div class="reliable">
                    <div class="section-image">
                      <img :src="Image1" alt="picture">
                    </div>
                    <div class="section-background lightblue-colored">

                      <div class="light-background">
                        <div class="contents">
                          <h2>
                            When Does At-Home
                            Care Make Sense?
                          </h2>
                          <p>
                            As people age, they often need more assistance, day in and day out. At the same time, many
                            seniors prefer to lead an independent life and may want ...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>

    <section>
      <div class="colored-last">
        <div class="second-color"></div>
        <div class="third-color"></div>
        <div class="first-color"></div>
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
.latest-page-wrap {
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

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

  P {
    font-family: Montserrat;
    font-size: 18px;
    color: #00000080 !important;
    line-height: 30px !important;
  }

  h4 {
    font-size: 30px;
    color: $base-color-1;
  }

  h3 {
    font-family: Montserrat;
    font-size: 40px;
    color: $base-color-1;
    font-weight: 600 !important;
  }

  h2 {
    font-family: Montserrat;
    font-size: 70px;
    font-size: 35px;
    color: $base-color-1;
  }

  &>.banner {
    background-image: url('../assets/images/HelpFulLinks-Image/helfulLinkBanner.png');
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
        line-height: 30px;
        letter-spacing: 0em;
        color: #fff;
        padding-left: 400px;
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

  &>.latest-contents {

    // underline h3 text
    &>.first {
      // border: 3px solid red;
      padding: 0 20px;
      .icon-content {
        
         h3 {
          // border: 2px solid red;
          display: flex;
          align-items: center;

          .icon-links {
            display: flex;
            align-items: center;
            color: $base-color-1;

            span {
              display: flex;
              align-items: center;
            }
          }
         }
        }

      div {
        h3 {
          margin-bottom: -10px;
          margin-top: 30px;
        //   span {
        //  border: 3px solid red;
        // }

        }
      }

    }

  }

  // <!-- LATEST NEWS & BLOG -->
  section {
    &>.line-paragraphy {
      margin-top: 30px;
          //  border: 3px solid red;
      &>.underline-wrap {
        padding: 0 20px;

        &>.making-preparation {
          display: flex;
          justify-content: center;

          .icon-links {
            text-decoration: none !important;
            color: $base-color-1;
            display: flex;
            align-items: center;
            column-gap: 10px;
          }

          // border: 4px solid red;
          h3 {
            color: $base-color-1;
            position: relative;
            font-weight: 600;
            font-size: 35px;
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
        width: 80%;
        margin: 0 auto;
        padding: 0 20px;
        text-align: center;
        margin-bottom: 50px;
      }

      .cards {
        width: 95%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 20px;
        row-gap: 20px;
        margin-top: 30px;
        margin-bottom: 50px;
        padding: 0px;

        .items {
          // border: 1px solid red;
          width: calc((100% / 3) - 20px);
          min-height: 250px;
          display: flex;
          flex-flow: column nowrap;

          div.category-item {
            &>div.category-item-header {
              // border: 5px solid red;
              width: 100%;
              display: flex;
              column-gap: 10px;

              &>.reliable {
                // border: 5px solid red;
                display: flex;
                flex-direction: column;

                &>.section-image {
                  // border: 1px solid red;
                  margin-bottom: -3px;

                  img {
                    // border: 1px solid red;
                    width: 100%;
                    height: auto;
                    margin-bottom: -3px;
                  }
                }

                // Style with light blue color 1
                &>.section-background {
                  background-color: $base-color;
                  margin-top: -3px;
                  position: relative;
                  width: 100%;
                  height: 300px;

                  &>.light-background {
                    // border: 1px solid red;
                    background-color: #FFFFFFB2;
                    width: 95%;
                    height: 250px;
                    position: absolute;
                    top: -30px;
                    bottom: 10px;
                    right: 10px;
                    display: flex;
                    align-content: center;
                    justify-content: center;

                    &>.contents {
                      padding: 0 10px;

                      h2 {
                        // border: 1px solid red;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 30.86px;
                        color: $base-color-1;
                        margin-bottom: 20px;
                        text-align: left;
                      }

                      p {
                        width: 100%;
                        font-weight: 400;
                        line-height: 30.26px;
                        text-align: left;
                        padding: 0px;
                      }
                    }
                  }
                }

                // Style with light blue color 1
                &>.first-long-lenght {
                  background-color: $base-color-2 !important;
                  margin-top: -3px;
                  position: relative;
                  width: 100%;
                  height: 300px;

                  &>.light-background {
                    // border: 1px solid red;
                    background-color: #FFFFFFB2;
                    width: 95%;
                    height: 320px !important;
                    position: absolute;
                    top: -30px;
                    bottom: 10px;
                    right: 10px;
                    display: flex;
                    align-content: center;
                    justify-content: center;

                    &>.contents {
                      padding: 0 10px;

                      h2 {
                        // border: 1px solid red;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 30.86px;
                        color: $base-color-1;
                        margin-bottom: 20px;
                        text-align: left;
                      }

                      p {
                        width: 100%;
                        font-weight: 400;
                        line-height: 30.26px;
                        text-align: left;
                        padding: 0px;
                      }
                    }
                  }
                }

                // Style with light blue color 1
                &>.lightblue-colored {
                  background-color: $base-color-2 !important;
                  margin-top: -3px;
                  position: relative;
                  width: 100%;
                  height: 300px;

                  &>.light-background {
                    // border: 1px solid red;
                    background-color: #FFFFFFB2;
                    width: 95%;
                    height: 250px;
                    position: absolute;
                    top: -30px;
                    bottom: 10px;
                    right: 10px;
                    display: flex;
                    align-content: center;
                    justify-content: center;

                    &>.contents {
                      padding: 0 10px;

                      h2 {
                        // border: 1px solid red;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 30.86px;
                        color: $base-color-1;
                        margin-bottom: 20px;
                        text-align: left;
                      }

                      p {
                        width: 100%;
                        font-weight: 400;
                        line-height: 30.26px;
                        text-align: left;
                        padding: 0px;
                      }
                    }
                  }
                }

                // Style with light blue color 1
                &>.second-long-lenght {
                  background-color: $base-color;
                  margin-top: -3px;
                  position: relative;
                  width: 100%;
                  height: 300px;

                  &>.light-background {
                    // border: 1px solid red;
                    background-color: #FFFFFFB2;
                    width: 95%;
                    height: 320px !important;
                    position: absolute;
                    top: -30px;
                    bottom: 10px;
                    right: 10px;
                    display: flex;
                    align-content: center;
                    justify-content: center;

                    &>.contents {
                      padding: 0 10px;

                      h2 {
                        // border: 1px solid red;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 30.86px;
                        color: $base-color-1;
                        margin-bottom: 20px;
                        text-align: left;
                      }

                      p {
                        width: 100%;
                        font-weight: 400;
                        line-height: 30.26px;
                        text-align: left;
                        padding: 0px;
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

// MEDIA QUERY

// XX-SM (<251px)
@media (max-width: 250.9px) {
  .latest-page-wrap {

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

    &>.latest-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 20px;

        div {
          // border: 3px solid red;

          h3 {
            // border: 3px solid red;
            margin-bottom: -10px;
            margin-top: 30px;
          }
        }

      }

    }

    // <!-- LATEST NEWS & BLOG -->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

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
              font-size: 40px;
              line-height: 25px;
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
          width: 80%;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          margin-bottom: 50px;
        }

        .cards {
          // border: 2px solid red;
          width: 95%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            // border: 1px solid red;
            width: calc((100% / 1) - 0px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 100%;
                display: flex;
                column-gap: 10px;

                &>.reliable {
                  // border: 5px solid red;
                  display: flex;
                  flex-direction: column;

                  &>.section-image {
                    // border: 1px solid red;
                    margin-bottom: -3px;

                    img {
                      // border: 1px solid red;
                      width: 100%;
                      height: auto;
                      margin-bottom: -3px;
                    }
                  }

                  // Style with light blue color 1
                  &>.section-background {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 6px;
                      height: 320px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.first-long-lenght {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.lightblue-colored {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.second-long-lenght {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          text-align: center;
                          padding: 0px;
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
  .latest-page-wrap {

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
        width: 100%;
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
          line-height: 25px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
        }
      }
    }


    &>.latest-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 20px;

        div {
          // border: 3px solid red;

          h3 {
            // border: 3px solid red;
            margin-bottom: -10px;
            margin-top: 30px;
          }
        }

      }

    }

    // <!-- LATEST NEWS & BLOG -->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

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
              font-size: 40px;
              line-height: 25px;
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
          width: 80%;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          margin-bottom: 50px;
        }

        .cards {
          // border: 2px solid red;
          width: 95%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            // border: 1px solid red;
            width: calc((100% / 1) - 0px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 100%;
                display: flex;
                column-gap: 10px;

                &>.reliable {
                  // border: 5px solid red;
                  display: flex;
                  flex-direction: column;

                  &>.section-image {
                    // border: 1px solid red;
                    margin-bottom: -3px;

                    img {
                      // border: 1px solid red;
                      width: 100%;
                      height: auto;
                      margin-bottom: -3px;
                    }
                  }

                  // Style with light blue color 1
                  &>.section-background {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 6px;
                      height: 320px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.first-long-lenght {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.lightblue-colored {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.second-long-lenght {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 6px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          text-align: center;
                          padding: 0px;
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
  .latest-page-wrap {

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
      font-size: 18px !important;
    }

    h2 {
      font-size: 20px !important;
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
          font-weight: 400;
          font-size: 25px !important;
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
          font-weight: 700;
          font-size: 35px !important;
          line-height: 30px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 0px;
          text-align: center;
        }
      }
    }


    &>.latest-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 20px;

        div {
          // border: 3px solid red;

          h3 {
            // border: 3px solid red;
            margin-bottom: -10px;
            margin-top: 30px;
          }
        }

      }

    }

    // <!-- LATEST NEWS & BLOG and Cards-->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

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
              font-size: 18px !important;
              line-height: 40px;
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
          width: 80%;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          margin-bottom: 50px;
        }

        .cards {
          // border: 5px solid red;
          width: 95%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            // border: 1px solid red;
            width: calc((100% / 1) - 0px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                width: 100%;
                display: flex;
                justify-content: center;
                column-gap: 10px;

                &>.reliable {
                  // border: 5px solid red;
                  display: flex;
                  flex-direction: column;

                  &>.section-image {
                    // border: 1px solid red;
                    margin-bottom: -3px;

                    img {
                      // border: 1px solid red;
                      width: 100%;
                      height: auto;
                      margin-bottom: -3px;
                    }
                  }

                  // Style with light blue color 1
                  &>.section-background {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 11px solid red;
                      width: 94.5%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.first-long-lenght {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      width: 94.5%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.lightblue-colored {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      border: px solid red;
                      width: 94.5%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.second-long-lenght {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 94.5%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          text-align: center;
                          padding: 0px;
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
  .latest-page-wrap {


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
          font-size: 40px !important;
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
          font-size: 60px !important;
          line-height: 30px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 300px;
        }
      }
    }


    &>.latest-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 20px;

        div {
          // border: 3px solid red;

          h3 {
            // border: 3px solid red;
            margin-bottom: -10px;
            margin-top: 30px;
          }
        }

      }

    }

    // <!-- LATEST NEWS & BLOG and Cards-->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

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
              font-size: 40px;
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
          width: 80%;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          margin-bottom: 50px;
        }

        .cards {
          // border: 5px solid red;
          width: 95%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            // border: 1px solid red;
            width: calc((100% / 2) - 10px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 100%;
                display: flex;
                column-gap: 10px;

                &>.reliable {
                  // border: 5px solid red;
                  display: flex;
                  flex-direction: column;

                  &>.section-image {
                    // border: 1px solid red;
                    margin-bottom: -3px;

                    img {
                      // border: 1px solid red;
                      width: 100%;
                      height: auto;
                      margin-bottom: -3px;
                    }
                  }

                  // Style with light blue color 1
                  &>.section-background {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 11px solid red;
                      width: 95%;
                      right: 8px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.first-long-lenght {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      width: 95%;
                      right: 8px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.lightblue-colored {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 5px solid red;
                      width: 95%;
                      right: 8px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.second-long-lenght {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 8px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          text-align: center;
                          padding: 0px;
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
  .latest-page-wrap {


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
          font-size: 40px !important;
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
          font-size: 60px !important;
          line-height: 30px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 300px;
        }
      }
    }

    &>.latest-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 20px;

        div {
          // border: 3px solid red;

          h3 {
            // border: 3px solid red;
            margin-bottom: -10px;
            margin-top: 30px;
          }
        }

      }

    }

    // <!-- LATEST NEWS & BLOG and Cards-->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

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
              font-size: 40px;
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
          width: 80%;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          margin-bottom: 50px;
        }

        .cards {
          // border: 5px solid red;
          width: 95%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            // border: 1px solid red;
            width: calc((100% / 2) - 10px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 100%;
                display: flex;
                column-gap: 10px;

                &>.reliable {
                  // border: 5px solid red;
                  display: flex;
                  flex-direction: column;

                  &>.section-image {
                    // border: 1px solid red;
                    margin-bottom: -3px;

                    img {
                      // border: 1px solid red;
                      width: 100%;
                      height: auto;
                      margin-bottom: -3px;
                    }
                  }

                  // Style with light blue color 1
                  &>.section-background {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 11px solid red;
                      width: 95%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.first-long-lenght {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      width: 95%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.lightblue-colored {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 5px solid red;
                      width: 95%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: center;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: center;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.second-long-lenght {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      width: 95%;
                      right: 10px;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          text-align: center;
                        }

                        p {
                          text-align: center;
                          padding: 0px;
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
  .latest-page-wrap {

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

    P {
      font-family: Montserrat;
      font-size: 18px;
      color: #00000080 !important;
      line-height: 30px !important;
    }

    h4 {
      font-size: 30px;
      color: $base-color-1;
    }

    h3 {
      font-family: Montserrat;
      font-size: 40px;
      color: $base-color-1;
      font-weight: 600 !important;
    }

    h2 {
      font-family: Montserrat;
      font-size: 70px;
      font-size: 35px;
      color: $base-color-1;
    }

    &>.banner {
      background-image: url('../assets/images/HelpFulLinks-Image/helfulLinkBanner.png');
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
          line-height: 30px;
          letter-spacing: 0em;
          color: #fff;
          padding-left: 400px;
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

    &>.latest-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 20px;

        div {
          // border: 3px solid red;

          h3 {
            // border: 3px solid red;
            margin-bottom: -10px;
            margin-top: 30px;
          }
        }

      }

    }

    // <!-- LATEST NEWS & BLOG -->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

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

        p {
          width: 80%;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          margin-bottom: 50px;
        }

        .cards {
          // border: 1px solid red;
          width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 20px;
          row-gap: 20px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            width: calc((100% / 2) - 50px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {
              &>div.category-item-header {
                // border: 5px solid red;
                width: 100%;
                display: flex;
                column-gap: 10px;

                .caption-icon {
                  // border: 1px solid #000;
                  display: flex;
                  flex-direction: column;
                  width: 100%;

                  .contents {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    line-height: 0px;

                    &>.background-icon {

                      // border: 1px solid red;
                      img {
                        // border: 1px solid red;
                        width: 130px;
                      }
                    }

                    h4 {
                      color: $base-color-1;
                      font-weight: 600;
                      line-height: 25px;
                      letter-spacing: 0em;
                      font-size: 20px;
                      color: #fff;
                    }
                  }

                  p {
                    // color: #FFFFFF80;
                    font-weight: 400;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: center;
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

// XL
/* @media (min-width: 1201px) and (max-width: 1499.9px) {} */

// XXL
@media (min-width: 1500px) {
  .latest-page-wrap {

    &>.banner {
      height: 500px;
    }


    &>.latest-contents {

      // underline h3 text
      &>.first {
        // border: 3px solid red;
        padding: 0 20px;

        div {
          // border: 3px solid red;

          h3 {
            // border: 3px solid red;
            margin-bottom: -10px;
            margin-top: 30px;
          }
        }

      }

    }

    // <!-- LATEST NEWS & BLOG -->
    section {
      &>.line-paragraphy {
        margin-top: 30px;

        &>.underline-wrap {
          padding: 0 200px;

          &>.making-preparation {
            display: flex;
            justify-content: center;

            // border: 4px solid red;
            h3 {
              color: $base-color-1;
              position: relative;
              font-weight: 600;
              font-size: 40px;
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
          width: 80%;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          margin-bottom: 50px;
        }

        .cards {
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          column-gap: 20px;
          row-gap: 50px;
          margin-top: 30px;
          margin-bottom: 50px;
          padding: 0px;

          .items {
            // border: 1px solid red;
            width: calc((100% / 3) - 20px);
            min-height: 250px;
            display: flex;
            flex-flow: column nowrap;

            div.category-item {

              &>div.category-item-header {
                width: 100%;
                display: flex;
                justify-content: center;
                column-gap: 10px;

                &>.reliable {
                  // border: 5px solid red;
                  display: flex;
                  flex-direction: column;

                  &>.section-image {
                    // border: 1px solid red;
                    margin-bottom: -3px;

                    img {
                      // border: 1px solid red;
                      width: 100%;
                      height: auto;
                      margin-bottom: -3px;
                    }
                  }

                  // Style with light blue color 1
                  &>.section-background {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      background-color: #FFFFFFB2;
                      width: 95%;
                      height: 250px;
                      position: absolute;
                      top: -30px;
                      bottom: 10px;
                      right: 10px;
                      display: flex;
                      align-content: center;
                      justify-content: center;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: left;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: left;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.first-long-lenght {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      background-color: #FFFFFFB2;
                      width: 95%;
                      height: 320px !important;
                      position: absolute;
                      top: -30px;
                      bottom: 10px;
                      right: 10px;
                      display: flex;
                      align-content: center;
                      justify-content: center;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: left;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: left;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.lightblue-colored {
                    background-color: $base-color-2 !important;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      background-color: #FFFFFFB2;
                      width: 95%;
                      height: 250px;
                      position: absolute;
                      top: -30px;
                      bottom: 10px;
                      right: 10px;
                      display: flex;
                      align-content: center;
                      justify-content: center;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: left;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: left;
                          padding: 0px;
                        }
                      }
                    }
                  }

                  // Style with light blue color 1
                  &>.second-long-lenght {
                    background-color: $base-color;
                    margin-top: -3px;
                    position: relative;
                    width: 100%;
                    height: 300px;

                    &>.light-background {
                      // border: 1px solid red;
                      background-color: #FFFFFFB2;
                      width: 95%;
                      height: 320px !important;
                      position: absolute;
                      top: -30px;
                      bottom: 10px;
                      right: 10px;
                      display: flex;
                      align-content: center;
                      justify-content: center;

                      &>.contents {
                        padding: 0 10px;

                        h2 {
                          // border: 1px solid red;
                          font-weight: 700;
                          font-size: 20px;
                          line-height: 30.86px;
                          color: $base-color-1;
                          margin-bottom: 20px;
                          text-align: left;
                        }

                        p {
                          width: 100%;
                          font-weight: 400;
                          line-height: 30.26px;
                          text-align: left;
                          padding: 0px;
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
    }
  }
}
</style>
