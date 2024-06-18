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
            { default: () => 'News And Resources' }
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
                    { default: () => 'News And Blogs' }
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
                    { default: () => 'Health And Safety' }
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
                    { default: () => 'Helpful Senior Links' }
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
    // {
    //     label: () => h(
    //         RouterLink,
    //         {
    //             to: {
    //                 name: 'job-form'
    //             }
    //         },
    //         { default: () => 'JobForm' }
    //     ),
    //     key: 'JobForm'
    // },
    // {
    //     label: () => h(
    //         RouterLink,
    //         {
    //             to: {
    //                 name: 'helpful-links'
    //             }
    //         },
    //         { default: () => 'HelpfulSeniorLinks' }
    //     ),
    //     key: 'HelpfulSeniorLinks'
    // },
    // {
    //     label: () => h(
    //         RouterLink,
    //         {
    //             to: {
    //                 name: 'news-blogs'
    //             }
    //         },
    //         { default: () => 'NewsAndBlogs' }
    //     ),
    //     key: 'NewsAndBlogs'
    // },
    // {
    //     label: () => h(
    //         RouterLink,
    //         {
    //             to: {
    //                 name: 'health-safety'
    //             }
    //         },
    //         { default: () => 'HealthAndSafety' }
    //     ),
    //     key: 'HealthAndSafety'
    // },
    // {
    //     label: () => h(
    //         RouterLink,
    //         {
    //             to: {
    //                 name: 'latest-new'
    //             }
    //         },
    //         { default: () => 'LatestNewAndBlog' }
    //     ),
    //     key: 'LatestNewAndBlog'
    // },
    // {
    //     label: () => h(
    //         RouterLink,
    //         {
    //             to: {
    //                 name: 'blogs'
    //             }
    //         },
    //         { default: () => 'Blogs' }
    //     ),
    //     key: 'blogs'
    // },
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
        key: 'about us',
        children: [
            {
                label: () => h(
                    RouterLink,
                    {
                        to: {
                            name: 'frequently asked question'
                        }
                    },
                    { default: () => 'FrequentAskQuestion' }
                ),
                key: 'FrequentAskQuestion'
            },
        ]
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'free assessment'
                }
            },
            { default: () => 'RequestFreeAssessment' }
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
