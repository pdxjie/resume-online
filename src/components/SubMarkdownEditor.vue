<script>
import { defineComponent, onMounted, ref } from "vue"
import Vditor from 'vditor'
import dayjs from 'dayjs'
import weekday from "dayjs/plugin/weekday"
import localeData from "dayjs/plugin/localeData"
import 'vditor/dist/index.css'
import { v4 as uuidv4 } from 'uuid'
import { message } from 'ant-design-vue'
export default defineComponent({
  props: {
    id: {
      type: String
    },
    children: {
      type: Object
    },
    parentNode: {
      type: Object
    }
  },
  setup (props) {
    const dateFormat = 'YYYY-MM-DD'
    const date = ref([dayjs(props.children.fromDate, dateFormat), dayjs(props.children.toDate, dateFormat)])
    const contentEditor = ref("")
    onMounted(() => {
      dayjs.extend(weekday)
      dayjs.extend(localeData)
      contentEditor.value = new Vditor(props.id, {
        toolbar: [
          'emoji', 'headings', 'bold', 'italic', 'strike', '|', 'line', 'quote',
          'list', 'ordered-list', 'check', 'outdent', 'code', 'inline-code', 'insert-after', 'insert-before',
          'undo', 'redo', 'upload', 'table', 'record', 'edit-mode', 'both', 'preview', 'outline',
          'code-theme', 'content-theme', 'export', 'br'
        ],
        placeholder: '请输入正文...',
        after: () => {
          contentEditor.value.setValue(props.children.content)
        },
        mode: "ir",
        input (value) {
          props.children.content = value
        }
      })
    })
    const updateDate = (date, dateStr) => {
      props.children.toNow = false
      props.children.fromDate = dateStr[0].toString().replace('-', '/')
      props.children.toDate = dateStr[1].toString().replace('-', '/')
    }

    const updateToNow = () => {
      props.children.toDate = '至今'
    }

    const handleAdd = () => {
      const child = {
        id: uuidv4(),
        sort: props.children.sort + 1,
        title: '自定义',
        edit: false,
        isAppear: true,
        fromDate: dayjs(new Date().toDateString()).format('YYYY-MM-DD'),
        toDate: dayjs(new Date().toDateString()).format('YYYY-MM-DD'),
        toNow: false,
        isDisable: false,
        subject: '',
        major: '',
        content: ''
      }
      props.parentNode.children.forEach(c => {
        if (c.sort > props.children.sort) {
          c.sort += 1
        }
      })
      props.parentNode.children.push(child)
    }
    const sortUp = () => {
      for (let i = 0; i < props.parentNode.children.length; ++i) {
        if (props.parentNode.children[i].sort === props.children.sort - 1) {
          props.parentNode.children[i].sort += 1
          break
        }
      }
      if (props.children.sort > 1) {
        props.children.sort -= 1
      }
    }
    const sortDown = () => {
      for (let i = 0; i < props.parentNode.children.length; ++i) {
        if (props.parentNode.children[i].sort === props.children.sort + 1) {
          props.parentNode.children[i].sort -= 1
          break
        }
      }
      if (props.children.sort >= props.parentNode.children.length) {
        props.children.sort = props.parentNode.children.length
      } else {
        props.children.sort += 1
      }
    }
    const cancel = () => {
      message.info('取消删除')
    }
    const confirm = () => {
      props.parentNode.children = props.parentNode.children.filter(info => info.id !== props.children.id)
      // 重新编号
      props.parentNode.children.forEach((child, index) => {
        child.sort = index + 1
      })
    }
    const removeCurrent = () => {}
    return {
      date,
      sortUp,
      cancel,
      confirm,
      sortDown,
      handleAdd,
      updateDate,
      updateToNow,
      removeCurrent
    }
  }
})
</script>

<template>
  <div>
    <a-row style="padding: 10px 0 5px 0;background-color: #f6f8fa">
      <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" style="padding-left: 10px">
        <label class="font700" style="width: 20%;margin-right: 10px">时间:</label>
        <a-range-picker @change="updateDate" format="YYYY-MM-DD" v-model:value="date" :disabled="children.isDisable" :placeholder="['开始时间', '结束时间']" style="margin-right: 6px;width: 66%"/>
        <a-radio @change="updateToNow" :disabled="children.isDisable" v-model:checked="children.toNow">至今</a-radio>
      </a-col>
      <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="7">
        <label class="font700" style="width: 20%;margin-right: 10px">主体:</label>
        <a-input :disabled="children.isDisable" v-model:value="children.subject" placeholder="学校/公司/其他" style="width: 80%"/>
      </a-col>
      <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="7">
        <label class="font700" style="width: 20%;margin-right: 10px">其他:</label>
        <a-input :disabled="children.isDisable" v-model:value="children.major" placeholder="专业/职位/其他" style="width: 69%"/>
      </a-col>
    </a-row>
    <div class="display-flex">
      <div :id="id" />
      <div style="background-color: #f6f8fa;width: 5%" class="position-relative">
        <div class="position-absolute plus-children">
          <arrow-up-outlined v-if="children.sort !== 1" style="color:#888888;" @click.stop="sortUp" class="margin-r-10"/>
          <arrow-down-outlined v-if="children.sort !== parentNode.children.length" style="color:#888888;" @click.stop="sortDown" class="margin-r-10"/>
          <a-tooltip placement="top">
            <template #title>
              <span>添加同级项</span>
            </template>
            <plus-outlined style="color:#888888;" @click.stop="handleAdd"/>
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
::v-deep .vditor {
  height: auto!important;
  border: unset!important;
  width: 95% !important;
}
.plus-children {
  left: 50%;
  top: 35%;
  transform: translate(-50%);
}
::v-deep .vditor-content {
  min-height: 100px!important;
}
</style>
