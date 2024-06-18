const guestRouteChildren = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/home-care-services',
    name: 'home care services',
    component: () => import('@/views/HomeCareServices.vue'),
    meta: {
      title: 'Home Care Services'
    }
  },
  {
    path: '/disablity-support',
    name: 'disability support',
    component: () => import('@/views/DisabilitySupport.vue'),
    meta: {
      title: 'Disability Support'
    }
  },
  {
    path: '/CostCalculator',
    name: 'CostCalculator',
    component: () => import('@/views/CostCalculator.vue'),
    meta: {
      title: 'CostCalculator'
    }
  },
  {
    path: '/vacancy',
    name: 'vacancy',
    component: () => import('@/views/Vacancy.vue'),
    meta: {
      title: 'Vacancy'
    }
  },
  {
    path: '/job-form',
    name: 'JobForm',
    component: () => import('@/views/JobForm.vue'),
    meta: {
      title: 'JobForm'
    }
  },
  {
    path: '/helpful-links',
    name: 'HelpfulSeniorLinks',
    component: () => import('@/views/HelpfulSeniorLinks.vue'),
    meta: {
      title: 'HelpfulSeniorLinks'
    }
  },
  {
    path: '/news-blogs',
    name: 'NewsAndBlogs',
    component: () => import('@/views/NewsAndBlogs.vue'),
    meta: {
      title: 'NewsAndBlogs'
    }
  },
  {
    path: '/health-safety',
    name: 'HealthAndSafety',
    component: () => import('@/views/HealthAndSafety.vue'),
    meta: {
      title: 'HealthAndSafety'
    }
  },
  {
    path: '/latest-new',
    name: 'LatestNewAndBlog',
    component: () => import('@/views/LatestNews.vue'),
    meta: {
      title: 'LatestNewAndBlog'
    }
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('@/views/Blogs.vue'),
    meta: {
      title: 'Blogs'
    }
  },
  {
    path: '/about-us',
    name: 'about us',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'About Us'
    }
  },
  {
    path: '/frequent-question',
    name: 'frequently asked question',
    component: () => import('@/views/FrequentAskQuestion.vue'),
    meta: {
      title: 'FrequentAskQuestion'
    }
  },
  {
    path: '/Free-assessment',
    name: 'free assessment',
    component: () => import('@/views/RequestFreeAssessment.vue'),
    meta: {
      title: 'RequestFreeAssessment'
    }
  },
  {
    path: '/contact-us',
    name: 'contact us',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contact Us'
    }
  },
  {
    path: '/CostCalculator',
    name: 'CostCalculator',
    component: () => import('@/views/CostCalculator.vue'),
    meta: {
      title: 'CostCalculator'
    }
  },
  {
    path: '/CostOfHomeCare',
    name: 'CostOfHome Care',
    component: () => import('@/views/CostOfHomeCare.vue'),
    meta: {
      title: 'CostOfHome Care'
    }
  },
  {
    path: '/CostOfLiveInCare',
    name: 'CostOfLiveIn Care',
    component: () => import('@/views/CostOfLiveInCare.vue'),
    meta: {
      title: 'CostOfLiveIn Care'
    }
  }
]

export default guestRouteChildren
