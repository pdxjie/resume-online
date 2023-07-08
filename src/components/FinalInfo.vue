<script>
import { computed, defineComponent, ref } from "vue"
import { useStore } from 'vuex'
import htmlToPdf from "../utils/parsePdf"
export default defineComponent({
  name: "FinalInfo",
  setup () {
    const store = useStore()
    const loading = ref(false)
    const visible = ref(false)
    const title = ref('')

    const fianlInfoVisible = computed(() => {
      return store.state.fullFinalInfoVisible
    })

    const showModal = () => {
      visible.value = true
    }

    const handleOk = () => {
      loading.value = true
      htmlToPdf.getPdf(title.value)
      setTimeout(() => {
        loading.value = false
        visible.value = false
        store.commit('CHANGE_FULL_INFO')
      }, 2000)
    }

    const handleCancel = () => {
      store.commit('CHANGE_FULL_INFO')
    }
    return {
      title,
      loading,
      visible,
      showModal,
      handleOk,
      handleCancel,
      fianlInfoVisible
    }
  }
})
</script>
<template>
  <a-modal v-model:visible="fianlInfoVisible" title="简历名称" @ok="handleOk">
    <template #footer>
      <a-button key="back" @click="handleCancel">取消</a-button>
      <a-button key="submit" type="primary" :loading="loading" @click="handleOk">生成简历</a-button>
    </template>
    <a-input v-model:value="title" placeholder="请输入简历名称...." />
  </a-modal>
</template>

<style scoped>

</style>
