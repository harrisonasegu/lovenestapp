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
    path: '/our-care-services',
    name: 'Our Care Services',
    component: () => import('@/views/OurCareServices.vue'),
    meta: {
      title: 'OurCareServices'
    }
  },
  {
    path: '/news-and-resources',
    name: 'News And Resources',
    component: () => import('@/views/NewsAndResources.vue'),
    meta: {
      title: 'NewsAndResources'
    }
  },
  {
    path: '/helpful-links',
    name: 'Helpful Senior Links',
    component: () => import('@/views/HelpfulSeniorLinks.vue'),
    meta: {
      title: 'HelpfulSeniorLinks'
    }
  },
  {
    path: '/news-blogs',
    name: 'News And Blogs',
    component: () => import('@/views/NewsAndBlogs.vue'),
    meta: {
      title: 'NewsAndBlogs'
    }
  },
  {
    path: '/health-safety',
    name: 'Health And Safety',
    component: () => import('@/views/HealthAndSafety.vue'),
    meta: {
      title: 'HealthAndSafety'
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
    path: '/vacancy',
    name: 'vacancy',
    component: () => import('@/views/Vacancy.vue'),
    meta: {
      title: 'Vacancy'
    }
  },
  {
    path: '/latest-new',
    name: 'Latest News And Blog',
    component: () => import('@/views/LatestNews.vue'),
    meta: {
      title: 'LatestNewAndBlog'
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
    path: '/job-form',
    name: 'JobForm',
    component: () => import('@/views/JobForm.vue'),
    meta: {
      title: 'JobForm'
    }
  },
]

export default guestRouteChildren
