<script>
import { computed, defineComponent, ref } from 'vue'
import ikun from '@/assets/images/ikun.jpg'
import { useStore } from 'vuex'
export default defineComponent({
  setup () {
    const store = useStore()
    const ikunImg = ref(ikun)
    const resumeTemplate = computed(() => {
      return store.state.selectedResumeTemplate
    })
    return {
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
        <!-- style="height: 1160px;" -->
        <div id="resume_tpl_box" data-v-236d5b80="" >
          <div class="resume_all" data-v-2e658a64="" data-v-236d5b80="">
            <div id="resume_pc" class="pc_main" data-v-2e658a64="">
              <div class="weiruanyahei" data-v-2e658a64="">
                <div class="resume_box" data-v-2e658a64="">
                  <div id="basicInfo" class="basic_info_box"
                       style="padding:28px 30px 20px;" data-v-2e658a64="">
                    <dl class="basic_info" data-v-2e658a64="">
                      <dt id="myname" data-v-2e658a64="">你的名字</dt>
                      <dd class="yixiang_tip" style="font-size:13px;line-height:14px;"
                          data-v-2e658a64=""><span data-v-2e658a64="">求职意向：行政专员</span><span
                        data-v-2e658a64="">武汉</span><span data-v-2e658a64="">5000/月</span><span
                        data-v-2e658a64="">一个月内到岗</span></dd>
                      <dd style="font-size:13px;line-height:14px;" data-v-2e658a64="">
                        <span data-v-2e658a64="">32岁</span><span data-v-2e658a64="">男</span>
                        <span data-v-2e658a64="">6年经验</span></dd>
                      <dd style="font-size:13px;line-height:14px;" data-v-2e658a64="">
                        <span data-v-2e658a64="">15999999999</span><span
                        data-v-2e658a64="">ycresume@qq.com</span></dd>
                    </dl>
                    <div class="photo_box" style="right:50px;" data-v-2e658a64=""><img
                      :src="ikunImg" width="100%" alt=""
                      data-v-2e658a64=""></div>
                  </div>
                  <div class="resume_content_all" style="margin:0 30px 0;"
                       data-v-2e658a64=""><!---->
                    <div id="jiaoyu" class="resume_content" style="margin-top:30px;"
                         data-v-2e658a64="">
                      <div class="resume_content_main" data-v-2e658a64="">
                        <div class="module_tit"
                             style="font-size:16px;color:#284967;border-color:#284967;"
                             data-v-2e658a64=""><span data-v-2e658a64="">教育背景</span>
                        </div>
                        <div class="content_list" style="margin-top:16px;"
                             data-v-2e658a64="">
                          <ul class="list_top" style="font-size:13px;"
                              data-v-2e658a64="">
                            <li class="time" data-v-2e658a64="">2012-09 ~
                              2016-07
                            </li>
                            <li class="name" data-v-2e658a64=""><b
                              data-v-2e658a64="">英才简历师范大学</b></li>
                            <li data-v-2e658a64="">
                              工商管理（<b data-v-2e658a64="">本科</b>）
                            </li>
                          </ul>
                          <div class="ql-editor"
                               style="font-size:13px;margin-top:7px;line-height:1.7;"
                               data-v-2e658a64=""><p><strong>专业成绩：</strong>GPA
                            3.66/4 （专业前5%）</p>
                            <p><strong>主修课程：</strong>基础会计学、货币银行学、统计学、经济法概论、财务会计学、管理学原理、组织行为学、市场营销学、国际贸易理论、国际贸易实务、人力资源开发与管理、财务管理学、企业经营战略概论、质量管理学、西方经济学等等。
                            </p></div>
                        </div>
                      </div>
                    </div>
                    <div id="work" class="resume_content" style="margin-top:30px;"
                         data-v-2e658a64="">
                      <div class="resume_content_main" data-v-2e658a64="">
                        <div class="module_tit"
                             style="font-size:16px;color:#284967;border-color:#284967;"
                             data-v-2e658a64=""><span data-v-2e658a64="">工作经验</span>
                        </div>
                        <div class="content_list" style="margin-top:16px;"
                             data-v-2e658a64="">
                          <ul class="list_top" style="font-size:13px;"
                              data-v-2e658a64="">
                            <li class="time" data-v-2e658a64="">2018-09 ~ 至今
                            </li>
                            <li class="name" data-v-2e658a64=""><b
                              data-v-2e658a64="">英才简历科技有限公司</b></li>
                            <li data-v-2e658a64="">行政专员</li>
                          </ul>
                          <div class="ql-editor"
                               style="font-size:13px;margin-top:7px;line-height:1.7;"
                               data-v-2e658a64="">
                            <ul>
                              <li>
                                拥负责本部的行政人事管理和日常事务，协助总监搞好各部门之间的综合协调，落实公司规章制度，沟通内外联系，保证上情下达和下情上报，负责对会议文件决定的事项进行催办、查办和落实，负责全公司组织系统研讨和修订。
                              </li>
                              <li>编制公司人事管理制度，规避各项人事风险。</li>
                            </ul>
                          </div>
                        </div>
                        <div data-v-2e658a64="" class="content_list"
                             style="margin-top: 16px;">
                          <ul data-v-2e658a64="" class="list_top"
                              style="font-size: 13px;">
                            <li data-v-2e658a64="" class="time">2016-09 ~
                              2018-08
                            </li>
                            <li data-v-2e658a64="" class="name"><b
                              data-v-2e658a64="">武汉述才网络科技有限公司</b></li>
                            <li data-v-2e658a64="">行政助理</li>
                          </ul>
                          <div data-v-2e658a64="" class="ql-editor"
                               style="font-size: 13px; margin-top: 7px; line-height: 1.7;">
                            <ul>
                              <li>负责中心简单财务管理，资产管控；</li>
                              <li>负责公司总部的来访客户接待工作，负责引导和介绍公司的分布情况；</li>
                              <li>负责中心的行政事务，公司班车管理、负责建立员工归属感及前台管理；</li>
                              <li>负责招聘工作，确保人才梯队发展和人才储备及培养。</li>
                              <li>督导公司各项行政、人事制度、员工福利、生日以及公司各种宴会活动的执行。</li>
                              <li>负责招聘工作，制定公司的人力资源发展计划，确保人才梯队发展和人才储备及培养。</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div><!----><!----><!---->
                    <div id="jineng" class="resume_content" style="margin-top:30px;"
                         data-v-2e658a64="">
                      <div class="resume_content_main" data-v-2e658a64="">
                        <div class="module_tit"
                             style="font-size:16px;color:#284967;border-color:#284967;"
                             data-v-2e658a64=""><span data-v-2e658a64="">技能特长</span>
                        </div>
                        <div class="ql-editor"
                             style="font-size:13px;margin-top:16px;line-height:1.7;"
                             data-v-2e658a64=""><p><strong>语言能力：</strong>大学英语6级证书，荣获全国大学生英语竞赛一等奖，能够熟练的进行交流、读写。
                        </p>
                          <p><strong>计算机：</strong>计算机二级证书，熟练操作windows平台上的各类应用软件，如Word、Excel。
                          </p>
                          <p><strong>团队能力：</strong>具有丰富的团队组建与扩充经验和项目管理与协调经验，能够独挡一面。
                          </p></div>
                        <ul data-v-2e658a64="" class="jineng_list">
                          <li data-v-2e658a64="" class="is_text"
                              style="margin-top: 16px;">
                            <div data-v-2e658a64="" role="progressbar"
                                 aria-valuenow="95" aria-valuemin="0"
                                 aria-valuemax="100"
                                 class="el-progress jineng_progress el-progress--line">
                              <div class="el-progress-bar">
                                <div class="el-progress-bar__outer"
                                     style="height: 6px;">
                                  <div class="el-progress-bar__inner"
                                       style="width: 95%; background-color: rgb(90, 123, 153);">
                                    <!----></div>
                                </div>
                              </div>
                            </div>
                            <p data-v-2e658a64="" style="font-size: 13px;">
                              计算机</p><span data-v-2e658a64=""
                                           class="shuliandu"
                                           style="font-size: 12px;">精通</span>
                          </li>
                          <li data-v-2e658a64="" class="is_text"
                              style="margin-top: 16px;">
                            <div data-v-2e658a64="" role="progressbar"
                                 aria-valuenow="65" aria-valuemin="0"
                                 aria-valuemax="100"
                                 class="el-progress jineng_progress el-progress--line">
                              <div class="el-progress-bar">
                                <div class="el-progress-bar__outer"
                                     style="height: 6px;">
                                  <div class="el-progress-bar__inner"
                                       style="width: 65%; background-color: rgb(90, 123, 153);">
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p data-v-2e658a64="" style="font-size: 13px;">
                              英语</p><span data-v-2e658a64="" class="shuliandu"
                                          style="font-size: 12px;">良好</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id="zhengshu" class="resume_content" style="margin-top:30px;"
                         data-v-2e658a64="">
                      <div class="resume_content_main" data-v-2e658a64="">
                        <div class="module_tit"
                             style="font-size:16px;color:#284967;border-color:#284967;"
                             data-v-2e658a64=""><span data-v-2e658a64="">荣誉证书</span>
                        </div>
                        <div class="ql-editor"
                             style="font-size:13px;margin-top:16px;line-height:1.7;"
                             data-v-2e658a64="">
                          <ul>
                            <li>英语四级，听说读写能力良好，能流利的用英语进行日常交流，能快速浏览英文文档和书籍；</li>
                            <li>通过全国计算机二级考试，熟练运用office等常用的办公软件。</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div id="pingjia" class="resume_content" style="margin-top:30px;"
                         data-v-2e658a64="">
                      <div class="resume_content_main" data-v-2e658a64="">
                        <div class="module_tit"
                             style="font-size:16px;color:#284967;border-color:#284967;"
                             data-v-2e658a64=""><span data-v-2e658a64="">自我评价</span>
                        </div>
                        <div class="ql-editor"
                             style="font-size:13px;margin-top:16px;line-height:1.7;"
                             data-v-2e658a64=""><p>
                          工作积极认真，细心负责，熟练运用办公自动化软件，善于在工作中提出问题、发现问题、解决问题，有较强的分析能力；勤奋好学，踏实肯干，动手能力强，认真负责，有很强的社会责任感；坚毅不拔，吃苦耐劳，喜欢迎接新挑战。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="zijianxin_tpl_box" data-v-236d5b80=""></div>
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
  padding: 50px;

}
.vue-cropper[data-v-6dae58fd] {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  direction: ltr;
  touch-action: none;
  text-align: left;
}

.cropper-box[data-v-6dae58fd],
.cropper-box-canvas[data-v-6dae58fd],
.cropper-drag-box[data-v-6dae58fd],
.cropper-crop-box[data-v-6dae58fd],
.cropper-face[data-v-6dae58fd] {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  user-select: none;
}

.cropper-box-canvas img[data-v-6dae58fd] {
  position: relative;
  text-align: left;
  user-select: none;
  transform: none;
  max-width: none;
  max-height: none;
}

.cropper-box[data-v-6dae58fd] {
  overflow: hidden;
}

.cropper-move[data-v-6dae58fd] {
  cursor: move;
}

.cropper-crop[data-v-6dae58fd] {
  cursor: crosshair;
}

.cropper-modal[data-v-6dae58fd] {
  background: rgba(0, 0, 0, 0.5);
}

.cropper-crop-box[data-v-6dae58fd] {
  /*border: 2px solid #39f;*/
}

.cropper-view-box[data-v-6dae58fd] {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  outline: 1px solid #39f;
  outline-color: rgba(51, 153, 255, 0.75);
  user-select: none;
}

.cropper-view-box img[data-v-6dae58fd] {
  user-select: none;
  text-align: left;
  max-width: none;
  max-height: none;
}

.cropper-face[data-v-6dae58fd] {
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.1;
}

.crop-info[data-v-6dae58fd] {
  position: absolute;
  left: 0px;
  min-width: 65px;
  text-align: center;
  color: white;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
}

.crop-line[data-v-6dae58fd] {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.1;
}

.line-w[data-v-6dae58fd] {
  top: -3px;
  left: 0;
  height: 5px;
  cursor: n-resize;
}

.line-a[data-v-6dae58fd] {
  top: 0;
  left: -3px;
  width: 5px;
  cursor: w-resize;
}

.line-s[data-v-6dae58fd] {
  bottom: -3px;
  left: 0;
  height: 5px;
  cursor: s-resize;
}

.line-d[data-v-6dae58fd] {
  top: 0;
  right: -3px;
  width: 5px;
  cursor: e-resize;
}

.crop-point[data-v-6dae58fd] {
  position: absolute;
  width: 8px;
  height: 8px;
  opacity: 0.75;
  background-color: #39f;
  border-radius: 100%;
}

.point1[data-v-6dae58fd] {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.point2[data-v-6dae58fd] {
  top: -5px;
  left: 50%;
  margin-left: -3px;
  cursor: n-resize;
}

.point3[data-v-6dae58fd] {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.point4[data-v-6dae58fd] {
  top: 50%;
  left: -4px;
  margin-top: -3px;
  cursor: w-resize;
}

.point5[data-v-6dae58fd] {
  top: 50%;
  right: -4px;
  margin-top: -3px;
  cursor: e-resize;
}

.point6[data-v-6dae58fd] {
  bottom: -5px;
  left: -4px;
  cursor: sw-resize;
}

.point7[data-v-6dae58fd] {
  bottom: -5px;
  left: 50%;
  margin-left: -3px;
  cursor: s-resize;
}

.point8[data-v-6dae58fd] {
  bottom: -5px;
  right: -4px;
  cursor: se-resize;
}

@media screen and (max-width: 500px) {
  .crop-point[data-v-6dae58fd] {
    position: absolute;
    width: 20px;
    height: 20px;
    opacity: 0.45;
    background-color: #39f;
    border-radius: 100%;
  }

  .point1[data-v-6dae58fd] {
    top: -10px;
    left: -10px;
  }

  .point2[data-v-6dae58fd],
  .point4[data-v-6dae58fd],
  .point5[data-v-6dae58fd],
  .point7[data-v-6dae58fd] {
    display: none;
  }

  .point3[data-v-6dae58fd] {
    top: -10px;
    right: -10px;
  }

  .point4[data-v-6dae58fd] {
    top: 0;
    left: 0;
  }

  .point6[data-v-6dae58fd] {
    bottom: -10px;
    left: -10px;
  }

  .point8[data-v-6dae58fd] {
    bottom: -10px;
    right: -10px;
  }
}
</style>
<style type="text/css"></style>
<style type="text/css">.edit_resume[data-v-236d5b80] {
                        background-color: #39394d;
                        padding-bottom: 450px;
                        padding-top: 70px;
                        min-width: 1200px
                      }

.edit_resume .edit_header[data-v-236d5b80] {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 6;
  width: 100%;
  background-color: #fff;
  -webkit-box-shadow: 0 0 10px rgba(57, 57, 77, .65);
  box-shadow: 0 0 10px rgba(57, 57, 77, .65)
}

.edit_resume .edit_header .edit_header_main[data-v-236d5b80] {
  height: 70px;
  max-width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
  position: relative
}

.edit_resume .edit_header .edit_header_main .logo[data-v-236d5b80] {
  position: absolute;
  font-size: 32px;
  color: #1467cc;
  left: 20px;
  top: 20px;
  width: 138px;
  display: inline-block;
  line-height: 1
}

.edit_resume .edit_header .edit_header_main .set_list[data-v-236d5b80] {
  margin-left: 15%;
  height: 70px
}

.edit_resume .edit_header .edit_header_main .set_list li[data-v-236d5b80] {
  float: left;
  position: relative
}

.edit_resume .edit_header .edit_header_main .set_list li[data-v-236d5b80]:hover {
  z-index: 3
}

.edit_resume .edit_header .edit_header_main .set_list li:hover .set_btn[data-v-236d5b80] {
  -webkit-box-shadow: 0 -8px 10px rgba(0, 0, 0, .2);
  box-shadow: 0 -8px 10px rgba(0, 0, 0, .2);
  color: #1467cc
}

.edit_resume .edit_header .edit_header_main .set_list li:hover .click_btn[data-v-236d5b80] {
  color: #1467cc
}

.edit_resume .edit_header .edit_header_main .set_list li.show_set .set_box[data-v-236d5b80], .edit_resume .edit_header .edit_header_main .set_list li:hover .set_box[data-v-236d5b80] {
  height: auto;
  overflow: inherit;
  padding: 20px 30px 0
}

.edit_resume .edit_header .edit_header_main .set_list li .click_btn[data-v-236d5b80], .edit_resume .edit_header .edit_header_main .set_list li .set_btn[data-v-236d5b80] {
  text-align: center;
  height: 70px;
  padding: 10px 20px 0;
  color: #39394d;
  cursor: pointer;
  background-color: #fff;
  position: relative;
  z-index: 2
}

.edit_resume .edit_header .edit_header_main .set_list li .click_btn i[data-v-236d5b80], .edit_resume .edit_header .edit_header_main .set_list li .set_btn i[data-v-236d5b80] {
  font-size: 30px;
  display: block;
  line-height: 26px;
  color: #1467cc
}

.edit_resume .edit_header .edit_header_main .set_list li .click_btn b[data-v-236d5b80], .edit_resume .edit_header .edit_header_main .set_list li .set_btn b[data-v-236d5b80] {
  margin-top: 5px;
  display: block;
  font-size: 14px
}

.edit_resume .edit_header .edit_header_main .set_list li .click_btn span[data-v-236d5b80] {
  color: #999;
  margin: 0 1px
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box[data-v-236d5b80] {
  width: 536px;
  padding: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 3px 9px 0 rgba(0, 0, 0, .3);
  box-shadow: 0 3px 9px 0 rgba(0, 0, 0, .3);
  position: absolute;
  left: 50%;
  top: 69px;
  margin-left: -268px;
  overflow: hidden;
  height: 0
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li[data-v-236d5b80] {
  float: left;
  width: 50%;
  margin-bottom: 20px;
  min-height: 76px;
  position: relative
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li .slider_box[data-v-236d5b80] {
  position: relative;
  margin-bottom: 6px
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li h5[data-v-236d5b80] {
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 400
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li h5 b[data-v-236d5b80] {
  color: #f60
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li .set_one_btn[data-v-236d5b80] {
  display: inline-block;
  padding: 0 10px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  color: #fff;
  background-color: #1467cc;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 12px
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li .select[data-v-236d5b80] {
  width: 140px;
  border: 1px solid #f3f4f6;
  background: #f3f4f6;
  font-size: 13px;
  border-radius: 5px;
  padding: 0 10px;
  height: 32px;
  outline: none
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li .select[data-v-236d5b80]:focus {
  border-color: #1467cc
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li .page_slider[data-v-236d5b80] {
  width: 138px;
  margin-top: -5px
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li .el_btn[data-v-236d5b80] {
  position: absolute;
  right: 0;
  top: 22px
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li .skin_list[data-v-236d5b80] {
  width: 158px;
  overflow: hidden;
  padding: 5px 0
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li .skin_list span[data-v-236d5b80] {
  float: left;
  width: 26px;
  height: 26px;
  border-radius: 13px;
  margin: 10px 5px 0;
  -webkit-transition: all .1s ease-out 0s;
  transition: all .1s ease-out 0s;
  cursor: pointer
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li .skin_list span[data-v-236d5b80]:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .5);
  box-shadow: 0 0 3px rgba(0, 0, 0, .5)
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li .skin_list .active[data-v-236d5b80] {
  border: 2px solid #000;
  cursor: default
}

.edit_resume .edit_header .edit_header_main .set_list li .set_box .set_page li .make_skin[data-v-236d5b80] {
  width: 106px;
  height: 106px;
  margin: 10px auto 0;
  cursor: pointer;
  background: -webkit-gradient(linear, left top, right bottom, from(red), color-stop(#fb0), color-stop(#00ff26), color-stop(blue), color-stop(#fb00ff), to(#000));
  background: linear-gradient(to bottom right, red, #fb0, #00ff26, blue, #fb00ff, #000);
  border: 1px solid #fff
}

.edit_resume .edit_header .edit_header_main .set_list li .jianju_set[data-v-236d5b80] {
  width: 268px;
  margin-left: -134px
}

.edit_resume .edit_header .edit_header_main .set_list li .jianju_set .set_page li[data-v-236d5b80] {
  width: 100%
}

.edit_resume .edit_header .edit_header_main .set_list li .set_420[data-v-236d5b80] {
  width: 420px;
  margin-left: -210px
}

.edit_resume .edit_header .edit_header_main .set_list li .set_420 .set_page[data-v-236d5b80] {
  padding-bottom: 30px
}

.edit_resume .edit_header .edit_header_main .set_list li .set_420 .set_page li[data-v-236d5b80] {
  width: 50% !important;
  min-height: 0
}

.edit_resume .edit_header .edit_header_main .set_list li .set_420 .set_page li h5[data-v-236d5b80] {
  font-size: 14px;
  font-weight: 700;
  padding-left: 6px;
  margin-bottom: 6px
}

.edit_resume .edit_header .edit_header_main .set_list li .set_skin[data-v-236d5b80] {
  width: 350px;
  margin-left: -175px
}

.edit_resume .edit_header .edit_header_main .set_list li .set_skin .set_page li[data-v-236d5b80] {
  width: 60% !important
}

.edit_resume .edit_header .edit_header_main .set_list li .set_skin .set_page li[data-v-236d5b80]:nth-child(2) {
  width: 40% !important
}

.edit_resume .edit_header .edit_header_main .set_list li .set_skin .set_page li h5[data-v-236d5b80] {
  margin-bottom: 5px;
  text-align: center
}

.edit_resume .edit_header .edit_header_main .get_list[data-v-236d5b80] {
  float: right;
  padding: 16px 0;
  margin-right: 20px;
  position: relative;
  z-index: 2
}

.edit_resume .edit_header .edit_header_main .get_list li[data-v-236d5b80] {
  float: left;
  padding: 0 15px;
  border-radius: 19px;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  margin-right: 20px;
  color: #222;
  font-size: 14px;
  line-height: 36px
}

.edit_resume .edit_header .edit_header_main .get_list li i[data-v-236d5b80] {
  font-size: 18px;
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
  margin-left: -3px;
  color: #888
}

.edit_resume .edit_header .edit_header_main .get_list li .webicon-xiazai[data-v-236d5b80] {
  font-size: 22px
}

.edit_resume .edit_header .edit_header_main .get_list .active[data-v-236d5b80], .edit_resume .edit_header .edit_header_main .get_list li[data-v-236d5b80]:hover {
  color: #1467cc;
  border-color: #1467cc;
  font-weight: 700
}

.edit_resume .edit_header .edit_header_main .get_list .active i[data-v-236d5b80], .edit_resume .edit_header .edit_header_main .get_list li:hover i[data-v-236d5b80] {
  color: #1467cc;
  font-weight: 400
}

.edit_resume .edit_header .edit_header_main .user_box[data-v-236d5b80] {
  float: right;
  position: relative;
  height: 70px
}

.edit_resume .edit_header .edit_header_main .user_box:hover .user_info .my_list[data-v-236d5b80] {
  display: block
}

.edit_resume .edit_header .edit_header_main .user_box:hover .my_jt[data-v-236d5b80] {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg)
}

.edit_resume .edit_header .edit_header_main .user_box .user_login[data-v-236d5b80] {
  margin-top: 18px
}

.edit_resume .edit_header .edit_header_main .user_box .user_info[data-v-236d5b80] {
  position: relative;
  padding-right: 20px
}

.edit_resume .edit_header .edit_header_main .user_box .user_info .my_photo[data-v-236d5b80] {
  display: block;
  width: 50px;
  height: 50px;
  margin-top: 10px;
  border-radius: 50%;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;
  -webkit-transition: all .2s ease-out 0s;
  transition: all .2s ease-out 0s;
  -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, .3);
  box-shadow: 0 0 6px rgba(0, 0, 0, .3)
}

.edit_resume .edit_header .edit_header_main .user_box .user_info .my_photo[data-v-236d5b80]:hover {
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .7);
  box-shadow: 0 0 10px rgba(0, 0, 0, .7);
  -webkit-transform: scale(1.05);
  transform: scale(1.05)
}

.edit_resume .edit_header .edit_header_main .user_box .user_info .my_list[data-v-236d5b80] {
  width: 100px;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, .5);
  box-shadow: 0 2px 10px rgba(0, 0, 0, .5);
  position: absolute;
  left: -30px;
  top: 58px;
  padding: 10px 0;
  background-color: #fff;
  display: none
}

.edit_resume .edit_header .edit_header_main .user_box .user_info .my_list a[data-v-236d5b80] {
  padding: 8px 0;
  color: #666;
  text-align: center;
  display: block;
  font-size: 14px;
  cursor: pointer
}

.edit_resume .edit_header .edit_header_main .user_box .user_info .my_list a[data-v-236d5b80]:hover {
  background-color: #f5f5f5;
  color: #1467cc
}

.edit_resume .edit_header .edit_header_main .user_box .user_info .my_jt[data-v-236d5b80] {
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -10px;
  font-size: 16px;
  line-height: 20px;
  color: #999
}

.edit_resume .edit_header .edit_header_main .user_box .user_info .vip_icon[data-v-236d5b80] {
  position: absolute;
  right: 17px;
  bottom: 0;
  color: #bbb;
  font-size: 18px;
  line-height: 14px
}

.edit_resume .edit_header .edit_header_main .user_box .user_info .vip_lv1[data-v-236d5b80] {
  color: #f90;
  font-weight: 700
}

.edit_resume .edit_header .edit_header_main .user_box .user_info .vip_lv2[data-v-236d5b80] {
  color: #f60;
  font-weight: 700
}

.edit_resume .edit_header .edit_header_main .user_box .user_info .vip_lv3[data-v-236d5b80] {
  color: #ff5250;
  font-weight: 700
}

.edit_resume .edit_header .edit_header_main .user_box .user_info .vip_lv4[data-v-236d5b80] {
  color: #ff0074;
  font-weight: 700
}

.edit_resume .edit_main[data-v-236d5b80] {
  width: 1200px;
  margin: 0 auto;
  padding-top: 10px
}

.edit_resume .edit_main .cover_tpl_box[data-v-236d5b80] {
  width: 820px;
  height: 1160px;
  overflow: hidden;
  background-color: #fff;
  -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, .1);
  box-shadow: 0 0 6px rgba(0, 0, 0, .1);
  position: relative
}

.edit_resume .edit_main .cover_tpl_box .page_line li[data-v-236d5b80] {
  height: 0 !important
}

.edit_resume .edit_main .zijianxin_box[data-v-236d5b80] {
  width: 820px;
  min-height: 1160px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, .1);
  box-shadow: 0 0 6px rgba(0, 0, 0, .1);
  position: relative
}

.edit_resume .edit_main .page_line li[data-v-236d5b80] {
  position: absolute;
  left: 0;
  top: 1150px;
  width: 100%;
  height: 18px;
  z-index: 3;
  font-size: 12px;
  background-color: #39394d
}

.edit_resume .edit_main .page_line li[data-v-236d5b80]:nth-child(2) {
  top: 2310px
}

.edit_resume .edit_main .page_line li[data-v-236d5b80]:nth-child(3) {
  top: 3470px
}

.edit_resume .edit_main .page_line li[data-v-236d5b80]:nth-child(4) {
  top: 4630px
}

.edit_resume .edit_main .page_line li[data-v-236d5b80]:nth-child(5) {
  top: 5790px
}

.edit_resume .edit_main .page_line li[data-v-236d5b80]:nth-child(6) {
  top: 6950px
}

.edit_resume .edit_main .page_line li[data-v-236d5b80]:first-child {
  display: block
}

.edit_resume .edit_main .page_line li[data-v-236d5b80]:last-child {
  margin-top: 10px
}

.edit_resume .edit_main .page_line li:last-child .set_onepage[data-v-236d5b80], .edit_resume .edit_main .page_line li:last-child p[data-v-236d5b80] {
  display: none
}

.edit_resume .edit_main .page_line li .page_num[data-v-236d5b80] {
  position: absolute;
  left: 50%;
  top: 0;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  text-align: center;
  font-size: 12px;
  color: #fff;
  line-height: 18px
}

.edit_resume .edit_main .page_line li .set_onepage[data-v-236d5b80] {
  display: block;
  position: absolute;
  white-space: nowrap;
  left: 115%;
  top: 0;
  line-height: 18px;
  color: #f90;
  cursor: pointer;
  text-decoration: underline
}

.edit_resume .edit_main .page_line li .set_onepage[data-v-236d5b80]:hover {
  color: #f60
}

.edit_resume .edit_main .page_line li p[data-v-236d5b80] {
  float: left;
  color: #ddd;
  font-size: 12px;
  padding-left: 10px
}

.edit_resume .edit_main .page_line li p span[data-v-236d5b80] {
  color: #eee;
  font-weight: 400
}

.edit_resume .edit_main .page_line li p dfn[data-v-236d5b80] {
  color: #1467cc;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  text-decoration: underline
}

.edit_resume .edit_main .page_line li p dfn[data-v-236d5b80]:hover {
  color: #f60;
  text-decoration: underline
}

.edit_resume .edit_main .page_line li .tip_txt[data-v-236d5b80] {
  color: #fff;
  font-size: 12px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%
}

.edit_resume .edit_main .down_big[data-v-236d5b80] {
  width: 228px;
  line-height: 52px;
  border-radius: 26px;
  margin: 46px 0 0 300px;
  color: #fff;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  background-image: -webkit-gradient(linear, left top, right top, color-stop(3%, #1467cc), to(#00c2ef));
  background-image: linear-gradient(90deg, #1467cc 3%, #00c2ef);
  -webkit-transition: all .2s ease-out 0s;
  transition: all .2s ease-out 0s
}

.edit_resume .edit_main .down_big i[data-v-236d5b80] {
  font-size: 26px;
  margin-right: 10px;
  vertical-align: top;
  display: inline-block;
  line-height: 52px
}

.edit_resume .edit_main .down_big[data-v-236d5b80]:hover {
  -webkit-box-shadow: 0 0 10px hsla(0, 0%, 100%, .2);
  box-shadow: 0 0 10px hsla(0, 0%, 100%, .2);
  -webkit-transform: translateY(-3px);
  transform: translateY(-3px)
}

.edit_resume .edit_main .tpl_box[data-v-236d5b80] {
  width: 820px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, .1);
  box-shadow: 0 0 6px rgba(0, 0, 0, .1);
  position: relative
}

.edit_resume .edit_main .edit_right[data-v-236d5b80] {
  float: right;
  width: 360px;
  position: relative
}

.edit_resume .edit_main .edit_right .edit_fixed[data-v-236d5b80] {
  position: fixed;
  top: 80px;
  width: 360px;
  min-height: 400px
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box[data-v-236d5b80] {
  border: 1px solid #ddd;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: #fff
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box h4[data-v-236d5b80] {
  padding: 0 15px;
  font-size: 16px;
  font-weight: 700;
  line-height: 38px;
  background-color: #f2f2f2;
  color: #333;
  border-bottom: 1px solid #ddd
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box h4 .shipin[data-v-236d5b80] {
  float: right;
  line-height: 38px;
  height: 38px;
  width: auto;
  background: none;
  border: none;
  color: #666;
  position: relative;
  left: 0;
  bottom: 0;
  font-size: 14px;
  color: #f60;
  z-index: 0
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box h4 .shipin i[data-v-236d5b80] {
  width: 20px;
  height: 20px;
  background-color: #f60
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box h4 .shipin i[data-v-236d5b80]:after {
  border-color: transparent transparent transparent #f2f2f2;
  margin: 3px 0 0 8px
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box h4 .shipin[data-v-236d5b80]:hover {
  color: #1467cc
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box h4 .shipin:hover i[data-v-236d5b80] {
  background-color: #1467cc
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content[data-v-236d5b80] {
  padding: 15px 15px 25px
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .zhenduan_p[data-v-236d5b80] {
  font-size: 14px;
  margin-top: 5px;
  color: #f60;
  text-align: center
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .zhenduan_p b[data-v-236d5b80] {
  color: #f60
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .fenshu[data-v-236d5b80] {
  font-size: 32px;
  color: #f60;
  text-align: center
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .zhushou_btn_box[data-v-236d5b80] {
  text-align: center;
  margin-top: 10px
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .btn_dingzhi[data-v-236d5b80], .edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .btn_zhenduan[data-v-236d5b80] {
  width: 128px;
  height: 38px;
  line-height: 38px;
  margin: 0 15px;
  padding: 0;
  font-size: 15px;
  margin: 0 auto
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .btn_dingzhi[data-v-236d5b80] {
  background-color: #f60 !important;
  border: 1px solid #f60 !important
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .zhenduan_end[data-v-236d5b80] {
  margin-top: 10px
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .zhenduan_end dt[data-v-236d5b80] {
  font-size: 14px
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .zhenduan_end dd[data-v-236d5b80] {
  font-size: 13px;
  margin-top: 4px;
  color: #f56c6c
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .zhenduan_end .dd_warning[data-v-236d5b80] {
  color: #e6a23c
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .qa_list[data-v-236d5b80] {
  border-top: 1px dashed #ddd
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .qa_list[data-v-236d5b80]:first-child {
  border: none
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .qa_list dt[data-v-236d5b80] {
  font-size: 13px;
  color: #333;
  padding: 8px 0;
  position: relative;
  cursor: pointer
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .qa_list dt:hover i[data-v-236d5b80], .edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .qa_list dt[data-v-236d5b80]:hover {
  color: #1467cc
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .qa_list dt[data-v-236d5b80]:hover:before {
  background-color: #1467cc
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .qa_list dt[data-v-236d5b80]:before {
  content: "";
  display: block;
  width: 4px;
  float: left;
  margin-top: 7px;
  margin-right: 8px;
  height: 4px;
  border-radius: 50%;
  background-color: #666
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .qa_list dt i[data-v-236d5b80] {
  position: absolute;
  right: 10px;
  top: 8px;
  color: #999;
  font-size: 12px
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .qa_list dd[data-v-236d5b80] {
  padding: 0;
  font-size: 12px;
  color: #888;
  max-height: 0;
  overflow: hidden
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .active dt[data-v-236d5b80] {
  color: #1467cc
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .active dt[data-v-236d5b80]:before {
  background-color: #1467cc
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content .active dd[data-v-236d5b80] {
  padding: 0 0 8px;
  max-height: 200px
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .resume100[data-v-236d5b80] {
  text-align: center;
  padding: 10px 0
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .resume100_btn[data-v-236d5b80] {
  display: inline-block;
  width: 120px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border: 1px solid #1467cc;
  color: #1467cc;
  margin: 0 15px;
  border-radius: 5px;
  cursor: pointer
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .resume100_btn[data-v-236d5b80]:hover {
  background-color: rgba(19, 216, 167, .05)
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content2[data-v-236d5b80] {
  padding: 5px 15px
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .page_r_content3[data-v-236d5b80] {
  padding: 15px 15px 25px
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .btn_down[data-v-236d5b80] {
  width: 100%;
  background-color: rgba(19, 216, 167, .1)
}

.edit_resume .edit_main .edit_right .edit_fixed .page_r_box .btn_down[data-v-236d5b80]:hover {
  background-color: #1467cc;
  color: #fff;
  border-color: #1467cc
}

.edit_resume .edit_all[data-v-236d5b80] {
  width: 100%;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, .2);
  box-shadow: 0 0 20px rgba(0, 0, 0, .2);
  -webkit-transition: all .3s ease-out 0s;
  transition: all .3s ease-out 0s;
  transform: translateY(100%);
  -webkit-transform: translateY(calc(100% - 55px));
  z-index: 6
}

.edit_resume .edit_all .edit_box[data-v-236d5b80] {
  width: 1200px;
  margin: 0 auto
}

.edit_resume .edit_all .edit_box .edit_top[data-v-236d5b80] {
  height: 55px;
  border-bottom: 2px solid #ddd;
  background-color: #fff;
  position: relative;
  z-index: 2
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab li[data-v-236d5b80] {
  float: left;
  padding: 23px 11px 0 9px;
  height: 55px;
  width: 100px;
  border-bottom: 2px solid #ddd;
  cursor: pointer;
  position: relative
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab li:hover b[data-v-236d5b80] {
  color: #f60
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab li:hover .btn_edit[data-v-236d5b80], .edit_resume .edit_all .edit_box .edit_top .edit_tab li:hover .btn_next[data-v-236d5b80], .edit_resume .edit_all .edit_box .edit_top .edit_tab li:hover .btn_prev[data-v-236d5b80] {
  display: block
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab li:last-child .btn_next[data-v-236d5b80], .edit_resume .edit_all .edit_box .edit_top .edit_tab li:nth-child(2) .btn_prev[data-v-236d5b80] {
  display: none
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab li b[data-v-236d5b80] {
  display: block;
  text-align: center;
  line-height: 32px;
  font-size: 15px;
  color: #222;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab li .tab_switch[data-v-236d5b80] {
  position: absolute;
  left: 50%;
  top: 6px;
  -webkit-transition: all .2s ease-out 0s;
  transition: all .2s ease-out 0s;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  height: 14px;
  line-height: 14px;
  opacity: .6
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab li:hover .tab_switch[data-v-236d5b80] {
  opacity: 1
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab li .btn_next[data-v-236d5b80], .edit_resume .edit_all .edit_box .edit_top .edit_tab li .btn_prev[data-v-236d5b80] {
  position: absolute;
  left: 0;
  top: -2px;
  color: #1467cc;
  font-size: 18px;
  opacity: .5;
  display: none
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab li .btn_next[data-v-236d5b80]:hover, .edit_resume .edit_all .edit_box .edit_top .edit_tab li .btn_prev[data-v-236d5b80]:hover {
  opacity: 1
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab li .btn_next[data-v-236d5b80] {
  left: inherit;
  right: 0
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab li .btn_edit[data-v-236d5b80] {
  font-size: 14px;
  position: absolute;
  right: 0;
  bottom: 3px;
  color: #1467cc;
  opacity: .8;
  display: none;
  outline: none
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab li .btn_edit[data-v-236d5b80]:hover {
  opacity: 1
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab .active[data-v-236d5b80] {
  border-bottom-color: #f60 !important
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab .active b[data-v-236d5b80] {
  color: #f60 !important
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab .active .tab_switch[data-v-236d5b80] {
  opacity: 1
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab .active .btn_edit[data-v-236d5b80], .edit_resume .edit_all .edit_box .edit_top .edit_tab .active .btn_next[data-v-236d5b80], .edit_resume .edit_all .edit_box .edit_top .edit_tab .active .btn_prev[data-v-236d5b80] {
  display: block
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab .module_hide b[data-v-236d5b80] {
  color: #ccc !important
}

.edit_resume .edit_all .edit_box .edit_top .edit_tab .module_hide .btn_edit[data-v-236d5b80], .edit_resume .edit_all .edit_box .edit_top .edit_tab .module_hide .btn_next[data-v-236d5b80], .edit_resume .edit_all .edit_box .edit_top .edit_tab .module_hide .btn_prev[data-v-236d5b80] {
  display: none !important
}

.edit_resume .edit_all .edit_box .edit_b[data-v-236d5b80] {
  min-height: 320px;
  padding-top: 15px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list[data-v-236d5b80] {
  display: none;
  min-height: 300px;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 22px;
  padding-top: 5px;
  -webkit-transition: all .2s ease-out 0s;
  transition: all .2s ease-out 0s
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list[data-v-236d5b80]::-webkit-scrollbar {
  width: 8px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list[data-v-236d5b80]::-webkit-scrollbar-track {
  background-color: #ddd;
  border-radius: 4px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list[data-v-236d5b80]::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #999
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .input[data-v-236d5b80] {
  border: none;
  width: 180px;
  background-color: #f3f4f6;
  border: 1px solid #f3f4f6;
  border-radius: 3px;
  height: 32px;
  line-height: 32px;
  font-size: 13px;
  color: #222
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .input[data-v-236d5b80]:focus {
  border-color: #1467cc
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .input[data-v-236d5b80]::-webkit-input-placeholder {
  color: #aaa
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .input[data-v-236d5b80]:-ms-input-placeholder {
  color: #aaa
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .input[data-v-236d5b80]::-moz-placeholder {
  color: #aaa
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .info_lh[data-v-236d5b80] {
  line-height: 30px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .input_w[data-v-236d5b80] {
  width: 180px;
  font-size: 13px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .input_time[data-v-236d5b80] {
  width: 100px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .w130[data-v-236d5b80] {
  width: 130px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .w100[data-v-236d5b80] {
  width: 100px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .w60[data-v-236d5b80] {
  width: 60px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .info_list li[data-v-236d5b80] {
  margin-bottom: 15px;
  float: left;
  width: 25%
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .info_list li b[data-v-236d5b80] {
  display: inline-block;
  vertical-align: top;
  min-width: 65px;
  line-height: 32px;
  text-align: right;
  padding-right: 10px;
  color: #333;
  font-size: 14px;
  font-weight: 400
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .info_list li .photo_set[data-v-236d5b80] {
  line-height: 32px;
  margin-left: 10px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .info_list li .photo_upload[data-v-236d5b80] {
  position: relative;
  display: inline-block;
  border: 1px solid #1467cc;
  width: 100px;
  line-height: 30px;
  text-align: center;
  color: #333;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  vertical-align: top;
  border-radius: 16px;
  overflow: hidden;
  background-color: #1467cc;
  color: #fff
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .info_list li .photo_upload[data-v-236d5b80]:hover {
  border-color: #1467cc;
  background-color: #1467cc;
  color: #fff
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .info_list li .photo_upload .input[data-v-236d5b80] {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  font-size: 13px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .info_list li .input_w100[data-v-236d5b80] {
  width: 100px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .info_list li .birthday_set[data-v-236d5b80] {
  margin-left: 8px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .info_hastime li[data-v-236d5b80] {
  width: auto;
  margin-left: 20px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .info_hastime li[data-v-236d5b80]:first-child {
  margin-left: 0
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .info_hastime li b[data-v-236d5b80] {
  width: auto
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .hide_more li[data-v-236d5b80]:nth-child(9), .edit_resume .edit_all .edit_box .edit_b .edit_b_list .hide_more li[data-v-236d5b80]:nth-child(10), .edit_resume .edit_all .edit_box .edit_b .edit_b_list .hide_more li[data-v-236d5b80]:nth-child(11), .edit_resume .edit_all .edit_box .edit_b .edit_b_list .hide_more li[data-v-236d5b80]:nth-child(12) {
  display: none
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .line_box[data-v-236d5b80] {
  margin-top: 12px;
  border-bottom: 1px solid #eee;
  position: relative
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .line_box .btn_more[data-v-236d5b80] {
  color: #666;
  display: block;
  line-height: 30px;
  height: 30px;
  position: absolute;
  left: 50%;
  top: -15px;
  margin-left: -60px;
  background-color: #fff;
  width: 130px;
  text-align: center;
  border-radius: 16px;
  padding: 0 25px 0 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  cursor: pointer
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .line_box .btn_more[data-v-236d5b80]:hover {
  color: #1467cc;
  border-color: #1467cc
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .line_box .btn_more i[data-v-236d5b80] {
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 12px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .make_form[data-v-236d5b80] {
  padding: 20px 0
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .make_form .input[data-v-236d5b80] {
  width: 220px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .make_form .input[data-v-236d5b80]:first-child {
  width: 160px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .make_form2[data-v-236d5b80] {
  padding: 5px 0 0
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .btn_box[data-v-236d5b80] {
  position: absolute;
  right: 0;
  top: 0
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .btn_box .btn_up[data-v-236d5b80] {
  display: block;
  width: 58px;
  height: 28px;
  line-height: 28px;
  margin-top: 20px;
  border: 1px solid #1467cc;
  border-radius: 14px;
  cursor: pointer;
  text-align: center;
  color: #1467cc;
  font-size: 14px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .btn_box .btn_up[data-v-236d5b80]:hover {
  background-color: #1467cc;
  color: #fff
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .btn_box .btn_remove[data-v-236d5b80] {
  display: block;
  margin-top: 20px;
  width: 58px;
  height: 28px;
  line-height: 28px;
  border: 1px solid #ff755d;
  border-radius: 14px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  color: #ff755d
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .btn_box .btn_remove[data-v-236d5b80]:hover {
  background-color: #ff755d;
  color: #fff
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .btn_add[data-v-236d5b80] {
  margin: 15px 0 20px;
  -webkit-animation: addbtn-data-v-236d5b80 5s ease-out 20s normal 2 forwards;
  animation: addbtn-data-v-236d5b80 5s ease-out 20s normal 2 forwards
}

@-webkit-keyframes addbtn-data-v-236d5b80 {
  56%, 66%, 74%, 80%, to {
    -webkit-transform: translateX(0);
    transform: translateX(0)
  }
  61% {
    -webkit-transform: translateX(20px);
    transform: translateX(20px)
  }
  70% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px)
  }
  77% {
    -webkit-transform: translateX(5px);
    transform: translateX(5px)
  }
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .el-icon-remove[data-v-236d5b80] {
  font-size: 18px;
  line-height: 32px;
  vertical-align: top;
  margin-left: 6px;
  color: red;
  opacity: .6;
  cursor: pointer
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .el-icon-remove[data-v-236d5b80]:hover {
  opacity: 1
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .edit_b_content[data-v-236d5b80] {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px dashed #ffc69f
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .edit_b_content[data-v-236d5b80]:first-child {
  border: none;
  margin: 0;
  padding: 0
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .edit_has_sort[data-v-236d5b80] {
  padding-right: 80px !important;
  position: relative
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .jineng_change_list li[data-v-236d5b80] {
  float: left;
  width: 25%;
  margin-top: 15px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .jineng_change_list li b[data-v-236d5b80] {
  display: block;
  margin-right: 20px;
  margin-bottom: 5px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .jineng_change_list li .btn_tag_del[data-v-236d5b80] {
  line-height: 28px;
  margin-left: 15px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .tag_change_list[data-v-236d5b80] {
  padding-top: 10px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .tag_change_list li[data-v-236d5b80] {
  float: left;
  padding: 0 10px;
  height: 32px;
  line-height: 32px;
  margin-right: 15px;
  border-radius: 16px;
  color: #222;
  border: 1px solid #eee;
  position: relative;
  margin-right: 50px;
  margin-top: 10px
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .tag_change_list li span[data-v-236d5b80] {
  position: absolute;
  right: -20px;
  top: 0
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .tag_box[data-v-236d5b80] {
  overflow: hidden
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .tag_box span[data-v-236d5b80] {
  float: left;
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
  border-radius: 16px;
  border: 1px solid #eee;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .tag_box span[data-v-236d5b80]:hover {
  color: #1467cc;
  border-color: #1467cc
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .tag_box span.active[data-v-236d5b80] {
  color: #fff;
  border-color: #1467cc;
  background-color: #1467cc
}

.edit_resume .edit_all .edit_box .edit_b .edit_b_list .edit_text[data-v-236d5b80] {
  width: 100%;
  height: 162px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow-y: scroll;
  padding: 12px 15px;
  line-height: 1.42;
  background-color: #f3f4f6
}

.edit_resume .edit_all .edit_box .edit_b .active[data-v-236d5b80] {
  display: block
}

.edit_resume .edit_all .edit_box .edit_b .active_full[data-v-236d5b80] {
  max-height: calc(100vh - 180px)
}

.edit_resume .edit_all .edit_box .close[data-v-236d5b80] {
  color: #1467cc;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, .2);
  box-shadow: 0 0 20px rgba(0, 0, 0, .2);
  position: absolute;
  left: 50%;
  top: -35px;
  z-index: 1;
  margin-left: -40px;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
  line-height: 36px;
  font-size: 20px;
  -webkit-transition: all .2s ease-out 0s;
  transition: all .2s ease-out 0s;
  -webkit-animation: btn_show_edit-data-v-236d5b80 4s linear 0s normal none infinite;
  animation: btn_show_edit-data-v-236d5b80 4s linear 0s normal none infinite
}

@-webkit-keyframes btn_show_edit-data-v-236d5b80 {
  56%, 66%, 74%, 80%, to {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
  61% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px)
  }
  70% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px)
  }
  77% {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px)
  }
}

@keyframes btn_show_edit-data-v-236d5b80 {
  56%, 66%, 74%, 80%, to {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
  61% {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px)
  }
  70% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px)
  }
  77% {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px)
  }
}

.edit_resume .edit_all .edit_box .close[data-v-236d5b80]:hover {
  top: -40px
}

.edit_resume .edit_all .edit_box .save_tip[data-v-236d5b80] {
  position: absolute;
  left: 62px;
  top: -31px;
  padding: 0 20px;
  height: 30px;
  line-height: 30px;
  color: #fb1e1e;
  font-size: 13px;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .4);
  box-shadow: 0 0 5px rgba(0, 0, 0, .4);
  background-color: #fff;
  font-weight: 700;
  z-index: 8;
  transition: all .5s ease-out 0s;
  -webkit-transition: all .5s ease-out 0s;
  transform: translateX(100%);
  -webkit-transform: translateX(100%);
  opacity: 0
}

.edit_resume .edit_all .edit_box .save_tip span[data-v-236d5b80] {
  margin-right: 10px;
  font-weight: 400
}

.edit_resume .edit_all .edit_box .save_oline[data-v-236d5b80] {
  color: #14cc85
}

.edit_resume .edit_all .edit_box .save_tip_show[data-v-236d5b80] {
  transform: translateX(0);
  -webkit-transform: translateX(0);
  opacity: 1
}

.edit_resume .edit_show[data-v-236d5b80] {
  transform: translateY(0);
  -webkit-transform: translateX(0)
}

.edit_resume .edit_show .edit_box .close[data-v-236d5b80] {
  animation: none;
  -webkit-animation: none
}

.edit_resume .cover_dialog .cover_dialog_box[data-v-236d5b80] {
  margin-top: -25px;
  overflow: hidden
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list[data-v-236d5b80] {
  width: 500px;
  float: left
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .cover_img[data-v-236d5b80] {
  background-color: #999;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: default
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .cover_img img[data-v-236d5b80] {
  vertical-align: top
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .cover_img .use_cover[data-v-236d5b80] {
  display: none;
  position: absolute;
  left: 50%;
  bottom: 10%;
  z-index: 3;
  margin-left: -75px;
  width: 150px;
  line-height: 46px;
  border-radius: 23px;
  color: #fff;
  text-align: center;
  background-image: -webkit-gradient(linear, left top, right top, color-stop(3%, #1467cc), to(#00c2ef));
  background-image: linear-gradient(90deg, #1467cc 3%, #00c2ef);
  cursor: pointer;
  -webkit-transition: all .2s ease-out 0s;
  transition: all .2s ease-out 0s;
  -webkit-transform: scale(.8);
  transform: scale(.8)
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .cover_img .tpl_cover[data-v-236d5b80] {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
  -webkit-transition: all .2s ease-out 0s;
  transition: all .2s ease-out 0s;
  opacity: 1
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .cover_img:hover .use_cover[data-v-236d5b80] {
  -webkit-transform: translateY(-10px) scale(1.1);
  transform: translateY(-10px) scale(1.1)
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .cover_img .gou[data-v-236d5b80] {
  display: none
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .cover_active[data-v-236d5b80] {
  border: 4px solid #1467cc
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .cover_active .use_cover[data-v-236d5b80] {
  display: none !important
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .cover_active .gou[data-v-236d5b80] {
  position: absolute;
  right: 0;
  bottom: 0;
  display: block;
  width: 0;
  height: 0;
  border-width: 80px 80px 0 0;
  border-color: transparent #1467cc #1467cc transparent;
  border-style: solid;
  z-index: 4
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .cover_active .gou i[data-v-236d5b80] {
  position: absolute;
  left: 42px;
  bottom: 5px;
  font-size: 26px;
  color: #fff
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .el-carousel[data-v-236d5b80] {
  padding: 10px 0
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .is-active[data-v-236d5b80] {
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  box-shadow: 0 0 10px rgba(0, 0, 0, .4)
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .is-active .cover_img .tpl_cover[data-v-236d5b80] {
  opacity: 1;
  background-color: transparent
}

.edit_resume .cover_dialog .cover_dialog_box .cover_list .is-active .cover_img .use_cover[data-v-236d5b80] {
  display: block
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info[data-v-236d5b80] {
  float: left;
  margin-left: 80px;
  width: 286px;
  margin-bottom: 5px
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dt[data-v-236d5b80] {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd[data-v-236d5b80] {
  padding: 0 0 10px;
  line-height: 32px
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd span[data-v-236d5b80] {
  min-width: 80px;
  min-height: 32px;
  margin-right: 15px;
  float: left;
  text-align: right
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd span b[data-v-236d5b80] {
  color: red
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd input[data-v-236d5b80] {
  width: 186px;
  border: 1px solid #ddd;
  border-radius: 4px;
  line-height: 36px;
  padding: 0 10px;
  outline: none
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd input[data-v-236d5b80]:focus {
  border-color: #1467cc
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box[data-v-236d5b80] {
  padding: 0 10px;
  margin-top: -8px
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box h5[data-v-236d5b80] {
  font-size: 14px;
  margin-bottom: 2px
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box .input[data-v-236d5b80], .edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box textarea[data-v-236d5b80] {
  font-size: 13px;
  color: #333;
  width: 100%;
  background: #f3f4f6;
  border: 1px solid #f3f4f6
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box .input[data-v-236d5b80]:focus, .edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box textarea[data-v-236d5b80]:focus {
  border-color: #1467cc
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box .input[data-v-236d5b80]::-webkit-input-placeholder, .edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box textarea[data-v-236d5b80]::-webkit-input-placeholder {
  color: #888
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box .input[data-v-236d5b80]:-ms-input-placeholder, .edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box textarea[data-v-236d5b80]:-ms-input-placeholder {
  color: #888
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box .input[data-v-236d5b80]::-moz-placeholder, .edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box textarea[data-v-236d5b80]::-moz-placeholder {
  color: #888
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box .input[data-v-236d5b80] {
  height: 34px;
  line-height: 34px;
  padding: 0 10px
}

.edit_resume .cover_dialog .cover_dialog_box .cover_info dd .title_set_box textarea[data-v-236d5b80] {
  outline: none;
  padding: 6px 10px;
  border-radius: 5px;
  resize: none
}

.edit_resume .down_dialog .down_content[data-v-236d5b80] {
  padding-bottom: 15px
}

.edit_resume .down_dialog .down_content p[data-v-236d5b80] {
  line-height: 26px;
  text-align: center;
  margin-top: 10px
}

.edit_resume .down_dialog .down_content p i[data-v-236d5b80] {
  font-size: 26px;
  margin-right: 10px;
  vertical-align: top
}

.edit_resume .down_dialog .down_content a[data-v-236d5b80] {
  display: block;
  width: 200px;
  margin: 20px auto 0;
  background-color: #f60;
  color: #fff;
  text-align: center;
  line-height: 42px;
  height: 42px;
  border-radius: 3px
}

.edit_resume .down_dialog .down_content a[data-v-236d5b80]:hover {
  color: #fff !important
}

.edit_resume .down_dialog .down_img_content[data-v-236d5b80] {
  margin-top: -30px;
  text-align: center
}

.edit_resume .down_dialog .down_img_content p[data-v-236d5b80] {
  margin-top: 0;
  font-weight: 700;
  font-size: 18px
}

.edit_resume .down_dialog .down_img_content img[data-v-236d5b80] {
  max-width: 820px;
  -webkit-box-shadow: 0 1px 8px rgba(0, 0, 0, .4);
  box-shadow: 0 1px 8px rgba(0, 0, 0, .4)
}

.edit_resume .photo_cut .cut_all[data-v-236d5b80] {
  overflow: hidden;
  margin-top: -20px;
  position: relative
}

.edit_resume .photo_cut .cut_box[data-v-236d5b80] {
  width: 300px;
  height: 350px;
  float: left
}

.edit_resume .photo_cut .cut_r[data-v-236d5b80] {
  float: left;
  margin-left: 30px;
  margin-top: 20px
}

.edit_resume .photo_cut .cut_r .xz_btn[data-v-236d5b80] {
  margin-top: 20px;
  margin-bottom: 30px
}

.edit_resume .photo_cut .cut_r .xz_btn span[data-v-236d5b80] {
  display: inline-block;
  line-height: 30px;
  padding: 0 10px;
  border: 1px solid #f90;
  background-color: #fff3e2;
  color: #f90;
  cursor: pointer;
  border-radius: 4px;
  font-size: 13px
}

.edit_resume .photo_cut .cut_r .xz_btn span[data-v-236d5b80]:first-child {
  margin-right: 20px
}

.edit_resume .photo_cut .cut_r .xz_btn span i[data-v-236d5b80] {
  display: inline-block;
  font-size: 22px;
  line-height: 30px;
  vertical-align: top;
  margin-right: 3px;
  color: #f70
}

.edit_resume .photo_cut .cut_r .xz_btn span[data-v-236d5b80]:hover {
  background-color: #fae2bf;
  border-color: #f60;
  color: #f60
}

.edit_resume .photo_cut .cut_r dl[data-v-236d5b80] {
  margin-top: 20px;
  line-height: 26px
}

.edit_resume .photo_cut .cut_r dl dt[data-v-236d5b80] {
  color: #f60;
  font-size: 14px
}

.edit_resume .photo_cut .cut_r dl dd[data-v-236d5b80] {
  font-size: 13px;
  color: #666
}

.edit_resume .cover_box[data-v-236d5b80] {
  position: absolute;
  left: -100px;
  top: -100px;
  background-color: #000;
  width: 1px;
  height: 1px;
  overflow: hidden
}

.edit_resume .float_r[data-v-236d5b80] {
  position: fixed;
  right: 0;
  bottom: 390px;
  z-index: 7
}

.edit_resume .float_r ul li[data-v-236d5b80] {
  margin-top: 20px;
  width: 48px;
  height: 48px;
  background-color: #1467cc;
  position: relative;
  color: #fff;
  cursor: pointer
}

.edit_resume .float_r ul li i[data-v-236d5b80] {
  display: block;
  line-height: 48px;
  text-align: center;
  font-size: 24px
}

.edit_resume .float_r ul li[data-v-236d5b80]:hover {
  background-color: #1467cc
}

.edit_resume .float_r ul li:hover p[data-v-236d5b80] {
  width: 240px;
  padding-left: 10px
}

.edit_resume .float_r ul li:hover p span[data-v-236d5b80] {
  opacity: 1
}

.edit_resume .float_r ul li:hover p b[data-v-236d5b80] {
  line-height: 20px
}

.edit_resume .float_r ul li:hover .p_text[data-v-236d5b80] {
  width: 160px !important;
  padding: 4px 0 4px 20px
}

.edit_resume .float_r ul li a[data-v-236d5b80] {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  overflow: hidden
}

.edit_resume .float_r ul li p[data-v-236d5b80] {
  position: absolute;
  right: 45px;
  top: 0;
  height: 48px;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background-color: #1467cc;
  line-height: 20px;
  font-size: 14px;
  border-radius: 30px 0 0 30px;
  padding: 4px 0 4px 15px;
  width: 100px;
  -webkit-transition: all .2s ease-out 0s
}

.edit_resume .float_r ul li p b[data-v-236d5b80] {
  display: block;
  line-height: 40px;
  -webkit-transition: all .2s ease-out 0s;
  font-size: 16px;
  font-weight: 400
}

.edit_resume .float_r ul li p span[data-v-236d5b80] {
  display: block;
  font-size: 12px;
  opacity: 0;
  -webkit-transition: all .2s ease-out 0s
}

.edit_resume .float_r ul li .p_text[data-v-236d5b80] {
  line-height: 20px;
  padding: 4px 0 4px 20px;
  font-size: 14px;
  text-align: center;
  width: 0
}

.edit_resume .float_r ul li .p_text b[data-v-236d5b80] {
  font-weight: 700;
  color: #ffd047;
  font-size: 16px
}

.edit_resume .float_r ul li .p_text span[data-v-236d5b80] {
  color: #ffd047
}

.edit_resume .float_r ul .qa:hover p[data-v-236d5b80] {
  width: 120px
}

.edit_resume .float_r ul .qa p[data-v-236d5b80] {
  padding: 0;
  font-size: 16px;
  padding-left: 15px;
  line-height: 48px
}

.edit_resume .zhiyin[data-v-236d5b80] {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, .2);
  font-size: 40px;
  font-weight: 700;
  color: #fff
}

.edit_resume .zhiyin p[data-v-236d5b80] {
  color: #fff;
  z-index: 3
}

.edit_resume .zhiyin .xiayibu[data-v-236d5b80] {
  background-color: hsla(0, 0%, 100%, .9);
  color: #f60;
  width: 120px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 16px;
  position: absolute;
  left: 53%;
  bottom: 385px;
  border-radius: 3px;
  cursor: pointer;
  z-index: 9;
  -webkit-animation: xiayibu-data-v-236d5b80 2.6s ease-out 0s normal none infinite
}

@-webkit-keyframes xiayibu-data-v-236d5b80 {
  0%, 44%, 60%, to {
    -webkit-transform: scale(1.1);
    transform: scale(1.1)
  }
  56% {
    -webkit-transform: scale(1);
    transform: scale(1)
  }
}

.edit_resume .zhiyin .tiaoguo[data-v-236d5b80] {
  border: 1px solid #ddd;
  color: #ddd;
  width: 120px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  font-size: 16px;
  position: absolute;
  left: calc(53% + 140px);
  bottom: 385px;
  border-radius: 3px;
  cursor: pointer;
  z-index: 9
}

.edit_resume .zhiyin .shitu p[data-v-236d5b80] {
  position: absolute;
  left: 48%;
  top: 30%
}

.edit_resume .zhiyin .shitu[data-v-236d5b80]:before {
  display: block;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(0, 0, 0, .7)
}

.edit_resume .zhiyin .shitu[data-v-236d5b80]:after {
  display: block;
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 372px;
  background-color: rgba(0, 0, 0, .7)
}

.edit_resume .zhiyin .gongneng p[data-v-236d5b80] {
  position: absolute;
  left: 35%;
  top: 80px
}

.edit_resume .zhiyin .gongneng p i[data-v-236d5b80] {
  margin-right: 6px;
  font-size: 40px;
  -webkit-transition: all .3s ease-out 0s;
  transition: all .3s ease-out 0s
}

.edit_resume .zhiyin .gongneng p small[data-v-236d5b80] {
  font-size: 14px;
  color: #f60;
  display: block;
  margin-top: 10px
}

.edit_resume .zhiyin .gongneng p .icon-houtui[data-v-236d5b80] {
  display: inline-block
}

.edit_resume .zhiyin .gongneng .gongneng_down[data-v-236d5b80] {
  position: absolute;
  left: 50%;
  top: 80px;
  margin-left: 360px;
  font-size: 40px;
  color: #fff;
  z-index: 9
}

.edit_resume .zhiyin .gongneng .gongneng_down span[data-v-236d5b80] {
  display: block;
  font-size: 40px
}

.edit_resume .zhiyin .gongneng[data-v-236d5b80]:after {
  display: block;
  content: "";
  position: absolute;
  left: 0;
  top: 70px;
  width: 100%;
  height: calc(100% - 70px);
  background-color: rgba(0, 0, 0, .7)
}

.edit_resume .zhiyin .bianji p[data-v-236d5b80] {
  position: absolute;
  left: 35%;
  bottom: 375px;
  text-align: center
}

.edit_resume .zhiyin .bianji p i[data-v-236d5b80] {
  display: block;
  width: 120px;
  margin-right: 6px;
  font-size: 40px;
  -webkit-transition: all .3s ease-out 0s;
  transition: all .3s ease-out 0s;
  opacity: .8;
  line-height: 50px
}

.edit_resume .zhiyin .bianji p small[data-v-236d5b80] {
  font-size: 14px;
  color: #f60
}

.edit_resume .zhiyin .bianji[data-v-236d5b80]:after {
  display: block;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(100% - 372px);
  background-color: rgba(0, 0, 0, .7)
}

.edit_resume .zhiyin_shitu[data-v-236d5b80] {
  background-color: rgba(0, 0, 0, .3)
}

.edit_resume .zhiyin_shitu .shitu p[data-v-236d5b80] {
  text-shadow: 0 0 20px rgba(0, 0, 0, .6)
}

.edit_resume .zhiyin_shitu .xiayibu[data-v-236d5b80] {
  background-color: #fff
}

.edit_resume .zhiyin_shitu .tiaoguo[data-v-236d5b80] {
  border-color: #fff;
  color: #fff
}

.edit_resume .video_dialog video[data-v-236d5b80] {
  margin-top: -20px;
  width: 100%;
  background-color: #000
}

.edit_resume .video_dialog .r100_ewm[data-v-236d5b80] {
  text-align: center;
  margin-top: -20px
}

.edit_resume .shipin[data-v-236d5b80] {
  border: 1px solid #ddd;
  color: #fff;
  width: 250px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  position: absolute;
  left: 53%;
  bottom: 490px;
  border-radius: 3px;
  cursor: pointer;
  z-index: 9;
  background-color: #f60
}

.edit_resume .shipin i[data-v-236d5b80] {
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #eee;
  text-align: center;
  vertical-align: middle;
  position: relative;
  top: -2px
}

.edit_resume .shipin i[data-v-236d5b80]:after {
  content: "";
  border: 8px solid #404040;
  display: block;
  border-color: transparent transparent transparent #f60;
  border-width: 6px 0 7px 8px;
  width: 0;
  height: 0;
  margin: 4px 0 0 9px
}

.edit_resume .font_dialog .font_set_box[data-v-236d5b80] {
  padding: 0 30px
}

.edit_resume .font_dialog .font_set_box li[data-v-236d5b80] {
  width: 50%;
  float: left;
  font-size: 12px;
  margin-bottom: 30px
}

.edit_resume .font_dialog .font_set_box li h5[data-v-236d5b80] {
  float: left;
  line-height: 32px;
  font-size: 13px
}

.edit_resume .font_dialog .font_set_box li .select[data-v-236d5b80] {
  width: 140px;
  border: 1px solid #f3f4f6;
  background: #f3f4f6;
  font-size: 13px;
  border-radius: 5px;
  padding: 0 10px;
  height: 32px;
  outline: none
}

.edit_resume .font_dialog .font_set_box li .select[data-v-236d5b80]:focus {
  border-color: #1467cc
}

.edit_resume .down_list[data-v-236d5b80] {
  text-align: center;
  max-width: 580px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 20px
}

.edit_resume .down_list li[data-v-236d5b80] {
  width: 50%;
  float: left
}

.edit_resume .down_list li span[data-v-236d5b80] {
  cursor: pointer;
  display: inline-block;
  line-height: 42px;
  width: 68%;
  background-color: #1467cc;
  color: #fff;
  font-size: 15px;
  border-radius: 6px
}

.edit_resume .down_list li span[data-v-236d5b80]:hover {
  opacity: .9
}

.edit_resume .down_list li span i[data-v-236d5b80] {
  font-size: 22px;
  vertical-align: middle;
  position: relative;
  top: -2px;
  margin-right: 5px
}

.edit_resume .down_list li .pdf_btn[data-v-236d5b80] {
  background-color: #f50
}

.edit_resume .down_list li p[data-v-236d5b80] {
  margin-top: 10px;
  font-size: 13px;
  color: #888
}

.edit_resume .zijian_edit[data-v-236d5b80] {
  margin-top: -30px
}

.edit_resume .zijian_edit dl dt[data-v-236d5b80] {
  text-align: center;
  font-size: 16px
}

.edit_resume .zijian_edit dl dd[data-v-236d5b80] {
  margin-top: 20px
}

.edit_resume .zijian_edit .zijian_save[data-v-236d5b80] {
  display: block;
  width: 100px;
  margin: 30px auto 0
}

.edit_resume .shouquan_dialog[data-v-236d5b80] {
  margin-top: -20px
}

.edit_resume .shouquan_dialog h4[data-v-236d5b80] {
  font-size: 18px;
  text-align: center;
  color: #f60
}

.edit_resume .shouquan_dialog ul[data-v-236d5b80] {
  padding-bottom: 20px
}

.edit_resume .shouquan_dialog ul li[data-v-236d5b80] {
  padding: 0 30px;
  margin-top: 20px;
  font-size: 15px
}

.edit_resume .shouquan_dialog ul li samp[data-v-236d5b80] {
  display: block;
  font-size: 12px;
  color: #999;
  padding-top: 8px;
  margin-left: 26px
}

.edit_resume .shouquan_dialog .shouquan_tip[data-v-236d5b80] {
  font-size: 13px;
  color: #888;
  padding-left: 55px;
  margin-top: 10px
}

.edit_resume .shouquan_dialog .shouquan_tip b[data-v-236d5b80] {
  color: #c18b67
}

.edit_resume .browser_tip_all[data-v-236d5b80] {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  display: none
}

.edit_resume .browser_tip_bg[data-v-236d5b80] {
  width: 100%;
  height: 100%;
  background: #000;
  background: rgba(0, 0, 0, .5);
  filter: alpha(opacity=50)
}

.edit_resume .browser_tip[data-v-236d5b80] {
  width: 800px;
  padding: 60px 40px 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -100px 0 0 -400px;
  background: #fff;
  border: 1px solid #ddd
}

.edit_resume .browser_tip h4[data-v-236d5b80] {
  font-size: 16px;
  font-weight: 700;
  position: absolute;
  left: 20px;
  top: 5px;
  line-height: 40px;
  color: #666
}

.edit_resume .browser_tip p[data-v-236d5b80] {
  font-size: 13px;
  color: #555;
  line-height: 26px
}

.edit_resume .browser_tip .btn_box[data-v-236d5b80] {
  margin-top: 15px;
  text-align: center
}

.edit_resume .browser_tip .btn_box a[data-v-236d5b80] {
  display: inline-block;
  padding: 0 15px;
  line-height: 40px;
  margin: 0 10px;
  border-radius: 20px;
  cursor: pointer;
  color: #666;
  background-color: #f5f5f5;
  font-size: 14px;
  font-weight: 700
}

.edit_resume .browser_tip .btn_box a[data-v-236d5b80]:hover {
  color: #fff !important;
  background-color: #f60
}

.edit_resume .browser_tip .btn_box .btn_chrome[data-v-236d5b80] {
  background-color: #1467cc;
  color: #fff
}

@media screen and (max-width: 1200px) {
  .edit_resume .edit_header .edit_header_main .set_list[data-v-236d5b80] {
    margin-left: 13%;
    height: 70px
  }

  .edit_resume .edit_header .edit_header_main .set_list li .click_btn[data-v-236d5b80], .edit_resume .edit_header .edit_header_main .set_list li .set_btn[data-v-236d5b80] {
    padding: 10px 15px 0
  }
}
</style>
<style type="text/css">
/*@font-face {*/
/*  font-family: qmfont;*/
/*  src: url(/_nuxt/fonts/iconfont.56b43b6.woff2) format("woff2"), url(/_nuxt/fonts/iconfont.9ddeb81.woff) format("woff"), url(/_nuxt/fonts/iconfont.b762e9d.ttf) format("truetype")*/
/*}*/

.qmfont {
  font-family: qmfont !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}

.qmicon-xingbie:before {
  content: "\F0A5"
}

.qmicon-xingbie-nan:before {
  content: "\E619"
}

.qmicon-wangzhan:before {
  content: "\E6F5"
}

.qmicon-dizhi:before {
  content: "\E679"
}

.qmicon-yuanxiao:before {
  content: "\E635"
}

.qmicon-weixin:before {
  content: "\E61A"
}

.qmicon-qq:before {
  content: "\E60F"
}

.qmicon-zhiwei:before {
  content: "\E661"
}

.qmicon-didian:before {
  content: "\E625"
}

.qmicon-xingbie-nv:before {
  content: "\E615"
}

.qmicon-zhengzhi:before {
  content: "\E628"
}

.qmicon-minzu:before {
  content: "\E885"
}

.qmicon-celiang:before {
  content: "\E604"
}

.qmicon-user:before {
  content: "\E60E"
}

.qmicon-wujiaoxing:before {
  content: "\E70B"
}

.qmicon-shezhi:before {
  content: "\E657"
}

.qmicon-ganxingqu:before {
  content: "\E62D"
}

.qmicon-xin:before {
  content: "\E634"
}

.qmicon-pingjia:before {
  content: "\E639"
}

.qmicon-xingxing:before {
  content: "\E642"
}

.qmicon-shu:before {
  content: "\E633"
}

.qmicon-dingzhi:before {
  content: "\E605"
}

.qmicon-company:before {
  content: "\E618"
}

.qmicon-rongyu:before {
  content: "\E629"
}

.qmicon-wodexiao:before {
  content: "\E62C"
}

.qmicon-jingyan:before {
  content: "\E602"
}

.qmicon-bangongbao:before {
  content: "\E616"
}

.qmicon-phone:before {
  content: "\E63A"
}

.qmicon-calendar:before {
  content: "\E609"
}

.qmicon-youxi_tianchong:before {
  content: "\E61E"
}

.qmicon-rili:before {
  content: "\E63B"
}

.qmicon-weizhi:before {
  content: "\E63D"
}

.qmicon-xueshimao:before {
  content: "\E6B1"
}

.qmicon-bianjiqianbixieshuru:before {
  content: "\E7C8"
}

.qmicon-shoutibao:before {
  content: "\E656"
}

.qmicon-man:before {
  content: "\E612"
}

.qmicon-woman:before {
  content: "\E617"
}

/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
.ql-container {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  height: 100%;
  margin: 0;
  position: relative
}

.ql-container.ql-disabled .ql-tooltip {
  visibility: hidden
}

.ql-container.ql-disabled .ql-editor ul[data-checked] > li:before {
  pointer-events: none
}

.ql-clipboard {
  left: -100000px;
  height: 1px;
  overflow-y: hidden;
  position: absolute;
  top: 50%
}

.ql-clipboard p {
  margin: 0;
  padding: 0
}

.ql-editor {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 1.42;
  height: 100%;
  outline: none;
  overflow-y: auto;
  padding: 12px 15px;
  -o-tab-size: 4;
  tab-size: 4;
  -moz-tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word
}

.ql-editor > * {
  cursor: text
}

.ql-editor blockquote, .ql-editor h1, .ql-editor h2, .ql-editor h3, .ql-editor h4, .ql-editor h5, .ql-editor h6, .ql-editor ol, .ql-editor p, .ql-editor pre, .ql-editor ul {
  margin: 0;
  padding: 0;
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9
}

.ql-editor ol, .ql-editor ul {
  padding-left: 1.5em
}

.ql-editor ol > li, .ql-editor ul > li {
  list-style-type: none
}

.ql-editor ul > li:before {
  content: "\2022"
}

.ql-editor ul[data-checked=false], .ql-editor ul[data-checked=true] {
  pointer-events: none
}

.ql-editor ul[data-checked=false] > li *, .ql-editor ul[data-checked=true] > li * {
  pointer-events: all
}

.ql-editor ul[data-checked=false] > li:before, .ql-editor ul[data-checked=true] > li:before {
  color: #777;
  cursor: pointer;
  pointer-events: all
}

.ql-editor ul[data-checked=true] > li:before {
  content: "\2611"
}

.ql-editor ul[data-checked=false] > li:before {
  content: "\2610"
}

.ql-editor li:before {
  display: inline-block;
  white-space: nowrap;
  width: 1.2em
}

.ql-editor li:not(.ql-direction-rtl):before {
  margin-left: -1.5em;
  margin-right: .3em;
  text-align: right
}

.ql-editor li.ql-direction-rtl:before {
  margin-left: .3em;
  margin-right: -1.5em
}

.ql-editor ol li:not(.ql-direction-rtl), .ql-editor ul li:not(.ql-direction-rtl) {
  padding-left: 1.5em
}

.ql-editor ol li.ql-direction-rtl, .ql-editor ul li.ql-direction-rtl {
  padding-right: 1.5em
}

.ql-editor ol li {
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  counter-increment: list-0
}

.ql-editor ol li:before {
  content: counter(list-0, decimal) ". "
}

.ql-editor ol li.ql-indent-1 {
  counter-increment: list-1
}

.ql-editor ol li.ql-indent-1:before {
  content: counter(list-1, lower-alpha) ". "
}

.ql-editor ol li.ql-indent-1 {
  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9
}

.ql-editor ol li.ql-indent-2 {
  counter-increment: list-2
}

.ql-editor ol li.ql-indent-2:before {
  content: counter(list-2, lower-roman) ". "
}

.ql-editor ol li.ql-indent-2 {
  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9
}

.ql-editor ol li.ql-indent-3 {
  counter-increment: list-3
}

.ql-editor ol li.ql-indent-3:before {
  content: counter(list-3, decimal) ". "
}

.ql-editor ol li.ql-indent-3 {
  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9
}

.ql-editor ol li.ql-indent-4 {
  counter-increment: list-4
}

.ql-editor ol li.ql-indent-4:before {
  content: counter(list-4, lower-alpha) ". "
}

.ql-editor ol li.ql-indent-4 {
  counter-reset: list-5 list-6 list-7 list-8 list-9
}

.ql-editor ol li.ql-indent-5 {
  counter-increment: list-5
}

.ql-editor ol li.ql-indent-5:before {
  content: counter(list-5, lower-roman) ". "
}

.ql-editor ol li.ql-indent-5 {
  counter-reset: list-6 list-7 list-8 list-9
}

.ql-editor ol li.ql-indent-6 {
  counter-increment: list-6
}

.ql-editor ol li.ql-indent-6:before {
  content: counter(list-6, decimal) ". "
}

.ql-editor ol li.ql-indent-6 {
  counter-reset: list-7 list-8 list-9
}

.ql-editor ol li.ql-indent-7 {
  counter-increment: list-7
}

.ql-editor ol li.ql-indent-7:before {
  content: counter(list-7, lower-alpha) ". "
}

.ql-editor ol li.ql-indent-7 {
  counter-reset: list-8 list-9
}

.ql-editor ol li.ql-indent-8 {
  counter-increment: list-8
}

.ql-editor ol li.ql-indent-8:before {
  content: counter(list-8, lower-roman) ". "
}

.ql-editor ol li.ql-indent-8 {
  counter-reset: list-9
}

.ql-editor ol li.ql-indent-9 {
  counter-increment: list-9
}

.ql-editor ol li.ql-indent-9:before {
  content: counter(list-9, decimal) ". "
}

.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 3em
}

.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 4.5em
}

.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 3em
}

.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 4.5em
}

.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 6em
}

.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 7.5em
}

.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 6em
}

.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 7.5em
}

.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 9em
}

.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 10.5em
}

.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 9em
}

.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 10.5em
}

.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 12em
}

.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 13.5em
}

.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 12em
}

.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 13.5em
}

.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 15em
}

.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 16.5em
}

.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 15em
}

.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 16.5em
}

.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 18em
}

.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 19.5em
}

.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 18em
}

.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 19.5em
}

.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 21em
}

.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 22.5em
}

.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 21em
}

.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 22.5em
}

.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 24em
}

.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 25.5em
}

.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 24em
}

.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 25.5em
}

.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 27em
}

.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 28.5em
}

.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 27em
}

.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 28.5em
}

.ql-editor .ql-video {
  display: block;
  max-width: 100%
}

.ql-editor .ql-video.ql-align-center {
  margin: 0 auto
}

.ql-editor .ql-video.ql-align-right {
  margin: 0 0 0 auto
}

.ql-editor .ql-bg-black {
  background-color: #000
}

.ql-editor .ql-bg-red {
  background-color: #e60000
}

.ql-editor .ql-bg-orange {
  background-color: #f90
}

.ql-editor .ql-bg-yellow {
  background-color: #ff0
}

.ql-editor .ql-bg-green {
  background-color: #008a00
}

.ql-editor .ql-bg-blue {
  background-color: #06c
}

.ql-editor .ql-bg-purple {
  background-color: #93f
}

.ql-editor .ql-color-white {
  color: #fff
}

.ql-editor .ql-color-red {
  color: #e60000
}

.ql-editor .ql-color-orange {
  color: #f90
}

.ql-editor .ql-color-yellow {
  color: #ff0
}

.ql-editor .ql-color-green {
  color: #008a00
}

.ql-editor .ql-color-blue {
  color: #06c
}

.ql-editor .ql-color-purple {
  color: #93f
}

.ql-editor .ql-font-serif {
  font-family: Georgia, Times New Roman, serif
}

.ql-editor .ql-font-monospace {
  font-family: Monaco, Courier New, monospace
}

.ql-editor .ql-size-small {
  font-size: .75em
}

.ql-editor .ql-size-medium {
  font-size: 1.16em
}

.ql-editor .ql-size-large {
  font-size: 1.5em
}

.ql-editor .ql-size-big {
  font-size: 2em
}

.ql-editor .ql-size-huge {
  font-size: 2.5em
}

.ql-editor .ql-direction-rtl {
  direction: rtl;
  text-align: inherit
}

.ql-editor .ql-align-center {
  text-align: center
}

.ql-editor .ql-align-justify {
  text-align: justify
}

.ql-editor .ql-align-right {
  text-align: right
}

.ql-editor.ql-blank:before {
  color: rgba(0, 0, 0, .6);
  content: attr(data-placeholder);
  font-style: italic;
  left: 15px;
  pointer-events: none;
  position: absolute;
  right: 15px
}

.ql-snow.ql-toolbar:after, .ql-snow .ql-toolbar:after {
  clear: both;
  content: "";
  display: table
}

.ql-snow.ql-toolbar button, .ql-snow .ql-toolbar button {
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  float: left;
  height: 24px;
  padding: 3px 5px;
  width: 28px
}

.ql-snow.ql-toolbar button svg, .ql-snow .ql-toolbar button svg {
  float: left;
  height: 100%
}

.ql-snow.ql-toolbar button:active:hover, .ql-snow .ql-toolbar button:active:hover {
  outline: none
}

.ql-snow.ql-toolbar input.ql-image[type=file], .ql-snow .ql-toolbar input.ql-image[type=file] {
  display: none
}

.ql-snow.ql-toolbar .ql-picker-item.ql-selected, .ql-snow .ql-toolbar .ql-picker-item.ql-selected, .ql-snow.ql-toolbar .ql-picker-item:hover, .ql-snow .ql-toolbar .ql-picker-item:hover, .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active, .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover, .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active, .ql-snow.ql-toolbar button:focus, .ql-snow .ql-toolbar button:focus, .ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover {
  color: #06c
}

.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar button:focus .ql-fill, .ql-snow .ql-toolbar button:focus .ql-fill, .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow.ql-toolbar button:hover .ql-fill, .ql-snow .ql-toolbar button:hover .ql-fill, .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill {
  fill: #06c
}

.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow.ql-toolbar button.ql-active .ql-stroke, .ql-snow .ql-toolbar button.ql-active .ql-stroke, .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar button:focus .ql-stroke, .ql-snow .ql-toolbar button:focus .ql-stroke, .ql-snow.ql-toolbar button:focus .ql-stroke-miter, .ql-snow .ql-toolbar button:focus .ql-stroke-miter, .ql-snow.ql-toolbar button:hover .ql-stroke, .ql-snow .ql-toolbar button:hover .ql-stroke, .ql-snow.ql-toolbar button:hover .ql-stroke-miter, .ql-snow .ql-toolbar button:hover .ql-stroke-miter {
  stroke: #06c
}

@media (pointer: coarse) {
  .ql-snow.ql-toolbar button:hover:not(.ql-active), .ql-snow .ql-toolbar button:hover:not(.ql-active) {
    color: #444
  }

  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill, .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill, .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
    fill: #444
  }

  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke, .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke, .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter, .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
    stroke: #444
  }
}

.ql-snow, .ql-snow * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

.ql-snow .ql-hidden {
  display: none
}

.ql-snow .ql-out-bottom, .ql-snow .ql-out-top {
  visibility: hidden
}

.ql-snow .ql-tooltip {
  position: absolute;
  -webkit-transform: translateY(10px);
  transform: translateY(10px)
}

.ql-snow .ql-tooltip a {
  cursor: pointer;
  text-decoration: none
}

.ql-snow .ql-tooltip.ql-flip {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px)
}

.ql-snow .ql-formats {
  display: inline-block;
  vertical-align: middle
}

.ql-snow .ql-formats:after {
  clear: both;
  content: "";
  display: table
}

.ql-snow .ql-stroke {
  fill: none;
  stroke: #444;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2
}

.ql-snow .ql-stroke-miter {
  fill: none;
  stroke: #444;
  stroke-miterlimit: 10;
  stroke-width: 2
}

.ql-snow .ql-fill, .ql-snow .ql-stroke.ql-fill {
  fill: #444
}

.ql-snow .ql-empty {
  fill: none
}

.ql-snow .ql-even {
  fill-rule: evenodd
}

.ql-snow .ql-stroke.ql-thin, .ql-snow .ql-thin {
  stroke-width: 1
}

.ql-snow .ql-transparent {
  opacity: .4
}

.ql-snow .ql-direction svg:last-child {
  display: none
}

.ql-snow .ql-direction.ql-active svg:last-child {
  display: inline
}

.ql-snow .ql-direction.ql-active svg:first-child {
  display: none
}

.ql-snow .ql-editor h1 {
  font-size: 2em
}

.ql-snow .ql-editor h2 {
  font-size: 1.5em
}

.ql-snow .ql-editor h3 {
  font-size: 1.17em
}

.ql-snow .ql-editor h4 {
  font-size: 1em
}

.ql-snow .ql-editor h5 {
  font-size: .83em
}

.ql-snow .ql-editor h6 {
  font-size: .67em
}

.ql-snow .ql-editor a {
  text-decoration: underline
}

.ql-snow .ql-editor blockquote {
  border-left: 4px solid #ccc;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 16px
}

.ql-snow .ql-editor code, .ql-snow .ql-editor pre {
  background-color: #f0f0f0;
  border-radius: 3px
}

.ql-snow .ql-editor pre {
  white-space: pre-wrap;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 10px
}

.ql-snow .ql-editor code {
  font-size: 85%;
  padding: 2px 4px
}

.ql-snow .ql-editor pre.ql-syntax {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible
}

.ql-snow .ql-editor img {
  max-width: 100%
}

.ql-snow .ql-picker {
  color: #444;
  display: inline-block;
  float: left;
  font-size: 14px;
  font-weight: 500;
  height: 24px;
  position: relative;
  vertical-align: middle
}

.ql-snow .ql-picker-label {
  cursor: pointer;
  display: inline-block;
  height: 100%;
  padding-left: 8px;
  padding-right: 2px;
  position: relative;
  width: 100%
}

.ql-snow .ql-picker-label:before {
  display: inline-block;
  line-height: 22px
}

.ql-snow .ql-picker-options {
  background-color: #fff;
  display: none;
  min-width: 100%;
  padding: 4px 8px;
  position: absolute;
  white-space: nowrap
}

.ql-snow .ql-picker-options .ql-picker-item {
  cursor: pointer;
  display: block;
  padding-bottom: 5px;
  padding-top: 5px
}

.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  color: #ccc;
  z-index: 2
}

.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
  fill: #ccc
}

.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
  stroke: #ccc
}

.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  display: block;
  margin-top: -1px;
  top: 100%;
  z-index: 1
}

.ql-snow .ql-color-picker, .ql-snow .ql-icon-picker {
  width: 28px
}

.ql-snow .ql-color-picker .ql-picker-label, .ql-snow .ql-icon-picker .ql-picker-label {
  padding: 2px 4px
}

.ql-snow .ql-color-picker .ql-picker-label svg, .ql-snow .ql-icon-picker .ql-picker-label svg {
  right: 4px
}

.ql-snow .ql-icon-picker .ql-picker-options {
  padding: 4px 0
}

.ql-snow .ql-icon-picker .ql-picker-item {
  height: 24px;
  width: 24px;
  padding: 2px 4px
}

.ql-snow .ql-color-picker .ql-picker-options {
  padding: 3px 5px;
  width: 152px
}

.ql-snow .ql-color-picker .ql-picker-item {
  border: 1px solid transparent;
  float: left;
  height: 16px;
  margin: 2px;
  padding: 0;
  width: 16px
}

.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
  position: absolute;
  margin-top: -9px;
  right: 0;
  top: 50%;
  width: 18px
}

.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=""]):before, .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=""]):before, .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=""]):before, .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=""]):before, .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=""]):before, .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=""]):before {
  content: attr(data-label)
}

.ql-snow .ql-picker.ql-header {
  width: 98px
}

.ql-snow .ql-picker.ql-header .ql-picker-item:before, .ql-snow .ql-picker.ql-header .ql-picker-label:before {
  content: "Normal"
}

.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before, .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]:before {
  content: "Heading 1"
}

.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before, .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]:before {
  content: "Heading 2"
}

.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before, .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]:before {
  content: "Heading 3"
}

.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before, .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]:before {
  content: "Heading 4"
}

.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before, .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]:before {
  content: "Heading 5"
}

.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before, .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]:before {
  content: "Heading 6"
}

.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]:before {
  font-size: 2em
}

.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]:before {
  font-size: 1.5em
}

.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]:before {
  font-size: 1.17em
}

.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]:before {
  font-size: 1em
}

.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]:before {
  font-size: .83em
}

.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]:before {
  font-size: .67em
}

.ql-snow .ql-picker.ql-font {
  width: 108px
}

.ql-snow .ql-picker.ql-font .ql-picker-item:before, .ql-snow .ql-picker.ql-font .ql-picker-label:before {
  content: "Sans Serif"
}

.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before, .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before {
  content: "Serif"
}

.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before, .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before {
  content: "Monospace"
}

.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before {
  font-family: Georgia, Times New Roman, serif
}

.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before {
  font-family: Monaco, Courier New, monospace
}

.ql-snow .ql-picker.ql-size {
  width: 76px
}

.ql-snow .ql-picker.ql-size .ql-picker-label:before {
  content: "\5B57\4F53\5927\5C0F";
  font-size: 12px
}

.ql-snow .ql-picker.ql-size .ql-picker-item:before {
  content: "\9ED8\8BA4"
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before, .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before {
  content: "\5C0F\53F7"
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=medium]:before, .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=medium]:before {
  content: "\4E2D\53F7"
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before, .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before {
  content: "\5927\53F7"
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=big]:before, .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=big]:before {
  content: "Big"
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before, .ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before {
  content: "\8D85\5927\53F7"
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before {
  font-size: 10px
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=medium]:before {
  font-size: 15px
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before {
  font-size: 18px
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=big]:before {
  font-size: 22px
}

.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before {
  font-size: 32px
}

.ql-snow .ql-color-picker.ql-background .ql-picker-item {
  background-color: #fff
}

.ql-snow .ql-color-picker.ql-color .ql-picker-item {
  background-color: #000
}

.ql-toolbar.ql-snow {
  border: 1px solid #ccc;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  padding: 8px
}

.ql-toolbar.ql-snow .ql-formats {
  margin-right: 15px
}

.ql-toolbar.ql-snow .ql-picker-label {
  border: 1px solid transparent
}

.ql-toolbar.ql-snow .ql-picker-options {
  border: 1px solid transparent;
  -webkit-box-shadow: rgba(0, 0, 0, .2) 0 2px 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .2)
}

.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label, .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  border-color: #ccc
}

.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected, .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
  border-color: #000
}

.ql-toolbar.ql-snow + .ql-container.ql-snow {
  border-top: 0
}

.ql-snow .ql-tooltip {
  background-color: #fff;
  border: 1px solid #ccc;
  -webkit-box-shadow: 0 0 5px #ddd;
  box-shadow: 0 0 5px #ddd;
  color: #444;
  padding: 5px 12px;
  white-space: nowrap
}

.ql-snow .ql-tooltip:before {
  content: "Visit URL:";
  line-height: 26px;
  margin-right: 8px
}

.ql-snow .ql-tooltip input[type=text] {
  display: none;
  border: 1px solid #ccc;
  font-size: 13px;
  height: 26px;
  margin: 0;
  padding: 3px 5px;
  width: 170px
}

.ql-snow .ql-tooltip a.ql-preview {
  display: inline-block;
  max-width: 200px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  vertical-align: top
}

.ql-snow .ql-tooltip a.ql-action:after {
  border-right: 1px solid #ccc;
  content: "Edit";
  margin-left: 16px;
  padding-right: 8px
}

.ql-snow .ql-tooltip a.ql-remove:before {
  content: "Remove";
  margin-left: 8px
}

.ql-snow .ql-tooltip a {
  line-height: 26px
}

.ql-snow .ql-tooltip.ql-editing a.ql-preview, .ql-snow .ql-tooltip.ql-editing a.ql-remove {
  display: none
}

.ql-snow .ql-tooltip.ql-editing input[type=text] {
  display: inline-block
}

.ql-snow .ql-tooltip.ql-editing a.ql-action:after {
  border-right: 0;
  content: "Save";
  padding-right: 0
}

.ql-snow .ql-tooltip[data-mode=link]:before {
  content: "Enter link:"
}

.ql-snow .ql-tooltip[data-mode=formula]:before {
  content: "Enter formula:"
}

.ql-snow .ql-tooltip[data-mode=video]:before {
  content: "Enter video:"
}

.ql-snow a {
  color: #06c
}

.ql-container.ql-snow {
  border: 1px solid #ccc
}

.edit_resume .max_editor .quill-editor {
  height: 220px !important;
  max-height: 220px !important;
  overflow-y: visible !important;
  overflow-y: initial !important
}

.edit_resume .quill-editor .ql-editor {
  min-height: 130px !important
}

.edit_resume .cover_list .el-carousel__indicators {
  display: none
}

.edit_resume .info_list .el-input__inner {
  font-size: 13px !important;
  background: #f3f4f6 !important;
  border: 1px solid #f3f4f6 !important;
  line-height: 33px
}

.edit_resume .info_list .el-input__inner:focus {
  border-color: #1467cc !important
}

.edit_resume .info_list .el-input__inner::-webkit-input-placeholder {
  color: #999
}

.edit_resume .info_list .el-input__inner:-ms-input-placeholder {
  color: #999
}

.edit_resume .info_list .el-input__inner::-moz-placeholder {
  color: #999
}

.edit_resume .video_dialog2 .el-dialog {
  margin-top: 20px !important
}

.edit_resume .edit_box .el-button {
  border-radius: 18px
}

.edit_resume .edit_box .ql-editor img {
  max-width: 90%
}

.edit_resume .input_time .el-input__inner {
  padding: 0 20px 0 25px !important
}

.edit_resume .input_time .el-input__prefix {
  left: 2px !important
}

.edit_resume .input_time .el-input__suffix {
  right: 0
}

.edit_resume .input_time .el-input__icon {
  width: 20px
}

.edit_resume .info_hastime .el-checkbox__label {
  padding-left: 5px
}

.edit_resume .info_hastime .el-checkbox {
  margin-left: 10px
}

.edit_resume .jineng_change_list .el-checkbox__label {
  font-size: 12px !important
}

.edit_resume .edit_tab li .tab_switch .el-switch__core {
  width: 15px !important;
  outline: none;
  height: 15px;
  -webkit-transition: all .2s ease-out 0s;
  transition: all .2s ease-out 0s;
  vertical-align: top;
  margin: 0 auto;
  display: block;
  border-radius: 7px
}

.edit_resume .edit_tab li .tab_switch .el-switch__core:after {
  width: 13px;
  height: 13px;
  top: 0;
  opacity: 0;
  -webkit-transition: all .2s ease-out 0s;
  transition: all .2s ease-out 0s
}

.edit_resume .edit_tab li .el-switch.is-checked .el-switch__core:after {
  margin-left: -13px
}

.edit_resume .edit_tab li.active .el-switch .el-switch__core, .edit_resume .edit_tab li:hover .el-switch .el-switch__core {
  width: 34px !important
}

.edit_resume .edit_tab li.active .el-switch .el-switch__core:after, .edit_resume .edit_tab li:hover .el-switch .el-switch__core:after {
  opacity: 1
}

.edit_resume .zijian_edit .el-radio__label {
  font-size: 18px
}

.edit_resume .zijian_edit .quill-editor .ql-editor {
  min-height: 360px !important
}

.edit_resume .zijian_edit .qm_editor .quill-editor {
  max-height: 800px !important
}

.edit_resume .save_tip i {
  color: #333
}

.color_all2 {
  position: absolute !important;
  left: 50% !important;
  top: 70px !important
}</style>
<style type="text/css">.resume_all .pc_main .resume_box[data-v-2e658a64] {
                        position: relative;
                        padding-bottom: 2px;
                        min-height: 1150px;
                        color: #333;
                        background-color: #fff
                      }

.resume_all .pc_main .resume_box .basic_info_box[data-v-2e658a64] {
  padding: 26px 40px 20px;
  position: relative;
  min-height: 150px
}

.resume_all .pc_main .resume_box .basic_info_box .basic_info[data-v-2e658a64] {
  padding-right: 130px;
  min-width: 300px;
  text-align: center
}

.resume_all .pc_main .resume_box .basic_info_box .basic_info dt[data-v-2e658a64] {
  font-size: 22px;
  color: #222;
  letter-spacing: 2px;
  padding-bottom: 2px
}

.resume_all .pc_main .resume_box .basic_info_box .basic_info dd[data-v-2e658a64] {
  position: relative;
  font-size: 14px;
  margin-left: -10px
}

.resume_all .pc_main .resume_box .basic_info_box .basic_info dd span[data-v-2e658a64] {
  margin-top: 9px;
  padding: 0 10px;
  display: inline-block;
  border-right: 1px solid #ccc;
  white-space: nowrap
}

.resume_all .pc_main .resume_box .basic_info_box .basic_info dd span[data-v-2e658a64]:last-child {
  border: none
}

.resume_all .pc_main .resume_box .basic_info_box .photo_box[data-v-2e658a64] {
  position: absolute;
  right: 30px;
  top: 25px;
  z-index: 3;
  width: 106px;
  background-color: #f9f9f9;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 50%
}

.resume_all .pc_main .resume_box .resume_line[data-v-2e658a64] {
  height: 2px;
  margin-top: -1px;
  background-color: #fff;
  position: relative;
  z-index: 2
}

.resume_all .pc_main .resume_box .resume_content_all[data-v-2e658a64] {
  margin: 6px 30px 0;
  padding-top: 2px;
  position: relative
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content[data-v-2e658a64] {
  position: relative;
  font-size: 14px
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content[data-v-2e658a64]:first-child {
  margin-top: 0 !important
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content[data-v-2e658a64]:last-child {
  padding-bottom: 0
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .module_tit[data-v-2e658a64] {
  line-height: 20px;
  height: 25px;
  font-size: 15px;
  font-weight: 400;
  color: #333;
  font-size: 18px;
  overflow: hidden;
  border-bottom: 1px solid #666;
  white-space: nowrap
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .module_tit span[data-v-2e658a64] {
  font-weight: 700
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .content_list[data-v-2e658a64] {
  margin-top: 10px
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .content_list .list_top[data-v-2e658a64] {
  overflow: hidden;
  font-size: 14px
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .content_list .list_top li[data-v-2e658a64] {
  float: left;
  margin-right: 30px;
  line-height: 1.6;
  text-align: left;
  font-weight: 700
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .content_list .list_top li.name[data-v-2e658a64] {
  min-width: 260px;
  text-align: center;
  margin-right: 0
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .content_list .list_top li[data-v-2e658a64]:last-child {
  min-width: inherit;
  margin-right: 0;
  float: right
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .content_list .list_top li[data-v-2e658a64]:first-child {
  text-align: left;
  float: left;
  margin-left: 0;
  min-width: 160px
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .content_list .ql-editor[data-v-2e658a64] {
  margin-top: 5px;
  color: #555
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .jineng_list[data-v-2e658a64] {
  overflow: hidden
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .jineng_list li[data-v-2e658a64] {
  float: left;
  width: 33%;
  margin-top: 10px;
  position: relative
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .jineng_list li p[data-v-2e658a64] {
  display: block;
  width: 80%;
  font-size: 12px;
  color: #555;
  text-align: left;
  padding: 0;
  font-weight: 700
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .jineng_list li .shuliandu[data-v-2e658a64] {
  display: none;
  position: absolute;
  right: 20%;
  top: 0;
  width: 45px;
  font-size: 12px;
  line-height: 16px;
  color: #666
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .jineng_list li .jineng_progress[data-v-2e658a64] {
  width: 80%;
  height: 16px
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .tag_box[data-v-2e658a64] {
  font-size: 13px
}

.resume_all .pc_main .resume_box .resume_content_all .resume_content .tag_box span[data-v-2e658a64] {
  display: inline-block;
  margin: 5px 15px 5px 0;
  padding: 4px 13px;
  border-radius: 16px;
  z-index: 2;
  position: relative;
  border: 1px solid #eee;
  background-color: #eee;
  color: #555
}

.resume_all .pc_main .text_long .basic_info dt[data-v-2e658a64] {
  letter-spacing: 0 !important
}

.resume_all .pc_main .text_long .list_top li[data-v-2e658a64] {
  line-height: 1.6 !important;
  float: none !important;
  white-space: nowrap
}

.resume_all .pc_main .text_long .list_top li.name[data-v-2e658a64] {
  float: left !important;
  text-align: left !important;
  margin-left: 0 !important
}

.resume_all .pc_main .text_long .list_top li[data-v-2e658a64]:last-child {
  float: right !important
}

.resume_all .pc_main .text_long .list_top li[data-v-2e658a64]:nth-child(3) {
  text-align: right !important
}

.resume_all .pc_main .text_long .list_top li[data-v-2e658a64]:nth-last-child(3) {
  width: 100% !important
}

.resume_all .pc_main .text_long .list_top li[data-v-2e658a64]:first-child {
  float: left !important
}</style>
<style type="text/css">.qm_editor[data-v-73ef5012] {
                        background-color: #f3f4f6;
                        border-radius: 10px;
                        overflow: hidden;
                        border: 1px solid #ddd !important
                      }

.qm_editor[data-v-73ef5012]:hover {
  border-color: #1467cc !important
}

.qm_editor .quill-editor[data-v-73ef5012] {
  min-height: 130px;
  max-height: 188px;
  border: none;
  border-top: 1px solid #ddd !important;
  white-space: pre-wrap;
  overflow-y: scroll
}</style>
<style type="text/css">.qm_editor .ql-editor ol, .qm_editor .ql-editor ul {
                        padding-left: 0
                      }

.qm_editor .ql-editor.ql-blank:before {
  font-style: normal
}

.qm_editor .ql-toolbar {
  padding: 4px 8px
}

.qm_editor .ql-toolbar:after {
  content: "\529F\80FD\63D0\793A\FF1A\4F7F\7528\5DE5\5177\680F\4E4B\524D\FF0C\9700\8981\5148\9009\4E2D\8F93\5165\6846\7684\6587\5B57\3002";
  display: inline-block;
  vertical-align: middle;
  color: #999
}

.qm_editor .ql-toolbar.ql-snow {
  border: none;
  background-color: #f8f8f8
}

.qm_editor .ql-snow .ql-picker-options .ql-picker-item {
  padding: 0
}</style>
<style type="text/css">.change_muban .swiper-container[data-v-092e5628] {
                        opacity: 0;
                        z-index: -1;
                        padding: 20px;
                        width: 100%;
                        max-width: 132vh;
                        margin: 0 auto;
                        position: relative
                      }

.change_muban .swiper-container .swiper-slide[data-v-092e5628] {
  height: calc(100vh - 90px);
  -webkit-box-shadow: 0 4px 10px rgba(0, 0, 0, .3);
  box-shadow: 0 4px 10px rgba(0, 0, 0, .3);
  overflow: hidden
}

.change_muban .swiper-container .swiper-slide img[data-v-092e5628] {
  vertical-align: top
}

.change_muban .swiper-container .swiper-slide-active .win_bg[data-v-092e5628] {
  display: block
}

.change_muban .show_swiper[data-v-092e5628] {
  opacity: 1;
  z-index: 2
}

.change_muban .muban_tip[data-v-092e5628] {
  text-align: center;
  color: #f60;
  margin-top: 20px
}

.change_muban .muban_tip span[data-v-092e5628] {
  display: inline-block;
  width: 15%
}

.change_muban .muban_num[data-v-092e5628] {
  position: absolute;
  top: 10px;
  left: 50%;
  line-height: 40px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  font-size: 32px
}

.change_muban .win_bg[data-v-092e5628] {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  -webkit-transition: all .2s ease-out 0s;
  transition: all .2s ease-out 0s
}

.change_muban .win_bg[data-v-092e5628]:hover {
  background-color: rgba(0, 0, 0, .06)
}

.change_muban .win_bg:hover .btn_change[data-v-092e5628] {
  -webkit-transform: scale(1.2) translateY(-10%);
  transform: scale(1.2) translateY(-10%);
  opacity: 1
}

.change_muban .win_bg:hover .btn_create[data-v-092e5628] {
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1
}

.change_muban .win_bg .btn_change[data-v-092e5628] {
  bottom: 25%;
  -webkit-transform: scale(1) translateY(0);
  transform: scale(1) translateY(0)
}

.change_muban .win_bg .btn_change[data-v-092e5628], .change_muban .win_bg .btn_create[data-v-092e5628] {
  position: absolute;
  left: 50%;
  width: 200px;
  display: block;
  margin-left: -100px;
  height: 42px;
  line-height: 42px;
  padding: 0;
  -webkit-transition: all .2s ease-out 0s;
  transition: all .2s ease-out 0s;
  opacity: 0
}

.change_muban .win_bg .btn_create[data-v-092e5628] {
  bottom: 230px;
  background-image: -webkit-gradient(linear, left top, right top, color-stop(3%, #1467cc), to(#00c2ef)) !important;
  background-image: linear-gradient(90deg, #1467cc 3%, #00c2ef) !important;
  border-radius: 21px;
  -webkit-transform: scale(.5);
  transform: scale(.5);
  font-size: 20px
}

.change_muban .win_bg .btn_create_en[data-v-092e5628] {
  bottom: 160px
}

.change_muban .win_bg .btn_create_ja[data-v-092e5628] {
  bottom: 90px
}

.change_muban .win_bg .btn_create_ko[data-v-092e5628] {
  bottom: 20px
}

.change_muban .change_list_all[data-v-092e5628] {
  position: relative
}

.change_muban .btn_l[data-v-092e5628], .change_muban .btn_r[data-v-092e5628] {
  width: 100px;
  text-align: center;
  color: #fff;
  height: 40vh;
  line-height: 40vh;
  position: absolute;
  top: 30vh;
  background-color: rgba(0, 0, 0, .3);
  font-size: 50px
}

.change_muban .btn_l[data-v-092e5628]:hover, .change_muban .btn_r[data-v-092e5628]:hover {
  background-color: rgba(0, 0, 0, .6)
}

.change_muban .btn_l[data-v-092e5628] {
  left: 0
}

.change_muban .btn_r[data-v-092e5628] {
  right: 0
}

.change_muban .change_list_box[data-v-092e5628] {
  overflow: hidden
}

.change_muban .change_list_box .change_list[data-v-092e5628] {
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 20px;
  -webkit-transition: left .3s linear 0s;
  transition: left .3s linear 0s
}

.change_muban .change_list_box .change_list li[data-v-092e5628] {
  float: left;
  max-height: calc(100vh - 100px);
  overflow: hidden;
  border: 1px solid #ddd;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  margin: 0 15px;
  position: relative
}

.change_muban .change_list_box .change_list li img[data-v-092e5628] {
  vertical-align: top;
  max-height: calc(100vh - 100px)
}

.change_muban .tpl_list[data-v-092e5628] {
  position: relative;
  overflow-y: auto;
  max-height: 90vh;
  text-align: center
}

.change_muban .tpl_list li[data-v-092e5628] {
  display: inline-block;
  width: 350px;
  height: 490px;
  overflow: hidden;
  border: 1px solid #ddd;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  margin: 15px;
  position: relative;
  background-position: center 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #fff
}

.change_muban .tpl_list li img[data-v-092e5628] {
  vertical-align: top;
  width: 100%
}

.change_muban .lg_check_content[data-v-092e5628] {
  padding: 5px 30px
}

.change_muban .lg_check_content .lg_check_list[data-v-092e5628] {
  margin-bottom: 25px
}

.change_muban .lg_enter[data-v-092e5628] {
  width: 150px;
  font-size: 16px
}

@media screen and (max-width: 800px) {
  .change_muban .tpl_list li[data-v-092e5628] {
    width: 94%;
    max-height: 64vh;
    display: block;
    margin: 20px auto 0;
    background-size: 100% auto;
    -webkit-box-shadow: 0 2px 7px rgba(0, 0, 0, .2);
    box-shadow: 0 2px 7px rgba(0, 0, 0, .2)
  }

  .change_muban .tpl_list li .btn_change[data-v-092e5628] {
    -webkit-transform: scale(1.2) translateY(-10%);
    transform: scale(1.2) translateY(-10%);
    opacity: 1
  }

  .change_muban .tpl_list li .btn_create[data-v-092e5628] {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1
  }

  .change_muban .lg_check_content[data-v-092e5628] {
    padding: 5px 30px;
    overflow: hidden;
    margin-top: -30px
  }

  .change_muban .lg_check_content .lg_check_list[data-v-092e5628] {
    float: left;
    width: 50%;
    margin-right: 0;
    margin-top: 40px;
    margin-bottom: 0
  }
}</style>
<style type="text/css">.change_muban .el-dialog {
                        border-radius: 5px;
                        overflow: hidden
                      }

.change_muban .el-dialog .user_list .el-input__inner {
  height: 48px;
  line-height: 48px;
  padding-left: 45px
}

.change_muban .el-dialog .my-button-disabled {
  opacity: .2
}

.change_muban .el-dialog .el-dialog__footer {
  padding-bottom: 40px;
  text-align: center
}</style>
<style type="text/css">.review_all .review_list[data-v-2bb184da] {
                        padding-bottom: 30px;
                        text-align: center
                      }

.review_all .review_list p[data-v-2bb184da] {
  font-size: 15px
}

.review_all .review_list .fts[data-v-2bb184da] {
  font-size: 13px;
  padding: 0 25px
}

.review_all .review_list h4[data-v-2bb184da] {
  text-align: center;
  color: #f50;
  font-size: 20px
}

.review_all .review_list img[data-v-2bb184da] {
  border: 1px solid #ddd
}

.review_all .review_list .ptb0[data-v-2bb184da] {
  padding-top: 0;
  padding-bottom: 0
}</style>
<style type="text/css">.qm_chat[data-v-389bd0e2] {
                        -webkit-transition: all .3s ease-out 0s;
                        width: 10px;
                        height: 10px;
                        z-index: -1;
                        opacity: 0;
                        background-color: #f9f9f9;
                        position: fixed;
                        right: -10px;
                        bottom: -10px;
                        -webkit-box-shadow: 0 2px 20px rgba(0, 0, 0, .4);
                        box-shadow: 0 2px 20px rgba(0, 0, 0, .4);
                        border-radius: 6px;
                        cursor: default;
                        overflow: hidden
                      }

.qm_chat .chat_tit[data-v-389bd0e2] {
  padding: 12px 20px;
  background-color: #1467cc;
  color: #fff;
  line-height: 26px;
  font-size: 18px;
  position: relative
}

.qm_chat .chat_tit img[data-v-389bd0e2] {
  float: left;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid #fff
}

.qm_chat .chat_tit .btn_min[data-v-389bd0e2] {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transition: all .3s ease-out 0s
}

.qm_chat .chat_tit .btn_min i[data-v-389bd0e2] {
  cursor: pointer;
  display: block;
  width: 100%;
  height: 100%;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  -webkit-transition: all .3s ease-out 0s
}

.qm_chat .chat_tit .btn_min[data-v-389bd0e2]:hover {
  background-color: #11ce9f
}

.qm_chat .chat_tit .btn_min:hover i[data-v-389bd0e2] {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg)
}

.qm_chat .chat_box[data-v-389bd0e2] {
  margin: 3px 5px 0 20px;
  padding-bottom: 20px;
  padding-right: 18px;
  overflow-y: auto;
  color: #333;
  height: 357px
}

.qm_chat .chat_box[data-v-389bd0e2]::-webkit-scrollbar {
  width: 8px
}

.qm_chat .chat_box[data-v-389bd0e2]::-webkit-scrollbar-track {
  background-color: #eee;
  border-radius: 4px
}

.qm_chat .chat_box[data-v-389bd0e2]::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #d3d3d3
}

.qm_chat .chat_box .chat_def[data-v-389bd0e2] {
  text-align: center;
  padding: 15px 0;
  color: #888
}

.qm_chat .chat_box .chat_list[data-v-389bd0e2] {
  margin-top: 10px
}

.qm_chat .chat_box .chat_list .chat_list_t[data-v-389bd0e2] {
  font-size: 13px;
  color: #999
}

.qm_chat .chat_box .chat_list .chat_list_t span[data-v-389bd0e2] {
  margin-left: 10px
}

.qm_chat .chat_box .chat_list .chat_list_c[data-v-389bd0e2] {
  margin-top: 3px;
  padding: 6px 12px;
  background-color: rgba(19, 216, 167, .26);
  border-radius: 6px;
  display: inline-block
}

.qm_chat .chat_box .chat_me[data-v-389bd0e2] {
  text-align: right
}

.qm_chat .chat_box .chat_me .chat_list_c[data-v-389bd0e2] {
  text-align: left;
  background-color: #eee
}

.qm_chat .chat_enter[data-v-389bd0e2] {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90px;
  padding: 15px 20px;
  background-color: #fff;
  border-top: 1px solid #ddd;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  box-shadow: 0 0 5px rgba(0, 0, 0, .1)
}

.qm_chat .chat_enter .chat_enter_input[data-v-389bd0e2] {
  width: 80%;
  height: 60px;
  resize: none;
  outline: none;
  line-height: 19px
}

.qm_chat .chat_enter .chat_close_btn[data-v-389bd0e2], .qm_chat .chat_enter .chat_enter_btn[data-v-389bd0e2] {
  width: 60px;
  position: absolute;
  right: 20px;
  top: 15px
}

.qm_chat .chat_enter .chat_close_btn[data-v-389bd0e2] {
  display: none
}

.show_chat[data-v-389bd0e2] {
  width: 400px;
  height: 500px;
  opacity: 1;
  z-index: 20;
  right: 0;
  bottom: 0
}</style>
<style type="text/css">.qm_chat .chat_box a {
                        vertical-align: top;
                        color: #09c
                      }

.qm_chat .chat_box a:hover {
  color: #09c !important;
  text-decoration: underline
}

.qm_chat .chat_box .kefu_a {
  margin-left: 10px
}

@media screen and (max-width: 900px) {
  .show_chat {
    width: 100% !important;
    height: 100% !important;
    border-radius: 0 !important
  }

  .show_chat .chat_box {
    height: calc(100% - 182px) !important
  }

  .show_chat .chat_box .kefu_a {
    display: none
  }

  .show_chat .chat_enter {
    height: 130px !important
  }

  .show_chat .chat_enter textarea {
    height: 100px !important
  }

  .show_chat .chat_enter_btn {
    top: 25px !important
  }

  .show_chat .chat_close_btn {
    height: 26px;
    line-height: 26px;
    border-radius: 5px;
    text-align: center;
    background-color: #fcfcfc;
    border: 1px solid #ddd;
    color: #888;
    top: 78px !important;
    display: block !important
  }
}
</style>
