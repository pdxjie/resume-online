<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    resumeTemplate: {
      type: Object
    }
  },
  setup () {
  }
})
</script>

<template>
  <div>
    {{ resumeTemplate }}
  </div>
</template>

<style scoped>
</style>
