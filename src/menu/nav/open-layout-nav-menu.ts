import { h } from 'vue'
import { RouterLink } from 'vue-router'

export const openLayoutNavMenu: any = [
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'home'
                }
            },
            { default: () => 'Home' }
        ),
        key: 'home'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'home care services',
                }
            },
            { default: () => 'Home Care Services' }
        ),
        key: 'home care services'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'Our Care Services'
                }
            },
            { default: () => 'Our Care Services' }
        ),
        key: 'our-care-services'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'News And Resources',
                }
            },
            { default: () => 'News & Resources' }
        ),
        key: 'news-and-resources',
        children: [
            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            name: 'News And Blogs'
                        }
                    },
                    { default: () => 'News & Blogs' }
                ),
                key: 'news-blogs'
            },
            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            name: 'Health And Safety'
                        }
                    },
                    { default: () => 'Health & Safety' }
                ),
                key: 'health-safety'
            },
            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            name: 'Helpful Senior Links'
                        }
                    },
                    { default: () => 'Helpful Links' }
                ),
                key: 'helpful-links'
            },
        ]
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'vacancy'
                }
            },
            { default: () => 'Vacancy' }
        ),
        key: 'vacancy'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'about us'
                }
            },
            { default: () => 'About Us' }
        ),
        key: 'about us'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'frequently asked question'
                }
            },
            { default: () => 'FAQ' }
        ),
        key: 'frequent-question'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'Latest News And Blog'
                }
            },
            { default: () => 'Latest News & Blog' }
        ),
        key: 'latest-new'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'free assessment'
                }
            },
            { default: () => 'Request Free Assessment' }
        ),
        key: 'RequestFreeAssessment'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'contact us'
                }
            },
            { default: () => 'Contact Us' }
        ),
        key: 'contact us'
    }
]
