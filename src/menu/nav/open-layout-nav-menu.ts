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
                    name: 'disability support',
                }
            },
            { default: () => 'Disability Support' }
        ),
        key: 'disability support'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'CostCalculator'
                }
            },
            { default: () => 'CostCalculator' }
        ),
        key: 'CostCalculator'
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
                    name: 'job-form'
                }
            },
            { default: () => 'JobForm' }
        ),
        key: 'JobForm'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'helpful-links'
                }
            },
            { default: () => 'HelpfulSeniorLinks' }
        ),
        key: 'HelpfulSeniorLinks'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'news-blogs'
                }
            },
            { default: () => 'NewsAndBlogs' }
        ),
        key: 'NewsAndBlogs'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'health-safety'
                }
            },
            { default: () => 'HealthAndSafety' }
        ),
        key: 'HealthAndSafety'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'blogs'
                }
            },
            { default: () => 'Blogs' }
        ),
        key: 'blogs'
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
                    name: 'Frequent-question'
                }
            },
            { default: () => 'FrequentAskQuestion' }
        ),
        key: 'FrequentAskQuestion'
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: 'Free-assessment'
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
