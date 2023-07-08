<script>
import { computed, defineComponent, ref } from 'vue'
import marked from 'marked'
import ikun from '@/assets/images/ikun.jpg'
import { useStore } from 'vuex'
export default defineComponent({
  setup () {
    const store = useStore()
    const ikunImg = ref(ikun)
    const resumeTemplate = computed(() => {
      const resume = store.state.selectedResumeTemplate
      resume.otherInfos.forEach(other => {
        other.content = marked(other.content)
        if (other.children.length !== 0) {
          other.children.forEach(child => {
            child.content = marked(child.content)
          })
        }
      })
      return resume
    })
    const themeColor = computed(() => {
      return store.state.theme
    })

    return {
      themeColor,
      resumeTemplate,
      ikunImg
    }
  }
})

</script>

<template>
  <div class="preview-async">
    <div id="tpl_box" class="tpl_box" data-v-236d5b80="">
      <div class="tpl_main" data-v-236d5b80="">
        <div id="resume_tpl_box" data-v-236d5b80="" >
          <div class="resume_all" data-v-2e658a64="" data-v-236d5b80="">
            <div id="resume_pc" class="pc_main" data-v-2e658a64="">
              <div class="weiruanyahei" data-v-2e658a64="">
                <div class="resume_box" data-v-2e658a64="">
                  <div id="basicInfo" class="basic_info_box" style="padding:28px 30px 20px;" data-v-2e658a64="">
                    <!-- 基础信息 -->
                    <div>
                      <div class="font-20 font-weight-bold">{{ resumeTemplate.basicInfo.basicInfos[0].basicVal }}</div>
                      <div style="margin-top: 20px;width: 20%">
                        <span v-for="(basicInfo) in resumeTemplate.basicInfo.basicInfos.slice(1)" style="display: flex;width: max-content;padding: 5px 0">
                          <div v-if="basicInfo.basicKey.length === 2">
                            <span >{{ basicInfo.basicKey[0] }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ basicInfo.basicKey[1] }}：</span>
                            <span>{{ basicInfo.basicVal }}</span>
                          </div>
                          <div v-else>
                            <span>{{ basicInfo.basicKey }}：</span>
                            <span>{{ basicInfo.basicVal }}</span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div class="photo_box" style="right:50px;" data-v-2e658a64="">
                      <img v-show="resumeTemplate.basicInfo.isAppear" :src="resumeTemplate.basicInfo.avatar" style="width: 100%;height: 150px;object-fit: cover" alt="" data-v-2e658a64="">
                    </div>
                  </div>
                  <div class="resume_content_all" style="margin:0 30px 0;"
                       data-v-2e658a64="">
                    <div id="jiaoyu" class="resume_content" style="margin:10px 0;" v-for="other in resumeTemplate.otherInfos" data-v-2e658a64="">
                      <div class="resume_content_main" data-v-2e658a64="" v-if="other.isAppear">
                        <div class="module_tit"
                             :style="{ borderColor: themeColor }"
                             data-v-2e658a64=""><span data-v-2e658a64="" :style="{ 'color': themeColor }">{{ other.title }}</span>
                        </div>
                        <div class="content_list" style="margin-top:16px;"
                             data-v-2e658a64="">
                          <ul class="list_top" style="font-size:13px;"
                              data-v-2e658a64="">
                            <li v-if="other.fromDate && other.toDate" style="list-style: none!important;" class="time" data-v-2e658a64="">{{ other.fromDate }} ~ {{ other.toDate }}</li>
                            <li v-if="other.subject" style="list-style: none!important;" class="name" data-v-2e658a64="">
                              <b data-v-2e658a64="">{{ other.subject }}</b>
                            </li>
                            <li v-if="other.major" style="list-style: none!important;" data-v-2e658a64="">
                              {{ other.major }}
                            </li>
                          </ul>
                          <div class="ql-editor" style="font-size:13px;margin-top:7px;line-height:1.7;list-style: circle!important;" data-v-2e658a64="">
                            <div v-html="other.content"></div>
                          </div>
                        </div>
                        <div v-if="other.children.length !== 0">
                          <div v-for="child in other.children">
                            <div class="content_list" style="margin-top:16px;"
                                 data-v-2e658a64="">
                              <ul class="list_top" style="font-size:13px;"
                                  data-v-2e658a64="">
                                <li v-if="child.fromDate && child.toDate" style="list-style: none!important;" class="time" data-v-2e658a64="">{{ child.fromDate }} ~ {{ child.toDate }}</li>
                                <li v-if="child.subject" style="list-style: none!important;" class="name" data-v-2e658a64="">
                                  <b data-v-2e658a64="">{{ child.subject }}</b>
                                </li>
                                <li v-if="child.major" style="list-style: none!important;" data-v-2e658a64="">
                                  {{ child.major }}
                                </li>
                              </ul>
                              <div class="ql-editor" style="font-size:13px;margin-top:7px;line-height:1.7;" data-v-2e658a64="">
                                <div v-html="child.content"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.preview-async {
  width: 100%;
  height: calc(100vh - 120px);
  overflow: auto;
  background-color: rgba(0, 0, 0, .6);
  border-radius: 8px;
  margin-top: 10px;
  border: 2px dotted #eee;
  padding: 80px;
}
</style>
