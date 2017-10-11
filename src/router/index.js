import Vue from 'vue'
import VueRouter from 'vue-router'

import portfolio from '@/assets/data/portfolio.json';

import Intro from '../components/Intro'
import AboutMe from '../components/AboutMe'
import Education from '../components/Education'
import Job from '../components/Job'
import Project from '../components/Project'
import Contact from '../components/Contact'

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
    },
    {
        path:'/projects',
        component:Project,
        props:
        {
            profile:portfolio.profile
        }
    },
    {
        path:'/contact',
        component:Contact,
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