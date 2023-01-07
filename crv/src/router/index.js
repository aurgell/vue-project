import {createRouter, createWebHistory} from "vue-router";


import LevelsIndex from '../views/levels/LevelsIndex.vue'
import LevelsCreate from '../views/levels/LevelsCreate.vue'
import LevelsEdit from '../views/levels/LevelsEdit.vue'
import ComputersIndex from '../views/computers/ComputersIndex.vue'
import ComputersCreate from '../views/computers/ComputersCreate.vue'
import ComputersEdit from '../views/computers/ComputersEdit.vue'
import CoursesIndex from '../views/courses/CoursesIndex.vue'
import CoursesCreate from '../views/courses/CoursesCreate.vue'
import CoursesEdit from '../views/courses/CoursesEdit.vue'


const routes = [
    {
        path: '/levels',
        name: 'levels.index',
        component: LevelsIndex
    },
    {
        path: '/levels/create',
        name: 'levels.create',
        component: LevelsCreate
    },
    {
        path: '/levels/:id/edit',
        name: 'levels.edit',
        component: LevelsEdit,
        props: true
    },
    {
        path: '/computers',
        name: 'computers.index',
        component: ComputersIndex
    },
    {
        path: '/computers/create',
        name: 'computers.create',
        component: ComputersCreate
    },
    {
        path: '/computers/:id/edit',
        name: 'computers.edit',
        component: ComputersEdit,
        props: true
    },
    {
        path: '/courses',
        name: 'courses.index',
        component: CoursesIndex
    },
    {
        path: '/courses/create',
        name: 'courses.create',
        component: CoursesCreate
    },
    {
        path: '/courses/:id/edit',
        name: 'courses.edit',
        component: CoursesEdit,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
