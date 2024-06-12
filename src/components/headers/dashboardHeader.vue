<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { NLayoutHeader } from 'naive-ui'

import MobileSidebarMenu from '@/components/drawers/sidebarDrawerMenu.vue'
import DashboardRouteTitle from '@/components/headers/dashboardRouteTitle.vue'
import ThemeModeSwitch from '@/components/theme/themeModeSwitch.vue'

import { useMobileSidebarMenu } from '@/stores/common/mobileSidebarMenu'

import { dashboardNavMenu } from '@/menu/nav/dashboard-nav-menu'

import imgUrl from '@/assets/logo.png'

const store = useMobileSidebarMenu()
const { setSideMenuState } = store

const sidebarState = computed<boolean>(() => store.getSideMenuState)
const toggleSidebarMenu = () => setSideMenuState(true)

onBeforeMount(() => setSideMenuState(false))
</script>

<template>
    <n-layout-header>
        <!-- mobile header -->
        <div class="mobile-header">
            <img :src="imgUrl" alt="app logo">

            <div class="side-menu-toggle" @click="toggleSidebarMenu">
                <div :class="['sb-nav-toggle', sidebarState ? 'sb-is-active' : '']">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

        <!-- desktop header -->
        <div class="desktop-header">
            <DashboardRouteTitle tag="h4" />
            <ThemeModeSwitch position="absolute" />
        </div>
    </n-layout-header>
    
    <!-- mobile sidebar menu -->
    <MobileSidebarMenu :nav-menu="dashboardNavMenu" :has-footer="true" />
</template>

<style lang="scss" scoped>
    .n-layout-header {
        border-bottom: 0.5px solid #e8e8e896;
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        position: sticky;
        top: 0;
        z-index: 1;

        // mobile header
        &>div:first-child {
            display: flex;
            justify-content: space-between;
            align-items: center;

            // logo
            &>img {
                height: 40px;
            }

            // toggle button
            div.side-menu-toggle {

                // sidebar toggle button
                div.sb-nav-toggle{
                    width: 20px;
                    height: 18px;
                    display: grid;
                    grid-template: auto auto auto  / 90%;
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
                        background-color: $base-color;
                        transition: width 0.3s;
                    }
                }
            }
        }
        

        // desktop header
        &>div:last-child {
            height: 45px;
            border-top: 0.5px solid #e8e8e80e;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    // desktop
    @media (min-width: 992px) {
        .n-layout-header {
            // mobile header
            &>div:first-child {
                display: none;
            }
        }
    }

    // @media (min-width: 1500px) {
    //     .n-layout-header {
    //         padding: 10px 300px;
    //     }
    // }
</style>
