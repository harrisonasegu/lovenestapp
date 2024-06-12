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
    path: '/Frequent-question',
    name: 'FrequentAskQuestion',
    component: () => import('@/views/FrequentAskQuestion.vue'),
    meta: {
      title: 'FrequentAskQuestion'
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
