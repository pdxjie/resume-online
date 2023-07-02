<script>
import { defineComponent, reactive, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { message } from 'ant-design-vue'
export default defineComponent({
  props: {
    basicInfo: {
      type: Object
    }
  },
  setup (props, ctx) {
    const activeKey = ref('1')
    const handleClick = () => {}
    let newInfo = reactive({
      basicKey: '',
      basicVal: '',
      placeholderKey: '自定义属性xx',
      placeholderVal: '自定义属性值xx'
    })

    // 点击header标题时不进行展开或收放
    const disExpandCollapse = () => {}
    const allowEditor = () => {
      props.basicInfo.edit = !props.basicInfo.edit
    }
    const removeBasicInfo = (id) => {
      props.basicInfo.basicInfos = props.basicInfo.basicInfos.filter(info => info.id !== id)
    }
    const addBasicInfo = () => {
      if (newInfo.basicKey.trim() === '' || newInfo.basicVal.trim() === '') {
        message.error('请补充完整信息')
        return
      }
      const cacheInfo = JSON.parse(JSON.stringify(newInfo))
      cacheInfo.id = uuidv4()
      props.basicInfo.basicInfos.push(cacheInfo)
      newInfo.basicKey = ''
      newInfo.basicVal = ''
    }
    return {
      newInfo,
      activeKey,
      handleClick,
      allowEditor,
      addBasicInfo,
      removeBasicInfo,
      disExpandCollapse
    }
  }
})

</script>

<template>
  <a-collapse v-model:activeKey="activeKey" expand-icon-position="left" >
    <a-collapse-panel key="1">
      <div>
        <a-row>
          <a-col :span="20">
            <a-row>
              <a-col :span="12" v-for="info in basicInfo.basicInfos || []" :key="info.id">
                <a-input-group compact class="margin-b-10">
                  <a-input v-model:value="info.basicKey" style="width: 20%" :placeholder="info.placeholderKey"/>
                  <a-input v-model:value="info.basicVal" style="width: 60%" :placeholder="info.placeholderVal"/>
                  <a-button @click="removeBasicInfo(info.id)">
                    <template #icon><delete-outlined /></template>
                  </a-button>
                </a-input-group>
              </a-col>
              <a-col :span="12">
                <a-input-group compact class="margin-b-10">
                  <a-input v-model:value="newInfo.basicKey" style="width: 20%" :placeholder="newInfo.placeholderKey"/>
                  <a-input v-model:value="newInfo.basicVal" style="width: 60%" :placeholder="newInfo.placeholderVal"/>
                  <a-button @click="addBasicInfo">
                    <template #icon><plus-outlined /></template>
                  </a-button>
                </a-input-group>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="4">
            <div class="avatar position-relative">
              <img :src="basicInfo.avatar" alt="">
              <a-switch v-model:checked="basicInfo.isAppear" class="position-absolute switch-style"/>
            </div>
          </a-col>
        </a-row>
      </div>
      <template #header>
        <div @click.stop="disExpandCollapse" class="display-flex align-items">
          <span class="font-14 font700 margin-r-10" v-if="!basicInfo.edit">{{ basicInfo.title }}</span>
          <span v-else class="margin-r-10">
              <a-input v-model:value="basicInfo.title" style="width: 90px!important;"/>
            </span>
          <span v-if="!basicInfo.edit" @click="allowEditor"><edit-outlined style="color: #888888" class="font-18"/></span>
          <span v-else @click="allowEditor"><save-outlined style="color: #888888" class="font-20"/></span>
        </div>
      </template>
    </a-collapse-panel>
  </a-collapse>
</template>

<style scoped lang="less">
::v-deep .ant-collapse-content-box {
  border: unset!important;
}
::v-deep .ant-row {
  padding: 10px!important;
  padding-bottom: 0px!important;
}
.avatar {
  width: 100%;
  height: 160px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .switch-style {
    bottom: 4px;
    left: 8px;
  }
}
</style>
