<script>
import { defineComponent, ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  props: {
    templates: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup () {
    const placement = ref('right')
    const store = useStore()
    const onClose = () => {
      store.commit('CHANGE_TEMPLATE_STATUS')
    }
    const drawVisible = computed(() => {
      return store.state.resumeTemplateDrawVisible
    })
    watch(drawVisible, (nVal, oVal) => {
      console.log(nVal, 'val...')
    }, { immediate: true, deep: true })
    return {
      placement,
      drawVisible,
      onClose
    }
  }
})

</script>

<template>
  <a-drawer
    :width="620"
    title="简历模板"
    placement="right"
    :visible="drawVisible"
    @close="onClose"
  >
    <template #extra>
      <a-button style="margin-right: 8px" @click="onClose">取消</a-button>
      <a-button type="primary" @click="onClose">确定</a-button>
    </template>
    <div class="template-resume">
      <img class="template-hover" v-for="template in templates" :key="template.img" :src="template.img" alt="">
    </div>
  </a-drawer>
</template>

<style scoped lang="less">
.template-resume {
  height: 230px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .template-hover {
    object-fit: contain;
    width: 33.3%;
    height: 100%;
    margin: 10px 30px;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 20px 0px;
  }
  .template-hover:hover {
    background: rgba(0, 0, 0, .3);
  }
}
</style>
