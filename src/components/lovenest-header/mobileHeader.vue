<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { NLayoutHeader, NMenu } from 'naive-ui'
import { useRoute } from 'vue-router'

// import HeaderMenu from '@/components/headers/guestHeader.vue'
import MobileSidebarMenu from '@/components/drawers/sidebarDrawerMenu.vue'

import { useMobileSidebarMenu } from '@/stores/common/mobileSidebarMenu'

import { openLayoutNavMenu } from '@/menu/nav/open-layout-nav-menu'

import imgUrl from '@/assets/logo.png'

const route: string | any = useRoute()
const activeRoute = computed(() => route?.name)

const headerBg = computed(() => activeRoute.value === 'home')

const store = useMobileSidebarMenu()
const { setSideMenuState } = store

const sidebarState = computed<boolean>(() => store.getSideMenuState)
const toggleSidebarMenu = () => setSideMenuState(true)

onBeforeMount(() => setSideMenuState(false))
</script>

<template>
    <n-layout-header :class="headerBg ? 'home-bg' : ''">
        <div class="mobile-header-top-nav">
            <div class="icons-container">
                <!-- phone -->
                <div class="phone">
                    <a href="tel:+0808 501 5786">
                        <span class="icon">
                            <Icon icon="ion:call" />
                        </span>
                        <span class="icon-name">0808 501 5786</span>
                    </a>
                </div>

                <!-- email -->
                <div class="email">
                    <a href="/">
                        <span class="icon">
                            <Icon icon="wpf:message-outline" />
                        </span>
                        <span class="icon-name">Email</span>
                    </a>
                </div>

                <!-- brochure -->
                <div class="brochure">
                    <a href="/">
                        <span class="icon">
                            <Icon icon="bx:book" />
                        </span>
                        <span class="icon-name">Brochure</span>
                    </a>
                </div>

                <!-- apply -->
                <div class="apply">
                    <a href="/">
                        <span class="icon">
                            <Icon icon="radix-icons:cursor-arrow" />
                        </span>
                        <span class="icon-name">Apply For Jobs</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="mobile-header-bottom-nav">
            <img :src="imgUrl" alt="app logo">

            <section>
                <!-- toggle button -->
                <div class="side-menu-toggle" @click="toggleSidebarMenu">
                    <div :class="['sb-nav-toggle', sidebarState ? 'sb-is-active' : '']">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </section>
        </div>
    </n-layout-header>

    <!-- mobile sidebar menu -->
    <MobileSidebarMenu :nav-menu="openLayoutNavMenu" :has-footer="false" />
</template>

<style lang="scss" scoped>
.n-layout-header {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: $base-color-2 !important;

    &>div {

        // mobile header top nav
        &.mobile-header-top-nav {
            padding: 8px 10px;
            background-color: #ffffff;

            // icons container
            &>div.icons-container {
                display: flex;
                column-gap: 20px;
                justify-content: flex-end;

                // icon container
                &>div {
                    &>a {
                        height: 32px;
                        border-radius: 5px;
                        padding: 5px 12px;
                        display: inline-flex;
                        column-gap: 8px;
                        justify-content: center;
                        align-items: center;
                        background-color: $base-color-2;
                        text-decoration: none;
                        transition: all 0.4s;

                        &:hover {
                            box-shadow: 0 0 8px $banner-bg;

                            &>span {
                                color: $base-color-4;
                            }
                        }

                        &>span {
                            transition: all 0.4s;
                            color: #ffffff;

                            // icon
                            &.icon {
                                display: inline-flex;
                                align-items: center;

                                &>* {
                                    font-size: 16px;
                                }
                            }

                            // icon name
                            &.icon-name {
                                display: inline;
                                font-size: 14px;
                                font-weight: 600;
                            }
                        }

                    }
                }
            }
        }

        // mobile header bottom nav
        &.mobile-header-bottom-nav {
            height: 45px;
            padding: 0 10px 8px;
            position: sticky !important;
            top: 2px !important;
            display: flex;
            column-gap: 20px;
            justify-content: space-between;
            align-items: center;

            // logo
            &>img {
                height: 40px;
            }

            &>section {
                width: fit-content;
                display: flex;
                align-items: center;

                // toggle button
                &>div.side-menu-toggle {

                    // sidebar toggle button
                    div.sb-nav-toggle {
                        width: 20px;
                        height: 18px;
                        display: grid;
                        grid-template: auto auto auto / 90%;
                        justify-content: center;
                        align-items: center;
                        row-gap: 3px;
                        transform: rotateY(180deg);
                        cursor: pointer;

                        // when sidebar toggled
                        &.sb-is-active {
                            span:not(span:nth-child(even)) {
                                width: 60%;
                            }
                        }

                        span {
                            width: 100%;
                            height: 3px;
                            // background-color: $base-color;
                            background-color: #ffffff;
                            transition: width 0.3s;
                        }
                    }
                }
            }
        }
    }
}

