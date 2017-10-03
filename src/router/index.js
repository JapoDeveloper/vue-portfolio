import Vue from 'vue'
import VueRouter from 'vue-router'

import portfolio from '@/assets/data/portfolio.json';

import Intro from '../components/Intro'
import AboutMe from '../components/AboutMe'
import Education from '../components/Education'
import Job from '../components/Job'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Intro,
        props:
        {
            profile:portfolio.profile
        }
    },
    {
        path:'/aboutme',
        component:AboutMe,
        props:
        {
            profile:portfolio.profile
        }
    },
    {
        path:'/education',
        component:Education,
        props:
        {
            profile:portfolio.profile
        }
    },
    {
        path:'/experience',
        component:Job,
        props:
        {
            profile:portfolio.profile
        }
    }
]

export const router = new VueRouter({
    mode:'history',
    routes
})