<script>
import { defineComponent, ref, computed, watch, getCurrentInstance } from 'vue'
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
    let isChecked = ref(false)
    const store = useStore()
    const { proxy } = getCurrentInstance()
    const drawVisible = computed(() => {
      return store.state.resumeTemplateDrawVisible
    })
    const selectedResumeTemplate = computed(() => {
      return store.state.selectedResumeTemplate
    })
    watch(selectedResumeTemplate, (nVal, oVal) => {
      console.log(nVal, 'resume template....')
    }, { immediate: true, deep: true })
    const onClose = () => {
      store.commit('CHANGE_TEMPLATE_STATUS')
    }
    const previewResume = (img) => {
      proxy.$hevueImgPreview(img)
    }
    return {
      selectedResumeTemplate,
      placement,
      drawVisible,
      isChecked,
      onClose,
      previewResume
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
      <div class="template-selection" v-for="template in templates" :key="template.img">
        <img class="template-hover" :src="template.img" alt="">
        <div class="template-operation">
          <a-tooltip placement="top">
            <template #title>
              <span>简历预览</span>
            </template>
            <a-button @click="previewResume(template.img)" shape="circle">
              <template #icon>
                <eye-outlined />
              </template>
            </a-button>
          </a-tooltip>
          <a-tooltip placement="top">
            <template #title>
              <span>选择模板</span>
            </template>
            <a-button shape="circle">
              <template #icon>
                <select-outlined />
              </template>
            </a-button>
          </a-tooltip>
        </div>
      </div>
    </div>
  </a-drawer>
</template>

<style scoped lang="less">
.template-resume {
  height: 230px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  .template-selection {
    position: relative;
    width: 33.3%;
    height: 100%;
    margin: 10px 30px;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    .template-hover {
      width: 100%;
      height: 100%;
      padding: 18px 25px;
    }
    .template-operation {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%);
      opacity: 0;
    }
  }
  .template-selection:hover {
    .template-operation {
      opacity: 1;
      display: flex;
      ::v-deep .ant-btn {
        margin: 0 10px;
      }
    }
  }
  .template-selection:hover.template-selection::before  {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    /*最后一个参数是半透明度，可以透过调整0-1的数值，调整到满意的透明度*/
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
