<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import Vditor from 'vditor'
import dayjs from 'dayjs'
import 'vditor/dist/index.css'
import { message } from 'ant-design-vue'
import { v4 as uuidv4 } from "uuid"
import SubMarkdownEditor from "./SubMarkdownEditor"
export default defineComponent({
  components: { SubMarkdownEditor },
  props: {
    id: {
      type: String
    },
    otherInfo: {
      type: Object
    }
  },
  setup (props) {
    const dateFormat = 'YYYY/MM/DD'
    const activeKey = ref('1')
    const contentEditor = ref("")
    const store = useStore()
    onMounted(() => {
      contentEditor.value = new Vditor(props.id, {
        toolbar: [
          'emoji', 'headings', 'bold', 'italic', 'strike', '|', 'line', 'quote',
          'list', 'ordered-list', 'check', 'outdent', 'code', 'inline-code', 'insert-after', 'insert-before',
          'undo', 'redo', 'upload', 'table', 'record', 'edit-mode', 'both', 'preview', 'outline',
          'code-theme', 'content-theme', 'export', 'br'
        ],
        placeholder: '请输入正文...',
        after: () => {
          contentEditor.value.setValue(props.otherInfo.content)
        },
        mode: "ir",
        input (value) {
          props.otherInfo.content = value
        }
      })
    })

    const handleClick = () => {}
    const disExpandCollapse = () => {}
    const allowEditor = () => {
      props.otherInfo.edit = !props.otherInfo.edit
    }
    const date = ref([dayjs(props.otherInfo.fromDate, dateFormat), dayjs(props.otherInfo.toDate, dateFormat)])
    const handleAddCustom = () => {
      const otherInfo = {
        id: uuidv4(),
        sort: props.otherInfo.sort + 1,
        title: '自定义',
        edit: false,
        isAppear: true,
        fromDate: new Date().toString(),
        toDate: new Date().toString(),
        toNow: false,
        isDisable: false,
        subject: '',
        major: '',
        content: '',
        children: []
      }
      let resume = store.state.selectedResumeTemplate
      resume.otherInfos.forEach(other => {
        if (other.sort > props.otherInfo.sort) {
          other.sort += 1
        }
      })
      resume.otherInfos.push(otherInfo)
      store.commit('CHANGE_RESUME_TEMPLATE', resume)
    }
    const removeCurrent = () => {}
    const cancel = () => {
      message.info('取消删除')
    }
    const confirm = () => {
      let resume = store.state.selectedResumeTemplate
      resume.otherInfos = resume.otherInfos.filter(info => info.id !== props.otherInfo.id)
      store.commit('CHANGE_RESUME_TEMPLATE', resume)
    }
    const changeIsAppear = (val) => {
      props.otherInfo.isAppear = val
    }
    const updateToNow = () => {
      props.otherInfo.toDate = '至今'
    }
    // 修改时间
    const updateDate = (date) => {
      console.log(JSON.stringify(date))
      console.log(dayjs(date[1].toString().substring(0, 10), 'YYYY-MM-DD'), 'date')
    }
    const sortUp = () => {
      let resume = store.state.selectedResumeTemplate
      for (let i = 0; i < resume.otherInfos.length; ++i) {
        if (resume.otherInfos[i].sort === props.otherInfo.sort - 1) {
          resume.otherInfos[i].sort += 1
          break
        }
      }
      if (props.otherInfo.sort > 1) {
        props.otherInfo.sort -= 1
      }
      store.commit('CHANGE_RESUME_TEMPLATE', resume)
    }
    const sortDown = () => {
      let resume = store.state.selectedResumeTemplate
      for (let i = 0; i < resume.otherInfos.length; ++i) {
        if (resume.otherInfos[i].sort === props.otherInfo.sort + 1) {
          resume.otherInfos[i].sort -= 1
          break
        }
      }
      if (props.otherInfo.sort >= resume.otherInfos.length) {
        props.otherInfo.sort = resume.otherInfos.length
      } else {
        props.otherInfo.sort += 1
      }
      store.commit('CHANGE_RESUME_TEMPLATE', resume)
    }
    return {
      date,
      store,
      activeKey,
      cancel,
      confirm,
      sortUp,
      sortDown,
      updateDate,
      updateToNow,
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
              <label class="font700" style="width: 20%;margin-right: 10px">时间:</label>
              <a-range-picker @change="updateDate" format="YYYY-MM-DD" v-model:value="date" :disabled="otherInfo.isDisable" :placeholder="['开始时间', '结束时间']" style="margin-right: 6px;width: 66%"/>
              <a-radio @change="updateToNow" :disabled="otherInfo.isDisable" v-model:checked="otherInfo.toNow">至今</a-radio>
            </a-col>
            <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="7">
              <label class="font700" style="width: 20%;margin-right: 10px">主体:</label>
              <a-input :disabled="otherInfo.isDisable" v-model:value="otherInfo.subject" placeholder="学校/公司/其他" style="width: 80%"/>
            </a-col>
            <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="7">
              <label class="font700" style="width: 20%;margin-right: 10px">其他:</label>
              <a-input :disabled="otherInfo.isDisable" v-model:value="otherInfo.major" placeholder="专业/职位/其他" style="width: 80%"/>
            </a-col>
          </a-row>
          <div :id="id"/>
        </div>
        <div v-if="otherInfo.children.length !== 0">
          <SubMarkdownEditor v-for="children in otherInfo.children" :key="children.id" :children="children" :id="children.id"/>
        </div>
        <template #header>
          <div @click.stop="disExpandCollapse" class="display-flex align-items">
            <span class="font-14 font700 margin-r-10" v-if="!otherInfo.edit">{{ otherInfo.title }}</span>
            <span v-else class="margin-r-10">
              <a-input v-model:value="otherInfo.title" style="width: 90px!important;"/>
            </span>
            <span v-if="!otherInfo.edit" @click="allowEditor"><edit-outlined style="color: #888888" class="font-18"/></span>
            <span v-else @click="allowEditor"><save-outlined style="color: #888888" class="font-20"/></span>
          </div>
        </template>
        <template #extra>
          <arrow-up-outlined v-if="otherInfo.sort !== 1" style="color:#888888;" @click.stop="sortUp" class="margin-r-10"/>
          <arrow-down-outlined v-if="otherInfo.sort !== store.state.selectedResumeTemplate.otherInfos.length" style="color:#888888;" @click.stop="sortDown" class="margin-r-10"/>
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
          <a-switch v-model:checked="otherInfo.isAppear" @change="changeIsAppear" size="small" />
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