// XX-SM (<251px)
@media (max-width: 250.9px) {
    .n-layout-header {
        background-color: $base-color-2;

        // mobile header top nav
        &>div.mobile-header-top-nav {

            // icons container
            &>div.icons-container {
                column-gap: 10px;
                justify-content: space-between;

                // icon container
                &>div {
                    &>a {
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        padding: 5px;

                        &>span {

                            // icon
                            &.icon {
                                display: inline-flex;
                                align-items: center;

                                &>* {
                                    font-size: 12px;
                                }
                            }

                            // icon name
                            &.icon-name {
                                display: none;
                                font-size: 12px;
                                font-weight: 600;
                            }
                        }

                    }
                }
            }
        }

        // &>div.mobile-header-bottom-nav {}
    }
}

// XX-SM
@media (min-width: 251px) and (max-width: 350.9px) {
    .n-layout-header {
        background-color: $base-color-5;

        // mobile header top nav
        &>div.mobile-header-top-nav {

            // icons container
            &>div.icons-container {
                column-gap: 10px;
                justify-content: space-between;

                // icon container
                &>div {
                    &>a {
                        width: 25px;
                        height: 25px;
                        border-radius: 50%;
                        padding: 5px;

                        &>span {

                            // icon
                            &.icon {
                                display: inline-flex;
                                align-items: center;

                                &>* {
                                    font-size: 15px;
                                }
                            }

                            // icon name
                            &.icon-name {
                                display: none;
                                font-size: 12px;
                                font-weight: 600;
                            }
                        }

                    }
                }
            }
        }

        // &>div.mobile-header-bottom-nav {}
    }
}

// X-SM
@media (min-width: 351px) and (max-width: 575.9px) {
    .n-layout-header {
        background-color: $base-color-5;

        // mobile header top nav
        &>div.mobile-header-top-nav {

            // icons container
            &>div.icons-container {
                column-gap: 30px;

                // icon container
                &>div {
                    &>a {
                        width: 25px;
                        height: 25px;
                        border-radius: 50%;
                        padding: 5px;

                        &>span {

                            // icon
                            &.icon {
                                display: inline-flex;
                                align-items: center;

                                &>* {
                                    font-size: 15px;
                                }
                            }

                            // icon name
                            &.icon-name {
                                display: none;
                                font-size: 12px;
                                font-weight: 600;
                            }
                        }

                    }
                }
            }
        }

        // &>div.mobile-header-bottom-nav {}
    }
}

// SM
@media (min-width: 576px) and (max-width: 767.9px) {
    .n-layout-header {
        background-color: $base-color-5;

        // mobile header top nav
        &>div.mobile-header-top-nav {

            // icons container
            &>div.icons-container {
                column-gap: 10px;
                justify-content: space-between;

                // icon container
                &>div {
                    &>a {
                        padding: unset;
                        background-color: unset;

                        &>span {
                            color: $base-color-5;

                            // icon
                            &.icon {
                                display: inline-flex;
                                align-items: center;

                                &>* {
                                    font-size: 15px;
                                }
                            }

                            // icon name
                            &.icon-name {
                                font-size: 13px;
                                font-weight: 600;
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
    .n-layout-header {
        background-color: $base-color-5;

        // mobile header top nav
        &>div.mobile-header-top-nav {

            // icons container
            &>div.icons-container {
                column-gap: 30px;

                // icon container
                &>div {
                    &>a {
                        padding: unset;
                        background-color: unset;

                        &>span {
                            color: $base-color-5;
                        }

                    }
                }
            }
        }
    }
}
</style>
