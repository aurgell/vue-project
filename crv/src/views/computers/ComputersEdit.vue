<template>
  <div v-if="errors">
    <div v-for="(v, k) in errors" :key="k"
         class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
      <p v-for="error in v" :key="error" class="text-sm">
        {{ error }}
      </p>
    </div>
  </div>
  <form class="form mx-auto w-1/2 space-y-6" v-on:submit.prevent="saveComputer">
    <div class="space-y-4 rounded-md shadow-sm">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Model</label>
        <div class="mt-1">
          <input type="text" name="model" id="name"
                 class="inpt"
                 v-model="computer.model">
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Serial</label>
        <div class="mt-1">
          <input type="text" name="serial" id="email"
                 class="inpt"
                 v-model="computer.serial">
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Sace</label>
        <div class="mt-1">
          <input type="text" name="sace" id="email"
                 class="inpt"
                 v-model="computer.sace">
        </div>
      </div>

    </div>

    <button type="submit"
            class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
      Save
    </button>
  </form>
</template>

<script>
import {onMounted} from "vue";
import useComputers from "../../composables/computers";

export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  setup(props) {
    const {errors, computer, getComputer, updateComputer} = useComputers()

    onMounted(() => getComputer(props.id))

    const saveComputer = async () => {
      await updateComputer(props.id)
    }
    return {
      errors,
      computer,
      saveComputer
    }
  }
}
</script>
