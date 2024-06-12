import { h } from 'vue'
import { RouterLink } from 'vue-router'

import {
    Dashboard,
    UserProfile,
    Password,
    Product,
    Logout
} from '@vicons/carbon'

import { renderIcon } from '@/utils/renderIcon'
import { useAuthenticationStore } from '@/stores/modules/authentication'

const userStore = useAuthenticationStore()

export const dashboardNavMenu: any = [
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'dashboard'
                }
            },
            { default: () => 'Dashboard' }
        ),
        key: 'dashboard',
        icon: renderIcon(Dashboard)
    },
    {
        label: 'Profile',
        key: 'profile',
        icon: renderIcon(UserProfile),
        children: [
            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            name: 'change user password'
                        }
                    },
                    { default: () => 'Change User Password' }
                ),
                key: 'change user password',
                icon: renderIcon(Password)
    }
        ]
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'product upload'
                }
            },
            { default: () => 'Products' }
        ),
        key: 'product upload',
        icon: renderIcon(Product)
    },
    {
    label: () => h(
      'div',
      {
        onClick: handleClick
      },
      {
        default: () => 'Log Out'
      }
    ),
    key: 'logout',
    icon: renderIcon(Logout)
  }
]

function handleClick() {
    // update logout state
    userStore.updateIsLogoutMenuClicked(true)
}
