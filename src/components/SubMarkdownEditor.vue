<script>
import { defineComponent, onMounted, ref } from "vue"
import Vditor from 'vditor'
import dayjs from 'dayjs'
import 'vditor/dist/index.css'
export default defineComponent({
  props: {
    id: {
      type: String
    },
    children: {
      type: Object
    }
  },
  setup (props) {
    const dateFormat = 'YYYY/MM/DD'
    const date = ref([dayjs(props.children.fromDate, dateFormat), dayjs(props.children.toDate, dateFormat)])
    const contentEditor = ref("")
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
          contentEditor.value.setValue(props.children.content)
        },
        mode: "ir",
        input (value) {
          props.children.content = value
        }
      })
    })
    const updateDate = () => {
    }

    const updateToNow = () => {}

    return {
      date,
      updateDate,
      updateToNow
    }
  }
})
</script>

<template>
  <div>
    <a-row style="padding-bottom: 5px;background-color: #f6f8fa">
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
        <a-input :disabled="children.isDisable" v-model:value="children.major" placeholder="专业/职位/其他" style="width: 80%"/>
      </a-col>
    </a-row>
    <div :id="children.id"/>
  </div>
</template>

<style scoped>
</style>
