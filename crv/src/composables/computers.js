import {ref} from 'vue';
import axios from "axios";
import {useRouter} from 'vue-router';

axios.defaults.baseURL = 'http://localhost/api'

export default function useComputers() {

    const computers = ref([])
    const computer = ref([])
    const router = useRouter();
    const errors = ref('')

    const getComputers = async () => {
        let response = await axios.get('computer')
        computers.value = response.data.data;
    }

    const getComputer = async (id) => {
        let response = await axios.get(`computer/${id}`)
        computer.value = response.data.data;
    }

    const storeComputer = async (data) => {
        errors.value = ''
        try {
            await axios.post('computer', data)
            await router.push({name: 'computers.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateComputer = async (id) => {
        errors.value = ''
        try {
            await axios.put('computer/' + id, computer.value)
            await router.push({name: 'computers.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const destroyComputer = async (id) => {
        await axios.delete('computer/' + id)
    }


    return {
        computers,
        computer,
        errors,
        router,
        getComputers,
        getComputer,
        storeComputer,
        updateComputer,
        destroyComputer
    }
}