import Vue from 'vue'
import Router from 'vue-router'
import Cat from '@/components/Cat/Cat'
import CatToilet from '@/components/CatToilet/CatToilet'
import Dog from '@/components/Dog/Dog'
import DogBar from '@/components/DogBar/DogBar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dog',
      component: Dog
    },
    {
      path: '/dog',
      name: 'gou',
      component: Dog
    }, {
      path: '/dogbar',
      name: 'gougutou',
      component: DogBar
    }, {
      path: '/cat',
      name: 'mao',
      component: Cat
    }, {
      path: '/cattoilet',
      name: 'maocesuo',
      component: CatToilet
    }
  ]
})
