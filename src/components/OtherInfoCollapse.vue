<script>
import { defineComponent, reactive, ref, onMounted } from 'vue'
import Vditor from 'vditor'
import 'vditor/dist/index.css'
import { message } from 'ant-design-vue'
export default defineComponent({
  props: {
    id: {
      type: String
    }
  },
  setup (props) {
    const activeKey = ref('1')
    const contentEditor = ref("")
    const educationInfo = reactive({
      title: '教育经历',
      edit: false,
      isAppear: true,
      fromDate: '',
      toDate: '',
      toNow: false
    })
    onMounted(() => {
      contentEditor.value = new Vditor(props.id, {
        toolbar: [
          'emoji', 'headings', 'bold', 'italic', 'strike', '|', 'line', 'quote',
          'list', 'ordered-list', 'check', 'outdent', 'code', 'inline-code', 'insert-after', 'insert-before',
          'undo', 'redo', 'upload', 'table', 'record', 'edit-mode', 'both', 'preview', 'outline',
          'code-theme', 'content-theme', 'export', 'br'
        ]
      })
    })
    const handleClick = () => {}
    const disExpandCollapse = () => {}
    const allowEditor = () => {
      educationInfo.edit = !educationInfo.edit
    }
    const handleAddCustom = () => {}
    const sortDown = () => {}
    const removeCurrent = () => {}
    const cancel = () => {
      message.info('取消删除')
    }
    const confirm = () => {
      message.success('删除成功')
    }
    const changeIsAppear = () => {}
    return {
      activeKey,
      educationInfo,
      cancel,
      confirm,
      sortDown,
      handleClick,
      allowEditor,
      removeCurrent,
      changeIsAppear,
      handleAddCustom,
      disExpandCollapse
    }
  }
})

</script>

<template>
  <div>
    <a-collapse v-model:activeKey="activeKey">
      <a-collapse-panel key="1">
        <div>
          <a-row style="padding-bottom: 5px;background-color: #f6f8fa">
            <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" style="padding-left: 10px">
              <label class="font700">时间: </label>
              <a-range-picker :placeholder="['开始时间', '结束时间']" style="margin-right: 6px;width: 66%"/>
              <a-radio v-model:checked="educationInfo.toNow">至今</a-radio>
            </a-col>
            <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="7">
              <label class="font700" style="width: 20%;margin-right: 10px">主体:</label>
              <a-input v-model:value="value" placeholder="学校名称" style="width: 80%"/>
            </a-col>
            <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="7">
              <label class="font700" style="width: 20%;margin-right: 10px">其他:</label>
              <a-input v-model:value="value" placeholder="专业名称" style="width: 80%"/>
            </a-col>
          </a-row>
          <div :id="id" />
        </div>
        <template #header>
          <div @click.stop="disExpandCollapse" class="display-flex align-items">
            <span class="font-14 font700 margin-r-10" v-if="!educationInfo.edit">{{ educationInfo.title }}</span>
            <span v-else class="margin-r-10">
              <a-input v-model:value="educationInfo.title" style="width: 90px!important;"/>
            </span>
            <span v-if="!educationInfo.edit" @click="allowEditor"><edit-outlined style="color: #888888" class="font-18"/></span>
            <span v-else @click="allowEditor"><save-outlined style="color: #888888" class="font-20"/></span>
          </div>
        </template>
        <template #extra>
          <arrow-down-outlined style="color:#888888;" @click.stop="sortDown" class="margin-r-10"/>
          <a-tooltip placement="top">
            <template #title>
              <span>下方添加自定义项</span>
            </template>
            <plus-outlined style="color:#888888;" @click.stop="handleAddCustom" class="margin-r-10"/>
          </a-tooltip>
          <a-popconfirm
            title="你确定要删除当前项?"
            ok-text="确认"
            cancel-text="取消"
            @confirm="confirm"
            @cancel="cancel"
          >
            <delete-outlined style="color:#888888;" @click.stop="removeCurrent" class="margin-r-10"/>
          </a-popconfirm>
          <a-switch v-model:checked="educationInfo.isAppear" @change="changeIsAppear" size="small" />
        </template>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<style scoped lang="less">
::v-deep .ant-collapse-content {
  border-top: unset!important;
}
::v-deep .vditor-reset {
  padding: 10px!important;
}
::v-deep .vditor-toolbar--pin {
  padding-left: 10px!important;
}
::v-deep .vditor {
  height: auto!important;
  border: unset!important;
}
::v-deep .ant-collapse-content > .ant-collapse-content-box {
  padding: 0px!important;
}
::v-deep .vditor-toolbar {
  padding: 10px!important;
  border: unset;
}
::v-deep .vditor-ir pre.vditor-reset:focus {
  background-color: #FFF;
}
</style>
