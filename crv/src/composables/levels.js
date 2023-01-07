import {ref} from 'vue';
import axios from "axios";
import {useRouter} from 'vue-router';

axios.defaults.baseURL = 'http://localhost/api'

export default function useLevels() {

    const levels = ref([])
    const level = ref([])
    const router = useRouter();
    const errors = ref('')

    const getLevels = async () => {
        let response = await axios.get('level')
        levels.value = response.data.data;
    }

    const getLevel = async (id) => {
        let response = await axios.get(`level/${id}`)
        level.value = response.data.data;
    }

    const storeLevel = async (data) => {
        errors.value = ''
        try {
            await axios.post('level', data)
            await router.push({name: 'levels.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateLevel = async (id) => {
        errors.value = ''
        try {
            await axios.put('level/' + id, level.value)
            await router.push({name: 'levels.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const destroyLevel = async (id) => {
        await axios.delete('level/' + id)
    }


    return {
        levels,
        level,
        errors,
        router,
        getLevels,
        getLevel,
        storeLevel,
        updateLevel,
        destroyLevel
    }
}