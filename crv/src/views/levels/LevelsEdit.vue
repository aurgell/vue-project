<template>
  <div v-if="errors">
    <div v-for="(v, k) in errors" :key="k"
         class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
      <p v-for="error in v" :key="error" class="text-sm">
        {{ error }}
      </p>
    </div>
  </div>
  <form class="form space-y-6 w-1/2 mx-auto" v-on:submit.prevent="saveLevel">
    <div class="">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <div class="mt-1">
          <input type="text" name="name" id="name"
                 class="inpt"
                 v-model="level.name">
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm pt-2 font-medium text-gray-700">Description</label>
        <div class="mt-1">
          <input type="text" name="description" id="description"
                 class="inpt"
                 v-model="level.description">
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
import useLevels from "../../composables/levels";


export default {
  props: {
    id: {
      required: true,
      type: String,
    }
  },
  setup(props) {
    const {errors, level, getLevel, updateLevel} = useLevels();

    onMounted(() => getLevel(props.id))

    const saveLevel = async () => {
      await updateLevel(props.id)
    };

    return {
      level,
      errors,
      saveLevel
    }
  }
}
</script>