import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import FeeStructure from '@/components/FeeStructure'
import Gallery from '@/components/Gallery'
import EquipmentPrice from '@/components/EquipmentPrice'
import HealthAndSafety from '@/components/HealthAndSafety'
import Introduction from '@/components/Introduction'
import ParentalSupport from '@/components/ParentalSupport'
import StartingKendo from '@/components/StartingKendo'
import VisitUs from '@/components/VisitUs'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/visit-us',
      name: 'VisitUs',
      component: VisitUs
    },
    {
      path: '/starting-kendo',
      name: 'StartingKendo',
      component: StartingKendo
    },
    {
      path: '/parental-support',
      name: 'ParentalSupport',
      component: ParentalSupport
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/health-and-safety',
      name: 'HealthAndSafety',
      component: HealthAndSafety
    },
    {
      path: '/equipment-hire',
      name: 'EquipmentPrice',
      component: EquipmentPrice
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/fees',
      name: 'FeeStructure',
      component: FeeStructure
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
})
