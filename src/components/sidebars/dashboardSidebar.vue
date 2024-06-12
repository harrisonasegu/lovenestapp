<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { NLayoutSider, NMenu, NSpace, useNotification } from 'naive-ui'

import { dashboardNavMenu } from '@/menu/nav/dashboard-nav-menu'

import { useResponseNotification } from '@/utils/responseNotification'

import { useResponseMessageStore } from '@/stores/common/responseMessage'
import { useAuthenticationStore } from '@/stores/modules/authentication'

// import DashboardLogo from '@/components/dashboardLogo.vue'
import router from '@/router'

const route: string | any = useRoute()
const notification = useNotification()

const responseMessageStore = useResponseMessageStore()
const userStore = useAuthenticationStore()

const user = userStore.getUser

const activeRoute = computed(() => route?.name)

const isLoading = ref<boolean>(false)

const getIsLogoutMenuClicked = userStore.getIsLogoutMenuClicked

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

function handleLogout() {
    // loadeing state
    loadingState(true)

    // proceed to login
    userStore.Logout({
        email: user?.email
    })
        .then(() => {
            // loadeing state
            loadingState(false)
            // notification
            showNotification(5000)
            // update logout state
            userStore.updateIsLogoutMenuClicked(false)
            // route to home page
            location.assign('/')
        })
        .catch(() => {
            // loadeing state
            loadingState(false)
            // notification
            showNotification(5000)
        })
}

watch(getIsLogoutMenuClicked, (state) => {
    if (state) {
        handleLogout()
    }
})
</script>

<template>
    <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="false"
    >
        <n-space vertical :size="40">
            <!-- logo -->
            <DashboardLogo />

            <n-menu
                :collapsed-width="64"
                :collapsed-icon-size="22"
                :options="dashboardNavMenu"
                :default-value="activeRoute"
                @logoutMenuClicked="handleLogout"
            />
        </n-space>    
    </n-layout-sider>
</template>

<style lang="scss" scoped>
@media (max-width: 991.9px) {
    .n-layout-sider {
        display: none;
    }
}
</style>
