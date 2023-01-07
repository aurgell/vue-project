<template>
  <div v-if="errors">
    <div v-for="(v, k) in errors" :key="k"
         class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
      <p v-for="error in v" :key="error" class="text-sm">
        {{ error }}
      </p>
    </div>
  </div>

  <form class="form mx-auto w-1/2 space-y-6" @submit.prevent="saveLevel">
    <div class="space-y-4 rounded-md shadow-sm">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <div class="mt-1">
          <input type="text" name="name" id="name"
                 class="inpt"
                 v-model="form.name">
        </div>
      </div>

      <div>
        <label for="text" class="block text-sm font-medium text-gray-700">Description</label>
        <div class="mt-1">
          <input type="text" name="email" id="email"
                 class="inpt"
                 v-model="form.description">
        </div>
      </div>
    </div>

    <button type="submit"
            class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
      Create
    </button>
  </form>
</template>

<script>
import {reactive} from "vue";
import useLevels from "../../composables/levels";

export default {
  setup() {
    const form = reactive({
      'name': '',
      'description': '',
    })

    const {errors, storeLevel} = useLevels()

    const saveLevel = async () => {
      await storeLevel({...form});
    }

    return {
      form,
      errors,
      saveLevel
    }
  }
}
</script>