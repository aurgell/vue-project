import {ref} from 'vue';
import axios from "axios";
import {useRouter} from 'vue-router';

axios.defaults.baseURL = 'http://localhost/api'

export default function useCourses() {

    const courses = ref([])
    const course = ref([])
    const router = useRouter();
    const errors = ref('')

    const getCourses = async () => {
        let response = await axios.get('course')
        courses.value = response.data.data;
    }

    const getCourse = async (id) => {
        let response = await axios.get(`course/${id}`)
        course.value = response.data.data;
    }

    const storeCourse = async (data) => {
        errors.value = ''
        try {
            await axios.post('course', data)
            await router.push({name: 'courses.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateCourse = async (id) => {
        errors.value = ''
        try {
            await axios.put('course/' + id, course.value)
            await router.push({name: 'courses.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const destroyCourse = async (id) => {
        await axios.delete('course/' + id)
    }


    return {
        courses,
        course,
        errors,
        router,
        getCourses,
        getCourse,
        storeCourse,
        updateCourse,
        destroyCourse
    }
}